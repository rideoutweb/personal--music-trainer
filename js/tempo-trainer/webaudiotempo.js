
// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCont = new AudioContext();

























const audioEl = new Audio("sounds/piano/piano-C5.mp3");

const audioTr = audioCont.createMediaElementSource(audioEl);

audioTr.connect(audioCont.destination);




// const pianoTrackArray = []
// const pianoChromaticC = [
//     new Audio("sounds/piano/piano-B4.mp3"),
//     new Audio("sounds/piano/piano-Bb4.mp3"),
//     new Audio("sounds/piano/piano-A4.mp3"),
//     new Audio("sounds/piano/piano-Ab4.mp3"),
//     new Audio("sounds/piano/piano-G4.mp3"),
//     new Audio("sounds/piano/piano-Gb4.mp3"),
//     new Audio("sounds/piano/piano-F4.mp3"),
//     new Audio("sounds/piano/piano-E4.mp3"),
//     new Audio("sounds/piano/piano-Eb4.mp3"),
//     new Audio("sounds/piano/piano-D4.mp3"),
//     new Audio("sounds/piano/piano-Db4.mp3"),
//     new Audio("sounds/piano/piano-C4.mp3"),
//     new Audio("sounds/piano/piano-B3.mp3"),
//     new Audio("sounds/piano/piano-Bb3.mp3"),
//     new Audio("sounds/piano/piano-A3.mp3"),
//     new Audio("sounds/piano/piano-Ab3.mp3"),
//     new Audio("sounds/piano/piano-G3.mp3"),
//     new Audio("sounds/piano/piano-Gb3.mp3")
// ];
// for (let i = 0; i < pianoChromaticC.length; i++) {
//     pianoTrackArray.push(audioCtx.createMediaElementSource(pianoChromaticC[i]));
// }
// const pianoSource = [pianoChromaticC, pianoTrackArray, "Piano"];

// pianoSource[1][i].connect(audioCtx.destination);

// function soundLoader() {
//     for (let i = 0; i <= noteButtonArray.length - 1; i++) {
//         // webAudio track connect to destination
//     }
// }

// initializes sounds to note-buttons
// soundLoader();

// webAudio function for noteSwitch
function playClick() {
    
    // check if context is in suspended state (autoplay policy)
    if (audioCont.state === 'suspended') {
        audioCont.resume();
    }
 
    audioEl.play();
   
   
}


