import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend } from '@syncfusion/ej2-react-charts';

import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/customData';
import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Area = () => {
  const {currentMode} = useStateContext();
  return (
    <div className=' bg-main-bg dark:bg-main-dark-bg'>
      <div className='m-4 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category="Chart" title="Inflation Rate in Perchantage" />
        <div className='w-full'>
          <ChartComponent
            id='area-chart'
            height='420px'
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            className={'rounded-2xl'}
            background={currentMode === 'Dark' ? '#33373' : '#fff'}
          >
            <Inject services={[SplineAreaSeries, DateTime, Legend]} />
            <SeriesCollectionDirective>
              {areaCustomSeries.map((item, index) =>
                <SeriesDirective key={index} {...item} />
              )}
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </div>
  )
}

export default Area