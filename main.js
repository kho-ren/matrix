const reader = require("readline-sync");
const util = require("./utils.js");
const matrix = require("./matrix.js");


let b = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
    [2,3,4]
];
let c = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
];

console.log(matrix.printMatrix(util.multiplyMatrices(b,c)));
