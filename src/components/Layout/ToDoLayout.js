import React from 'react';
import Activities from '../ToDo/Activities';
import ActivityLogo from '../ToDo/ActivityLog';

const ToDoLayout = () => {
  return (
    <div className='container max__todo-wrapper'>
      <div className='row'>
        <div className='col-xl-8 col-md-12'>
          <Activities />
        </div>
        <div className='col-xl-4 col-md-12'>
          <ActivityLogo />
        </div>
      </div>
    </div>
  );
};

export default ToDoLayout;
