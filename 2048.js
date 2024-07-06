// 2048.js

// Initialize game variables
let board = [];
let score = 0;
let bestScore = 0;

// Initialize the game board with empty tiles
function initBoard() {
    board = Array.from({ length: 4 }, () => Array(4).fill(0));
    addNewTile();
    addNewTile();
    updateBoard();
}

// Add a new tile (either 2 or 4) to a random empty spot on the board
function addNewTile() {
    let emptySpots = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === 0) {
                emptySpots.push({ x: i, y: j });
            }
        }
    }
    if (emptySpots.length > 0) {
        let spot = emptySpots[Math.floor(Math.random() * emptySpots.length)];
        board[spot.x][spot.y] = Math.random() < 0.9 ? 2 : 4;
    }
}

// Update the visual representation of the board
function updateBoard() {
    const gameBoardElement = document.getElementById('game-board');
    gameBoardElement.innerHTML = '';
    board.forEach(row => {
        row.forEach(tile => {
            const tileElement = document.createElement('div');
            tileElement.className = 'tile';
            if (tile !== 0) {
                tileElement.textContent = tile;
                tileElement.style.backgroundColor = getTileColor(tile);
                tileElement.style.color = getTileTextColor(tile);
            }
            gameBoardElement.appendChild(tileElement);
        });
    });
    document.getElementById('score').textContent = score;
    document.getElementById('best-score').textContent = bestScore;
}

// Define tile colors based on tile value
function getTileColor(value) {
    switch (value) {
        case 2: return '#eee4da';
        case 4: return '#ede0c8';
        case 8: return '#f2b179';
        case 16: return '#f59563';
        case 32: return '#f67c5f';
        case 64: return '#f65e3b';
        case 128: return '#edcf72';
        case 256: return '#edcc61';
        case 512: return '#edc850';
        case 1024: return '#edc53f';
        case 2048: return '#edc22e';
        default: return '#3c3a32';
    }
}

// Define tile text colors based on tile value
function getTileTextColor(value) {
    return value <= 4 ? '#776e65' : '#f9f6f2';
}

// Restart the game
function restartGame() {
    if (score > bestScore) {
        bestScore = score;
    }
    score = 0;
    initBoard();
}

// Handle keyboard input for game movement
document.addEventListener('keydown', function(event) {
    let moved = false;
    switch (event.key) {
        case 'ArrowUp':
            moved = moveTiles('up');
            break;
        case 'ArrowDown':
            moved = moveTiles('down');
            break;
        case 'ArrowLeft':
            moved = moveTiles('left');
            break;
        case 'ArrowRight':
            moved = moveTiles('right');
            break;
    }
    if (moved) {
        addNewTile();
        updateBoard();
    }
});

// Handle touch input for game movement
let touchStartX = 0;
let touchStartY = 0;
document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchend', function(event) {
    let touchEndX = event.changedTouches[0].clientX;
    let touchEndY = event.changedTouches[0].clientY;

    let deltaX = touchEndX - touchStartX;
    let deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            moveTiles('right');
        } else {
            moveTiles('left');
        }
    } else {
        if (deltaY > 0) {
            moveTiles('down');
        } else {
            moveTiles('up');
        }
    }

    addNewTile();
    updateBoard();
});

// Move tiles in the specified direction
function moveTiles(direction) {
    let moved = false;
    switch (direction) {
        case 'up':
            moved = moveUp();
            break;
        case 'down':
            moved = moveDown();
            break;
        case 'left':
            moved = moveLeft();
            break;
        case 'right':
            moved = moveRight();
            break;
    }
    return moved;
}

// Move tiles up
function moveUp() {
    // Implement move up logic here
    console.log('Move up');
    return true; // Replace with actual logic
}

// Move tiles down
function moveDown() {
    // Implement move down logic here
    console.log('Move down');
    return true; // Replace with actual logic
}

// Move tiles left
function moveLeft() {
    // Implement move left logic here
    console.log('Move left');
    return true; // Replace with actual logic
}

// Move tiles right
function moveRight() {
    // Implement move right logic here
    console.log('Move right');
    return true; // Replace with actual logic
}

// Initialize the game
initBoard();
