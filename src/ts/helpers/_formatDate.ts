import { numbersOnly } from './_numbersOnly'

/**
 * Format date from string
 *
 * @param {string} date - The string date in YYYYMMDD format
 * @return {Date} Formated date.
**/
export function formatDate(date: string): Date {
    return new Date(numbersOnly(date).replace(/(\d{4})(?:(\d{2})?)(?:(\d{2})?)/, "$1-$2-$3"))
}