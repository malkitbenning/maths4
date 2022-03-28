const resultsList = document.getElementById('results')
let quest = "";
let qora = "";
let counter=0;
let correctCount=0;
let wrongCount=0;
let overallTotal = 0;
let correctPercent=0;
new URLSearchParams(window.location.search).forEach((value, name) => {
  qora = name.charAt(0);
  if (qora == "q") {
    counter=counter+1;
    quest = value;
  }
  if (qora == "a" && quest == value) {
    // resultsList.append(`${name}: ${value}`);
    correctCount = correctCount + 1;
    overallTotal = overallTotal + 1;

  }

  if (qora == "a" && quest != value) {
    wrongCount = wrongCount + 1;
    overallTotal = overallTotal + 1;

    var para = document.createElement("p");
    para.classList.add("wrong-num");
    var node = document.createTextNode(`Question (${counter}) `);
    para.appendChild(node);
    resultsList.append(para);

    para = document.createElement("p");
    para.classList.add("wrong-ans");
    node = document.createTextNode(`${quest} `);
    para.appendChild(node);
    resultsList.append(para);

    node = document.createTextNode('\u274C');
    para.appendChild(node);
    resultsList.append(para);
  }

})
resultsList.append(document.createElement('hr'));

var paraYou = document.createElement("p");
paraYou.classList.add("correct-num");
var nodeYou = document.createTextNode(`You got ${correctCount} correct out of ${overallTotal}`);
paraYou.appendChild(nodeYou);
resultsList.append(paraYou);

resultsList.append(document.createElement('br'));
correctPercent = Math.round((correctCount / overallTotal) * 100);



paraYou = document.createElement("p");
paraYou.classList.add("correct-num");
nodeYou = document.createTextNode(`${correctPercent} %`);
paraYou.appendChild(nodeYou);
resultsList.append(paraYou);

resultsList.append(document.createElement('br'));
