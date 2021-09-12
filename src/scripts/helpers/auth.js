import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../api/apiKeys';
import startApp from './startApp';
import landingPage from '../views.js/landing';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user.uid);
    } else {
      landingPage();
    }
  });
};

export default checkLoginStatus;
