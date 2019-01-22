var fs = require('fs');
var https = require('https');

var libjson = require('./lib/libjson.js');



var json_string = fs.readFileSync('test.json', 'utf8');
var json_object=JSON.parse(json_string);

libjson.print(json_object);


console.log(libjson.getvalue(json_object,["repository","type"]));

// https://eos.greymass.com/v1/chain/get_info
 

// var post_req = https.request('https://eos.greymass.com/v1/chain/get_info', function(res) {
//     res.setEncoding('utf8');
//     res.on('data', function (result) {
//         var json_object=JSON.parse(result);
//         libjson.print(json_object);
//     });
// });

// post_req.end();

