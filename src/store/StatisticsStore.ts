import { makeAutoObservable } from 'mobx';
import { RoundStatistics, Statistics } from '../common/types';
import { autoSave } from './autoSave';

export class StatisticsStore {
  statistics: Statistics[] = [];

  constructor() {
    makeAutoObservable(this);
    autoSave(this, 'statistics');
  }

  addRoundStatistics(roundStatistics: RoundStatistics) {
    this.statistics.push({ ...roundStatistics, timestamp: Date.now() });
  }
}
