import { numbersOnly } from "./index"

export function parseTelephoneAreaCode (input: string | number): string
{
    const number = numbersOnly(input)
    let newNumber = ""

    if (number.charAt(0) != '0')
        newNumber = '0' + number

    return newNumber
}