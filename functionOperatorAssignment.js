function basicMathematicsOperationDeterminer(firstNum, secondNum, operation){
    if(operation=="multiply"){
        return firstNum * secondNum;
    }else if(operation=="divide"){
        return firstNum / secondNum;
    }else if(operation=="sum"){
        return firstNum + secondNum;
    }else{
        console.log("This function cannot perform such task");
    }
}
console.log(basicMathematicsOperationDeterminer(4,5,"multiply"));
console.log(basicMathematicsOperationDeterminer(4,5,"divide"));
console.log(basicMathematicsOperationDeterminer(4,5,"sum"));