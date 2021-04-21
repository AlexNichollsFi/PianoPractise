# PianoPractise
A  small practise project involving HTML, CSS and JavaScript.

I created this project entirely except for the audio files which I pulled off a royalty free site. The notes A, B, G# and A# are in the wrong octave.
rather than finding other samples I've decided to try and just take the C sample and adjust it's pitch accordingly for all the keys which is the next task
on the to do list for it.

In undertaking this project I've learned how to make CSS animations repeat and also had some practise with positioning in CSS. I used 

// void element.offsetWidth;

to null the value on the piano key that was clicked, for some reason which I don't fully understand CSS animations can not repeat
without changing something like this to reset it. I guess its because the animation class is already added to the class list and perhaps
voiding the offsetWidth refreshs the element somehow, removing the animation class.
