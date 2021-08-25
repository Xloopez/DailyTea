export const FETCH_ARTICLES = 'FECTH_ARTICLES';
export const ADD_FAVORITES = 'ADD_FAVORITES';

export const fecthArticles = () => {
    return async dispatch => {
        //Add logic to fetch news data - using fetch api
        const result = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=363c4df1bb96484cb56148d907dafeb2');
        const resultData = await result.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData

        });
    }
}