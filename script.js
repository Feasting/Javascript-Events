var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//input length
function inputLength(){
	return input.value.length;
}

function createListElement(){
	//create element of list
	var li = document.createElement("li");
	//To display put text in it
	li.appendChild(document.createTextNode(input.value));
	//apend to unordered list
	ul.appendChild(li);
	//reset text box
	input.value = "";
}

function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterkeyPress(event){
	if (inputLength() > 0 && event.keyCode ===13){
	createListElement();
	}
}

//Event listener syntx, not same as regular function call ex. addListAfterClick()
button.addEventListener("click", addListAfterClick;

input.addEventListener("keypress", addListAfterkeyPress;