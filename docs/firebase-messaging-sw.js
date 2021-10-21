importScripts('https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js');// remove CleverTap server worker from your root folder
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyBC-EEhKO1MOpEJWEZaYm-ox8NM0WTQltg",
    authDomain: "demowebsdk.firebaseapp.com",
    projectId: "demowebsdk",
    storageBucket: "demowebsdk.appspot.com",
    messagingSenderId: "126540632719",
    appId: "1:126540632719:web:e0fba5dcd61fc6bb70d6fa"
  };
// Initialize Firebase
if(firebase.messaging.isSupported()) {
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
}