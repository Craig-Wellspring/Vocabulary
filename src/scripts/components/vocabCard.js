const vocabCard = (vocabObj, userID = null) => `
  <div class="vocab-card card" style="width: 18rem;">
    <div class="card-header">
      <h5 class="card-title">${vocabObj.title}</h5>
      <span id="language-filter-btn--${vocabObj.language}" class="btn btn-sm btn-dark">${vocabObj.language}</span>
    </div>
    <div class="card-body">
      <div>
        <p class="card-text">${vocabObj.definition}</p>
      </div>
      <div>
        <hr>
        <div class="card-time-submitted">Submitted: ${vocabObj.time_submitted}</div>
      </div>
    </div>
    <div class="card-footer">
      <div>
        <i class="card-privacy small-icon fas fa-${vocabObj.isPrivate ? 'lock' : 'lock-open'}"></i>
        ${vocabObj.userID === userID ? '' : '<i class="small-icon fas fa-atlas"></i>'}
      </div>
      <div>
        <i id="update-entry--${vocabObj.firebaseKey}" class="basic-icon fas fa-edit btn-primary"></i>
        <i id="delete-entry--${vocabObj.firebaseKey}" class="basic-icon fas fa-trash btn-danger"></i>
      </div>
    </div>
  </div>
`;

export default vocabCard;
