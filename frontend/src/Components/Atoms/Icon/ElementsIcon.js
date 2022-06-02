import styled from 'styled-components';

export const Icon = styled.img`
${props => {
  if(props.className === 'login'){
  return`
  height: 100%;
  width: 100%;
  `
  }else {
    return`
    height: 20px;
    `
  }
}}
`;
