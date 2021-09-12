import firebase from 'firebase';
import vocabCard from '../components/vocabCard';
import { getAllVocab, getUserVocab } from '../data/vocabData';
import sortCardArray from '../helpers/cardSorting';
import filterByLanguage from '../helpers/languageFiltering';

const renderCards = (cardArray) => {
  let domString = '';
  const filteredArray = filterByLanguage(cardArray);
  const userID = firebase.auth().currentUser.uid;

  if (filteredArray.length > 0) {
    sortCardArray(filteredArray).forEach((card) => { domString += vocabCard(card, userID); });
  } else {
    domString = '<h5>No entries found</h5>';
  }

  document.querySelector('#app').innerHTML = domString;
};

const displayCards = (uid = null) => {
  if (uid) {
    getUserVocab(uid).then(renderCards);
  } else {
    getAllVocab().then(renderCards);
  }
};

export default displayCards;
