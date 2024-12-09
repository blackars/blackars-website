const audio = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
