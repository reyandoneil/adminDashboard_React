import { ButtonIcon } from '../../Molecules';
import { close_icon } from '../../../Assets';
import { useSelector, useDispatch } from 'react-redux';
import {
  ModalContainer,
  PopupModalWrapper,
  Bg,
  TopWrapper,
  BottomWrapper,
} from './ElementsModal';
import { setIsIdle } from '../../../Store/Action/UserAction';

function Modal() {
  const screenSizeReducer = useSelector((state) => state.screenSize);
  const ss = screenSizeReducer;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setIsIdle(false));
  };
  return (
    <ModalContainer>
      <PopupModalWrapper ss={ss}>
        <TopWrapper>
          <ButtonIcon src={close_icon} onClick={closeModal} />
          <BottomWrapper></BottomWrapper>
        </TopWrapper>
        <BottomWrapper></BottomWrapper>
      </PopupModalWrapper>
      <Bg />
    </ModalContainer>
  );
}

export default Modal;
