import React, { useState, useEffect } from 'react';

export default function InputModal({
  handleInputModal,
  theInfoValue,
  buttonOpenModal,
  name,
  type,
  closeModal,
}) {
  const [resetValue, setResetValue] = useState('');

  //Se o modal for aberto por Edit, inicialize com o valor da transação em edição;
  //Se o modal for aberto por Novo Lançamento, inicialize '';
  useEffect(() => {
    if (buttonOpenModal === 'ButtonEditTransaction') {
      setResetValue(theInfoValue);
    }
    if (buttonOpenModal === 'ButtonNewTransaction') {
      setResetValue('');
    }
  }, [closeModal, buttonOpenModal, theInfoValue]);

  const handleInput = (event) => {
    setResetValue(event.target.value);
    handleInputModal(event.target.value);
  };

  return (
    <label>
      {name}
      <input type={type} onChange={handleInput} value={resetValue} min="0" />
    </label>
  );
}
