import { updateVocabEntry } from '../../data/vocabData';
import displayCards from '../../views.js/cardDisplay';

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
    const currentFilter = document.querySelector('#language-filter').value;
    updateVocabEntry(firebaseKey, payload).then(() => displayCards(currentFilter));
  } else {
    document.querySelector('#card-submit-error').innerHTML = 'All fields required.';
  }
};

export default updateCardSubmit;
