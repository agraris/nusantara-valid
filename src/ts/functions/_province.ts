import { IGetData } from "../interface/index"
import { PROVINCES, PROVINCES_DATA } from "../datas/province";

export class Province implements IGetData {
    getData(): Prov[] {
        const provinces = PROVINCES.map((key) => ({
            key,
            name: (PROVINCES_DATA as any)[key].name,
        }))

        return provinces
    }
}

export interface Prov {
    key: string;
    name: string;
}

const atm = new Province()

export function getData() {
    return atm.getData()
}