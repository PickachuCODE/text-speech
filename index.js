var input = document.getElementById("input");
var buttonTrigger = document.getElementById("trigger")

var c_volume = document.getElementById("volume");
var c_rate = document.getElementById("rate");
var c_pitch = document.getElementById("pitch");

var synth = window.speechSynthesis;
const voice = new SpeechSynthesisUtterance();

buttonTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    voice.voice = synth.getVoices()[2];
    console.log("speaking");

    voice.volume = Math.round(c_volume.value);
    voice.text = input.value;
    voice.rate = Math.random(c_rate.value);
    voice.pitch = Math.random(c_pitch.value);

    synth.speak(voice);
    console.log(c_volume.value)
})