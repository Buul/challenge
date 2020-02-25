import React, { ReactNode } from 'react';
import { Container } from './Container';

type Props = {
  children: ReactNode,
};

const Header: React.FC<Props> = ({ children }) => <Container>{children}</Container>;

export default Header;
