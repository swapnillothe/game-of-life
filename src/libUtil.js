const getAdjacentNumbers = function( num ){
  return [ num-1, num, num+1 ];
}

exports.getAdjacentNumbers = getAdjacentNumbers;

const increment = function( number=0 ){
  return function(){
    return number++;
  }
}

const createNumberSeries = function(limit){
  let series = new Array(limit).fill("");
  createSeries = increment();
  return series.map(createSeries);
}

exports.increment = increment;
exports.createNumberSeries = createNumberSeries;

const cycleGenerator = function(array,times){
  let index = 0;
  return function(){
    let i = Math.floor((index++)/times);
    return array[i%array.length];
  }
}

exports.cycleGenerator = cycleGenerator;

const isBetween = function( number1, number2, number3 ){
  return number1 <= number2 && number2 <= number3;
}

const neighbourValidChecker = function( bounds ){
  return function( cell ){
    let isValid = isBetween(bounds["topLeft"][0],cell[0],bounds["bottomRight"][0]);
    return isValid && isBetween(bounds["topLeft"][1],cell[1],bounds["bottomRight"][1]);
  }
}

exports.isBetween = isBetween;
exports.neighbourValidChecker = neighbourValidChecker;

const getAllNeighbour = function( position ){
  let neighbours = new Array(9).fill("").map(x=>[]);
  let adjcentNumbers = position.map(getAdjacentNumbers);

  let cycle = cycleGenerator(adjcentNumbers[0],3);
  neighbours = neighbours.map(function(x) {x.push(cycle()); return x;});
  cycle = cycleGenerator(adjcentNumbers[1],1);
  neighbours = neighbours.map(function(x) {x.push(cycle()); return x;});
  neighbours.splice(4,1);

  return neighbours;
}

exports.getAllNeighbour = getAllNeighbour;

const rowGenerator = function( rowLength ){
  return function( rowNumber ){
    let row = new Array( rowLength ).fill(0);
    return row;
  }
}

exports.rowGenerator = rowGenerator;

const createGrid = function( row, column ){
  let createRow = rowGenerator( column );
  let grid = createNumberSeries( row );
  return grid.map(createRow);
}

exports.createGrid = createGrid;

