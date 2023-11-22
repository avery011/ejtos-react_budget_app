import React, { useState } from 'react';

const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('£');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      <label htmlFor="currencySelect">Select Currency:</label>
      <select id="currencySelect" onChange={handleCurrencyChange} value={selectedCurrency}>
        <option value="£">Pound (GBP)</option>
        <option value="$">Dollar (USD)</option>
        <option value="€">Euro (EUR)</option>
        <option value="₹">Rupee (INR)</option>
        {/* Add more currency options as needed */}
      </select>

      <p>Selected Currency: {selectedCurrency}</p>
    </div>
  );
};

export default CurrencyDropdown;
