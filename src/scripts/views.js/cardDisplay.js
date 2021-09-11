import vocabCard from '../components/vocabCard';
import { getAllVocab, getVocabByLanguage } from '../data/vocabData';

const sortCardArray = (cardArray) => {
  const sortBy = document.querySelector('#sort-select').value;
  console.warn(sortBy);
  const sortedArray = cardArray;

  return sortedArray;
};

const renderCards = (cardArray) => {
  let domString = '';

  if (cardArray.length > 0) {
    sortCardArray(cardArray).forEach((card) => { domString += vocabCard(card); });
  } else {
    domString = '<h5>No entries found</h5>';
  }

  document.querySelector('#app').innerHTML = domString;
};

const displayCards = (language = 'None') => {
  if (language === 'None') {
    getAllVocab().then(renderCards);
  } else {
    getVocabByLanguage(language).then(renderCards);
  }
};

export default displayCards;
