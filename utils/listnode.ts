import { ListNode } from "./types"

export const arrayToListNode = (array: any[]): ListNode => {
  const arr = array.reverse()
  const ittr = null
  let res: ListNode | null = null

  arr.forEach((val) => {
    res = new ListNode(val, res)
  })

  if ( res !== null ) {
    return res
  } else {
    console.error(res)
    throw new Error('invalid res')
  }
}