import { IDataProvince, IDataRegency, IDataDistrict } from "../../interface"
import { Province } from "../_province"
import { PROVINCE_DATA_EXTENSION } from '../../datas/extended/province.extended'

/**
 * Nusantara Valid: _province.extended.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The ProvinceExtended class
**/
class ProvinceExtended extends Province {
    getDataRegenciesInProvince(provinceKey: string): IDataRegency[] {
        const REGENCIES = PROVINCE_DATA_EXTENSION[provinceKey].regencies as []
        const regencies = REGENCIES.map(({ bpsCode, name }) => ({ bpsCode, name }))

        return regencies
    }

    getDataDistrictsInRegency(regencyKey: string): IDataDistrict[] {
        const provinceKey = regencyKey.split('.')[0]
        const REGENCIES = PROVINCE_DATA_EXTENSION[provinceKey].regencies

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