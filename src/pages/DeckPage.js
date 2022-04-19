import React from 'react';
import Deck from '../components/Deck';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
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
      <Footer />
    </>
  );
}

export default DeckPage;
