function getRandomInt(minValue = 1, maxValue = 24) {
  const min = Math.ceil(minValue);
  const max = Math.ceil(maxValue);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default getRandomInt;
