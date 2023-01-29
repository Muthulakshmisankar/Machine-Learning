import React, { useEffect } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div `
width: 100%;
display:flex;
height: 10vh;
align-items: center;
background: #000;
`
const LogoText = styled.p`
font-size: 2.5rem;
font-weight: 500;
color: #fff;    
margin: 1rem;
`
const HeaderLayout = ( ) => {

  return (
  <HeaderWrapper><LogoText>NueroLearn</LogoText></HeaderWrapper>
  );
};

export default HeaderLayout;
