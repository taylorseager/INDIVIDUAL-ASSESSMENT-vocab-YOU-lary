import renderToDOM from '../../utils/renderToDom';
import { getLanguages } from '../../api/languageData';

const selectLanguage = (uid, languageName) => {
  let domString = '<select id="selectLanguage">';

  getLanguages(uid).then((languageArray) => {
    languageArray.forEach((lang) => {
      domString += `
      <option value=${lang.firebaseKey}
      ${languageName === lang.firebaseKey ? 'selected' : ''}>${lang.languageName}</option>`;
    });
    domString += '</select>';
    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;

// `<label for="language">Select an Author</label>
// <select class="form-control" id="selectLanguage" required>
// <option value="">Select a Language</option>`
