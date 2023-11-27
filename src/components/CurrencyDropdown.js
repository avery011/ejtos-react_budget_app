
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
  const { dispatch, currency } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
  };

  return (
    <div>
      <label htmlFor="currencySelect">Select Currency:</label>
      <select id="currencySelect" onChange={handleCurrencyChange} value={currency}>
        <option value="£">Pound (GBP)</option>
        <option value="$">Dollar (USD)</option>
        <option value="€">Euro (EUR)</option>
        <option value="₹">Rupee (INR)</option>
        {/* Add more currency options as needed */}
      </select>
    </div>
  );
};

export default CurrencyDropdown;

