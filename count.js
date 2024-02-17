let sum = 0;
const countElement = document.getElementById("count");
function increment() {
  sum++;
  countElement.innerText = sum;
}

const decrementBtn = document.getElementById("decrement");
decrementBtn.addEventListener("click", function () {
  sum--;
  countElement.innerText = sum;
});
