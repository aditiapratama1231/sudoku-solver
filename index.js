const board = [
    [5, 3, 2, 9, 8, 6, 7, 4, 1],
    [4, 8, 7, 2, 1, 5, 3, 6, 9],
    [6, 9, 1, 4, 3, 7, 5, 8, 2],
    [3, 2, 5, 1, 7, 4, 8, 9, 6],
    [7, 6, 4, 3, 9, 8, 1, 2, 5],
    [8, 1, 9, 5, 6, 2, 4, 3, 7],
    [1, 5, 6, 8, 2, 3, 9, 7, 4],
    [9, 7, 8, 6, 4, 1, 2, 5, 3],
    [2, 4, 3, 7, 5, 9, 6, 1, 8]
];

function Sudoku(data) {

    this.data = data;
    // check row
    const checkRow = () => this.data.map((item, index, array) => {
        return [...new Set(array[index])].length === 9
    })

    // check column
    const checkColumn = () => this.data.map((check, idx, arry) => {
        return [...new Set(arry.map((item, index) => {
            return item[idx]
        }))].length === 9
    })

    const checkSquare = () => {
        const _grid = [];

        // setup 9 column of array
        for (let i = 0; i < 9; i++) {
            _grid.push([]);
        }

        // get square data per grid index
        this.data.map((row, rowIndex, board) => {
            return board.map((col, colIndex) => {
                const gridRow = Math.floor(rowIndex / 3);
                const gridCol = Math.floor(colIndex / 3);
                const gridIndex = gridRow * 3 + gridCol;
                return _grid[gridIndex].push(board[rowIndex][colIndex]);
            });
        });

        return _grid.map(item => [...new Set(item)].length === 9)
    };

    // check if action returned 1 true value
    const checkCorrect = (checked) => [...new Set(checked)].length === 1;

    // check if the current number good in all actions
    this.isGood = () => checkCorrect(checkRow(this.data)) &&
        checkCorrect(checkColumn(this.data)) &&
        checkCorrect(checkSquare(this.data));
}

(() => {
    var sudoku = new Sudoku(board);
    // console.log(sudoku.isGood())
    if (sudoku.isGood()) {
        console.log("Sudoku solved is Correct");
    } else {
        console.log("Sudoku solved is Incorrect")
    }
    // console.log(sudoku.isGood(board))
})()