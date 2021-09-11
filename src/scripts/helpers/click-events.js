import submitNewCard from '../components/buttons/cardSubmitButton';
import deleteEntry from '../components/buttons/deleteEntryButton';
import updateEntry from '../components/buttons/updateEntryButton';
import displayCards from '../views.js/cardDisplay';
import newCardForm from '../views.js/newCardForm';
import updateCardSubmit from '../components/buttons/updateCardSubmit';
import filterButton from '../components/buttons/filterButton';

const handleClicks = (e) => {
  const [targetID, targetIndex] = e.target.id.split('--');

  console.warn(`targetID: ${targetID} | targetIndex: ${targetIndex}`);

  switch (targetID) {
    // Navbar Buttons
    case 'navbar-logo':
      displayCards();
      break;

    case 'create-new-card':
      newCardForm();
      break;

    // Form buttons
    case 'new-card-submit-btn':
      e.preventDefault();
      submitNewCard();
      break;

    case 'update-card-submit-btn':
      e.preventDefault();
      updateCardSubmit(targetIndex);
      break;

    // Card Buttons
    case 'language-filter-btn':
      filterButton(targetIndex);
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
