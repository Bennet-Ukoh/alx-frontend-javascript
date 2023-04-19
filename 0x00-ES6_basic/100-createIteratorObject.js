export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let departmentIndex = 0;
  let employeeIndex = 0;

  const iterator = {
    next() {
      if (departmentIndex < departments.length) {
        const employees = departments[departmentIndex];
        const employee = employees[employeeIndex];

        employeeIndex += 1;

        if (employeeIndex >= employees.length) {
          departmentIndex += 1;
          employeeIndex = 0;
        }

        return { value: employee, done: false };
      }

      return { done: true };
    },
  };

  return iterator;
}
