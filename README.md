<br>
<br>

<p align="center">
  <img src="/src/assets/vaco.png"  width="400">
</p>

<br>
<br>

> 바닐라코딩의 모든 과제는 실제 기업에서 주어지는 과제에 기반하여 제작되었으며, 저작권법의 보호를 받습니다. 개인 블로그 등의 공개된 장소에 관련 내용을 공유하거나 개인적으로 지인들과 공유하는 등의 행위는 삼가해주시기 바랍니다.

<br>

# Chit Chat

모바일 전용 랜덤 채팅 웹 어플리케이션을 구현합니다.

<br>
<br>

## 📌 작업 준비

과제를 시작하기 전, 아래 1-3 단계를 진행합니다. 과제를 시작하는 단계에서 최초 1회만 진행하시면 됩니다.

<br>

### 1. 과제 클론받기

터미널에서 아래의 Git 명령어를 이용하여 과제를 클론 받으세요.

```sh
git clone 과제_GIT_URI
```

> 과제\_GIT_URI는 Github 과제 저장소의 메인 페이지에서 초록색 `<> Code` 버튼을 클릭하시면 확인할 수 있습니다.

<br>

### 2. 과제 디렉토리로 이동하기

다음 명령어를 이용하여 과제 디렉토리로 이동하세요.

```sh
cd 과제_저장소_이름
```

<br>

### 3. 관련 의존성 패키지를 설치하세요.

터미널의 과제 디렉토리 내에서 아래 명령어를 실행하세요.

```sh
npm install
```

> `package.json`의 `engines` 필드에 명시된 Node.js와 npm 버전을 확인하신 후, 동일한 버전을 사용해주세요.

<br>
<br>

## 📌 작업 진행

<br>

### 1. VS Code 실행

터미널에서 과제 디렉토리로 이동하여 아래 명령어를 실행하면, VS Code에서 과제 파일이 열립니다.

```sh
code .
```

