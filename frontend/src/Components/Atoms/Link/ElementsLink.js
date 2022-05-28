import styled from 'styled-components';

export const LinkWrapper = styled.div`
  ${(props) => {
    if (props.ss === 'sm' || props.ss === 'xs') {
      return `
      display:none;
    `;
    }
  }}
  margin-left: 15px;
`;

export const Text = styled.span`
  &:focus {
    outline: none !important;
    outline-width: 0;
  }
`;
