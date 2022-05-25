import React from 'react';
import { LogoSrc } from '../../../Assets/index';
import { LogoSidebar, MenuLinkIconSidebar } from '../../Molecules';
import {
  MenuSidbar,
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
        {MenuSidbar.map((link) => {
          return (
            <MenuLinkIconSidebar
              key={link.id}
              src={link.icon}
              name={link.name}
            />
          );
        })}
        <Title>Master</Title>
        {Master.map((link) => {
          return (
            <MenuLinkIconSidebar
              key={link.id}
              src={link.icon}
              name={link.name}
            />
          );
        })}
        <Title>Setting</Title>
        {Setting.map((link) => {
          return (
            <MenuLinkIconSidebar
              key={link.id}
              src={link.icon}
              name={link.name}
            />
          );
        })}
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
