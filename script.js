import { updateBird } from "./bird.js";

const handleStart = () => {
  title.classList.add("hide");
  window.requestAnimationFrame(updateLoop);
};

document.addEventListener("keypress", handleStart, { once: true });
const title = document.querySelector("[data-title]");

let lastTime;

const updateLoop = (time) => {
  lastTime == null
    ? (lastTime = time)
    : window.requestAnimationFrame(updateLoop);
  const delta = time - lastTime;
  updateBird(delta);
  lastTime = time;
  window.requestAnimationFrame(updateLoop);
};

const handleLost = () => {};
