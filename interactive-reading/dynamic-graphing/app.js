window.onload = function(){
    DataX =[0,1,2,3,4,5,6,7,8,9,10];
    DataY = [];
    const default_color = "rgb(87,189,130)";
    const red = "rgb(214,11,0)";
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: DataY,
                borderWidth: 1,
                label: "Y"
            },{
                data: DataX,
                borderWidth: 1,
                label: "X"
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
    DataY = [1,2,3,4,5];
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
                let temp = DataX * Number(convertedInput[0]);
                if(convertedInput[1] == 1) temp+= Number(convertedInput[2]);
                else temp-= Number(convertedInput[2]);
                DataY[i] = temp;
            }
            myChart.update();
        }
        else{
            body.style.backgroundColor = red;
        }
    function checkInput(){
        let temp = input.split("");
        let xIndex = temp.indexOf("x");
        console.log("this is x:" + temp[xIndex + 1]);
        if(xIndex == -1){
            console.log("0");
            return false;
        } 
        else if(temp[xIndex + 1] == '+' || temp[xIndex+1] == '-'){
            console.log("1");
            console.log("X position: " + xIndex);
            return false;
        } 
        else{
            let xDigits = "";
            let yDigits = "";
            for(let i = 0;i<xIndex;i++){
                if(temp[i] > '0' && temp[i] <'9') xDigits = xDigits + temp[i];
                else{
                    console.log("2");
                    return false;
                } 
            }
            for(let i = xIndex+2;i<temp.length;i++){
                if(temp[i] > '0' && temp[i] <'9') yDigits = yDigits + temp[i];
                else{
                    console.log("2");
                    return false;
                } 
            }
            let choice = -1;
            if (temp[xIndex+1] == '+') choice = 1;
            else choice = 0;
            convertedInput.push(xDigits,choice,yDigits);
            console.log("success");
            return true;
        }
    }
    }


}
