import yacker from '../cards-images/yacker.png';
import yellowDrill from '../cards-images/yellow-drill.png';
import cyanLaser from '../cards-images/cyan-laser.png';
import blueCube from '../cards-images/blue-cube.png';
import greenHover from '../cards-images/green-hover.png';
import pinkSpikes from '../cards-images/pink-spikes.png';
import purpleFrenzy from '../cards-images/purple-frenzy.png';
import violetVoid from '../cards-images/violet-void.png';
import orangeRocket from '../cards-images/orange-rocket.png';
import redBurst from '../cards-images/red-burst.png';
import blackBomb from '../cards-images/black-bomb.png';
import crimsonEagle from '../cards-images/crimson-eagle.png';
import grayQuake from '../cards-images/gray-quake.png';
import indigoAsteroid from '../cards-images/indigo-asteroid.png';
import ivoryLightning from '../cards-images/ivory-lightning.png';
import jadeGhost from '../cards-images/jade-ghost.png';
import magentaRhythm from '../cards-images/magenta-rhythm.png';

const wisps = [
  {
    cardName: 'Yacker (White Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para ganhar velocidade`,
    cardAttr1: '58',
    cardAttr2: '22',
    cardAttr3: '20',
    cardImage: yacker,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Yellow drill (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para perfurar o solo`,
    cardAttr1: '22',
    cardAttr2: '20',
    cardAttr3: '58',
    cardImage: yellowDrill,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Cyan Laser (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para se lançar na velocidade da luz`,
    cardAttr1: '68',
    cardAttr2: '10',
    cardAttr3: '22',
    cardImage: cyanLaser,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Blue Cube (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para criar plataformas azuis`,
    cardAttr1: '04',
    cardAttr2: '60',
    cardAttr3: '36',
    cardImage: blueCube,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Green Hover (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para flutuar e seguir rotas de rings`,
    cardAttr1: '10',
    cardAttr2: '66',
    cardAttr3: '24',
    cardImage: greenHover,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Pink Spikes (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para grudar em paredes e tetos`,
    cardAttr1: '41',
    cardAttr2: '9',
    cardAttr3: '50',
    cardImage: pinkSpikes,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Purple Frenzy (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para destruir tudo pelo caminho`,
    cardAttr1: '30',
    cardAttr2: '04',
    cardAttr3: '66',
    cardImage: purpleFrenzy,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Violet Void (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para criar buracos negros`,
    cardAttr1: '10',
    cardAttr2: '76',
    cardAttr3: '14',
    cardImage: violetVoid,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Orange Rocket (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para se lançar como um foguete`,
    cardAttr1: '35',
    cardAttr2: '30',
    cardAttr3: '35',
    cardImage: orangeRocket,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Red Burst (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para explodir bolas de fogo`,
    cardAttr1: '22',
    cardAttr2: '12',
    cardAttr3: '66',
    cardImage: redBurst,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Black Bomb (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para causar explosões`,
    cardAttr1: '0',
    cardAttr2: '25',
    cardAttr3: '75',
    cardImage: blackBomb,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Crimson Eagle (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para planar pelos céus`,
    cardAttr1: '40',
    cardAttr2: '60',
    cardAttr3: '0',
    cardImage: crimsonEagle,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Gray Quake (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para girar e demolir tudo pela frente`,
    cardAttr1: '30',
    cardAttr2: '0',
    cardAttr3: '70',
    cardImage: grayQuake,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Indigo Asteroid (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para flutuar e absorver coisas`,
    cardAttr1: '20',
    cardAttr2: '35',
    cardAttr3: '45',
    cardImage: indigoAsteroid,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Ivory Lightning (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para lançar raios elétricos`,
    cardAttr1: '55',
    cardAttr2: '0',
    cardAttr3: '45',
    cardImage: ivoryLightning,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Jade Ghost (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para atravessar paredes`,
    cardAttr1: '10',
    cardAttr2: '80',
    cardAttr3: '10',
    cardImage: jadeGhost,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  {
    cardName: 'Magenta Rhythm (Wisp)',
    cardDescription:
      `É um Wisp (raça de pequenos alienígenas com super poderes)
      Sua energia pode ser usada para alcançar áreas altas`,
    cardAttr1: '08',
    cardAttr2: '72',
    cardAttr3: '20',
    cardImage: magentaRhythm,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
];

export default wisps;
