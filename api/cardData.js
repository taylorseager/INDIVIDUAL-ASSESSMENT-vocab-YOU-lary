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

const updateVocabCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${payload.firebaseKey}.json?`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getCards, updateVocabCard };
