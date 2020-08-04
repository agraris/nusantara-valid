/**
 * Determines whether an array includes a certain element, returning true or false as appropriate.
 * 
 * @param {any[]} searchElement The element to search for.
 * @param {any} theElement The element we search.
 * @return {boolean} True or false
**/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function includes(searchElement: any[], theElement: string | number): boolean {
    return searchElement.indexOf(theElement) > -1
}