import firebase from 'firebase';

const getUserID = () => firebase.auth().currentUser.uid;

export default getUserID;
