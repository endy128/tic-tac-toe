const playerFactory = (name, token) => {
    return {name, token};
};



const gameBoard = (() => {
    'use strict';

    let _board = [
        [ '', '', '' ],
        [ '', '', '' ],
        [ '', '', '' ]
    ];

    let _playerTurn = 'Player1';

    function getTurn () {
        return _playerTurn;
    }
    function setTurn (player) {
        _playerTurn = player;    
    }

    function getBoard() {
        return _board;
    }

    function resetBoard() {
        _board = [
            [ '', '', '' ],
            [ '', '', '' ],
            [ '', '', '' ]
        ];
    }

    function setSquare(x, y, marker) {
        if (_board[y][x] === '') {
            _board[y][x] = marker;
        } else {
            // if the square chosen is already taken, add "error" class to the square
            let square = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            square.classList.add('error');
            return ('error');
        }
    }

    return {
         getBoard,
         setSquare,
         getTurn,
         setTurn,
         resetBoard
    };
})();





const render = (() => {
    'use strict';

    function renderBoard() {
        // cache a copy of the board DOM
        const divBoard = document.querySelector('[data-name="board"]');
        // get a copy of the current game board
        const board = gameBoard.getBoard(); 
        // render the board array item by array item
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const div = document.createElement('div');
                const span = document.createElement('span');
                // give each div a data-* of it's coordinates in the grid
                div.dataset.x = j;
                div.dataset.y = i;
                div.dataset.name = 'square';
                div.className = 'square';
                // if (x == j && y == i) {
                //     console.log("Error class added");
                //     div.className += ' error';
                // }
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







const cpuPlay = (() => {

    // get array of all empty squares
    // pick one form list at random
    // set that square on the board
    // render the new board

})();

const addEventListeners = (() =>  {
    return () => {
    const squares = Array.from(document.querySelectorAll('[data-name="square"]'));
    squares.forEach(square => square.addEventListener('click', playerMove));
    squares.forEach(square => square.addEventListener('transitionend', removeTransition));
    const btnReset = document.querySelector('[data-name="reset"]');
    btnReset.addEventListener('click', resetBoard);
    }
})();

// when a taken square is chosen by a player, it highlights in red
// this removed the "error" class from that square and the square transitions back
// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('error');   
// }; 

const removeTransition = ((e) => {
    return (e) => {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('error');   
    }
})(); 



const playerMove = ((e) => {
     return (e) => {   
        let x = e.target.dataset.x;
        let y = e.target.dataset.y;
        let token = '';
        if (gameBoard.getTurn() === 'Player1') {
            token = 'X';
        } else {
            token = 'O'
        }
        gameBoard.setSquare(x, y, token);
        drawSquare(x, y, token);
        toggleTurn();
    }
})();

const drawSquare = ((x, y, token) => {
    return (x, y, token) => {
        const div = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        const playerToken = document.createTextNode(token);
        const span = document.createElement('span');
        div.innerHTML = '';
        span.appendChild(playerToken);
        div.appendChild(span);
    }
})();



const resetBoard = (() => {
    return () => {
        clearBoard();
        render.renderBoard();
        addEventListeners();
        if (gameBoard.getTurn() === 'Player2') {
            toggleTurn();
        }
    }
})();


const clearBoard = (() => {
    return () => {
        document.querySelector('[data-name="board"]').innerHTML = '';
        gameBoard.resetBoard();
    }
})();

const toggleTurn = (() => {
    const div = document.querySelector('[data-name="active-player"]');
    const token1 = document.createTextNode('X');
    const token2 = document.createTextNode('O');
    const span = document.createElement('span');
    const activePlayer = document.querySelector('[data-name="active-player"]');
    span.appendChild(token1);
    div.appendChild(span);

        return () => {
            // clear the current player token from the span
            span.innerHTML = '';
            // switch between players and set the "who's is the next go" at the bottom
            if (gameBoard.getTurn() === 'Player1') {
                gameBoard.setTurn('Player2');
                span.appendChild(token2);
                div.appendChild(span);
                activePlayer.classList.remove('player1');
                activePlayer.classList.add('player2');
            } else {
                gameBoard.setTurn('Player1');
                span.appendChild(token1);
                div.appendChild(span);
                activePlayer.classList.remove('player2');
                activePlayer.classList.add('player1');
            }
    }
})();



const gamePlay = (() => {
    'use strict';

    render.renderBoard();
    addEventListeners();
    // is it player1's go?
    // player pick square
    // is it empty?
    // set square on board
    // render new board

    // player2 (cpu) turn
    // cpu picks a spot

    // check for winning state

    // player1 turn
    // repeat

})();












// create the players
const player1 = playerFactory('Player1', 'X');
const player2 = playerFactory('Player2', 'O');
