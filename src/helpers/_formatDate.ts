export function formatDate(date: string): Date {
    const newDate = date.replace(/(\d{4})(\d{2})(?:(\d{2})?)/, "$1-$2-$3")

    const formatedDate = new Date(newDate)

    return formatedDate
}