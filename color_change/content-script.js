document.addEventListener("keyup", function (e) {
  if (e.keyCode === 82) {
    // 82는 R 키의 키 코드입니다.
    let comments = document.querySelectorAll("ytd-comment-renderer");

    comments.forEach((comment) => {
      comment.style.background = "#acacac"; // 원하는 색상 코드로 변경해주시면 됩니다.
    });
  }
});
