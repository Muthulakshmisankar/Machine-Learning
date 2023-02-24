import React from 'react';
export interface TextProps  {
    text : string;
    keyPrefix : string;
}
const TextToParagraphs = ({text, keyPrefix} : TextProps) => {
  const paragraphs = text.split('\n');
  return (
    <>
      {paragraphs.map((paragraph : string, index : number) => {
        return <p key={`${keyPrefix}-${index}`}>{paragraph}</p>;
      })}
    </>
  );
};

export default TextToParagraphs;
