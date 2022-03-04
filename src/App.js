import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import deckArray from './data/deck-data';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    this.handleRemoveCard = this.handleRemoveCard.bind(this);
    this.handleFilterCards = this.handleFilterCards.bind(this);
    this.filterCards = this.filterCards.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.startGame = this.startGame.bind(this);
    this.closeGame = this.closeGame.bind(this);
    this.returnFullDeck = this.returnFullDeck.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      customCards: [],
      cardsFilter: {
        regExp: '',
        rarity: '',
        trunfo: false,
      },
      initialState: {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      },
      playing: false,
    };
  }

  // Lais Namatela - 19A me ajudou a simplificar a lógica dessa função
  // inserindo o campo name nos inputs previamente
  handleInputChange({ target }) {
    const { name, value, checked } = target;
    let currValue = target.type === 'checkbox' ? checked : value;
    if (name.match(/cardAttr[1-3]/)) {
      const min = 0;
      const max = 90;

      if (+currValue < min) currValue = min;
      if (+currValue > max) currValue = max;
      currValue = String(currValue);
    }
    this.setState({ [name]: currValue }, this.validateForm);
  }

  handleSaveButtonClick(event) {
    event.preventDefault();

    const newCard = { ...this.state };
    delete newCard.isSaveButtonDisabled;
    delete newCard.customCards;
    delete newCard.cardsFilter;
    delete newCard.initialState;
    delete newCard.playing;
    console.log(newCard);

    const { customCards, initialState } = this.state;

    this.setState(
      {
        ...initialState,
        customCards: [...customCards, newCard],
      },
      () => {
        if (newCard.cardTrunfo) this.setState({ hasTrunfo: true });
      },
    );
  }

  handleRemoveCard(index, cardTrunfo) {
    const { customCards } = this.state;
    const newcustomCards = [...customCards];
    newcustomCards.splice(index, 1);

    if (!cardTrunfo) this.setState({ customCards: newcustomCards });
    else this.setState({ customCards: newcustomCards, hasTrunfo: !cardTrunfo });
  }

  handleFilterCards(searchValue, searchFilter) {
    if (searchFilter === 'name') {
      const regExp = new RegExp(searchValue, 'i');
      this.setState(({ cardsFilter }) => ({
        cardsFilter: { ...cardsFilter, regExp },
      }));
    }
    if (searchFilter === 'rarity') {
      const rarity = searchValue === 'todas' ? '' : searchValue;
      this.setState(({ cardsFilter }) => ({
        cardsFilter: { ...cardsFilter, rarity },
      }));
    }
    if (searchFilter === 'trunfo') {
      const trunfo = searchValue;
      this.setState(({ cardsFilter }) => ({
        cardsFilter: { ...cardsFilter, trunfo },
      }));
    }
  }

  filterCards(arrayCards) {
    const { cardsFilter } = this.state;

    let filteredCards = arrayCards
      .filter((card) => card.cardName.match(cardsFilter.regExp));

    if (cardsFilter.rarity) {
      filteredCards = filteredCards
        .filter((card) => card.cardRare === cardsFilter.rarity);
    }
    if (cardsFilter.trunfo) {
      filteredCards = filteredCards.filter((card) => card.cardTrunfo === true);
    }
    return filteredCards;
  }

  validateForm() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

    let isFormInvalid = false;

    const areInputsEmpty = [
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    ].some((inputValue) => !inputValue);

    const areAttrInvalid = [cardAttr1, cardAttr2, cardAttr3]
      .some((attr) => {
        const min = 0;
        const max = 90;
        return attr < min || attr > max;
      });

    const minTotal = 0;
    const maxTotal = 210;
    const totalAttr = [cardAttr1, cardAttr2, cardAttr3]
      .reduce((acc, curr) => acc + +curr, 0);

    if (
      areInputsEmpty
      || areAttrInvalid
      || totalAttr < minTotal
      || totalAttr > maxTotal
    ) isFormInvalid = true;

    this.setState({ isSaveButtonDisabled: isFormInvalid });
  }

  startGame() {
    this.setState({ playing: true });
  }

  closeGame() {
    this.setState({
      cardsFilter: {
        regExp: '',
        rarity: '',
        trunfo: false },
      playing: false,
    });
  }

  returnFullDeck() {
    const { customCards } = this.state;
    const deck = [...customCards, ...deckArray];
    const newDeck = [];
    deck.forEach((card) => {
      if (card.cardRare === 'normal') newDeck.push(card, card, card, card, card);
      if (card.cardRare === 'raro') newDeck.push(card, card, card);
      if (card.cardRare === 'muito raro') newDeck.push(card, card);
    });
    const shuffle = 0.5;
    return newDeck.sort(() => Math.random() - shuffle);
  }

  render() {
    const { customCards, playing } = this.state;

    return (
      <>
        <Header />
        {playing ? (
          <Game
            quitGame={ this.closeGame }
            deck={ this.returnFullDeck() }
          />
        ) : (
          <>
            <main id="App" className="App">
              <h2 className="App-title">Crie uma nova carta</h2>
              <div className="App-form-container">
                <Form
                  { ...this.state }
                  onInputChange={ this.handleInputChange }
                  onSaveButtonClick={ this.handleSaveButtonClick }
                />
                <div className="App-card-preview">
                  <Card { ...this.state } preview />
                </div>
              </div>
              <CardList
                cardList={ this.filterCards(customCards) }
                deckArray={ this.filterCards(deckArray) }
                onInputChange={ this.handleFilterCards }
                removeCard={ this.handleRemoveCard }
                startGame={ this.startGame }
              />
            </main>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default App;
