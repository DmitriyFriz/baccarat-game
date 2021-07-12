import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Bar } from 'react-chartjs-2';
import { useStore } from '../../store';
import { getDataConfig, optionsConfig } from './chartConfig';

import style from './BarChart.module.scss';

export const BarChart = observer(() => {
  const statisticsStore = useStore('statisticsStore');
  const chartData = toJS(statisticsStore.chartData);

  return (
    <div className={style.container}>
      <div className={style.chartWrapper}>
        <Bar data={getDataConfig(chartData)} options={optionsConfig} type="bar" />
      </div>
    </div>
  );
});
