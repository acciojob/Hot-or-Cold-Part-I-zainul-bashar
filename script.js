//your code here
var input=document.getElementById("guess");
var btn=document.getElementById("btn");
btn.addEventListener("click",randomNumGenerator;
function randomNumGenerator(){
	var random=Math.floor(Math.random()*41)-20;
	document.getElementById("num").innerText=random;
	guessNum()
	print()
}
function guessNum(){
	var inputValue=Number(input.value);
}
function print(){
	if(Math.abs(random-inputValue)<=5){
		document.getElementByid("respond").innerText="hot";
	}
	else{
		document.getElementByid("respond").innerText="cold";
	}
}


