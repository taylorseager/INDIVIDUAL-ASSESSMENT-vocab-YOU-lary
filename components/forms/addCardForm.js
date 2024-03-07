import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const createVocabEntryForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input class="form-control" id="title" value="${obj.title || ''}"required>
  </div>
  <div class="mb-3">
    <label for="language_id" class="form-label">Language</label>
    <input type="dropdown" class="form-control" id="language_id" value="${obj.language_id || ''}"required>
  </div>
  <div class="mb-3">
  <label for="definition" class="form-label">Definition</label>
  <input class="form-control" id="definition" value="${obj.definition || ''}"required>
</div>
  <button id="submit-card" type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update Card' : 'Submit Card'}</button>
</form> 
  `;
  renderToDOM('#cards-container', domString);
};

export default createVocabEntryForm;

// const createVocabEntryForm = (obj = {}) => {
