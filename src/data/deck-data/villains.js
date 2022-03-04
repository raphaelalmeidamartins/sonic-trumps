import eggman from '../cards-images/eggman.png';
import eggmanNega from '../cards-images/eggman-nega.png';
import chaos from '../cards-images/chaos.png';
import perfectChaos from '../cards-images/perfect-chaos.png';
import biolizard from '../cards-images/biolizard.png';
import blackDoom from '../cards-images/black-doom.png';
import erazorDjin from '../cards-images/erazor-djin.png';
import darkGaia from '../cards-images/dark-gaia.png';
import perfectDarkGaia from '../cards-images/perfect-dark-gaia.png';
import kingArthur from '../cards-images/king-arthur.png';
import merlina from '../cards-images/merlina.png';
import theDarkQueen from '../cards-images/the-dark-queen.png';
import timeEater from '../cards-images/time-eater.png';
import mephiles from '../cards-images/mephiles.png';
import iblis from '../cards-images/iblis.png';
import infinite from '../cards-images/infinite.png';
import solarisFinalPhase from '../cards-images/solaris-final-phase.png';

const muitoRaro = 'muito raro';

const villains = [
  {
    cardName: 'Dr. Eggman',
    cardDescription:
      `Brilhante e maquiavélico cientista cujos planos frequentemente
      dão errado por pequenos erros de cálculo`,
    cardAttr1: '25',
    cardAttr2: '85',
    cardAttr3: '30',
    cardImage: eggman,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Dr. Eggman Nega',
    cardDescription:
      `Contraparte de Dr. Eggman no universo de Blaze.
      Igualmente brilhante, maquiavélico e descuidado`,
    cardAttr1: '30',
    cardAttr2: '85',
    cardAttr3: '25',
    cardImage: eggmanNega,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Chaos',
    cardDescription:
      `Deus da Destruição, é um Chao mutante e imortal
      que evolui ao absorver esmeraldas do Chaos`,
    cardAttr1: '55',
    cardAttr2: '35',
    cardAttr3: '80',
    cardImage: chaos,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Perfect Chaos',
    cardDescription:
      `Forma suprema de Chaos ao absorver a energia negativa
      das 7 esmeraldas do Chaos`,
    cardAttr1: '60',
    cardAttr2: '80',
    cardAttr3: '70',
    cardImage: perfectChaos,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Biolizard',
    cardDescription:
      `Protótipo da Forma de Vida Suprema desenvolvido
      por Gerald Robotinik antes de Shadow`,
    cardAttr1: '75',
    cardAttr2: '60',
    cardAttr3: '75',
    cardImage: biolizard,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Black Doom',
    cardDescription:
      `Líder dos aliens negros. Forneceu seu DNA para Dr. Gerald curar sua neta Maria.
      Ele também foi utilizado no projeto Shadow`,
    cardAttr1: '30',
    cardAttr2: '87',
    cardAttr3: '53',
    cardImage: blackDoom,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Erazor Djinn',
    cardDescription:
      `Gênio do maligno. Pretende absorver os World Rings,
      dominar as Arabian Nights e depois invadir a dimensão de Sonic`,
    cardAttr1: '40',
    cardAttr2: '70',
    cardAttr3: '80',
    cardImage: erazorDjin,
    cardRare: 'raro',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Dark Gaia',
    cardDescription:
      `Entidade primordial, a incarnação das trevas, noite e destruição.
      Matém uma batalha eterna com Light Gaia (Chip)`,
    cardAttr1: '40',
    cardAttr2: '60',
    cardAttr3: '90',
    cardImage: darkGaia,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Perfect Dark Gaia',
    cardDescription:
      `Forma que Dark Gaia atinge no Momento do Despertar,
      fenômeno que ocorre na Terra em ciclos de milhões de anos`,
    cardAttr1: '50',
    cardAttr2: '80',
    cardAttr3: '80',
    cardImage: perfectDarkGaia,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'King Arthur',
    cardDescription:
      `Entidade do mundo de Camelot criada por Merlin
      para ser um líder benevolente. Acaba sendo corrompido pelo mal.`,
    cardAttr1: '54',
    cardAttr2: '34',
    cardAttr3: '82',
    cardImage: kingArthur,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Merlina',
    cardDescription:
      `Neta do mago Merlin do mundo de Camelot, queria utilizar a Bainha de
      Excalibur para tornar seu mundo eterno`,
    cardAttr1: '30',
    cardAttr2: '80',
    cardAttr3: '60',
    cardImage: merlina,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'The Dark Queen',
    cardDescription:
      `Também chamada de Rainha do Submundo, é a tranformação de Merlina ao
      obter a Bainha de Excalibur.`,
    cardAttr1: '54',
    cardAttr2: '68',
    cardAttr3: '88',
    cardImage: theDarkQueen,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Time Eater',
    cardDescription:
      `Alienígena com domínio sobre o espaço-tempo descoberto
      por Eggman que tentou utilizá-lo para apagar
      seus erros passados`,
    cardAttr1: '55',
    cardAttr2: '75',
    cardAttr3: '60',
    cardImage: timeEater,
    cardRare: 'raro',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Mephiles',
    cardDescription:
      `Consciência maligna do deus Solaris nascido durante o projeto Solaris.
      Assumiu aparência parecida com a de Shadow`,
    cardAttr1: '30',
    cardAttr2: '60',
    cardAttr3: '80',
    cardImage: mephiles,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Iblis',
    cardDescription:
      `Também conhecido como Chamas do Desastre, nasceu durante o projeto Solaris
      e corresponde ao poder bruto do deus`,
    cardAttr1: '30',
    cardAttr2: '90',
    cardAttr3: '90',
    cardImage: iblis,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Solaris',
    cardDescription:
      `Forma de vida interdimensional e deus sol de Soleanna.
      Foi divido em Mephiles e Iblis durante o projeto Solaris`,
    cardAttr1: '45',
    cardAttr2: '85',
    cardAttr3: '80',
    cardImage: solarisFinalPhase,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Infinite',
    cardDescription:
      `Após ser derrotado por Shadow, resolve obter o poder do Phantom Ruby
      para abandonar seu passado de fraqueza`,
    cardAttr1: '30',
    cardAttr2: '87',
    cardAttr3: '33',
    cardImage: infinite,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
];

export default villains;
