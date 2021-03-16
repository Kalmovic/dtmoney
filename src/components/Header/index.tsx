import React from 'react';
import logoImg from '../../assets/logo_title.svg';
import { Container, Content } from './styles';

const Header: React.FC = () => {
  return <Container>
      <Content>
      <img src={logoImg} alt="dt money"/>
      <button type="button">New transaction</button>
      </Content>
     
  </Container>;
}

export default Header;