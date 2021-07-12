interface ChartDataItem {
  value: number;
  date: string;
}

export const getDataConfig = (chartData: ChartDataItem[]) => {
  const labels = chartData.map(({ date }) => date);
  const data = chartData.map(({ value }) => value);
  const colours = chartData.map(({ value }) => (value < 0 ? 'red' : 'green'));

  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colours,
      },
    ],
  };
};

export const optionsConfig = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      max: 100,
      min: -100,
    },
    x: {
      display: false,
      reverse: true,
    },
  },
};
