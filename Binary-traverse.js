class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
    constructor(){
   this.root = null;     
    }
    insert(data){
        let node= new Node(data);
        if(this.root == null){
            this.root= node;
        }
        else{
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, newNode) {
      if(newNode.data< root.data){
        if(root.left==null){
            root.left = newNode
        }
        else{
            this.insertNode(root.left, newNode)
        }
      } 
      else if(newNode.data> root.data){
        if(root.right==null){
            root.right== newNode
        }
        else{
            this.insertNode(root.right, newNode)
        }
      } 

    }

    getRootNode(){
        return this.root;
    }

    // traversal

    preOrder(root){
        if(root!==null){
            console.log(root.data);// 1=> it will explore the parent
            this.preOrder(root.left)//2=> it will explore the left child
            this.preOrder(root.right)//3=> it will explore the right child
        }
    }
    inOrder(root){
        if(root!==null){
        this.inOrder(root.left)// first line
        console.log(root.data);// second line
        this.inOrder(root.right)// third line
        }
    }

    postOrder(root) {
        if(root!==null){
            this.inOrder(root.left)// first line
            this.inOrder(root.right)// second line
            console.log(root.data);
        }
    }
}

var bst = new BinarySearchTree()

bst.insert(5)
bst.insert(3)
bst.insert(1)
bst.insert(6)
bst.insert(4)
var root= bst.getRootNode();

console.log('preorder');
bst.preOrder(root)

console.log('inorder');
bst.inOrder(root)

console.log('postorder');
bst.postOrder(root)