> [VS Code에서 `code` 명령어 설치하는 방법](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

<br>

### 2. 로컬 서버 실행

터미널에서 과제 디렉토리로 이동하여 아래 명령어를 실행합니다.

```sh
npm run dev
```

<br>

### 3. 로컬 서버 접속

로컬 서버 실행 후, 터미널에 표기된 로컬 서버 주소(예: `localhost:5173`)로 브라우저에서 접속하면 작업 결과물을 확인할 수 있는 웹 페이지가 나타납니다. VS Code에서 작업하며 웹 페이지를 확인합니다. 코드 변경사항은 실시간으로 반영됩니다.

<br>

### 4. 로컬 서버 중지

작업이 끝났을 경우, 터미널의 로컬 서버 실행창에서 `ctrl + c`를 입력하여 실행 중이던 로컬 서버를 중지합니다. 추후 작업 재개시, 로컬 서버를 다시 실행하고, 작업 종료시 로컬 서버를 중지시키는 행위를 매번 반복합니다.

> 로컬 서버를 장시간 동안 켜놓을 경우, 컴퓨터의 리소스가 낭비될 수 있습니다. 장시간 작업을 중단하는 경우에는 로컬 서버를 종료시키고 다시 재개하는 시점에 다시 로컬 서버를 시작하세요.

<br>
<br>

## 📌 리서치 TODO

<br>

### 과제 시작 전 (혹은 병행)

> 처음 보는 개념이라면, 과제를 시작 하기 전에 조사해보고 시작하기를 권장드립니다. 다만, 아래 전체를 모두 조사하더라도 하루를 넘기지 않도록 유의하시고 화요일에는 반드시 코드 작업을 시작하도록 하세요. 구체적인 내용을 모두 이해하지 못했더라도, 언제 사용해야 할지 대략적인 파악만 되었다면 과제 작업을 하면서 조사를 병행하셔도 괜찮습니다.

- [ ] [`querySelector`](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)를 활용하여 우리는 웹 페이지에서 원하는 요소를 선택할 수 있습니다. 사용법을 알아보고, 대안이나 유사한 API가 있다면 함께 비교하며 조사해보세요.
- [ ] [`addEventListener`](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)를 활용하여 우리가 선택한 요소에 사용자가 인터렉션 하는 것을 감지할 수 있습니다. 사용법을 알아보고, 대안이 있다면 함께 비교하며 조사해보세요.
- [ ] DOM의 이벤트를 다루기 위해서는 이벤트 위임에 대해 잘 이해해야 합니다. 다음 키워드에 대해 조사해보세요.
  - 이벤트 캡처링 vs 이벤트 버블링
  - event.stopPropagation
  - event.target vs event.currentTarget
- [ ] [`document.querySelectorAll`](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelectorAll)과 [`document.getElementsByClassName`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)의 가장 핵심적인 기능상 차이점은 무엇일까요?
- [ ] [removeEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/removeEventListener)의 사용법 또한 조사해보세요.

<br>

### 과제 제출 후

- [ ] 이번 과제에서 우리는 DOM을 활용하여 작업하게 됩니다. 과연 DOM은 무엇일까요? JavaScript와 DOM은 같은 것일까요?
- [ ] 웹 페이지가 브라우저에 그려지는 과정은 생각보다 간단하지 않습니다. 여러분이 작업한 웹 페이지는 어떤 과정을 거쳐 화면에 나타나게 되는 것일까요?

<br>
<br>

## 📌 과제 구현사항 TODO

> 과제를 제출하는 Pull Request의 description 입력 칸에 아래 목록을 복사/붙여넣기 하여 본인의 기능구현 완성도를 체크해주세요.

<br>

### [화면 1] 사용자 이름 입력 UI

- [x] 최초 진입시, 사용자 이름을 입력하는 입력칸이 나타나야 합니다.
- [ ] 사용자 이름은 2글자 이상, 20글자 미만이어야 하며 특수문자는 사용할 수 없습니다.
- [ ] 유효하지 않은 형식의 사용자 이름을 입력할 경우, 적절한 오류 메시지가 표기되어야 합니다.
- [ ] 표기된 오류 메시지는 사용자가 사용자 이름을 다시 수정하기 시작할 경우, 사라져야 합니다.
- [ ] 유효한 형식의 사용자 이름을 입력할 경우, 화면 2가 사용자에게 보여집니다.

<br>

### [화면 2] 채팅 UI

- [ ] 최초 진입시, `src/js/app.js`내에 주어진 `CHAT_HISTORY` 배열을 기존 채팅 메시지 기록이라 가정하고 채팅 기록을 표기해주어야 합니다.
- [ ] 각 메시지는 메시지 내용, 작성자, 작성 날짜, 작성 시간(오전/오후, 시, 분)이 표기되어야 합니다.
- [ ] 각 메시지 데이터 내의 `colorCode` 값을 메시지 배경색 혹은 폰트색 등 사용자의 메시지를 구분지을 수 있는 기준으로 활용하여 화면에 표시해야 합니다.
- [ ] 기존 채팅 기록의 메시지는 모두 타인이 보낸 메시지라고 가정하고 카카오톡과 동일한 구성으로 화면의 좌측에 나열됩니다.
- [ ] 화면 하단에는 채팅 메시지 입력칸이 있어, 새로운 메시지 입력이 가능해야 합니다.
- [ ] 내용이 없는 메시지는 입력할 수 없어야 합니다.
- [ ] 메시지를 입력한 작성자의 `colorCode`는 랜덤한 Hex code를 생성하여 사용합니다.
- [ ] 새로운 메시지를 입력할 경우, 메시지 목록 우측 하단에 내가 전송한 새로운 메시지가 나열되어 표기됩니다. (`CHAT_HISTORY` 배열 추가 불필요)

<br>

### 실시간 기능

> 아래와 같은 실시간 채팅 기능을 추가해야 합니다. 기존에 작업한 내용 중 변경이 필요한 부분이 있다면 변경해도 괜찮습니다.

[Firebase 가이드](/firebase.md)에 따라 Firebase 프로젝트를 생성한 후, Firebase의 실시간 데이터베이스를 활용하여 아래 기능들을 완성해보세요.

<br>

- [ ] 내가 입력한 메시지가 다른 동시 접속 사용자들의 채팅창에 실시간으로 전달되어야 합니다.
- [ ] 다른 동시 접속 사용자들이 입력한 메시지가 나의 채팅창에 실시간으로 전달되어야 합니다.
- [ ] 새로운 사용자가 접속했을때, 기존의 채팅 기록이 보존되어 다시 나타나야 합니다.
- [ ] [Firebase 프로젝트 배포 가이드](/deploy.md)에 따라 배포해보세요. (PR에도 주소를 추가해주시면 좋습니다.)
- [ ] Firebase 관련 config 정보를 환경 변수로 설정하여 처리해보세요.

<br>

- 브라우저 탭을 새로고침 하거나, 다시 접속하는 경우에는 새로운 사용자로 간주합니다.
- 브라우저의 뒤로가기/앞으로가기 버튼 사용시 발생하는 이슈는 현재 중요한 부분은 아니므로, 대응하지 않습니다.

<br>

### 참고 문서

- [Firebase Realtime Database](https://firebase.google.com/docs/database/web/read-and-write?hl=ko)
- [Environment variables in Vite](https://vitejs.dev/guide/env-and-mode.html)

<br>