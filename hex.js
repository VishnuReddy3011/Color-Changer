const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
    
});

function getRandomNumber(){
    const rgb = [];
    for(var i = 0; i < 3; i++)
        rgb.push(Math.floor(Math.random() * 255));
    return rgbToHex(rgb[0],rgb[1],rgb[2]);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}