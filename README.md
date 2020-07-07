
<p align="center">
    <img src="https://magicjar.github.io/assets/images/portfolios/nusantara-valid-logo.svg" alt="Nusantara Valid logo" width=72 height=72>
  <h1 align="center">Nusantara Valid</h1>
</p>

Nusantara Valid is a data validator to validate any Indonesian specific civil data such as nik, nip, and many more.

## Table of contents

- [What it can do?](#what-it-can-do)
- [Getting started](#getting-started)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## What it can do?

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
- Zip Code

## Getting started

There are some ways to import the package
- [Download the latest release.](https://github.com/magicjar/nusantara-valid/releases)
- Clone the repo:

    `git clone https://github.com/magicjar/nusantara-valid.git`
    
- Install with [npm](https://www.npmjs.com/):
    
    `npm install nusantara-valid`

- or CDN from [jsDelivr](https://www.jsdelivr.com)

    [https://cdn.jsdelivr.net/npm/nusantara-valid@0.1.0/dist/umd/nusantara-valid.min.js](https://cdn.jsdelivr.net/npm/nusantara-valid@0.1.0/dist/umd/nusantara-valid.min.js)

The package includes multiple formats to support different build process.
- **/cjs/nusantara-valid.js** - CommonJS module.
- **/esm/nusantara-valid.mjs** - ES module.
- **/umd/nusantara-valid.js** - UMD module. Can be used in browser with `script` tag

## Usage

### CommonJS module way (`require()`)

``` javascript
const NusantaraValid = require('nusantara-valid')
```

### ES module way (`import`)

``` javascript
import NusantaraValid from './node_modules/nusantara-valid/dist/esm/nusantara-valid.mjs'
```

### Good-old-browser-way (`<script></script>`)

**Local**

``` html
<script src="../dist/umd/nusantara-valid.min.js"></script>
```

**CDN**

``` html
<script src="https://cdn.jsdelivr.net/npm/nusantara-valid@0.1.0/dist/umd/nusantara-valid.min.js"></script>
```

## API

### ATM Number (Nomor Rekening)

``` javascript
isValidATMNumber(atm: string); // boolean
isValidATMNumber('87.800.000.00');

isValidATMNumberWithComparison(atm: string, bankKey: string); // boolean
isValidATMNumberWithComparison('1230005123000', 'MDRK');
```

### Bank

``` javascript
getDataBank(bankKey: string); // object
getDataBank('BCAK');

getDataBanks(); // array of object
```

### Cellular Number (Nomor HP)

``` javascript
isValidCellularNumber(cel: string); // boolean
isValidCellularNumber('081212341234');

isValidCellularNumberWithComparison(cel: string, providerKey: string); // boolean
isValidCellularNumberWithComparison('081212341234', 'TELKOMSEL');

// You should validate the cellular number before retriving the data
getDataCellularNumber(cel: string); // object
getDataCellularNumber('085612341234');

// You should validate the cellular number before formating
formatCellularNumber(cel: string, int:boolean = false) // string
formatCellularNumber('+6281812341234'); // 0818-1234-1234
formatCellularNumber('085612341234', true); // +62856-1234-1234
```

### Cellular Provider

``` javascript
getDataCellularProvider(key: string); // object
getDataCellularProvider('TELKOMSEL');

getDataCellularProviders(); // array of object
```

### Credit Card Number

``` javascript
isValidCCNumber(cc: string); // boolean
isValidCCNumber('4000123456789010');
isValidCCNumber('5000 1234 5678 9010');

// You should validate the CC number before formating
formatCCNumber(cc: string); // string
formatCCNumber('4000123456789010'); // 4000 1234 5678 9010
formatCCNumber('5000 1234 5678 9010'); // 5000 1234 5678 9010
```

### E-Mail

``` javascript
isValidEmail(email: string); // boolean
isValidEmail('myawesom-email@domain.tld');
```

### Nomor Induk Kependudukan (NIK)

``` javascript
isValidNIK(nik: string); // boolean
isValidNIK('3101011212930001');

isValidNIKWithComparison(nik: string, comparison: { provinceKy?: string, birthday?: string }); // boolean
isValidNIKWithComparison('3101011212930001', { provinceKey: 'JK', birthday: '1993-12-12' });
isValidNIKWithComparison('3401012012930001', { provinceKey: 'YO' });

// You should validate the NIK before retriving the data
getDataNIK(nik: string); // object
getDataNIK('3101011212930001');
```

### Nomor Induk Pegawai Negeri Sipil (NIP)

``` javascript
isValidNIP(nip: string); // boolean
isValidNIP('198512262000051001');
```

### Nomor Induk Siswa Nasional (NISN)

``` javascript
isValidNISN(nisn: string); // boolean
isValidNISN('0061230001');
```

### Nomor Pokok Wajib Pajak (NPWP)

``` javascript
isValidNPWP(npwp: string); // boolean
isValidNPWP('09.123.123.1-123.123');
isValidNPWP('091231231123123');

// You should validate the NPWP number before formating
formatNPWP(npwp: string); // string
formatNPWP('091231231123123');
```

### Province

``` javascript
getDataProvince(key: string); // object
getDataProvince('YO');

getDataProvinces(); // array of object
```

### Tanda Nomor Kendaraan Bermotor (TNKB)

``` javascript
isValidTNKB(tnkb: string); // boolean
isValidTNKB('AB1234XYZ');

// You should validate the TNKB number before retriving the data
getDataTNKB(tnkb: string); // object
getDataTNKB('AB1234XYZ');
```

### Telephone Number (Nomor Telefon)

``` javascript
isValidTelephoneNumber(tel: string); // boolean
isValidTelephoneNumber('0274123123');

// You should validate the telephone number before retriving the data
getDataTelephoneNumber(cel: string); // object
getDataTelephoneNumber('0274123123');

// You should validate the telephone number before formating
formatTelephoneNumber(tel: string, int:boolean = false) // string
formatTelephoneNumber('0274123123'); // 0274-123123
formatTelephoneNumber('0274123123', true); // +62274-123123
```

### ZIP Code (Kode POS)

``` javascript
isValidZIP(zip: string | number); // boolean
isValidZIP('55524');
isValidZIP(55524);

isValidZIPWithComparison(zip: string | number, comparison: { provinceKy?: string }); // boolean
isValidZIPWithComparison('55524', { provinceKey: 'YO' });
isValidZIPWithComparison(55524, { provinceKey: 'YO' });
```

## License

Nusantara Valid released under the [MIT License](https://github.com/magicjar/nusantara-valid/blob/master/LICENSE).