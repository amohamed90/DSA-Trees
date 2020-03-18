/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // if root is empty
    if (!this.root) return 0;
    //placeholder for the total sum.
    let sum = this.root.val;
    // we need to loop to get all the children values
    function sumRecursive(node) {
      for (let child of node.children) {
        sum += child.val;
        if (child.children.length > 0) {
          sumRecursive(child);
        }
      }
    }
    sumRecursive(this.root);
    return sum;
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // if root is empty
    if (!this.root) return 0;

    let count = 0;
    if (this.root.val % 2 === 0) count = 1;

    function countEvenRecursive(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) count++;
        if (child.children.length > 0) {
          countEvenRecursive(child);
        }
      }
    }
    countEvenRecursive(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = 0;
    if (this.root.val > lowerBound) count = 1;

    function numGreaterRecursive(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) count++;
        if (child.children.length > 0) {
          numGreaterRecursive(child);
        }
      }
    }
    numGreaterRecursive(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };