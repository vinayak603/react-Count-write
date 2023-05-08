import React from 'react';

const InputText = ({ changeHandler }) => {
  return (
    <input style={{ margin: 'px' }} type="text" onChange={changeHandler} />
  );
};
export default InputText;
