import React from 'react';
import { Logo, Title, SubTitle } from '../../Atoms';
import { LogoWrapper } from './ElementsLogoSidebar';
import {TextWrapper} from './ElementsLogoSidebar'

function index({ src }) {
  return (
    <LogoWrapper>
      <Logo src={src} />
      <TextWrapper>
        <Title text={'onlab'} />
        <SubTitle text={'Admin Dashboard'} />
      </TextWrapper>
    </LogoWrapper>
  );
}

export default index;
