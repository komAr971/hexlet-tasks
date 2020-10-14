const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  const iter = (counter, acc) => {
    if (counter === 1) {
      return acc;
    }
    return iter(counter - 1, counter * acc);
  };

  return iter(n, 1);
};

const withoutTwoZeros = (numOf0, numOf1) => {
  if (numOf0 > numOf1 + 1) {
    return 0;
  }
  const m = numOf1 - (numOf0 - 1);
  const n = numOf0 + 1;

  const result = factorial(n + m - 1) / (factorial(n - 1) * factorial(m));
  return result;
};

export default withoutTwoZeros;
