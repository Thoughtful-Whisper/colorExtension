let video = document.querySelector(".html5-video-container video");

document.addEventListener("keyup", function (e) {
  if (e.keyCode === 82) {
    video.hasAttribute("loop")
      ? video.removeAttribute("loop")
      : video.setAttribute("loop", true);
  }
});
