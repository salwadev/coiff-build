// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCdda0oqf7CIjCb3nPLGW2PaJyJL70HfNo",
  authDomain: "coifftime-98dd5.firebaseapp.com",
  projectId: "coifftime-98dd5",
  storageBucket: "coifftime-98dd5.appspot.com",
  messagingSenderId: "534836355247",
  appId: "1:534836355247:web:4919398166502abe15f45a",
  measurementId: "G-40PY6YHKV4",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
