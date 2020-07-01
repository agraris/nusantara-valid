import { IValid } from "../interface"
import { TNKB_REGEX } from "../datas/tnkb"
import { PROVINCES_DATA } from "../datas/province"

class TandaNomorKendaraanBermotor implements IValid {
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
}

const tnkb = new TandaNomorKendaraanBermotor()

export function isValidTNKB(param: string) {
    return tnkb.isValid(param)
}