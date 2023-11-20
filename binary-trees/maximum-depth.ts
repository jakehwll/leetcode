import { TreeNode } from "../utils/treenode";

function maxDepth(root: TreeNode | null): number {
  var length = 0
  
  const walk = (node: TreeNode | null, len: number) => {
    if ( !node ) return
    const newLength = len + 1
    walk(node.left, newLength);
    walk(node.right, newLength);
    length = Math.max(length, newLength)
  }

  walk(root, 0)

  return length
};