import React from 'react';

const Card = (props) => {
  console.log(props);
  return <section className={`${props.className}`}>{props.children}</section>;
};

export default Card;
