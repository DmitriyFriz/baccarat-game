import React, { useState } from 'react';

// style
import s from './BettingPanel.module.scss';

export const BettingPanel = () => {
  const [value, setValue] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={s.container}>
      <label htmlFor="1">
        <input
          className={s.radio}
          id="1"
          type="radio"
          name="bet"
          value="1"
          checked={value === '1'}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className={s.bet}>select 1</div>
      </label>
      <label htmlFor="2">
        <input
          className={s.radio}
          id="2"
          type="radio"
          name="bet"
          value="2"
          checked={value === '2'}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className={s.bet}>select 2</div>
      </label>
    </div>
  );
};
