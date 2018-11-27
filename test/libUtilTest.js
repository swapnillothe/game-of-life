const { getAdjacentNumbers,
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
