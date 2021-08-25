
const initialState = {
    //define the states that we are going to use in ur app
    articles: [],
    favorites: []
}

export default function(state = initialState, action) {

    switch(action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
    }

    return state;
}