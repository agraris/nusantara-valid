import { IValid, IValidLength } from "../interface"
import { PROVINCES_DATA } from "../datas/province"

class ZIPCode implements IValid, IValidLength {
    VALID_ZIPCODE = Object.keys(PROVINCES_DATA).reduce(
        (a, b) => a.concat((PROVINCES_DATA as any)[b].zipCode), []
    ) as any[]

    isValid(zip: string | number): boolean {
        if (!zip) return false

        const sZIP = zip.toString()

        return this.isValidLength(sZIP) && this.isValidZIPCode(sZIP)
    }

    isValidLength(zip: string): boolean {
        return zip.length == 5
    }

    isValidZIPCode(zip: string): boolean {
        for (let val of this.VALID_ZIPCODE) {
            if (val.from <= zip && val.to <= zip) {
                return true
            } 
        }

        return false
    }
}

const zip = new ZIPCode()

export function isValidZIP(param: string | number) {
    return zip.isValid(param)
}
