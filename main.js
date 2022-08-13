// szükséges változók létrehozása és definiálása

let matrix = [];
let stepCount = 0;
let cols = 3;
let rows = 3;
let mark = 'X';

// initState: játéktér feltöltése üres mezőkkel

const initState = () => {
    
};

// changeMatrixValue: egyes cellák azonosítása

const changeMatrixValue = (element) => {
    const row = parseInt(element.dataset.row, 10);
    const cell = parseInt(element.dataset.cell, 10);
    matrix[row][cell] = element.textContent;
};

// deleteSigns: kiválasztja az összes cellát és mindegyikben elhelyez egy string-et

const deleteSigns = () => {
    let elements = document.querySelectorAll(".cell");
    elements.forEach(item => {item.innerHTML =('')});
};

// increaseCounter: megtett lépések számát növeli eggyel

const increaseCounter = () => stepCount ++;

// modifyCell: beállítja az elem tartalmának a használt jelet,
// majd kattintásra (esemény) eltávolítja a handleClick függvényt.

const modifyCell = (element) => {
    
};

// setMark: a jelre beállítja a következő lépésnél használt jelet úgy, 
// hogy ha az X-et használtuk éppen, akkor 0 és fordítva

const setMark = () => {
    
};

// handleClick: függvények meghívása

const handleClick = (event) => {
        increaseCounter();
        modifyCell(event.target);
        setMark();
        changeMatrixValue(event.target);
        checkWinner();
};

// addClickListener: cellák kiválasztása és kattintásra handClick függvény 
// hozzáadása mindegyikhez

const addClickListener = () => {
    document.querySelectorAll(".cell").addEventListener("click", () => {
        handleClick ();
    })
}

// removeAllClickListeners: kiválasztja a cellákat, 
// és kattintásra (esemény) mindegyikről eltávolítja a handleClick függvényt

const removeAllClickListeners = () => {
    document.querySelectorAll('.cell').addClickListener("click", () => {
        removeAllClickListeners.remove(handleClick);
    })
}

// newGame: gomb kiválasztása és kattintásra függvények meghívása

const newGame = () => {
    document.querySelector(".reset").addEventListener("click", () => {
        initState();
        addClickListener();
        deleteSigns();
        setMessage('Playing...');
        setMark();
    });
    startGame();
}