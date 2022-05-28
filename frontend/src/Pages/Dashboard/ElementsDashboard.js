import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: grid;
  height: 100vh;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
        grid-template-columns: 80px 1fr 1fr 1fr;
      `;
    } else {
      return `
        grid-template-columns: 200px 1fr 1fr 1fr;
      `;
    }
  }}
  grid-template-rows: 50px 70px 1fr;
  grid-template-areas:
    'sidebar header header header'
    'sidebar topmenu topmenu topmenu'
    'sidebar content content content';
`;

export const SidebarWrapper = styled.div`
  grid-area: sidebar;
  padding: 20px;
  background-color: white;
`;

export const HeaderWrapper = styled.div`
  grid-area: header;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: white;
`;

export const TopMenuContentWrapper = styled.div`
  grid-area: topmenu;
`;

export const ContentWrapper = styled.div`
  grid-area: content;
  padding: 20px;
`;
