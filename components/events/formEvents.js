import { getCards, updateVocabCard } from '../../api/cardData';
import showAllVocabCards from '../../pages/showVocabCards';
import createVocabEntryForm from './domEvents';

const formEvents = (uid) => {
  document.querySelector('#cards-container').addEventListener('submit', (e) => {
    console.warn('submit clicked');
    e.preventDefault();
    if (e.target.id.includes('submit-vocabCard')) {
      const payload = {
        title: document.querySelector('#title').value,
        language_id: document.querySelector('#language_id').value,
        definition: document.querySelector('#definition').value,
        uid,
      };

      createVocabEntryForm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabCard(patchPayload).then(() => {
          getCards(uid).then(showAllVocabCards);
        });
      });
    }

    // if (e.target.id.includes().addEventListener('update-card')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   const payload = {
    //     title: document.querySelector('#title').value,
    //     definition: document.querySelector('#definition').value,
    //     language_id: document.querySelector('#language_id').value,
    //     firebaseKey,
    //   };
    //   updateVocabCard(payload).then(() => {
    //     getCards(uid).then(showAllVocabCards);
    //   });
    // }
  });
};

export default formEvents;
