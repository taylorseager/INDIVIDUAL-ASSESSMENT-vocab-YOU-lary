import { getCards } from '../../api/cardData';
import { getLanguageByName } from '../../api/languageData';
import showAllVocabCards from '../../pages/showVocabCards';
import createVocabEntryForm from '../forms/addCardForm';

const languageFilter = async (languageString, uid) => {
  const cards = await getCards(uid);
  const language = await getLanguageByName(languageString);
  const filteredCards = cards.filter((card) => card.language_id === language.firebaseKey);
  showAllVocabCards(filteredCards, uid);
};

const navEvents = (uid) => {
  document.querySelector('#navBar').addEventListener('click', async (e) => {
    if (e.target.id.includes('createEntry')) {
      createVocabEntryForm(uid);
    }

    if (e.target.id.includes('allFilter')) {
      getCards(uid).then((cards) => showAllVocabCards(cards, uid));
    }
    if (e.target.id.includes('HtmlFilter')) {
      languageFilter('HTML', uid);
    }
    if (e.target.id.includes('CssFilter')) {
      languageFilter('CSS', uid);
    }
    if (e.target.id.includes('JsFilter')) {
      languageFilter('JavaScript', uid);
    }
  });
};

export default navEvents;
