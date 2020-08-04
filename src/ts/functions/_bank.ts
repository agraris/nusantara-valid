import { IGetData, IDataBank } from "../interface"
import { BANK_DATA, BANK_KEYS } from "../datas/bank"

/**
 * Nusantara Valid: _bank.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The Bank class
**/
class Bank implements IGetData {
    getData(index = ''): IDataBank | IDataBank[] {
        let bank

        if (index) {
            bank = {
                key: index,
                name: BANK_DATA[index].name
            }
        } else {
            bank = BANK_KEYS.map((key) => ({
                key,
                name: BANK_DATA[key].name,
            }))
        }

        return bank
    }
}

const bank = new Bank()

/**
 * Specific Bank data retreiver.
 *
 * Return a specific set of bank object data from user provided bank key
 *
 * @param {string} key - The Bank key
 * @return {IDataBank} The Bank data
**/
export function getDataBank(key: string): IDataBank {
    return bank.getData(key) as IDataBank
}

/**
 * All Bank data retreiver.
 *
 * Return all bank object data as an array
 *
 * @return {IDataBank[]} Array of Bank data
**/
export function getDataBanks(): IDataBank[] {
    return bank.getData() as IDataBank[]
}