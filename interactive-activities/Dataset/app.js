window.onload = function() {
    DataY = [{ x: 130, y: 325000 }, { x: 110, y: 286000 }, { x: 180, y: 468000 }, { x: 140, y: 294000 }, { x: 260, y: 624000 }, { x: 150, y: 405000 }, { x: 280, y: 644000 }, { x: 140, y: 364000 }, { x: 260, y: 520000 }, { x: 170, y: 340000 }, { x: 140, y: 294000 }, { x: 200, y: 460000 }, { x: 300, y: 870000 }, { x: 190, y: 475000 }, { x: 110, y: 319000 }, { x: 240, y: 504000 }, { x: 190, y: 551000 }, { x: 260, y: 754000 }, { x: 250, y: 700000 }, { x: 300, y: 660000 }, { x: 220, y: 484000 }, { x: 140, y: 322000 }, { x: 290, y: 638000 }, { x: 120, y: 276000 }, { x: 110, y: 253000 }, { x: 260, y: 754000 }, { x: 210, y: 441000 }, { x: 130, y: 377000 }, { x: 140, y: 294000 }, { x: 120, y: 288000 }, { x: 290, y: 580000 }, { x: 150, y: 330000 }, { x: 300, y: 870000 }, { x: 160, y: 448000 }, { x: 300, y: 870000 }, { x: 180, y: 432000 }, { x: 230, y: 552000 }, { x: 120, y: 240000 }, { x: 140, y: 364000 }, { x: 120, y: 324000 }, { x: 270, y: 675000 }, { x: 300, y: 690000 }, { x: 230, y: 575000 }, { x: 270, y: 756000 }, { x: 290, y: 580000 }, { x: 120, y: 348000 }, { x: 150, y: 360000 }, { x: 150, y: 360000 }, { x: 290, y: 812000 }, { x: 130, y: 260000 }];
    var ctx = document.getElementById('myChart');
    console.log(DataY.length);
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                data: DataY,
                borderWidth: 1,
                label: "Ev Fiyatı/m² Oranı",
                fill: false,
                borderColor: "rgb(0,0,0)",
                backgroundColor: "rgb(0,0,0)"
            }]
        },
        options: {
            responsive: true,  
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes:[{
                    type: 'linear',
                }] 
            }
        }
    }); 
}