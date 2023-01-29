import React, { useEffect } from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div `
background: #bbb;
height: 100vh;
overflow: auto;
flex: 1 1 20%;
`;
const SidebarLayout = ( ) => {

  return (
  <SideBarWrapper>Sidebar Layout Works</SideBarWrapper>
  );
};

export default SidebarLayout;
