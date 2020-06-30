import { IValid } from "../interface/index";
import { PROVINCES_DATA } from "../datas/province"
import { cleanUpPhoneNumber } from "../helpers/index";

export class TelephoneNumber implements IValid {

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
}

const telNumber = new TelephoneNumber()

export function isValid(param: string) {
    return telNumber.isValid(param)
}