importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDcWSyP6S7LDuGQ1ZjFqKAHCZ8mjwJhEKY",
  authDomain: "nexus-hub-159db.firebaseapp.com",
  projectId: "nexus-hub-159db",
  storageBucket: "nexus-hub-159db.firebasestorage.app",
  messagingSenderId: "400199878551",
  appId: "1:400199878551:web:4f58353584daffbeb026d2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Notificação em Background:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});