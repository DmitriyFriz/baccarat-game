import React, { useRef } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { useStore } from '../../store';
import { getChartConfig } from './chartConfig';
import { Message } from '../Message';
import { StatisticsMessage } from '../../common/statisticsData';

import style from './BarChart.module.scss';

Chart.register(zoomPlugin);

interface Zoom {
  resetZoom: () => void;
}

export const BarChart = observer(() => {
  const statisticsStore = useStore('statisticsStore');
  const chartData = toJS(statisticsStore.chartData);

  if (chartData.length === 0) {
    return <Message message={StatisticsMessage.Empty} />;
  }

  const chartRef = useRef<Zoom>(null);
  const { dataConfig, optionsConfig } = getChartConfig(chartData);

  return (
    <>
      <p className={style.label}>profit per round</p>
      <div className={style.chartWrapper}>
        <Bar ref={chartRef} data={dataConfig} options={optionsConfig} type="bar" />
      </div>
      <button
        type="button"
        className="button"
        onClick={() => {
          if (chartRef.current !== null) {
            chartRef.current.resetZoom();
          }
        }}
      >
        reset zoom
      </button>
    </>
  );
});
