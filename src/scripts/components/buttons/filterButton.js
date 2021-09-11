import displayCards from '../../views.js/cardDisplay';

const filterButton = (language) => {
  document.querySelector('#language-filter').value = language;

  displayCards(language);
};

export default filterButton;
