import loginButton from '../components/buttons/loginButton';
import clearDOM from '../helpers/clearDOM';

const landingPage = () => {
  clearDOM();
  document.querySelector('#app').innerHTML = `
      <h1>Vocabulary Cards</h1>`;
  loginButton();
};

export default landingPage;
