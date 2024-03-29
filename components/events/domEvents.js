// import { updateVocabCard } from '../../api/cardData';
import { deleteVocabCard, getCards } from '../../api/cardData';
import getCardDetails from '../../api/mergedData';
import createVocabEntryForm from '../forms/addCardForm';
import showAllVocabCards from '../../pages/showVocabCards';

const domEvents = (uid) => {
  document.querySelector('#cards-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit')) {
      const [, firebaseKey] = e.target.id.split('--');

      getCardDetails(firebaseKey).then((cardObj) => {
        createVocabEntryForm(uid, cardObj);
      });
    }

    if (e.target.id.includes('delete')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocabCard(firebaseKey).then(() => {
          getCards(uid).then((cards) => showAllVocabCards(cards, uid));
        });
      }
    }
  });
};

export default domEvents;
