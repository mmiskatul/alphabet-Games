// function play(){
//     document.getElementById('home-screen').classList.add('hidden');
//     document.getElementById('play-ground').classList.remove('hidden');
// }
function handlekeyboardbuttonPress(event){
    const playerPress=event.key;
    console.log(playerPress);
    // console.log('playerPress',playerPress);
    if(playerPress ==='Escape'){
        gameOver();
    }
    const currentalphabet=document.getElementById('show-letter').innerText;
    const expectedAlphabet=currentalphabet.toLowerCase();
    removebackgroundcolorbyID(expectedAlphabet);
    // console.log(playerPress,expectedAlphabet);
    // check match or not
    if(playerPress===expectedAlphabet){
        // const currentScore=document.getElementById('current-score');
        // const ScoreText=currentScore.innerText;
        // const score =parseInt(ScoreText);
        // const newScore = score + 1;
        // currentScore.innerText=newScore;
        const score=update('current-score')
        const newScore=score+1;
        setvalue('current-score',newScore);
        continueGame();
        removebackgroundcolorbyID(expectedAlphabet);
    }
    else{
        // const currentlife=document.getElementById('current-life');
        // const currentLifeText=currentlife.innerText;
        const life =update('current-life');
        // removebackgroundcolorbyID(expectedAlphabet);
        const newlife = life-1;
        setvalue('current-life',newlife);
        if(newlife ===0){
            removebackgroundcolorbyID(expectedAlphabet);
            gameOver();
        }
        
    }
}
document.addEventListener('keyup',handlekeyboardbuttonPress)

function continueGame() {
    const alphabet = getRandomAlphabet();
    document.getElementById('show-letter').innerText = alphabet;
    setbackgroundColorById(alphabet);
}
function play() {
    hideElementById('home-screen');
    hideElementById('Score-page');
    showElementById('play-ground');
    setvalue('current-life',5);
    setvalue('current-score',0);
    

    continueGame();
}
function gameOver(){
    
        hideElementById('play-ground');
        showElementById('Score-page');
        const score = document.getElementById('current-score').textContent;
        document.getElementById('Score-board').textContent = score;
        // console.log(score);
        // setvalue('Score-board',score);
}
