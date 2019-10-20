// Given the root of a binary tree, find the maximum average value of any subtree of that tree.
// (A subtree of a tree is any node of that tree plus all its descendants. The average value of a tree is the sum of its values, divided by the number of nodes.)
//
// Example 1:
//
//   5
//  / \
// 6   1
//
// Input: [5,6,1]
// Output: 6.00000
// Explanation:
// For the node with value = 5 we have an average of (5 + 6 + 1) / 3 = 4.
// For the node with value = 6 we have an average of 6 / 1 = 6.
// For the node with value = 1 we have an average of 1 / 1 = 1.
// So the answer is 6 which is the maximum.
//
// Note:
//
// The number of nodes in the tree is between 1 and 5000.
// Each node will have a value between 0 and 100000.
// Answers will be accepted as correct if they are within 10^-5 of the correct answer.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/** Post-order traversal, DFS */
function maximumAverageSubtree(root) {
  function go(node) {
    if (node == null) return { sum: 0, count: 0, maxAvg: 0 };

    const l = go(node.left);
    const r = go(node.right);

    const sum = l.sum + r.sum + node.val;
    const count = l.count + r.count + 1;
    const maxAvg = Math.max(l.maxAvg, r.maxAvg, sum  / count);

    return { sum, count, maxAvg };
  }

  return go(root).maxAvg;
}
