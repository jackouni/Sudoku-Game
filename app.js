// SELECTORS AND ELEMENTS 
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

function setGame() {
    for (let i = 1; i < 10; i++) {
        let number = document.createElement('div')
        number.id = i 
        number.innerText = i
        number.classList.add('number')
        sudokuBoard.appendChild(number)
        numbersContainer.appendChild(number)
    }
}
