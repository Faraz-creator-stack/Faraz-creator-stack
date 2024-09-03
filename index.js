let increase = document.getElementById("increasebtn");
let decrease = document.getElementById("decreasebtn");
let reset = document.getElementById("resetbtn");
let number = document.getElementById("number");
let count = 0;
increase.onclick = function () {
    count++;
    number.textContent = count;
}
decrease.onclick = function () {
    count--;
    number.textContent = count;
}
reset.onclick = function () {
    count=0;
    number.textContent = count;
}