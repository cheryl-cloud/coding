import {
  incrementCustomProperty,
  setCustomProperty,
  getCustomProperty,
} from "./updateCustomProperty.js";

const dinoElem = document.querySelector("[data-dino]");
const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
//恐龍動畫用兩張圖片呈現
const DINO_FRAME_COUNT = 2;
//每100毫秒更新
const FRAME_TIME = 100;

let isJumping;
let dinoFrame;
let currentFrameTime;
let yVelocity;
//恐龍設定
export function setupDino() {
  isJumping = false;
  dinoFrame = 0;
  currentFrameTime = 0;
  yVelocity = 0;
  setCustomProperty(dinoElem, "--bottom", 0);
  document.removeEventListener("keydown", onJump);
  document.addEventListener("keydown", onJump);
}

//定位恐龍的位置，讓恐龍可以上下跳動
export function updateDino(delta, speedScale) {
  handleRun(delta, speedScale);
  handleJump(delta);
}

//getDinoRect
export function getDinoRect() {
  return dinoElem.getBoundingClientRect();
}

//setDinoLose
export function setDinoLose() {
  dinoElem.src = "imgs/dino-lose.png";
}

//每次調用此參數時都要更新我們當前的幀率，遊戲內速度愈快，動畫也要愈快
function handleRun(delta, speedScale) {
  if (isJumping) {
    dinoElem.src = `imgs/dino-stationary.png`;
    return;
  }
  //我們目前使用dinoFrame為0，像其加一，然後我們要做的是針對我們的dino對其進行模組化幀數，循環
  if (currentFrameTime >= FRAME_TIME) {
    dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
    dinoElem.src = `imgs/dino-run-${dinoFrame}.png`;
    currentFrameTime -= FRAME_TIME;
  }
  currentFrameTime += delta * speedScale;
}

function handleJump(delta) {
  if (!isJumping) return;

  incrementCustomProperty(dinoElem, "--bottom", yVelocity * delta);
  if (getCustomProperty(dinoElem, "--bottom") <= 0) {
    setCustomProperty(dinoElem, "--bottom", 0);
    isJumping = false;
  }
  yVelocity -= GRAVITY * delta;
}

function onJump(e) {
  if (e.code !== "Space" || isJumping) return;
  yVelocity = JUMP_SPEED;
  isJumping = true;
}
