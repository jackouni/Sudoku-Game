// --- VARIABLES & ELEMENT-SELECTORS --- //

const sudokuBoard = document.getElementById('sudoku-board') ;
const errorCount = document.getElementById('error-count') ; 
const numbersContainer = document.getElementById('numbers-container') ;
const solveButton = document.getElementById('solve-btn') ;

let numSelected = null ;
let tileSelected = null ;
let boardSolved = false ; 

let errors = 0 ; 

let boardInit = [
        "--74916-5",
        "2---6-3-9",
        "-----7-1-",
        "-586----4",
        "--3----9-",
        "--62--187",
        "9-4-7---2",
        "67-83----",
        "81--45---"
]

let boardSolution = [
        "387491625",
        "241568379",
        "569327418",
        "758619234",
        "123784596",
        "496253187",
        "934176852",
        "675832941",
        "812945763"
    ]

window.onload = function() {
    setGame() ; 
}


// --- GAME FUNCTIONS --- // 

function setGame() {
    for (let i = 1; i < 10; i++) { // Create the number tiles for the number selection row.
        let number = document.createElement('div')
        number.id = i 
        number.innerText = i
        number.addEventListener('click', selectNumber)  
        number.classList.add('number')
        numbersContainer.appendChild(number)
    }

    for (let row = 0; row < 9; row++) { // Create the tiles for the Sudoku Board.
        for (let col = 0; col < 9; col++) {
            let tile = document.createElement('div')
            tile.addEventListener('click', selectTile)
            tile.id = `${row}-${col}`
            tile.classList.add('board-tile')
            sudokuBoard.append(tile)

            if (boardInit[row][col] != '-') {
                tile.innerText = boardInit[row][col];
                tile.classList.add('starter-numbers')
            }

            if (row == 2 || row == 5){
                tile.style.borderBottom = 'var(--borders)'
            }
            if (col == 3 || col == 6) {
                tile.style.borderLeft = 'var(--borders)'
            }
        }
    }
}

function resetGame() {
    if (boardSolved == true){
        let tiles = document.getElementsByClassName('board-tile') ;
        while(tiles.length > 0){
            tiles[0].parentNode.removeChild(tiles[0]) ;
        }
        let numberTiles = document.getElementsByClassName('number') ;
        while (numberTiles.length > 0) {
            numberTiles[0].parentNode.removeChild(numberTiles[0]) ;

        }
    }
    resetButton.style.display = 'none' ;
    solveButton.style.display = 'inline' ;

    errors = 0 ;
    errorCount.innerText = '0'


    setGame()
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove('selected')
     } 
     numSelected = this
     numSelected.classList.add('selected')
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != ""){
            return ; 
        } else {
            let tileIndex = this.id.split('-') ;
            let solution = boardSolution[tileIndex[0]][tileIndex[1]] ; 
    
            if (numSelected.id == solution) {
                this.innerText = numSelected.id ;
                return ;
            }
            else {
            errors++ ;
            errorCount.innerText = errors ;
            }
        }
    } 
}

function solveBoard() {
    let allBoardTiles = document.querySelectorAll('.board-tile') ;
    for (let i = 0; i < allBoardTiles.length; i++) {
        let tileIndex = allBoardTiles[i].id.split('-') ;
        let solution = boardSolution[tileIndex[0]][tileIndex[1]] ;
        allBoardTiles[i].innerText = solution  
    }
    solveButton.style.display = 'none' ;

    boardSolved = true ;
    resetButton = document.createElement('button') ;
    resetButton.id = 'reset-btn' ;
    resetButton.innerText = 'Reset' ;
    document.getElementById('header').appendChild(resetButton) ;
    resetButton.addEventListener('click', resetGame) ;
}

solveButton.addEventListener('click', solveBoard) ;







