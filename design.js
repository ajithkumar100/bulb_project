function changeImage(){
    var pic= document.getElementById("bulb")
    if(pic.src.match("on")){
        console.log("ON");
        pic.src = "off.jpg";
    }
    else{
        console.log("OFF");
        pic.src="on.jpg";
    }
}