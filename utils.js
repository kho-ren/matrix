module.exports = {
	multiplyMatrices: function(matrixA,matrixB) {
    let matrix = [];
    let sum = 0;
    if(matrixA.length == matrixB[0].length){
        for(let i = 0; i < matrixA.length; i++){
            matrix[i] = [];
            for(let j = 0; j< matrixB[0].length; j++){
                for(let k = 0; k <matrixA[0].length; k++){
                    sum += matrixA[i][k] * matrixB[k][j];
                }
                matrix[i][j] = sum;
            }
        }
        return matrix;
    }
    else{
        return null;
    }
    }
}
