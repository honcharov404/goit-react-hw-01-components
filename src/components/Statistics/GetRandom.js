function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export function getRandomHexColor() {
  return `rgb(${getRandom(25, 255)}, ${getRandom(25, 255)}, ${getRandom(
    25,
    255
  )})`;
}
