import React from 'react';
import { Icon } from '../../Atoms';

import { ButtonIconWrapper } from './ElementsButtonIcon';

function ButtonIcon({ src, onClick }) {
  return (
    <ButtonIconWrapper onClick={onClick}>
      <Icon src={src} />
    </ButtonIconWrapper>
  );
}

export default ButtonIcon;
