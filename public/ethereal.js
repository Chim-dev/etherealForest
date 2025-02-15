const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("Soothing");
const mameko = document.getElementById("mameko");
const play = document.getElementById("mamekobtn");
const majogari = document.getElementById("majogari");
const majogariBtn = document.getElementById("majogaribtn");
const fila = document.getElementById("fila");
const filaBtn = document.getElementById("filabtn");
const rose = document.getElementById("rose");
const roseBtn = document.getElementById("rosebtn");
const pas = document.getElementById("pas");
const pasBtn = document.getElementById("pasbtn");



pasBtn.addEventListener("click", () => {
    if (pas.paused) {
        pas.play();
        pasBtn.textContent = "⏸ Pause";
    } else {
        pas.pause();
        pasBtn.textContent = "▶ Play";
    }
});

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸ Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶ Play";
    }
});

play.addEventListener("click", () => {
    if (mameko.paused) {
        mameko.play();
        play.textContent = "⏸ Pause"
    } else {
        mameko.pause();
        play.textContent = "▶ Play"
    }
});

majogariBtn.addEventListener("click", () => {
    if (majogari.paused) {
        majogari.play();
        majogariBtn.textContent = "⏸ Pause"
    } else {
        majogari.pause();
        majogariBtn.textContent = "▶ Play"
    }
});

filaBtn.addEventListener("click", () => {
    if (fila.paused) {
        fila.play();
        filaBtn.textContent = "⏸ Pause"
    } else {
        fila.pause();
        filaBtn.textContent = "▶ Play"
    }
});

roseBtn.addEventListener("click", () => {
    if (rose.paused) {
        rose.play();
        roseBtn.textContent = "⏸ Pause"
    } else {
        rose.pause();
        roseBtn.textContent = "▶ Play"
    }
});