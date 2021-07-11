import { useState, useMemo } from 'react';

export const useSortTable = <T extends object>(
  data: T[],
  startSortAscending: boolean = true,
  startKey: null | keyof T = null
) => {
  const [isSortAscending, setIsSortAscending] = useState(startSortAscending);
  const [sortKey, setSortKey] = useState<null | keyof T>(startKey);

  const getSortByKey = (key: keyof T) => {
    if (key === sortKey) {
      setIsSortAscending((state) => !state);
    } else {
      setIsSortAscending(startSortAscending);
      setSortKey(key);
    }
  };

  const sortedData = useMemo(() => {
    const copyData = [...data];
    if (sortKey !== null) {
      copyData.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return isSortAscending ? -1 : 1;
        }

        if (a[sortKey] > b[sortKey]) {
          return isSortAscending ? 1 : -1;
        }

        return 0;
      });
    }

    return copyData;
  }, [data, sortKey, isSortAscending]);

  return { getSortByKey, sortKey, isSortAscending, sortedData };
};
