import React from 'react';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';
import ToDoLayout from '../components/Layout/ToDoLayout';

const Todo = () => {
  return (
    <div>
      <Header />
      <ToDoLayout />
      <Footer />
    </div>
  );
};

export default Todo;
