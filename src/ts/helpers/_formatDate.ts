import { numbersOnly } from './_numbersOnly'

/**
 * Format date from string
 *
 * @param {string} date - The string date in YYYYMMDD format
 * @return {Date} Formated date.
**/
export function formatDate(date: string): Date {
    const numOnly = numbersOnly(date)

    const newDate = numOnly.replace(/(\d{4})(?:(\d{2})?)(?:(\d{2})?)/, "$1-$2-$3")

    const formatedDate = new Date(newDate)

    return formatedDate
}