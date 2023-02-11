/*! *****************************************************************************
 * SPECIAL THANKS TO https://github.com/Medikenji
 * FOR THE SOUND DESIGN OF THE VARIOUS MOVEMENT AND ACTIONS
 * 
 * MADE BY https://github.com/48exa WITH HELP OF KENNY YIP 
 * FROM https://www.youtube.com/@KennyYipCoding/
 **************************************************************************** **/

let cellSize = 25;
let rows = 22;
let cols = 22;
let board = document.querySelector("canvas");
let boardColor = localStorage.getItem("theme");
/** Declaration of the rendering type of the `<canvas>`*/
let context;

let audioPlay = new Audio("sounds/play.wav");
let audioMove = new Audio("sounds/movement.wav");
let audioEat = new Audio("sounds/pickup.wav");
let audioDie = new Audio("sounds/death.wav");
let audioWin = new Audio("sounds/victory.wav")

let snakeX = cellSize * 5;
let snakeY = cellSize * 5;
let snake = [snakeX, snakeY];

/** @type Color*/
let snakeColor = "lime";
let snakeSize = 0;

let velocityX = 0;
let velocityY = 0;

/**
 * Set the speed at which the snake moves. 
 * Speed is calculated in ms/update, the lower the ms the faster it updates.
 * @type milliseconds
 */
let snakeSpeed = 100;

let foodX;
let foodY;

let maxScore = localStorage.getItem("maxScore");
let gameStart = false;
let gameOver = false;
let gameOverType;
/**
 * A simple iterant, needed to be global scope to be able to count the seconds passed.
 * The value of this variable is equal to the amount of seconds passed in a running game.
 * @type seconds
 */
let secondsPassed = 0;
/** @type minutes */
let minutesPassed = 0;

window.onload = () => {
    /**
     * Array consisting of the size of the board.
     * @type Array
     */
    let CellList = [];
    for (let i = 0; i < 526; i++) {
        CellList.push([i]);
    }
    board.height = rows * cellSize;
    board.width = cols * cellSize;
    context = board.getContext("2d");

    placeFood();
    setInterval(checkGameState, 1);

    context.fillStyle = localStorage.getItem("theme");
    context.fillRect(0, 0, board.width, board.height);

    CellList.forEach(itemInArray => {
        context.fillStyle = "red";
        context.fillRect(itemInArray, 0, cellSize, cellSize);
        context.fillRect(0, itemInArray, cellSize, cellSize);
        context.fillRect(itemInArray, 525, cellSize, cellSize);
        context.fillRect(525, itemInArray, cellSize, cellSize);
    });

    snakeBody = [];
}

/**
 * I made this function to try and collect as many function calls into one large function.
 * This (hopefully) organises the codebase a little at the cost of document size and line size.
 * @contains - Event-based check for the WASD and arrow keys to move the snake
 * - Food generation when the snake is over a food square.
 * This also makes the snake grow 1 unit in size
 * @returns void
 */
function main() {
    if (gameOver) {
        velocityX = 0;
        velocityY = 0;
        document.querySelector(".blur-bg").style.filter = "blur(5px)";
        document.querySelector(".deathScreen").style.display = "block";

        switch (gameOverType) {
            case "Out of bounds":
                audioDie.play();
                document.querySelector(".deathScreen h3").innerHTML = "You went out of bounds!";
                document.querySelector(".deathScreen h4").style.color = "red";
                document.querySelector(".deathScreen h4").innerHTML = "You lost";
                break;
            case "Self-cannibalism":
                audioDie.play();
                document.querySelector(".deathScreen h3").innerHTML = "You ate yourself!";
                document.querySelector(".deathScreen h4").style.color = "red";
                document.querySelector(".deathScreen h4").innerHTML = "You lost";
                break;
            case "Final score reached":
                audioWin.play();
                document.querySelector(".deathScreen h3").innerHTML = "You reached the final score!";
                document.querySelector(".deathScreen h4").style.color = "green";
                document.querySelector(".deathScreen h4").innerHTML = "You won!";
            default:
                audioDie.play();
                document.querySelector("deathScreen h3").innerHTML = "Game end."
                document.querySelector(".deathScreen h4").innerHTML = "Undefined";
        }

        document.querySelector(".deathScreen #points").innerHTML = `Points: ${snakeSize}`;
        document.querySelector(".deathScreen #time").innerHTML = `Time spent: ${secondsPassed}s`;
        return;
    }

    changeValue();

    onkeydown = (event) => {
        switch (event.code) {
            case "KeyW":
                if (velocityY != 1) {
                    velocityX = 0;
                    velocityY = -1;
                }
                break;
            case "KeyS":
                if (velocityY != -1) {
                    velocityX = 0;
                    velocityY = 1;
                }
                break;
            case "KeyA":
                if (velocityX != 1) {
                    velocityX = -1;
                    velocityY = 0;
                }
                break;
            case "KeyD":
                if (velocityX != -1) {
                    velocityX = 1;
                    velocityY = 0;
                }
                break;
            case "ArrowUp":
                if (velocityY != 1) {
                    velocityX = 0;
                    velocityY = -1;
                }
                break;
            case "ArrowDown":
                if (velocityY != -1) {
                    velocityX = 0;
                    velocityY = 1;
                }
                break;
            case "ArrowLeft":
                if (velocityX != 1) {
                    velocityX = -1;
                    velocityY = 0;
                }
                break;
            case "ArrowRight":
                if (velocityX != -1) {
                    velocityX = 1;
                    velocityY = 0;
                }
                break;
            default:
                break;
        }
        audioMove.play()
    };

    if (snakeX == foodX && snakeY == foodY) {
        snakeSize++;
        placeFood();
        setTimeout(snakeBody.push([foodX, foodY] * 5), snakeSpeed);
    }

    createCells();
    document.querySelector(".length").innerHTML = snakeSize;
    setTimeout(main, snakeSpeed);
}

