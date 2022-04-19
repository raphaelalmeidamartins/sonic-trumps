import React from 'react';

import { Route, Routes } from 'react-router-dom';
import CardPage from './pages/CardPage';
import DeckPage from './pages/DeckPage';
import GamePage from './pages/GamePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <LoginPage /> } />
      <Route path="/game" element={ <GamePage /> } />
      <Route path="/deck" element={ <DeckPage /> } />
      <Route path="/deck/:id" element={ <CardPage /> } />
    </Routes>
  );
}

export default App;
