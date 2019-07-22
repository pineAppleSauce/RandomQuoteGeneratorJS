import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as actions from './AppActions'
import * as types from './ActionTypes'
import * as reducers from './AppReducers'

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
})

describe('actions', () => {
    it('should create an action to change quote', () =>  {
        const quote = 'Some other text'
        const expectedAction = {
            type: types.CHANGEQUOTE,
            quote
        }
        expect(actions.changeQuote(quote)).toEqual(expectedAction)
    })
})

/*const defaultState = {text: "", author: ""};

describe('reducers', () => {
    it('should have initial state', () => {
        expect(reducers.textReducer()).toEqual(defaultState)
    })
})*/



