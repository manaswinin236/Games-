let userInput = '';
let upoint = 0;
let cmpoint = 0;
let round = 1;

function play(choice) {
    if (round <= 3) { 
        userInput = choice;
        let computerInput = getRandomChoice();

        if (userInput === computerInput) {
            cmpoint += 0;
            upoint += 0;
        }
        if (userInput == 'rock' && computerInput == 'paper') {
            cmpoint++;
            console.log('Computer wins');
        }
        if (userInput == 'rock' && computerInput == 'scissor') {
            upoint++;
            console.log('You win');
        }
        if (userInput == 'paper' && computerInput == 'scissor') {
            cmpoint++;
            console.log('Computer wins');
        }
        if (userInput == 'paper' && computerInput == 'rock') {
            upoint++;
            console.log('You win'); 
        }
        if (userInput == 'scissor' && computerInput == 'rock') {
            cmpoint++;
            console.log('Computer wins');   
        }
        if (userInput == 'scissor' && computerInput == 'paper') {
            upoint++;
            console.log('You win');
        }

        document.getElementById('round-number').innerHTML = round;
        showchosen(userInput, computerInput);
        updatepoint();

        if (round === 3) {
            if (upoint === cmpoint) {
                displayResult('It\'s a tie!');
            }
            if (upoint > cmpoint) {
                displayResult('You win!');
            }
            if (upoint < cmpoint) {
                displayResult('Computer wins!');
            }
            whatNext(); 
        }

        round++; 
    }
}

function showchosen(ui, ci) { 
    document.getElementById('uopt').innerHTML = ui;
    document.getElementById('copt').innerHTML = ci;
}

function displayResult(result) {
    document.getElementById('winner').innerHTML = result;
}

function updatepoint() {
    document.getElementById('player-score').innerHTML = upoint;
    document.getElementById('computer-score').innerHTML = cmpoint;
}

function whatNext() {
    document.getElementById('play-again').style.display = 'block';
    document.getElementById('play-again').onclick = reset;
}

function reset() {
    round = 1;        
    upoint = 0;       
    cmpoint = 0;      
    userInput = '';   

    document.getElementById('round-number').innerHTML = 0;
    document.getElementById('player-score').innerHTML = 0;
    document.getElementById('computer-score').innerHTML = 0;
    document.getElementById('uopt').innerHTML = '';
    document.getElementById('copt').innerHTML = '';
    document.getElementById('winner').innerHTML = '';
    document.getElementById('play-again').style.display = 'none';
}

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}