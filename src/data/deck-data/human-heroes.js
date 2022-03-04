import mariaRobotinik from '../cards-images/maria-robotinik.png';
import geraldRobotinik from '../cards-images/gerald-robotinik.png';
import professorPickle from '../cards-images/professor-pickle.png';
import gunCommander from '../cards-images/GUN-commander.png';

const humanHeroes = [
  {
    cardName: 'Maria Robotinik',
    cardDescription:
      `Neta de Gerald Robotinik e grande amiga de Shadow.
      Morreu em um trágico incidente na colônia espacial Ark`,
    cardAttr1: '26',
    cardAttr2: '28',
    cardAttr3: '26',
    cardImage: mariaRobotinik,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Gerald Robotinik',
    cardDescription:
      `Brilhante cientista avô de Dr. Eggman e criador de Shadow.
      Resolveu se vingar da humanidade após perder sua neta Maria`,
    cardAttr1: '10',
    cardAttr2: '60',
    cardAttr3: '10',
    cardImage: geraldRobotinik,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Prof. Pickle',
    cardDescription:
      `Pesquisador da Universidade de Spagonia que teve seu trabalho
      sobre Dark Gaia roubado por Dr. Eggman`,
    cardAttr1: '10',
    cardAttr2: '50',
    cardAttr3: '20',
    cardImage: professorPickle,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'GUN Commander',
    cardDescription:
      `Perdeu a família no incidente na colônia Ark e
      culpa Shadow por isso. Também testemunhou a criação do ouriço negro`,
    cardAttr1: '15',
    cardAttr2: '30',
    cardAttr3: '65',
    cardImage: gunCommander,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
];

export default humanHeroes;
