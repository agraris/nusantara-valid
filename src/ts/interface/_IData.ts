/**
 * IDataBank data interface
 *
 * @interface
**/
export interface IDataBank {
    key: string,
    name: string
}

/**
 * IDataCellularNumber data interface
 *
 * @interface
**/
export interface IDataCellularNumber {
    number: string,
    provider: IDataCellularProvider
}

/**
 * IDataCellularProvider data interface
 *
 * @interface
**/
export interface IDataCellularProvider {
    key: string,
    name: string
}

/**
 * IDataNIK data interface
 *
 * @interface
**/
export interface IDataNIK {
    nik: string,
    birthday: Date,
    sex: string,
    province: IDataProvince
}

/**
 * IDataProvince data interface
 *
 * @interface
**/
export interface IDataProvince {
    key: string,
    name: string
}

/**
 * IDataTelephoneNumber data interface
 *
 * @interface
**/
export interface IDataTelephoneNumber {
    number: string,
    origin: IDataProvince
}

/**
 * IDataTNKB data interface
 *
 * @interface
**/
export interface IDataTNKB {
    areaCode: string,
    index: number,
    detailedAreaCode: string,
    province: IDataProvince
}