window.onload = function() {
    DataY = [{ x: 130, y: 25000 },{ x: 110, y: 15000 },{ x: 180, y: 18000 },{ x: 140, y: 11000 },{ x: 260, y: 6000 },{ x: 150, y: 15000 },{ x: 280, y: 14000 },{ x: 140, y: 3000 },{ x: 260, y: 2000 },{ x: 170, y: 26000 },{ x: 140, y: 13000 },{ x: 200, y: 28000 },{ x: 300, y: 8000 },{ x: 190, y: 13000 },{ x: 110, y: 11000 },{ x: 240, y: 9000 },{ x: 190, y: 17000 },{ x: 260, y: 4000 },{ x: 250, y: 8000 },{ x: 300, y: 6000 },{ x: 220, y: 7000 },{ x: 140, y: 21000 },{ x: 290, y: 40000 },{ x: 120, y: 22000 },{ x: 110, y: 20000 },{ x: 260, y: 5000 },{ x: 210, y: 27000 },{ x: 130, y: 19000 },{ x: 140, y: 14000 },{ x: 120, y: 1000 },{ x: 290, y: 2000 },{ x: 150, y: 6000 },{ x: 300, y: 9000 },{ x: 160, y: 8000 },{ x: 300, y: 12000 },{ x: 180, y: 16000 },{ x: 230, y: 14000 },{ x: 120, y: 7000 },{ x: 140, y: 17000 },{ x: 120, y: 10000 },{ x: 270, y: 12000 },{ x: 300, y: 29000 },{ x: 230, y: 4000 },{ x: 270, y: 20000 },{ x: 290, y: 39000 },{ x: 120, y: 14000 },{ x: 150, y: 7000 },{ x: 150, y: 16000 },{ x: 290, y: 9000 },{ x: 130, y: 26000 }];
    var ctx = document.getElementById('myChart');
    console.log(DataY.length);
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                data: DataY,
                borderWidth: 1,
                label: "m² / İşe Uzaklık Oranı",
                fill: false,
                borderColor: "rgb(0,0,0)",
                backgroundColor: "rgb(0,0,0)"
            }]
        },
        options: {
            responsive: false,  
            scales: {
                xAxes:[{
                    type: 'linear',
                }] 
            }
        }
    }); 
}