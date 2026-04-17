import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { getData, storeData } from './helper/LocalStorage';
import FinanceForm from './components/FinanceForm';
import FinanceChart from './components/FinanceChart';
import TransactionCard from './components/TransactionCard'; // 1. IMPORTAMOS O CARD AQUI

function carregarEstadoInicial() {
  return getData('finance_data') || [];
}

function App() {
  const [transacoes, setTransacoes] = useState(carregarEstadoInicial());
  const [filtro, setFiltro] = useState('Todas'); // 2. NOVO ESTADO PARA O FILTRO

  useEffect(() => {
    storeData('finance_data', transacoes);
  }, [transacoes]);

  function adicionarTransacao(novaTransacao) {
    const registro = {
      ...novaTransacao,
      id: uuidv4(),
      dataCriacao: new Date().toLocaleDateString()
    };
    setTransacoes([...transacoes, registro]);
  }

  function eliminarTransacao(id) {
    const listaFiltrada = transacoes.filter((item) => item.id !== id);
    setTransacoes(listaFiltrada);
  }

  // --- Cálculos ---
  const totalEntradas = transacoes
    .filter((t) => t.tipo === 'Entrada')
    .reduce((acc, t) => acc + t.valor, 0);

  const totalSaidas = transacoes
    .filter((t) => t.tipo === 'Saída')
    .reduce((acc, t) => acc + t.valor, 0);

  const saldoTotal = totalEntradas - totalSaidas;

  const totaisPorCategoria = transacoes
    .filter((t) => t.tipo === 'Saída')
    .reduce((acc, t) => {
      acc[t.categoria] = (acc[t.categoria] || 0) + t.valor;
      return acc;
    }, {});

  // 3. LÓGICA DO FILTRO: Cria uma lista derivada baseada no botão clicado
  const transacoesFiltradas = transacoes.filter((t) => {
    if (filtro === 'Todas') return true;
    return t.tipo === filtro;
  });

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
          <div className="form-column">
            <FinanceForm onAddTransaction={adicionarTransacao} />
          </div>
          <div className="chart-column">
             <FinanceChart 
               totaisPorCategoria={totaisPorCategoria}
               totalEntradas={totalEntradas}
               totalSaidas={totalSaidas}
             />
          </div>
        </section>

        {/* 4. NOVA SEÇÃO DE HISTÓRICO COM FILTROS E TRANSACTION CARD */}
        <section className="history-container">
          <div className="history-header">
            <h3>Histórico Recente</h3>
            <div className="filter-buttons">
              <button 
                className={filtro === 'Todas' ? 'active' : ''} 
                onClick={() => setFiltro('Todas')}
              >Todas</button>
              <button 
                className={filtro === 'Entrada' ? 'active' : ''} 
                onClick={() => setFiltro('Entrada')}
              >Entradas</button>
              <button 
                className={filtro === 'Saída' ? 'active' : ''} 
                onClick={() => setFiltro('Saída')}
              >Saídas</button>
            </div>
          </div>
          
          <div className="transactions-list">
            {transacoesFiltradas.length > 0 ? (
              transacoesFiltradas.map((t) => (
                <TransactionCard 
                  key={t.id}
                  id={t.id}
                  descricao={t.descricao}
                  valor={t.valor}
                  tipo={t.tipo}
                  categoria={t.categoria}
                  dataCriacao={t.dataCriacao}
                  onDelete={eliminarTransacao}
                />
              ))
            ) : (
              <p className="empty-msg">Nenhuma transação encontrada para este filtro.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
