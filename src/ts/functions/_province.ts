import { IGetData } from "../interface"
import { PROVINCES, PROVINCES_DATA } from "../datas/province";

class Province implements IGetData {
    getData(): Prov[] {
        const provinces = PROVINCES.map((key) => ({
            key,
            name: (PROVINCES_DATA as any)[key].name,
        }))

        return provinces
    }
}

interface Prov {
    key: string;
    name: string;
}

const atm = new Province()

export function getProvinceData() {
    return atm.getData()
}