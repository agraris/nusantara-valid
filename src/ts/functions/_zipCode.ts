import { IValid } from "../interface"
import { PROVINCES_DATA } from "../datas/province"
import { correctLength } from '../helpers'

class ZIPCode implements IValid {
    VALID_ZIPCODE = Object.keys(PROVINCES_DATA).reduce(
        (a, b) => a.concat((PROVINCES_DATA as any)[b].zipCode), []
    ) as any[]

    isValid(zip: string | number): boolean {
        if (!zip) return false

        const sZIP = zip.toString()

        return this.isValidZIPCode(sZIP) && correctLength(0, sZIP.length, { minLength: 5 })
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
