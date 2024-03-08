import createVocabEntryForm from '../forms/addCardForm';

const navEvents = (uid) => {
  document.querySelector('#createEntry').addEventListener('click', () => {
    console.warn('I clicked!');
    createVocabEntryForm(uid);
  });
};

export default navEvents;
