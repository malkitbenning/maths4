
function simplePercBuilder(){

  var num = 5;
  var ans = 0;
  var qAndAs = [];
  for ( num = 5; num < 100; num=num+5) {

    for (var perc = 1; perc < 100; perc++) {
      ans = (perc / 100) * num;
      if (Number.isInteger(ans)) {
        var aVal = (perc + '% of ' + num + ' =;' + ans);
        qAndAs.push(aVal);
      }
    }
  }
  return qAndAs;
} // simplePercBuilder

function getRandomInteger(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
} // randomIntFromInterval

function buildRandomNumList(listSize){
  var randomNumList = [];
  for (var i = 0; i < listSize; i++) {

    var rndInt = getRandomInteger(0, 230);
    while (randomNumList.includes(rndInt)){
      rndInt = getRandomInteger(0, 230);
    } // while
    randomNumList.push(rndInt);
  }  // for
  return randomNumList;
} //buildRandomNumList

function buildFresh(){
  for (var i = 0; i < quantity; i++) {
    localStorage.setItem(i,possibles[randLst[i]]);
    var splitter = possibles[randLst[i]].split(";");
    var phraseId = "phrase" + (i+1);
    var ansId = "a" + (i+1);
    document.getElementById(phraseId).innerHTML = splitter[0];
    document.getElementById(ansId).value = splitter[1];
  }
} // buildFresh

function buildFromStorage(){
  for (var i = 0; i < localStorage.length; i++) {

    var splitter = localStorage.getItem(i).split(";");
    var phraseId = "phrase" + (i+1);
    var ansId = "a" + (i+1);
    document.getElementById(phraseId).innerHTML = splitter[0];
    document.getElementById(ansId).value = splitter[1];
  }
} // buildFromStorage

//
//              main logic
//
var quantity = 15;
var possibles = simplePercBuilder();
var randLst = buildRandomNumList(quantity);
if (localStorage.length == 0) {
  buildFresh();
} else {
  buildFromStorage();
}
