import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import CurrencyDropdown from './CurrencyDropdown'; // Import the CurrencyDropdown component

const Budget = () => {
  const { budget, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  return (
    <div>
      <CurrencyDropdown /> {/* Include the CurrencyDropdown component */}

      <div className='alert alert-secondary'>
        <span>Budget: {currency}{budget}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        <span>Selected Currency: {currency}</span>
      </div>
    </div>
  );
};

export default Budget;
