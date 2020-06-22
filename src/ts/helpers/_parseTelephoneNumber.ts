export function parseTelephoneAreaCode (input: string | number): string
{
    const number = String(input).replace(/[^\d]/g, '');
    let newNumber = number

    if (number.charAt(0) != '0')
        newNumber = '0' + number

    return newNumber
}