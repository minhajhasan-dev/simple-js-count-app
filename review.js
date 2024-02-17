let serialCount = 1;
const reviewContainer = document.getElementById("review-div");
document.getElementById("submit-btn").addEventListener("click", function () {
  const inputField = document.querySelector("textarea");
  const inputValue = inputField.value;
  const h2 = document.createElement("h2");
  h2.innerText = serialCount + ". " + inputValue;
  h2.style.color = "red";
  h2.style.fontSize = "1.8rem";
  h2.style.marginTop = "10px";
  reviewContainer.appendChild(h2);
  serialCount++;
  //empty the input field
  document.querySelector("textarea").value = "";
});
document.getElementById("main-page").onclick = function () {
  location.href = "./index.html";
};
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function () {
  reviewContainer.innerText = "";
  serialCount = 1;
});
