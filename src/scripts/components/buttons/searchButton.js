import { getAllVocab, getUserVocab } from '../../data/vocabData';
import getUserID from '../../helpers/getUser';
import { renderCards } from '../../views/cardDisplay';

const searchArray = (array, searchKey) => array.filter((obj) => Object.keys(obj).some((key) => JSON.stringify(obj[key]).toLowerCase().includes(searchKey)));

const searchBtn = () => {
  const communityCheck = document.querySelector('#community-search').checked;
  const searchInput = document.querySelector('#search-input').value.toLowerCase();

  if (communityCheck) {
    getAllVocab().then((vocab) => {
      const searchResults = searchArray(vocab, searchInput);
      renderCards(searchResults);
    });
  } else {
    getUserVocab(getUserID()).then((vocab) => {
      const searchResults = searchArray(vocab, searchInput);
      renderCards(searchResults);
    });
  }
};

export default searchBtn;
