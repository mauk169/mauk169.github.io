const video = document.getElementById("vidos");
var isPlaying = false;

video.addEventListener("click", function() {
  if (!isPlaying) {
    video.play();
    isPlaying = !isPlaying;
  } else {
    video.pause();
    isPlaying = false;
  }
});

video.addEventListener("ended", function() {
  isPlaying = false;
});