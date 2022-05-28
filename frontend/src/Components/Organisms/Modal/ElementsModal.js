import styled from "styled-components";

export const ModalContainer = styled.div` 
    height: 100vh ;
    width: 100% ;
    position:fixed ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
`;

export const PopupModalWrapper = styled.div` 
    height:600px ;
    width: 600px ;
    background-color: white ;
    z-index: 9999 ;
    position: absolute ;
`;

export const Bg = styled.div`
    height: 100vh ;
    width: 100vw;
    background-color: black ;
    opacity: 40% ;
`;

export const TopWrapper = styled.div`
    max-width:100% ;
    height: 50px ;
    padding: 10px ;
    display: flex ;
    justify-content: flex-end ;
`;

export const BottomWrapper = styled.div`

`;