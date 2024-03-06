// import { signOut } from '../../utils/auth';

const navEvents = () => {
//   document.querySelector('#logout-button')
//     .addEventListener('click', signOut);
// };
// console.warn('signout');

  document.querySelector('#createEntry').addEventListener('click', () => {
    console.warn('clicked create entry');
  });
};

export default navEvents;
