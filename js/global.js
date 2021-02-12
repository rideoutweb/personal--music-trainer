//  Global varialbe JS file for "Music Trainer"

// || WebAudio initialization
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCx = new AudioContext();


let freeModeBool = false;
let klangBool = false;
let initialLoad = true;
let instPower = false;

let pastScores = [];

// helper function variables
let instrumentChoice;
let instrumentPos;

let lastRoundScore = 0;
let allScores = [];
let modeScore;
// END of document 