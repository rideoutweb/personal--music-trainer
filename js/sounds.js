// || WebAudio initialization
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCx = new AudioContext();

// || Instrument Sources 

// piano
const pianoTrackArray = []
const pianoChromaticC = [
    new Audio("sounds/piano/piano-C5.mp3"),
    new Audio("sounds/piano/piano-B4.mp3"),
    new Audio("sounds/piano/piano-Bb4.mp3"),
    new Audio("sounds/piano/piano-A4.mp3"),
    new Audio("sounds/piano/piano-Ab4.mp3"),
    new Audio("sounds/piano/piano-G4.mp3"),
    new Audio("sounds/piano/piano-Gb4.mp3"),
    new Audio("sounds/piano/piano-F4.mp3"),
    new Audio("sounds/piano/piano-E4.mp3"),
    new Audio("sounds/piano/piano-Eb4.mp3"),
    new Audio("sounds/piano/piano-D4.mp3"),
    new Audio("sounds/piano/piano-Db4.mp3"),
    new Audio("sounds/piano/piano-C4.mp3"),
    new Audio("sounds/piano/piano-C5.mp3")
];
for (let i = 0; i < pianoChromaticC.length - 1; i++) {
    pianoTrackArray.push(audioCx.createMediaElementSource(pianoChromaticC[i]));
}
const pianoSource = [pianoChromaticC, pianoTrackArray, "Piano"];

// french horn
const frenchHornTrackArray = []
const frenchHornChromaticC = [
    new Audio("sounds/french-horn/french-horn-C5.mp3"),
    new Audio("sounds/french-horn/french-horn-B4.mp3"),
    new Audio("sounds/french-horn/french-horn-Bb4.mp3"),
    new Audio("sounds/french-horn/french-horn-A4.mp3"),
    new Audio("sounds/french-horn/french-horn-Ab4.mp3"),
    new Audio("sounds/french-horn/french-horn-G4.mp3"),
    new Audio("sounds/french-horn/french-horn-Gb4.mp3"),
    new Audio("sounds/french-horn/french-horn-F4.mp3"),
    new Audio("sounds/french-horn/french-horn-E4.mp3"),
    new Audio("sounds/french-horn/french-horn-Eb4.mp3"),
    new Audio("sounds/french-horn/french-horn-D4.mp3"),
    new Audio("sounds/french-horn/french-horn-Db4.mp3"),
    new Audio("sounds/french-horn/french-horn-C4.mp3"),
    new Audio("sounds/french-horn/french-horn-C5.mp3")
]
for (let i = 0; i < frenchHornChromaticC.length - 1; i++) {
    frenchHornTrackArray.push(audioCx.createMediaElementSource(frenchHornChromaticC[i]));
}
const frenchHornSource = [frenchHornChromaticC, frenchHornTrackArray, "French Horn"];

// violin
const violinTrackArray = []
const violinChromaticC = [
    new Audio("sounds/violin/violin-C5.mp3"),
    new Audio("sounds/violin/violin-B4.mp3"),
    new Audio("sounds/violin/violin-Bb4.mp3"),
    new Audio("sounds/violin/violin-A4.mp3"),
    new Audio("sounds/violin/violin-Ab4.mp3"),
    new Audio("sounds/violin/violin-G4.mp3"),
    new Audio("sounds/violin/violin-Gb4.mp3"),
    new Audio("sounds/violin/violin-F4.mp3"),
    new Audio("sounds/violin/violin-E4.mp3"),
    new Audio("sounds/violin/violin-Eb4.mp3"),
    new Audio("sounds/violin/violin-D4.mp3"),
    new Audio("sounds/violin/violin-Db4.mp3"),
    new Audio("sounds/violin/violin-C4.mp3"),
    new Audio("sounds/violin/violin-C5.mp3")
]
for (let i = 0; i < violinChromaticC.length - 1; i++) {
    violinTrackArray.push(audioCx.createMediaElementSource(violinChromaticC[i]));
}
const violinSource = [violinChromaticC, violinTrackArray, "Violin"];


