import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Statistics } from '../../common/types';
import { useSortTable } from '../../hooks/useSortTable';
import { getDate } from '../../common/utils/getDate';

import style from './StatisticsTable.module.scss';

interface RowProps {
  statistics: Statistics;
}

const Row = ({ statistics }: RowProps) => {
  const { playerScore, bankerScore, betsAmount, reward, timestamp } = statistics;
  const date = getDate(timestamp);

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

  const { getSortByKey, sortKey, isSortAscending, sortedData } = useSortTable(tableData);

  const defineClassName = (key: keyof Statistics) => {
    if (key !== sortKey) {
      return '';
    }
    return isSortAscending ? style.ascending : style.descending;
  };

  const rowsView = sortedData.map((statistics) => (
    <Row statistics={statistics} key={statistics.timestamp} />
  ));

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th
            className={defineClassName('playerScore')}
            onClick={() => getSortByKey('playerScore')}
          >
            player
          </th>
          <th
            className={defineClassName('bankerScore')}
            onClick={() => getSortByKey('bankerScore')}
          >
            banker
          </th>
          <th className={defineClassName('betsAmount')} onClick={() => getSortByKey('betsAmount')}>
            bet
          </th>
          <th className={defineClassName('reward')} onClick={() => getSortByKey('reward')}>
            reward
          </th>
          <th className={defineClassName('timestamp')} onClick={() => getSortByKey('timestamp')}>
            date
          </th>
        </tr>
      </thead>
      <tbody>{rowsView}</tbody>
    </table>
  );
});
