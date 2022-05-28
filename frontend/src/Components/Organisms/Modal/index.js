import React from 'react'
import { ButtonIcon } from '../../Molecules'
import { close_icon } from '../../../Assets'
import {
    ModalContainer,
    PopupModalWrapper,
    Bg,
    TopWrapper,
    BottomWrapper
} from './ElementsModal'

function Modal() {
    return (
        <ModalContainer>
            <PopupModalWrapper>
                <TopWrapper>
                    <ButtonIcon src={close_icon} />                        <BottomWrapper ></BottomWrapper>
                </TopWrapper>
                <BottomWrapper>

                </BottomWrapper>
            </PopupModalWrapper>
            <Bg />
        </ModalContainer>
    )
}

export default Modal