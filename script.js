const playerFactory = (name) => {
    return {name};
};



var gameBoard = (() => {
    'use strict';

    var _board = [
        [ "A", "B", "C" ],
        [ "D", "E", "F" ],
        [ "G", "H", "I" ]
    ];

    function getBoard() {
        return _board;
    }

    function setSquare(x, y, marker) {
        _board[x][y] = marker;
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


var render = (() => {
    // cache a copy of the board DOM
    const divBoard = document.querySelector('[data-name="board"');
    const div = document.createElement('div');
    // const p1Move = document.createTextNode('X');
    // const p2Move = document.createTextNode('O');


    // div.appendChild(p1Move);

    // get a copy of the current game board
    const board = gameBoard.getBoard(); 

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            console.log(board[i][j]);
            const div = document.createElement('div');
            const span = document.createElement('span');

            div.dataset.x = i;
            div.dataset.y = j;
            div.className = 'square';
            var content = document.createTextNode(board[i][j]);
            span.appendChild(content);
            div.appendChild(span);
            divBoard.appendChild(div);

        }
    }


    // divBoard.appendChild(div);

    return {
        divBoard
    };

})();
