import React from 'react';
import Header from '../components/Header';
import useReturnToLogin from '../hooks/useReturnToLogin';
import useSessionStorage from '../hooks/useSessionStorage';

function CardPage() {
  useSessionStorage('player profile');
  useReturnToLogin();

  return (
    <div>
      <Header />
    </div>
  );
}

export default CardPage;
