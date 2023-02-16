//your code here
var btn=document.getElementById("btn");
btn.addEventListener("click",randomNumGenerator);
var random;
function randomNumGenerator(){
	random=Math.floor(Math.random()*41)-20;
	document.getElementById("num").innerText=random;
	guessNum();
}
function guessNum(){
console.log("guess function called")
	var inputValue=Number(document.getElementById("guess").value);
	print(inputValue);
}
function print(inputValue){
console.log("print function called")
	if(Math.abs(random-inputValue)<=5){
		document.getElementById("respond").innerText="Hot";
	}
	else{
		document.getElementById("respond").innerText="Cold";
	}
}


