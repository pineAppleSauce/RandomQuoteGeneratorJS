import React, { Component } from 'react';
import './App.css';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import Author from "./Author";
import Quote from "./Quote";
import {changeAuthor, changeQuote, changeColor} from "./AppActions";
import RootReducer from "./RootReducer";
import logger from 'redux-logger';
import {ApppWrapper, MainWrapper, HeaderWrapper,
AuthorWrapper, QuoteWrapper, StyledButton,Spinner} from './StyledComponents';

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6',
  '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];


const store = createStore(
    RootReducer,
    applyMiddleware(logger)
);

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(fn, ...args) {
    await timeout(3000);
    return fn(...args);
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: null,
      loading: false
    }
  }

  handleClick = () => {
    const min = 0;
    const max = this.state.data.quotes.length;
    const colorMax = colors.length;
    const rand = min + Math.random() * (max - min);
    const randColor = min + Math.random() * (colorMax - min);
    this.props.changeToText(this.state.data.quotes[Math.floor(rand)].quote,
        this.state.data.quotes[Math.floor(rand)].author);
    this.props.changeToColor(colors[Math.floor(randColor)]);
  }

  async componentDidMount() {
      this.setState({loading: true})
    const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    sleep(async () => {const response = await fetch(url);
        const data =  await response.json();
        this.setState({data : data, loading: false})});
  }

  render() {
    return (
        <ApppWrapper>
          <HeaderWrapper color={this.props.color}>
            {this.state.loading ? (<Spinner></Spinner>) : (
            <MainWrapper color={this.props.color}>
              <QuoteWrapper color={this.props.color}>
                <Quote/>
              </QuoteWrapper>
              <AuthorWrapper>
                <Author/>
              </AuthorWrapper>
              <StyledButton color={this.props.color} onClick={this.handleClick}>Click me!</StyledButton>
            </MainWrapper> )}
          </HeaderWrapper>
        </ApppWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {quote: state.quote, author: state.author, color: state.color}
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeToText: (quote, author) => {
      dispatch(changeQuote(quote));
      dispatch(changeAuthor(author));
    },
    changeToColor: (color) => {
      dispatch(changeColor(color));
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Container/>
        </Provider>
    );
  }
};

export default AppWrapper;