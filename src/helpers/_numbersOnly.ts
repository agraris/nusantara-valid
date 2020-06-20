export function numbersOnly (input: string | number): string
{
    return String(input).replace(/[^\d]/g, '');
}