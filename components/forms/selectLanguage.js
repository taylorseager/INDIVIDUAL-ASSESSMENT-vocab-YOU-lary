import renderToDOM from '../../utils/renderToDom';
import { getLanguages } from '../../api/languageData';

const selectLanguage = (uid, languageName) => {
  let domString = '';

  getLanguages(uid).then((languageArray) => {
    console.warn('lang array', languageArray);
    languageArray.forEach((lang) => {
      console.warn(lang);
      domString += `
      <option value=${lang.firebaseKey}"
      ${languageName === lang.firebaseKey ? 'selected' : ''}></option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;

// `<label for="language">Select an Author</label>
// <select class="form-control" id="selectLanguage" required>
// <option value="">Select a Language</option>`
