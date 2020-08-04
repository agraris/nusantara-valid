import { IValid, IFormat, IGetData, IDataTelephoneNumber } from "../interface";
import { PROVINCE_DATA, COUNTRY_CODE, PROVINCE_KEYS } from "../datas/province"
import { cleanPhoneNumbers, includes } from "../helpers";

/**
 * Nusantara Valid: _telephoneNumber.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The TelephoneNumber class
**/
class TelephoneNumber implements IValid, IFormat, IGetData {

    VALID_TELEPHONE_AREACODE = PROVINCE_KEYS.reduce(
        (a, b) => a.concat(PROVINCE_DATA[b].tel), []
    ) as number[]

    isValid(tel: string): boolean {
        if (!tel || typeof tel !== 'string') return false

        const cleanTelNumber = cleanPhoneNumbers(tel)

        return !isNaN(this.isValidCellularPrefix(cleanTelNumber))
    }

    isValidCellularPrefix(parsedTel: string): number {
        let thePrefix = Number(parsedTel.substr(0, 2))

        if (includes(this.VALID_TELEPHONE_AREACODE, thePrefix))
            return thePrefix

        thePrefix = Number(parsedTel.substr(0, 3))

        if (includes(this.VALID_TELEPHONE_AREACODE, thePrefix))
            return thePrefix

        return NaN
    }
    
    getData(tel: string): IDataTelephoneNumber {
        const data = {} as IDataTelephoneNumber

        const cleanTelNumber = cleanPhoneNumbers(tel)

        data.number = this.format(cleanTelNumber)

        const pfx = this.isValidCellularPrefix(cleanTelNumber)

        for (const key of PROVINCE_KEYS) {
            const element = PROVINCE_DATA[key]
            if (includes(element.tel, pfx)) {
                data.origin = {
                    bpsCode: key,
                    name: element.name
                }
                break
            }
        }

        return data
    }

    format(tel: string, int = false): string {
        const cleanTelNumber = cleanPhoneNumbers(tel)
        const pfx = this.isValidCellularPrefix(cleanTelNumber).toString()

        let TEL_HYPEN_INDEX = [] as Array<number>

        if (pfx.length === 2)
            TEL_HYPEN_INDEX = [1]
        else
            TEL_HYPEN_INDEX = [2]

        const formatedNumber = cleanTelNumber
            .slice(0, cleanTelNumber.length)
            .split('')
            .reduce((a, b, index) => {
                const result = `${a}${b}`;

                if (!(index === cleanTelNumber.length - 1)) {
                    if (includes(TEL_HYPEN_INDEX, index)) return `${result}-`;
                }

                return result;
            }, '');

        return int ? '+' + COUNTRY_CODE + formatedNumber : '0' + formatedNumber
    }
}

const telNumber = new TelephoneNumber()

/**
 * Telephone number validation
 *
 * It will validate telephone number based on it's prefix
 *
 * @param {string} number - The telephone number to be validated
 * @return {boolean} Is valid or not
**/
export function isValidTelephoneNumber(number: string): boolean {
    return telNumber.isValid(number)
}

/**
 * Telephone number data getter
 *
 * Return object data based on provided telephone number
 *
 * @param {string} number - The telephone number
 * @return {object} IDataTelephoneNumber object
**/
export function getDataTelephoneNumber(number: string): IDataTelephoneNumber {
    return telNumber.getData(number)
}

/**
 * Telephone number formating
 *
 * Format telephone number to local calling format (0) and international calling format (+XX)
 *
 * @param {string} number - The telephone number to be formated
 * @param {boolean} int - Local calling format (leading zero) or international calling format (leading country code)
 * @return {string} Formated number
**/
export function formatTelephoneNumber(number: string, int = false): string {
    return telNumber.format(number, int)
}