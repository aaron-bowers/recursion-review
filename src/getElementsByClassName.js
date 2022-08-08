// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var node = document.body;
  var elementsByClassName = [];

  var innerFunction = function(currentNode) {
    // console.log(currentNode.classList);
    // console.log(currentNode.childNodes);

    if (currentNode.classList && currentNode.classList.contains(className)) {
      elementsByClassName.push(currentNode);
    }

    if (currentNode.hasChildNodes()) {
      var currentChildren = currentNode.childNodes;
      currentChildren.forEach(function (currentChild) {
        innerFunction(currentChild);
      });
    }

  };
  innerFunction(node);
  // console.log(elementsByClassName);
  return elementsByClassName;
};


// document.body
// element.childNodes
// element.classList
