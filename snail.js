const mergeIntervals = (intervalA, intervalB) => {
  if (intervalA.length === 0) {
    return intervalB;
  }
  if (intervalB.length === 0) {
    return intervalA;
  }

  const [startA, endA] = intervalA;
  const [startB, endB] = intervalB;

  if (endB < startA) {
    return [intervalB, intervalA];
  }
  if (endA < startB) {
    return [intervalA, intervalB];
  }

  return [[Math.min(startA, startB), Math.max(endA, endB)]];
};

const addInterval = (interval, coll) => {
  for (item of coll) {
  }
};

const sumIntervals = (intervals) => {
  let resultIntervals = [];
  for (interval of intervals) {
    resultInterval = mergeIntervals(resultInterval, interval);
  }
  console.log(resultInterval);
};

sumIntervals([
  [1, 9],
  [7, 12],
  [3, 4],
]); // 11
