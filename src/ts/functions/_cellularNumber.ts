import { IValid, IGetData, IFormat, IDataCellularProvider, IDataCellularNumber } from '../interface'
import { cleanUpPhoneNumber, correctLength } from '../helpers'
import { CELLULAR_NUMBER, CELLULAR_MIN_LENGTH, CELLULAR_MAX_LENGTH } from '../datas/cellular'
import { COUNTRY_CODE } from '../datas/province'

class CellularNumber implements IValid, IGetData, IFormat {

    VALID_CELLULAR_PREFIX = Object.keys(CELLULAR_NUMBER).reduce(
        (a, b) => a.concat((CELLULAR_NUMBER as any)[b].prefix), []
    ) as number[]

    isValid(mobile: string): boolean {
        if (!mobile || typeof mobile !== 'string') return false

        const cleanCellularNumber = cleanUpPhoneNumber(mobile, true)

        return correctLength(1, cleanCellularNumber.length, { minLength: CELLULAR_MIN_LENGTH, maxLength: CELLULAR_MAX_LENGTH }) && this.isValidCellularPrefix(cleanCellularNumber)
    }

    isValidCellularPrefix(cellularNumber: string): boolean {
        return this.VALID_CELLULAR_PREFIX.includes(Number(cellularNumber.substr(0, 3)))
    }

    getData(mobile: string): IDataCellularNumber {
        let data = {} as IDataCellularNumber

        data.number = this.format(mobile)

        const cleanNumber = cleanUpPhoneNumber(mobile, true)

        const pfx = Number(cleanNumber.substr(0, 3))
        
        for (const key in CELLULAR_NUMBER) {
            if ((CELLULAR_NUMBER as any)[key].prefix.includes(pfx)) {
                data.provider = {
                    key: key,
                    name: (CELLULAR_NUMBER as any)[key].name
                }
                break
            }
        }

        return data
    }

    format(input: string, int: boolean = false): string {
        const cleanCelNumber = cleanUpPhoneNumber(input, true)
        let CEL_HYPEN_INDEX = [2, 6]

        let formatedNumber = cleanCelNumber
            .slice(0, cleanCelNumber.length)
            .split('')
            .reduce((a, b, index) => {
                const result = `${a}${b}`;

                if (!(index === cleanCelNumber.length - 1)) {
                    if (CEL_HYPEN_INDEX.includes(index)) return `${result}-`;
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