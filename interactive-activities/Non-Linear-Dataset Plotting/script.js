window.onload = function() {
    Data = [{ x: 130, y: 25000 },{ x: 110, y: 15000 },{ x: 180, y: 18000 },{ x: 140, y: 11000 },{ x: 260, y: 6000 },{ x: 150, y: 15000 },{ x: 280, y: 14000 },{ x: 140, y: 3000 },{ x: 260, y: 2000 },{ x: 170, y: 26000 },{ x: 140, y: 13000 },{ x: 200, y: 28000 },{ x: 300, y: 8000 },{ x: 190, y: 13000 },{ x: 110, y: 11000 },{ x: 240, y: 9000 },{ x: 190, y: 17000 },{ x: 260, y: 4000 },{ x: 250, y: 8000 },{ x: 300, y: 6000 },{ x: 220, y: 7000 },{ x: 140, y: 21000 },{ x: 290, y: 40000 },{ x: 120, y: 22000 },{ x: 110, y: 20000 },{ x: 260, y: 5000 },{ x: 210, y: 27000 },{ x: 130, y: 19000 },{ x: 140, y: 14000 },{ x: 120, y: 1000 },{ x: 290, y: 2000 },{ x: 150, y: 6000 },{ x: 300, y: 9000 },{ x: 160, y: 8000 },{ x: 300, y: 12000 },{ x: 180, y: 16000 },{ x: 230, y: 14000 },{ x: 120, y: 7000 },{ x: 140, y: 17000 },{ x: 120, y: 10000 },{ x: 270, y: 12000 },{ x: 300, y: 29000 },{ x: 230, y: 4000 },{ x: 270, y: 20000 },{ x: 290, y: 39000 },{ x: 120, y: 14000 },{ x: 150, y: 7000 },{ x: 150, y: 16000 },{ x: 290, y: 9000 },{ x: 130, y: 26000 }];
    var ctx = document.getElementById('myChart');
    DataY = [];
    Labels = [100,120,140,160,180,200,220,240,260,280,300];
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: Labels,
            datasets: [{
                data: DataY,
                borderWidth: 1,
                type: 'line',
                label: "Grafiğin",
                fill: false,
                borderColor: "#3b6072",
                backgroundColor: "#3b6072"
            },{
                type: 'scatter',
                data: Data,
                borderWidth: 1,
                order: 2,
                label: "Ev Fiyatı/m² Oranı ",
                fill: true,
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
                }],
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    }); 

const equation = document.getElementById("eq");
const arrow = document.getElementById("enter");
const text = document.getElementById("text");
const body = document.body;
const default_color = "rgb(183,180,198)";
const red = "rgb(183,62,62)";
const vic = "rgb(120,229,114)";
let input = "";
convertedInput = [];
myChart.update();

let inputCount = 0;

arrow.addEventListener('click', function(event) {
    input = eq.value;
    console.log(input);
    Input(); 
});

function Input() {
    if(checkInput()){
        inputCount++;
        DataY = [];
        body.style.backgroundColor = default_color;
        for(let i = 0;i<Labels.length;i++){
            DataY[i] = convertedInput[0] * Labels[i];
            if(convertedInput[1]) DataY[i] += convertedInput[2];
            else DataY[i] -= convertedInput[2];
        }
        DataY.sort(function(a, b){return a-b});
        myChart.data.datasets[0].data = DataY;
        myChart.update();
        console.log(convertedInput);
        if(inputCount>=3){
            body.style.backgroundColor = vic;
            text.innerText = "Gördüğün, üzere yeterince iyi ifade edemiyoruz.";
        }
    }
    else{
        body.style.backgroundColor = red;
    }
}

function checkInput(){
    let temp = input.split("");
    let xIndex = temp.indexOf("x");
    let plusIndex = temp.indexOf("+");
    let minusIndex = temp.indexOf("-");
    let x = "";
    let constant = "";
    let found = false;
    if(plusIndex== -1 && minusIndex == -1 && xIndex != -1){
        for(let i = 0;i<xIndex; i++){
            if((temp[i]>= "0" && temp[i]<= "9") || temp[i] == "."){
                if(temp[i] == "." && found){
                    console.log("Extra '.' added");
                    return false;
                }
                else{
                    x += temp[i];
                    if(temp[i] == ".") found = true;
                }
            }
            else{
                console.log("Illegal character");
                return false;
            }
        }
        found = false;
        convertedInput[0] = parseFloat(x);
        convertedInput[1] = 1;
        convertedInput[2] = 0;
        return true;
    }
    else if((plusIndex != -1 || minusIndex != -1) && xIndex != -1){
        for(let i = 0;i<xIndex; i++){
            if((temp[i]>= "0" && temp[i]<= "9") || temp[i] == "."){
                if(temp[i] == "." && found){
                    console.log("Extra '.' added");          
                    return false;
                } 
                else{
                    x += temp[i];
                    if(temp[i] == ".") found = true;
                }
            }
            else{
                console.log("Illegal character");     
                return false;
            }
        }
        found = false;
        for(let i = xIndex+2;i<temp.length; i++){
            if((temp[i]>= "0" && temp[i]<= "9") || temp[i] == "."){
                if(temp[i] == "." && found){
                    console.log("extra '.' added")
                    return false;
                } 
                else{
                    constant += temp[i];
                    if(temp[i] == ".") found = true;
                }
            }
            else{
                console.log("Illegal character");
                return false;
            } 
        }
        if(plusIndex != -1) convertedInput[1] = 1;
        else convertedInput[1] = 0;
        convertedInput[0] = parseFloat(x);
        convertedInput[2] = parseFloat(constant);
        return true;
    }
}

}

