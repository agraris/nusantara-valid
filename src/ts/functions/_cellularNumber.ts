import { IValid, IValidLength, IGetData } from '../interface/index'
import { cleanUpPhoneNumber } from '../helpers/index'
import { CELLULAR_NUMBER, CELLULAR_MIN_LENGTH, CELLULAR_MAX_LENGTH } from '../datas/cellular'

export class MobileNumber implements IValid, IValidLength, IGetData {

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
}

const mobileNumber = new MobileNumber()

export function isValid(param: string) {
    return mobileNumber.isValid(param)
}

export function getData(param: string) {
    return mobileNumber.getData(param)
}