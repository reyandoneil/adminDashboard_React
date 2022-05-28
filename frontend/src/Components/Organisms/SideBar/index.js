import React from 'react';
import { LogoSrc } from '../../../Assets/index';
import {
  LogoSidebar,
  MenuLinkIconSidebar,
} from '../../Molecules';
import {
  MenuSidebar,
  Master,
  Setting,
} from '../../../Master/MenuSidebar';

import { Title, SidebarWrapper } from './ElementsSidebar';

function Sidebar() {
  return (
    <>
      <SidebarWrapper>
        <LogoSidebar src={LogoSrc} />
        <Title>Menu</Title>
        {MenuSidebar.map((item) => {
          return (
            <MenuLinkIconSidebar
              key={item.id}
              src={item.icon}
              name={item.name}
              path={item.path}
            />
          );
        })}
        <Title>Master</Title>
        {Master.map((item) => {
          return (
            <MenuLinkIconSidebar
              key={item.id}
              src={item.icon}
              name={item.name}
              path={item.path}

            />
          );
        })}
        <Title>Setting</Title>
        {Setting.map((item) => {
          return (
            <MenuLinkIconSidebar
              key={item.id}
              src={item.icon}
              name={item.name}
              path={item.path}
            />
          );
        })}
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
