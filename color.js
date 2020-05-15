var yellow = document.querySelector("h3");
var col1 = document.querySelector(".abc");
var col2 = document.querySelector(".efg");
var body = document.getElementById("hikay")
var but = document.getElementById("but")



function setgred (){
	body.style.background = 
	"linear-gradient(to right," 
	+ col1.value 
	+ ", "
	+ col2.value 
	+ ")";
	console.log(col1.value);
	yellow.textContent = body.style.background + ";";

// document.createEventby("li") = yeloow.value;
}
col1.addEventListener("input", setgred);

col2.addEventListener("input", setgred);
 
 function myfun(){
 document.getElementById("but").innerHTML;
 alert( "your color code =" +
  "   " +	col1.value + "      " + col2.value);
}
  //but.addEventListener("click", function()
  //{
  	//alert(col1.value);
//}
	