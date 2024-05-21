document.querySelector("#start").addEventListener("click", () => {
  document.querySelector(".window-1").classList.add("hidden");

  let timeLeft = 5;
  document.querySelector("#timer").textContent = timeLeft;

  var intervalId = setInterval(() => {
    timeLeft--;
    document.querySelector("#timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      document.querySelector(".window-2").classList.remove("hidden");
    }
  }, 1000);
});

function exercise() {
  let num1 = Math.ceil(Math.random() * 50);
  let num2 = Math.ceil(Math.random() * 50);
  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }
  document.querySelector("#exercise").textContent = `${num1} + ${num2}`;
  return num1 + num2;
}

let score = 0;
let correct = exercise();
document.querySelector("#submit").addEventListener("click", () => {
  if (document.querySelector("#answer").value == correct) {
    score ++;
    correct = exercise();
  }

  document.querySelector(".score").textContent = score;
});
