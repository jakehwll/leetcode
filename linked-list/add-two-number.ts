import { arrayToListNode } from "../utils/listnode";
import { ListNode } from "../utils/types";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const listNodeToNumber = (node: ListNode | null): number => {
    if ( !node ) return 0
    let res = ''
    while ( node && node.val ) {
      res = `${res}${node.val.toString()}`;
      node = node?.next
    }
    return parseInt(res)
  }
  const calc = listNodeToNumber(l1) + listNodeToNumber(l2)
  let res = calc.toString().split('').reverse()
  let noded: ListNode | null = null
  res.forEach((val) => {
    noded = new ListNode(parseInt(val), noded);
  });
  return noded
}

console.log(
  addTwoNumbers(
    arrayToListNode([1,2,3]),
    arrayToListNode([4,5,6])
  )
)