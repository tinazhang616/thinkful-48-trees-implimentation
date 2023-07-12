class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key,value) {
    // your solution here
    if(this.key){
      if(key<this.key){
        if(this.left===null){
          this.left = new BinarySearchTree(key,value,this)
        }
        else{
          this.left.insert(key,value)
        }
      }else if(key>this.key){
        if(this.right===null){
          this.right = new BinarySearchTree(key,value,this)

        }else{
          this.right.insert(key,value)
        }
      }
    }else{
      this.key=key
      this.value=value
    }

  }

  find(key) {
    // your solution here
    if(this.key===key){
      return this
    }
    else if(this.key>key&&this.left){
      return this.left.find(key)
    }
    else if(this.key<key&&this.right){
      return this.right.find(key)
    }else{
      throw new Error("Key not Found");
    }
  }

  remove(key) {
    // your solution here
    if(this.key===key){
      if(this.left&&this.right){
        let successor = this.right._findMin()
        this.key=successor.key
        this.value=successor.value
        successor.remove(successor.key)

      }
      else if(this.left){
        this._replaceWith(this.left)
      }
      else if(this.right){
        this._replaceWith(this.right)
      }
      else{
        this._replaceWith(null)
      }
    }
    else if(this.key>key&&this.left){
      this.left.remove(key)
    }
    else if(this.key<key&&this.right){
      this.right.remove(key)
    }
    else{
      throw new Error("key not Found")
    }

  }
  _replaceWith(node){
    if(this.parent){
      if(this==this.parent.right){
        this.parent.right=node
      }
      else if(this==this.parent.left){
        this.parent.left=node
      }
      if(node){
        node.parent=this.parent
      }
    }
    else{
      if(node){
        this.key=node.key
        this.value=node.value
        this.left=node.left
        this.right=node.right
      }
      else{
        this.key=null
        this.value=null
        this.left=null
        this.right=null
      }
    }
  }
  _findMin(){
    if(!this.left){
      return this
    }
    return this.left._findMin();
  }
}


module.exports = BinarySearchTree;
