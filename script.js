const colors= ['Aqua', 'Black', 'Blue', 'Fuchsia', 'Gray', 'Green', 
'Lime', 'Maroon', 'Navy', 'Olive', 'Orange', 'Purple', 'Red', 
'Silver', 'Teal', 'White', 'Yellow',];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
    const randomNumber = getRandomColor();
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
});


function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}
