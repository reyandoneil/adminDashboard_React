import styled from 'styled-components';

export const InputTextWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

export const Input = styled.input`
  color: black;
  font-size: 1rem;
  max-width: 100%;
  border-radius: 5px;
  border: none;
  padding: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &:focus {
    outline: none;
  }

  &:valid {
    box-shadow: 0 0 2px #d5d1fe;
    box-shadow: none;
  }

  &:valid:focus {
    background: #d5d1fe;
  }

  &:invalid {
    box-shadow: 0 0 2px #ff2020;
  }

  &:invalid:focus {
    background: #ffcece;
    box-shadow: none;
    color: black;
  }
`;
