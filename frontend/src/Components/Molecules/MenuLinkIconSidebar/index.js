import React from 'react';
import { Icon, Link } from '../../Atoms';
import { MenuLinkSidebarWrapper } from './ElementsMenuLinkIconSidebar';

function MenuLinkIconSidebar({ src, name }) {
  return (
    <MenuLinkSidebarWrapper>
      <Icon src={src} />
      <Link name={name} />
    </MenuLinkSidebarWrapper>
  );
}

export default MenuLinkIconSidebar;
