import { IGetData } from "../interface"
import { BANK_DATA, BANKS } from "../datas/bank"

class Bank implements IGetData {
    getData(): BankData[] {
        const banks = BANKS.map((key) => ({
            key,
            name: (BANK_DATA as any)[key].name,
        }));

        return banks
    }
}

interface BankData {
    key: string;
    name: string;
}

const atm = new Bank()

export function getBankData() {
    return atm.getData()
}