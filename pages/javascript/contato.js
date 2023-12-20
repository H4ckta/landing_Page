const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const info = card.querySelector('.card-info');
    const paragraph = info.querySelector('p');
    const button = info.querySelector('button');

    card.addEventListener('mouseenter', () => {
        paragraph.classList.remove('hidden');
        button.classList.remove('hidden');
    });

    card.addEventListener('mouseleave', () => {
        paragraph.classList.add('hidden');
        button.classList.add('hidden');
    });
});


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
