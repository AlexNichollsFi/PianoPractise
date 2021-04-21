

function keyPressed (key){

    const keyIdentities = {
        q : "keyC",
        w : "keyD",
        e : "keyE",
        r : "keyF",
        t : "keyG",
        y : "keyA",
        u : "keyB",
        g : "cSharp",
        h : "dSharp",
        j : "fSharp",
        k : "gSharp",
        l : "aSharp",
    }

    try {
    audioFile = "/assets/" + key + ".wav"

    console.log(audioFile);

    var audio = new Audio(audioFile);
    audio.play();


    const clickedKey =  document.getElementById(keyIdentities[key]);

    if (key == "q" || key == "w" || key == "e" || key == "r" || key == "t" || key == "y" || key == "u") {
   clickedKey.classList.remove("pressed");
    void clickedKey.offsetWidth;
    clickedKey.classList.add("pressed");
    } else {
        clickedKey.classList.remove("pressed2");
        void clickedKey.offsetWidth;
        clickedKey.classList.add("pressed2");
    }
    
}
    catch {
        console.log('try another key');
    }
}

// document.onkeypress = keyPressed(Event)

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    keyPressed(charStr);
};

