export interface IDataBank {
    key: string,
    name: string
}

export interface IDataCellularProvider {
    key: string,
    name: string
}

export interface IDataProvince {
    key: string,
    name: string
}

export interface IDataTNKB {
    areaCode: string,
    index: number,
    detailedAreaCode: string,
    province: IDataProvince
}