import styled from 'styled-components';

export const MenuLinkSidebarWrapper = styled.span`
  display: flex;
  width: 100%;
  height: 35px;
  align-items: center;
  /* justify-content: center; */
  cursor: pointer;
  &:hover {
    background-color: #BBCBD2;
  }
  &.active {
    background-color: #BBCBD2;
  }
`;
