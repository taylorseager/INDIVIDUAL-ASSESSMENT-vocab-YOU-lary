import renderToDOM from '../utils/renderToDom';

const emptyVocabCards = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#cards-container', domString);
};

const showAllVocabCards = (array) => {
// clearDom();

  if (array.length === 0) {
    emptyVocabCards();
  } else {
    let domString = '';
    array.forEach((item) => {
      domString += `
      <div class="card">
      <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.title}</h5>
          <p ${item.description}></p>
          <i id="edit-book-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
          <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger">Delete</i>
      </div>
    </div>`;
    });
    renderToDOM('#book-store', domString);
  }
};

export default showAllVocabCards;
