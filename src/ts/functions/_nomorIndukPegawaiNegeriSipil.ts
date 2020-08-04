import { IValid, IGetData, IDataNIP } from "../interface"
import { NIP_LENGTH, NIP_REGEX } from "../datas/nip"
import { numbersOnly, correctLength, formatDate } from "../helpers"

/**
 * Nusantara Valid: _nomorIndukPegawaiNegeriSipil.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorIndukPegawaiNegeriSipil class
**/
class NomorIndukPegawaiNegeriSipil implements IValid, IGetData {
    isValid(nip: string): boolean {
        if (!nip || typeof nip !== 'string') return false

        const validNIP = NIP_REGEX.exec(numbersOnly(nip))
        
        return validNIP !== null 
            && !isNaN(formatDate(validNIP[1]).getTime()) 
            && !isNaN(formatDate(validNIP[2]).getTime()) 
            && correctLength(0, validNIP[0].length, { minLength: NIP_LENGTH })
    }

    getData(nip: string): IDataNIP {
        const data = {} as IDataNIP

        const validNIP = NIP_REGEX.exec(numbersOnly(nip))

        if (!validNIP) return data

        data.nip = validNIP[0]
        data.birthday = formatDate(validNIP[1])
        data.recruit_date = validNIP[2].substr(0, 4) + '-' + validNIP[2].substr(4, 2)
        data.sex = Number(validNIP[3]) == 1 ? 'Male' : 'Female'

        return data
    }
}

const theNIP = new NomorIndukPegawaiNegeriSipil()

/**
 * NIP validation.
 *
 * Validate NIP by validating NIP's birthday, NIP's recruitment date, and NIP's length
 *
 * @param {string} nip - The NIP to be validated
 * @return {boolean} Is valid or not
**/
export function isValidNIP(nip: string): boolean {
    return theNIP.isValid(nip)
}

/**
 * NIP data retreiver.
 *
 * Return a set of NIP object data from user provided nip
 *
 * @param {string} nip - The NIP
 * @return {IDataNIP} The NIP data
**/
export function getDataNIP(nip: string): IDataNIP {
    return theNIP.getData(nip)
}