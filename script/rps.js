const choices = ['rock', 'paper', 'scissors']
let choice = ''
let score = 0
let plays = 0
let PCscore = 0
let a = 0

const consol = document.getElementById('rps-consol')
const form = document.getElementById("guessField")
const feed = document.getElementById("textField")

// checks if user move is actually valid
function check() {
    if (form.value.toLowerCase() == "rock" ||
        form.value.toLowerCase() == "paper" ||
        form.value.toLowerCase() == "scissors") {
        feed.innerHTML = form.value.toLowerCase();
    }
    else {
        feed.innerHTML = "invalid input"
        PCscore += 1
    };
}

function generate() {
    choice = choices[Math.floor(Math.random() * 3)]
}

function calculate() {
    if (form.value.toLowerCase() == "r") {
        form.value = "rock"
    } else if (form.value.toLowerCase() == "p") {
        form.value = "paper"
    } else if (form.value.toLowerCase() == "s") {
        form.value = "scissors"
    }

    if (choice == "rock" && form.value.toLowerCase() == "paper" ||
        choice == "paper" && form.value.toLowerCase() == "scissors" ||
        choice == "scissors" && form.value.toLowerCase() == "rock") {
        feed.innerHTML = "you win"
        score += 1
        a = 1
    }
    else if (form.value.toLowerCase() == "rock" && choice == "paper" ||
        form.value.toLowerCase() == "paper" && choice == "scissors" ||
        form.value.toLowerCase() == "scissors" && choice == "rock") {
        feed.innerHTML = "you lose"
        PCscore += 1
        a = 2
    }
    else if (choice == form.value.toLowerCase()) {
        feed.innerHTML = "you tied"
        a = 3
    }

    document.getElementById('score').innerHTML = `score: ${score} / ${PCscore}`
    document.getElementById('plays').innerHTML = `plays: ${plays}`
}

function log() {
    consol.innerHTML += "<br>" + `Game #${plays}`
    consol.innerHTML += "<br>" + `You chose ${form.value}` + "<br>" + `The PC chose ${choice}`
    if (a == 1) { consol.innerHTML += "<br>" + "You win" }
    else if (a == 2) { consol.innerHTML += "<br>" + "You lose" }
    else if (a == 3) { consol.innerHTML += "<br>" + "You tied" }
}

function play() {
    plays += 1
    check()
    generate()
    calculate()
    log()
    a = 0
}

