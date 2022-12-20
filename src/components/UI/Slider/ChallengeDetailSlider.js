import React, { useCallback, useState } from 'react';
import Slider from 'react-slick';

const ChallengeDetailSlider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderChange = useCallback((oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 800,
    autoplay: true,
    vertical: true,
    draggable: true,
    slidesToShow: 1,
    verticalSwiping: true,
    swipe: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    slidesToScroll: 1,
    dotClass: 'slick-dots custom-dots',
    beforeChange: sliderChange,
    appendDots: (dots) => {
      return (
        <ul className='slick-dots'>
          {dots.map((item, index) => {
            return <li key={index}>{item.props.children}</li>;
          })}
        </ul>
      );
    },
    customPaging: (index) => {
      return (
        <ul>
          <li className={index === currentSlide ? 'active-slider' : ''}></li>
        </ul>
      );
    },
  };
  return (
    <div className='max-width'>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default ChallengeDetailSlider;
