const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
const restartButton = document.getElementById("restartButton");

guessButton.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
    message.textContent = "Skriv ett heltal mellan 1 och 20 or ill bit you!";
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    message.textContent = `Rätt! du klarade det på ${attempts} gissningar now give me candy! 🎉 `;
    guessButton.disabled = true;
  } else if (guess < secretNumber) {
    message.textContent = "För lågt! Prova ett högre tal.";
  } else {
    message.textContent = "För högt! prova ett lägre tal.";
  }
});

restartButton.addEventListener("click", function () {
  secretNmber = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  guessInput.value = "";
  message.textContent = "";
  guessButton.disabled = false;
});
