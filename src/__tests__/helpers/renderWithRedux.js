import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';

const renderWithRedux = (component) => ({
  ...render(
    <BrowserRouter>
      <Provider store={ store }>{component}</Provider>
    </BrowserRouter>,
  ),
  store,
});

export default renderWithRedux;
