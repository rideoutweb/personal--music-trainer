let noteIndex = ['B1', 'C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5', 'C6', 'Db6', 'D6'];

let resolutionDirectionArray = [];
let startingNote; // iterate for each voice
let cadenceValue; // iterate for each voice
let bassVoiceArray = [];
let tenorVoiceArray = [];
let altoVoiceArray = [];
let sopranoVoiceArray = [];

function voiceLeadHandler() {

    function createBassArray() {
        getVoiceLeading('triad');
        bassVoiceArray = [...tempVoiceArray];
    }

    function createTenorArray() {
        getVoiceLeading('triad');
        tenorVoiceArray = [...tempVoiceArray];
    }

    function createAltoArray() {
        getVoiceLeading('seventh');
        altoVoiceArray = [...tempVoiceArray];
    }

    function createSopranoArray() {
        getVoiceLeading('seventh', true);
        sopranoVoiceArray = [...tempVoiceArray];
    }

    // get first chord as string
    let firstChord = progression[0];
    // declare firstChord as object array
    for (let i = 0; i <= keyNumerals.length - 1; i++) {
        if (keyNumerals[i][0] === firstChord) {
            firstChord = keyNumerals[i];
        }
    }

    let direction;
    resolutionDirectionArray = [];
    for (let i = 0; i <= progression.length - 2; i++) {
        let num = Math.floor(Math.random() * 6);
        if (num === 0) {
            direction = 'up';
        } else if (num === 1) {
            direction = 'down';
        } else {
            direction = 'smoothest';
        }
        resolutionDirectionArray.push(direction);
    }

    if (cadenceValue === 'Authentic' || cadenceValue === 'Plagal') {
        resolutionDirectionArray[resolutionDirectionArray.length - 1] = 'down';
        resolutionDirectionArray[resolutionDirectionArray.length - 2] = 'smoothest';
    }
    if (cadenceValue === 'Half' || cadenceValue === 'Deceptive') {
        resolutionDirectionArray[resolutionDirectionArray.length - 1] = 'up';
        resolutionDirectionArray[resolutionDirectionArray.length - 2] = 'smoothest';
    }

    let allChordTones = [];
    let allChordToneIndex = [];
    allChordTones.push(...firstChord[1][1]);
    allChordTones.push(...firstChord[2][1]);
    allChordTones.push(...firstChord[3][1]);
    allChordTones.forEach((item) => {
        allChordToneIndex.push(noteIndex.indexOf(item));
    })

    // seperate allChordToneIndex into SATB
    let bassTones = [];
    let tenorTones = [];
    let altoTones = [];
    let sopranoTones = [];
    allChordToneIndex.forEach((item) => {
        if (item < 19) { // F3 and below
            bassTones.push(item);
        }
        if (item >= 19 && item < 28) { // Gb3 to D4
            tenorTones.push(item);
        }
        if (item >= 28 && item < 37) { // Eb4 to B4
            altoTones.push(item);
        }
        if (item >= 37) { // C5 and above
            sopranoTones.push(item);
        }
    })

    // set first note of voice and handle voice-leading for satb
    // lowest root
    startingNote = firstChord[1][1][0];
    createBassArray();

    startingNote = noteIndex[tenorTones[Math.floor(Math.random() * tenorTones.length)]];
    createTenorArray();

    startingNote = noteIndex[altoTones[Math.floor(Math.random() * altoTones.length)]];
    createAltoArray();

    // highest third
    startingNote = firstChord[2][1][firstChord[2][1].length - 1];
    createSopranoArray();

    // NEEDS refactor for multiple keys
    function checkForRoot() {
        for (let i = 0; i <= progression.length - 1; i++) {
            let rootBool = false;
            let roots = [];
            // get current chord
            let currentChord = progression[i];
            // look in romanNumeral array for rootArray
            keyNumerals.forEach((item) => {
                if (item[0] === currentChord) {
                    roots = [...item[1][1]];
                }
            });
            if (roots.includes(bassVoiceArray[i])) {
                rootBool = true;
            }
            if (roots.includes(tenorVoiceArray[i])) {
                rootBool = true;
            }
            if (roots.includes(altoVoiceArray[i])) {
                rootBool = true;
            }
            if (roots.includes(sopranoVoiceArray[i])) {
                rootBool = true;
            }

            // let nearestRoot;
            // if (noteIndex.indexOf(bassVoiceArray[i]) < 7) {
            //     nearestRoot = roots[0];
            // } else {
            //     nearestRoot = roots[1];
            // }
            // if false then move bass to nearest root
            if (rootBool === false) {
                bassVoiceArray[i] = roots[0];
            }
        }
    }
    checkForRoot();

    // raw voice-lead info
    let satbArray = [];
    satbArray.push(bassVoiceArray, tenorVoiceArray, altoVoiceArray, sopranoVoiceArray);
    // iterate to info array
    satbArray.forEach((item) => {
        phraseUnit.info.voiceLeading.push(item);
    });
    // push to playback handling
    tempPlaybackArray.push(satbArray);
}

