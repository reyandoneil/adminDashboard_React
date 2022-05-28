import React from 'react';
import { Outlet } from 'react-router-dom';
import { useBreakpoints } from '../../Helper';
import {
  DashboardContainer,
  SidebarWrapper,
  HeaderWrapper,
  TopMenuContentWrapper,
  ContentWrapper,
} from './ElementsDashboard';
import { Sidebar } from '../../Components/Organisms';
import { useSelector } from 'react-redux'
import { Modal } from '../../Components/Organisms'

function Dashboard() {
  const breakpoints = useBreakpoints();
  const userReducer = useSelector(state => state.user)
  const isIdle = userReducer.isIdle
  return (
    <DashboardContainer>
      {isIdle && (<Modal />)}
      <HeaderWrapper>
        HeaderWrapper
      </HeaderWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <TopMenuContentWrapper>
        topmenu {breakpoints}
      </TopMenuContentWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </DashboardContainer>
  );
}

export default Dashboard;
