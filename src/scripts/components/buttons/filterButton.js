import firebase from 'firebase';
import displayCards from '../../views.js/cardDisplay';

const filterButton = (language) => {
  document.querySelector('#language-filter').value = language;
  const userID = firebase.auth().currentUser.uid;

  displayCards(userID);
};

export default filterButton;
