'use strict';

function fibonacci_series(n) {
  var temp=[0,1];
    for(var i=2;i<=n;++i){
        temp.push(temp[i-1] + temp[i-2]);
    }
    return temp;
}

module.exports = fibonacci_series;
