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

const getNeighbour = function( position ){
  let temp1 = getAdjacentNumbers(position[0]);
  let temp2 = getAdjacentNumbers(position[1]);
  let neighbours = new Array(9).fill("").map(x=>[]);

  let cycle = cycleGenerator(temp1,3);
  neighbours = neighbours.map(function(x) {x.push(cycle()); return x;});
  cycle = cycleGenerator(temp2,1);
  neighbours = neighbours.map(function(x) {x.push(cycle()); return x;});
  neighbours.splice(4,1);

  return neighbours;
}

exports.cycleGenerator = cycleGenerator;
exports.getNeighbour = getNeighbour;

const make2dArray = function(length){
  return new Array(length).fill("").map(x=>[]);
}

exports.make2dArray = make2dArray;

const rowGenerator = function( rowLength ){
  return function( rowNumber ){
    let row = make2dArray( rowLength );
    row = row.map(function(x){x.push(0);return x});
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

