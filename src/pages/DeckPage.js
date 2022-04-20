import React, { useEffect } from 'react';
import Deck from '../components/Deck';
import Footer from '../components/Footer';
import FormContainer from '../components/FormContainer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import useStartGame from '../hooks/useStartGame';

function DeckPage() {
  const startGame = useStartGame();

  // used like componentDidMount, only runs when the component is mounted
  useEffect(startGame, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      <NavBar />
      <FormContainer />
      <Deck />
      <Footer />
    </>
  );
}

export default DeckPage;
