export class Person {
  constructor(name) {
    this.name = name;
    this.getThis = () => this;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}
