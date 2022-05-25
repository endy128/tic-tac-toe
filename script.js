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
        if (_board[y][x] === '') {
            _board[y][x] = marker;
        } else {
            let square = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            // square.classList.add('error');
            return ('error');
        }
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
    const divBoard = document.querySelector('[data-name="board"]');

    // get a copy of the current game board
    const board = gameBoard.getBoard(); 

    function renderBoard(x, y) {
        // render the board array item by array item
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const div = document.createElement('div');
                const span = document.createElement('span');
                // give each div a data-* of it's coordinates in the grid
                div.dataset.x = j;
                div.dataset.y = i;
                div.className = 'square';
                if (x == j && y == i) {
                    console.log("Error class added");
                    div.className += ' error';
                }
                div.style.transition = "all 0.7s";
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
        if (gameBoard.setSquare(x, y, "X") === 'error') {
            console.log('error');
            clearBoard();
            render.renderBoard(x, y); // send the square co-ord's to render function to give the square an "error" class to highlight a bad move
            addEventListeners();
        } else {
        clearBoard();
        render.renderBoard(); // send the square co-ord's to render function to give the square an "error" class to highlight a bad move
        addEventListeners();
    //    document.querySelectorAll('.square').style.transition = 'all 0.7s';
        }
    }));
};



function clearBoard () {
    document.querySelector('[data-name="board"').innerHTML = '';
}