import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/customData';
import Header from '../components/Header';


const Calendar = () => {
  return (
    <div className='bg-main-bg dark:bg-main-dark-bg'>
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header category="App" title="Calender" />
        <ScheduleComponent
          eventSettings={{
            dataSource: scheduleData
          }}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
      </div>
    </div>
  )
}

export default Calendar