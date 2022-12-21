import React from "react";
import styled from "styled-components";
import quesImage from '../../assets/question/smile.png';

export const SliderComponent=({ value, handleChange, min, max, step }) =>{
  return (
    <Container>
      <Slider
        type="range"
        defaultValue={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
      />
    </Container>
  );
}

export default SliderComponent;
const Container = styled.div`
  display: grid;
  place-items: center;
  margin-left: 10px;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 44px;
  border-radius: 50px;
  margin-top:20%;
  background-image: linear-gradient(to right, #F5F5F5 , #9CDF5C);
  outline: none;
  opacity: 1;
  --webkit-transition: 0.2s;
  transition: opacity 0.2s;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 106px;
    height: 106px;
    border-radius: 50%;
    background-image: url(${quesImage});
    background-repeat:no-repeat;
    cursor: pointer;
    border: none;
  }
  ::-moz-range-thumb {
    width: 106px;
    height: 106px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
`;