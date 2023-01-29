import React, { useEffect } from "react";
import styled from "styled-components";
import ContentLayout from "./content";
import SidebarLayout from "./sidebar";

const HomeWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100vw;

`;
const HomeLayout = ( ) => {

  return (
  <HomeWrapper>
  <SidebarLayout></SidebarLayout>
  <ContentLayout></ContentLayout>
  </HomeWrapper>
  );
};

export default HomeLayout;
