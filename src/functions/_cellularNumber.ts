import { IValid } from '../interface'
import { parseCellularPrefix } from '../helpers'
import { CELLULAR_NUMBER, CELLULAR_MIN_LENGTH, CELLULAR_MAX_LENGTH } from '../datas/cellular'

export class MobileNumber implements IValid {

    VALID_CELLULAR_PREFIX = Object.keys(CELLULAR_NUMBER).reduce(
        (a, b) => a.concat((CELLULAR_NUMBER as any)[b].prefix), []
    ) as number[]

    isValid(mobile: string): boolean {
        if (!mobile || typeof mobile !== 'string') return false

        const parsedCellularNumber = parseCellularPrefix(mobile)

        // Return true if isValidLength and isValidCellularPrefix all true
        return this.isValidLength(parsedCellularNumber) && this.isValidCellularPrefix(parsedCellularNumber)
    }

    isValidCellularPrefix(parsedCellularNumber: string): boolean {
        return this.VALID_CELLULAR_PREFIX.includes(Number(parsedCellularNumber.substr(2, 3)))
    }

    isValidLength(phone: string): boolean {        
        return phone.length >= CELLULAR_MIN_LENGTH && phone.length <= CELLULAR_MAX_LENGTH
    }
}

const mobileNumber = new MobileNumber()

export function isValid(param: string) {
    return mobileNumber.isValid(param)
}