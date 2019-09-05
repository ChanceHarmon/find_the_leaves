'use strict'

// Assuming we have a node class and a tree

const leafValues = [];

const findLeaves = (node) => {
  if (node.left === null && node.right === null) {
    leafValues.push(node.value)
  } else {
    findLeaves(node.left);
    findLeaves(node.right);
  }
  return leafValues;
}

findLeaves();
//console.log(leafValues);