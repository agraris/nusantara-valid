import { CELLULAR_COUNTRY_CODE } from "../datas/cellular"

export function parseCellularPrefix(input: string | number): string {
    // +62xxx => 62xxx
    const number = String(input).replace(/[^\d]/g, '');
    let newNumber = ""

    // 0xxx => 62xxx
    if (number.charAt(0) == '0')
        newNumber = number.replace('0', CELLULAR_COUNTRY_CODE.toString())
        
    return newNumber;
}