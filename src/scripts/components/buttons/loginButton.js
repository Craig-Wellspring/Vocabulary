import signIn from '../../helpers/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<i id="google-auth" class="basic-icon fas fa-sign-in-alt btn-success"></i>';
  document.querySelector('#header').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
