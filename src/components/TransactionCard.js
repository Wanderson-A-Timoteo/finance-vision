import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

function TransactionCard({ id, descricao, valor, tipo, categoria, dataCriacao, onDelete }) {
  // Classe baseada no tipo
  const tipoClass = tipo === 'Entrada' ? 'card-entrada' : 'card-saida';

  return (
    <div className={`transaction-card ${tipoClass}`}>
      <div className="transaction-info">
        <span className="transaction-date">{dataCriacao}</span>
        <div className="transaction-details">
          <strong>{descricao}</strong>
          <span className="transaction-category">{categoria}</span>
        </div>
      </div>
      
      <div className="transaction-actions">
        <span className={`transaction-value ${tipoClass}`}>
          {tipo === 'Saída' ? '-' : '+'} {valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
        <button 
          className="delete-btn" 
          onClick={() => onDelete(id)}
          title="Excluir transação"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

// Tipagem
TransactionCard.propTypes = {
  id: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
  tipo: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  dataCriacao: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TransactionCard;
