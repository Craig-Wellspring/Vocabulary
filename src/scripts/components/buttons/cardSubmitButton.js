import firebase from 'firebase';
import { createVocabEntry } from '../../data/vocabData';
import displayCards from '../../views.js/cardDisplay';

const submitNewCard = () => {
  const title = document.querySelector('#title-input').value;
  const definition = document.querySelector('#definition-input').value;
  const language = document.querySelector('#language-select').value;
  const isPrivate = document.querySelector('#private-check').checked;
  const user = firebase.auth().currentUser;

  const newCardObj = {
    title,
    definition,
    language,
    isPrivate,
    time_submitted: new Date().toUTCString(),
    userID: user.uid
  };

  createVocabEntry(newCardObj).then(displayCards);
};

export default submitNewCard;
