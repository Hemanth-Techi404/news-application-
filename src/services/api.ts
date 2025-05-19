import { NewsResponse } from '../types/news';

const API_KEY = 'pub_87821abbbc191c3e180e322087bfa1c7e4efd';
const BASE_URL = 'https://newsdata.io/api/1';

export const fetchNews = async (page?: string): Promise<NewsResponse> => {
  try {
    const pageParam = page ? `&page=${page}` : '';
    const response = await fetch(
      `${BASE_URL}/news?apikey=${API_KEY}&q=news&language=en${pageParam}`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};