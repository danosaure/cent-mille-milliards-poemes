const getRandomNumber = (max: number, min: number = 0): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export { getRandomNumber };
