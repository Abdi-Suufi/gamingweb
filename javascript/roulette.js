let container = document.querySelector(".container");
let btn = document.getElementById("spin");
// The value multiplied with "maths.random" is the determining factor for the speed of the spin
let number = Math.ceil(Math.random() * 5000);

btn.onclick = function () {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 5000);
}
