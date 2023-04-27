function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
