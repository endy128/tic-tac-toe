const playerFactory = (name) => {
    return {name};
};



const gameBoard = (() => {
    'use strict';

    let _board = [
        [ '', '', '' ],
        [ '', '', '' ],
        [ '', '', '' ]
    ];

    function getBoard() {
        return _board;
    }

    function setSquare(x, y, marker) {
        _board[y][x] = marker;
    }

    return {
         getBoard,
         setSquare
    };
})();


// create the players
const player1 = playerFactory('kate');
const player2 = playerFactory('neil');

console.log(player1.name);


const render = (() => {
    'use strict';

    // cache a copy of the board DOM
    const divBoard = document.querySelector('[data-name="board"');

    // get a copy of the current game board
    const board = gameBoard.getBoard(); 

    function renderBoard() {
        // render the board array item by array item
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const div = document.createElement('div');
                const span = document.createElement('span');
                // give each div a data-* of it's coordinates in the grid
                div.dataset.x = j;
                div.dataset.y = i;
                div.className = 'square';
                let content = document.createTextNode(board[i][j]);
                span.appendChild(content);
                div.appendChild(span);
                divBoard.appendChild(div);
            }
        }
    }

    return {
        renderBoard,
    };
})();


const gamePlay = (() => {

    render.renderBoard();
    addEventListeners();
    // player pick square
    // is it empty?
    // set square on board
    // render new board
    // cpu turn


})();


const cpuPlay = (() => {

    // get array of all empty squares
    // pick one form list at random
    // set that square on the board
    // render the new board

})();

function addEventListeners()  {
    
    const squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => square.addEventListener('click', () => { 
        let x = square.getAttribute('data-x');
        let y = square.getAttribute('data-y');
        gameBoard.setSquare(x, y, "X");
        clearBoard();
        render.renderBoard();
        addEventListeners();
    }));
};



function clearBoard () {
    document.querySelector('[data-name="board"').innerHTML = '';
}