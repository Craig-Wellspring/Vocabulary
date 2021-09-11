import firebase from 'firebase';
import { createVocabEntry } from '../../data/vocabData';
import displayCards from '../../views.js/cardDisplay';

const submitNewCard = () => {
  const title = document.querySelector('#title-input').value;
  const definition = document.querySelector('#definition-input').value;
  const language = document.querySelector('#language-select').value;
  const isPrivate = document.querySelector('#private-check').checked;
  const user = firebase.auth().currentUser;

  if (title && definition && language) {
    const newCardObj = {
      title,
      definition,
      language,
      isPrivate,
      time_submitted: new Date().toUTCString(),
      userID: user.uid
    };
    const currentFilter = document.querySelector('#language-filter');
    if (currentFilter.value !== 'None') {
      createVocabEntry(newCardObj).then(() => displayCards(language));
      currentFilter.value = language;
    } else {
      createVocabEntry(newCardObj).then(() => displayCards());
    }
  } else {
    document.querySelector('#card-submit-error').innerHTML = 'All fields required.';
  }
};

export default submitNewCard;
