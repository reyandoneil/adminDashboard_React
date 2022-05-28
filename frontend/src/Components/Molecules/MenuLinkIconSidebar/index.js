import React from 'react';
import { Icon, Link } from '../../Atoms';
import { MenuLinkSidebarWrapper } from './ElementsMenuLinkIconSidebar';
import { useSelector } from 'react-redux';

function MenuLinkIconSidebar({ src, name, path }) {
  const ScreenSizeReducer = useSelector((state) => state.screenSize);
  const ss = ScreenSizeReducer.ss;
  return (
    <MenuLinkSidebarWrapper to={path}>
      <Icon src={src} />
      <Link name={name} ss={ss} />
    </MenuLinkSidebarWrapper>
  );
}

export default MenuLinkIconSidebar;
