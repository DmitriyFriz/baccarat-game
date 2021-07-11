const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

export const getDate = (timestamp: number) =>
  new Date(timestamp).toLocaleString(undefined, dateOptions);
