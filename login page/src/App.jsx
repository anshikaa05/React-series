import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logginInsured from './logginInsured';
import RedirectPage from './RedirectPage'; // create a simple one if needed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginDemoComponent />} />
        <Route path="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;