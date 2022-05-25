const GasTable = require('./lib/gasTable');
const data = require('./gasReporterOutput.json');
const data2 = require('./gasReporterOutput2.json');

// console.log(JSON.stringify(data));
// console.log(JSON.stringify(data2));

const table = new GasTable(data.config);
table.generate(data.info, data2.info);
