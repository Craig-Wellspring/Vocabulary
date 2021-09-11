import { updateVocabEntry } from '../../data/vocabData';
import displayCards from '../../views.js/cardDisplay';

const updateCardSubmit = (firebaseKey) => {
  const title = document.querySelector('#title-input').value;
  const definition = document.querySelector('#definition-input').value;
  const language = document.querySelector('#language-select').value;
  const isPrivate = document.querySelector('#private-check').checked;

  const payload = {
    title,
    definition,
    language,
    isPrivate
  };

  updateVocabEntry(firebaseKey, payload).then(displayCards);
};

export default updateCardSubmit;
