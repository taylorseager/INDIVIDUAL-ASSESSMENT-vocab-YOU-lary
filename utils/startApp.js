import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/Buttons/logoutButton';
import navigationBar from '../components/shared/navBar';
import showAllVocabCards from '../pages/showVocabCards';
import { getCards } from '../api/cardData';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import navEvents from '../components/events/navEvents';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  domEvents(uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navigationBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navEvents(uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  getCards(uid).then((vocab) => showAllVocabCards(vocab, uid));
};

export default startApp;
