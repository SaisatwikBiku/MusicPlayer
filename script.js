document.addEventListener("DOMContentLoaded", function()
{
    const audio = document.getElementById("audio");
    const playbtn = document.getElementById("playbtn");
    const volume = document.getElementById("volume");
    const progress = document.getElementById("progress");
    const cover = document.getElementById('cover');

    playbtn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playbtn.innerHTML = "&#10074;&#10074;"; 
            cover.classList.add("rotating");
        } else {
            audio.pause();
            playbtn.innerHTML = "&#9658;"; 
            cover.classList.remove("rotating");
        }
    });

    volume.addEventListener('input', function()
        {
            audio.volume = volume.value;
        }
    )

    progress.addEventListener("input", function() {
        const progressValue = progress.value;
        const duration = audio.duration || 0;
        const seekTime = (duration * progressValue) / 100;
        audio.currentTime = seekTime;
    });

    audio.addEventListener("timeupdate", function() {
        const duration = audio.duration || 0;
        const currentTime = audio.currentTime || 0;
        const progressValue = (currentTime / duration) * 100;
        progress.value = progressValue;
    });
});