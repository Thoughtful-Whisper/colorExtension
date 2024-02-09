# chrome_extension_test

GDSC 솔루션 챌린지 프로젝트 개발을 위해 크롬 확장 프로그램 개발을 공부하는 레포

## 1.background_change

웹 브라우저의 배경화면 이미지를 변경하는 크롬 확장 프로그램입니다.

ERROR: 크롬 확장 프로그램 등록 및 팝업은 동작하나 확장 프로그램 기능(배경화면 이미지 변경)이 동작하지 않음.

## 2.youtube_simple_extension

유튜브 확장프로그램입니다.

[참고블로그](https://velog.io/@mediumorange/%EA%B0%84%EB%8B%A8%ED%95%9C-%ED%81%AC%EB%A1%AC-%ED%99%95%EC%9E%A5%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0)

유튜브 영상의 연속 재생 설정을 위한 단축키 설정 확장프로그램

R키 입력 시 유튜브의 연속재생이 활성화/비활성화 됩니다.

주의사항: jquery 사용

## 3. comment_change

유튜브 댓글의 색상을 변경하는 확장 프로그램입니다.

댓글 배경 색상 변경을 위해 댓글 요소 클래스로
`ytd-comment-renderer`사용하였으나 색상 변경이 되지 않는 오류가 있습니다.

유튜브 댓글 요소의 클래스 변경 여부 확인 및 유튜브 웹 페이지 구조 분석이 필요합니다.
