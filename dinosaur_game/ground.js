import {
  getCustomProperty,
  incrementCustomProperty,
  setCustomProperty,
} from "./updateCustomProperty.js";
//設定常數速度
const SPEED = 0.05;

const groundElems = document.querySelectorAll("[data-ground]");

//地面持續循不會消失，[1]設定300是因為我們style設定ground為300%
export function setupGround() {
  setCustomProperty(groundElems[0], "--left", 0);
  setCustomProperty(groundElems[1], "--left", 300);
}

//更新地面的位置，接收增量通過不斷向左移動來更新地面的位置
//將兩個地面元素不斷接續循環
export function updateGround(delta, speedScale) {
  groundElems.forEach((ground) => {
    incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1);

    if (getCustomProperty(ground, "--left") <= -300) {
      incrementCustomProperty(ground, "--left", 600);
    }
  });
}
