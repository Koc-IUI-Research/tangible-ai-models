window.onload = function() {
    DataX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    DataY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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