import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../../components/App/App';
import { checkWords } from '../../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    checkWords: words => dispatch(checkWords(words))
  };
};

const newWords = {
  words: []
};

class AddWordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = newWords;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e, key) {
    let newState = { ...this.state };
    newState[key] = e.target.value;
    this.setState(newState);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { words } = this.state;

    if (!words.length) {
      let newState = { ...this.state };
      newState.formError = true;
      this.setState(newState);
      setTimeout(() => {
        let newState = { ...this.state };
        newState.formError = false;
        this.setState(newState);
      }, 3000);
      return;
    }

    this.props.checkWords({
      words
    });
    this.setState(newWords);
    document.getElementById('words').value = '';
  }

  render(props) {
    return (
      <App
        change={this.onChangeHandler}
        onSubmit={this.onSubmitHandler}
        formError={this.state.formError}
        {...props}
      />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddWordContainer);
