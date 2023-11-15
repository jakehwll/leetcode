import { ListNode } from "../utils/types";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let curr1 = list1
  let curr2 = list2
  let arr: number[] = []
  let res: ListNode | null = null

  while (curr1 && curr1.val !== null) {
    arr.push(curr1.val);
    curr1 = curr1.next;
  }
  while (curr2 && curr2.val !== null) {
    arr.push(curr2.val);
    curr2 = curr2.next;
  }

  arr = arr
    .sort((a, b) => a - b)
    .reverse();
  arr.forEach((val) => {
    res = new ListNode(val, res);
  });

  return res
}