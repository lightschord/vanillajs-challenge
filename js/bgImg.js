const bgImgs = ["bgImg_0.jpg", "bgImg_1.jpg", "bgImg_2.jpg", "bgImg_3.jpg", "bgImg_4.jpg", "bgImg_5.jpg"];

function SetRandomBgImg() {
  const bgImg = bgImgs[parseInt(Math.floor(Math.random()*bgImgs.length))];
  const imgElmnt = document.createElement("img");
  
  imgElmnt.src = `images/${bgImg}`;
  imgElmnt.width = window.innerWidth;
  imgElmnt.height = window.innerHeight;
  document.body.appendChild(imgElmnt);
}
SetRandomBgImg();