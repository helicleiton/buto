// Variáveis do jogo
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const guessInput = document.getElementById("guessInput");
const resultMessage = document.getElementById("resultMessage");
const attemptsMessage = document.getElementById("attempts");

// Função para verificar o palpite
function checkGuess() {
    const userGuess = Number(guessInput.value);
    
    // Se o palpite estiver fora do intervalo
    if (userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = "Por favor, insira um número entre 1 e 100.";
        return;
    }
    
    attempts++;
    attemptsMessage.textContent = `Tentativas: ${attempts}`;
    
    if (userGuess === randomNumber) {
        resultMessage.textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas!`;
        guessButton.disabled = true;
        restartButton.classList.remove("hidden");
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = "O número é maior.";
    } else {
        resultMessage.textContent = "O número é menor.";
    }
    
    guessInput.value = '';
    guessInput.focus();
}

// Função para reiniciar o jogo
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsMessage.textContent = `Tentativas: ${attempts}`;
    resultMessage.textContent = '';
    guessButton.disabled = false;
    restartButton.classList.add("hidden");
    guessInput.value = '';
    guessInput.focus();
}

// Eventos
guessButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restartGame);
