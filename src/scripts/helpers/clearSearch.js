const clearSearch = () => {
  const searchInput = document.querySelector('#search-input');
  const communityCheck = document.querySelector('#community-search');

  searchInput.value = '';
  communityCheck.checked = false;
};

export default clearSearch;
