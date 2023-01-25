function a(){
// var amountinput = document.getElementsByid("billamount").value;
var amountinput = document.getElementsByid("billamount").value;
var dropdown = document.getElementById("dropdown").value;
var numberpeople = document.getElementById("numberpeople").value;
var total = (amountinput * dropdown)/numberpeople;
document.getElementById("tips").innerHTML = total;
document.getElementById("tips").innerHTML = "hello"
}
// code to check 
document.getElementById("tips").innerHTML = "hello"

document.getElementById("button").onclick = function(){
    a();
};

// document.getElementById("button").addEventListener("click", function() {
//     alert("Hello World!");
//   });