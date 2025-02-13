function nextPage() {
  window.location.href = "landingpage/landing.html";
}

function moveButton() {
  var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 80;
  var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 30;
  document.getElementById('noButton').style.left = `${x}px`;
  document.getElementById('noButton').style.top = `${y}px`;
}
const images = [
  "images/gif1.gif",
  "images/gif5.gif",
  "images/gif3.gif",
  "images/gif6.gif",
  "images/gif7.gif",
  "images/gif2.gif"
];


let currentIndex = 0;

function changeImage() {
  const imageElement = document.getElementById("Gifs");
  imageElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeImage, 3000);