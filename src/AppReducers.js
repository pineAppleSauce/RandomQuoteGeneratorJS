import {CHANGEAUTHOR, CHANGEQUOTE, CHANGECOLOR} from "./ActionTypes";

const defaultStateAuthor = {author: "Programmer"};
const defaultStateQuote = {quote: "Click the button to get a random quote"};
const defaultStateColor ='#282c34';

export const authorReducer = (state = defaultStateAuthor, action) => {
    switch (action.type) {
        case CHANGEAUTHOR:
            return {author: action.author};
        default:
            return state;
    }
}

export const quoteReducer = (state = defaultStateQuote, action) => {
    switch (action.type) {
        case CHANGEQUOTE:
            return {quote: action.quote};
        default:
            return state;
    }
}

export const colorReducer = (state = defaultStateColor, action) => {
    switch (action.type) {
        case CHANGECOLOR:
            return action.color;
        default:
            return state;
    }
}
