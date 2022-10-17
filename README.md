# STARBOX

## 프로젝트 소개
- 이전 프로젝트였던 E-commerce에서 좀더 다양한 기능을 접할수 있는 사이트를 고려하던 중 기본 CRUD는 물론 새로운 기능과 UI를 접할 수 있는 MEGABOX를 선정하게 되었습니다.
- fetch함수를 이용하여 api로 연결하여 데이터를 받아오고 UI부분도 스스로 sass를 이용하여 구현하였습니다.

## 개발 기간 및 인원

- 개발 기간 : 2022/09/19~2022/09/30
- 개발 인원 : BE 2명 / FE 4명

## 적용 기술

- React js, sass, styled-component
- Community Tools : [Trello](https://trello.com/b/vHTBevR2/project-management), [Notion](https://www.notion.so/wecode/2nd-Project-04bc92fc5d2b4c53bd065749118f826f?p=c09094a986d44c4b9ab702b4bd1b3fd6&pm=c), Zep, Zoom, Slack
- Version Control Tool : Git

## 담당기능

- [UI] Header: Nav bar 레이아웃 및 UI 스타일 구현, 로고, Subnav bar Tab구현, 로그인 pop-up 모달 구현, 
</br> 회원가입 컴포넌트 별 레이아웃 및 스타일 구현, 아이디/비밀번호 찾기 레이아웃 및 스타일 구현, user의 이동경로에 따른 UI구현
- [로그인/로그아웃] 로그인: fetch를 이용하여 post로 user정보 보내기, DB의 user 정보 데이터를 비교 후 token받아서 localstorage에 담기,
로그아웃을 클릭하면 이벤트핸들러를 이용하여 localstorage에 token을 지우기
- [회원가입] 1.휴대폰 인증: localstorage로 입력한 user정보 담기, fetch를 이용하여 post로 정보를 보낸 후 인증번호를 같은 방법으로 보내준다.
- [회원가입] 2.약관동의: 체크박스를 이용하여 필수체크선택시 다음 step으로 넘어간다. 전체 선택시 체크박스 전체 선택 또는 하나 해제시 전체 선택 해제
- [회원가입] 3.정보입력: localstorage에 저장된 user정보를 가져와서 담고 아이디 및 비밀번호 유효성 검사후 다음 step으로 이동한다.
- [회원가입] 4.complete: 가입완료 클릭시 메인페이지로 이동
- [Nav bar] Link연결 : Nav Link를 이용한 페이지별 링크 연결, location 정보 UI 구현 및 링크 연결
- [Sub nav] tab : 클릭시 Drop-down메뉴 리스트 구현 close버튼으로 닫기, 카테고리별 링크 연결
- [아이디찾기] fetch를 이용하여 POST로 user정보를 보내서 DB에서 비교후 아이디 받기
- [비밀번호찾기] 아이디 찾기와 같은 내용

## [!](https://user-images.githubusercontent.com/99234582/196137091-a6c63d61-c91f-4e6d-a4d9-ecd1097736e6.png)](https://youtu.be/WFLoaP3cGkg)

## 기능별 영상보기

### UI

[!](https://user-images.githubusercontent.com/99234582/196128440-a0b60075-3c1b-4b56-a224-b5e4274c9fd0.mp4)

### Login

fetch함수를 이용하여 POST메서드로 DB에 보내어 user의 정보를 확인후 token을 보내준다.

[!](https://user-images.githubusercontent.com/99234582/196129020-3036c6bf-9272-4f70-beee-6fde11cc0b1c.mp4)

### Sign up

#### step.01 : 휴대폰 인증하기

fetch함수를 이용하여 api를 호출하고 POST로 user의 정보를 보낸다.
번호를 보내면 인증번호를 입력하여 DB로 다시 보낼 toggle을 생성한다.
문자로 받은 인증번호를 담아놓은 user의 휴대폰 번호와 같이 보내준다.

[!](https://user-images.githubusercontent.com/99234582/196132040-c2019575-20fd-40c3-a423-99737cb4cb95.mp4)

#### step.02 : 약관 동의

전체 선택하면 아래 체크박스들이 전체 선택이 되며 아래 체크박스 중 하나를 해제하면 전체 선택이 해제 된다.

[!](https://user-images.githubusercontent.com/99234582/196134181-fc848814-cc87-4dfb-8c40-c3bab8f11fad.mp4)

#### step.03 : 정보 입력

앞에 step.01에서 입력한 user의 정보를 담고 step.03에서 다시 불러온다.
아이디를 DB에 보내어 user데이터에서 확인후 중복체크를 해준다.
비밀번호와 이메일을 입력시 유효성 검사를 하고 문제가 없을 시 아래 체크박스중 하나를 선택해야 가입이 완료된다.
가입완료 버튼을 클릭하면 메인페이지로 이동한다.

[!](https://user-images.githubusercontent.com/99234582/196135319-8d243855-88f8-4304-98de-a4ff29592f6b.mp4)

### User-find 

fetch함수를 이용하여 POST메서드로 user의 정보를 보내고 DB에서 확인후 아이디를 보내주거나 임시 비밀번호를 생성하여 user에게 보내준다.

[!](https://user-images.githubusercontent.com/99234582/196136005-61c8834b-b045-4915-8bad-77875ba85255.mp4)

