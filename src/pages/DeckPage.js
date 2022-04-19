import React from 'react';
import Deck from '../components/Deck';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import useReturnToLogin from '../hooks/useReturnToLogin';
import useSessionStorage from '../hooks/useSessionStorage';

function DeckPage() {
  useSessionStorage('player profile');
  useReturnToLogin();

  return (
    <>
      <Header />
      <NavBar />
      <Deck />
      <SearchBar />
    </>
  );
}

export default DeckPage;
