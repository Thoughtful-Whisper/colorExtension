# chrome_extension_test
GDSC 솔루션 챌린지를 위한 크롬 익스텐션 샘플 코드 레포입니다.

## 3. comment_change
유튜브 댓글의 색상을 변경하는 확장 프로그램입니다.

댓글 배경 색상 변경을 위해 댓글 요소 클래스로
`ytd-comment-renderer`사용하였으나 색상 변경이 되지 않는 오류가 있습니다. 
-> backgroundcolor을 background으로 변경하여 문제 해결

**프로그램 적용 후 R키 입력 시 댓글 배경색이 #acacac로 변경됩니다.**
![image](https://github.com/Thoughtful-Whisper/colorExtension/assets/100592495/d8651b66-7f89-41c6-a32c-ccc24a42b5ba)

사용자를 식별할 수 있는 식별자(아이디 등)을 받아 댓글에 따른 색상 표기 기능을 추가할 예정.

