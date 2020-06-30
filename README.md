# Nusantara Valid

Nusantara Valid is a data validator to validate any Indonesian specific civil data such as nik, nip, and many more.

## Table of contents

- [What it can do?](#what-it-can-do)
- [Getting started](#getting-started)
- [Usage](#usage)
- [API](#api)
- [Creators](#creators)
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
- **/umd/nusantara-valid.js** - UMD module. Can be used with good-usual-way `script` tag

## Usage

### CommonJS module way (`require()`)
``` javascript
const NusantaraValid = require('nusantara-valid')
```

### ES module way (`import`)
``` javascript
import NusantaraValid from './node_modules/nusantara-valid/dist/esm/nusantara-valid.mjs'
```

### Good-usual-way (`<script></script>`)

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
isValidATMNumber(rek: string, bank?: string);
isValidATMNumber('87.800.000.00');
isValidATMNumber('1230005123000', 'MDRK');
```

### Bank
``` javascript
getBankData();
```

### Cellular Number (Nomor HP)
``` javascript
isValidCellularNumber(cel: string);
isValidCellularNumber('081212341234');

getCellularProviderData(cel: string);
getCellularProviderData('085612341234');
```

### Credit Card Number
``` javascript
isValidCCNumber(cc: string);
isValidCCNumber('4000123456789010');
isValidCCNumber('5000 1234 5678 9010');

formatCCNumber(cc: string);
formatCCNumber('4000123456789010');
formatCCNumber('5000 1234 5678 9010');
```

### E-Mail
``` javascript
isValidEmail(email: string);
isValidEmail('myawesom-email@domain.tld');
```

### Nomor Induk Kependudukan (NIK)
``` javascript
isValidNIK(nik: string | number);
isValidNIK('3101011212930001');
isValidNIK(3101011212930001);
```

### Nomor Induk Pegawai Negeri Sipil (NIP)
``` javascript
isValidNIP(nip: string);
isValidNIP('198512262000051001');
```

### Nomor Induk Siswa Nasional (NISN)
``` javascript
isValidNISN(nisn: string);
isValidNISN('0061230001');
```

### Nomor Pokok Wajib Pajak (NPWP)
``` javascript
isValidNPWP(npwp: string);
isValidNPWP('09.123.123.1-123.123');
isValidNPWP('091231231123123');

formatNPWP(npwp: string | number, pad?: true); // xx.xxx.xxx.x-xxx.xxx
formatNPWP('091231231123123');
formatNPWP(671231231123123, false);
```

### Province
``` javascript
getProvinceData();
```

### Tanda Nomor Kendaraan Bermotor (TNKB)
``` javascript
isValidTNKB(tnkb: string);
isValidTNKB('AB1234XYZ');
```

### Telephone Number (Nomor Telefon)
``` javascript
isValidTelephoneNumber(tel: string);
isValidTelephoneNumber('0274123123');
```

### ZIP Code (Kode POS)
``` javascript
isValidZIP(zip: string | number);
isValidZIP('55524');
isValidZIP(55524);
```

## Creators

**Fajar Setya Budi**

- <https://github.com/magicjar>

## License

Nusantara Valid released under the [MIT License](https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)