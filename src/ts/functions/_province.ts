import { IGetData, IDataProvince } from "../interface"
import { PROVINCE_DATA, PROVINCE_KEYS } from "../datas/province";

/**
 * Nusantara Valid: _province.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
 *
 * @class The Province class
**/
class Province implements IGetData {
    getData(index: string = ''): IDataProvince | IDataProvince[] {
        if (index == '') {
            const provinces = PROVINCE_KEYS.map((key) => ({
                key,
                name: (PROVINCE_DATA as any)[key].name,
            }))

            return provinces
        }

        const province = {
            key: index,
            name: (PROVINCE_DATA as any)[index].name
        }

        return province
    }
}

const prov = new Province()

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