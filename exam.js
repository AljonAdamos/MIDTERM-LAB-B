const fs = require('fs');

const name = process.argv[2];
const role = process.argv[3];
const department = process.argv[4];

const data = `Employee: ${name}, Role: ${role} Department: ${department}`;

fs.appendFile('data.txt', data, (err) => {
  if (err) throw err;
  console.log('The data was appended to file!');
});
