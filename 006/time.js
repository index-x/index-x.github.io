var time = new Date();
var y = time.getFullYear();
var m = time.getMonth() + 1;
var d = time.getDate();
var today = y + "-" + m+ "-" + d;
var tomorrow = y + "-" + m+ "-" + (d+1);
document.getElementById("time").innerHTML = today+" "+"至"+" "+today;
