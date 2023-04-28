namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
  }

  export class Subject {
    private teacher: Teacher;

    public setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }

  export class Cpp extends Subject {
    public getRequirements() {
      return "Here is the list of requirements for Cpp";
    }

    public getAvailableTeacher() {
      if (this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
