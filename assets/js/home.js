setActivePage('nav_home');
document.getElementById('stats-generator').click();

if(document.querySelector('.jscolor').value == '000000') {
    document.getElementById('off-button').classList.add('disabled');
    document.getElementById('set-default-button').classList.add('disabled');
} else {
    document.getElementById('off-button').classList.remove('disabled');
    document.getElementById('set-default-button').classList.remove('disabled'); 
}

function submit(setDefault=false, useDefault=false, turnOff=false) {
    if (setDefault) {
        document.getElementById('set-as-default').checked = true;
    }

    if (useDefault) {
        document.getElementById('change-to-default').checked = true;
    }

    if (turnOff) {
        document.getElementById('turn-off').checked = true;
    }    

    document.getElementById('color-form').submit();
}

var data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:['#123412', '#99ff99', '#111111']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
}


function analyze(temperatureData, humidityData, onData) {
    console.log(humidityData);
    var temperatureRenderData = {
        datasets: [{
            data: temperatureData,
            backgroundColor: ['#13763f', '#54a06b', '#b3d264']
        }],
        labels: ['Hot', 'Comfortable', 'Cold']
    };

    var humidityRenderData = {
        datasets: [{
            data: humidityData,
            backgroundColor: ['#13763f', '#54a06b', '#b3d264']
        }],
        labels: ['Humid', 'Comfortable', 'Dry']
    };

    var onRenderData = {
        datasets: [{
            data: onData,
            backgroundColor: ['#13763f', '#54a06b']
        }],
        labels: ['On', 'Off']
    };

    renderChart(document.getElementById('temperature-chart'), temperatureRenderData)
    renderChart(document.getElementById('humidity-chart'), humidityRenderData)
    renderChart(document.getElementById('on-chart'), onRenderData)

}

function renderChart(ctx, data) {

    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            legend: {
                display: false
            }
        }
    });
    
}