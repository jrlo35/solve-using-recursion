// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentNode){
  // your code here
  currentNode = currentNode || document.body;
  var results = [];

  var classNames = currentNode.className.split(' ');

  if(classNames.indexOf(className) > -1){
    results.push(currentNode);
  }

  var children = currentNode.children;
  for(var i = 0; i < children.length; i++){
    var withClass = getElementsByClassName(className, children[i]);
    results = results.concat(withClass);
  }

  return results;
  
};

