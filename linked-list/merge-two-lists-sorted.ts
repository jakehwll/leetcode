/**
 * broken :()
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 || !list2) {
    return list1 ?? list2;
  }

  const linkedList = new ListNode(0);
  linkedList.next = list1.val > list2.val ? list1 : list2

  let traverser: ListNode | null = list1.val > list2.val ? list1 : list2;
  let traverserClone: ListNode | null = list1.val > list2.val ? list2 : list1;

  while ( traverser ) {
    if (traverserClone && traverserClone.val >= traverser.val) {
      traverser.next = new ListNode(traverserClone.val, traverser.next)
      traverserClone = traverserClone.next
      traverser = traverser.next?.next ?? null
    } else {
      traverser = traverser.next
    }
  }

  return linkedList.next ?? null
}

// console.log(
//   mergeTwoLists(
//     new ListNode(1, new ListNode(2, new ListNode(4))),
//     new ListNode(1, new ListNode(3, new ListNode(4)))
//   )
// )
// console.log(
//   mergeTwoLists(
//     null,
//     new ListNode(1)
//   )
// )
console.log(
  mergeTwoLists(
    new ListNode(2),
    new ListNode(1)
  )
)