// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Time = styled.div`
  font-size: 18px;
  color: #777;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Hi Rebecca</Title>
      <Time>11:13 PM Monday, 6 February, 2023</Time>
    </HeaderContainer>
  );
};

export default Header;