{ // || WebAudio API scope

    // array of instrument sources
    let instrumentBank = [pianoSource, frenchHornSource, violinSource];

    // helper function variables
    let instrumentChoice;
    let instrumentPos;

    // array of page note-buttons
    let noteButtonArray = document.getElementsByClassName("note-btn");

    // changes instrument source
    function instrumentCycle() {

        // selects first instrument from array, then loops through array
        if (instrumentPos == instrumentBank.length - 1 || instrumentPos === undefined) {
            instrumentPos = 0;
        } else {
            instrumentPos++;
        }
        // current instrument source
        instrumentChoice = instrumentBank[instrumentPos];

        // changes on-screen instrument selection
        document.getElementById("instr-type").innerText = instrumentChoice[2];

        // initializes sounds to note-buttons
        soundLoader();

        // applies instrument source via listeners
        function soundLoader() {

            for (let i = 0; i <= noteButtonArray.length - 1; i++) {

                // clears previous instrument listener via element cloning
                if (noteButtonArray[i].dataset.listener === 'false') {
                    // do nothing
                } else if (noteButtonArray[i].dataset.listener === 'true') {
                    let prevNode = noteButtonArray[i];
                    prevNode.parentNode.replaceChild(prevNode.cloneNode(false), prevNode);
                }

                // named event listener
                function playSound() {

                    // resume audioCx
                    if (audioCx.state === 'suspended') {
                        audioCx.resume();
                    }

                    // play note and repeat note condition
                    if (noteButtonArray[i].dataset.playing === 'false') {
                        instrumentChoice[0][i].play();
                        noteButtonArray[i].dataset.playing = 'true';
                    } else if (noteButtonArray[i].dataset.playing === 'true') {
                        instrumentChoice[0][i].pause();
                        instrumentChoice[0][i].currentTime = 0;
                        instrumentChoice[0][i].play();
                        noteButtonArray[i].dataset.playing = 'true';
                    }

                }

                // assign event listener
                noteButtonArray[i].addEventListener('click', playSound);

                // assign 'has listener' value
                noteButtonArray[i].dataset.listener = 'true';

                // webAudio track connection
                instrumentChoice[1][i].connect(audioCx.destination);

                // 'on-end' conditional
                instrumentChoice[0][i].addEventListener('ended', () => {
                    noteButtonArray[i].dataset.playing = 'false';
                }, false);

            }

        }
    }

    // working sound played from webAudio, beginning of switch.

    function testPlay() {
        // check if context is in suspended state (autoplay policy)
        if (audioCx.state === 'suspended') {
            audioCx.resume();
        }
        instrumentChoice[0][4].pause();
        instrumentChoice[0][4].currentTime = 0;
        instrumentChoice[0][4].play();


    }

}




// function noteSwitch(sqId) {


//     switch (sqId) {
//         case "sq1":
//             sq1Sound.play();
//             break;

//         case "sq2":
//             sq2Sound.play();
//             break;

//         case "sq3":
//             sq3Sound.play();
//             break;

//         case "sq4":
//             sq4Sound.play();
//             break;

//         case "sq5":
//             sq5Sound.play();
//             break;

//         case "sq6":
//             sq6Sound.play();
//             break;

//         case "sq7":
//             sq7Sound.play();
//             break;

//         case "sq8":
//             sq8Sound.play();
//             break;

//         case "sq9":
//             sq9Sound.play();
//             break;

//         case "sq10":
//             sq10Sound.play();
//             break;

//         case "sq11":
//             sq11Sound.play();
//             break;

//         case "sq12":
//             sq12Sound.play();
//             break;

//         case "sq13":
//             sq13Sound.play();
//             break;

//         default:
//     }
// }


// function playScale() {

//     if (modeChoice === "Major" || modeChoice === "Minor") {

//         noteSwitch("sq1");

//         setTimeout(function () {
//             noteSwitch("sq13");
//         }, 800);

//         if (modeChoice === "Minor") {
//             setTimeout(function () {
//                 noteSwitch("sq11");
//             }, 1500);
//         } else {
//             setTimeout(function () {
//                 noteSwitch("sq12");
//             }, 1500);
//         }

//         if (modeChoice === "Minor") {
//             setTimeout(function () {
//                 noteSwitch("sq9");
//             }, 2000);
//         } else {
//             setTimeout(function () {
//                 noteSwitch("sq10");
//             }, 2000);
//         }

//         setTimeout(function () {
//             noteSwitch("sq8");
//         }, 2500);

//         setTimeout(function () {
//             noteSwitch("sq6");
//         }, 3000);

//         if (modeChoice === "Minor") {
//             setTimeout(function () {
//                 noteSwitch("sq4");
//             }, 3500);
//         } else {
//             setTimeout(function () {
//                 noteSwitch("sq5");
//             }, 3500);
//         }

//         setTimeout(function () {
//             noteSwitch("sq3");
//         }, 4000);

//         setTimeout(function () {
//             noteSwitch("sq1");
//         }, 4500);

//         if (modeChoice === "Minor") {
//             setTimeout(function () {
//                 noteSwitch("sq4");
//             }, 5050);
//         } else {
//             setTimeout(function () {
//                 noteSwitch("sq5");
//             }, 5050);
//         }

//         setTimeout(function () {
//             noteSwitch("sq8");
//         }, 5625);

//         if (modeChoice === "Minor") {
//             setTimeout(function () {
//                 noteSwitch("sq4");
//             }, 6200);
//         } else {
//             setTimeout(function () {
//                 noteSwitch("sq5");
//             }, 6200);
//         }

//         setTimeout(function () {
//             noteSwitch("sq1");
//         }, 7000);

//     } else if (modeChoice === "Chromatic") {

//         noteSwitch("sq1");

//         setTimeout(function () {
//             noteSwitch("sq13");
//         }, 700);

//         setTimeout(function () {
//             noteSwitch("sq8");
//         }, 1400);

//         setTimeout(function () {
//             noteSwitch("sq6");
//         }, 2000);

//         setTimeout(function () {
//             noteSwitch("sq1");
//         }, 2600);

//         setTimeout(function () {
//             noteSwitch("sq6");
//         }, 3200);

//         setTimeout(function () {
//             noteSwitch("sq8");
//         }, 3800);

//         setTimeout(function () {
//             noteSwitch("sq6");
//         }, 4450);

//         setTimeout(function () {
//             noteSwitch("sq1");
//         }, 5100);

//     }

// }


// END of document