const content = document.getElementsByClassName("content")[0];
let sec = 0;

setInterval(() => {
  sec += 1;
  content.innerHTML = `당신은 빙빙 돌고 있는 오리를<br /> ${sec}초째 쳐다보고 있어요`;
}, 1000);
