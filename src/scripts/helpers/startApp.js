import navBar from '../components/navbar';
import clearDOM from './clearDOM';
import displayCards from '../views.js/cardDisplay';
import clickEvents from './click-events';

const startApp = (uid) => {
  clearDOM();
  navBar();
  clickEvents();
  displayCards(uid);
};

export default startApp;
