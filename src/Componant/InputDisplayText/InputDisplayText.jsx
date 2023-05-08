import React from 'react';
import { useState } from 'react';
import InputText from '../InputText/InputText';
import Counter from '../Counter/Counter';
import DisplayText from '../DisplayText/DisplayText';

function InputDisplayText() {
  const [text, setText] = useState(''); //react hook

  const onChange = (e) => {
    setText(e.target.value);
    //console.log("from parrent ===> ", e.target.value)
  };

  return (
    <>
      <InputText changeHandler={onChange} />
      <DisplayText msg={text} />
      <Counter />
    </>
  );
}

export default InputDisplayText;
