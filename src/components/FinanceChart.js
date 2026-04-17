import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function FinanceChart({ totaisPorCategoria, totalEntradas, totalSaidas }) {
  // Lógica do Gráfico de Rosca
  const labelsDoughnut = Object.keys(totaisPorCategoria);
  const valoresDoughnut = Object.values(totaisPorCategoria);

  const doughnutData = {
    labels: labelsDoughnut,
    datasets: [
      {
        data: valoresDoughnut,
        backgroundColor: [
          '#ff4b8b',
          '#00d2ff',
          '#3b82f6',
          '#f59e0b',
          '#8b5cf6'
        ],
        borderWidth: 0,
      },
    ],
  };

  // Lógica Gráfico de Barras
  const barData = {
    labels: ['Balanço do Mês'],
    datasets: [
      {
        label: 'Entradas',
        data: [totalEntradas],
        backgroundColor: '#00d2ff',
      },
      {
        label: 'Saídas',
        data: [totalSaidas],
        backgroundColor: '#ff4b8b',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#f8fafc' }
      }
    },
    scales: {
      y: { display: false },
      x: { display: false }
    }
  };

  return (
    <div style={{ display: 'flex', gap: '20px', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Gráfico de Rosca */}
      <div style={{ width: '50%', height: '200px' }}>
        <h4 style={{ textAlign: 'center', margin: '0 0 10px 0', color: '#94a3b8' }}>Despesas</h4>
        {valoresDoughnut.length > 0 ? (
          <Doughnut data={doughnutData} options={{...chartOptions, maintainAspectRatio: false}} />
        ) : (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
            Sem dados
          </div>
        )}
      </div>

      {/* Gráfico de Barras */}
      <div style={{ width: '50%', height: '200px' }}>
        <h4 style={{ textAlign: 'center', margin: '0 0 10px 0', color: '#94a3b8' }}>Entradas vs Saídas</h4>
        <Bar data={barData} options={chartOptions} />
      </div>

    </div>
  );
}

FinanceChart.propTypes = {
  totaisPorCategoria: PropTypes.object.isRequired,
  totalEntradas: PropTypes.number.isRequired,
  totalSaidas: PropTypes.number.isRequired
};

export default FinanceChart;
