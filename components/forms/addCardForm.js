import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

const createVocabEntryForm = (obj = {}, uid) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input class="form-control" id="title" value="${obj.title || ''}"required>
  </div>
  <div class="form-select mb-3" id="select-language">Language
    </div>
  <div class="mb-3">
  <label for="definition" class="form-label">Definition</label>
  <input class="form-control" id="definition" value="${obj.definition || ''}"required>
</div>
  <button id="submit-card" type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update Card' : 'Submit Card'}</button>
</form> 
  `;
  renderToDOM('#cards-container', domString);

  selectLanguage(`${obj.language_id || ''}`, uid);
};

export default createVocabEntryForm;

// const createVocabEntryForm = (obj = {}) => {
