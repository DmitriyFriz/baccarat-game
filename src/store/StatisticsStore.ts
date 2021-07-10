import { makeAutoObservable } from 'mobx';
import { RoundStatistics } from '../common/types';
import { autoSave } from './autoSave';

export class StatisticsStore {
  private statistics: RoundStatistics[] = [];

  constructor() {
    makeAutoObservable(this);
    autoSave(this, 'statistics');
  }

  addRoundStatistics(roundStatistics: RoundStatistics) {
    this.statistics.push(roundStatistics);
  }
}
