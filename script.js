const playerFactory = (name) => {
    const getName = () => name;

    return {getName};
};

const neil = playerFactory('neil');
console.log(neil.getName());



var gameBoard = (() => {
    'use strict';
    // var that = this;
    var _board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    function _getBoard() {
        return _board;
    }

    function _setSquare(x, y, marker) {
        _board[x][y] = marker;
    }

    function getBoard() {
        var board = _getBoard();
        return board;
    }

    function setSquare(x,y, marker) {
        _setSquare(x, y, marker);
    }

    return {
        getBoard: getBoard,
        setSquare: setSquare
    };
})();

var temp = gameBoard.getBoard();
console.log(temp);