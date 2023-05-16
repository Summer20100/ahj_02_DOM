import '../css/style.css';
import GoblinGame from './GoblinGame';

window.addEventListener('load', () => {
  const goblinGame = new GoblinGame();
  goblinGame.boardGeneration(3);
  goblinGame.imgCreate(1000);
});
