const sortAlphabetical = (cardArray) => {
  const sortedArray = cardArray.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return sortedArray;
};

const sortReverseAlphabetical = (cardArray) => {
  const sortedArray = cardArray.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return 1;
    }
    if (titleA > titleB) {
      return -1;
    }
    return 0;
  });

  return sortedArray;
};

const sortNewest = (cardArray) => {
  const sortedArray = cardArray.sort((a, b) => {
    const dateA = a.time_submitted;
    const dateB = b.time_submitted;
    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }
    return 0;
  });

  return sortedArray;
};

const sortOldest = (cardArray) => {
  const sortedArray = cardArray.sort((a, b) => {
    const dateA = a.time_submitted;
    const dateB = b.time_submitted;
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  });

  return sortedArray;
};

const sortCardArray = (cardArray) => {
  const sortBy = document.querySelector('#sort-select').value;
  let sortedArray = [];

  switch (sortBy) {
    case 'Alphabetical':
      sortedArray = sortAlphabetical(cardArray);
      break;

    case 'Reverse Alphabetical':
      sortedArray = sortReverseAlphabetical(cardArray);
      break;

    case 'Newest':
      sortedArray = sortNewest(cardArray);
      break;

    case 'Oldest':
      sortedArray = sortOldest(cardArray);
      break;

    default: break;
  }

  return sortedArray;
};

export default sortCardArray;
