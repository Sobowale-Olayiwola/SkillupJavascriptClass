function solveThreeBasicMathOperation(firstNum, secondNum, operation){
    if ( operation === 'multiply' ){
        return firstNum * secondNum;
    }if ( operation === 'divide' ){
        return firstNum / secondNum;
    }if ( operation === 'sum' ){
        return firstNum + secondNum;
    }else{
        console.log('This function cannot perform such operation');
    }
}
console.log(solveThreeBasicMathOperation(4,5,'multiply')); //20
console.log(solveThreeBasicMathOperation(4,5,'divide')); //0.8
console.log(solveThreeBasicMathOperation(4,5,'sum')); //9
console.log(solveThreeBasicMathOperation(4,5,'wjrfjfgjg')); //This function cannot perform such task
