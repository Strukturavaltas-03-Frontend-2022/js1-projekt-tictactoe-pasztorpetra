// szükséges változók létrehozása és definiálása

let matrix = [];
let stepCount = 0;
let cols = 3;
let rows = 3;
let mark = 'X';

// initState elnevezésű függvény kifejtése

const initState = () => {
    
}

// changeMatrixValue függvény

const changeMatrixValue = (element) => {
    const row = parseInt(element.dataset.row, 10);
    const cell = parseInt(element.dataset.cell, 10);
    matrix[row][cell] = element.textContent;
}

// deleteSigns elnevezésű függvény kifejtése

const newGame = () => {
    document.querySelector(".reset").addEventListener("click", () => {
        initState(),
        addClickListener(),
        deleteSigns(),
        setMessage('Playing...'), 
        setMark()
    });
    startGame();
}