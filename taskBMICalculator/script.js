let height = document.getElementById("height");
let weight = document.getElementById("weight");
let result = document.getElementById("result");
let resultSts = document.getElementById("resultSts");


height.addEventListener("change", appendHeight);
weight.addEventListener("change", appendWeight);

function appendHeight(){
    height=height.value;
    heightInMeter = (height / 100)
    console.log(heightInMeter)
}
function appendWeight(){
    weight = weight.value;
    console.log(weight);
}
function getBMI(){
    res = Math.round(weight/(heightInMeter * heightInMeter))
    result.textContent = `Your weight is ${res}`;
    console.log(result.textContent);
    if(res<18){
        resultSts.textContent =`You are Underweight`;
    }
    else if (res >=18 && res<25 ){
        resultSts.textContent = `You are Healthy Weight`;
    }
    else if(res>=25 && res< 29){
        resultSts.textContent =  `You are Overweight`;
    }
    else if(res > 30 && res <= 40){
        resultSts.textContent =  `You are Obese`;
    }
    else if(res > 40){
        resultSts.textContent =  `You are Severely Obese`;
    }
}

function clear(){
    alert("sure to clear");
}