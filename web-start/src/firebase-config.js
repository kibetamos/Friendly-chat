/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyB-fogAcdFUXPHzw00asVJnJsMlnmXNEhY",
  authDomain: "friendlychat-9e590.firebaseapp.com",
  projectId: "friendlychat-9e590",
  storageBucket: "friendlychat-9e590.appspot.com",
  messagingSenderId: "588547367762",
  appId: "1:588547367762:web:b437cd2fcc1749d461908b",
  measurementId: "G-GKN9B3KYCE"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}