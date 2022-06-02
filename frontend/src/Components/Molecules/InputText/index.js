import React from 'react';
import { InputTextWrapper, Label, Input } from './ElementsInputText';

function index({ id, name, type }) {
  return (
    <>
      <InputTextWrapper>
        <Label for={id}>{name}</Label>
        <Input type={type} name={id} id={id} />
      </InputTextWrapper>
    </>
  );
}

export default index;
