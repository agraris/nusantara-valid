import { IGetData, IDataProvince } from "../interface"
import { PROVINCES, PROVINCES_DATA } from "../datas/province";

class Province implements IGetData {
    getData(index: string = ''): IDataProvince | IDataProvince[] {
        if (index == '') {
            const provinces = PROVINCES.map((key) => ({
                key,
                name: (PROVINCES_DATA as any)[key].name,
            }))

            return provinces
        }

        const province = {
            key: index,
            name: (PROVINCES_DATA as any)[index].name
        }

        return province
    }
}

const atm = new Province()

export function getDataProvince(param: string) {
    return atm.getData(param) as IDataProvince
}

export function getDataProvinces() {
    return atm.getData() as IDataProvince[]
}