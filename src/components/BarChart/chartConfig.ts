interface ChartDataItem {
  value: number;
  date: string;
}

const zoomFactor = 1.1;

export const getChartConfig = (chartData: ChartDataItem[]) => {
  const labels = chartData.map(({ date }) => date);
  const data = chartData.map(({ value }) => value);
  const colours = chartData.map(({ value }) => (value < 0 ? '#ff6347' : '#7ae67a'));

  const minZoom = Math.ceil(Math.min(...data) * zoomFactor);
  const maxZoom = Math.ceil(Math.max(...data) * zoomFactor);

  return {
    dataConfig: getDataConfig(labels, data, colours),
    optionsConfig: getOptionsConfig(minZoom, maxZoom),
  };
};

const getDataConfig = (labels: string[], data: number[], colours: string[]) => {
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

const getOptionsConfig = (minZoom: number, maxZoom: number) => ({
  plugins: {
    legend: {
      display: false,
    },
    zoom: {
      pan: {
        enabled: true,
      },

      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: 'xy',
      },

      limits: {
        y: { min: minZoom, max: maxZoom },
      },
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
  pan: {
    enabled: true,
    mode: 'xy',
    speed: 1,
    threshold: 1,
  },
});
