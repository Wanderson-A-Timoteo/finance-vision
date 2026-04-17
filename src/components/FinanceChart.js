import React from 'react';
import PropTypes from 'prop-types';

import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

// Registo obrigatório dos módulos
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function FinanceChart({ doughnutData, barData }) {
  return (
    <div className="charts-container">
      {/* componentes <Doughnut /> e <Bar />  */}
      <h2>Gráficos Financeiros</h2>
    </div>
  );
}

FinanceChart.propTypes = {
  doughnutData: PropTypes.object,
  barData: PropTypes.object
};

export default FinanceChart;
