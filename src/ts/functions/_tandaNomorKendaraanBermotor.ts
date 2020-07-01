import { IValid, IGetData } from "../interface"
import { TNKB_REGEX } from "../datas/tnkb"
import { PROVINCES_DATA } from "../datas/province"

class TandaNomorKendaraanBermotor implements IValid, IGetData {
    VALID_TNKB_AREACODE = Object.keys(PROVINCES_DATA).reduce(
        (a, b) => a.concat((PROVINCES_DATA as any)[b].vehiclePlate), []
    ) as string[]

    isValid(tnkb: string) : boolean {
        if (!tnkb || typeof tnkb !== 'string') return false

        const TNKB = tnkb.toUpperCase()

        const validTNKB = TNKB_REGEX.exec(TNKB)

        if (!validTNKB) return false

        return this.isValidTNKBArea(validTNKB)
    }

    isValidTNKBArea(tnkb: RegExpExecArray): boolean {
        return this.VALID_TNKB_AREACODE.includes(tnkb[1])
    }

    getData(tnkb: string): TNKB {
        const validTNKB = TNKB_REGEX.exec(tnkb)

        if (validTNKB == null) 
            return {
                areaCode: '',
                index: 0,
                detailedAreaCode: ''
            }

        return {
            areaCode: validTNKB[1],
            index: Number(validTNKB[2]),
            detailedAreaCode: validTNKB[3]
        }
    }
}

interface TNKB {
    areaCode: string,
    index: number,
    detailedAreaCode: string
}

const tnkb = new TandaNomorKendaraanBermotor()

export function isValidTNKB(param: string) {
    return tnkb.isValid(param)
}

export function getTNKBData(param: string) {
    return tnkb.getData(param)
}