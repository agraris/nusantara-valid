/**
 * Generate an array of number from start to stop.
 *
 * @param {number} start - First number of a range
 * @param {number} stop - Last number of a range
 * @return {number[]} Range array
**/
export const range = (start: number, stop: number): number[] => {
    let numbers = [] as number[]

    for (let i = start; i <= stop; i++)
        numbers = numbers.concat(i)

    return numbers
}