import { IValid, IFormat, IGetData, IDataTelephoneNumber } from "../interface";
import { PROVINCES_DATA, COUNTRY_CODE } from "../datas/province"
import { cleanUpPhoneNumber } from "../helpers";

/**
 * Nusantara Valid: _telephoneNumber.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
 *
 * @class The TelephoneNumber class
**/
class TelephoneNumber implements IValid, IFormat, IGetData {

    VALID_TELEPHONE_AREACODE = Object.keys(PROVINCES_DATA).reduce(
        (a, b) => a.concat((PROVINCES_DATA as any)[b].tel), []
    ) as number[]

    isValid(tel: string): boolean {
        if (!tel || typeof tel !== 'string') return false

        const cleanTelNumber = cleanUpPhoneNumber(tel)

        return this.isValidCellularPrefix(cleanTelNumber)
    }

    isValidCellularPrefix(parsedTel: string): boolean {
        return this.VALID_TELEPHONE_AREACODE.includes(Number(parsedTel.substr(0, 2))) || this.VALID_TELEPHONE_AREACODE.includes(Number(parsedTel.substr(0, 3)))
    }
    
    getData(tel: string): IDataTelephoneNumber {
        let data = {} as IDataTelephoneNumber

        const cleanTelNumber = cleanUpPhoneNumber(tel)

        let pfx = Number(cleanTelNumber.substr(0, 2))

        if (!this.VALID_TELEPHONE_AREACODE.includes(pfx)) {
            pfx = Number(cleanTelNumber.substr(0, 3))
        }

        data.number = this.format(cleanTelNumber)

        for (const key in PROVINCES_DATA) {
            if ((PROVINCES_DATA as any)[key].tel.includes(pfx)) {
                data.origin = {
                    key: key,
                    name: (PROVINCES_DATA as any)[key].name
                }
                break
            }
        }

        return data
    }

    format(tel: string, int:boolean = false): string {
        const cleanTelNumber = cleanUpPhoneNumber(tel)
        let TEL_HYPEN_INDEX = [] as any

        if (this.VALID_TELEPHONE_AREACODE.includes(Number(cleanTelNumber.substr(0, 2)))) {
            TEL_HYPEN_INDEX = [1]
        }
        else if (this.VALID_TELEPHONE_AREACODE.includes(Number(cleanTelNumber.substr(0, 3)))) {
            TEL_HYPEN_INDEX = [2]
        }
        else
            return ''

        let formatedNumber = cleanTelNumber
            .slice(0, cleanTelNumber.length)
            .split('')
            .reduce((a, b, index) => {
                const result = `${a}${b}`;

                if (!(index === cleanTelNumber.length - 1)) {
                    if (TEL_HYPEN_INDEX.includes(index)) return `${result}-`;
                }

                return result;
            }, '');

        if (int) return '+' + COUNTRY_CODE.toString() + formatedNumber

        return '0' + formatedNumber
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
export function formatTelephoneNumber(number: string, int:boolean = false): string {
    return telNumber.format(number, int)
}