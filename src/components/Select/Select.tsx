import React from 'react';
import { MinScore } from '../../common/types';

interface SelectProps<T> {
  data: ReadonlyArray<T> | Array<T>;
  onChange: (value: string) => void;
  currentValue: T;
  className: string;
}

export const Select = <T extends MinScore | string>({
  data,
  onChange,
  currentValue,
  className,
}: SelectProps<T>) => {
  const optionsView = data.map((value) => (
    <option value={value} key={value}>
      {value}
    </option>
  ));

  return (
    <select className={className} value={currentValue} onChange={(e) => onChange(e.target.value)}>
      {optionsView}
    </select>
  );
};
