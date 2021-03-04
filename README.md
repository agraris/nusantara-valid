[![npm version](https://img.shields.io/npm/v/nusantara-valid.svg)](https://www.npmjs.com/package/nusantara-valid)
[![Coverage Status](https://img.shields.io/coveralls/github/agraris/nusantara-valid/master)](https://coveralls.io/github/agraris/nusantara-valid?branch=master)
[![JS gzip size](https://img.badgesize.io/agraris/nusantara-valid/master/dist/umd/nusantara-valid.min.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/agraris/nusantara-valid/tree/master/dist/umd/nusantara-valid.min.js)
[![Extended JS gzip size](https://img.badgesize.io/agraris/nusantara-valid/master/dist/umd/nusantara-valid.extended.min.js?compression=gzip&label=Extended%20JS%20gzip%20size)](https://github.com/agraris/nusantara-valid/tree/master/dist/umd/nusantara-valid.extended.min.js)
[![Code license](https://img.shields.io/github/license/agraris/nusantara-valid)](#license)
</br>
</br>
<p align="center">
    <img src="https://magicjar.github.io/assets/images/portfolios/nusantara-valid-logo.svg" alt="Nusantara Valid logo" width=72 height=72>
  <h1 align="center" style="font-weight: bold">Nusantara Valid</h1>
</p>

Nusantara Valid is a data validator to validate any Indonesian specific civil data such as nik, nip, and many more.

*Baca petunjuk berbahasa [Indonesia](README_id.md)*

## **Table of contents**

- [What it can do?](#what-it-can-do)
- [Getting started](#getting-started)
- [What's included](#whats-included)
- [Usage](#usage)
- [API](#api)
- [API (Extended Only)](#api-extended-only)
- [License](#license)

## **What it can do?**

- ATM Number (Nomor Rekening)
- Cellular Number / Mobile Number
- Credit Card Number
- E-Mail
- NIK (Nomor Induk Kependudukan)
- NIP (Nomor Induk Pegawai Negeri Sipil)
- NISN (Nomor Induk Siswa Nasional)
- NPWP (Nomor Pokok Wajib Pajak)
- TNKB (Tanda Nomor Kendaraan Bermotor)
- Telephon Number
- ZIP Code (Kode Pos)

## **Getting started**

There are some ways to import the package
- [Download the latest release.](https://github.com/agraris/nusantara-valid/releases)
- Clone the repo:

    `git clone https://github.com/agraris/nusantara-valid.git`
    
- Install with [npm](https://www.npmjs.com/):
    
    `npm install nusantara-valid`

- CDN from [jsDelivr](https://www.jsdelivr.com)

    [https://cdn.jsdelivr.net/npm/nusantara-valid@0.4.0/dist/umd/nusantara-valid.min.js](https://cdn.jsdelivr.net/npm/nusantara-valid@0.4.0/dist/umd/nusantara-valid.min.js)

## **What's included**

The package includes multiple formats to support different build process.
- **/cjs/nusantara-valid.js** - CommonJS module.
- **/esm/nusantara-valid.js** - ES module.
- **/umd/nusantara-valid.js** - UMD module. Can be used in browser with `script` tag

We provide compiled JS (`nusantara-valid.js`), as well as compiled and minified JS (`nusantara-valid.min.js`) in each module. Extended JS files (`nusantara-valid.extended.js` and minified `nusantara-valid.extended.min.js`) include additional PROVINCE_DATA such as regencies and districts also some additional verification process.

### Folder structure

```
nusantara-valid/
└── dist/
    ├── cjs/
    │   ├── nusantara-valid.extended.js
    │   ├── nusantara-valid.extended.js.map
    │   ├── nusantara-valid.extended.min.js
    │   ├── nusantara-valid.extended.min.js.map
    │   ├── nusantara-valid.js
    │   ├── nusantara-valid.js.map
    │   ├── nusantara-valid.min.js
    │   └── nusantara-valid.min.js.map
    ├── esm/
    │   ├── nusantara-valid.extended.js
    │   ├── nusantara-valid.extended.js.map
    │   ├── nusantara-valid.extended.min.js
    │   ├── nusantara-valid.extended.min.js.map
    │   ├── nusantara-valid.js
    │   ├── nusantara-valid.js.map
    │   ├── nusantara-valid.min.js
    │   └── nusantara-valid.min.js.map
    └── umd/
        ├── nusantara-valid.extended.js
        ├── nusantara-valid.extended.js.map
        ├── nusantara-valid.extended.min.js
        ├── nusantara-valid.extended.min.js.map
        ├── nusantara-valid.js
        ├── nusantara-valid.js.map
        ├── nusantara-valid.min.js
        └── nusantara-valid.min.js.map
```

## **Usage**

### CommonJS module way (`require()`)

``` javascript
const NusantaraValid = require('nusantara-valid')
```

### ES module way (`import`)

``` javascript
import NusantaraValid from './node_modules/nusantara-valid/dist/esm/nusantara-valid.js'
```

### Good-old-browser-way (`<script></script>`)

**Local**

``` html
<script src="../dist/umd/nusantara-valid.min.js"></script>
```

**CDN**

``` html
<script src="https://cdn.jsdelivr.net/npm/nusantara-valid@0.4.0/dist/umd/nusantara-valid.min.js"></script>
```

## **API**

<table><tbody><tr><td><details><summary><b>ATM Number (Nomor Rekening)</b>

``` javascript
isValidATMNumber(atm: string);

isValidATMNumberWithComparison(atm: string, bankKey: string);
```
</summary>
Result:

``` javascript
isValidATMNumber('87.800.000.00');
// true

isValidATMNumberWithComparison('1230005123000', 'MDRK');
// true
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>Bank</b>

``` javascript
getDataBank(bankKey: string);

getDataBanks();
```
</summary>

Result:
``` javascript
getDataBank('BCAK');
// { key: 'BCAK', name: 'Bank Central Asia' }

getDataBanks();
// [
//     { key: 'BCAK', name: 'Bank Central Asia' },
//     { key: 'BCAS', name: 'Bank Central Asia Syariah' },
//     { key: 'BNIK', name: 'Bank Negara Indonesia' },
//     ...
// ]
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>Cellular Number (Nomor HP)</b>

``` javascript
isValidCellularNumber(cel: string);

isValidCellularNumberWithComparison(cel: string, providerKey: string);

getDataCellularNumber(cel: string);

formatCellularNumber(cel: string, int:boolean = false)
```
</summary>

Result:
``` javascript
isValidCellularNumber('081212341234');
// true

isValidCellularNumberWithComparison('081212341234', 'TELKOMSEL');
// true

getDataCellularNumber('085612341234');
// {
//     "number": "0856-1234-1234",
//     "provider": {
//         "key": "INDOSAT",
//         "name": "Indosat Ooredoo"
//     }
// }

formatCellularNumber('+6281812341234');
// '0818-1234-1234'
formatCellularNumber('085612341234', true);
// '+62856-1234-1234'
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>Cellular Provider</b>

``` javascript
getDataCellularProvider(key: string);

getDataCellularProviders();
```
</summary>

Result:
``` javascript
getDataCellularProvider('TELKOMSEL');
// { "key": "TELKOMSEL", "name": "Telkomsel" }

getDataCellularProviders();
// [
//     { key: 'TELKOMSEL', name: 'Telkomsel' },
//     { key: 'INDOSAT', name: 'Indosat Ooredoo' },
//     { key: 'XL', name: 'XL Axiata' },
//     ...
// ]
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>Credit Card Number</b>

``` javascript
isValidCCNumber(cc: string);

formatCCNumber(cc: string);
```
</summary>

Result:
``` javascript
isValidCCNumber('4000123456789010');
// true
isValidCCNumber('5000 1234 5678 9010');
// true

formatCCNumber('4000123456789010');
// '4000 1234 5678 9010'
formatCCNumber('5000 1234 5678 9010');
// '5000 1234 5678 9010'
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>E-Mail</b>

``` javascript
isValidEmail(email: string);
```
</summary>

Result:
``` javascript
isValidEmail('myawesom-email@domain.tld');
// true
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>Nomor Induk Kependudukan (NIK)</b>

``` javascript
isValidNIK(nik: string);

isValidNIKWithComparison(nik: string, comparison: { provinceKy?: string, birthday?: string });

getDataNIK(nik: string);
```
</summary>

Result:
``` javascript
isValidNIK('3101011212930001');
// true

isValidNIKWithComparison('3101011212930001', { provinceKey: '31', birthday: '1993-12-12' });
// true

getDataNIK('3101011212930001');
// {
//     nik: '3101011212930001',
//     birthday: 2006-12-20T00:00:00.000Z,
//     sex: 'Male',
//     province: {
//         key: '31',
//         name: 'Jakarta'
//     }
// }
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>Nomor Induk Pegawai Negeri Sipil (NIP)</b>

``` javascript
isValidNIP(nip: string);
```
</summary>

Result:
``` javascript
isValidNIP('198512262000051001');
// true
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>Nomor Induk Siswa Nasional (NISN)</b>

``` javascript
isValidNISN(nisn: string);
```
</summary>

Result:
``` javascript
isValidNISN('0061230001');
// true
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>Nomor Pokok Wajib Pajak (NPWP)</b>

``` javascript
isValidNPWP(npwp: string);

formatNPWP(npwp: string);
```
</summary>

Result:
``` javascript
isValidNPWP('09.123.123.1-123.123');
// true
isValidNPWP('091231231123123');
// true

formatNPWP('091231231123123');
// '09.123.123.1-123.123'
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>Province</b>

``` javascript
getDataProvince(key: string);

getDataProvinces();
```
</summary>

Result:
``` javascript
getDataProvince('34');
// { key: '34', name: 'Yogyakarta' }

getDataProvinces();
// [
//     { bpsCode: '11', name: 'Aceh' },
//     { bpsCode: '12', name: 'Sumatra Utara' },
//     { bpsCode: '13', name: 'Sumatra Barat' },
//     ...
// ]
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>Tanda Nomor Kendaraan Bermotor (TNKB)</b>

``` javascript
isValidTNKB(tnkb: string);

getDataTNKB(tnkb: string);
```
</summary>

Result:
``` javascript
isValidTNKB('AB1234XYZ');
// true

getDataTNKB('AB1234XYZ');
// {
//     areaCode: 'AB',
//     index: 1234,
//     detailedAreaCode: 'XYZ',
//     province: {
//         key: '34',
//         name: 'Yogyakarta'
//     }
// }
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>Telephone Number (Nomor Telefon)</b>

``` javascript
isValidTelephoneNumber(tel: string);

getDataTelephoneNumber(cel: string);

formatTelephoneNumber(tel: string, int:boolean = false)
```
</summary>

Result:
``` javascript
isValidTelephoneNumber('0274123123');
// true

getDataTelephoneNumber('0274123123');
// {
//     "number": "0274-123123",
//     "origin": {
//         "key": "34",
//         "name": "Yogyakarta"
//     }
// }

formatTelephoneNumber('0274123123');
// '0274-123123'
formatTelephoneNumber('0274123123', true);
// '+62274-123123'
```
</details></td></tr></tbody></table>

<table><tbody><tr><td><details><summary><b>ZIP Code (Kode POS)</b>

``` javascript
isValidZIP(zip: string | number);

isValidZIPWithComparison(zip: string | number, comparison: { provinceKy?: string });
```
</summary>

Result:
``` javascript
isValidZIP('55264');
// true
isValidZIP(55264);
// true

isValidZIPWithComparison('55264', { provinceKey: '34' });
// true
isValidZIPWithComparison(55264, { provinceKey: '34' });
// true
```
</details></td></tr></tbody></table>

## **API (Extended Only)**

<table><tbody><tr><td><details><summary><b>Province</b>

``` javascript
getDataRegenciesInProvince(provinceBPSCode: string);

getDataDistrictsInRegency(regencyBPSCode: string);
```
</summary>

Result:
``` javascript
getDataRegenciesInProvince('31'); // Regencies and City (Kabupaten dan Kota) in Jakarta
// [
//   { bpsCode: '31.01', name: 'Kepulauan Seribu' },
//   { bpsCode: '31.71', name: 'Jakarta Pusat' },
//   { bpsCode: '31.72', name: 'Jakarta Utara' },
//   ...
// ]

getDataDistrictsInRegency('31.71'); // Districts (Kecamatan) in Jakarta Pusat
// [
//   { name: 'Gambir', bpsCode: '31.71.01' },
//   { name: 'Sawah Besar', bpsCode: '31.71.02' },
//   { name: 'Kemayoran', bpsCode: '31.71.03' },
//   ...
// ]
```
</details></td></tr></tbody></table>

## **License**

Copyright (c) 2020 - Fajar Setya Budi.

Nusantara Valid released under the [MIT License](https://github.com/agraris/nusantara-valid/blob/master/LICENSE).