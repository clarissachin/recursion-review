// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var node = node || document.body;

  // initialized results with node if classList exists & contains className
  var results = (node.classList && node.classList.contains(className)) ? [node] : [];

  if (node.childNodes.length > 0) {
    for (var i = 0; i < node.childNodes.length; i++) {
      results = results.concat(getElementsByClassName(className, node.childNodes[i]));
    }
  }

  return results;
};

