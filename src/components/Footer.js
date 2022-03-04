import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <p>
          Projeto desenvolvido em React.js por
          <a href="https://www.linkedin.com/in/raphaelameidamartins/"> Raphael Martins</a>
          <br />
          Alguns dos renders utilizados nos cards foram sedidos por
          <a href="https://www.deviantart.com/nibroc-rock"> Nibroc-Rock</a>
        </p>
        <p>
          A franquia Sonic the Hedgehog e seus personagens pertencem a Sega,
          todos os direitos reservados.
          <br />
          Este projeto foi desenvolvido para fins
          de aprendizado e não tem ligação com a companhia
        </p>
      </footer>
    );
  }
}

export default Footer;
