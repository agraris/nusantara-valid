import { IValid, IGetData, IFormat, IDataCellularNumber } from '../interface'
import { cleanPhoneNumbers, correctLength, includes } from '../helpers'
import { CELLULAR_MIN_LENGTH, CELLULAR_MAX_LENGTH, CELLULAR_HYPEN_INDEXES, CELLULAR_PROVIDER_DATA, CELLULAR_PROVIDER_KEYS, CELLULAR_PROVIDER_PREFIXES } from '../datas/cellular'
import { COUNTRY_CODE } from '../datas/province'

/**
 * Nusantara Valid: _cellularNumber.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The CellularNumber class
**/
class CellularNumber implements IValid, IGetData, IFormat {
    isValid(mobile: string, providerKey = ''): boolean {
        if (!mobile || typeof mobile !== 'string') return false

        const cleanCellularNumber = cleanPhoneNumbers(mobile, { cellular: true, countryCode: COUNTRY_CODE})
        
        let prefixCollection
        providerKey ? prefixCollection = CELLULAR_PROVIDER_DATA[providerKey].prefix : prefixCollection = CELLULAR_PROVIDER_PREFIXES
        
        return correctLength(1, cleanCellularNumber.length, { minLength: CELLULAR_MIN_LENGTH, maxLength: CELLULAR_MAX_LENGTH }) 
            && includes(prefixCollection, Number(cleanCellularNumber.substr(0, 3)))
    }

    getData(mobile: string): IDataCellularNumber {
        const data = {} as IDataCellularNumber

        data.number = this.format(mobile)

        const pfx = Number(cleanPhoneNumbers(mobile, { cellular: true, countryCode: COUNTRY_CODE }).substr(0, 3))
        
        for (const key of CELLULAR_PROVIDER_KEYS) {
            const cellProvider = CELLULAR_PROVIDER_DATA[key]
            if (includes(cellProvider.prefix, pfx)) {
                data.provider = {
                    key: key,
                    name: cellProvider.name
                }
                break
            }
        }

        return data
    }

    format(input: string, int = false): string {
        const cleanCelNumber = cleanPhoneNumbers(input, { cellular: true, countryCode: COUNTRY_CODE })

        const formatedNumber = cleanCelNumber
            .slice(0, cleanCelNumber.length)
            .split('')
            .reduce((a, b, index) => {
                const result = `${a}${b}`;

                if (!(index === cleanCelNumber.length - 1)) {
                    if (includes(CELLULAR_HYPEN_INDEXES, index)) return `${result}-`;
                }

                return result;
            }, '');

        return int ? '+' + COUNTRY_CODE.toString() + formatedNumber : '0' + formatedNumber
    }
}

const cellularNumber = new CellularNumber()

/**
 * Cellular number validation
 *
 * It will validate cellular number based on it's prefix and length
 *
 * @param {string} number - The cellular number to be validated
 * @return {boolean} Is valid or not
**/
export function isValidCellularNumber(number: string): boolean {
    return cellularNumber.isValid(number)
}

/**
 * Cellular number validation with comparison
 *
 * It will validate cellular number based on user provided data
 *
 * @param {string} number - The cellular number to be validated
 * @param {string} providerKey - The cellular provider key
 * @return {boolean} Is valid or not
**/
export function isValidCellularNumberWithComparison(number: string, providerKey: string): boolean {
    return cellularNumber.isValid(number, providerKey)
}

/**
 * Cellular number data getter
 *
 * Return object data based on provided cellular number
 *
 * @param {string} number - The cellular number
 * @return {object} IDataCellularNumber object
**/
export function getDataCellularNumber(number: string): IDataCellularNumber {
    return cellularNumber.getData(number)
}

/**
 * Cellular number formating
 *
 * Format cellular number to local calling format (0) and international calling format (+XX)
 *
 * @param {string} number - The cellular number to be formated
 * @param {boolean} int - Local calling format (leading zero) or international calling format (leading country code)
 * @return {string} Formated number
**/
export function formatCellularNumber(number: string, int = false): string {
    return cellularNumber.format(number, int)
}