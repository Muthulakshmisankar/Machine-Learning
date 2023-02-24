import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { syllabus } from "./staticContent";

export interface SelectedProps {
  selectedMenu: boolean;
}

const SideBarWrapper = styled.div`
  background: #f9f9f9;
  height: 90vh;
  overflow: auto;
  flex: 1 1 30%;
`;
const SidebarTitle = styled.p`
  font-size: 2rem;
  padding: 2rem;
  font-weight: 600;
  display: flex;
  margin: 0rem;
  align-items: center;
  justify-content: center;
`;
const SidebarContentWrapper = styled.ul`
  list-style: none;
  cursor: pointer;
  padding: 0;
`;
const SidebarContentDesc = styled.li<SelectedProps>`
  font-size: 2rem;
  padding: 0.5rem;

  margin: 0.5rem;
  border-radius: 0.5rem;

  &.heading {
    background: #bbb;
  }
  &:hover {
    background: #bbb;
  }
  ${(props) =>
    props.selectedMenu &&
    css`
      background: #bbb;
    `}
`;
const SidebarSubMenu = styled.p`
  padding: 0 2rem;
  font-size: 1.5rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  &:hover {
    background: #bbb;
  }
`;
const SidebarLayout = ({ selectedMenu, setSelectedMenu }: any) => {
  return (
    <SideBarWrapper>
      <SidebarTitle>Content</SidebarTitle>
      <SidebarContentWrapper>
        {syllabus.map((item: any, i: number) => {
          return (
            <div key={'wraper_'+ i}>
              <SidebarContentDesc
                selectedMenu={selectedMenu == item.id}
                key={i}
                onClick={() => {
                  setSelectedMenu(item?.id);
                }}
              >
                {item?.menu}
              </SidebarContentDesc>
              {item?.submenu?.map((subMenu: any, si: number) => {
                return (
                    <SidebarSubMenu
                      key={si}
                      onClick={() => {
                        setSelectedMenu(subMenu?.sid);
                      }}
                    >
                      {subMenu.sname}
                    </SidebarSubMenu>
              
                );
              })}
            </div>
          );
        })}
      </SidebarContentWrapper>
    </SideBarWrapper>
  );
};

export default SidebarLayout;
