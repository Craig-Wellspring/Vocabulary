import loginButton from '../components/buttons/loginButton';
import clearDOM from '../helpers/clearDOM';

const landingPage = () => {
  clearDOM();
  loginButton();
  document.querySelector('#app').innerHTML = `
      <h1>Vocabulary Cards</h1>`;
};

export default landingPage;
