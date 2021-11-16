const birdElement = document.querySelector("[data-bird]");

export function updateBird(delta) {
  setTop(getTop() + BIRD_SPEED);
  console.log(getTop());
}

const setTop = (top) => {
  birdElement.style.setProperty("--bird-top", top);
};

const getTop = () => {
  return getComputedStyle(birdElement).getPropertyValue("--bird-top");
};
