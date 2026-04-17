import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { getData, storeData } from './helper/LocalStorage';
import FinanceForm from './components/FinanceForm';
import FinanceChart from './components/FinanceChart';

/**
 * Carrega o estado inicial do LocalStorage
 */
function carregarEstadoInicial() {
  return getData('finance_data') || [];
}

function App() {
  // Lista de todas as transações
  const [transacoes, setTransacoes] = useState(carregarEstadoInicial());

  // Para persistência de dados sempre que a lista mudar 
  useEffect(() => {
    storeData('finance_data', transacoes);
  }, [transacoes]);

  /**
   * Adiciona uma nova transação
   */
  function adicionarTransacao(novaTransacao) {
    const registro = {
      ...novaTransacao,
      id: uuidv4(),
      dataCriacao: new Date().toLocaleDateString()
    };
    setTransacoes([...transacoes, registro]);
  }

  /**
   * Remove uma transação pelo ID
   */
  function eliminarTransacao(id) {
    const listaFiltrada = transacoes.filter((item) => item.id !== id);
    setTransacoes(listaFiltrada);
  }

  /**
   * Cálculos em Tempo Real 
   */
  const totalEntradas = transacoes
    .filter((t) => t.tipo === 'Entrada')
    .reduce((acc, t) => acc + t.valor, 0);

  const totalSaidas = transacoes
    .filter((t) => t.tipo === 'Saída')
    .reduce((acc, t) => acc + t.valor, 0);

  const saldoTotal = totalEntradas - totalSaidas;

  // Agrupa os gastos de Saídas por categoria para o gráfico de Rosca
  const totaisPorCategoria = transacoes
    .filter((t) => t.tipo === 'Saída')
    .reduce((acc, t) => {
      // Se a categoria ainda não existe no objeto, inicia com 0, depois soma o valor
      acc[t.categoria] = (acc[t.categoria] || 0) + t.valor;
      return acc;
    }, {});

  return (
    <div className="App">
      <header className="header">
        <h1>
          <img 
            src={process.env.PUBLIC_URL + '/logo-grafico.png'} 
            alt="FinanceVision Logo" 
            style={{ width: '40px', marginRight: '10px', verticalAlign: 'middle' }} 
          />
          FinanceVision Dashboard
        </h1>
      </header>

      <main className="main-content">
        {/* Cards de Totais  */}
        <section className="summary-container">
          <div className="summary-card total">
            <span>Saldo Total</span>
            <h2>R$ {saldoTotal.toFixed(2)}</h2>
          </div>
          <div className="summary-card income">
            <span>Entradas</span>
            <h2 className="text-green">R$ {totalEntradas.toFixed(2)}</h2>
          </div>
          <div className="summary-card expense">
            <span>Saídas</span>
            <h2 className="text-red">R$ {totalSaidas.toFixed(2)}</h2>
          </div>
        </section>

        <section className="dashboard-grid">
          {/* Coluna do Formulário */}
          <div className="form-column">
            <FinanceForm onAddTransaction={adicionarTransacao} />
          </div>

          {/* Gráficos */}
          <div className="chart-column">
             <FinanceChart 
               totaisPorCategoria={totaisPorCategoria}
               totalEntradas={totalEntradas}
               totalSaidas={totalSaidas}
             />
          </div>
        </section>

        {/* Lista de Transações */}
        <section className="history-container">
          <h3>Histórico Recente</h3>
          <div className="transactions-list">
            {transacoes.length > 0 ? (
              transacoes.map((t) => (
                <div key={t.id} className={`transaction-item ${t.tipo.toLowerCase()}`}>
                  <span>{t.descricao}</span>
                  <strong>{t.tipo === 'Saída' ? '-' : ''} R$ {t.valor.toFixed(2)}</strong>
                  <button onClick={() => eliminarTransacao(t.id)}>x</button>
                </div>
              ))
            ) : (
              <p className="empty-msg">Nenhuma transação registada.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
