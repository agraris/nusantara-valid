/**
 * Strip all non number characters
 *
 * @param {string | number} input - Input parameter. Can be string or number
 * @return {string} Clean number. Free from any non number characters.
**/
export function numbersOnly (input: string | number): string
{
    return String(input).replace(/[^\d]/g, '');
}