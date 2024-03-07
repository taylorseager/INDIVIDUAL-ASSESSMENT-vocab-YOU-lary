import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const createVocabEntryForm = () => {
  clearDom();
  const domString = `
  <form id="{$obj.firebaskeKey}">
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input class="form-control" id="title">
  </div>
  <div class="mb-3">
    <label for="category" class="form-label">Language</label>
    <input type="text" class="form-control" id="category">
  </div>
  <div class="mb-3">
  <label for="definition" class="form-label">Definition</label>
  <input class="form-control" id="definition">
</div>
  <button id="submit-vocabCard" type="submit" class="btn btn-primary">Submit</button>
</form>
  `;
  renderToDOM('#cards-container', domString);
};

export default createVocabEntryForm;

// const createVocabEntryForm = (obj = {}) => {
