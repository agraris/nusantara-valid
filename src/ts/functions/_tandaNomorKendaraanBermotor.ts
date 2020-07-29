import { IValid, IGetData, IDataTNKB } from "../interface"
import { TNKB_REGEX } from "../datas/tnkb"
import { PROVINCE_DATA, PROVINCE_KEYS } from "../datas/province"
import { includes } from '../helpers'

/**
 * Nusantara Valid: _tandaNomorKendaraanBermotor.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The TandaNomorKendaraanBermotor class
**/
class TandaNomorKendaraanBermotor implements IValid, IGetData {

    VALID_TNKB_AREACODE = PROVINCE_KEYS.reduce(
        (a, b) => a.concat(PROVINCE_DATA[b].vehiclePlate), []
    ) as string[]

    isValid(tnkb: string) : boolean {
        if (!tnkb || typeof tnkb !== 'string') return false

        const TNKB = tnkb.toUpperCase()

        const validTNKB = TNKB_REGEX.exec(TNKB)

        return validTNKB !== null
            && this.isValidTNKBArea(validTNKB[1])
    }

    isValidTNKBArea(tnkb: string): boolean {
        return includes(this.VALID_TNKB_AREACODE, tnkb)
    }

    getData(tnkb: string): IDataTNKB {
        let data = {} as IDataTNKB

        const TNKB = tnkb.toUpperCase()

        const validTNKB = TNKB_REGEX.exec(TNKB)

        if (!validTNKB) return data

        for (const key of PROVINCE_KEYS) {
            const element = PROVINCE_DATA[key]
            if (includes(element.vehiclePlate, validTNKB[1])) {
                data = {
                    areaCode: validTNKB[1],
                    index: Number(validTNKB[2]),
                    detailedAreaCode: validTNKB[3],
                    province: {
                        bpsCode: key,
                        name: element.name
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