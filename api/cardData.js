import client from '../utils/client';

const endpoint = client.database_URL;
// console.warn('db url check', endpoint);

const getCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getCards;
