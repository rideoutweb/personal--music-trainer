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
    new Audio("sounds/piano/piano-B3.mp3"),
    new Audio("sounds/piano/piano-Bb3.mp3"),
    new Audio("sounds/piano/piano-A3.mp3"),
    new Audio("sounds/piano/piano-Ab3.mp3"),
    new Audio("sounds/piano/piano-G3.mp3"),
    new Audio("sounds/piano/piano-Gb3.mp3")
];
for (let i = 0; i < pianoChromaticC.length; i++) {
    pianoTrackArray.push(audioCx.createMediaElementSource(pianoChromaticC[i]));
}
const pianoSource = [pianoChromaticC, pianoTrackArray, "Piano"];

// pipe-organ
const pipeOrganTrackArray = []
const pipeOrganChromaticC = [
    new Audio("sounds/pipe-organ/pipe-organ-C5.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-B4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-Bb4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-A4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-Ab4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-G4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-Gb4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-F4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-E4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-Eb4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-D4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-Db4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-C4.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-B3.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-Bb3.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-A3.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-Ab3.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-G3.mp3"),
    new Audio("sounds/pipe-organ/pipe-organ-Gb3.mp3")
]
for (let i = 0; i < pipeOrganChromaticC.length; i++) {
    pipeOrganTrackArray.push(audioCx.createMediaElementSource(pipeOrganChromaticC[i]));
}
const pipeOrganSource = [pipeOrganChromaticC, pipeOrganTrackArray, "Pipe Organ"];
 

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
    new Audio("sounds/french-horn/french-horn-B3.mp3"),
    new Audio("sounds/french-horn/french-horn-Bb3.mp3"),
    new Audio("sounds/french-horn/french-horn-A3.mp3"),
    new Audio("sounds/french-horn/french-horn-Ab3.mp3"),
    new Audio("sounds/french-horn/french-horn-G3.mp3"),
    new Audio("sounds/french-horn/french-horn-Gb3.mp3")
]
for (let i = 0; i < frenchHornChromaticC.length; i++) {
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
    new Audio("sounds/violin/violin-B3.mp3"),
    new Audio("sounds/violin/violin-Bb3.mp3"),
    new Audio("sounds/violin/violin-A3.mp3"),
    new Audio("sounds/violin/violin-Ab3.mp3"),
    new Audio("sounds/violin/violin-G3.mp3"),
    new Audio("sounds/violin/violin-Gb3.mp3")
]
for (let i = 0; i < violinChromaticC.length; i++) {
    violinTrackArray.push(audioCx.createMediaElementSource(violinChromaticC[i]));
}
const violinSource = [violinChromaticC, violinTrackArray, "Violin"];

// tenor-sax
const tenorSaxTrackArray = []
const tenorSaxChromaticC = [
    new Audio("sounds/tenor-sax/tenor-sax-C5.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-B4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-Bb4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-A4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-Ab4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-G4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-Gb4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-F4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-E4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-Eb4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-D4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-Db4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-C4.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-B3.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-Bb3.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-A3.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-Ab3.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-G3.mp3"),
    new Audio("sounds/tenor-sax/tenor-sax-Gb3.mp3")

]
for (let i = 0; i < tenorSaxChromaticC.length; i++) {
    tenorSaxTrackArray.push(audioCx.createMediaElementSource(tenorSaxChromaticC[i]));
}
const tenorSaxSource = [tenorSaxChromaticC, tenorSaxTrackArray, "Tenor Sax"];

// marimba