function getVoiceLeading(extensions, counterpoint) {
    // empty array to hold all voice leading options
    tempVoiceArray = [];
    // run function on entire progression
    for (let i = 0; i <= progression.length - 2; i++) {
        if (i === 0) {
            tempVoiceArray.push(startingNote)
        }

        // next chord in progression as string
        let resolveChord = progression[i + 1];
        // search for object based on string
        for (let i = 0; i <= keyNumerals.length - 1; i++) {
            if (keyNumerals[i][0] === resolveChord) {
                resolveChord = keyNumerals[i];
            }
        }

        function leadSingleVoice(startingNote, resolveChord, counterpoint) {
            let chordMemberIndexArray = [];
            let differenceOfArray = [];

            function seventhChance() {
                if (i === progression.length - 2) {
                    return 2;
                } else {
                    if (Math.floor(Math.random() * 3) === 1) {
                        return 1;
                    } else {
                        return 2;
                    }
                }
            }

            function nextClosestResolution() {
                differenceOfArray.splice(indexOfSmallestDistanceInDiff, 1);
                chordMemberIndexArray.splice(indexOfSmallestDistanceInDiff, 1);
                indexOfSmallestDistanceInDiff = differenceOfArray.indexOf(Math.min(...differenceOfArray));
            }

            if (extensions === 'triad') {
                // length of resolveChord loop determines how many color tones are included. (-2) is triad, (-1) includes sevenths.
                for (let i = 1; i <= resolveChord.length - 2; i++) {
                    // gets index of all chord members in resolution chord
                    resolveChord[i][1].forEach((item) => chordMemberIndexArray.push(noteIndex.indexOf(item)));
                }
            } else if (extensions === 'seventh') {
                for (let i = 1; i <= resolveChord.length - seventhChance(); i++) {
                    // gets index of all chord members in resolution chord
                    resolveChord[i][1].forEach((item) => chordMemberIndexArray.push(noteIndex.indexOf(item)));
                }
            }
            // get smoothest transition via difference of current note's index and nearest note's index
            chordMemberIndexArray.forEach((item) => {
                differenceOfArray.push(Math.abs(noteIndex.indexOf(startingNote) - item));
            });
            let indexOfSmallestDistanceInDiff = differenceOfArray.indexOf(Math.min(...differenceOfArray));
            let smoothestTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]];
            // repeat procedure after removing previous to find next best option
            nextClosestResolution();
            let goodTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]];
            // repeat procedure after removing previous to find next best option again
            nextClosestResolution();
            let okayTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]];

            let resolution;
            let currentNote = startingNote;

            let resolutionOptions = [smoothestTransition, goodTransition, okayTransition];

            // random chance of smoothest or next best voice-leading option
            function smoothResolutionChance() {
                let num = Math.floor(Math.random() * 3);
                if (num === 0) {
                    resolution = resolutionOptions[1];
                } else {
                    resolution = resolutionOptions[0];
                }
            }

            // categorization of voice leading options
            function voiceLeadDirectionOptions() {
                let directionUp;
                let directionDown;

                resolutionOptions.forEach((item) => {

                    if (noteIndex.indexOf(item) < noteIndex.indexOf(currentNote)) {
                        directionDown = item;
                    } else if (noteIndex.indexOf(item) > noteIndex.indexOf(currentNote)) {
                        directionUp = item;
                    }

                });

                // THIS is where I can control basic counterpoint

                if (counterpoint === true) {
                    if (resolutionDirectionArray[i] === 'up') {
                        if (directionUp) {
                            resolution = directionDown;
                        } else {
                            resolution = smoothestTransition;
                        }
                    } else if (resolutionDirectionArray[i] === 'down') {
                        if (directionDown) {
                            resolution = directionUp;
                        } else {
                            resolution = smoothestTransition;
                        }
                    }
                } else {
                    if (resolutionDirectionArray[i] === 'up') {
                        if (directionUp) {
                            resolution = directionUp;
                        } else {
                            resolution = smoothestTransition;
                        }
                    } else if (resolutionDirectionArray[i] === 'down') {
                        if (directionDown) {
                            resolution = directionDown;
                        } else {
                            resolution = smoothestTransition;
                        }
                    }
                }
            }

            // smoothest or next best option
            smoothResolutionChance();
            // check direction array for shift
            voiceLeadDirectionOptions();

            // assign resolution to startingNote for next loop through
            startingNote = resolution;
            tempVoiceArray.push(resolution);
        }

        leadSingleVoice(startingNote, resolveChord)

    }

}


// END of document
