import { IDataProvince, IDataRegency, IDataDistrict } from "../../interface"
import { Province } from "../_province"
import { PROVINCE_DATA_EXTENSION } from '../../datas/extended/province.extended'
import { PROVINCE_KEYS, PROVINCE_DATA } from '../../datas/province'

/**
 * Nusantara Valid: _province.extended.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
 *
 * @class The ProvinceExtended class
**/
class ProvinceExtended extends Province {
    getDataRegenciesInProvince(provinceKey: string): IDataRegency[] {
        let regencies = [] as IDataRegency[]

        const REGENCIES = (PROVINCE_DATA_EXTENSION as any)[provinceKey].regencies
        for (const regency of REGENCIES) {
            const newRegency = {
                bpsCode: regency.bpsCode,
                name: regency.name
            }
            regencies.push(newRegency)
        }

        return regencies
    }

    getDataDistrictsInRegency(regencyKey: string): IDataDistrict[] {
        let provinceKey = ''
        const bpsCode = regencyKey.split('.')
        
        for (const key of PROVINCE_KEYS) {
            const element = (PROVINCE_DATA as any)[key]
            if (element.bpsCode == bpsCode[0]) {
                provinceKey = key
                break
            }
        }

        if (!provinceKey) return []

        const REGENCIES = (PROVINCE_DATA_EXTENSION as any)[provinceKey].regencies
        let DISTRICTS = []

        for (const element of REGENCIES) {
            if (element.bpsCode == regencyKey) {
                DISTRICTS = element.districts
            }
        }

        return DISTRICTS as IDataDistrict[]
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
 * Get all regencies in a Province
 *
 * Return an array of regencies in a Province
 *
 * @param {string} provinceKey - Key of the province
 * @return {IDataRegency[]} Array of IDataRegency object
**/
export function getDataRegenciesInProvince(provinceKey: string): IDataRegency[] {
    return prov.getDataRegenciesInProvince(provinceKey) as IDataRegency[]
}

/**
 * Get all districts in a Regency
 *
 * Return an array of districts in a Regency
 *
 * @param {string} regencyKey - Key of the regency
 * @return {IDataDistrict[]} Array of IDataDistrict object
**/
export function getDataDistrictsInRegency(regencyKey: string): IDataDistrict[] {
    return prov.getDataDistrictsInRegency(regencyKey) as IDataDistrict[]
}