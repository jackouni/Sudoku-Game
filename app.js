// --- VARIABLES & ELEMENT-SELECTORS --- //

const sudokuBoard = document.getElementById('sudoku-board') ;
const errorCount = document.getElementById('error-count') ; 
const numbersContainer = document.getElementById('numbers-container') ;

let numSelected = null ;
let tileSelected = null ;

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
    for (let i = 1; i < 10; i++) {
        let number = document.createElement('div')
        number.id = i 
        number.innerText = i
        number.addEventListener('click', selectNumber)  
        number.classList.add('number')
        numbersContainer.appendChild(number)
    }

    for (let row = 0; row < 9; row++) {
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
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove('selected-number')
     } 
     numSelected = this
     numSelected.classList.add('selected-number')
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != ""){
            return ; 
        }
        else {
            this.innerText = numSelected.id  ;
        }
     } 
}




