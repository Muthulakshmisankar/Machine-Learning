import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { contentText } from "./staticContent";
// import ReactQuill from 'react-quill';
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

"use client";
import 'react-quill/dist/quill.snow.css';

const ContentWrapper = styled.div`
  height: 90vh;
  flex: 1 1 80%;
  overflow: auto;
  background: #fff;
`;
const ContentTitle = styled.h1`
  font-size: 3rem;
  padding: 3rem;
  border-bottom: 1px solid #bbb;
`;
const ContentDesc = styled.p`
  font-size: 2rem;
  padding: 1rem 6rem;
  line-height: 2.5rem;
`;
const ContentLayout = ({ selectedMenu }: any) => {
  const selectedMenuItem =contentText.filter((item)=> item.cid === selectedMenu) 
  console.log('selectedMenuItem', selectedMenuItem)
  const [text, setText] = useState('');

  const handleChange = (value : string) => {
    setText(value);
  };

  return (
    <ContentWrapper>
      {selectedMenuItem?.map((subMenu, si) => {
        return (
          <>
            <ContentTitle>{subMenu.title}</ContentTitle>
            <ContentDesc >

            <div>
             <ReactQuill theme="snow" value={text} onChange={handleChange} />;

      {/* <Quill value={text} onChange={handleChange} /> */}
      <div dangerouslySetInnerHTML={{__html: text}}>
      
      </div>
    </div>
            </ContentDesc>
          </>
        );
      })}
    </ContentWrapper>
  );
};

export default ContentLayout;
