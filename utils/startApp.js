import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/Buttons/logoutButton';
import navigationBar from '../components/shared/navBar';
import showAllVocabCards from '../pages/showVocabCards';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  // domEvents(uid); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navigationBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  // getBooks(uid).then();
  // dont show arthurs when app loads
  // getAuthors().then(showAuthors);
  showAllVocabCards();
};

export default startApp;
