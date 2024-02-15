// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('Your favorite Alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currantAlphabetElement = document.getElementById('current-alphabet');
    currantAlphabetElement.innerText = alphabet;
    
    // set background color
    setBackgroundColorByID(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}