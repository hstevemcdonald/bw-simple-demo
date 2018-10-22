import React from 'react';
import './Word.css';

const Word = props => {
  return (
    <div className="Word">
      {props ? (
        <p>
          <b>{props.word}</b> count: {props.count}
        </p>
      ) : (
        <p>No words processed</p>
      )}
    </div>
  );
};

export default Word;
