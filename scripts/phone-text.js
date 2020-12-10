//Where the text is written
const typeTextSpan = document.querySelector(".typed-text");

//The text we wat to apear
const textToType = "Your business";

//How log before typing again
const typingDelay = 150;

//What is the char index
let charIndex = 0;

function type() {
    if (charIndex < textToType.length) {

        //Start afer 1sec (1000 ms)
        setTimeout(function() {
            typeTextSpan.textContent += textToType.charAt(charIndex);
            charIndex++;
        }, 1000);

    }

    //When to end the function (when if function is no longer true) (add a delay for each letter)
    setTimeout(type, typingDelay);
}

type();