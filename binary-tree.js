/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // when there is no root branches at all
    if (this.root === null) return 0;

    function minDeep(node) {
      // if we have no left and right nodes we would just return 1
      // base case
      if (!node.left && !node.right) return 1;
      // if we don't have children nodes on the left
      if (!node.left && node.right) {
        return minDeep(node.right) + 1;
      }
      // if we don't have children nodes on the right
      if (node.left && !node.right) {
        return minDeep(node.left) + 1;
      }
      return (
        //in case we have both node.left and node.right
        Math.min(minDeep(node.left), minDeep(node.right)) + 1
      )
    }
    //starting point
    return minDeep(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    if (this.root === null) return 0;

    function maxDeep(node) {
      // if we have no left and right nodes we would just return 1
      // base case
      if (!node.left && !node.right) return 1;
      // if we don't have children nodes on the left
      if (!node.left && node.right) {
        return maxDeep(node.right) + 1;
      }
      // if we don't have children nodes on the right
      if (node.left && !node.right) {
        return maxDeep(node.left) + 1;
      }
      return (
        //in case we have both node.left and node.right
        Math.max(maxDeep(node.left), maxDeep(node.right)) + 1
      )
    }
    //starting point
    return maxDeep(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let max = 0;

    function maxAdd(node) {
      if (node === null) return 0;
      // get the addition on the right recursivley
      let rightAdd = maxAdd(node.right);
      // get the addition on the left recursively
      let leftAdd = maxAdd(node.left);
      // the max of the val of the node and it's left and right
      max = Math.max(max, rightAdd + leftAdd + node.val);
      return Math.max(rightAdd + node.val, leftAdd + node.val);
    }

    maxAdd(this.root);
    return max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
