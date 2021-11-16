const birdElement = document.querySelector("[data-bird]");
const BIRD_SPEED = 5;

export function updateBird(delta) {
  setTop(getTop() + BIRD_SPEED * delta);
  console.log(getTop());
}

const setTop = (top) => {
  birdElement.style.setProperty("--bird-top", top);
};

const getTop = () => {
  return parseFloat(
    getComputedStyle(birdElement).getPropertyValue("--bird-top")
  );
};
