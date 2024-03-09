import { getLanguages } from '../api/languageData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabCards = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#cards-container', domString);
};

const showAllVocabCards = async (array, uid) => {
  clearDom();

  if (array.length === 0) {
    emptyVocabCards();
  } else {
    let domString = '';
    const languages = await getLanguages(uid);
    array.forEach((obj) => {
      const singleLanguage = languages.find((lang) => lang.firebaseKey === obj.language_id);
      domString += `
      <div class="card">
      <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${obj.title}</h5>
          <p class="card-text">${singleLanguage.languageName}</p>
          <p class="card-text">${obj.definition}</p>
          <div id="cardBtns">
          <button id="edit-book--${obj.firebaseKey}" type="button" class="btn btn-success">Edit</button>
          <button id="delete-book--${obj.firebaseKey}" class="btn btn-danger">Delete</button>
          </div>
      </div>
    </div>`;
    });
    renderToDOM('#cards-container', domString);
  }
};

export default showAllVocabCards;
