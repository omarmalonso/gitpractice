var temp = 90;
var precip = false;
var indoors = true;
console.log("the temperature is " + temp + " degrees");
if(temp > 80 && precip != "raining" && precip != "snowing"){
document.getElementById("viewCounter").innerHTML = "Time to swim";
}else{
  document.getElementById("viewCounter").innerHTML = "It is raining";
}
for(var bottles = 99; bottles > 0; bottles--){
  console.log("we have "+bottles+ " bottles of beer on the wall");
}
console.log("we need more beer");
var x =0;
while(x<10){
  console.log("x is still less than 10!")
  x++;
}
