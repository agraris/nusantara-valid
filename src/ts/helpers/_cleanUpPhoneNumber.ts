import { CELLULAR_COUNTRY_CODE } from "../datas/cellular";

/**
 * Clean up phone number from leading zero, formating, and country code.
 *
 * @param {string} number - The dirty number.
 * @param {boolean} cellular - The number type, landline number or cellular number.
 * @return {string} Clean number. Free from leading zero, formating, and country code for mobile number.
**/
export function cleanUpPhoneNumber(number: string, cellular: boolean = false): string {

    // Remove non digit character
    let num = String(number).replace(/[^\d]/g, '')

    // Remove leading zero if any
    num = num.replace(/^0+/, '')

    // Remove country code if any on cellular number
    if (cellular && num.substr(0, 2) == CELLULAR_COUNTRY_CODE.toString()) {
        num = num.substring(2)
    }

    return num;
}