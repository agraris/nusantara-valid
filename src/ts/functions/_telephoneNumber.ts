import { IValid, IFormat } from "../interface";
import { PROVINCES_DATA, COUNTRY_CODE } from "../datas/province"
import { cleanUpPhoneNumber } from "../helpers";

class TelephoneNumber implements IValid, IFormat {

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

export function isValidTelephoneNumber(param: string) {
    return telNumber.isValid(param)
}

export function formatTelephoneNumber(param: string, int:boolean = false) {
    return telNumber.format(param, int)
}