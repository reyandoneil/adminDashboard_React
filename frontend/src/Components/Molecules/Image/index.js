import React from 'react';
import { Icon } from '../../Atoms';
import { login_icon } from '../../../Assets';
import { ImageWrapper } from './ImageElements';

function Image({ className }) {
  switch (className) {
    case 'login':
      return (
        <ImageWrapper>
          <Icon src={login_icon} className={className} />
        </ImageWrapper>
      );

    default:
      break;
  }
}

export default Image;
