import getUserID from '../helpers/getUser';
import signOut from '../helpers/signOut';
import { displayCards } from '../views/cardDisplay';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"><i id="navbar-logo" class="fas fa-book"></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items" aria-controls="navbar-items" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-items">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 navbar-list">
          <li class="nav-item">
            <button id="create-new-card" class="btn btn-primary">New Entry</button>
          </li>
          <li class="nav-item">
            Sort: 
            <select id="sort-select">
              <option>Alphabetical</option>
              <option>Reverse Alphabetical</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select
          </li>
          <li class="nav-item">
            Filter: 
            <select id="language-filter">
              <option>None</option>
              <option>JavaScript</option>
              <option>HTML</option>
              <option>CSS</option>
            </select>
          </li>
          <li>
            <div class="input-group" style="align-items: center">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fas fa-atlas" style="margin: 4px; margin-right: 8px;"></i>
                  <input type="checkbox" id="community-search" aria-label="Show community entries">
                </div>
              </div>
              <input type="text" id="search-input" class="form-control" aria-label="Text input with checkbox" placeholder="Search...">
              <div class="input-group-append">
                <span id="search-btn" class="input-group-text"><i id="search-btn" class="fas fa-search" style="margin: 4px;"></i></span>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <button id="community-btn" class="btn btn-primary" style="margin: 5px;"><i class="fas fa-atlas"></i> Community</button>
          </li>
        </ul>
        <i id="google-auth" class="basic-icon fas fa-sign-out-alt btn-danger"></i>
      </div>
    </nav>
  `;

  document.querySelector('#header').innerHTML = domString;

  document.querySelector('#google-auth').addEventListener('click', signOut);

  document.querySelector('#sort-select').addEventListener('change', () => displayCards(getUserID()));
  document.querySelector('#language-filter').addEventListener('change', () => displayCards(getUserID()));
};

export default navBar;
