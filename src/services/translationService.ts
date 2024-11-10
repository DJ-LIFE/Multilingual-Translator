import axios from 'axios';

const API_URL = 'https://api.mymemory.translated.net/get';

interface MyMemoryResponse {
  responseData: {
    translatedText: string;
    match: number;
  };
  quotaFinished?: boolean;
  responseStatus: number;
}

export async function translateText(text: string, sourceLang: string, targetLang: string): Promise<string> {
  try {
    const response = await axios.get<MyMemoryResponse>(API_URL, {
      params: {
        q: text,
        langpair: `${sourceLang}|${targetLang}`,
      },
    });
    
    if (response.data.quotaFinished) {
      throw new Error('Translation quota exceeded. Please try again later.');
    }

    if (response.data.responseStatus !== 200) {
      throw new Error('Translation service error. Please try again.');
    }

    return response.data.responseData.translatedText;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.responseDetails || 'Translation failed. Please check your internet connection.');
    }
    throw new Error('Translation failed. Please try again.');
  }
}