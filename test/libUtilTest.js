const { 
  getAdjacentNumbers,
  increment,
  createNumberSeries
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
