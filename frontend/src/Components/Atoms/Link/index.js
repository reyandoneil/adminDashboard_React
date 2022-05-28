import React from 'react';
import { LinkWrapper, Text } from './ElementsLink';

function Links({ name, ss }) {
  return (
    <>
      <LinkWrapper ss={ss}>
        <Text>{name}</Text>
      </LinkWrapper>
    </>
  );
}

export default Links;
