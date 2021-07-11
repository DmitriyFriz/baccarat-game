import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Statistics } from '../../common/types';

import style from './StatisticsTable.module.scss';

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

interface RowProps {
  statistics: Statistics;
}

const Row = ({ statistics }: RowProps) => {
  const { playerScore, bankerScore, betsAmount, reward, timestamp } = statistics;
  const date = new Date(timestamp).toLocaleString(undefined, dateOptions);

  return (
    <tr>
      <td data-label="player">{playerScore}</td>
      <td data-label="banker">{bankerScore}</td>
      <td data-label="bet">{betsAmount}</td>
      <td data-label="reward">{reward}</td>
      <td data-label="date">{date}</td>
    </tr>
  );
};

export const StatisticsTable = observer(() => {
  const statisticsStore = useStore('statisticsStore');
  const tableData = toJS(statisticsStore.statistics).reverse();

  const rowsView = tableData.map((statistics) => (
    <Row statistics={statistics} key={statistics.timestamp} />
  ));

  return (
    <table className={style.table}>
      <caption>Statistics</caption>
      <thead>
        <tr>
          <th>player</th>
          <th>banker</th>
          <th>bet</th>
          <th>reward</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{rowsView}</tbody>
    </table>
  );
});
