import { getSingleCard } from './cardData';
import { getSingleLanguage } from './languageData';

const getCardDetails = async (cardFirebaseKey) => {
  const cardObject = await getSingleCard(cardFirebaseKey);
  const languageObject = await getSingleLanguage(cardObject.language_id);

  return { ...cardObject, languageObject };
};

export default getCardDetails;
