import { deleteVocabEntry } from '../../data/vocabData';
import getUserID from '../../helpers/getUser';
import { displayCards } from '../../views/cardDisplay';

const deleteEntry = (firebaseKey) => {
  // eslint-disable-next-line no-alert
  if (window.confirm('Are you sure you want to delete this entry?')) {
    deleteVocabEntry(firebaseKey).then(() => displayCards(getUserID()));
  }
};

export default deleteEntry;
