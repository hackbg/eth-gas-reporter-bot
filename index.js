const GasTable = require('./lib/gasTable');
const data = require('./gasReporterOutput.json');
const data2 = require('./gasReporterOutput2.json');

const table = new GasTable(data.config);
table.generate(data.info, data2.info);
