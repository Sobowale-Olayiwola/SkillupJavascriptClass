function checkGrade(score){
  if (score >= 75 && score <=100){
    let grade = "A";
    return grade;
  }else if (score >= 60 && score < 75){
    let grade = "B";
    return grade;
  }else if (score >= 50 && score < 60){
    let grade = "C";
    return grade;
  }else if (score >= 45 && score < 50){
    let grade = "D";
    return grade;
  }else if (score >= 40 && score < 45){
    let grade = "E";
    return grade;
  }else if (score >= 0 && score < 40){
    let grade = "F";
    return grade;
  }else{
    let grade = "Please put in a correct score to determine your grade";
    return grade;
  }
}
checkGrade(0);
checkGrade(55);
checkGrade(150);

