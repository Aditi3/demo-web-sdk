import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBC-EEhKO1MOpEJWEZaYm-ox8NM0WTQltg",
  authDomain: "demowebsdk.firebaseapp.com",
  projectId: "demowebsdk",
  storageBucket: "demowebsdk.appspot.com",
  messagingSenderId: "126540632719",
  appId: "1:126540632719:web:e0fba5dcd61fc6bb70d6fa"
};
// Initialize Firebase
if (firebase.messaging.isSupported()) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
