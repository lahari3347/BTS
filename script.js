const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you in 2025 APOBANGPO!";
  gif.src =
    "https://media3.giphy.com/media/ZUQuIVjZIviukyeZVv/giphy.gif?cid=ecf05e4705vs6cad1wgdq5nfq6jmbonq9t7cv0advoxbqb3p&ep=v1_gifs_search&rid=giphy.gif&ct=g";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});