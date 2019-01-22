# libjson
1. javascript json library
2. display json to pretty format 


## 입력 파일
<pre><code>
{
  "name": "json.human",
  "description": "Convert  JSON to human readable  HTML",
  "author": "Mariano Guerra <mariano@marianoguerra.org>",
  "tags": ["DOM", "HTML", "JSON", "Pretty Print"],
  "version": "0.1.0",
  "main": "json.human.js",
  "license" : "MIT",
  "dependencies": {
      "crel": "1.0.0"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/marianoguerra/json.human.js.git"
  },
  "bugs": {
    "url": "http://github.com/marianoguerra/json.human.js/issues"
  },
  "contributors": [],
  "config": {
    "what?": "this object is just to show some extra stuff",
    "how?": ["add json.human.js", "add json.human.css", "test", "profit!"],
    "customization?": ["customize the css prefix", "change the css file"],
    "integer": 42,
    "float": 12.3,
    "bool": true,
    "emptyString": "",
    "emptyArray": [],
    "emptyObject": {},
    "htmlEntities": "   <- trailing <em>   & </em> and some html   "
  }
}
</code></pre>   


## 사용법
<pre><code>
var fs = require('fs');
var libjson = require('./lib/libjson.js');
var json_string = fs.readFileSync('test.json', 'utf8');
var json_object=JSON.parse(json_string);

var libjson = require('./lib/libjson.js');
var json_object=JSON.parse(json_string);
libjson.print(json_object);
</code></pre>

## 출력
<pre><code>
d:\libjson>node test_json.js
name : json.human
description : Convert  JSON to human readable  HTML
author : Mariano Guerra <mariano@marianoguerra.org>
tags :
        0 : DOM
        1 : HTML
        2 : JSON
        3 : Pretty Print
version : 0.1.0
main : json.human.js
license : MIT
dependencies :
        crel : 1.0.0
repository :
        type : git
        url : git://github.com/marianoguerra/json.human.js.git
bugs :
        url : http://github.com/marianoguerra/json.human.js/issues
contributors :
config :
        what? : this object is just to show some extra stuff
        how? :
                0 : add json.human.js
                1 : add json.human.css
                2 : test
                3 : profit!
        customization? :
                0 : customize the css prefix
                1 : change the css file
        integer : 42
        float : 12.3
        bool : true
        emptyString :
        emptyArray :
        emptyObject :
        htmlEntities :    <- trailing <em>   & </em> and some html

</code></pre>

