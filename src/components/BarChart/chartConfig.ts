interface ChartDataItem {
  value: number;
  date: string;
}

export const getDataConfig = (chartData: ChartDataItem[]) => {
  const colours = chartData.map(({ value }) => (value < 0 ? 'red' : 'green'));

  return {
    datasets: [
      {
        data: chartData,
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
  parsing: {
    xAxisKey: 'date',
    yAxisKey: 'value',
  },
  scales: {
    yAxis: {
      max: 100,
      min: -100,
    },
  },
};
