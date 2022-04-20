import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CardPage from './pages/CardPage';
import DeckPage from './pages/DeckPage';
import GamePage from './pages/GamePage';
import NotFound from './pages/NotFound';
import TitlePage from './pages/TitlePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <TitlePage /> } />
      <Route path="/game" element={ <GamePage /> } />
      <Route path="/deck" element={ <DeckPage /> } />
      <Route path="/deck/:id" element={ <CardPage /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
