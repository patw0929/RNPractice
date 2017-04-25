import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC8IIzKU2evHnf6_45X93orOe_1ui_Fbu8',
  authDomain: 'rn-auth-practice.firebaseapp.com',
  databaseURL: 'https://rn-auth-practice.firebaseio.com',
  projectId: 'rn-auth-practice',
  storageBucket: 'rn-auth-practice.appspot.com',
  messagingSenderId: '130095734410',
};

const Firebase = firebase.initializeApp(config);

export default Firebase.database();
