import { displayCards } from '../../views/cardDisplay';
import getUserID from '../../helpers/getUser';

const filterButton = (language) => {
  document.querySelector('#language-filter').value = language;

  displayCards(getUserID());
};

export default filterButton;
