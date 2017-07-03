// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var node = node || document.body;
  var results = node.classList.contains(className) ? [node] : [];

  if (node.children.length > 0) {
    for (var i = 0; i < node.children.length; i++) {
      results = results.concat(getElementsByClassName(className, node.children[i]));
    }
  }

  return results;
};

