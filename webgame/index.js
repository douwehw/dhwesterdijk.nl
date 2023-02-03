let cellSize = 25;
let rows = 22;
let cols = 22;
let board = document.querySelector("canvas")
let context;

let snakeX = cellSize * 5;
let snakeY = cellSize * 5;
let snake = [snakeX, snakeY];

let snakeBody = [];
let snakeColor = "lime";

let velocityX = 0;
let velocityY = 0;
let snakeSpeed = 100;

let foodX;
let foodY;

let gameOver = false

let deltaY;

let CellList = [];


for (let i = 0; i < 526; i++) {
    CellList.push([i])
}

window.onload = () => {
    board.height = rows * cellSize;
    board.width = cols * cellSize;
    context = board.getContext("2d");

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
            default:
                break;
        }
    };

    placeFood()
    setTimeout(update, snakeSpeed);
    setInterval(checkGameState, 1)
}

function update() {
    if (gameOver) {
        printData()
        return;
    }

    setTimeout(update, snakeSpeed)

    if (snakeX == foodX && snakeY == foodY) {
        setTimeout(snakeBody.push([foodX, foodY] * 5), snakeSpeed)
        placeFood();
    }

    createCells()

    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], cellSize, cellSize)
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            velocityX = 0;
            velocityY = 0;
        }
    }

    if (snakeBody.length) {
        snakeColor = "green"
        snakeBody[0] = [snakeX, snakeY]
        context.fillStyle = "lime"
        context.fillRect(snakeBody[0][0], snakeBody[0][1], cellSize, cellSize)
    }

    printData()
}

function printData() {
    document.querySelector('h2').innerHTML =
        `
    X: ${snakeX} <br>
    Y: ${snakeY} <br>
    VelocityX: ${velocityX} <br>
    VelocityY: ${velocityY} <br>
    Snake size: ${snakeBody.length} <br>
    Snake body XY: [${snakeBody}] <br>
    GameOver: ${gameOver} <br>
    FoodX: ${foodX} <br>
    FoodY: ${foodY} <br>
    `
}

function checkGameState() {
    if (snakeX > 500 || snakeX < 25 || snakeY > 500 || snakeY < 25) {
        gameOver = true;
        velocityX = 0;
        velocityY = 0;
    }

    if (deltaY == 100) {
        snakeSpeed += 10
        deltaY = 0
    }

    if (deltaY == -100) {
        snakeSpeed -= 10
        deltaY = 0
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * 21) * cellSize;
    foodY = Math.floor(Math.random() * 21) * cellSize;
    if (!foodX) {
        foodX += 25;
    }
    if (!foodY) {
        foodY += 25
    }
}

function createCells() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    CellList.forEach(element => {
        context.fillStyle = "red";
        context.fillRect(element, 0, cellSize, cellSize)
        context.fillRect(0, element, cellSize, cellSize)
        context.fillRect(element, 525, cellSize, cellSize)
        context.fillRect(525, element, cellSize, cellSize)
    });

    context.fillStyle = "blue";
    context.fillRect(foodX, foodY, cellSize, cellSize);

    context.fillStyle = `${snakeColor}`;
    snakeX += velocityX * cellSize;
    snakeY += velocityY * cellSize;
    context.fillRect(snakeX, snakeY, cellSize, cellSize);
}