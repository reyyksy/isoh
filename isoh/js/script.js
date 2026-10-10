const song = document.querySelector('#loveSong');
const startScreen = document.querySelector('#startScreen');
const startButton = document.querySelector('#startButton');
const surpriseButton = document.querySelector('#surpriseButton');
const bonusMessage = document.querySelector('#bonusMessage');
const bonusImage = document.querySelector('#bonusImage');

startButton.addEventListener('click', () => {
  document.body.classList.remove('is-locked');
  startScreen.classList.add('is-open');
  song.play().catch(() => {});
  startScreen.addEventListener('animationend', () => startScreen.remove(), { once: true });
});

surpriseButton.addEventListener('click', () => {
  bonusMessage.classList.toggle('show');
  bonusImage.classList.toggle('show');
  surpriseButton.querySelector('span').textContent = bonusMessage.classList.contains('show') ? '♥' : '✦';
});
