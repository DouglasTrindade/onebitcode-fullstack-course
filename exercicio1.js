const getScore = (score) => {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoreF = score < 60 && score >= 0;

  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A";
  } else if (scoreB) {
    scoreFinal = "B";
  } else if (scoreC) {
    scoreFinal = "C";
  } else if (scoreD) {
    scoreFinal = "D";
  } else if (scoreF) {
    scoreFinal = "F";
  } else {
    console.log("Nota Inválida!");
  }

  return scoreFinal;
};

console.log(getScore(100));
console.log(getScore(85));
console.log(getScore(71));
console.log(getScore(68));
console.log(getScore(59));
console.log(getScore(-1));
console.log(getScore(101));
