import React from 'react';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/Header/Navbar';
import { QuestionBodyImage } from '../../assets';
import DetailCard from './DetailCard';

const ExamDetails = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${QuestionBodyImage.default})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Navbar />
      <div className='container p-5'>
        <DetailCard />
      </div>
      <Footer />
    </div>
  );
};

export default ExamDetails;
