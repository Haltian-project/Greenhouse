const exampleData = {
  insideTemperature: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Inside Temperature',
        data: [20, 21, 22, 23, 24, 25, 26],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  },
  insideHumidity: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Inside Humidity',
        data: [60, 65, 70, 75, 80, 85, 90],
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.1,
      },
    ],
  },
  co2: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'CO2',
        data: [400, 410, 420, 430, 440, 450, 460],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  },
  insideAirPressure: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Air Pressure',
        data: [1010, 1012, 1014, 1016, 1018, 1020, 1022],
        fill: false,
        borderColor: 'rgba(255, 159, 64, 1)',
        tension: 0.1,
      },
    ],
  },
  light: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Light',
        data: [200, 210, 220, 230, 240, 250, 260],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  },
  lightIntensity: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Light Intensity',
        data: [5000, 5500, 6000, 6500, 7000, 7500, 8000],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
      },
    ],
  },
};

export default exampleData;