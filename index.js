const calcBody = document.createElement('div');
calcBody.classList.add('calculator-body');
document.body.appendChild(calcBody);


const mainContainer = document.createElement('div');
mainContainer.classList.add('container');
calcBody.appendChild(mainContainer);

const row = document.createElement('div');
row.classList.add('row')
mainContainer.appendChild(row);

const displayBlack = document.createElement('div');
displayBlack.classList.add('col-12');
displayBlack.setAttribute('id','display');
row.appendChild(displayBlack);

const displayText = document.createElement('p');
displayText.setAttribute('id','displayItem');
displayText.innerText = "0";
displayBlack.appendChild(displayText);

const rowTwo = document.createElement('div');
rowTwo.classList.add('row');
mainContainer.appendChild(rowTwo);

const rowTwoColOne = document.createElement('div');
rowTwoColOne.classList.add('col');
rowTwo.appendChild(rowTwoColOne);

const rowTwoButtonOne = document.createElement('button');
rowTwoButtonOne.setAttribute('class','operator btn btn-info');
rowTwoButtonOne.setAttribute('type','button');
rowTwoButtonOne.setAttribute('value','+');
rowTwoButtonOne.innerText = "+";
rowTwoColOne.appendChild(rowTwoButtonOne);


const rowTwoColTwo = document.createElement('div');
rowTwoColTwo.classList.add('col');
rowTwo.appendChild(rowTwoColTwo);

const rowTwoButtonTwo = document.createElement('button');
rowTwoButtonTwo.setAttribute('class','operator btn btn-info');
rowTwoButtonTwo.setAttribute('type','button');
rowTwoButtonTwo.setAttribute('value','-');
rowTwoButtonTwo.innerText = "-";
rowTwoColTwo.appendChild(rowTwoButtonTwo);


const rowTwoColThree = document.createElement('div');
rowTwoColThree.classList.add('col');
rowTwo.appendChild(rowTwoColThree);

const rowTwoButtonThree = document.createElement('button');
rowTwoButtonThree.setAttribute('class','operator btn btn-info');
rowTwoButtonThree.setAttribute('type','button');
rowTwoButtonThree.setAttribute('value','*');
rowTwoButtonThree.innerText = "*";
rowTwoColThree.appendChild(rowTwoButtonThree);

const rowTwoColFour = document.createElement('div');
rowTwoColFour.classList.add('col');
rowTwo.appendChild(rowTwoColFour);

const rowTwoButtonFour = document.createElement('button');
rowTwoButtonFour.setAttribute('class','operator btn btn-info');
rowTwoButtonFour.setAttribute('type','button');
rowTwoButtonFour.setAttribute('value','/');
rowTwoButtonFour.innerText = "/";
rowTwoColFour.appendChild(rowTwoButtonFour);

const rowTwoColFive = document.createElement('div');
rowTwoColFive.classList.add('col');
rowTwo.appendChild(rowTwoColFive);

const rowTwoButtonFive = document.createElement('button');
rowTwoButtonFive.setAttribute('class','operator btn btn-info');
rowTwoButtonFive.setAttribute('type','button');
rowTwoButtonFive.setAttribute('value','%');
rowTwoButtonFive.innerText = "%";
rowTwoColFive.appendChild(rowTwoButtonFive);


const rowThree = document.createElement('div');
rowThree.classList.add('row');
mainContainer.appendChild(rowThree);

const rowThreeCol = document.createElement('div');
rowThreeCol.setAttribute('class','col-9 main');
rowThree.appendChild(rowThreeCol);

const rowThreeRowOne = document.createElement('div');
rowThreeRowOne.classList.add('row');
rowThreeCol.appendChild(rowThreeRowOne);

const rowThreeRowOneColOne = document.createElement('div');
rowThreeRowOneColOne.classList.add('col');
rowThreeRowOne.appendChild(rowThreeRowOneColOne);


