var fs = require('fs');
var https = require('https');

var libjson = require('./lib/libjson.js');

var json_string = fs.readFileSync('test.json', 'utf8');
 

libjson.print(json_string);


var data= libjson.getvalue(json_string,["repository","type"]);
console.log("getvalue [''repository'',''type''] ===> " + data);


