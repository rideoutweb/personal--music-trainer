// WebAudio Digital Instrument for "Music Trainer"

// array of instrument sources
let instrumentBank = [pianoSource, tenorSaxSource, pipeOrganSource, frenchHornSource, violinSource, marimbaSource];

// changes instrument source
function instrumentCycle() {

    // selects first instrument from array, then loops through array
    if (instrumentPos == instrumentBank.length - 1 || instrumentPos === undefined) {
        instrumentPos = 0;
    } else {
        instrumentPos++;
    }

    if (klangBool === true) {
        instrumentPos = Math.floor(Math.random() * instrumentBank.length);
    } else {
        // do nothing
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

            // assign event listener to html element
            noteButtonArray[i].addEventListener('mousedown', playSound);

            // webAudio track connection
            instrumentChoice[1][i].connect(audioCx.destination);

        }
        
    }
}

// webAudio declared function for noteSwitch
function testPlay(index, noteId) {
    let item = document.getElementById(`${noteId}-wrap`);
    // console.log(item);
    if ( pracModeBool === true ) {
        // do nothing
    } else {
        lightUp(item);
    }
    // check if context is in suspended state (autoplay policy)
    if (audioCx.state === 'suspended') {
        audioCx.resume();
    }

    // stop currently playing audio
    if (currentAudio === undefined || cadenceBool == true) {
        // do nothing 
    } else {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    instrumentChoice[0][index].play();
    currentAudio = instrumentChoice[0][index];
}

function noteSwitch(noteId) {

    switch (noteId) {

        case "C5":
            testPlay(0, noteId);
            break;

        case "B4":
            testPlay(1, noteId);
            break;

        case "Bb4":
            testPlay(2, noteId);
            break;

        case "A4":
            testPlay(3, noteId);
            break;

        case "Ab4":
            testPlay(4, noteId);
            break;

        case "G4":
            testPlay(5, noteId);
            break;

        case "Gb4":
            testPlay(6, noteId);
            break;

        case "F4":
            testPlay(7, noteId);
            break;

        case "E4":
            testPlay(8, noteId);
            break;

        case "Eb4":
            testPlay(9, noteId);
            break;

        case "D4":
            testPlay(10, noteId);
            break;

        case "Db4":
            testPlay(11, noteId);
            break;

        case "C4":
            testPlay(12, noteId);
            break;

        case "B3":

            testPlay(13, noteId);
            break;

        case "Bb3":
            testPlay(14, noteId);
            break;

        case "A3":
            testPlay(15, noteId);
            break;

        case "Ab3":
            testPlay(16, noteId);
            break;

        case "G3":
            testPlay(17, noteId);
            break;

        case "Gb3":
            testPlay(18, noteId);
            break;

        default:
    }
}




// END of document