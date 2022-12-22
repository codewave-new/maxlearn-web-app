/**
 * Helper functions
 */
import React from 'react';
import MathJax from 'react-mathjax-preview';
import parse from 'html-react-parser';

export const useQuery = (params) => {
  const data = {};
  params
    .substring(1)
    .split('&')
    .map((val) => {
      if (val) {
        const indi = val.split('=');
        data[indi[0]] = indi[1];
      }
    });
  return data;
};

export const renderText = (text) => {
  const mathtype = <MathJax math={String.raw`${text}`} />;
  const texttype = parse(text);
  console.log('text', text);
  console.log('texttype', texttype);

  let textType = '';

  const loop = (item) => {
    // string.forEach((item) => {
    if (item?.type !== 'math') {
      if (item?.props?.children?.length > 0) {
        return loop(item?.props?.children);
      }
    } else {
      textType = 'math';
    }
    // return null;
    // });
  };

  loop(texttype);

  if (textType !== 'math') {
    return texttype;
  }
  return mathtype;
};
