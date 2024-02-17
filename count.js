let sum = 0;
const countElement = document.getElementById("count");

function increment() {
  sum++;
  countElement.innerText = sum;
}

const decrementBtn = document.getElementById("decrement");
decrementBtn.addEventListener("click", function () {
  if (sum > 0) {
    sum--;
    countElement.innerText = sum;
  } else {
    alert("Count can't be less than 0.");
  }
});

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function () {
  countElement.innerText = 0;
});

document.getElementById("goto-review").onclick = function () {
  location.href = "./user-review.html";
};
