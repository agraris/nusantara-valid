import { IGetData, IDataCellularProvider } from '../interface'
import { CELLULAR_PROVIDER_KEYS, CELLULAR_PROVIDER_DATA } from '../datas/cellular'

/**
 * Nusantara Valid: _cellularProvider.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The CellularProvider class
**/
class CellularProvider implements IGetData {
    getData(index = ''): IDataCellularProvider | IDataCellularProvider[] {
        let providers

        if (index) {
            providers = {
                key: index,
                name: CELLULAR_PROVIDER_DATA[index].name
            }
        } else {
            providers = CELLULAR_PROVIDER_KEYS.map((key) => ({
                key,
                name: CELLULAR_PROVIDER_DATA[key].name,
            }))
        }

        return providers
    }
}

const isp = new CellularProvider()

/**
 * Get specific cellular provider data with IDataCellularProvider object structure
 *
 * Return object data based on provided cellular provider key
 *
 * @param {string} providerKey - The provider key
 * @return {IDataCellularProvider} IDataCellularProvider object
**/
export function getDataCellularProvider(providerKey: string): IDataCellularProvider {
    return isp.getData(providerKey) as IDataCellularProvider
}

/**
 * Get all cellular provider data with IDataCellularProvider object structure
 *
 * Return all IDataCellularProvider object in Array<IDataCellularProvider>
 *
 * @return {IDataCellularProvider[]} Array of IDataCellularProvider object
**/
export function getDataCellularProviders(): IDataCellularProvider[] {
    return isp.getData() as IDataCellularProvider[]
}