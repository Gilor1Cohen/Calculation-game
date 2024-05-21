document.querySelector("#start").addEventListener("click", () => {
  document.querySelector(".window-1").classList.add("hidden");

  let timeLeft = 100;
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
  let num1 = Math.floor(Math.random() * 20);
  let num2 = Math.floor(Math.random() * 20);
  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }
  document.querySelector("#exercise").textContent = `${num1} * ${num2}`;
  return num1 * num2;
}

let correctAnswer = exercise();
let correct = 0;
document.querySelector("#submit").addEventListener("click", () => {
  if (parseInt(document.querySelector("#answer").value) === correctAnswer) {
    correctAnswer = exercise();
    correct++;
  }

  document.querySelector(".score").textContent = correct;
  document.querySelector("#answer").value = "";
});
