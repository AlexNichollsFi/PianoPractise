import * as Tone from 'tone'


const keyIdentities = {
    q: "keyC",
    w: "keyD",
    e: "keyE",
    r: "keyF",
    t: "keyG",
    y: "keyA",
    u: "keyB",
    g: "cSharp",
    h: "dSharp",
    j: "fSharp",
    k: "gSharp",
    l: "aSharp",
}

const keyNotes = {
    q: "c",
    w: "d",
    e: "e",
    r: "f",
    t: "g",
    y: "a",
    u: "b",
    g: "c#",
    h: "d#",
    j: "f#",
    k: "g#",
    l: "a#",
}

let isKeyPressed = {
    q: 0,
    w: 0,
    e: 0,
    r: 0,
    t: 0,
    y: 0,
    u: 0,
    g: 0,
    h: 0,
    j: 0,
    k: 0,
    l: 0,
}

let octaveValue = 4


const synth = new Tone.PolySynth().toDestination();
let now = Tone.now()


function keyPressed(key) {

    let note = keyNotes[key] + octaveValue

    const clickedKey = document.getElementById(keyIdentities[key]);

    if (key)

        if (isKeyPressed[key] == 0) {


            if (key == "q" || key == "w" || key == "e" || key == "r" || key == "t" || key == "y" || key == "u") {
                isKeyPressed[key] = 1
                clickedKey.style.backgroundColor = "red";
                synth.triggerAttack(note, now);


            } else if (key == "g" || key == "h" || key == "j" || key == "k" || key == "l") {
                isKeyPressed[key] = 1
                clickedKey.style.backgroundColor = "red";
                synth.triggerAttack(note, now);
            } else {

                console.log('try another key');

            }

        }
}

function keyReleased(key) {

    let note = keyNotes[key] + octaveValue


    const clickedKey = document.getElementById(keyIdentities[key]);


    if (key == "q" || key == "w" || key == "e" || key == "r" || key == "t" || key == "y" || key == "u") {
        synth.triggerRelease(note, now)
        isKeyPressed[key] = 0
        clickedKey.style.backgroundColor = "white";
        clickedKey.classList.remove("released");
        void clickedKey.offsetWidth;
        clickedKey.classList.add("released");

    } else if (key == "g" || key == "h" || key == "j" || key == "k" || key == "l") {
        synth.triggerRelease(note, now)
        clickedKey.style.backgroundColor = "black";
        clickedKey.classList.remove("released2");
        void clickedKey.offsetWidth;
        clickedKey.classList.add("released2");
        isKeyPressed[key] = 0
    }
}


document.onkeypress = function (evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    keyPressed(charStr);
};

document.onkeyup = function (evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    keyReleased(charStr.toLowerCase());
};

document.onkeydown = function (evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode).toLowerCase();
    if (charStr == "c") {
        octaveValue = octaveValue - 1;
    } else if (charStr == "v") {
        octaveValue = octaveValue + 1;
    }
};

