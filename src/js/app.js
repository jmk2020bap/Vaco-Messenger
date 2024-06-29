import { getAllMessages, saveChat, subscribeToNewMessage } from "./firebase.js";
import { formatDate, generateHexCode } from "./utils.js";

const main = document.querySelector("main");
const signInPage = document.querySelector(".signin");
const chatPage = document.querySelector(".chat");
const overlay = document.querySelector(".overlay");

const signInForm = document.querySelector(".signin form");
const signInSubmit = document.querySelector(".signin img");
const nicknameInput = document.querySelector(".signin input");

const messageInputForm = document.querySelector(".message-input");
const messageInputButton = document.querySelector(".message-input button");
const messageInputText = document.querySelector(".message-input input");

const currentUser = {
  userId: Math.floor(Math.random() * 100000000),
  nickname: "",
  colorCode: generateHexCode()
};

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();
  initialzeChat();
});

signInSubmit.addEventListener("click", () => {
  initialzeChat();
});

messageInputForm.addEventListener("submit", handleMessageSubmit);
messageInputButton.addEventListener("click", handleMessageSubmit);

function initialzeChat () {
  if (nicknameInput.value.trim() === "") {
    alert("닉네임을 입력해주세요.");
    return;
  }

  currentUser.nickname = nicknameInput.value;

  signInPage.classList.add("hide");
  chatPage.classList.remove("transparent");
  overlay.classList.remove("transparent");
  main.classList.add("fixed-height");

  loadMessages();
  subscribeToNewMessage(addMessage);
}

async function handleMessageSubmit(event) {
  event.preventDefault();

  if (messageInputText.value.trim() === "") {
    alert("메시지를 입력해주세요.");
    return;
  }

  const message = {
    id: Math.floor(Math.random() * 100000000),
    userId: currentUser.userId,
    nickname: currentUser.nickname,
    createdAt: new Date().toISOString(),
    text: messageInputText.value,
    colorCode: currentUser.colorCode
  };

  await saveChat(message);

  messageInputText.value = "";
}

async function loadMessages () {
  const messages = await getAllMessages();

  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    addMessage(message);
  }
}

function addMessage (message) {
  const html = `<div class="message">
    <p>${message.text}</p>
    <p class="nickname" style="background-color: ${message.colorCode}">💁🏻‍♂️ ${message.nickname}</p>
    <p>${formatDate(message.createdAt)}</p>
  </div>`;

  const newMessage = document.createElement("div");
  newMessage.innerHTML = html;

  if (message.userId === currentUser.userId) {
    newMessage.classList.add("right");
  }

  const messages = document.querySelector(".messages");

  messages.prepend(newMessage);
}
