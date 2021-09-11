import { deleteVocabEntry } from '../../data/vocabData';
import displayCards from '../../views.js/cardDisplay';

const deleteEntry = (firebaseKey) => {
  // eslint-disable-next-line no-alert
  if (window.confirm('Are you sure you want to delete this entry?')) {
    deleteVocabEntry(firebaseKey).then(displayCards);
  }
};

export default deleteEntry;
