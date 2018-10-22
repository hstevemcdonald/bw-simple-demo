import React from 'react';
import { connect } from 'react-redux';

import Word from '../Word/Word';
import './Words.css';

const mapStateToProps = state => {
  return state.words;
};

const Words = props => {
  return (
    <div>
      <h4>Words</h4>
      {props.words && props.words.length ? (
        props.words.filter(data => data != null).map(data => {
          return <Word key={data.word} {...data} />;
        })
      ) : (
        <p>There are no Words!!!</p>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(Words);
