import heroes from './deck-data/heroes';
import chaotix from './deck-data/chaotix';
import idwHeroes from './deck-data/idw-heroes';
import humanHeroes from './deck-data/human-heroes';
import knights from './deck-data/knights';
import transformations from './deck-data/transformations';
import riders from './deck-data/riders';
import classicUniverse from './deck-data/classic-universe';
import villains from './deck-data/villains';
import idwVillains from './deck-data/idw-villains';
import eggmanRobots from './deck-data/eggman-robots';
import theDeadlySix from './deck-data/the-deadly-six';
import wisps from './deck-data/wisps';

const deckArray = [
  ...heroes,
  ...chaotix,
  ...idwHeroes,
  ...humanHeroes,
  ...knights,
  ...transformations,
  ...riders,
  ...classicUniverse,
  ...villains,
  ...idwVillains,
  ...eggmanRobots,
  ...theDeadlySix,
  ...wisps,
];

export default deckArray;
