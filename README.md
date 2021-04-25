# PianoPractise
A  small practise project involving HTML, CSS and JavaScript.

26/04/2021 Update:

I've removed the audio files and used the Tonejs module to add a synth instead, its the default synth sound for now and sounds horrible but it allows for all notes to match up correctly, I've also added the ability for the user to change the octave as well as sustain notes by holding a key press. I've adjusted the css animation to reflect this however there is a slight break in the animation if the user presses a key again withing 0.5 seconds of releasing it, which I will fix in the next update. I also added keyboard instructions below the piano.

Tonejs allows for sampling of audio and customising of synths so I will be experimenting with this going forward, I intend to use a real piano sample as the default sound with user having the option to change to synth sound. 

---------------------------

use Q,W,E,R,T,Y,U for white keys and G,H,J,K,L for black keys.

I created this project entirely except for the audio files which I pulled off a royalty free site. The notes A, B, G# and A# are in the wrong octave.
Rather than finding other samples I've decided to try and just take the C sample and adjust it's pitch accordingly for all the keys, which is the next task
on the to do list for the piano if I continue working on it.

In undertaking this project I've learned how to make CSS animations repeat and also had some practise with positioning in CSS. I used 

// void element.offsetWidth;

to null the value on the piano key that was clicked, for some reason which I don't fully understand CSS animations can not repeat
without changing something like this to reset it. I guess its because the animation class is already added to the class list and perhaps
voiding the offsetWidth refreshes the element somehow, removing the animation class.
