// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }
  if (typeof obj === 'function' || obj === undefined) {
    return undefined;
  }
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (obj === true) {
    return 'true';
  }
  if (obj === false) {
    return 'false';
  }
  // array
  if (Array.isArray(obj)) {
    var stringArray = [];
    for (var i = 0; i < obj.length; i++) {
      stringArray.push(stringifyJSON(obj[i]));
    }
    return '[' + stringArray.join(',') + ']';
  }
  // object 
  if (obj.constructor === Object) {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    var stringObjArr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function' && obj[key] !== undefined) {
        stringObjArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + stringObjArr.join(',') + '}';
  }
};

// console.log('stringifyJSON(null) is', stringifyJSON(null), 'and,', JSON.stringify(null) === stringifyJSON(null));
// console.log('stringifyJSON(\'hello\') is', stringifyJSON('hello'), 'and,', JSON.stringify('hello') === stringifyJSON('hello'));
// console.log('stringifyJSON(true) is', stringifyJSON(true), 'and,', JSON.stringify(true) === stringifyJSON(true));
// console.log('stringifyJSON(false) is', stringifyJSON(false), 'and,', JSON.stringify(false) === stringifyJSON(false));
// console.log('stringifyJSON([]) is', stringifyJSON([]), 'and,', JSON.stringify([]) === stringifyJSON([]));
// console.log('stringifyJSON\'s output is', stringifyJSON([true, 'hello', 4, 5, false, null]), 'and are they equal:,', JSON.stringify([true, 'hello', 4, 5, false, null]) === stringifyJSON([true, 'hello', 4, 5, false, null]));
// console.log('JSON.stringify should be', JSON.stringify([true, 'hello', 4, 5, false, null]));
// console.log('JSON.stringify should be', JSON.stringify({'boolean, true': true, 'boolean, false': false, 'hello': function() {}, 'hi': 5 }));
