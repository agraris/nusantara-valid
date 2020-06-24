import { IGetData } from "../interface/index"
import { BANK_DATA, BANKS } from "../datas/bank"

export class Bank implements IGetData {
    getData(): BankData[] {
        const banks = BANKS.map((key) => ({
            key,
            name: (BANK_DATA as any)[key].name,
        }));

        return banks
    }
}

export interface BankData {
    key: string;
    name: string;
}

const atm = new Bank()

export function getData() {
    return atm.getData()
}