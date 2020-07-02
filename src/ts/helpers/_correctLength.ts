/**
 * Check the length
 *
 * @param {number} mode - 0 = exact, 1 = between, 2 = includes
 * @param {number} length - The length
 * @param {object} options - The options to be checking with { collection: Array of numbers, minLength: The minimum length, maxLength: The maximum length }
 * @return {boolean} Correct or not
**/
export function correctLength(mode: number, length: number, options: { collection?: number[], minLength?: number, maxLength?: number }): boolean {
    const { collection = [], minLength = 0, maxLength = 0 } = options

    switch (mode) {
        case 0:
            return length == minLength
        case 1:
            return length >= minLength && length <= maxLength
        case 2:
            return collection.includes(length)
        default:
            return false
    }
}