import { CELLULAR_COUNTRY_CODE } from "../datas/cellular"

export function parseCellularPrefix(input: string | number): string {
    // Remove non digit character
    let num = String(input).replace(/[^\d]/g, '')

    // Remove leading zero if any
    num = num.replace(/^0+/, '')

    // Remove country code if any
    if (num.substr(0, 2) == CELLULAR_COUNTRY_CODE.toString())
    {
        num = num.substring(2)
    }

    return num;
}