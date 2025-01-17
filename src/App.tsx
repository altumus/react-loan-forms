import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo';
import AddressWork from './pages/AddressWork';
import LoanParams from './pages/LoanParams';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalInfo />} />
      <Route path="/address-work" element={<AddressWork />} />
      <Route path="/loan-params" element={<LoanParams />} />
    </Routes>
  );
};

export default App;