const { 
  getAdjacentNumbers,
  increment,
  createNumberSeries,
  cycleGenerator,
  getNeighbour
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


