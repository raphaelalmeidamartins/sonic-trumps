import e102Gamma from '../cards-images/E102-gamma.png';
import gemerl from '../cards-images/gemerl.png';
import emerl from '../cards-images/emerl.png';
import e123Omega from '../cards-images/E123-omega.png';
import metalSonic from '../cards-images/metal-sonic.png';
import tailsDoll from '../cards-images/tails-doll.png';
import neoMetalSonic from '../cards-images/neo-metal-sonic.png';
import metalOverlord from '../cards-images/metal-overlord.png';
import eggDragoon from '../cards-images/egg-dragoon.png';
import deathEggRobot from '../cards-images/death-egg-robot.png';
import eggRobo from '../cards-images/egg-robo.png';
import orbot from '../cards-images/orbot.png';
import cubot from '../cards-images/cubot.png';
import captainWhisker from '../cards-images/captain-whisker.png';
import johnny from '../cards-images/johnny.png';

const muitoRaro = 'muito raro';

const eggmanRobots = [
  {
    cardName: 'E102-Gamma',
    cardDescription:
      'Criado por Dr. Eggman, Gamma adquire consciência própria e se volta contra ele',
    cardAttr1: '30',
    cardAttr2: '40',
    cardAttr3: '70',
    cardImage: e102Gamma,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Emerl',
    cardDescription:
      `Gizoid criado por uma civilização antiga e descoberto por Eggman.
      Se torna livre graças a ajuda de Sonic e seus amigos`,
    cardAttr1: '32',
    cardAttr2: '35',
    cardAttr3: '83',
    cardImage: emerl,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Gemerl',
    cardDescription:
     'Robô criado por Eggman a partir dos dados de Emerl, mas que se volta contra ele',
    cardAttr1: '30',
    cardAttr2: '33',
    cardAttr3: '87',
    cardImage: gemerl,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'E123-Omega',
    cardDescription:
      `Robô criado por Eggman, último e mais poderoso da série E.
      Se volta contra seu criador por ter sido abandonado`,
    cardAttr1: '30',
    cardAttr2: '35',
    cardAttr3: '85',
    cardImage: e123Omega,
    cardRare: 'raro',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Metal Sonic',
    cardDescription:
      'Robô criado por Eggman para imitar as habilidades de Sonic',
    cardAttr1: '85',
    cardAttr2: '55',
    cardAttr3: '30',
    cardImage: metalSonic,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Tails Doll',
    cardDescription:
      'Robô espião criado por Eggman com aparência parecida a de Tails',
    cardAttr1: '45',
    cardAttr2: '40',
    cardAttr3: '25',
    cardImage: tailsDoll,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Neo Metal Sonic',
    cardDescription:
      `Transformação de Metal Sonic ao absorver dados.
      Consegue escanear e copiar habilidades de adversários`,
    cardAttr1: '50',
    cardAttr2: '75',
    cardAttr3: '65',
    cardImage: neoMetalSonic,
    cardRare: 'raro',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Metal Overlord',
    cardDescription:
      `Transformação final de Neo Metal Sonic após absorver
      quantidades suficientes de dados`,
    cardAttr1: '55',
    cardAttr2: '75',
    cardAttr3: '80',
    cardImage: metalOverlord,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Egg Dragoon',
    cardDescription:
      `Robô gigante criado por Dr. Eggman.
      Capaz de atirar lasers, bombas e torpedos`,
    cardAttr1: '48',
    cardAttr2: '77',
    cardAttr3: '85',
    cardImage: eggDragoon,
    cardRare: muitoRaro,
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Death Egg Robot',
    cardDescription: 'Mecha criado por Dr. Eggman a partir de sua própria imagem',
    cardAttr1: '35',
    cardAttr2: '65',
    cardAttr3: '90',
    cardImage: deathEggRobot,
    cardRare: 'raro',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Egg Robo',
    cardDescription:
      `Recorrente badnik criado por Eggman e produzido em larga escala.
      Ele é capaz de atirar lasers`,
    cardAttr1: '21',
    cardAttr2: '44',
    cardAttr3: '75',
    cardImage: eggRobo,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Orbot',
    cardDescription:
      `Assistente de Dr. Eggman, mas que não gosta muito dele.
      Possui senso de humor questionável`,
    cardAttr1: '20',
    cardAttr2: '50',
    cardAttr3: '20',
    cardImage: orbot,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Cubot',
    cardDescription:
      `Assistente de Dr. Eggman, preguiçoso e seu chip
      e voz defeituoso faz com que ele alterne entre sotaques`,
    cardAttr1: '20',
    cardAttr2: '50',
    cardAttr3: '20',
    cardImage: cubot,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Captain Whisker',
    cardDescription:
      `Robô pirata criado por Eggman Nega.
      Seu objetivo é obter o Cetro de Joias`,
    cardAttr1: '17',
    cardAttr2: '66',
    cardAttr3: '37',
    cardImage: captainWhisker,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Johnny',
    cardDescription:
      `Robô pirata braço direito de Captain Whisker.
      Também foi criado por Dr. Eggman Nega`,
    cardAttr1: '67',
    cardAttr2: '33',
    cardAttr3: '40',
    cardImage: johnny,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
];

export default eggmanRobots;
