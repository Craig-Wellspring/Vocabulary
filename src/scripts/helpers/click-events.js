import submitNewCard from '../components/buttons/cardSubmitButton';
import deleteEntry from '../components/buttons/deleteEntryButton';
import updateEntry from '../components/buttons/updateEntryButton';
import displayCards from '../views.js/cardDisplay';
import newCardForm from '../views.js/newCardForm';
import updateCardSubmit from '../components/buttons/updateCardSubmit';

const handleClicks = (e) => {
  const [targetID, targetIndex] = e.target.id.split('--');

  console.warn(`targetID: ${targetID} | targetIndex: ${targetIndex}`);

  switch (targetID) {
    case 'navbar-logo':
      displayCards();
      break;

    case 'create-new-card':
      newCardForm();
      break;

    case 'new-card-submit-btn':
      e.preventDefault();
      submitNewCard();
      break;

    case 'update-card-submit-btn':
      e.preventDefault();
      updateCardSubmit(targetIndex);
      break;

    case 'update-entry':
      updateEntry(targetIndex);
      break;

    case 'delete-entry':
      deleteEntry(targetIndex);
      break;

    default: break;
  }
};

const clickEvents = () => {
  document.querySelector('body').addEventListener('click', handleClicks);
};

export default clickEvents;
