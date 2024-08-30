// chartSetup.js
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register components
Chart.register(
  CategoryScale, // For x-axis
  LinearScale, // For y-axis
  BarElement, // For bar charts
  PointElement, // For line charts
  LineElement, // For line charts
  ArcElement, // For pie and doughnut charts
  Title, // For chart title
  Tooltip, // For tooltips
  Legend // For legend
);
