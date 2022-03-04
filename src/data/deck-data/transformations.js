import superSonic from '../cards-images/super-sonic.png';
import werehog from '../cards-images/werehog.png';
import gaiaColossus from '../cards-images/gaia-colossus.png';
import excaliburSonic from '../cards-images/excalibur-sonic.png';
import burningBlaze from '../cards-images/burning-blaze.png';
import darkSpineSonic from '../cards-images/dark-spine-sonic.png';

const muitoRaro = 'muito raro';

const transformations = [
  {
    cardName: 'Super Sonic',
    cardDescription:
      `Transformação de Sonic quando obtém as 7 esmeraldas do Chaos.
      Ainda mais rápido e com a habilidade de voar`,
    cardAttr1: '90',
    cardAttr2: '70',
    cardAttr3: '50',
    cardImage: superSonic,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Werehog (Sonic)',
    cardDescription:
      `Transformação que Sonic durante a noite após ser exposto
      a energia negativa de Dark Gaia. Lento, porém forte`,
    cardAttr1: '25',
    cardAttr2: '58',
    cardAttr3: '87',
    cardImage: werehog,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Gaia Colossus (Chip)',
    cardDescription:
      `Forma final de Chip após todas as esmeraldas do Chaos serem
      devolvidas aos templos Gaia`,
    cardAttr1: '45',
    cardAttr2: '75',
    cardAttr3: '90',
    cardImage: gaiaColossus,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Excalibur Sonic',
    cardDescription:
      `Transformação de Sonic após receber o poder das
      4 espadas sagradas: Arondight, Galatine, Laevatein e Caliburn`,
    cardAttr1: '90',
    cardAttr2: '45',
    cardAttr3: '75',
    cardImage: excaliburSonic,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Burning Blaze',
    cardDescription:
      `Transformação de Blaze após
      receber o poder das 7 esmeraldas solares.`,
    cardAttr1: '90',
    cardAttr2: '50',
    cardAttr3: '70',
    cardImage: burningBlaze,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Darkspine Sonic',
    cardDescription:
      `Transformação de Sonic após absorver os World Rings de raiva, tristeza e ódio.
      Nesta forma, Sonic fica mais violento`,
    cardAttr1: '85',
    cardAttr2: '48',
    cardAttr3: '77',
    cardImage: darkSpineSonic,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
];

export default transformations;
