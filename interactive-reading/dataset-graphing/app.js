window.onload = function() {
    DataX = [100, 150, 200, 250, 300];
    DataY = [];
    DataSet = [{ x: 130, y: 325000 }, { x: 110, y: 286000 }, { x: 180, y: 468000 }, { x: 140, y: 294000 }, { x: 260, y: 624000 }, { x: 150, y: 405000 }, { x: 280, y: 644000 }, { x: 140, y: 364000 }, { x: 260, y: 520000 }, { x: 170, y: 340000 }, { x: 140, y: 294000 }, { x: 200, y: 460000 }, { x: 300, y: 870000 }, { x: 190, y: 475000 }, { x: 110, y: 319000 }, { x: 240, y: 504000 }, { x: 190, y: 551000 }, { x: 260, y: 754000 }, { x: 250, y: 700000 }, { x: 300, y: 660000 }, { x: 220, y: 484000 }, { x: 140, y: 322000 }, { x: 290, y: 638000 }, { x: 120, y: 276000 }, { x: 110, y: 253000 }, { x: 260, y: 754000 }, { x: 210, y: 441000 }, { x: 130, y: 377000 }, { x: 140, y: 294000 }, { x: 120, y: 288000 }, { x: 290, y: 580000 }, { x: 150, y: 330000 }, { x: 300, y: 870000 }, { x: 160, y: 448000 }, { x: 300, y: 870000 }, { x: 180, y: 432000 }, { x: 230, y: 552000 }, { x: 120, y: 240000 }, { x: 140, y: 364000 }, { x: 120, y: 324000 }, { x: 270, y: 675000 }, { x: 300, y: 690000 }, { x: 230, y: 575000 }, { x: 270, y: 756000 }, { x: 290, y: 580000 }, { x: 120, y: 348000 }, { x: 150, y: 360000 }, { x: 150, y: 360000 }, { x: 290, y: 812000 }, { x: 130, y: 260000 }];
    const default_color = "rgb(147,147,147)";
    const red = "rgb(214,11,0)";
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: DataX,
            datasets: [{
                data: DataSet,
                borderWidth: 1,
                label: "Veri Seti",
                fill: false,
                borderColor: "rgb(0,0,0)",
                backgroundColor: "rgb(0,0,0)"
            }, {
                label: "Grafiğin",
                data: DataX,
                type: 'line'
            }]
        },
        options: {
            responsive: true,
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
    convertedInput = [];
    myChart.update();

    arrow.addEventListener('click', function(event) {
        input = eq.value;
        console.log(input);
        Input();
    });

    function Input() {
        if (checkInput()) {
            body.style.backgroundColor = default_color;
            for (let i = 0; i < 11; i++) {
                console.log(DataY[i]);
                let temp = DataX[i] * convertedInput[0];
                console.log("TEMP1" + temp);
                if (convertedInput[1] == 1) temp += Number(convertedInput[2]);
                else temp -= Number(convertedInput[2]);
                DataY[i] = temp;
                console.log(DataY[i]);
            }
            myChart.update();
        } else {
            body.style.backgroundColor = red;
        }

        function checkInput() {
            let temp = input.split("");
            let xIndex = temp.indexOf("x");
            if (xIndex == -1) {
                return false;
            } else if (temp.indexOf("+") != -1 && temp.indexOf("-") != -1) {
                return false;
            } else {
                let xDigits = 0;
                let yDigits = 0;
                let isDecimal = false;
                let decimalcounter = 0;
                for (let i = 0; i < xIndex; i++) {
                    if (temp[i] == '.') {
                        isDecimal = true;
                        continue;
                    }
                    if ((temp[i] >= '0' && temp[i] < '9') || isDecimal) {
                        if (isDecimal) {
                            decimalcounter++;
                            xDigits += Number(temp[i]) * Math.pow(10, -decimalcounter);
                            console.log("XDIGITS: " + xDigits);
                        } else {
                            xDigits += Number(temp[i]);
                        }
                    } else {
                        console.log("112");
                        console.log(temp[i]);
                        return false;
                    }
                }
                isDecimal = false;
                decimalcounter = 0;
                for (let i = xIndex + 2; i < temp.length; i++) {
                    if (temp[i] == '.') {
                        isDecimal = true;
                    } else if (temp[i] >= '0' && temp[i] < '9') {
                        if (isDecimal) {
                            decimalcounter++;
                            yDigits += Number(temp[i]) * Math.pow(10, -decimalcounter);
                        } else {
                            yDigits = yDigits + Number(temp[i]);
                        }
                    } else {
                        console.log("12");
                        return false;
                    }
                }
                let choice = -1;
                if (temp[xIndex + 1] == '+') choice = 1;
                else choice = 0;
                if (xIndex == 0) xDigits = 1;
                convertedInput = [xDigits, choice, yDigits];
                console.log("input" + convertedInput);
                console.log("success");
                return true;
            }
        }
    }


}