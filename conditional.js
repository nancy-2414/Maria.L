/*if elseif
var light = "white"
if(light == "green") {
      console.log("go");
}
elseif(light == "yellow") 
{
      console.log("wait");
}
elseif(light == "red")
{
      console.log("stop");
}
else {
      console.log("invalid light color");    
}
console.log("outside if");*/


//switch case
var signal = "white"

switch(signal){
      case "green":
            console.log("go");
            break;
            
      case "yellow":
            console.log("wait");
            break;

      case "red":
            console.log("stop");
            break;      
      
      default:
            console.log("invalid light color");
            break;      

}