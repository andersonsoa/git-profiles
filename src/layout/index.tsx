import React from 'react';
import { Container } from './styles';

interface Props {
  children: any;
}

export default ({ children }: Props) => {
  return <Container>{children}</Container>;
};
