import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

class Quote extends Component {

    render() {
        return (<p><b>"</b>{this.props.quote}<b>"</b></p>);
    }
}

const mapStateToProps = (state) => {
    return {quote: state.quote.quote}
};

const Container = connect(mapStateToProps)(Quote);


export default Container;