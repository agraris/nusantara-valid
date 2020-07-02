import { IGetData, IDataBank } from "../interface"
import { BANK_DATA, BANKS } from "../datas/bank"

class Bank implements IGetData {
    getData(index: string = ''): IDataBank | IDataBank[] {
        let bank

        if (index) {
            bank = {
                key: index,
                name: (BANK_DATA as any)[index].name
            }

            return bank
        }

        bank = BANKS.map((key) => ({
            key,
            name: (BANK_DATA as any)[key].name,
        }))

        return bank
    }
}

const atm = new Bank()

export function getDataBank(param: string) {
    return atm.getData(param) as IDataBank
}

export function getDataBanks() {
    return atm.getData() as IDataBank[]
}