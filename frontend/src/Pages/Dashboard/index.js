import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  DashboardContainer,
  SidebarWrapper,
  HeaderWrapper,
  TopMenuContentWrapper,
  ContentWrapper,
} from './ElementsDashboard';
import { Sidebar } from '../../Components/Organisms';
import { Modal } from '../../Components/Organisms';

function Dashboard() {
  const screenSizeReducer = useSelector((state) => state.screenSize);
  const ss = screenSizeReducer.ss;

  const userReducer = useSelector((state) => state.user);
  const isIdle = userReducer.isIdle;
  return (
    <DashboardContainer ss={ss}>
      {isIdle && <Modal />}
      <HeaderWrapper>HeaderWrapper</HeaderWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <TopMenuContentWrapper>topmenu {ss}</TopMenuContentWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </DashboardContainer>
  );
}

export default Dashboard;
