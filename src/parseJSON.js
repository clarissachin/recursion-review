// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

String.prototype.count = function(character) {
  var count = 0; 
  for (var i = 0; i < this.length; i++) {
    if (this[i] === character) {
      count++;
    }
  }
  return count;
};

var parseJSON = function(json) {
  // look at the first character of the string to determine the data type 
  //data types:
    // null 
    // boolean
    // undefined (?)
    // string
    // number
    // array 
    // object  
  if (json === 'null') {
    return null;
  }
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }
  if (json[0] === '"') {
    return json.slice(1, json.length - 1);
  } 
  if (!isNaN(json)) {
    return Number(json);  
  }
  // array 
  if (json[0] === '[') {
    console.log('hiii');
    var arr = []; 
    // if (json === "[]") {
    //   return [];
    // }
    // array to build 
    // initialize the sliceFromIndex = 0;
    // trim off the outer [] of the string and reassign that to json
    // iterate through each character of the trimmed stringArray
       // 2 main cases to address:
         // if we find the open bracket
            // iterate through rest of the string (idx = arrIndex) 
               // if we find the closing bracket and the # of opening and closing brackets are equal
                  // array.push(parseJSON(the slice: (sliceFromIndex, arrIndex + 1)
                  // sliceFromIndex += 1; 
         // else if comma found 
            // push the slice (sliceFromIndex, currentIndex + 1);
            // sliceFromIndex += 1;
    var sliceFromIndex = 0; 
    json = json.slice(1, json.length - 1);
      
    for (var i = 0; i < json.length; i++) {
      if (json[i] === '[') {
        for (var k = i; k < json.length; k++) {
          if (json[k] === ']' && json.slice(0, k).count('[') === json.slice(0, k).count(']')) {
            arr.push(parseJSON(json.slice(sliceFromIndex, k + 1)));
            sliceFromIndex = k + 1;
          }
        }  
      } else if (json[i] === ',') {
        arr.push(parseJSON(json.slice(sliceFromIndex, i + 1)));
        sliceFromIndex = i + 1;
      }
    }

    return arr;
  }
};


// console.log('parseJSON null is', parseJSON('null'), 'and it equals JSON.parse:', JSON.parse('null') === parseJSON('null'));
// console.log('parseJSON true is', parseJSON('true'), 'and it equals JSON.parse:', JSON.parse('true') === parseJSON('true'));
// console.log('parseJSON false is', parseJSON('false'), 'and it equals JSON.parse:', JSON.parse('false') === parseJSON('false'));
// console.log('parseJSON string is', parseJSON("\"hello\""), 'and it equals JSON.parse:', JSON.parse("\"hello\"") === parseJSON("\"hello\""));
// console.log('parseJSON string is', parseJSON("465"), 'and it equals JSON.parse:', JSON.parse("465") === parseJSON("465"));
// console.log('parseJSON string is', parseJSON("465a"), 'and it equals JSON.parse:', JSON.parse("465a") === parseJSON("465a"));
console.log('parseJSON string is', parseJSON('[[[["foo"]]]]'), 'and it equals JSON.parse:', JSON.parse('[[[["foo"]]]]') === parseJSON('[[[["foo"]]]]'));
//  console.log('parseJSON string is', parseJSON('[[[["foo"]]]]'), 'and it equals JSON.parse:', JSON.parse('[[[["foo"]]]]') === parseJSON('[[[["foo"]]]]'));