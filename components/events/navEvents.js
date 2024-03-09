import createVocabEntryForm from '../forms/addCardForm';

const navEvents = (uid) => {
  console.warn('test', uid);
  document.querySelector('#createEntry').addEventListener('click', () => {
    console.warn('I clicked!', uid);
    createVocabEntryForm(uid);
  });
};

export default navEvents;
