const { Parser } = require('./node_modules/json2csv');
var fs = require("fs");

var export2Csv = (data,options) => {
    const { header, row } = data;
    const { fileName } = options;
    return new Promise((resolve, reject) => {
        if (!data || !options) {
            reject(new Error("data or options are missing. please check its format"));
        }

        const json2csvParser = new Parser({ header });
        const csv = json2csvParser.parse(row);
        var createStream = fs.createWriteStream(`${fileName}.csv`);
        createStream.write(csv);
        createStream.end();
    })
}

var import2Csv = (data,options) => {
    return new Promise((resolve, reject) => {
        resolve('Working Here. Just give me some time. i will complete this functionality and update you Thanks in advance ');
    })
}
module.exports.export2Csv = export2Csv;
module.exports.import2Csv = import2Csv;

