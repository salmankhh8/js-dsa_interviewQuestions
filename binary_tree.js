// binary search tree => divide and concuor

const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == num) {
      return true;
    } else if (arr[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 8));

const inorder = () => {
  let node = new Node(0);
  return node.lastChild;
};

console.log(inorder());

class Node{
  constructor(data){
    this.data= data;
    this.left=null;
    this.right=null;
  }
}

class BinaryTree{
  constructor(){
    this.root=null;
  }
  insert(data){
    let node= new Node(data);
    if(this.root==null){
      this.root = node;
    }
    else{
      this.insertNode(this.root, node)
    }
  }
  insertNode(root, newNode) {
    if(newNode.data< root.data){}
  }
}