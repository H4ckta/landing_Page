// Encontre a seção onde deseja adicionar os spans
const animationSection = document.getElementById('animationSection');

// Número de spans desejados
const numSpans = 208;

// Crie os spans dinamicamente e adicione à seção
for (let i = 0; i < numSpans; i++) {
    const span = document.createElement('span');
    animationSection.appendChild(span);
}


document.getElementById("backButton").addEventListener("click", function () {
    window.location.href = "../index.html";
});
