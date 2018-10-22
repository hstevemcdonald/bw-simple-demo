import React from 'react';
import './Word.css';

const Word = props => {
  console.log('PROpS AT WORD', props);
  return (
    <div className="Word">
      {props ? (
        <p>
          {props.word} count: {props.count}
        </p>
      ) : (
        <p>No words processed</p>
      )}
    </div>
  );
};

export default Word;
