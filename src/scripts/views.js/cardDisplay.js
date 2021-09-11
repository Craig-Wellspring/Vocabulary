import vocabCard from '../components/vocabCard';
import { getAllVocab, getVocabByLanguage } from '../data/vocabData';

const renderCards = (cardArray) => {
  let domString = '';

  cardArray.forEach((card) => { domString += vocabCard(card); });

  document.querySelector('#app').innerHTML = domString;
};

const noEntries = () => {
  const domString = 'You have no vocabulary entries';

  document.querySelector('#app').innerHTML = domString;
};

const displayCards = (language = '') => {
  if (language) {
    getVocabByLanguage(language).then((vocabArray) => {
      if (vocabArray) {
        renderCards(vocabArray);
      } else {
        noEntries();
      }
    });
  } else {
    getAllVocab().then((vocabArray) => {
      if (vocabArray) {
        renderCards(vocabArray);
      } else {
        noEntries();
      }
    });
  }
};

export default displayCards;
