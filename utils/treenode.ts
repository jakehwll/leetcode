export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

export const arrayToTreeNode = (array: any[]): TreeNode => {
  const root = new TreeNode(array[0])
  const queue = [root]
  let i = 1
  while ( i < array.length ) {
    const node = queue.shift()
    if ( array[i] !== null ) {
      if ( !node ) throw new Error(':(')
      node.left = new TreeNode(array[i])
      queue.push(node.left)
    }
    i++
    if ( array[i] !== null ) {
      if (!node) throw new Error(":(");
      node.right = new TreeNode(array[i])
      queue.push(node.right)
    }
    i++
  }
  return root
};