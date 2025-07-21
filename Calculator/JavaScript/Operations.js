let newLine = true; //Determine if next input should be on new line
let value1;
let currentOperator;

//Receive btn pressed & display output
function digitButtonPressed(button){
    //Rmve 0 from init display
    if(newLine){
        document.getElementById("inputBox").value = button;
        newLine = false;//--->if line is false, concatanates inputs
    }else{
        let currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }       
}

//Clear dispay on AC click
function btnACPressed(){
    document.getElementById("inputBox").value = 0;
    newLine = true;
}

//Event handler for operations
function operatorButtonPressed(operator){
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
}

//Event handler for equals
function equalsButtonPressed(){
    let value2 = parseInt(document.getElementById("inputBox").value);
    let finalTotal;

    switch(currentOperator){
        case "+":
            finalTotal = value1 + value2;
            break;
        case "-":
            finalTotal = value1 - value2;
            break;
        case "x":
            finalTotal = value1 * value2;
            break;
        case "/":
            finalTotal = value1 / value2;
            break;
    }
    document.getElementById("inputBox").value =finalTotal
    
    //preps calculator for new operations
    value1 = 0;
    newLine = true;
}