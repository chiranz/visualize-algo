const randomFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Supply length of array and its value bound.
const generateRandomArray = (length, minValue, maxValue) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(randomFromInterval(minValue, maxValue));
  }
  return array;
};

module.exports = { randomFromInterval, generateRandomArray };
