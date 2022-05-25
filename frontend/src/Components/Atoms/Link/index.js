import React from 'react';
import { Link } from 'react-router-dom';
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
