//called with every property and its value
function process(key,value,level) {
    var space = '\t'.repeat(Number(level));
    if(value !== null && typeof(value) !=="object") 
        console.log(space + key + " : " + value);
    else
        console.log(space + key + " : ");
}

function traverse(json_object,level) {
    for (var i in json_object) {
        process(i,json_object[i],level);  
        if (json_object[i] !== null && typeof(json_object[i])=="object") {
            //going one step down in the object tree!!
            traverse(json_object[i],level+1);
        }
    }
}


function jsonobject(json_data){
    var json_object =json_data;
    if(typeof json_data === 'string') {
        json_object = JSON.parse(json_data);
    }
    return json_object;
}

module.exports.getjsonobject=function(json_data){
    return jsonobject(json_data);
}


module.exports.print = function(json_data) {
     traverse(jsonobject(json_data),0);
} 




module.exports.getvalue = function(json_data,keyarray) {
 
    var obj = jsonobject(json_data);
    for (var i in keyarray) {
        obj = obj[keyarray[i]]; 
    }
    return obj;
}

module.exports.csv = function(json_data,keyarray) {
     
    var obj = jsonobject(json_data);
    for (var i in keyarray) {
        obj = obj[keyarray[i]]; 
    }
    console.log(obj); 

    for (var i in obj[0]) {
        console.log(i); 
    }

    for (var i in obj) {
        for (var k in obj[i]) {
            console.log(obj[i][k]); 
        }
    }
   // traverse(json_object,0);
} 