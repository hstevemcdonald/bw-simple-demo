import React from 'react';
import Form from '../common/Form/Form';

const Addword = props => {
  return (
    <div>
      <h4>Submit Words</h4>
      {props.formError ? <p>Please enter text before submission.</p> : ''}
      <br />
      <Form
        label="Words"
        type="text"
        name="words"
        attributes={{
          id: 'words'
        }}
        placeholder="Enter words"
        change={e => {
          props.change(e, 'words');
        }}
        value={props.words}
      />
      <Form
        attributes={{
          id: 'addWordButton'
        }}
        value="Submit"
        type="button"
        click={props.onSubmit}
      />
    </div>
  );
};

export default Addword;
