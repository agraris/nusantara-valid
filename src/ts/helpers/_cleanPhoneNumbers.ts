/**
 * Clean up phone number from leading zero, formating, and country code.
 *
 * @param {string} number - The dirty number.
 * @param {object} type - The number type, landline number or cellular number and the country code.
 * @return {string} Clean number. Free from leading zero, formating, and country code for mobile number.
**/
export function cleanPhoneNumbers(number: string, type: { cellular?: boolean, countryCode?: number } = {} ): string {
    const { cellular = false, countryCode = 0} = type

    let num = String(number).replace(/[^\d]/g, '').replace(/^0+/, '')

    if (cellular && (Number(num.substr(0, 2)) === countryCode))
        num = num.substring(2)

    return num;
}