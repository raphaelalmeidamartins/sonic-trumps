import sonic from '../cards-images/sonic.png';
import tails from '../cards-images/tails.png';
import knuckles from '../cards-images/knuckles.png';
import amy from '../cards-images/amy.png';
import big from '../cards-images/big.png';
import tikal from '../cards-images/tikal.png';
import shadow from '../cards-images/shadow.png';
import rouge from '../cards-images/rouge.png';
import cream from '../cards-images/cream.png';
import vanilla from '../cards-images/vanilla.png';
import cheese from '../cards-images/cheese.png';
import silver from '../cards-images/silver.png';
import blaze from '../cards-images/blaze.png';
import marine from '../cards-images/marine.png';
import shahra from '../cards-images/shahra.png';
import chip from '../cards-images/chip.png';

const heroes = [
  {
    cardName: 'Sonic',
    cardDescription:
      'Ouriço mais rápido do mundo. Ama cachorro-quente e aventura, mas odeia esperar',
    cardAttr1: '86',
    cardAttr2: '59',
    cardAttr3: '25',
    cardImage: sonic,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Tails',
    cardDescription:
      'Melhor amigo do Sonic, Tails é inteligente e adora criar gadgets e veículos',
    cardAttr1: '30',
    cardAttr2: '80',
    cardAttr3: '30',
    cardImage: tails,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Knuckles',
    cardDescription:
      'A força dos seus punhos é diretamente proporcional a sua falta de inteligência',
    cardAttr1: '55',
    cardAttr2: '30',
    cardAttr3: '85',
    cardImage: knuckles,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Amy',
    cardDescription:
      'Corajosa e ex-líder da Restauração. Criminosa passional nas horas vagas',
    cardAttr1: '40',
    cardAttr2: '30',
    cardAttr3: '50',
    cardImage: amy,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Big',
    cardDescription:
      'Adepto do deboísmo. Pescar é seu passatempo favorito',
    cardAttr1: '27',
    cardAttr2: '27',
    cardAttr3: '66',
    cardImage: big,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Tikal',
    cardDescription:
      'Pacifista gentil e apaixonada. Crê que o medo e a raiva são a fonte da destruição',
    cardAttr1: '38',
    cardAttr2: '47',
    cardAttr3: '25',
    cardImage: tikal,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Shadow',
    cardDescription:
      `Forma de Vida Suprema, extremamente poderoso. Um coração enorme
      se esconde atrás de sua atitude rebelde`,
    cardAttr1: '85',
    cardAttr2: '30',
    cardAttr3: '55',
    cardImage: shadow,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Rouge',
    cardDescription:
      'Caçadora de recompensas que adora joias. Cleptomaníaca',
    cardAttr1: '30',
    cardAttr2: '70',
    cardAttr3: '40',
    cardImage: rouge,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Cream',
    cardDescription:
      'Bastante educada, mas um pouco ingênua. Pode usar suas orelhas para voar',
    cardAttr1: '30',
    cardAttr2: '30',
    cardAttr3: '20',
    cardImage: cream,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Vanilla',
    cardDescription:
      'Mãe de Cream. É uma habilidosa dona de casa, e amante de disciplina e educação',
    cardAttr1: '30',
    cardAttr2: '40',
    cardAttr3: '20',
    cardImage: vanilla,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Cheese',
    cardDescription:
      'Inseparável companheiro de Cream. Trabalham juntos dando coragem um ao outro',
    cardAttr1: '22',
    cardAttr2: '26',
    cardAttr3: '26',
    cardImage: cheese,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Silver',
    cardDescription:
      `Ouriço viajante do tempo vindo de um futuro distante.
      Consegue mover objetos com o poder da mente`,
    cardAttr1: '30',
    cardAttr2: '85',
    cardAttr3: '55',
    cardImage: silver,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Blaze',
    cardDescription:
      `Princesa de outra dimensão, orgulhosa, extremamente poderoza e veloz.
      Consegue domar o fogo`,
    cardAttr1: '80',
    cardAttr2: '35',
    cardAttr3: '55',
    cardImage: blaze,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Marine',
    cardDescription: 'Energética e tagarela que ama aventuras. Mora na dimensão de Blaze',
    cardAttr1: '30',
    cardAttr2: '30',
    cardAttr3: '30',
    cardImage: marine,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Shahra',
    cardDescription:
      `Gênia do anel que ajudou o Sonic a livrar o mundo das Arabian Nights
      das garras do ambicioso Erazor Djinn`,
    cardAttr1: '45',
    cardAttr2: '65',
    cardAttr3: '30',
    cardImage: shahra,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Chip',
    cardDescription:
      `Seu verdadeiro nome é Light Gaia, é uma entidade primordial
      que luta contra Dark Gaia para manter o equilíbrio do mundo`,
    cardAttr1: '40',
    cardAttr2: '45',
    cardAttr3: '25',
    cardImage: chip,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
];

export default heroes;
