import { TreeNode, arrayToTreeNode } from "../utils/treenode";

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = []

  const walk = (node: TreeNode) => {
    if ( node.left?.val && node.right?.val ) {
      res.push([ node.left.val, node.right.val ])
      walk(node.left);
      walk(node.right)
    }
    else if ( node.left?.val ) {
      res.push([ node.left?.val ])
      walk(node.left)
    }
    else if (node.right?.val) {
      res.push([node.right?.val]);
      walk(node.right);
    }
  }

  if (root?.val) {
    res.push([root.val]);
    walk(root);
  }

  return res
};

// console.log(levelOrder(arrayToTreeNode([3, 9, 20, null, null, 15, 7])));
console.log(levelOrder(arrayToTreeNode([1, 2])));