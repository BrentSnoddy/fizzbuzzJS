//starts or controller function
//get values from input
function getValues(){
    //get values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // parse into integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //we call fizzBuzz function
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //we call displayNumbers function
        displayData(fbArray);
    } 
    else{
        alert("Error! you must enter integers")
    }    
}
//logic function(s)
//generate numbers from start value til the end value
function fizzBuzz(fizzValue, buzzValue){
 
    let returnArray = [];
   //loop from 1-100
    for (let i = 1 ; i <= 100; i++) {
   //we need to check the current in 3 steps:

   //check to see if devisible by both (3 and 5)
   //check to see if divisible by 3
   //check to see if divisible by 5

        if (i % fizzValue == 0 && i % buzzValue == 0){
             returnArray.push("FizzBuzz");

        } else if(i % fizzValue == 0){
             returnArray.push("Fizz");

        } else if(i % buzzValue == 0){
            returnArray.push("Buzz");

        } else{
            returnArray.push(i);
        }

    }
    return returnArray;
}
    
//display or view function
//display numbers, even numbers in bold font
function displayData(fbArray){
    let tableBody = document.getElementById("results");

    let templateRow = document.getElementById("fbTemplate");
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index+=5){

        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index+1];
        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index+2];
        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index+3];
        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index+4];
        tableBody.appendChild(tableRow);
    }
}