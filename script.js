document.addEventListener('DOMContentLoaded', function () {

    const envelope = document.getElementById('envelope');
    const openBtn = document.getElementById('open');
    const overlay = document.getElementById('overlay');
    const letter = document.getElementById('letter');
    const intro = document.querySelector('.intro');

    function openLetter() {
        envelope.classList.add('open');
        overlay.classList.add('active');
        letter.classList.add('open');
        intro.classList.add('hidden');
        openBtn.textContent = 'Закрыть';
    }

    function closeLetter() {
        envelope.classList.remove('open');
        overlay.classList.remove('active');
        letter.classList.remove('open');
        intro.classList.remove('hidden');
        openBtn.textContent = 'Открыть';
    }

    // Кнопка — открывает и закрывает
    openBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (letter.classList.contains('open')) {
            closeLetter();
        } else {
            openLetter();
        }
    });

    // Клик по конверту — открывает
    envelope.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!letter.classList.contains('open')) {
            openLetter();
        }
    });

    // Клик по затемнению — закрывает
    overlay.addEventListener('click', function () {
        closeLetter();
    });

    // Esc — закрывает
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && letter.classList.contains('open')) {
            closeLetter();
        }
    });
});