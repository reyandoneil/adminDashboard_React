import React from 'react';
import { useBreakpoints } from '../../Helper';
import {
  DashboardContainer,
  SidebarWrapper,
  HeaderWrapper,
  TopMenuContentWrapper,
  ContentWrapper,
} from './ElementsDashboard';
import { Sidebar } from '../../Components/Organisms';

function Dashboard() {
  const breakpoints = useBreakpoints();
  return (
    <DashboardContainer>
      <HeaderWrapper>HeaderWrapper</HeaderWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <TopMenuContentWrapper>topmenu</TopMenuContentWrapper>
      <ContentWrapper>ContentWrapper {breakpoints}</ContentWrapper>
    </DashboardContainer>
  );
}

export default Dashboard;
