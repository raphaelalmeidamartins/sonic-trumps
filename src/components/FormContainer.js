import React from 'react';
import { useSelector } from 'react-redux';
import '../sass/components/FormContainer.css';
import Card from './Card';
import CreateCardForm from './CreateCardForm';

function FormContainer() {
  const form = useSelector((state) => state.customCard.form);

  return (
    <div className="FormContainer">
      <h2 className="FormContainer-title">Crie uma nova carta</h2>
      <section className="FormContainer-wrapper">
        <CreateCardForm />
        <div className="FormContainer-preview">
          <Card { ...form } preview />
        </div>
      </section>
    </div>
  );
}

export default FormContainer;
