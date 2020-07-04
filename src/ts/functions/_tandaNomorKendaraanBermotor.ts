import { IValid, IGetData, IDataTNKB } from "../interface"
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

        return this.isValidTNKBArea(validTNKB[1])
    }

    isValidTNKBArea(tnkb: string): boolean {
        return this.VALID_TNKB_AREACODE.includes(tnkb)
    }

    getData(tnkb: string): IDataTNKB {
        let data = {} as IDataTNKB

        const TNKB = tnkb.toUpperCase()

        const validTNKB = TNKB_REGEX.exec(TNKB)

        if (!validTNKB) return data

        for (const key in PROVINCES_DATA) {
            if ((PROVINCES_DATA as any)[key].vehiclePlate.includes(validTNKB[1])) {
                data = {
                    areaCode: validTNKB[1],
                    index: Number(validTNKB[2]),
                    detailedAreaCode: validTNKB[3],
                    province: {
                        key: key,
                        name: (PROVINCES_DATA as any)[key].name
                    }
                }
                break
            }
        }
        
        return data
    }
}

const theTNKB = new TandaNomorKendaraanBermotor()

/**
 * TNKB validation.
 *
 * It check if the TNKB's area code is exist in VALID_TNKB_AREACODE
 *
 * @param {string} tnkb - The TNKB, the one to be validated
 * @return {boolean} Is valid or not
**/
export function isValidTNKB(tnkb: string): boolean {
    return theTNKB.isValid(tnkb)
}

/**
 * TNKB data retreiver.
 *
 * Return a set of TNKB object data from user provided tnkb
 *
 * @param {string} tnkb - The TNKB
 * @return {IDataTNKB} The TNKB data
**/
export function getDataTNKB(tnkb: string): IDataTNKB {
    return theTNKB.getData(tnkb)
}