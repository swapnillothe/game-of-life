const { 
  getAdjacentNumbers,
  increment,
  createNumberSeries,
  cycleGenerator,
  getNeighbour,
  rowGenerator,
  createGrid
} = require('../src/libUtil.js');

const { deepEqual } = require('assert');

describe("getAdjacentNumbers",function(){
  it("should works for zero value",function(){
    deepEqual( getAdjacentNumbers(0),[ -1, 0, 1 ]);
  });
  it("should works for non zero value",function(){
    deepEqual( getAdjacentNumbers(4),[ 3, 4, 5 ]);
  });
});

describe("increment",function() {
  let inc = increment();
  it("should works with no intializer",function() {
    deepEqual( inc(), 0 );
    deepEqual( inc(), 1 );
    deepEqual( inc(), 2 );
  });
  incr = increment(2);
  it("should works with intializer",function() {
    deepEqual( incr(), 2 );
    deepEqual( incr(), 3 );
    deepEqual( incr(), 4 );
  });
});

describe("createNumberSeries",function() {
  it("should return empty array with 0 length",function() {
    deepEqual( createNumberSeries( 0 ), [] );
  });
  it("should works with nonzero length",function() {
    deepEqual( createNumberSeries( 3 ),  [ 0, 1, 2 ] );
  });
});

describe("cycleGenerator",function() {
  let cycleOne = cycleGenerator([1,2,3],1)
  it("should works for one time",function() {
    deepEqual( cycleOne(), 1 );
    deepEqual( cycleOne(), 2 );
    deepEqual( cycleOne(), 3 );
    deepEqual( cycleOne(), 1 );
  });
  let cycleMoreThanOne = cycleGenerator([1,2,3],2)
  it("should works for more than one times",function() {
    deepEqual( cycleMoreThanOne(), 1 );
    deepEqual( cycleMoreThanOne(), 1 );
    deepEqual( cycleMoreThanOne(), 2 );
    deepEqual( cycleMoreThanOne(), 2 );
    deepEqual( cycleMoreThanOne(), 3 );
    deepEqual( cycleMoreThanOne(), 3 );
  });
});

describe("getNeighbour",function() {
  it("should returns position of all 8 neighbours",function() {
    deepEqual( getNeighbour([ 2, 3 ] ), [ [ 1, 2 ], [ 1, 3 ],[ 1, 4 ], [ 2, 2 ], [ 2, 4 ], [ 3, 2 ], [ 3, 3 ], [ 3, 4 ] ] );
  });
});

describe("rowGenerator",function() {
  let createRowForZeroLength = rowGenerator( 0 );
  it("should return row of zero length ",function() {
    deepEqual( createRowForZeroLength( 0 ), [] );
  });
  let createRow = rowGenerator( 2 );
  it("should return positive integer length ",function() {
    deepEqual( createRow( 0 ), [ 0, 0 ] );
  });
});

describe("createGrid",function() {
  it("should return for all positive same row and column length",function() {
    deepEqual( createGrid( 1, 1 ),[ [ 0 ] ] );
    deepEqual( createGrid( 2, 2 ), [ [ 0, 0 ], [ 0, 0 ] ] );
  });
  it("should return for all positive different row and column length",function() {
    deepEqual( createGrid( 1, 2 ), [ [ 0, 0 ] ] );
    deepEqual( createGrid( 2, 3 ), [ [ 0, 0, 0 ], [ 0, 0, 0 ] ] );
  });
});
