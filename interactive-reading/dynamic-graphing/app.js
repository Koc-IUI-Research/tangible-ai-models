window.onload = function(){
    DataX =[0,1,2,3,4,5,6,7,8,9,10];
    DataY = [0,1,2,3,4,5,6,7,8,9,10];
    const default_color = "rgb(147,147,147)";
    const red = "rgb(214,11,0)";
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: DataX,
            datasets: [{
                data: DataY,
                borderWidth: 1,
                label: "Y",
                fill: false,
                borderColor:"rgb(0,0,0)",
                backgroundColor:"rgb(0,0,0)"
            }]
        },
        options: {
            responsive:false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    const equation = document.getElementById("eq");
    const arrow = document.getElementById("enter");
    const body = document.body;
    let input = "Placeholder text";
    convertedInput =[];
    myChart.update();

    arrow.addEventListener('click',function(event){
        input = eq.value;
        console.log(input);
        Input();
    });
    function Input(){
        if(checkInput()){
            body.style.backgroundColor = default_color;
            for(let i = 0;i<11;i++){
                console.log(DataY[i]);
                let temp = DataX[i] * convertedInput[0];
                console.log("TEMP1"+temp);
                if(convertedInput[1] == 1) temp+= Number(convertedInput[2]);
                else temp-= Number(convertedInput[2]);
                DataY[i] = temp;
                console.log(DataY[i]);
            }
            myChart.update();
        }
        else{
            body.style.backgroundColor = red;
        }
    function checkInput(){
        let temp = input.split("");
        let xIndex = temp.indexOf("x");
        if(xIndex == -1){
            console.log("0");
            return false;
        } 
        else if(temp.indexOf("+") != -1 && temp.indexOf("-") != -1){
            console.log("1");
            console.log("X position: " + xIndex);
            return false;
        } 
        else{
            let xDigits = "";
            let yDigits = "";
            for(let i = 0;i<xIndex;i++){
                if(temp[i] >= '0' && temp[i] <'9') xDigits = xDigits + temp[i];
                else{
                    console.log("112");
                    console.log(temp[i]);
                    return false;
                } 
            }
            for(let i = xIndex+2;i<temp.length;i++){
                if(temp[i] >= '0' && temp[i] <'9') yDigits = yDigits + temp[i];
                else{
                    console.log("12");
                    return false;
                } 
            }
            let choice = -1;
            if (temp[xIndex+1] == '+') choice = 1;
            else choice = 0;
            if(xIndex == 0) xDigits = 1;
            convertedInput = [Number(xDigits),choice,Number(yDigits)];
            console.log("input"+ convertedInput);
            console.log("success");
            return true;
        }
    }
    }


}
