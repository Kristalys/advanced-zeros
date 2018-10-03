module.exports = function getZerosCount(number, base) {
  
  let count, d, c, z = number, i;
  for ( i = 2; i <= base; i++) {
    if (base % i == 0) {
      count = 0;
      while (base % i == 0) {
        count++;
        base = Math.floor( base / i);
      }
      c = 0;
      d = number;
      while (d / i > 0) {
        c += Math.floor(d / i);
        d = Math.floor(d / i);
      }
      z = Math.min(z, Math.floor(c / count));
    }
  }
  return z;
};

/*
let p;  let c;  let k;  let zeroesCount;  zeroesCount = number;
  for (i = 2; i <= base; i++) {
    if (base % i == 0) {
      p = 0;
      while (base % i == 0) {
        p++;
        base = Math.floor(base / i);
      }
      c = 0;
      k = number;
      while (k / i > 0) {
        c += Math.floor(k / i);
        k = Math.floor(k / i);
      }
      zeroesCount = Math.min(zeroesCount, Math.floor(c / p));
    }
  }
  return zeroesCount;
};
*/