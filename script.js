let mathFormular = "";
let mathResult = "";

const logoDark = document.getElementById('logoDark');
const logoLight = document.getElementById('logoLight');

iconDark.addEventListener('click', handleDarkModeClick);
iconLight.addEventListener('click', handleLightModeClick);

function handleDarkModeClick(){
 
    var htmlElement = document.querySelector("html");
    htmlElement.classList.add("dark");

    // Beim Darkmode werden die derzeitigen Icons ausgeblendet
    iconDark.classList.add('hidden');
    logoDark.classList.add('hidden');

    // und gegen helle Icons ersetzt
    iconLight.classList.remove('hidden');
    logoLight.classList.remove('hidden');
}

function handleLightModeClick(){

    var htmlElement = document.querySelector("html");
    htmlElement.classList.remove("dark");

    // Beim Lightmode werden die Icons wieder ausgeblendet
    iconLight.classList.add('hidden');
    logoLight.classList.add('hidden');
    
    // Und die Icons für die helle Ansicht werden eingeblendet
    iconDark.classList.remove('hidden');
    logoDark.classList.remove('hidden');
}

// Clear 
function clearResult(){
  mathResult = "";
  mathFormular = "";
  getFormular();
  getResult();
}

// Mathematische Operationen
// Negieren
function negate(){
  mathResult = mathResult * -1;
  mathFormular += '* -1';
  getFormular();
}

// Fließkommazahl
function float(e){
}
const formular = document.getElementById('formular');
// // Formel ausgeben 
function getFormular(){
  formular.innerHTML = mathFormular;
   return;
}

const allActionButtons = document.getElementsByClassName('grid-el');
// starte bei null, durchlaufe das Array in der ganzen Länge
for (let index = 0; index < allActionButtons.length; index++) {
  // "button" gleichsetzen mit der Position in dem Array
  const button = allActionButtons[index];
  // Element an der Stelle "index" z.B. 0 -> clickevent: Funktion handleActionButtonClick ausführen 
  button.addEventListener('click', handleActionButtonClick);
}

function handleActionButtonClick(event){

  buttonId = event.target.id;
  // button id == 0,1,2,3,4,5,6,7,8,9,+,-,/,*,%,=,Comma,clear,negation
  if(buttonId === 'clear'){

    clearResult();

  } else if(buttonId === 'negation') {

    negate();

  } else if(buttonId === '=') {

    getResult();
    mathFormular += buttonId;
    getFormular();

  } else if( buttonId === '.'){

    if(mathResult.includes('.')) {

      getFormular();

    } else {

      mathResult += buttonId;
      mathFormular += buttonId;
      getFormular();

    }
  } else {

    // Wenn die vorherige Zahl Null ist, wird es bei der Eingabe einer Zahl überschrieben
    if( mathResult === '0') {

      buttonId = mathResult;

    } else {

      mathResult += buttonId;
      mathFormular += buttonId;
      getFormular();

    }
  }
}

// Ergebnis ausgeben
const result = document.getElementById('result');

function getResult(){
  const calculatedResult = eval(mathResult);
  if(calculatedResult){
    // ToLocaleString erkennt die jeweilige Zahltrennung, bspw. in Deutschland
    result.innerHTML = `
    <p>${calculatedResult.toLocaleString('de-DE')}</p>
    `; 
  }else{
    result.innerHTML = `
    <p>${0}</p>
   `; 
  }
}