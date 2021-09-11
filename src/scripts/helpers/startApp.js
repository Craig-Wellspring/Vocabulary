import navBar from '../components/navbar';
import clearDOM from './clearDOM';
import displayCards from '../views.js/cardDisplay';
import clickEvents from './click-events';

const startApp = () => {
  clearDOM();
  navBar();
  clickEvents();
  displayCards();
};

export default startApp;
