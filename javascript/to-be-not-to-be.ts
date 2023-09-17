type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (compare: any) => {
      return val === compare;
    },
    notToBe: (compare: any) => {
      return val !== compare;
    },
  };
}
