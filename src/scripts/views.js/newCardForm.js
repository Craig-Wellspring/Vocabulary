import clearDOM from '../helpers/clearDOM';

const newCardForm = (vocabObj = {}) => {
  clearDOM();

  const domString = `
    <form id="new-card-form">
      <div class="form-group">
        <label for="title-input">Term</label>
        <input type="text" class="form-control" id="title-input" placeholder="Enter new term" value="${vocabObj.title || ''}">
      </div>
      <div class="form-group">
        <label for="definition-input">Definition</label>
        <textarea type="text" class="form-control" id="definition-input" placeholder="Definition">${vocabObj.definition || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="language-select">Language: </label>
        <select id="language-select" name="language-select">
          <option ${vocabObj.language === 'JavaScript' ? 'selected' : ''}>JavaScript</option>
          <option ${vocabObj.language === 'HTML' ? 'selected' : ''}>HTML</option>
          <option ${vocabObj.language === 'CSS' ? 'selected' : ''}>CSS</option>
        </select>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="private-check" ${vocabObj.isPrivate ? 'checked' : ''}>
        <label class="form-check-label" for="private-check">Private?</label>
      </div>
      ${vocabObj.firebaseKey ? `<button type="submit" id="update-card-submit-btn--${vocabObj.firebaseKey}" class="btn btn-primary">Update</button>` : '<button type="submit" id="new-card-submit-btn" class="btn btn-success">Submit</button>'}
    </form>
  `;

  document.querySelector('#app').innerHTML = domString;
};

export default newCardForm;
