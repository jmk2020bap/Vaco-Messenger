const CHAT_HISTORY = [
  {
    userId: 1,
    nickname: "RM",
    createdAt: '2024-06-27T18:06:40.036Z',
    text: "안녕하세요. :)",
  },
  {
    userId: 2,
    nickname: "푸우",
    createdAt: '2024-06-27T18:06:40.036Z',
    text: "안녕하세요..ㅎㅎ",
  },
  {
    userId: 2,
    nickname: "푸우",
    createdAt: '2024-06-27T18:06:40.036Z',
    text: "안녕하세요..ㅎㅎ",
  },
  {
    userId: 2,
    nickname: "푸우",
    createdAt: '2024-06-27T18:06:40.036Z',
    text: "안녕하세요..ㅎㅎ",
  },
  {
    userId: 2,
    nickname: "푸우",
    createdAt: '2024-06-27T18:06:40.036Z',
    text: "안녕하세요..ㅎㅎ",
  },
  {
    userId: 2,
    nickname: "푸우",
    createdAt: '2024-06-27T18:06:40.036Z',
    text: "안녕하세요..ㅎㅎ",
  },
  {
    userId: 2,
    nickname: "푸우",
    createdAt: '2024-06-27T18:06:40.036Z',
    text: "안녕하세요..ㅎㅎ",
  },
  {
    userId: 2,
    nickname: "푸우",
    createdAt: '2024-06-27T18:06:40.036Z',
    text: "안녕하세요..ㅎㅎ",
  },
  {
    userId: 2,
    nickname: "푸우",
    createdAt: '2024-06-27T18:06:40.036Z',
    text: "안녕하세요..ㅎㅎ",
  },
];

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-database.min.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMT5s6JPJPRjnzL8FdWN3Ojpfz_gAjs44",
  authDomain: "chit-chat-7ee93.firebaseapp.com",
  databaseURL: "https://chit-chat-7ee93-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chit-chat-7ee93",
  storageBucket: "chit-chat-7ee93.appspot.com",
  messagingSenderId: "657104305224",
  appId: "1:657104305224:web:1869e92c514eff31bdec7d",
  measurementId: "G-Y718BEJV9F"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const chatRef = ref(db, '/');

async function fb () {
  await set(chatRef, {
    something: 1
  });
}

fb();

onValue(chatRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

const signInPage = document.querySelector(".signin");
const chatPage = document.querySelector(".chat");
const overlay = document.querySelector(".overlay");

const signInForm = document.querySelector(".signin form");
const nicknameInput = document.querySelector(".signin input");

const currentUser = {
  userId: Math.floor(Math.random() * 1000000),
  nickname: "",
};

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nicknameInput.value.trim() === "") {
    alert("닉네임을 입력해주세요.");
    return;
  }

  currentUser.nickname = nicknameInput.value;

  signInPage.classList.add("hide");
  chatPage.classList.remove("transparent");
  overlay.classList.remove("transparent");

  loadMessages();
});

const messageInputButton = document.querySelector(".message-input button");
const messageInputText = document.querySelector(".message-input textarea");

messageInputButton.addEventListener("click", () => {
  if (messageInputText.value.trim() === "") {
    alert("메시지를 입력해주세요.");
    return;
  }

  const message = {
    userId: currentUser.userId,
    nickname: currentUser.nickname,
    createdAt: new Date().toISOString(),
    text: messageInputText.value,
  };

  const db = getDatabase();
  set(ref(db, 'chit-chat'), message);

  messageInputText.value = "";
});

function loadMessages () {
  for (let i = 0; i < CHAT_HISTORY.length; i++) {
    const message = CHAT_HISTORY[i];

    addMessage(message);
  }
}

function addMessage (message) {
  const html = `<div class="message">
    <p>${message.text}</p>
    <p class="nickname">💁🏻‍♂️ ${message.nickname}</p>
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

function formatDate (dateString) {
  const d = new Date(dateString);

  const month = d.getMonth() + 1;
  const date = d.getDate();

  let hours = d.getHours();
  let minutes = d.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const time = `${ampm} ${hours}시 ${minutes}분`;

  return `${month}월 ${date}일 ${time}`;
}
