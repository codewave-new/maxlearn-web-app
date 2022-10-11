import React from 'react';
import QuestCard from '../Home/Quest/QuestCard';
import { ToDoCalendarIcon, ToDoTimeIcon } from '../../assets';

const ActivityLog = () => {
  return (
    <div className='max__todo-activity-wrapper'>
      <h3>Activity log</h3>
      <div className='scroll-activity'>
        <div className='vl'></div>
        <div className='activity-card'>
          <div className='time d-flex ps-4'>
            <p>
              <ToDoCalendarIcon.default />
              09/10/2022
            </p>
            <p className='ps-3'>
              <ToDoTimeIcon.default />
              10:30am
            </p>
          </div>
          <QuestCard className={'max__activity-quest-card'} />
        </div>

        <div className='activity-card'>
          <div className='time d-flex ps-4'>
            <p>
              <ToDoCalendarIcon.default />
              09/10/2022
            </p>
            <p className='ps-3'>
              <ToDoTimeIcon.default />
              10:30am
            </p>
          </div>
          <QuestCard className={'max__activity-quest-card'} />
        </div>

        <div className='activity-card'>
          <div className='time d-flex ps-4'>
            <p>
              <ToDoCalendarIcon.default />
              09/10/2022
            </p>
            <p className='ps-3'>
              <ToDoTimeIcon.default />
              10:30am
            </p>
          </div>
          <QuestCard className={'max__activity-quest-card'} />
        </div>

        <div className='activity-card'>
          <div className='time d-flex ps-4'>
            <p>
              <ToDoCalendarIcon.default />
              09/10/2022
            </p>
            <p className='ps-3'>
              <ToDoTimeIcon.default />
              10:30am
            </p>
          </div>
          <QuestCard className={'max__activity-quest-card'} />
        </div>

        <div className='activity-card'>
          <div className='time d-flex ps-4'>
            <p>
              <ToDoCalendarIcon.default />
              09/10/2022
            </p>
            <p className='ps-3'>
              <ToDoTimeIcon.default />
              10:30am
            </p>
          </div>
          <QuestCard className={'max__activity-quest-card'} />
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