/** Updates the time played in an ongoing session.*/
function updateGameTime() {
    if (secondsPassed > 59) {
        secondsPassed = 0;
        minutesPassed++;
        document.querySelector(".time").innerHTML = `${minutesPassed}:0${secondsPassed}`;
    } else if (minutesPassed) {
        if (secondsPassed < 10) {
            document.querySelector(".time").innerHTML = `${minutesPassed}:0${secondsPassed}`;
        } else {
            document.querySelector(".time").innerHTML = `${minutesPassed}:${secondsPassed}`;
        }
    } else {
        document.querySelector(".time").innerHTML = `${secondsPassed}s`;
    }
    secondsPassed++;
    if (!gameOver) {
        setTimeout(updateGameTime, 1000);
    }
}

/**
 * Seperate function for checking if the living status of the snake.
 * I made this a seperate function from `main` so I can update it faster.
 * This way you should never be able to bug through what should be a death.
 * @contains - Check for if the snake is out of bounds. 
 * - Check if the final score set by the user is reached.
 */
function checkGameState() {
    if (snakeX > 500 || snakeX < 25 || snakeY > 500 || snakeY < 25) {
        gameOverType = "Out of bounds";
        gameOver = true;
        velocityX = 0;
        velocityY = 0;
    }

    if (snakeSize == maxScore) {
        gameOverType = "Final score reached";
        gameOver = true;
        velocityX = 0;
        velocityY = 0;
    }
}

/**
 * Chooses a random spot for the food that is within the bounds of the black part
 * of the board. The `if-statements` make sure that if the food is placed on
 * the red border, that it is moved to be next to it instead of inside it.
 */
function placeFood() {
    audioEat.play()
    foodX = Math.floor(Math.random() * 21) * cellSize;
    foodY = Math.floor(Math.random() * 21) * cellSize;
    if (!foodX) {
        foodX += 25;
    }
    if (!foodY) {
        foodY += 25;
    }
}

/**
 * A seperate function for generating the cells on the board.
 * @contains 
 * - Theme setter
 * - Code to place the snake of the head. 
 * - Code to place the food. 
 * - Code to place
 * the trailing body of the snake.
 */
function createCells() {
    /**Board rendering */
    context.fillStyle = localStorage.getItem("theme");
    context.fillRect(25, 25, board.width - 50, board.height - 50);

    /**Grid rendering */
    for (let i = 25; i < 501; i += 25) {
        context.fillStyle = "rgb(30, 30, 30)";
        context.fillRect(i, 25, 1, 500);
        context.fillRect(25, i, 500, 1);
    }

    /**Snake head rendering */
    context.fillStyle = snakeColor;
    snakeX += velocityX * cellSize;
    snakeY += velocityY * cellSize;
    context.fillRect(snakeX, snakeY, cellSize, cellSize);

    /**Snake tail rendering & self-eating check */
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snakeBody[i][0], snakeBody[i][1], cellSize, cellSize);
        if (snakeSize > 1 && snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOverType = "Self-cannibalism"
            gameOver = true;
            velocityX = 0;
            velocityY = 0;
        }
    }

    /**Food rendering */
    context.fillStyle = "blue";
    context.fillRect(foodX, foodY, cellSize, cellSize);

    /**Check to make sure the body grows beyond 1 block */
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    /**Check to make sure the head is always lime and the tail is green */
    if (snakeBody.length) {
        snakeColor = "green";
        snakeBody[0] = [snakeX, snakeY];
        context.fillStyle = "lime";
        context.fillRect(snakeBody[0][0], snakeBody[0][1], cellSize, cellSize);
    }
}

/**
 * Change the values of the game by the drop-down menus in the HTML nav-bar
 * @contains 
 * - board theme setter.
 * - Max score setter.
 */
let changeValue = () => {
    let boardColorCheck = document.querySelector("#theme").value;
    let maxScoreCheck = document.querySelector("#score").value;

    if (boardColorCheck == "light") {
        localStorage.setItem("theme", "white");
    } else {
        localStorage.setItem("theme", "black");
    }

    localStorage.setItem("maxScore", maxScoreCheck);
}

/** Starts the game when the button is pressed.*/
function start() {
    audioPlay.play();
    updateGameTime();
    document.querySelector("button.start-btn").style.display = "none";
    document.querySelector(".blur-bg").style.filter = "blur(0px)";
    main();
}