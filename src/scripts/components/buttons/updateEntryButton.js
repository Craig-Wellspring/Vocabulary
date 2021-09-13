import { getVocabEntry } from '../../data/vocabData';
import newCardForm from '../../views/newCardForm';

const updateEntry = (firebaseKey) => {
  getVocabEntry(firebaseKey).then(newCardForm);
};

export default updateEntry;
