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
 * IDataNIKExtended data interface
 *
 * @interface
**/
export interface IDataNIKExtended {
    nik: string,
    birthday: Date,
    sex: string,
    province: IDataProvince,
    regency: IDataRegency,
    district: IDataDistrict
}

/**
 * IDataNIP data interface
 *
 * @interface
**/
export interface IDataNIP {
    nip: string,
    birthday: Date,
    recruit_date: string,
    sex: string
}

/**
 * IDataProvince data interface
 *
 * @interface
**/
export interface IDataProvince {
    bpsCode: string,
    name: string
}

/**
 * IDataRegency data interface
 *
 * @interface
**/
export interface IDataRegency {
    bpsCode: string,
    name: string
}

/**
 * IDataDistrict data interface
 *
 * @interface
**/
export interface IDataDistrict {
    bpsCode: string,
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