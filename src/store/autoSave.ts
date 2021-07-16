import { autorun, set, toJS } from 'mobx';

export const autoSaveStore = <Store extends { [K: string]: any }>(_this: Store, name: string) => {
  const storedJson = localStorage.getItem(name);

  if (storedJson) {
    set(_this, JSON.parse(storedJson));
  }

  return autorun(() => {
    const value = toJS(_this);
    localStorage.setItem(name, JSON.stringify(value));
  });
};

export const autoSaveKeys = <Store extends { [K: string]: any }>(
  _this: Store,
  name: string,
  keys: Array<keyof Store>
) => {
  return keys.map((key) => {
    const computedName = `${name}_${key}`;

    const valueByKeyJson = localStorage.getItem(computedName);

    if (valueByKeyJson) {
      set(_this, key, JSON.parse(valueByKeyJson));
    }

    return autorun(() => {
      const value = toJS(_this[key]);
      localStorage.setItem(computedName, JSON.stringify(value));
    });
  });
};
