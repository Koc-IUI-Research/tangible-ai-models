window.onload = function() {
    DataX = [100,120,140,160,180,200,220,240,260,280,300];
    DataY = [];
    Data = [{ x: 130, y: 325000 }, { x: 110, y: 286000 }, { x: 180, y: 468000 }, { x: 140, y: 294000 }, { x: 260, y: 624000 }, { x: 150, y: 405000 }, { x: 280, y: 644000 }, { x: 140, y: 364000 }, { x: 260, y: 520000 }, { x: 170, y: 340000 }, { x: 140, y: 294000 }, { x: 200, y: 460000 }, { x: 300, y: 870000 }, { x: 190, y: 475000 }, { x: 110, y: 319000 }, { x: 240, y: 504000 }, { x: 190, y: 551000 }, { x: 260, y: 754000 }, { x: 250, y: 700000 }, { x: 300, y: 660000 }, { x: 220, y: 484000 }, { x: 140, y: 322000 }, { x: 290, y: 638000 }, { x: 120, y: 276000 }, { x: 110, y: 253000 }, { x: 260, y: 754000 }, { x: 210, y: 441000 }, { x: 130, y: 377000 }, { x: 140, y: 294000 }, { x: 120, y: 288000 }, { x: 290, y: 580000 }, { x: 150, y: 330000 }, { x: 300, y: 870000 }, { x: 160, y: 448000 }, { x: 300, y: 870000 }, { x: 180, y: 432000 }, { x: 230, y: 552000 }, { x: 120, y: 240000 }, { x: 140, y: 364000 }, { x: 120, y: 324000 }, { x: 270, y: 675000 }, { x: 300, y: 690000 }, { x: 230, y: 575000 }, { x: 270, y: 756000 }, { x: 290, y: 580000 }, { x: 120, y: 348000 }, { x: 150, y: 360000 }, { x: 290, y: 812000 }, { x: 130, y: 260000 }];
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type:'bar',
        data: {
            datasets: [{
                type: 'line',
                data: DataY,
                fill: false,
                borderWidth: 5,
                order: 1,
                pointBorderWith: 2,
                pointerBorderColor: "#8e5ea2",
                borderColor: "#8e5ea2",
                label: "Girdi",

            },{
                type: 'scatter',
                data: Data,
                borderWidth: 1,
                order: 2,
                label: "Ev Fiyatı/m² Oranı ",
                fill: true,
                borderColor: "rgb(0,0,0)",
                backgroundColor: "rgb(0,0,0)"
            }],

        },
        options: {
            responsive: false,  
            scales: {
                yAxes: [{
                    stacked: true
                }],
                xAxes:[{
                    type: 'linear',
                }] 
            }
        }
    }); 

const equation = document.getElementById("eq");
const arrow = document.getElementById("enter");
const body = document.body;
const default_color = "rgb(183,180,198)";
const red = "rgb(183,62,62)";
let input = "";
convertedInput = [];
myChart.update();

arrow.addEventListener('click', function(event) {
    input = eq.value;
    console.log(input);
    Input(); 
});

function Input() {
    if(checkInput()){
        DataY = [];
        body.style.backgroundColor = default_color;
        for(let i = 0;i<Data.length;i++){
            DataY[i] = convertedInput[0] * Data[i].x;
            if(convertedInput[1]) DataY[i] += convertedInput[2];
            else DataY[i] -= convertedInput[2];
            console.log(DataY[i]);
        }
        myChart.data.datasets[0].data = DataY;
        myChart.update();
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

