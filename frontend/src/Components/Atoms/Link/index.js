import React from 'react';
import { LinkWrapper, Text } from './ElementsLink';

function Links({ name }) {
  return (
    <>
      <LinkWrapper>
        <Text>{name}</Text>
      </LinkWrapper>
    </>
  );
}

export default Links;
