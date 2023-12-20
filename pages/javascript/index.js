const words = ["CELULAR", "COMPUTADOR", "NOTEBOOK"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = words[wordIndex];
let changingText = document.getElementById('changingText');

function updateText() {
    changingText.textContent = currentWord.slice(0, letterIndex);
    letterIndex++;

    if (letterIndex > currentWord.length) {
        letterIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        currentWord = words[wordIndex];
    }

    setTimeout(updateText, 300); // Altere o valor do tempo para a velocidade da máquina de escrever
}

updateText();


document.getElementById('toggleButton').addEventListener('click', function () {
    var icon = document.getElementById('iconToggle');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark', 'fa-shake');
        icon.style.color = '#FFF'; // Mudança de cor opcional
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.remove('fa-shake');
        icon.classList.add('fa-bars');
        icon.style.color = '#ffffff'; // Mudança de cor opcional
    }
});