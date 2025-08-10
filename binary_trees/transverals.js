// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;  // Left child
    this.right = null; // Right child
  }
}

// Example: Creating a small binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

function inOrder(node){
    if(node === null){
        return;
    }
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
}

function preOrder(node){
    if(node === null){
        return;
    }
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
}

function postOrder(node){
    if(node === null){
        return;
    }
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
}
preOrder(root);
console.log('----------------------------');
inOrder(root);
console.log('----------------------------');
postOrder(root);