var student1 = {
    firstName: 'John',
    lastName: 'Dave',
    age: 25,
    location: 'Port Harcourt'
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Ogochi',
    age: 30,
    location: 'Lagos'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
