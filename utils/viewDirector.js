import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/Buttons/loginButton';
// import logoutButton from '../components/Buttons/logoutButton';
import client from './client';
import startApp from './startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user.uid);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
