keyPress = document.getElementsByClassName("keys");
operatorPress = document.getElementsByClassName("operator");

document.addEventListener("keydown", function(event){
		console.log(event)
		if(event.key >= 0 && event.key <= 9){
		if(document.getElementById("displayItem").innerText == "0"){
			clear("");
		}

		//console.log(event.toElement.firstChild.nodeValue);
		document.getElementById("displayItem").innerText += event.key;
	}
})

for(i=0;i<keyPress.length;i++){
	keyPress[i].addEventListener("click", function(event){
		console.log(event);
		if(document.getElementById("displayItem").innerText == "0"){
			clear("");
		}
		//console.log(event.toElement.firstChild.nodeValue);
		document.getElementById("displayItem").innerText += event.toElement.firstChild.nodeValue;
	})
}

for(i=0;i<operatorPress.length;i++){
	operatorPress[i].addEventListener("click", function(event){
		//console.log(event.toElement.firstChild.nodeValue);
		document.getElementById("displayItem").innerText += event.toElement.firstChild.nodeValue;
	})
}

let equals = document.getElementById("equals");
	equals.addEventListener("click", function(){
		let sum = eval(document.getElementById("displayItem").innerText);
		document.getElementById("displayItem").innerText = sum;
})

let clearScreen = document.getElementById("ac");
	clearScreen.addEventListener("click", function(){
	clear("0");
});

function clear(input) {
	document.getElementById("displayItem").innerText = input;
}