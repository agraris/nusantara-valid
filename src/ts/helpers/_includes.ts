/**
 * Determines whether an array includes a certain element, returning true or false as appropriate.
 * 
 * @param {any[]} searchElement The element to search for.
 * @param {any} theElement The element we search.
 * @return {boolean} True or false
**/
export function includes(searchElement: any[], theElement: any): boolean {
    return searchElement.indexOf(theElement) > -1
}