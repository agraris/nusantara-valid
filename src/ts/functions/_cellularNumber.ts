import { IValid, IValidLength, IGetData, IFormat } from '../interface/index'
import { cleanUpPhoneNumber } from '../helpers/index'
import { CELLULAR_NUMBER, CELLULAR_MIN_LENGTH, CELLULAR_MAX_LENGTH } from '../datas/cellular'
import { COUNTRY_CODE } from '../datas/province'

export class MobileNumber implements IValid, IValidLength, IGetData, IFormat {

    VALID_CELLULAR_PREFIX = Object.keys(CELLULAR_NUMBER).reduce(
        (a, b) => a.concat((CELLULAR_NUMBER as any)[b].prefix), []
    ) as number[]

    isValid(mobile: string): boolean {
        if (!mobile || typeof mobile !== 'string') return false

        const cleanCellularNumber = cleanUpPhoneNumber(mobile, true)

        return this.isValidLength(cleanCellularNumber) && this.isValidCellularPrefix(cleanCellularNumber)
    }

    isValidCellularPrefix(cellularNumber: string): boolean {
        return this.VALID_CELLULAR_PREFIX.includes(Number(cellularNumber.substr(0, 3)))
    }

    isValidLength(phone: string): boolean {        
        return phone.length >= CELLULAR_MIN_LENGTH && phone.length <= CELLULAR_MAX_LENGTH
    }

    getData(mobile: string): object | undefined {
        if (!isValid(mobile)) return {}

        const cleanCellularNumber = cleanUpPhoneNumber(mobile, true)

        const pfx = Number(cleanCellularNumber.substr(0, 3))
        
        for (const key in CELLULAR_NUMBER) {
            if ((CELLULAR_NUMBER as any)[key].prefix.includes(pfx)) {
                return (CELLULAR_NUMBER as any)[key]
            }
        }
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

const mobileNumber = new MobileNumber()

export function isValid(param: string) {
    return mobileNumber.isValid(param)
}

export function getData(param: string) {
    return mobileNumber.getData(param)
}

export function format(param: string, int: boolean = false) {
    return mobileNumber.format(param, int)
}