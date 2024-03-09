import client from '../utils/client';

const endpoint = client.database_URL;

const getLanguages = (uid) => new Promise((resolve, reject) => {
  console.warn(uid);
  fetch(`${endpoint}/languages.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleLanguage = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getLanguageByName = (languageName) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json?orderBy="languageName"&equalTo="${languageName}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const firstItem = data ? Object.values(data)[0] : null;
      resolve(firstItem);
    })
    .catch(reject);
});

export { getLanguages, getSingleLanguage, getLanguageByName };