const marimbaTrackArray = []
const marimbaChromaticC = [
    new Audio("sounds/marimba/marimba-C5.mp3"),
    new Audio("sounds/marimba/marimba-B4.mp3"),
    new Audio("sounds/marimba/marimba-Bb4.mp3"),
    new Audio("sounds/marimba/marimba-A4.mp3"),
    new Audio("sounds/marimba/marimba-Ab4.mp3"),
    new Audio("sounds/marimba/marimba-G4.mp3"),
    new Audio("sounds/marimba/marimba-Gb4.mp3"),
    new Audio("sounds/marimba/marimba-F4.mp3"),
    new Audio("sounds/marimba/marimba-E4.mp3"),
    new Audio("sounds/marimba/marimba-Eb4.mp3"),
    new Audio("sounds/marimba/marimba-D4.mp3"),
    new Audio("sounds/marimba/marimba-Db4.mp3"),
    new Audio("sounds/marimba/marimba-C4.mp3"),
    new Audio("sounds/marimba/marimba-B3.mp3"),
    new Audio("sounds/marimba/marimba-Bb3.mp3"),
    new Audio("sounds/marimba/marimba-A3.mp3"),
    new Audio("sounds/marimba/marimba-Ab3.mp3"),
    new Audio("sounds/marimba/marimba-G3.mp3"),
    new Audio("sounds/marimba/marimba-Gb3.mp3")

]
for (let i = 0; i < marimbaChromaticC.length; i++) {
    marimbaTrackArray.push(audioCx.createMediaElementSource(marimbaChromaticC[i]));
}
const marimbaSource = [marimbaChromaticC, marimbaTrackArray, "Marimba"];
{ // || WebAudio API scope

    let currentAudio;

    // array of instrument sources
    let instrumentBank = [pianoSource, tenorSaxSource, pipeOrganSource, frenchHornSource, violinSource, marimbaSource ];

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

                    // stop currently playing audio. needs refactor as gain decrease for legato feel
                    if (currentAudio === undefined) {
                        // do nothing 
                    } else {
                        currentAudio.pause();
                        currentAudio.currentTime = 0;
                    }

                    // play note and repeat note condition
                    if (noteButtonArray[i].dataset.playing === 'false') {
                        instrumentChoice[0][i].play();
                        currentAudio = instrumentChoice[0][i],
                        noteButtonArray[i].dataset.playing = 'true';
                    } else if (noteButtonArray[i].dataset.playing === 'true') {
                        instrumentChoice[0][i].pause();
                        instrumentChoice[0][i].currentTime = 0;
                        instrumentChoice[0][i].play();
                        currentAudio = instrumentChoice[0][i],
                        noteButtonArray[i].dataset.playing = 'true';
                    }

                    let userPick = noteButtonArray[i].parentElement.className.replace("wrap ", "");
                    userPat.push(userPick);
                

                    // patCheck();
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

    // webAudio declared function for noteSwitch
    function testPlay(index) {

        // check if context is in suspended state (autoplay policy)
        if (audioCx.state === 'suspended') {
            audioCx.resume();
        }

        instrumentChoice[0][index].pause();
        instrumentChoice[0][index].currentTime = 0;
        instrumentChoice[0][index].play();
    }

    function noteSwitch(noteId) {

        switch (noteId) {

            case "C5":
                testPlay(0);
                break;

            case "B4":
                testPlay(1);
                break;

            case "Bb4":
                testPlay(2);
                break;

            case "A4":
                testPlay(3);
                break;

            case "Ab4":
                testPlay(4);
                break;

            case "G4":
                testPlay(5);
                break;

            case "Gb4":
                testPlay(6);
                break;

            case "F4":
                testPlay(7);
                break;

            case "E4":
                testPlay(8);
                break;

            case "Eb4":
                testPlay(9);
                break;

            case "D4":
                testPlay(10);
                break;

            case "Db4":
                testPlay(11);
                break;

            case "C4":
                testPlay(12);
                break;

            case "B3":
                testPlay(13);
                break;

            case "Bb3":
                testPlay(14);
                break;

            case "A3":
                testPlay(15);
                break;

            case "Ab3":
                testPlay(16);
                break;

            case "G3":
                testPlay(17);
                break;

            default:
        }
    }

}


// END of document