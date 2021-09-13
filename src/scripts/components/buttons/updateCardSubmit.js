import { updateVocabEntry } from '../../data/vocabData';
import getUserID from '../../helpers/getUser';
import { displayCards } from '../../views/cardDisplay';

const updateCardSubmit = (firebaseKey) => {
  const title = document.querySelector('#title-input').value;
  const definition = document.querySelector('#definition-input').value;
  const language = document.querySelector('#language-select').value;
  const isPrivate = document.querySelector('#private-check').checked;

  if (title && definition && language) {
    const payload = {
      title,
      definition,
      language,
      isPrivate
    };
    updateVocabEntry(firebaseKey, payload).then(() => displayCards(getUserID()));
  } else {
    document.querySelector('#card-submit-error').innerHTML = 'All fields required.';
  }
};

export default updateCardSubmit;
