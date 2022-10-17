import React from 'react';
import ProfileLayout from '../components/Layout/ProfileLayout';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

const profile = () => {
  return (
    <div>
        <Header/>
        <ProfileLayout/>
        <Footer/>
    </div>
  )
}

export default profile