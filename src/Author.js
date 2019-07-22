import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

class Author extends Component {

    render() {
        return (<p>-{this.props.author}</p>);
    }
}

const mapStateToProps = (state) => {
    return {author: state.author.author}
};

const Container = connect(mapStateToProps)(Author);


export default Container;