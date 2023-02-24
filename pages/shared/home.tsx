import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentLayout from "./content";
import SidebarLayout from "./sidebar";

const HomeWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100vw;

`;
const HomeLayout = ( ) => {
  const [selectedMenu , setSelectedMenu] = useState();
  return (
  <HomeWrapper>
  <SidebarLayout selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}></SidebarLayout>
  <ContentLayout selectedMenu={selectedMenu}></ContentLayout>
  </HomeWrapper>
  );
};

export default HomeLayout;
