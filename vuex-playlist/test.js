/**
 * @param {character[][]} board
 * @return {boolean}
 */
const arr = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

// var isValidSudoku = function(board) {

//     for (let i = 0; i < 9; i++) {
//         let row = new Set(),
//             col = new Set(),
//             three = new Set(),
//             x = (i / 3 | 0) * 3,
//             y = i % 3 * 3
//         console.log(y)
//             //遍历行列
//         for (let j = 0; j < 9; j++) {
//             if (board[i][j] !== '.') {
//                 if (row.has(board[i][j])) return false
//                 row.add(board[i][j])
//             }
//             if (board[j][i] !== '.') {
//                 if (col.has(board[j][i])) return false
//                 row.add(board[j][i])
//             }
//             //遍历3*3
//             if (board[x][y] !== ".") {
//                 if (three.has(board[x][y])) return false
//                 three.add(board[x][y])
//             }
//             y++
//             if ((j + 1) % 3 === 0) {
//                 x += 1
//                 y -= 3
//             }
//         }
//     }
//     return true
// };
const isValidSudoku = arr => {
    for (let i = 0; i < 9; i++) {
        // 遍历行*列
        let row = new Set(),
            col = new Set()
        let block = new Set()
        let x = (i / 3 >> 0) * 3,
            y = i % 3 * 3
        console.log(y)
        for (let j = 0; j < 9; j++) {
            if (arr[i][j] !== '.') {
                if (row.has(arr[i][j])) return false
                row.add(arr[i][j])
            }
            if (arr[j][i] !== '.') {
                if (col.has(arr[j][i])) return false
                col.add(arr[j][i])
            }
            if (arr[x][y] !== '.') {
                if (block.has(arr[x][y])) return false
                block.add(arr[x][y])
            }
            y++
            if ((j + 1) % 3 === 0) {
                x += 1
                y -= 3
            }
        }
        // 遍历3*3小宫格


    }
    return true
}

console.log(isValidSudoku(arr))