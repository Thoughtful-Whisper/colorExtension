let video = $(".html5-video-container video")[0];

$(document).on("keyup", function (e) {
  if (e.keyCode === 82) {
    $(video).is("[loop]")
      ? video.removeAttribute("loop")
      : video.setAttribute("loop", true);
  }
});
