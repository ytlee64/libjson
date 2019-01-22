# jsonlib

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
name : json.human
libjson.js:5
description : Convert  JSON to human readable  HTML
libjson.js:5
author : Mariano Guerra <mariano@marianoguerra.org>
libjson.js:5
tags : 
libjson.js:7
	0 : DOM
libjson.js:5
	1 : HTML
libjson.js:5
	2 : JSON
libjson.js:5
	3 : Pretty Print
libjson.js:5
version : 0.1.0
libjson.js:5
main : json.human.js
libjson.js:5
license : MIT
libjson.js:5
dependencies : 
libjson.js:7
	crel : 1.0.0
libjson.js:5
repository : 
libjson.js:7
	type : git
libjson.js:5
	url : git://github.com/marianoguerra/json.human.js.git
libjson.js:5
bugs : 
libjson.js:7
	url : http://github.com/marianoguerra/json.human.js/issues
libjson.js:5
contributors : 
libjson.js:7
config : 
libjson.js:7
	what? : this object is just to show some extra stuff
libjson.js:5
	how? : 
libjson.js:7
		0 : add json.human.js
libjson.js:5
</code></pre>

