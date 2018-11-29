const {
  isBetween,
  getAdjacentNumbers,
  cycleGenerator
} = require('../src/libUtil.js');

const neighbourValidator = function( bounds ){
  return function( cell ){
    let isValid = isBetween(bounds["topLeft"][0],cell[0],bounds["bottomRight"][0]);
    return isValid && isBetween(bounds["topLeft"][1],cell[1],bounds["bottomRight"][1]);
  }
}

exports.neighbourValidator = neighbourValidator;

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

const getValidNeighbour = function(  bounds, position ){
  let isValid = neighbourValidator( bounds );
  let neighbours = getAllNeighbour( position ).filter( isValid );
  return neighbours;
}

exports.getValidNeighbour = getValidNeighbour;

