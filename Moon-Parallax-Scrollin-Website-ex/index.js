let starts = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px"; //卷軸向下滾動月亮會消失
  mountains_behind.style.top = value * 0.5 + "px"; //卷軸向下滾動背景山也跟著消失
  mountains_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px"; //Moon light字會右邊向左邊滑動，CSS將字原始位置改定位-350px，字會從右邊山後往左邊山後跑
  text.style.marginTop = value * 1.5 + "px"; //Moon light字會上面向下面漸進滑動
  btn.style.marginTop = value * 1.5 + "px"; //按鈕字會上面向下面漸進滑動
  header.style.top = value * 0.5 + "px";
});
