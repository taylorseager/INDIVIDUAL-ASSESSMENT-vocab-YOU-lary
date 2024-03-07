import { createVocabCard, updateVocabCard, getSingleCard } from '../../api/cardData';

const domEvents = (uid) => {
  document.querySelector('#createEntry').addEventListener('click', (e) => {
    console.warn('I clicked!');
    if (e.target.id.includes('createEntry')) {
      createVocabCard({}, uid);
    }

    if (e.target.id.includes('edit-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('edit button clicked');
      getSingleCard(firebaseKey).then((cardObj) => updateVocabCard(cardObj, uid));
    }
  });
};

export default domEvents;
