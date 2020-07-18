import { IDataProvince, IDataRegency } from "../../interface"
import { Province } from "../_province"
import { PROVINCE_EXTENDED_DATA } from '../../datas/extended/province.extended'

/**
 * Nusantara Valid: _province.extended.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
 *
 * @class The ProvinceExtended class
**/
class ProvinceExtended extends Province {
    getDataRegenciesInProvince(provinceKey: string = ''): IDataRegency[] {
        let regencies = [] as IDataRegency[]

        const REGENCIES = (PROVINCE_EXTENDED_DATA as any)[provinceKey].regencies
        for (const regency of REGENCIES) {
            const newRegency = {
                key: regency.bpsCode,
                name: regency.name
            }
            regencies.push(newRegency)
        }

        return regencies
    }
}

const prov = new ProvinceExtended()

/**
 * Get specific province data with IDataProvince object structure
 *
 * Return object data based on provided province key
 *
 * @param {string} provinceKey - Array key of the province
 * @return {IDataProvince} IDataProvince object
**/
export function getDataProvince(provinceKey: string): IDataProvince {
    return prov.getData(provinceKey) as IDataProvince
}

/**
 * Get all province data with IDataProvince object structure
 *
 * Return all IDataProvince object in Array<IDataProvince>
 *
 * @return {IDataProvince[]} Array of IDataProvince object
**/
export function getDataProvinces(): IDataProvince[]{
    return prov.getData() as IDataProvince[]
}

/**
 * Get all regencies in a specific Province
 *
 * Return an array of regencies in a Province
 *
 * @param {string} provinceKey - Key of the province
 * @return {IDataRegency[]} Array of IDataRegency object
**/
export function getDataRegenciesInProvince(provinceKey: string): IDataRegency[] {
    return prov.getDataRegenciesInProvince(provinceKey) as IDataRegency[]
}