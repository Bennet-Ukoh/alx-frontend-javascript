namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;
  }

  export class Java {
    private teacher: Teacher;

    public setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

    public getRequirements() {
      return "Here is the list of requirements for Java";
    }

    public getAvailableTeacher() {
      if (this.teacher && this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
