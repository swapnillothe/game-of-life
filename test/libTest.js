const {
  getAllNeighbour,
  neighbourValidator,
  getValidNeighbour
} = require('../src/lib.js');

const { deepEqual } = require('assert');

describe("getAllNeighbour",function() {
  it("should returns position of all 8 neighbours",function() {
    deepEqual( getAllNeighbour([ 2, 3 ] ), [ [ 1, 2 ], [ 1, 3 ],[ 1, 4 ], [ 2, 2 ], [ 2, 4 ], [ 3, 2 ], [ 3, 3 ], [ 3, 4 ] ] );
  });
});

describe("neighbourValidator",function() {
  let isValidForZero = neighbourValidator({ topLeft : [ 0, 0 ], bottomRight : [ 3, 3 ] });
  it("should work for with topLeft [ 0, 0 ]",function() {
    deepEqual( isValidForZero( [ 2, 3 ] ), true );
    deepEqual( isValidForZero( [ 4, 3 ] ), false );
  });
  let isValid = neighbourValidator({ topLeft : [ 1, 1 ], bottomRight : [ 3, 3 ] });
  it("should work for with topLeft non zero elements array",function() {
    deepEqual( isValid( [ 2, 3 ] ), true );
    deepEqual( isValid( [ 0, 3 ] ), false );
  });
});

describe("getValidNeighbour",function() {
  it("should work for left corner cell",function() {
    deepEqual( getValidNeighbour([ 0, 0 ],{ topLeft : [ 0, 0 ], bottomRight : [ 3, 3 ] }),[[0,1],[1,0],[1,1]]);
  });
  it("should work for right corner cell",function() {
    deepEqual( getValidNeighbour([ 0, 3 ],{ topLeft : [ 0, 0 ], bottomRight : [ 3, 3 ] }),[[0,2],[1,2],[1,3]]);
  });
  it("should work for center corner cell",function() {
    deepEqual( getValidNeighbour([ 2, 2 ],{ topLeft : [ 1, 1 ], bottomRight : [ 3, 3 ] }),[[1,1],[1,2],[1,3],[2,1],[2,3],[3,1],[3,2],[3,3]]);
  });
});
