import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';

const dbURL = firebaseConfig.databaseURL;

// Get all vocabulary entries
const getAllVocab = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/vocab.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// Get single vocabulary entry
const getVocabEntry = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// Get vocabulary entries filtered by language
const getVocabByLanguage = (language) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/vocab.json?orderBy="language"&equalTo="${language}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// Create vocabulary entry
const createVocabEntry = (vocabObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/vocab.json`, vocabObj)
    .then((response) => {
      const patchPayload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/vocab/${response.data.name}.json`, patchPayload)
        .then(() => {
          getAllVocab().then(resolve);
        });
    }).catch(reject);
});

// Delete vocabulary entry
const deleteVocabEntry = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/vocab/${firebaseKey}.json`)
    .then(() => {
      getAllVocab().then(resolve);
    }).catch(reject);
});

// Update vocabulary entry
const updateVocabEntry = (firebaseKey, payload) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/vocab/${firebaseKey}.json`, payload)
    .then(() => getAllVocab().then(resolve))
    .catch(reject);
});

export {
  getAllVocab,
  getVocabEntry,
  getVocabByLanguage,
  createVocabEntry,
  deleteVocabEntry,
  updateVocabEntry
};