const rowThreeButtonOne = document.createElement('button');
rowThreeButtonOne.setAttribute('type','button');
rowThreeButtonOne.setAttribute('class','keys btn btn-light');
rowThreeButtonOne.setAttribute('value','7');
rowThreeButtonOne.innerText = '7'
rowThreeRowOneColOne.appendChild(rowThreeButtonOne);

const rowThreeRowOneColTwo = document.createElement('div');
rowThreeRowOneColTwo.classList.add('col');
rowThreeRowOne.appendChild(rowThreeRowOneColTwo);


const rowThreeButtonTwo = document.createElement('button');
rowThreeButtonTwo.setAttribute('type','button');
rowThreeButtonTwo.setAttribute('class','keys btn btn-light');
rowThreeButtonTwo.setAttribute('value','8');
rowThreeButtonTwo.innerText = '8'
rowThreeRowOneColTwo.appendChild(rowThreeButtonTwo);

const rowThreeRowOneColThree = document.createElement('div');
rowThreeRowOneColThree.classList.add('col');
rowThreeRowOne.appendChild(rowThreeRowOneColThree);


const rowThreeButtonThree = document.createElement('button');
rowThreeButtonThree.setAttribute('type','button');
rowThreeButtonThree.setAttribute('class','keys btn btn-light');
rowThreeButtonThree.setAttribute('value','9');
rowThreeButtonThree.innerText = '9'
rowThreeRowOneColThree.appendChild(rowThreeButtonThree);


///////

const rowThreeRowTwo = document.createElement('div');
rowThreeRowTwo.classList.add('row');
rowThreeCol.appendChild(rowThreeRowTwo);

const rowThreeRowTwoColOne = document.createElement('div');
rowThreeRowTwoColOne.classList.add('col');
rowThreeRowTwo.appendChild(rowThreeRowTwoColOne);


const rowThreeRowTwoButtonOne = document.createElement('button');
rowThreeRowTwoButtonOne.setAttribute('type','button');
rowThreeRowTwoButtonOne.setAttribute('class','keys btn btn-light');
rowThreeRowTwoButtonOne.setAttribute('value','4');
rowThreeRowTwoButtonOne.innerText = '4'
rowThreeRowTwoColOne.appendChild(rowThreeRowTwoButtonOne);

const rowThreeRowTwoColTwo = document.createElement('div');
rowThreeRowTwoColTwo.classList.add('col');
rowThreeRowTwo.appendChild(rowThreeRowTwoColTwo);


const rowThreeRowTwoButtonTwo = document.createElement('button');
rowThreeRowTwoButtonTwo.setAttribute('type','button');
rowThreeRowTwoButtonTwo.setAttribute('class','keys btn btn-light');
rowThreeRowTwoButtonTwo.setAttribute('value','5');
rowThreeRowTwoButtonTwo.innerText = '5'
rowThreeRowTwoColTwo.appendChild(rowThreeRowTwoButtonTwo);

const rowThreeRowTwoColThree = document.createElement('div');
rowThreeRowTwoColThree.classList.add('col');
rowThreeRowTwo.appendChild(rowThreeRowTwoColThree);


const rowThreeRowTwoButtonThree = document.createElement('button');
rowThreeRowTwoButtonThree.setAttribute('type','button');
rowThreeRowTwoButtonThree.setAttribute('class','keys btn btn-light');
rowThreeRowTwoButtonThree.setAttribute('value','6');
rowThreeRowTwoButtonThree.innerText = '6'
rowThreeRowTwoColThree.appendChild(rowThreeRowTwoButtonThree);


///////


const rowThreeRowThree = document.createElement('div');
rowThreeRowThree.classList.add('row');
rowThreeCol.appendChild(rowThreeRowThree);

const rowThreeRowThreeColOne = document.createElement('div');
rowThreeRowThreeColOne.classList.add('col');
rowThreeRowThree.appendChild(rowThreeRowThreeColOne);


const rowThreeRowThreeButtonOne = document.createElement('button');
rowThreeRowThreeButtonOne.setAttribute('type','button');
rowThreeRowThreeButtonOne.setAttribute('class','keys btn btn-light');
rowThreeRowThreeButtonOne.setAttribute('value','1');
rowThreeRowThreeButtonOne.innerText = '1'
rowThreeRowThreeColOne.appendChild(rowThreeRowThreeButtonOne);

