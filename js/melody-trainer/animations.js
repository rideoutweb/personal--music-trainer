//  Animations JS file for "Music Trainer"

// || Play Animations


function lightUp(input) {
    // 'input' is the 'wrap' element containing the note elements
    //  as defined in the webAudio switch and listeners

    // get indexable value
    let index = Array.from(input.parentNode.children).indexOf(input);
    // console.log('From lightUp');
    // console.log(input);
    // console.log(index);
    let colorsArray = localStorageRetrieve(colorArray);
    // console.log(colorsArray);


    function startAnim() {
        input.style.transition = 'background-color .1s';

        if ( localStorageRetrieve(colorArray) !== null) { // if has local storage
            input.style.backgroundColor = colorsArray[index];
        } else {
            input.style.backgroundColor = 'green';
        }

    }
    
    function stopAnim() {
        input.style.transition = 'background-color 1.5s';
        input.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }

    new Promise(function(resolve, reject) {
        startAnim();
        setTimeout(() => resolve(), 100);
    }).then(function() {
        stopAnim();

    });
}


function saveColors() {

    if (localStorageRetrieve(colorArray) !== null) { // if has local storage
        // do nothing
    } else { // if no local storage
        console.log('no storage');
        colorArray = [];
        for (let i = 0; i <= document.getElementsByClassName('wrap').length - 1; i++) {
            colorArray.push(colorPicker[i].value);
        }
    }

    for (let i = 0; i <= document.getElementsByClassName('wrap').length - 1; i++) {
        colorArray[i] = colorPicker[i].value;
    }
    // send color array to storage
    localStorageCreate(colorArray);
    // append new stylesheet
    createElement();
}

// create stylesheet for note color animations. Due to need for async timing in lightUp(),
// appended stylesheet is necessary for note independence
function createElement() {

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `:root {
        --pianokey: ivory;
        --keyhover0: ${colorArray[0]};
        --keyhover1: ${colorArray[1]};
        --keyhover2: ${colorArray[2]};
        --keyhover3: ${colorArray[3]};
        --keyhover4: ${colorArray[4]};
        --keyhover5: ${colorArray[5]};
        --keyhover6: ${colorArray[6]};
        --keyhover7: ${colorArray[7]};
        --keyhover8: ${colorArray[8]};
        --keyhover9: ${colorArray[9]};
        --keyhover10: ${colorArray[10]};
        --keyhover11: ${colorArray[11]};
        --keyhover12: ${colorArray[12]};
        --keyhover13: ${colorArray[13]};
        --keyhover14: ${colorArray[14]};
        --keyhover15: ${colorArray[15]};
        --keyhover16: ${colorArray[16]};
        --keyhover17: ${colorArray[17]};
        --keyhover18: ${colorArray[18]};
    }`;
    // create new stylesheet, insert in <head>
    document.getElementsByTagName('head')[0].appendChild(style);

}

// END of document

