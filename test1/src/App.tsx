// src/App.tsx
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
