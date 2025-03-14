// function play(){
//     document.getElementById('home-screen').classList.add('hidden');
//     document.getElementById('play-ground').classList.remove('hidden');
// }
function continueGame() {
    const alphabet = getRandomAlphabet();
    document.getElementById('show-letter').innerText = alphabet;
    setbackgroundColorById('alphabet');
}
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
