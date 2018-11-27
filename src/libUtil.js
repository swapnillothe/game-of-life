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
