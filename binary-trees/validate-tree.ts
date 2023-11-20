import { TreeNode, arrayToTreeNode } from "../utils/treenode";

function isValidBST(root: TreeNode | null): boolean {
  let valid = true

  const walk = (node: TreeNode | null, used: number[]) => {
    if ( !node ) return
    console.log('walking ', node.val, '-', 'left', node.left?.val, 'right', node.right?.val, 'used', used)
    if ( node.left ) {
      if (node.val <= node.left.val) {
        valid = false
      };
      for (let index = 0; index < used.length; index++) {
        const checkedVal = used[index]
        if ( checkedVal <= node.left.val ) {
          console.log('history - invalid because', checkedVal, '<=', node.left.val)
          valid = false
        }
      }
      walk(node.left, [...used, node.val])
    }
    if ( node.right ) {
      if (node.val >= node.right.val) {
        valid = false
      };
      for (let index = 0; index < used.length; index++) {
        const checkedVal = used[index];
        if (checkedVal >= node.right.val) {
          console.log("history - invalid because", checkedVal, ">=", node.right.val);
          valid = false;
        }
      }
      walk(node.right, [...used, node.val]);
    }
  }

  walk(
    root, 
    [
      ...(root !== null ? [ root.val ] : [])
    ]
  );

  return valid
};

// console.log(isValidBST(arrayToTreeNode([2, 1, 3])));
// console.log(isValidBST(arrayToTreeNode([5, 1, 4, null, null, 3, 6])));
// console.log(false, isValidBST(arrayToTreeNode([5, 4, 6, null, null, 3, 7])));
console.log(true, isValidBST(arrayToTreeNode([3, 1, 5, 0, 2, 4, 6])));