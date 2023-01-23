import axios from 'axios';

const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const searchWord = async (word: string) => {
  try {
    const res = await axios.get(`${baseUrl}${word}`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return { error: err.response?.status };
    }
  }
  return [];
};

export default searchWord;
