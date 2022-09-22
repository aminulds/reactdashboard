import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import {kanbanData, kanbanGrid} from '../data/customData';

import Header from '../components/Header';

const Kanban = () => {
  return (
    <div className='m-2 md:m-5 mt-24 p-2 md:p-6 bg-white rounded-3xl'>
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{
          contentField: 'Summary',
          headerField: 'Id'
        }}
        keyField='Status'
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) =>
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban