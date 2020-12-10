function language() {
    const languageDisplayed = navigator.language || navigator.userLanguage;
    let charIndex = 0;
    let languageRegistred = "";

    while (languageRegistred.length < 2) {
        languageRegistred += languageDisplayed.charAt(charIndex);
        charIndex++;
    }

    console.log("The user language is: " + languageDisplayed);
    console.log("The user language registred is: " + languageRegistred);
}

language();