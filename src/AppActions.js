import {CHANGEAUTHOR, CHANGECOLOR, CHANGEQUOTE} from "./ActionTypes";

export const changeAuthor = (author) => {
  return {
    type: CHANGEAUTHOR,
    author: author
  }
}

export const changeQuote = (quote) => {
  return {
    type: CHANGEQUOTE,
    quote: quote
  }
}

export const changeColor = (color) => {
  return {
    type: CHANGECOLOR,
    color: color
  }
}
