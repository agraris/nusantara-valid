export function parseTelephoneAreaCode (input: string | number): string
{
    let num = String(input).replace(/[^\d]/g, '');

    num = num.replace(/^0+/, '')

    return num
}