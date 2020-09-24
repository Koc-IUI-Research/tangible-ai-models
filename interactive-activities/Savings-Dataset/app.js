window.onload = function() {
    DataX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    DataY = [0, 200,400,600,800,1000,1200,1400,1600];
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: DataX,
            datasets: [{
                data: DataY,
                borderWidth: 1,
                label: "Birikim Miktarı",
                fill: false,
                borderColor: "rgb(0,0,0)",
                backgroundColor: "rgb(0,0,0)"
            }]
        },
        options: {
            responsive: false,  
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }); 
}