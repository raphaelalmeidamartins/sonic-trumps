import React, { useEffect } from 'react';
import Deck from '../components/Deck';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import useReturnToLogin from '../hooks/useReturnToLogin';
import useSessionStorage from '../hooks/useSessionStorage';
import useStartGame from '../hooks/useStartGame';

function DeckPage() {
  useSessionStorage('player profile');
  useReturnToLogin();

  const startGame = useStartGame();

  // used like componentDidMount, only runs when the component is mounted
  useEffect(startGame, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      <NavBar />
      <Deck />
      <Footer />
    </>
  );
}

export default DeckPage;