const rowThreeRowThreeColTwo = document.createElement('div');
rowThreeRowThreeColTwo.classList.add('col');
rowThreeRowThree.appendChild(rowThreeRowThreeColTwo);


const rowThreeRowThreeButtonTwo = document.createElement('button');
rowThreeRowThreeButtonTwo.setAttribute('type','button');
rowThreeRowThreeButtonTwo.setAttribute('class','keys btn btn-light');
rowThreeRowThreeButtonTwo.setAttribute('value','2');
rowThreeRowThreeButtonTwo.innerText = '2'
rowThreeRowThreeColTwo.appendChild(rowThreeRowThreeButtonTwo);

const rowThreeRowThreeColThree = document.createElement('div');
rowThreeRowThreeColThree.classList.add('col');
rowThreeRowThree.appendChild(rowThreeRowThreeColThree);


const rowThreeRowThreeButtonThree = document.createElement('button');
rowThreeRowThreeButtonThree.setAttribute('type','button');
rowThreeRowThreeButtonThree.setAttribute('class','keys btn btn-light');
rowThreeRowThreeButtonThree.setAttribute('value','3');
rowThreeRowThreeButtonThree.innerText = '3'
rowThreeRowThreeColThree.appendChild(rowThreeRowThreeButtonThree);


//////

const rowThreeRowFour = document.createElement('div');
rowThreeRowFour.classList.add('row');
rowThreeCol.appendChild(rowThreeRowFour);

const rowThreeRowFourColOne = document.createElement('div');
rowThreeRowFourColOne.classList.add('col');
rowThreeRowFour.appendChild(rowThreeRowFourColOne);


const rowThreeRowFourButtonOne = document.createElement('button');
rowThreeRowFourButtonOne.setAttribute('type','button');
rowThreeRowFourButtonOne.setAttribute('class','keys btn btn-light');
rowThreeRowFourButtonOne.setAttribute('value','0');
rowThreeRowFourButtonOne.innerText = '0'
rowThreeRowFourColOne.appendChild(rowThreeRowFourButtonOne);

const rowThreeRowFourColTwo = document.createElement('div');
rowThreeRowFourColTwo.classList.add('col');
rowThreeRowFour.appendChild(rowThreeRowFourColTwo);


const rowThreeRowFourButtonTwo = document.createElement('button');
rowThreeRowFourButtonTwo.setAttribute('type','button');
rowThreeRowFourButtonTwo.setAttribute('id','dot');
rowThreeRowFourButtonTwo.setAttribute('class','keys btn btn-light');
rowThreeRowFourButtonTwo.setAttribute('value','.');
rowThreeRowFourButtonTwo.innerText = '.'
rowThreeRowFourColTwo.appendChild(rowThreeRowFourButtonTwo);

const rowThreeRowFourColThree = document.createElement('div');
rowThreeRowFourColThree.classList.add('col');
rowThreeRowFour.appendChild(rowThreeRowFourColThree);


const rowThreeRowFourButtonThree = document.createElement('button');
rowThreeRowFourButtonThree.setAttribute('type','button');
rowThreeRowFourButtonThree.setAttribute('id','ac');
rowThreeRowFourButtonThree.setAttribute('class','keys btn btn-light');
rowThreeRowFourButtonThree.setAttribute('value','AC');
rowThreeRowFourButtonThree.innerText = 'AC'
rowThreeRowFourColThree.appendChild(rowThreeRowFourButtonThree);




/////
const equalsButtonDiv = document.createElement('div');
equalsButtonDiv.setAttribute('class','col-3');
rowThree.appendChild(equalsButtonDiv);

const equalsButton = document.createElement('button');
equalsButton.setAttribute('type','button');
equalsButton.setAttribute('class','btn btn-light');
equalsButton.setAttribute('id','equals');
equalsButton.setAttribute('value','=');
equalsButton.innerText = '='
equalsButtonDiv.appendChild(equalsButton);
