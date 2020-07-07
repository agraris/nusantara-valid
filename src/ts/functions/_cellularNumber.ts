import { IValid, IGetData, IFormat, IDataCellularNumber } from '../interface'
import { cleanPhoneNumbers, correctLength, includes } from '../helpers'
import { CELLULAR_MIN_LENGTH, CELLULAR_MAX_LENGTH, CELLULAR_HYPEN_INDEXES, CELLULAR_PROVIDER_DATA, CELLULAR_PROVIDER_KEYS } from '../datas/cellular'
import { COUNTRY_CODE } from '../datas/province'

/**
 * Nusantara Valid: _cellularNumber.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
 *
 * @class The CellularNumber class
**/
class CellularNumber implements IValid, IGetData, IFormat {

    CELLULAR_PROVIDER_PREFIXES = CELLULAR_PROVIDER_KEYS.reduce(
        (a, b) => a.concat((CELLULAR_PROVIDER_DATA as any)[b].prefix), []
    ) as number[]

    isValid(mobile: string, providerKey: string = ''): boolean {
        if (!mobile || typeof mobile !== 'string') return false

        let prefixCollection

        const cleanCellularNumber = cleanPhoneNumbers(mobile, { cellular: true, countryCode: COUNTRY_CODE})

        const validLength = correctLength(1, cleanCellularNumber.length, { minLength: CELLULAR_MIN_LENGTH, maxLength: CELLULAR_MAX_LENGTH })        

        if (providerKey) prefixCollection = (CELLULAR_PROVIDER_DATA as any)[providerKey].prefix
        else prefixCollection = this.CELLULAR_PROVIDER_PREFIXES
        
        return validLength && this.isValidCellularProviderPrefix(Number(cleanCellularNumber.substr(0, 3)), prefixCollection)
    }

    isValidCellularProviderPrefix(prefix: number, prefixCollection: number[]): boolean {
        return includes(prefixCollection, prefix)
    }

    getData(mobile: string): IDataCellularNumber {
        let data = {} as IDataCellularNumber

        data.number = this.format(mobile)

        const pfx = Number(cleanPhoneNumbers(mobile, { cellular: true, countryCode: COUNTRY_CODE }).substr(0, 3))
        
        for (const key of CELLULAR_PROVIDER_KEYS) {
            const cellProvider = (CELLULAR_PROVIDER_DATA as any)[key]
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

    format(input: string, int: boolean = false): string {
        const cleanCelNumber = cleanPhoneNumbers(input, { cellular: true, countryCode: COUNTRY_CODE })

        let formatedNumber = cleanCelNumber
            .slice(0, cleanCelNumber.length)
            .split('')
            .reduce((a, b, index) => {
                const result = `${a}${b}`;

                if (!(index === cleanCelNumber.length - 1)) {
                    if (includes(CELLULAR_HYPEN_INDEXES, index)) return `${result}-`;
                }

                return result;
            }, '');

        if (int) return '+' + COUNTRY_CODE.toString() + formatedNumber

        return '0' + formatedNumber
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
export function formatCellularNumber(number: string, int: boolean = false): string {
    return cellularNumber.format(number, int)
}