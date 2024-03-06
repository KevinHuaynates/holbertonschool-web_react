namespace Subjects {
  export class Subject {
    private _teacher: Teacher;

    constructor() {
      this._teacher = { firstName: "", lastName: "" };
    }

    set teacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    get teacher(): Teacher {
      return this._teacher;
    }
  }
}
