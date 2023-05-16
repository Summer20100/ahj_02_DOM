import image from '../assets/goblin.png';

export default class GoblinGame {
  constructor() {
    this.field = 0;
    this.boarSize = 1;
  }

  boardGeneration(countOfCells) {
    this.boarSize = countOfCells;
    this.field = document.createElement('div');
    this.field.classList.add('board');
    const width = 124 * countOfCells;
    this.field.style.width = `${width}px`;
    document.body.appendChild(this.field);
    for (let i = 0; i < countOfCells ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.field.appendChild(cell);
    }
  }

  goblinSetter() {
    return Math.floor(Math.random() * (this.boarSize ** 2));
  }

  imgCreate(interval) {
    const goblin = new Image();
    goblin.src = image;
    setInterval(() => {
      const position = this.goblinSetter();
      this.field.childNodes[position].appendChild(goblin);
    }, interval);
  }
}
