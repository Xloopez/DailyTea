export const FETCH_ARTICLES = 'FECTH_ARTICLES';
export const ADD_FAVORITES = 'ADD_FAVORITES';

export const fecthArticles = () => {
    return {
        type: FETCH_ARTICLES,
        payload: {id: 1, title: 'Youtuber scandal', description: 'Influencer news is on'} //The data that we pass to our store 
    }
}