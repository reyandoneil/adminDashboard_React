import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuLinkSidebarWrapper = styled(NavLink)`
  color: black;
  display: flex;
  width: 100%;
  height: 35px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #bbcbd2;
  }
  &.active {
    color: white;
    background-color: #bbcbd2;
  }
`;
