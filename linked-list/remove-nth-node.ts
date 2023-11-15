class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const linkedList = new ListNode(0);
  linkedList.next = head

  let traverser = head;
  let size = 0;

  while ( traverser ) {
    traverser = traverser.next
    size = size + 1
  }

  traverser = linkedList;

  for (let i = 0; i < (size - n); i++) {
    const next: ListNode | null | undefined = traverser?.next;
    if ( next ) {
      traverser = next
    }
  }

  traverser.next = traverser.next?.next ?? null;

  return linkedList.next ?? null
}

console.log(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))), 2))
console.log(removeNthFromEnd(new ListNode(1), 1))