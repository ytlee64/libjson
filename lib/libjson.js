/**
 * 
 * @param {*} key 
 * @param {*} value 
 * @param {*} level 
 */
function process(key, value, level) {
    var space = '\t'.repeat(Number(level));
    if (value !== null && typeof (value) !== "object")
        console.log(space + key + " : " + value);
    else
        console.log(space + key + " : ");
}

/**
 * 
 * @param {*} json_object 
 * @param {*} level 
 */
function traverse(json_object, level) {
    for (var i in json_object) {
        process(i, json_object[i], level);
        if (json_object[i] !== null && typeof (json_object[i]) == "object") {
            //going one step down in the object tree!!
            traverse(json_object[i], level + 1);
        }
    }
}

/**
 * 
 * @param {*} json_data 
 * @returns 
 */
function jsonobject(json_data) {
    var json_object = json_data;
    if (typeof json_data === 'string') {
        json_object = JSON.parse(json_data);
    }
    return json_object;
}
/**
 * 
 * @param {*} array 
 */
function displayarray(array) {
    var string = "";
    array.forEach(function (element) {
        string += (element + ",\t");
    });
    console.log(string);
}
/**
 * 
 */
module.exports.getjsonobject = function (json_data) {
    return jsonobject(json_data);
}
/**
 * 
 */
module.exports.getvalue = function (json_data, keyarray) {

    var obj = jsonobject(json_data);
    for (var i in keyarray) {
        obj = obj[keyarray[i]];
    }
    return obj;
}
/**
 * 
 */
module.exports.displaytree = function (json_data) {
    traverse(jsonobject(json_data), 0);
}

/**
 * 
 */
module.exports.displaytable = function (json_data, keyarray) {

    var obj = jsonobject(json_data);
    for (var i in keyarray) {
        obj = obj[keyarray[i]];
    }


    var header = [];
    for (var i in obj[0]) {
        header.push(i);
    }
    displayarray(header);


    for (var i in obj) {
        var value = [];
        for (var k in obj[i]) {
            value.push(obj[i][k]);
        }
        displayarray(value);
    }
   
} 