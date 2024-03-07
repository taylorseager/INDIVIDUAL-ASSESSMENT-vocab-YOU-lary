import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabCards = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#cards-container', domString);
};

const showAllVocabCards = (array) => {
  clearDom();

  if (array.length === 0) {
    emptyVocabCards();
  } else {
    let domString = '';
    array.forEach((obj) => {
      domString += `
      <div class="card">
      <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${obj.title}</h5>
          <p class="card-text">${obj.language_id}</p>
          <p class="card-text">${obj.definition}</p>
          <i id="edit-book-btn--${obj.firebaseKey}" class="btn btn-info">Edit</i>
          <i id="delete-book-btn--${obj.firebaseKey}" class="btn btn-danger">Delete</i>
      </div>
    </div>`;
    });
    renderToDOM('#cards-container', domString);
  }
};

export default showAllVocabCards;
