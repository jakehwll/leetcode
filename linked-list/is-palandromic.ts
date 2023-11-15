import { ListNode } from "../utils/types";

function isPalindrome(head: ListNode | null): boolean {
  if (head?.next === null) return true

  let ittr: ListNode | null = head
  const output: number[] = []
  let isPalindromic = false

  while ( ittr && ittr.val !== null ) {
    output.push(ittr.val)
    ittr = ittr.next
  }

  const start = output.slice(0, Math.floor(output.length / 2));
  const end = output
    .slice(Math.ceil(output.length / 2), output.length + 1)
    .reverse();

  return start.every((element, index) => element === end[index]);
}

// console.log(true, isPalindrome(arrayToListNode([1])))
// console.log(true, isPalindrome(arrayToListNode([1, 2, 2, 1])));
// console.log(false, isPalindrome(arrayToListNode([1, 2])));
// console.log(true, isPalindrome(arrayToListNode([0, 0])));
// console.log(true, isPalindrome(arrayToListNode([1, 0, 1])));