import { makeAutoObservable } from 'mobx';
import { RoundStatistics, Statistics } from '../common/types';
import { getDate } from '../common/utils/getDate';
import { autoSaveStore } from './autoSave';

export class StatisticsStore {
  statistics: Statistics[] = [];

  constructor() {
    makeAutoObservable(this);
    autoSaveStore(this, 'statistics');
  }

  addRoundStatistics(roundStatistics: RoundStatistics) {
    this.statistics.push({ ...roundStatistics, timestamp: Date.now() });
  }

  get chartData() {
    return this.statistics.map(({ reward, betsAmount, timestamp }) => {
      const value = reward - betsAmount;
      const date = getDate(timestamp);
      return { value, date };
    });
  }
}
