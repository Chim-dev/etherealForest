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
const jardin = document.getElementById("jardin");
const jardinBtn = document.getElementById("jardinbtn");
const inori = document.getElementById("inori");
const inoriBtn = document.getElementById("inoribtn");
const hex = document.getElementById("hex");
const hexBtn = document.getElementById("hexbtn");
const ellin = document.getElementById("ellin");
const ellinBtn = document.getElementById("ellinbtn");
const fukurou = document.getElementById("fukurou");
const fukurouBtn = document.getElementById("fukuroubtn");
const caffe = document.getElementById("caffe");
const caffeBtn = document.getElementById("caffebtn");
const redmoon = document.getElementById("redmoon");
const redmoonBtn = document.getElementById("redmoonbtn");
const filou = document.getElementById("filou");
const filouBtn = document.getElementById("filoubtn");
const btns = [
  { audio: pas, button: pasBtn },
  { audio: audio, button: playPauseBtn },
  { audio: mameko, button: play },
  { audio: majogari, button: majogariBtn },
  { audio: fila, button: filaBtn },
  { audio: rose, button: roseBtn },
  { audio: jardin, button: jardinBtn},
  { audio: inori, button: inoriBtn},
  { audio: hex, button: hexBtn},
  { audio: ellin, button: ellinBtn},
  { audio: fukurou, button: fukurouBtn},
  { audio: caffe, button: caffeBtn},
  { audio: redmoon, button: redmoonBtn},
  { audio: filou, button: filouBtn},
];

function pauseAllAudiosAndResetButtons(currentAudio) {
  btns.forEach(({ audio, button }) => {
    if (audio !== currentAudio && !audio.paused) {
      audio.pause();
      audio.currentTime = 0; // Optionally reset the audio to the start
      button.textContent = "▶ Play"; // Reset other buttons to "▶ Play"
    }
  });
} 

function toggleAudio(audio, button) {
  // If the clicked audio is already playing, pause it
  if (!audio.paused) {
    audio.pause();
    button.textContent = "▶ Play";
    return; // Exit the function early
  }

  // Pause all other audios and reset their buttons
  pauseAllAudiosAndResetButtons(audio);

  // Play the clicked audio and update its button text
  audio.play();
  button.textContent = "⏸ Pause";
}

btns.forEach(({ audio, button }) => {
  button.addEventListener("click", () => toggleAudio(audio, button));
});

