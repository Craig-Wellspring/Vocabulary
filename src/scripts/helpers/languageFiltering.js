const filterByLanguage = (cardArray) => {
  const currentFilter = document.querySelector('#language-filter').value;

  return currentFilter === 'None' ? cardArray : cardArray.filter((card) => card.language === currentFilter);
};

export default filterByLanguage;
