let chart;

function calculateCarbon() {

    const travel = parseFloat(document.getElementById("travel").value);
    const electricity = parseFloat(document.getElementById("electricity").value);
    const diet = parseFloat(document.getElementById("diet").value);

    const travelEmission = travel * 0.21;
    const electricityEmission = electricity * 0.5;
    const total = travelEmission + electricityEmission + diet;

    document.getElementById("result").innerText =
        total.toFixed(2) + " kg CO₂ / day";

    calculateEcoScore(total);
    generateForecast(total);
    generateRecommendations(travel, electricity, diet);
}

function calculateEcoScore(total) {
    let score = 100 - (total * 2);
    if (score < 0) score = 0;
    document.getElementById("ecoscore").innerText =
        "Eco Score: " + Math.round(score);
}

function generateForecast(dailyEmission) {

    const monthly = dailyEmission * 30;

    const data = [];
    for (let i = 1; i <= 12; i++) {
        data.push(monthly * i);
    }

    const ctx = document.getElementById("forecastChart");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1M","2M","3M","4M","5M","6M","7M","8M","9M","10M","11M","12M"],
            datasets: [{
                label: 'Projected CO₂ (kg)',
                data: data,
                borderColor: 'green',
                fill: false
            }]
        }
    });
}

function generateRecommendations(travel, electricity, diet) {

    const list = document.getElementById("recommendations");
    list.innerHTML = "";

    if (travel > 10)
        list.innerHTML += "<li>Reduce car travel by 20% to save ~150 kg CO₂/year</li>";

    if (electricity > 5)
        list.innerHTML += "<li>Optimize AC usage to save ~200 kg CO₂/year</li>";

    if (diet > 2)
        list.innerHTML += "<li>Switch to vegetarian meals to save ~300 kg CO₂/year</li>";

    if (list.innerHTML === "")
        list.innerHTML = "<li>Great job! Your carbon footprint is already optimized.</li>";
}