
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if( !matrix || !matrix.length) return [];
  const ar = [];
  for(let r=0; r < matrix.length; r++) {
    if( r%2 ) for(let c=matrix[r].length-1; c >= 0; --c) ar.push(matrix[r][c]);
    else      for(let c=0; c < matrix[r].length; ++c) ar.push(matrix[r][c]);
  }
  return ar;
}
