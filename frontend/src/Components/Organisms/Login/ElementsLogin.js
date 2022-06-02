import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'leftContent rightContent'
    'leftContent rightContent';
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: leftContent;
  background-color: #f3d083;
  padding: 30px;
`;

export const RightContent = styled.div`
  grid-area: rightContent;
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-auto-flow: row;
  grid-template-areas:
    'leftContent center rightContent'
    'leftContent center rightContent';
  padding: 30px;
`;

export const Left = styled.div`
  grid-area: leftContent;
`;
export const Right = styled.div`
  grid-area: rightContent;
`;

export const InputFormWrapper = styled.div`
  grid-area: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
`;
