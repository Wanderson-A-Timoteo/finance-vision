import React, { useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_VALUES = {
  descricao: '',
  valor: '',
  categoria: '',
  tipo: 'Saída' // 'Saída' como padrão
};

function FinanceForm({ onAddTransaction }) {
  const [formData, setFormData] = useState(INITIAL_VALUES);

  function handleChange(event) {
    let { name, value } = event.target;

    // Impede a digitação de valores negativos
    if (name === 'valor' && Number(value) < 0) {
      value = ''; 
    }

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Envia os dados para o App.js
    onAddTransaction({
      ...formData,
      valor: parseFloat(formData.valor)
    });
    
    // Limpa o formulário após o envio
    setFormData(INITIAL_VALUES);
  }

  const isFormValid = formData.descricao && formData.valor && formData.categoria;

  return (
    <div className="form-container">
      <h3>Adicionar Nova Transação</h3>
      
      <form onSubmit={handleSubmit} className="finance-form">
        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <input
            id="descricao"
            name="descricao"
            type="text"
            placeholder="Ex: Conta de Luz"
            value={formData.descricao}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="valor">Valor (R$)</label>
          <input
            id="valor"
            name="valor"
            type="number"
            step="0.01"
            min="0"
            placeholder="Ex: 150.50"
            value={formData.valor}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <select 
            id="categoria" 
            name="categoria" 
            value={formData.categoria} 
            onChange={handleChange}
          >
            <option value="" disabled>Selecione...</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Moradia">Moradia</option>
            <option value="Transporte">Transporte</option>
            <option value="Lazer">Lazer</option>
            <option value="Salário">Salário</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tipo">Tipo</label>
          <select 
            id="tipo" 
            name="tipo" 
            value={formData.tipo} 
            onChange={handleChange}
          >
            <option value="Entrada">Entrada (Receita)</option>
            <option value="Saída">Saída (Despesa)</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="add-btn"
          disabled={!isFormValid}
        >
          Adicionar Transação
        </button>
      </form>
    </div>
  );
}

FinanceForm.propTypes = {
  onAddTransaction: PropTypes.func.isRequired
};

export default FinanceForm;
