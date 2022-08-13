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

// checkValues: végigmegy a kapott tömb sorain,
// és a sor minden EGYES elemének értéke esetében megvizsgálja, hogy az 0 vagy X. 
// Ha a sor minden egyes eleme 0 vagy X, akkor a 0 vagy az X győzött

const checkValues = (array) => array.map(row => {/*Ide írd a kódot!*/})
    .indexOf(true) !== -1;

    //Ha true-t kapunk visza adott sorra, akkor 
    //annak indexét vizsgálva nem kaphatunk -1-et.
    //Azaz az elem benne van a tömbben.
    //*/

    const checkColumnValues = () => 
    checkValues(matrix.map((array, i) => 
    array.map((item, j) => matrix[j][i])));

    const checkDiagonalValues = () =>
    checkValues([
    matrix.map((array, i) => matrix[i][i]),
    matrix.map((array, i) => matrix[i][matrix[i].length - i - 1])
    ]);

    //Miután az első függvénnyel leellenőriztük a sorok tartalmát,
    //a fentiekkel megvizsgáljuk az oszlopok és az átlókban lévő mezők tartalmát.
    //Ez azért fontos, mert így tudhatjuk meg, 
    //hogy lesz-e három azonos jel egymás mellett/alatt/átlósan.

// checkWinner: 

const checkWinner = () => {},

//setMessage: kiválasztja a message osztályú elemet, és az üzenetet állítja be a div tartalmának

const setMessage = (message) => { 
    const message = document.querySelectorAll(".message");
    message.textContent = message; 
}

//startGame: függvényeket hív meg

const startGame = () => {
    initState();
    addClickListener();
    newGame();
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