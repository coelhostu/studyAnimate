// Animate document.write
const messages = [
  { text: "Bem-vindo!", className: "ab" },
  { text: "Você está pronto?", className: "ac" },
  { text: "Aproveite o seminário", className: "ad" },
  { text: "Exemplo Universitário", className: "ae" },
];

let current = 0;

function updateMessage() {
  const messageElement = document.querySelector(".message");
  messageElement.textContent = messages[current].text;
  messageElement.className = `message ${messages[current].className}`;
  current = (current + 1) % messages.length;
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(updateMessage, 2000);
  updateMessage();
});

// Animate text terminal
function revealText(selector, delayBetweenLetters, delayBeforeRestart) {
  const elements = document.querySelectorAll(selector);
  let timeout = 0;

  elements.forEach((element, index) => {
    const text = element.textContent;
    element.textContent = "";
    element.style.opacity = 1;

    text.split("").forEach((letter, letterIndex) => {
      setTimeout(() => {
        element.textContent += letter;
      }, timeout);
      timeout += delayBetweenLetters; // Incrementa o timeout para a próxima letra
    });

    timeout += text.length * delayBetweenLetters;
  });

  setTimeout(() => {
    elements.forEach((element) => {
      element.textContent = ""; // Reseta o texto
      element.style.opacity = 0;
    });

    setTimeout(() => {
      revealText(selector, delayBetweenLetters, delayBeforeRestart);
    }, delayBeforeRestart);
  }, timeout);
}

revealText("#container div", 100, 3000);
