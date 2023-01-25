function calculatetips(){
    // document.getElementById("tips").innerHTML = "hello"
var amountinput = document.getElementById("billamount").value;
if(amountinput== 0 || amountinput==" "){
     var a = prompt("enter a value for Bill amount:")
};
//if user forget to enter the bill amount
document.getElementById("billamount").value = a;
var dropdown = document.getElementById("dropdown").value;

var numberpeople = document.getElementById("numberpeople").value;

if(dropdown == 0  && numberpeople == " "){
    alert("enter good value");
}
var total = (amountinput * dropdown)/numberpeople;
finaltotal = total.toFixed(2);
document.getElementById("tips").innerHTML = finaltotal;
}
// code to check 
// document.getElementById("tips").innerHTML = "hello"

document.getElementById("button").onclick = function(){
    calculatetips();
};

// document.getElementById("button").addEventListener("click", function() {
//     alert("Hello World!");
//   });