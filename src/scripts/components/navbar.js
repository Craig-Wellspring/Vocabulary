import signOut from '../helpers/signOut';
import languageFilter from './buttons/languageFilter';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"><i id="navbar-logo" class="fas fa-book"></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items" aria-controls="navbar-items" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-items">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a id="create-new-card" class="nav-link" href="#">New Entry</a>
          </li>
          <li class="nav-item">
            <select id="language-filter">
              <option>JavaScript</option>
              <option>HTML</option>
              <option>CSS</option>
            </select>
          </li>
        </ul>
        <button id="google-auth" class="btn btn-danger logout-btn">LOGOUT</button>
      </div>
    </nav>
  `;

  document.querySelector('#header').innerHTML = domString;

  document.querySelector('#google-auth').addEventListener('click', signOut);
  document.querySelector('#language-filter').addEventListener('change', languageFilter);
};

export default navBar;
