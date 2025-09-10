import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DashboardChartOne: React.FC = () => {
  // Data for the chart
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const salesData2024 = [40, 68, 86, 74, 56, 60, 87];
  const salesData2025 = [65, 78, 66, 44, 56, 67, 75];

  const chartData = {
    labels: months,
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
    datasets: [
      {
        label: '2024',
        data: salesData2024,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#ffffff',
        tension: 0.4,
      },
      {
        label: '2025',
        data: salesData2025,
        borderColor: '#4c51bf',
        backgroundColor: '#4c51bf',
        pointBackgroundColor: '#4c51bf',
        pointBorderColor: '#4c51bf',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sales Value',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false, 
          maxRotation: 0,
          padding: 5,
          color: '#ffffff',
        },
      },
      y: {
        grid: {
          color: '#ffffff',
          lineWidth: 0.5,
        },
        beginAtZero: false,
        min: 40,
        max: 90,
        ticks: {
          padding: 10,
          color: '#ffffff',
          stepSize: 5,
        },
      },
    },
  };

  return (
    <div className='chart-one'>      
      <div className='chart-one-content w-full h-full rounded-sm p-5'>
        <h2>OVERVIEW</h2>
        <p className=''>Sales value</p>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DashboardChartOne