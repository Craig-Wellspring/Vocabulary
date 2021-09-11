import { getVocabEntry } from '../../data/vocabData';
import newCardForm from '../../views.js/newCardForm';

const updateEntry = (firebaseKey) => {
  getVocabEntry(firebaseKey).then(newCardForm);
};

export default updateEntry;
