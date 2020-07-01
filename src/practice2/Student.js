import { Person } from "./Person";
export class Student extends Person {
  constructor(name, className) {
    super(name);
    this.getThis = () => this;
    this.className = className;
  }

  study = () => {
    super.move();
    console.log(`${this.name} is studying in ${this.className}`);
  };
}
