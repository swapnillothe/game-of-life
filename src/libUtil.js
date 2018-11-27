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
  let series = new Array(limit).fill(1);
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

const getNeighbour = function( positioin ){
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
