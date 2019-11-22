
function ageInDays(){
    let birthYear = prompt('Enter your birth year');
    if (!this.birthYear){
        //alert('Please specify a Birth year');
    }
    let date = new Date();
    let ageInDayss = (date.getFullYear() - birthYear) * 365;
    let h1 = document.createElement('h1');
    let result = document.createTextNode('You are '+ ageInDayss+' Days.');
    h1.setAttribute('id', 'ageInDays');
    h1.append(result);
    document.getElementById('flex-box-result').appendChild(h1);
    //console.log(ageInDayss); 
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// RPS Game
function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomBotNumber());
    results = decideWinner(humanChoice, botChoice);
    message = finaMessage(results);
    //console.log(humanChoice);
    //console.log(botChoice);
    //console.log(results);
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);
}

function randomBotNumber() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper':0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors':0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock':0}
    }

    let yourScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finaMessage([humanScore,computerScore]){
    if (humanScore === 1) {
        return {'message': 'You Won!', 'color': 'green'};
    }else if (humanScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    }else {
        return {'message': 'You Lost!', 'color': 'red'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, message) {
    let imageDB = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    let botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+ imageDB[humanImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'></img>";
    messageDiv.innerHTML = "<h1 style='color: "+ message['color'] +"; font-size: 60px; padding: 30px'>"+message['message']+"</h1>";
    botDiv.innerHTML = "<img src='"+ imageDB[botImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'></img>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}


// Change Colors

let allButtons = document.getElementsByTagName('button');

let copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}

function changeColor(selectedOption) {
    console.log(selectedOption.value);
    if (selectedOption.value === 'red') {
        buttonsRed();
    } else if (selectedOption.value === 'green') {
        buttonsGreen();
    }else if (selectedOption.value === 'reset') {
        buttonsReset();
    }else if (selectedOption === 'random') {
        buttonsRandom();
    }
}

function buttonsRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonsReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonsRandom() {
    let chioces = ['btn-success', 'btn-danger', 'btn-warning', 'btn-primary'];
    for (let i = 0; i < allButtons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(chioces[randomNumber]);
    }
}
