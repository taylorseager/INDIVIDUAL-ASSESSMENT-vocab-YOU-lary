// import showAllVocabCards from '../../pages/showVocabCards';
// import { signOut } from '../../utils/auth';
import createVocabEntryForm from '../forms/addCardForm';

// import showAllVocabCards from '../../pages/showVocabCards';

const navEvents = (uid) => {
  // document.querySelector('#logout-button')
  //   .addEventListener('click', signOut);

  document.querySelector('#createEntry').addEventListener('click', () => {
    console.warn('I clicked!');
    createVocabEntryForm(uid);
  });
};

export default navEvents;
