import { createVocabEntry } from '../../data/vocabData';
import getUserID from '../../helpers/getUser';
import { displayCards } from '../../views/cardDisplay';

const submitNewCard = () => {
  const title = document.querySelector('#title-input').value;
  const definition = document.querySelector('#definition-input').value;
  const language = document.querySelector('#language-select').value;
  const isPrivate = document.querySelector('#private-check').checked;
  const userID = getUserID();

  if (title && definition && language) {
    const newCardObj = {
      title,
      definition,
      language,
      isPrivate,
      time_submitted: new Date().toUTCString(),
      userID
    };
    createVocabEntry(newCardObj).then(() => displayCards(userID));
  } else {
    document.querySelector('#card-submit-error').innerHTML = 'All fields required.';
  }
};

export default submitNewCard;
