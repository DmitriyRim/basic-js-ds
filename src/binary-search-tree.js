const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    if(this.root() === null) {this._root = new Node(data)};
    let nextNode = this.root();
      while(nextNode !== null){
        if(nextNode.data < data){
          nextNode = nextNode.right;
        }else if(nextNode.data > data){
          nextNode = nextNode.left;
        }else{
          break;
        }
      nextNode = new Node(data);
    }
  }

  has(data) {
    let nextNode = this.root();
    while(nextNode !== null){
      if(nextNode.data == data) {return false}
      if(nextNode.data < data){
        nextNode = nextNode.right;
      }else if(nextNode.data > data){
        nextNode = nextNode.left;
      }else{
        break;
      }
    }
    return true;
  }

  find(data) {
    let nextNode = this.root();
    while(nextNode !== null){
      if(nextNode.data == data) {return nextNode}
      if(nextNode.data < data){
        nextNode = nextNode.right;
      }else if(nextNode.data > data){
        nextNode = nextNode.left;
      }else{
        break;
      }
    }
    return true;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};