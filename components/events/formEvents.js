import { getCards, updateVocabCard, createVocabCard } from '../../api/cardData';
import showAllVocabCards from '../../pages/showVocabCards';

const formEvents = (uid) => {
  document.querySelector('#cards-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const currentTimestamp = Date.now(); // pulls the time right now in milliseconds
      const payload = {
        title: document.querySelector('#title').value,
        language_id: document.querySelector('#selectLanguage').value,
        definition: document.querySelector('#definition').value,
        timeSubmitted: new Date(currentTimestamp).toISOString(), // creates a new date object, toISOString converts the time to desired format
        uid
      };
      createVocabCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocabCard(patchPayload).then(() => {
          getCards(uid).then((cards) => showAllVocabCards(cards, uid));
        });
      });
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_id: document.querySelector('#select-language').value,
        firebaseKey,
      };
      updateVocabCard(payload).then(() => {
        getCards(uid).then((cards) => showAllVocabCards(cards, uid));
      });
    }
  });
};

export default formEvents;
