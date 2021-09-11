import displayCards from '../../views.js/cardDisplay';

const languageFilter = () => {
  const language = document.querySelector('#language-filter').value;

  displayCards(language);
};

export default languageFilter;
