/*!
  * Nusantara Valid v0.4.0
  * Copyright 2020 - Fajar Setya Budi (https://magicjar.github.io)
  * Contributors (https://github.com/agraris/nusantara-valid/graphs/contributors)
  * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
  */
/**
 * Strip all non number characters
 *
 * @param {string | number} input - Input parameter. Can be string or number
 * @return {string} Clean number. Free from any non number characters.
**/
function numbersOnly(input) {
    return String(input).replace(/[^\d]/g, '');
}

/**
 * Clean up phone number from leading zero, formating, and country code.
 *
 * @param {string} number - The dirty number.
 * @param {object} type - The number type, landline number or cellular number and the country code.
 * @return {string} Clean number. Free from leading zero, formating, and country code for mobile number.
**/
function cleanPhoneNumbers(number, type) {
    if (type === void 0) { type = {}; }
    var _a = type.cellular, cellular = _a === void 0 ? false : _a, _b = type.countryCode, countryCode = _b === void 0 ? 0 : _b;
    var num = String(number).replace(/[^\d]/g, '').replace(/^0+/, '');
    if (cellular && (Number(num.substr(0, 2)) === countryCode))
        num = num.substring(2);
    return num;
}

/**
 * Check the length
 *
 * @param {number} mode - 0 = exact, 1 = between, 2 = includes
 * @param {number} length - The length
 * @param {object} options - The options to be checking with { collection: Array of numbers, minLength: The minimum length, maxLength: The maximum length }
 * @return {boolean} Correct or not
**/
function correctLength(mode, length, options) {
    var _a = options.collection, collection = _a === void 0 ? [] : _a, _b = options.minLength, minLength = _b === void 0 ? 0 : _b, _c = options.maxLength, maxLength = _c === void 0 ? 0 : _c;
    switch (mode) {
        case 0:
            return length == minLength;
        case 1:
            return length >= minLength && length <= maxLength;
        case 2:
            return collection.includes(length);
        default:
            return false;
    }
}

/**
 * Format date from string
 *
 * @param {string} date - The string date in YYYYMMDD format
 * @return {Date} Formated date.
**/
function formatDate(date) {
    return new Date(numbersOnly(date).replace(/(\d{4})(?:(\d{2})?)(?:(\d{2})?)/, "$1-$2-$3"));
}

/**
 * Determines whether an array includes a certain element, returning true or false as appropriate.
 *
 * @param {any[]} searchElement The element to search for.
 * @param {any} theElement The element we search.
 * @return {boolean} True or false
**/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function includes(searchElement, theElement) {
    return searchElement.indexOf(theElement) > -1;
}

/**
 * Generate an array of number from start to stop.
 *
 * @param {number} start - First number of a range
 * @param {number} stop - Last number of a range
 * @return {number[]} Range array
**/
var range = function (start, stop) {
    var numbers = [];
    for (var i = start; i <= stop; i++)
        numbers = numbers.concat(i);
    return numbers;
};

/**
 * Nusantara Valid: bank.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/
/**
 * BANK_DATA
 *
 * List of bank in Indonesia.
**/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var BANK_DATA = {
    BCAK: {
        name: 'Bank Central Asia',
        digits: 10,
        dotIndex: [2, 5]
    },
    BCAS: {
        name: 'Bank Central Asia Syariah',
        digits: 10,
        dotIndex: [2, 5]
    },
    BNIK: {
        name: 'Bank Negara Indonesia',
        digits: 10,
        dotIndex: [2, 5]
    },
    BNIS: {
        name: 'Bank Negara Indonesia Syariah',
        digits: 10,
        dotIndex: [2, 5]
    },
    BRIK: {
        name: 'Bank Rakyat Indonesia',
        digits: 15,
        dotIndex: [2, 5, 8, 11]
    },
    BRIS: {
        name: 'Bank Rakyat Indonesia Syariah',
        digits: 10,
        dotIndex: [2, 5]
    },
    BTNK: {
        name: 'Bank Tabungan Negara',
        digits: 16,
        dotIndex: []
    },
    BTNS: {
        name: 'Bank Tabungan Negara Syariah',
        digits: 10,
        dotIndex: []
    },
    BTPK: {
        name: 'Bank Tabungan Pensiunan Nasional',
        digits: 11,
        dotIndex: []
    },
    BTPS: {
        name: 'Bank Tabungan Pensiunan Nasional Syariah',
        digits: 10,
        dotIndex: []
    },
    BUKK: {
        name: 'Bank Bukopin',
        digits: 10,
        dotIndex: []
    },
    BUKS: {
        name: 'Bank Bukopin Syariah',
        digits: 10,
        dotIndex: []
    },
    CMBK: {
        name: 'Bank CIMB Niaga',
        digits: 13,
        dotIndex: []
    },
    CMBS: {
        name: 'Bank CIMB Niaga Syariah',
        digits: 13,
        dotIndex: []
    },
    DNMK: {
        name: 'Bank Danamon',
        digits: 10,
        dotIndex: []
    },
    DNMS: {
        name: 'Bank Danamon Syariah',
        digits: 10,
        dotIndex: []
    },
    MDRK: {
        name: 'Bank Mandiri',
        digits: 13,
        dotIndex: [2, 5, 8]
    },
    MDRS: {
        name: 'Bank Mandiri Syariah',
        digits: 10,
        dotIndex: [2, 5]
    },
    MGAK: {
        name: 'Bank Mega',
        digits: 15,
        dotIndex: []
    },
    MGAS: {
        name: 'Bank Mega Syariah',
        digits: 10,
        dotIndex: []
    },
    MUAM: {
        name: 'Bank Muamalat',
        digits: 10,
        dotIndex: []
    },
    PMTK: {
        name: 'Bank Permata',
        digits: 10,
        dotIndex: []
    },
    PMTS: {
        name: 'Bank Permata Syariah',
        digits: 10,
        dotIndex: []
    },
    PNBK: {
        name: 'Panin Bank',
        digits: 10,
        dotIndex: []
    },
    PNBS: {
        name: 'Panin Bank Syariah',
        digits: 10,
        dotIndex: []
    },
};
/**
 * BANK_KEYS
 *
 * List of bank object keys.
**/
var BANK_KEYS = Object.keys(BANK_DATA);
/**
 * BANK_NUMBER_LENGTHS
 *
 * List of bank's number (ATM number) length.
**/
var BANK_NUMBER_LENGTHS = BANK_KEYS.reduce(function (pref, curr) { return includes(pref, BANK_DATA[curr].digits) ? pref : pref.concat(BANK_DATA[curr].digits); }, []);

/**
 * Nusantara Valid: _atmNumber.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The ATMNumber class
**/
var ATMNumber = /** @class */ (function () {
    function ATMNumber() {
    }
    ATMNumber.prototype.isValid = function (atm, bank) {
        if (bank === void 0) { bank = ''; }
        if (!atm || typeof atm !== 'string')
            return false;
        var numOnly = numbersOnly(atm);
        return bank ? correctLength(0, numOnly.length, { minLength: BANK_DATA[bank].digits }) : correctLength(2, numOnly.length, { collection: BANK_NUMBER_LENGTHS });
    };
    return ATMNumber;
}());
var theATM = new ATMNumber();
/**
 * ATM number validation without comparison with bank
 *
 * It will validate ATM number based on it's length
 *
 * @param {string} atm - The atm number to be validated
 * @return {boolean} Is valid or not
**/
function isValidATMNumber(atm) {
    return theATM.isValid(atm);
}
/**
 * ATM number validation with comparison with bank
 *
 * It will validate ATM number based on it's length and specific Bank's length
 *
 * @param {string} atm - The atm number to be validated
 * @param {string} key - The bank key
 * @return {boolean} Is valid or not
**/
function isValidATMNumberWithComparison(atm, key) {
    if (!key)
        return false;
    return theATM.isValid(atm, key);
}

/**
 * Nusantara Valid: _bank.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The Bank class
**/
var Bank = /** @class */ (function () {
    function Bank() {
    }
    Bank.prototype.getData = function (index) {
        if (index === void 0) { index = ''; }
        var bank;
        if (index) {
            bank = {
                key: index,
                name: BANK_DATA[index].name
            };
        }
        else {
            bank = BANK_KEYS.map(function (key) { return ({
                key: key,
                name: BANK_DATA[key].name,
            }); });
        }
        return bank;
    };
    return Bank;
}());
var bank = new Bank();
/**
 * Specific Bank data retreiver.
 *
 * Return a specific set of bank object data from user provided bank key
 *
 * @param {string} key - The Bank key
 * @return {IDataBank} The Bank data
**/
function getDataBank(key) {
    return bank.getData(key);
}
/**
 * All Bank data retreiver.
 *
 * Return all bank object data as an array
 *
 * @return {IDataBank[]} Array of Bank data
**/
function getDataBanks() {
    return bank.getData();
}

/**
 * Nusantara Valid: cellular.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/
/**
 * CELLULAR_PROVIDER_DATA
 *
 * List cellular provider in Indonesia
**/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var CELLULAR_PROVIDER_DATA = {
    TELKOMSEL: {
        name: 'Telkomsel',
        prefix: range(811, 813).concat(range(821, 823)).concat(range(851, 853)),
    },
    INDOSAT: {
        name: 'Indosat Ooredoo',
        prefix: range(814, 816).concat(range(855, 858)),
    },
    XL: {
        name: 'XL Axiata',
        prefix: range(817, 819).concat([859, 877, 878]),
    },
    TRI: {
        name: 'Hutchinson Tri',
        prefix: range(895, 899),
    },
    SMARTFREN: {
        name: 'Smartfren',
        prefix: range(881, 889),
    },
    AXIS: {
        name: 'AXIS',
        prefix: range(831, 833).concat([838])
    }
};
/**
 * CELLULAR_MIN_LENGTH
 *
 * Minimum length of cellular number without leading zero or country code
 * 8961234123
**/
var CELLULAR_MIN_LENGTH = 10;
/**
 * CELLULAR_MAX_LENGTH
 *
 * Maximum length of cellular number without leading zero or country code
**/
var CELLULAR_MAX_LENGTH = 12;
/**
 * CELLULAR_HYPEN_INDEXES
 *
 * Indexes of where are the hypen separator to be placed on formating
**/
var CELLULAR_HYPEN_INDEXES = [2, 6];
/**
 * CELLULAR_PROVIDER_KEYS
 *
 * List of cellular provider object keys.
**/
var CELLULAR_PROVIDER_KEYS = Object.keys(CELLULAR_PROVIDER_DATA);
/**
 * CELLULAR_PROVIDER_PREFIXES
 *
 * List of cellular provider prefixes.
**/
var CELLULAR_PROVIDER_PREFIXES = CELLULAR_PROVIDER_KEYS.reduce(function (a, b) { return a.concat(CELLULAR_PROVIDER_DATA[b].prefix); }, []);

/**
 * Nusantara Valid: province.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/
/**
 * PROVINCE_DATA
 *
 * List of province data in Indonesia including BPS code, vehicle plate,
 * telephone numbers, and zip code.
**/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var PROVINCE_DATA = {
    '11': {
        name: 'Aceh',
        bpsCode: '11',
        vehiclePlate: ['BL'],
        tel: range(641, 659).concat([627, 629]),
        zipCode: [
            {
                from: 23111,
                to: 24794
            }
        ]
    },
    '12': {
        name: 'Sumatra Utara',
        bpsCode: '12',
        vehiclePlate: ['BB', 'BK'],
        tel: range(620, 639).concat([601]),
        zipCode: [
            {
                from: 20111,
                to: 22999
            }
        ]
    },
    '13': {
        name: 'Sumatra Barat',
        bpsCode: '13',
        vehiclePlate: ['BA'],
        tel: range(751, 759),
        zipCode: [
            {
                from: 25111,
                to: 27779
            }
        ]
    },
    '14': {
        name: 'Riau',
        bpsCode: '14',
        vehiclePlate: ['BM'],
        tel: range(760, 769).concat([624]),
        zipCode: [
            {
                from: 28111,
                to: 29569
            }
        ]
    },
    '15': {
        name: 'Jambi',
        bpsCode: '15',
        vehiclePlate: ['BH'],
        tel: range(740, 748),
        zipCode: [
            {
                from: 36111,
                to: 37574
            }
        ]
    },
    '16': {
        name: 'Sumatra Selatan',
        bpsCode: '16',
        vehiclePlate: ['BG'],
        tel: range(711, 714).concat(range(730, 735)).concat([702]),
        zipCode: [
            {
                from: 30111,
                to: 32388
            }
        ]
    },
    '17': {
        name: 'Bengkulu',
        bpsCode: '17',
        vehiclePlate: ['BD'],
        tel: range(736, 739).concat([732]),
        zipCode: [
            {
                from: 38113,
                to: 39377
            }
        ]
    },
    '18': {
        name: 'Lampung',
        bpsCode: '18',
        vehiclePlate: ['BE'],
        tel: range(721, 729),
        zipCode: [
            {
                from: 34111,
                to: 35686
            }
        ]
    },
    '19': {
        name: 'Kepulauan Bangka Belitung',
        bpsCode: '19',
        vehiclePlate: ['BN'],
        tel: range(715, 719),
        zipCode: [
            {
                from: 33111,
                to: 33792
            }
        ]
    },
    '21': {
        name: 'Kepulauan Riau',
        bpsCode: '21',
        vehiclePlate: ['BP'],
        tel: range(771, 779),
        zipCode: [
            {
                from: 29111,
                to: 29878
            }
        ]
    },
    '31': {
        name: 'Jakarta',
        bpsCode: '31',
        vehiclePlate: ['B'],
        tel: [21],
        zipCode: [
            {
                from: 10110,
                to: 14540
            }
        ]
    },
    '32': {
        name: 'Jawa Barat',
        bpsCode: '32',
        vehiclePlate: ['D', 'E', 'F', 'T', 'Z'],
        tel: range(231, 234).concat(range(260, 267)).concat([22, 251]),
        zipCode: [
            {
                from: 16110,
                to: 17730
            }, {
                from: 40111,
                to: 46476
            }
        ]
    },
    '33': {
        name: 'Jawa Tengah',
        bpsCode: '33',
        vehiclePlate: ['G', 'H', 'K', 'R', 'AA', 'AD'],
        tel: range(275, 299).concat(range(271, 273)).concat([24, 356]),
        zipCode: [
            {
                from: 50111,
                to: 54474
            }, {
                from: 56111,
                to: 59584
            }
        ]
    },
    '34': {
        name: 'Yogyakarta',
        bpsCode: '34',
        vehiclePlate: ['AB'],
        tel: [274],
        zipCode: [
            {
                from: 55111,
                to: 55893
            }
        ]
    },
    '35': {
        name: 'Jawa Timur',
        bpsCode: '35',
        vehiclePlate: ['L', 'M', 'N', 'P', 'S', 'W', 'AE', 'AG'],
        tel: range(321, 358).concat([31]),
        zipCode: [
            {
                from: 60111,
                to: 69493
            }
        ]
    },
    '36': {
        name: 'Banten',
        bpsCode: '36',
        vehiclePlate: ['A'],
        tel: range(252, 257),
        zipCode: [
            {
                from: 15111,
                to: 15820
            }, {
                from: 42111,
                to: 42455
            }
        ]
    },
    '51': {
        name: 'Bali',
        bpsCode: '51',
        vehiclePlate: ['DK'],
        tel: range(361, 368),
        zipCode: [
            {
                from: 80111,
                to: 82262
            }
        ]
    },
    '52': {
        name: 'Nusa Tenggara Barat',
        bpsCode: '52',
        vehiclePlate: ['DR', 'EA'],
        tel: range(370, 376).concat([364]),
        zipCode: [
            {
                from: 83115,
                to: 84459
            }
        ]
    },
    '53': {
        name: 'Nusa Tenggara Timur',
        bpsCode: '53',
        vehiclePlate: ['DH', 'EB', 'ED'],
        tel: range(380, 389),
        zipCode: [
            {
                from: 85111,
                to: 87284
            }
        ]
    },
    '61': {
        name: 'Kalimantan Barat',
        bpsCode: '61',
        vehiclePlate: ['KB'],
        tel: range(564, 568).concat([534]),
        zipCode: [
            {
                from: 78111,
                to: 79682
            }
        ]
    },
    '62': {
        name: 'Kalimantan Tengah',
        bpsCode: '62',
        vehiclePlate: ['KH'],
        tel: range(513, 539),
        zipCode: [
            {
                from: 73111,
                to: 74874
            }
        ]
    },
    '63': {
        name: 'Kalimantan Selatan',
        bpsCode: '63',
        vehiclePlate: ['DA'],
        tel: range(511, 527),
        zipCode: [
            {
                from: 70111,
                to: 72276
            }
        ]
    },
    '64': {
        name: 'Kalimantan Timur',
        bpsCode: '64',
        vehiclePlate: ['KT'],
        tel: range(541, 556),
        zipCode: [
            {
                from: 75111,
                to: 77381
            }
        ]
    },
    '65': {
        name: 'Kalimantan Utara',
        bpsCode: '65',
        vehiclePlate: ['KU'],
        tel: range(551, 556),
        zipCode: [
            {
                from: 77111,
                to: 77574
            }
        ]
    },
    '71': {
        name: 'Sulawesi Utara',
        bpsCode: '71',
        vehiclePlate: ['DB', 'DL'],
        tel: range(430, 438),
        zipCode: [
            {
                from: 95111,
                to: 95999
            }
        ]
    },
    '72': {
        name: 'Sulawesi Tengah',
        bpsCode: '72',
        vehiclePlate: ['DN'],
        tel: range(445, 465),
        zipCode: [
            {
                from: 94111,
                to: 94981
            }
        ]
    },
    '73': {
        name: 'Sulawesi Selatan',
        bpsCode: '73',
        vehiclePlate: ['DD', 'DP', 'DW'],
        tel: range(410, 421).concat(range(471, 485)).concat([423, 427]),
        zipCode: [
            {
                from: 90111,
                to: 91273
            }, {
                from: 91611,
                to: 92985
            }
        ]
    },
    '74': {
        name: 'Sulawesi Tenggara',
        bpsCode: '74',
        vehiclePlate: ['DT'],
        tel: range(401, 408),
        zipCode: [
            {
                from: 93111,
                to: 93963
            }
        ]
    },
    '75': {
        name: 'Gorontalo',
        bpsCode: '75',
        vehiclePlate: ['DM'],
        tel: [435, 443],
        zipCode: [
            {
                from: 96111,
                to: 96574
            }
        ]
    },
    '76': {
        name: 'Sulawesi Barat',
        bpsCode: '76',
        vehiclePlate: ['DC'],
        tel: [422, 426, 428],
        zipCode: [
            {
                from: 91311,
                to: 91591
            }
        ]
    },
    '81': {
        name: 'Maluku',
        bpsCode: '81',
        vehiclePlate: ['DE'],
        tel: range(910, 931),
        zipCode: [
            {
                from: 97114,
                to: 97669
            }
        ]
    },
    '82': {
        name: 'Maluku Utara',
        bpsCode: '82',
        vehiclePlate: ['DG'],
        tel: range(910, 931),
        zipCode: [
            {
                from: 97711,
                to: 97869
            }
        ]
    },
    '91': {
        name: 'Papua Barat',
        bpsCode: '91',
        vehiclePlate: ['PB'],
        tel: range(951, 986).concat([901, 902]),
        zipCode: [
            {
                from: 98011,
                to: 98495
            }
        ]
    },
    '92': {
        name: 'Papua',
        bpsCode: '92',
        vehiclePlate: ['PA'],
        tel: range(951, 986).concat([901, 902]),
        zipCode: [
            {
                from: 98511,
                to: 99976
            }
        ]
    },
};
/**
 * COUNTRY_CODE
 *
 * ISD code (https://en.wikipedia.org/wiki/List_of_country_calling_codes)
**/
var COUNTRY_CODE = 62;
var PROVINCE_KEYS = Object.keys(PROVINCE_DATA);

/**
 * Nusantara Valid: _cellularNumber.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The CellularNumber class
**/
var CellularNumber = /** @class */ (function () {
    function CellularNumber() {
    }
    CellularNumber.prototype.isValid = function (mobile, providerKey) {
        if (providerKey === void 0) { providerKey = ''; }
        if (!mobile || typeof mobile !== 'string')
            return false;
        var cleanCellularNumber = cleanPhoneNumbers(mobile, { cellular: true, countryCode: COUNTRY_CODE });
        var prefixCollection;
        providerKey ? prefixCollection = CELLULAR_PROVIDER_DATA[providerKey].prefix : prefixCollection = CELLULAR_PROVIDER_PREFIXES;
        return correctLength(1, cleanCellularNumber.length, { minLength: CELLULAR_MIN_LENGTH, maxLength: CELLULAR_MAX_LENGTH })
            && includes(prefixCollection, Number(cleanCellularNumber.substr(0, 3)));
    };
    CellularNumber.prototype.getData = function (mobile) {
        var data = {};
        data.number = this.format(mobile);
        var pfx = Number(cleanPhoneNumbers(mobile, { cellular: true, countryCode: COUNTRY_CODE }).substr(0, 3));
        for (var _i = 0, CELLULAR_PROVIDER_KEYS_1 = CELLULAR_PROVIDER_KEYS; _i < CELLULAR_PROVIDER_KEYS_1.length; _i++) {
            var key = CELLULAR_PROVIDER_KEYS_1[_i];
            var cellProvider = CELLULAR_PROVIDER_DATA[key];
            if (includes(cellProvider.prefix, pfx)) {
                data.provider = {
                    key: key,
                    name: cellProvider.name
                };
                break;
            }
        }
        return data;
    };
    CellularNumber.prototype.format = function (input, int) {
        if (int === void 0) { int = false; }
        var cleanCelNumber = cleanPhoneNumbers(input, { cellular: true, countryCode: COUNTRY_CODE });
        var formatedNumber = cleanCelNumber
            .slice(0, cleanCelNumber.length)
            .split('')
            .reduce(function (a, b, index) {
            var result = "" + a + b;
            if (!(index === cleanCelNumber.length - 1)) {
                if (includes(CELLULAR_HYPEN_INDEXES, index))
                    return result + "-";
            }
            return result;
        }, '');
        return int ? '+' + COUNTRY_CODE.toString() + formatedNumber : '0' + formatedNumber;
    };
    return CellularNumber;
}());
var cellularNumber = new CellularNumber();
/**
 * Cellular number validation
 *
 * It will validate cellular number based on it's prefix and length
 *
 * @param {string} number - The cellular number to be validated
 * @return {boolean} Is valid or not
**/
function isValidCellularNumber(number) {
    return cellularNumber.isValid(number);
}
/**
 * Cellular number validation with comparison
 *
 * It will validate cellular number based on user provided data
 *
 * @param {string} number - The cellular number to be validated
 * @param {string} providerKey - The cellular provider key
 * @return {boolean} Is valid or not
**/
function isValidCellularNumberWithComparison(number, providerKey) {
    return cellularNumber.isValid(number, providerKey);
}
/**
 * Cellular number data getter
 *
 * Return object data based on provided cellular number
 *
 * @param {string} number - The cellular number
 * @return {object} IDataCellularNumber object
**/
function getDataCellularNumber(number) {
    return cellularNumber.getData(number);
}
/**
 * Cellular number formating
 *
 * Format cellular number to local calling format (0) and international calling format (+XX)
 *
 * @param {string} number - The cellular number to be formated
 * @param {boolean} int - Local calling format (leading zero) or international calling format (leading country code)
 * @return {string} Formated number
**/
function formatCellularNumber(number, int) {
    if (int === void 0) { int = false; }
    return cellularNumber.format(number, int);
}

/**
 * Nusantara Valid: _cellularProvider.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The CellularProvider class
**/
var CellularProvider = /** @class */ (function () {
    function CellularProvider() {
    }
    CellularProvider.prototype.getData = function (index) {
        if (index === void 0) { index = ''; }
        var providers;
        if (index) {
            providers = {
                key: index,
                name: CELLULAR_PROVIDER_DATA[index].name
            };
        }
        else {
            providers = CELLULAR_PROVIDER_KEYS.map(function (key) { return ({
                key: key,
                name: CELLULAR_PROVIDER_DATA[key].name,
            }); });
        }
        return providers;
    };
    return CellularProvider;
}());
var isp = new CellularProvider();
/**
 * Get specific cellular provider data with IDataCellularProvider object structure
 *
 * Return object data based on provided cellular provider key
 *
 * @param {string} providerKey - The provider key
 * @return {IDataCellularProvider} IDataCellularProvider object
**/
function getDataCellularProvider(providerKey) {
    return isp.getData(providerKey);
}
/**
 * Get all cellular provider data with IDataCellularProvider object structure
 *
 * Return all IDataCellularProvider object in Array<IDataCellularProvider>
 *
 * @return {IDataCellularProvider[]} Array of IDataCellularProvider object
**/
function getDataCellularProviders() {
    return isp.getData();
}

/**
 * Nusantara Valid: creditCard.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/
/**
 * CC_LENGTH
 *
 * Total length of Credit Card number without any special characters
**/
var CC_LENGTH = 16;
/**
 * CC_VALID_MII
 *
 * Lists of Credit Card valid MII number
**/
var CC_VALID_MII = [
    '4', '5',
];
/**
 * CC_SPACE_INDEXES
 *
 * Indexes of where are the space separator to be placed
 * Eg: 4000 0000 0000 0000
**/
var CC_SPACE_INDEXES = [3, 7, 11, 11];

/**
 * Nusantara Valid: _creditCard.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The CreditCard class
**/
var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    CreditCard.prototype.isValid = function (cc) {
        if (!cc || typeof cc !== 'string')
            return false;
        var numOnly = numbersOnly(cc);
        return this.isValidMII(cc.charAt(0))
            && correctLength(0, numOnly.length, { minLength: CC_LENGTH });
    };
    CreditCard.prototype.isValidMII = function (mii) {
        return includes(CC_VALID_MII, mii);
    };
    CreditCard.prototype.format = function (cc) {
        var newCC = numbersOnly(cc);
        return newCC
            .slice(0, CC_LENGTH)
            .split('')
            .reduce(function (a, b, index) {
            var result = "" + a + b;
            if (!(index === newCC.length - 1)) {
                if (includes(CC_SPACE_INDEXES, index))
                    return result + " ";
            }
            return result;
        }, '');
    };
    return CreditCard;
}());
var cc = new CreditCard();
/**
 * Credit card number validation.
 *
 * It check if cc number has correct leading MII code and correct CC number's length
 *
 * @param {string} number - The cc number to be validated
 * @return {boolean} Is valid or not
**/
function isValidCCNumber(number) {
    return cc.isValid(number);
}
/**
 * Credit card number formating
 *
 * Format credit card with the correct format
 *
 * @param {string} number - CC number to be formated
 * @return {string} Formated cc number
**/
function formatCCNumber(number) {
    return cc.format(number);
}

/**
 * Nusantara Valid: email.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/
/**
 * EMAIL_REGEX
 * by Brent Thomas
 *
 * EMAIL_REGEX[0] = The email
 * EMAIL_REGEX[1] = Local part of email
**/
var EMAIL_REGEX = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]+)$/;
/**
 * MAX_LOCALPART_LENGTH
 *
 * Maximum length of email's local part
**/
var MAX_LOCALPART_LENGTH = 64;
/**
 * MAX_EMAIL_LENGTH
 *
 * Maximum length of email
**/
var MAX_EMAIL_LENGTH = 254;

/**
 * Nusantara Valid: _email.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The Email class
**/
var Email = /** @class */ (function () {
    function Email() {
    }
    Email.prototype.isValid = function (email) {
        if (!email || typeof email !== 'string')
            return false;
        var validEmail = EMAIL_REGEX.exec(email);
        return validEmail !== null
            && correctLength(1, validEmail[0].length, { minLength: 1, maxLength: MAX_EMAIL_LENGTH })
            && correctLength(1, validEmail[1].length, { minLength: 1, maxLength: MAX_LOCALPART_LENGTH });
    };
    return Email;
}());
var theEmail = new Email();
/**
 * E-mail validation.
 *
 * It check if email has the correct requirements such as local part (username), @ [at] symbol, domain name part, and TLD
 *
 * @param {string} email - The email, the one to be validated
 * @return {boolean} Is valid or not
**/
function isValidEmail(email) {
    return theEmail.isValid(email);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Nusantara Valid: nik.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/
/**
 * NIK_REGEX
 *
 * NIK_REGEX[0] = NIK Number has 16 digits
 * NIK_REGEX[1] = 2 digits of Province Code (BPS Code)
 * NIK_REGEX[2] = 2 digits of Regency Code
 * NIK_REGEX[3] = 2 digits of Distric Code
 * NIK_REGEX[4] = 6 digits of Birthday with DDMMYY format, for woman DD + 40
 * NIK_REGEX[5] = 4 digits of Index
**/
var NIK_REGEX = /^(\d{2})(\d{2})(\d{2})(\d{6})(\d{4})$/;
/**
 * NIK_LENGTH
 *
 * Total length of NIK without any special characters
**/
var NIK_LENGTH = 16;

/**
 * Nusantara Valid: _province.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The Province class
**/
var Province = /** @class */ (function () {
    function Province() {
    }
    Province.prototype.getData = function (index) {
        if (index === void 0) { index = ''; }
        var province;
        if (index) {
            province = {
                bpsCode: index,
                name: PROVINCE_DATA[index].name
            };
        }
        else {
            province = PROVINCE_KEYS.map(function (key) { return ({
                bpsCode: key,
                name: PROVINCE_DATA[key].name,
            }); });
        }
        return province;
    };
    return Province;
}());
var prov = new Province();
/**
 * Get specific province data with IDataProvince object structure
 *
 * Return object data based on provided province key
 *
 * @param {string} provinceKey - Array key of the province
 * @return {IDataProvince} IDataProvince object
**/
function getDataProvince(provinceKey) {
    return prov.getData(provinceKey);
}

/**
 * Nusantara Valid: _nomorIndukKependudukan.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorIndukKepemdudukan class
**/
var NomorIndukKependudukan = /** @class */ (function () {
    function NomorIndukKependudukan() {
    }
    NomorIndukKependudukan.prototype.isValid = function (nik, provinceKey, birthday) {
        if (provinceKey === void 0) { provinceKey = ''; }
        if (birthday === void 0) { birthday = ''; }
        if (!nik || typeof nik !== 'string')
            return false;
        var validNIK = NIK_REGEX.exec(numbersOnly(nik));
        if (!validNIK)
            return false;
        var validLength = correctLength(0, validNIK[0].length, { minLength: NIK_LENGTH });
        var cBirthday = this.reformatBirthday(validNIK[4]);
        var validProvince = includes(PROVINCE_KEYS, validNIK[1]);
        var validBirthday = !isNaN(formatDate('19' + cBirthday).getTime());
        if (provinceKey) {
            if (provinceKey != validNIK[1]) {
                validProvince = false;
            }
        }
        if (birthday) {
            var vBirthday = numbersOnly(birthday).substring(2, 8); // Strip the first 2 digits of year
            if (cBirthday != vBirthday) {
                validBirthday = false;
            }
        }
        return validLength
            && validProvince
            && validBirthday;
    };
    // Reformat DDMMYY into YYMMDD
    NomorIndukKependudukan.prototype.reformatBirthday = function (birthday) {
        var newBirthday = /(\d{2})(\d{2})(\d{2})/.exec(birthday);
        if (!newBirthday)
            return '';
        var cDD = newBirthday[1];
        var cMM = newBirthday[2];
        var cYY = newBirthday[3];
        if (Number(cDD) > 40) // Check if it is a man of woman
            cDD = (('0') + (Number(cDD) - 40).toString()).slice(-2);
        return cYY + '' + cMM + '' + cDD;
    };
    NomorIndukKependudukan.prototype.getData = function (nik) {
        var validNIK = NIK_REGEX.exec(numbersOnly(nik));
        var data = {};
        if (!validNIK)
            return data;
        data.nik = validNIK[0];
        data.sex = Number(validNIK[4].substr(0, 2)) > 40 ? 'Female' : 'Male';
        var reformatedBirthday = this.reformatBirthday(validNIK[4]);
        var validProvince = includes(PROVINCE_KEYS, validNIK[1]);
        var validBirthday = !isNaN(formatDate('19' + reformatedBirthday).getTime());
        if (validProvince) {
            data.province = getDataProvince(validNIK[1]);
        }
        if (validBirthday) {
            var currentYear = new Date().getFullYear();
            var bYYYY = Number(reformatedBirthday.substr(0, 2)) + 2000;
            var bMMYY = reformatedBirthday.substring(2, 6);
            if (bYYYY > currentYear) {
                bYYYY = bYYYY - 100;
            }
            data.birthday = new Date(formatDate(bYYYY + '' + bMMYY));
        }
        return data;
    };
    return NomorIndukKependudukan;
}());

/**
 * Nusantara Valid: province.extended.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/
/**
 * PROVINCE_EXTENDED_DATA
 *
 * List of extended province data of Indonesia like regencies and districts
**/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var PROVINCE_DATA_EXTENSION = {
    '11': {
        regencies: [
            {
                name: 'Aceh Selatan',
                bpsCode: '11.01',
                districts: [
                    { name: 'Bakongan', bpsCode: '11.01.01' },
                    { name: 'Kluet Utara', bpsCode: '11.01.02' },
                    { name: 'Kluet Selatan', bpsCode: '11.01.03' },
                    { name: 'Labuhan Haji', bpsCode: '11.01.04' },
                    { name: 'Meukek', bpsCode: '11.01.05' },
                    { name: 'Samadua', bpsCode: '11.01.06' },
                    { name: 'Sawang', bpsCode: '11.01.07' },
                    { name: 'Tapaktuan', bpsCode: '11.01.08' },
                    { name: 'Trumon', bpsCode: '11.01.09' },
                    { name: 'Pasi Raja', bpsCode: '11.01.10' },
                    { name: 'Labuhan Haji Timur', bpsCode: '11.01.11' },
                    { name: 'Labuhan Haji Barat', bpsCode: '11.01.12' },
                    { name: 'Kluet Tengah', bpsCode: '11.01.13' },
                    { name: 'Kluet Timur', bpsCode: '11.01.14' },
                    { name: 'Bakongan Timur', bpsCode: '11.01.15' },
                    { name: 'Trumon Timur', bpsCode: '11.01.16' },
                    { name: 'Kota Bahagia', bpsCode: '11.01.17' },
                    { name: 'Trumon Tengah', bpsCode: '11.01.18' }
                ]
            }, {
                name: 'Aceh Tenggara',
                bpsCode: '11.02',
                districts: [
                    { name: 'Lawe Alas', bpsCode: '11.02.01' },
                    { name: 'Lawe Sigala Gala', bpsCode: '11.02.02' },
                    { name: 'Bambel', bpsCode: '11.02.03' },
                    { name: 'Babussalam', bpsCode: '11.02.04' },
                    { name: 'Badar', bpsCode: '11.02.05' },
                    { name: 'Babul Makmur', bpsCode: '11.02.06' },
                    { name: 'Darul Hasanah', bpsCode: '11.02.07' },
                    { name: 'Lawe Bulan', bpsCode: '11.02.08' },
                    { name: 'Bukit Tusam', bpsCode: '11.02.09' },
                    { name: 'Semadam', bpsCode: '11.02.10' },
                    { name: 'Babul Rahmah', bpsCode: '11.02.11' },
                    { name: 'Ketambe', bpsCode: '11.02.12' },
                    { name: 'Deleng Pokhkisen', bpsCode: '11.02.13' },
                    { name: 'Lawe Sumur', bpsCode: '11.02.14' },
                    { name: 'Tanoh Alas', bpsCode: '11.02.15' },
                    { name: 'Leuser', bpsCode: '11.02.16' }
                ]
            }, {
                name: 'Aceh Timur',
                bpsCode: '11.03',
                districts: [
                    { name: 'Darul Aman', bpsCode: '11.03.01' },
                    { name: 'Julok', bpsCode: '11.03.02' },
                    { name: 'Idi Rayeuk', bpsCode: '11.03.03' },
                    { name: 'Birem Bayeun', bpsCode: '11.03.04' },
                    { name: 'Serbajadi', bpsCode: '11.03.05' },
                    { name: 'Nurussalam', bpsCode: '11.03.06' },
                    { name: 'Peureulak', bpsCode: '11.03.07' },
                    { name: 'Rantau Selamat', bpsCode: '11.03.08' },
                    { name: 'Simpang Ulim', bpsCode: '11.03.09' },
                    { name: 'Rantau Peureulak', bpsCode: '11.03.10' },
                    { name: 'Pante Bidari', bpsCode: '11.03.11' },
                    { name: 'Madat', bpsCode: '11.03.12' },
                    { name: 'Indra Makmu', bpsCode: '11.03.13' },
                    { name: 'Idi Tunong', bpsCode: '11.03.14' },
                    { name: 'Banda Alam', bpsCode: '11.03.15' },
                    { name: 'Peudawa', bpsCode: '11.03.16' },
                    { name: 'Peureulak Timur', bpsCode: '11.03.17' },
                    { name: 'Peureulak Barat', bpsCode: '11.03.18' },
                    { name: 'Sungai Raya', bpsCode: '11.03.19' },
                    { name: 'Simpang Jernih', bpsCode: '11.03.20' },
                    { name: 'Darul Iksan', bpsCode: '11.03.21' },
                    { name: 'Darul Falah', bpsCode: '11.03.22' },
                    { name: 'Idi Timur', bpsCode: '11.03.23' },
                    { name: 'Peunaron', bpsCode: '11.03.24' }
                ]
            }, {
                name: 'Aceh Tengah',
                bpsCode: '11.04',
                districts: [
                    { name: 'Linge', bpsCode: '11.04.01' },
                    { name: 'Silih Nara', bpsCode: '11.04.02' },
                    { name: 'Bebesen', bpsCode: '11.04.03' },
                    { name: 'Pegasing', bpsCode: '11.04.07' },
                    { name: 'Bintang', bpsCode: '11.04.08' },
                    { name: 'Ketol', bpsCode: '11.04.10' },
                    { name: 'Kebayakan', bpsCode: '11.04.11' },
                    { name: 'Kute Panang', bpsCode: '11.04.12' },
                    { name: 'Celala', bpsCode: '11.04.13' },
                    { name: 'Laut Tawar', bpsCode: '11.04.17' },
                    { name: 'Atu Lintang', bpsCode: '11.04.18' },
                    { name: 'Jagong Jeget', bpsCode: '11.04.19' },
                    { name: 'Bies', bpsCode: '11.04.20' },
                    { name: 'Rusip Antara', bpsCode: '11.04.21' }
                ]
            }, {
                name: 'Aceh Barat',
                bpsCode: '11.05',
                districts: [
                    { name: 'Johan Pahwalan', bpsCode: '11.05.01' },
                    { name: 'Kaway XVI', bpsCode: '11.05.02' },
                    { name: 'Sungai Mas', bpsCode: '11.05.03' },
                    { name: 'Woyla', bpsCode: '11.05.04' },
                    { name: 'Samatiga', bpsCode: '11.05.05' },
                    { name: 'Bubon', bpsCode: '11.05.06' },
                    { name: 'Arongan Lambalek', bpsCode: '11.05.07' },
                    { name: 'Pante Ceureumen', bpsCode: '11.05.08' },
                    { name: 'Meureubo', bpsCode: '11.05.09' },
                    { name: 'Moyla Barat', bpsCode: '11.05.10' },
                    { name: 'Woyla Timur', bpsCode: '11.05.11' },
                    { name: 'Panton Reu', bpsCode: '11.05.12' }
                ]
            }, {
                name: 'Aceh Besar',
                bpsCode: '11.06',
                districts: [
                    { name: 'Lhoong', bpsCode: '11.06.01' },
                    { name: 'Lhoknga', bpsCode: '11.06.02' },
                    { name: 'Indrapuri', bpsCode: '11.06.03' },
                    { name: 'Seulimeum', bpsCode: '11.06.04' },
                    { name: 'Mantasiek', bpsCode: '11.06.05' },
                    { name: 'Sukamakmur', bpsCode: '11.06.06' },
                    { name: 'Darul Imarah', bpsCode: '11.06.07' },
                    { name: 'Peukan Bada', bpsCode: '11.06.08' },
                    { name: 'Mesjid Raya', bpsCode: '11.06.09' },
                    { name: 'Ingin Jaya', bpsCode: '11.06.10' },
                    { name: 'Kuta Baro', bpsCode: '11.06.11' },
                    { name: 'Darussalam', bpsCode: '11.06.12' },
                    { name: 'Pulo Aceh', bpsCode: '11.06.13' },
                    { name: 'Lembah Seulawah', bpsCode: '11.06.14' },
                    { name: 'Kota Jantho', bpsCode: '11.06.15' },
                    { name: 'Kota Cot Glie', bpsCode: '11.06.16' },
                    { name: 'Kota Malaka', bpsCode: '11.06.17' },
                    { name: 'Simpang Tiga', bpsCode: '11.06.18' },
                    { name: 'Darul Kamal', bpsCode: '11.06.19' },
                    { name: 'Baitussalam', bpsCode: '11.06.20' },
                    { name: 'Krueng Barona Jaya', bpsCode: '11.06.21' },
                    { name: 'Keupung', bpsCode: '11.06.22' },
                    { name: 'Blang Bintang', bpsCode: '11.06.23' }
                ]
            }, {
                name: 'Pidie',
                bpsCode: '11.07',
                districts: [
                    { name: 'Batee', bpsCode: '11.07.03' },
                    { name: 'Delima', bpsCode: '11.07.04' },
                    { name: 'Geumpang', bpsCode: '11.07.05' },
                    { name: 'Geulumpang Tiga', bpsCode: '11.07.06' },
                    { name: 'Indra Jaya', bpsCode: '11.07.07' },
                    { name: 'Kembang Tanjong', bpsCode: '11.07.08' },
                    { name: 'Kota Sigli', bpsCode: '11.07.09' },
                    { name: 'Mila', bpsCode: '11.07.11' },
                    { name: 'Muara Tiga', bpsCode: '11.07.12' },
                    { name: 'Mutiara', bpsCode: '11.07.13' },
                    { name: 'Padang Tiji', bpsCode: '11.07.14' },
                    { name: 'Peukan Baro', bpsCode: '11.07.15' },
                    { name: 'Pide', bpsCode: '11.07.16' },
                    { name: 'Sakti', bpsCode: '11.07.17' },
                    { name: 'Simpang Tiga', bpsCode: '11.07.18' },
                    { name: 'Tangse', bpsCode: '11.07.19' },
                    { name: 'Tiro/Truseb', bpsCode: '11.07.21' },
                    { name: 'Keumala', bpsCode: '11.07.22' },
                    { name: 'Mutiara Timur', bpsCode: '11.07.24' },
                    { name: 'Grong Grong', bpsCode: '11.07.25' },
                    { name: 'Mane', bpsCode: '11.07.27' },
                    { name: 'Glumpang Baro', bpsCode: '11.07.29' },
                    { name: 'Titeue', bpsCode: '11.07.31' },
                ]
            }, {
                name: 'Aceh Utara',
                bpsCode: '11.08',
                districts: [
                    { name: 'Baktiya', bpsCode: '11.08.01' },
                    { name: 'Dewantara', bpsCode: '11.08.02' },
                    { name: 'Kuta Makmur', bpsCode: '11.08.03' },
                    { name: 'Lhoksukon', bpsCode: '11.08.04' },
                    { name: 'Matangkuli', bpsCode: '11.08.05' },
                    { name: 'Muara Batu', bpsCode: '11.08.06' },
                    { name: 'Meurah Mulia', bpsCode: '11.08.07' },
                    { name: 'Samudera', bpsCode: '11.08.08' },
                    { name: 'Seunuddon (Seunudon)', bpsCode: '11.08.09' },
                    { name: 'Syamtalira Aron', bpsCode: '11.08.10' },
                    { name: 'Syamtalira Bayu', bpsCode: '11.08.11' },
                    { name: 'Tanah Luas', bpsCode: '11.08.12' },
                    { name: 'Tanah Pasir', bpsCode: '11.08.13' },
                    { name: 'Tanah Jambo Aye', bpsCode: '11.08.14' },
                    { name: 'Sawang', bpsCode: '11.08.15' },
                    { name: 'Nisam', bpsCode: '11.08.16' },
                    { name: 'Cot Girek', bpsCode: '11.08.17' },
                    { name: 'Langkahan', bpsCode: '11.08.18' },
                    { name: 'Baktiya Barat', bpsCode: '11.08.19' },
                    { name: 'Paya Bakong', bpsCode: '11.08.20' },
                    { name: 'Nibong', bpsCode: '11.08.21' },
                    { name: 'Simpang Kramat (Keramat)', bpsCode: '11.08.22' },
                    { name: 'Lapang', bpsCode: '11.08.23' },
                    { name: 'Pirak Timur', bpsCode: '11.08.24' },
                    { name: 'Geuredong Pase', bpsCode: '11.08.25' },
                    { name: 'Banda Baro', bpsCode: '11.08.26' },
                    { name: 'Nisam Antara', bpsCode: '11.08.27' }
                ]
            }, {
                name: 'Simeulue',
                bpsCode: '11.09',
                districts: [
                    { name: 'Alapan (Alafan)', bpsCode: '11.09.08' },
                    { name: 'Salang', bpsCode: '11.09.02' },
                    { name: 'Simeulue Barat (Simeuleu Barat)', bpsCode: '11.09.06' },
                    { name: 'Simeulue Cut', bpsCode: '11.09.10' },
                    { name: 'Simeulue Tengah (Simeuleu Tengah)', bpsCode: '11.09.01' },
                    { name: 'Simeulue Timur (Simeuleu Timur)', bpsCode: '11.09.04' },
                    { name: 'Teluk Dalam', bpsCode: '11.09.05' },
                    { name: 'Teupah Barat', bpsCode: '11.09.03' },
                    { name: 'Teupah Selatan', bpsCode: '11.09.07' },
                    { name: 'Teupah Tengah', bpsCode: '11.09.09' }
                ]
            }, {
                name: 'Aceh Singkil',
                bpsCode: '11.10',
                districts: [
                    { name: 'Pulau Banyak', bpsCode: '11.10.01' },
                    { name: 'Simpang Kanan', bpsCode: '11.10.02' },
                    { name: 'Singkil', bpsCode: '11.10.04' },
                    { name: 'Gunung Meriah (Mariah)', bpsCode: '11.10.06' },
                    { name: 'Kota Baharu', bpsCode: '11.10.09' },
                    { name: 'Singkil Utara', bpsCode: '11.10.10' },
                    { name: 'Danau Paris', bpsCode: '11.10.11' },
                    { name: 'Suro Makmur', bpsCode: '11.10.12' },
                    { name: 'Singkohor', bpsCode: '11.10.13' },
                    { name: 'Kuala Baru', bpsCode: '11.10.14' },
                    { name: 'Pulau Banyak Barat', bpsCode: '11.10.16' }
                ]
            }, {
                name: 'Bireuen',
                bpsCode: '11.11',
                districts: [
                    { name: 'Samalanga', bpsCode: '11.11.01' },
                    { name: 'Jeunieb', bpsCode: '11.11.02' },
                    { name: 'Peudada', bpsCode: '11.11.03' },
                    { name: 'Jeumpa', bpsCode: '11.11.04' },
                    { name: 'Peusangan', bpsCode: '11.11.05' },
                    { name: 'Makmur', bpsCode: '11.11.06' },
                    { name: 'Gandapura (Ganda Pura)', bpsCode: '11.11.07' },
                    { name: 'Pandrah', bpsCode: '11.11.08' },
                    { name: 'Juli', bpsCode: '11.11.09' },
                    { name: 'Jangka', bpsCode: '11.11.10' },
                    { name: 'Simpang Mamplam', bpsCode: '11.11.11' },
                    { name: 'Peulimbang (Plimbang)', bpsCode: '11.11.12' },
                    { name: 'Kota Juang', bpsCode: '11.11.13' },
                    { name: 'Kuala', bpsCode: '11.11.14' },
                    { name: 'Peusangan Siblah Krueng', bpsCode: '11.11.15' },
                    { name: 'Peusangan Selatan', bpsCode: '11.11.16' },
                    { name: 'Kuta Blang', bpsCode: '11.11.17' }
                ]
            }, {
                name: 'Aceh Barat Daya',
                bpsCode: '11.12',
                districts: [
                    { name: 'Blang Pidie', bpsCode: '11.12.01' },
                    { name: 'Tangan-Tangan', bpsCode: '11.12.02' },
                    { name: 'Manggeng', bpsCode: '11.12.03' },
                    { name: 'Susoh', bpsCode: '11.12.04' },
                    { name: 'Kuala Batee', bpsCode: '11.12.05' },
                    { name: 'Babah Rot', bpsCode: '11.12.06' },
                    { name: 'Setia', bpsCode: '11.12.07' },
                    { name: 'Jeumpa', bpsCode: '11.12.08' },
                    { name: 'Lembah Sabil', bpsCode: '11.12.09' }
                ]
            }, {
                name: 'Gayo Lues',
                bpsCode: '11.13',
                districts: [
                    { name: 'Blangkejeren (Blang Kejeren)', bpsCode: '11.13.01' },
                    { name: 'Kutapanjang (Kuta Panjang)', bpsCode: '11.13.02' },
                    { name: 'Rikit Gaib', bpsCode: '11.13.03' },
                    { name: 'Terangun (Terangon)', bpsCode: '11.13.04' },
                    { name: 'Pining (Pinding)', bpsCode: '11.13.05' },
                    { name: 'Blangpegayon (Blang Pegayon)', bpsCode: '11.13.06' },
                    { name: 'Puteri Betung (Putri Betung)', bpsCode: '11.13.07' },
                    { name: 'Dabun Gelang (Debun Gelang)', bpsCode: '11.13.08' },
                    { name: 'Blangjerango (Blang Jerango)', bpsCode: '11.13.09' },
                    { name: 'Teripe/Tripe Jaya', bpsCode: '11.13.10' },
                    { name: 'Pantan Cuaca', bpsCode: '11.13.11' }
                ]
            }, {
                name: 'Aceh Jaya',
                bpsCode: '11.14',
                districts: [
                    { name: 'Teunom', bpsCode: '11.14.01' },
                    { name: 'Krueng Sabee', bpsCode: '11.14.02' },
                    { name: 'Setia Bhakti (Setia Bakti)', bpsCode: '11.14.03' },
                    { name: 'Sampoiniet', bpsCode: '11.14.04' },
                    { name: 'Jaya', bpsCode: '11.14.05' },
                    { name: 'Panga (Keude Panga)', bpsCode: '11.14.06' },
                    { name: 'Indra Jaya', bpsCode: '11.14.07' },
                    { name: 'Darul Hikmah', bpsCode: '11.14.08' },
                    { name: 'Pasie Raya', bpsCode: '11.14.09' }
                ]
            }, {
                name: 'Nagan Raya',
                bpsCode: '11.15',
                districts: [
                    { name: 'Kuala', bpsCode: '11.15.01' },
                    { name: 'Seunagan', bpsCode: '11.15.02' },
                    { name: 'Seunagan Timur', bpsCode: '11.15.03' },
                    { name: 'Beutong', bpsCode: '11.15.04' },
                    { name: 'Darul Makmur', bpsCode: '11.15.05' },
                    { name: 'Suka Makmue', bpsCode: '11.15.06' },
                    { name: 'Kuala Pesisir', bpsCode: '11.15.07' },
                    { name: 'Tadu Raya', bpsCode: '11.15.08' },
                    { name: 'Tripa Makmur', bpsCode: '11.15.09' },
                    { name: 'Beutong Ateuh Banggalang', bpsCode: '11.15.10' }
                ]
            }, {
                name: 'Aceh Tamiang',
                bpsCode: '11.16',
                districts: [
                    { name: 'Manyak Payed', bpsCode: '11.16.01' },
                    { name: 'Bendahara', bpsCode: '11.16.02' },
                    { name: 'Karang Baru', bpsCode: '11.16.03' },
                    { name: 'Seruway', bpsCode: '11.16.04' },
                    { name: 'Kota Kualasinpang (Kota Kuala Simpang)', bpsCode: '11.16.05' },
                    { name: 'Kejuruan Muda', bpsCode: '11.16.06' },
                    { name: 'Tamiang Hulu', bpsCode: '11.16.07' },
                    { name: 'Rantau', bpsCode: '11.16.08' },
                    { name: 'Banda Mulia', bpsCode: '11.16.09' },
                    { name: 'Bandar Pusaka', bpsCode: '11.16.10' },
                    { name: 'Tenggulun', bpsCode: '11.16.11' },
                    { name: 'Sekerak', bpsCode: '11.16.12' }
                ]
            }, {
                name: 'Bener Meriah',
                bpsCode: '11.17',
                districts: [
                    { name: 'Pintu Rime Gayo', bpsCode: '11.17.01' },
                    { name: 'Permata', bpsCode: '11.17.02' },
                    { name: 'Syiah Utama', bpsCode: '11.17.03' },
                    { name: 'Bandar', bpsCode: '11.17.04' },
                    { name: 'Bukit', bpsCode: '11.17.05' },
                    { name: 'Wih Pesam', bpsCode: '11.17.06' },
                    { name: 'Timang Gajah', bpsCode: '11.17.07' },
                    { name: 'Bener Kelipah', bpsCode: '11.17.08' },
                    { name: 'Mesidah', bpsCode: '11.17.09' },
                    { name: 'Gajah Putih', bpsCode: '11.17.10' }
                ]
            }, {
                name: 'Pide Jaya',
                bpsCode: '11.18',
                districts: [
                    { name: 'Meureudu', bpsCode: '11.18.01' },
                    { name: 'Ulim', bpsCode: '11.18.02' },
                    { name: 'Jangka Buaya (Jangka Buya)', bpsCode: '11.18.03' },
                    { name: 'Bandar Dua', bpsCode: '11.18.04' },
                    { name: 'Meurah Dua', bpsCode: '11.18.05' },
                    { name: 'Bandar Baru', bpsCode: '11.18.06' },
                    { name: 'Panteraja', bpsCode: '11.18.07' },
                    { name: 'Trienggadeng', bpsCode: '11.18.08' }
                ]
            }, {
                name: 'Banda Aceh',
                bpsCode: '11.71',
                districts: [
                    { name: 'Baiturrahman', bpsCode: '11.71.01' },
                    { name: 'Kuta Alam', bpsCode: '11.71.02' },
                    { name: 'Meuraxa', bpsCode: '11.71.03' },
                    { name: 'Syiah Kuala', bpsCode: '11.71.04' },
                    { name: 'Lueng Bata', bpsCode: '11.71.05' },
                    { name: 'Kuta Raja', bpsCode: '11.71.06' },
                    { name: 'Banda Raya', bpsCode: '11.71.07' },
                    { name: 'Jaya Baru', bpsCode: '11.71.08' },
                    { name: 'Ulee Kareng', bpsCode: '11.71.09' }
                ]
            }, {
                name: 'Sabang',
                bpsCode: '11.72',
                districts: [
                    { name: 'Sukakarya', bpsCode: '11.72.01' },
                    { name: 'Sukajaya', bpsCode: '11.72.02' }
                ]
            }, {
                name: 'Lhokseumawe',
                bpsCode: '11.73',
                districts: [
                    { name: 'Muara Dua', bpsCode: '11.73.01' },
                    { name: 'Banda Sakti', bpsCode: '11.73.02' },
                    { name: 'Blang Mangat', bpsCode: '11.73.03' },
                    { name: 'Muara Satu', bpsCode: '11.73.04' }
                ]
            }, {
                name: 'Langsa',
                bpsCode: '11.74',
                districts: [
                    { name: 'Langsa Timur', bpsCode: '11.74.01' },
                    { name: 'Langsa Barat', bpsCode: '11.74.02' },
                    { name: 'Langsa Kota', bpsCode: '11.74.03' },
                    { name: 'Langsa Lama', bpsCode: '11.74.04' },
                    { name: 'Langsa Baro', bpsCode: '11.74.05' }
                ]
            }, {
                name: 'Subulussalam',
                bpsCode: '11.75',
                districts: [
                    { name: 'Penanggalan', bpsCode: '11.75.02' },
                    { name: 'Rundeng', bpsCode: '11.75.03' },
                    { name: 'Longkib', bpsCode: '11.75.05' }
                ]
            },
        ]
    },
    '12': {
        regencies: [
            {
                name: 'Tapanuli Tengah',
                bpsCode: '12.01',
                districts: [
                    { name: 'Barus', bpsCode: '12.01.01' },
                    { name: 'Sorkam', bpsCode: '12.01.02' },
                    { name: 'Pandan', bpsCode: '12.01.03' },
                    { name: 'Pinangsori', bpsCode: '12.01.04' },
                    { name: 'Manduamas', bpsCode: '12.01.05' },
                    { name: 'Kolang', bpsCode: '12.01.06' },
                    { name: 'Tapian Nauli', bpsCode: '12.01.07' },
                    { name: 'Sibabangun', bpsCode: '12.01.08' },
                    { name: 'Sosorgadong (Sosor Gadong)', bpsCode: '12.01.09' },
                    { name: 'Sorkam Barat', bpsCode: '12.01.10' },
                    { name: 'Sirandorung', bpsCode: '12.01.11' },
                    { name: 'Andam Dewi', bpsCode: '12.01.12' },
                    { name: 'Sitahuis', bpsCode: '12.01.13' },
                    { name: 'Tukka', bpsCode: '12.01.14' },
                    { name: 'Badiri', bpsCode: '12.01.15' },
                    { name: 'Pasaribu Tobing', bpsCode: '12.01.16' },
                    { name: 'Barus Utara', bpsCode: '12.01.17' },
                    { name: 'Suka Bangun', bpsCode: '12.01.18' },
                    { name: 'Lumut', bpsCode: '12.01.19' },
                    { name: 'Sarudik', bpsCode: '12.01.20' }
                ]
            }, {
                name: 'Tapanuli Utara',
                bpsCode: '12.02',
                districts: [
                    { name: 'Tarutung', bpsCode: '12.02.01' },
                    { name: 'Siatas Barita', bpsCode: '12.02.02' },
                    { name: 'Adian Koting', bpsCode: '12.02.03' },
                    { name: 'Sipoholon', bpsCode: '12.02.04' },
                    { name: 'Pahae Julu', bpsCode: '12.02.05' },
                    { name: 'Pahae Jae', bpsCode: '12.02.06' },
                    { name: 'Simangumban', bpsCode: '12.02.07' },
                    { name: 'Purba Tua (Purbatua)', bpsCode: '12.02.08' },
                    { name: 'Siborong-Borong', bpsCode: '12.02.09' },
                    { name: 'Pagaran', bpsCode: '12.02.10' },
                    { name: 'Parmonangan', bpsCode: '12.02.11' },
                    { name: 'Sipahutar', bpsCode: '12.02.12' },
                    { name: 'Pangaribuan', bpsCode: '12.02.13' },
                    { name: 'Garoga', bpsCode: '12.02.14' },
                    { name: 'Muara', bpsCode: '12.02.15' }
                ]
            }, {
                name: 'Tapanuli Selatan',
                bpsCode: '12.03',
                districts: [
                    { name: 'Angkola Barat', bpsCode: '12.03.01' },
                    { name: 'Batang Toru', bpsCode: '12.03.02' },
                    { name: 'Angkola Timur', bpsCode: '12.03.03' },
                    { name: 'Sipirok', bpsCode: '12.03.04' },
                    { name: 'Saipar Dolok Hole', bpsCode: '12.03.05' },
                    { name: 'Angkola Selatan', bpsCode: '12.03.06' },
                    { name: 'Batang Angkola', bpsCode: '12.03.07' },
                    { name: 'Arse', bpsCode: '12.03.14' },
                    { name: 'Marancar', bpsCode: '12.03.20' },
                    { name: 'Sayur Matinggi', bpsCode: '12.03.21' },
                    { name: 'Aek Bilah', bpsCode: '12.03.22' },
                    { name: 'Muara Batang Toru', bpsCode: '12.03.29' },
                    { name: 'Tano Tombangan Angkola', bpsCode: '12.03.30' },
                    { name: 'Angkola Sangkunur', bpsCode: '12.03.31' }
                ]
            }, {
                name: 'Nias',
                bpsCode: '12.04',
                districts: [
                    { name: 'Hiliduho', bpsCode: '12.04.05' },
                    { name: 'Gido', bpsCode: '12.04.06' },
                    { name: 'Idanogawo (Idano Gawo)', bpsCode: '12.04.10' },
                    { name: 'Bawolato', bpsCode: '12.04.11' },
                    { name: 'Hiliserangkai (Hili Serangkai / Hilisaranggu)', bpsCode: '12.04.20' },
                    { name: 'Botomuzoi', bpsCode: '12.04.21' },
                    { name: 'Ulugawo', bpsCode: '12.04.27' },
                    { name: 'Ma\'u', bpsCode: '12.04.28' },
                    { name: 'Somolo-Molo (Samolo)', bpsCode: '12.04.29' },
                    { name: 'Sogae\'adu (Sogae Adu / Sogaeadu)', bpsCode: '12.04.35' }
                ]
            }, {
                name: 'Langkat',
                bpsCode: '12.05',
                districts: [
                    { name: 'Bahorok', bpsCode: '12.05.01' },
                    { name: 'Salapian', bpsCode: '12.05.02' },
                    { name: 'Kuala', bpsCode: '12.05.03' },
                    { name: 'Sei Bingei (Sei Binge / Bingai)', bpsCode: '12.05.04' },
                    { name: 'Binjai', bpsCode: '12.05.05' },
                    { name: 'Selesai', bpsCode: '12.05.06' },
                    { name: 'Stabat', bpsCode: '12.05.07' },
                    { name: 'Wampu', bpsCode: '12.05.08' },
                    { name: 'Secanggang', bpsCode: '12.05.09' },
                    { name: 'Hinai', bpsCode: '12.05.10' },
                    { name: 'Tanjung Pura (Tanjungpura)', bpsCode: '12.05.11' },
                    { name: 'Padang Tualang', bpsCode: '12.05.12' },
                    { name: 'Gebang', bpsCode: '12.05.13' },
                    { name: 'Babalan', bpsCode: '12.05.14' },
                    { name: 'Pangkalan Susu', bpsCode: '12.05.15' },
                    { name: 'Besitang', bpsCode: '12.05.16' },
                    { name: 'Sei Lepan', bpsCode: '12.05.17' },
                    { name: 'Berandan Barat (Brandan Barat)', bpsCode: '12.05.18' },
                    { name: 'Batang Serangan', bpsCode: '12.05.19' },
                    { name: 'Sawit Seberang', bpsCode: '12.05.20' },
                    { name: 'Sirapit (Serapit)', bpsCode: '12.05.21' },
                    { name: 'Kutambaru', bpsCode: '12.05.22' },
                    { name: 'Pematang Jaya', bpsCode: '12.05.23' }
                ]
            }, {
                name: 'Karo',
                bpsCode: '12.06',
                districts: [
                    { name: 'Kabanjahe', bpsCode: '12.06.01' },
                    { name: 'Brastagi (Berastagi)', bpsCode: '12.06.02' },
                    { name: 'Barusjahe (Barus Jahe)', bpsCode: '12.06.03' },
                    { name: 'Tigapanah (Tiga Panah)', bpsCode: '12.06.04' },
                    { name: 'Merek', bpsCode: '12.06.05' },
                    { name: 'Munte', bpsCode: '12.06.06' },
                    { name: 'Juhar', bpsCode: '12.06.07' },
                    { name: 'Tigabinanga (Tiga Binanga)', bpsCode: '12.06.08' },
                    { name: 'Laubaleng', bpsCode: '12.06.09' },
                    { name: 'Mardingding (Mardinding)', bpsCode: '12.06.10' },
                    { name: 'Payung', bpsCode: '12.06.11' },
                    { name: 'Simpang Empat', bpsCode: '12.06.12' },
                    { name: 'Kutabuluh (Kuta Buluh)', bpsCode: '12.06.13' },
                    { name: 'Dolat Rayat', bpsCode: '12.06.14' },
                    { name: 'Merdeka', bpsCode: '12.06.15' },
                    { name: 'Naman Teran (Nama Teran)', bpsCode: '12.06.16' },
                    { name: 'Tiganderket', bpsCode: '12.06.17' }
                ]
            }, {
                name: 'Deli Serdang',
                bpsCode: '12.07',
                districts: [
                    { name: 'Gunung Meriah', bpsCode: '12.07.01' },
                    { name: 'Tanjung Morawa', bpsCode: '12.07.02' },
                    { name: 'Sibolangit', bpsCode: '12.07.03' },
                    { name: 'Kutalimbaru', bpsCode: '12.07.04' },
                    { name: 'Pancur Batu', bpsCode: '12.07.05' },
                    { name: 'Namorambe (Namo Rambe)', bpsCode: '12.07.06' },
                    { name: 'Sibiru-biru (Biru-Biru)', bpsCode: '12.07.07' },
                    { name: 'Sinembah Tanjung Muda Hilir', bpsCode: '12.07.08' },
                    { name: 'Bangun Purba', bpsCode: '12.07.09' },
                    { name: 'Galang', bpsCode: '12.07.19' },
                    { name: 'Sinembah Tanjung Muda Hulu', bpsCode: '12.07.20' },
                    { name: 'Patumbak', bpsCode: '12.07.21' },
                    { name: 'Deli Tua', bpsCode: '12.07.22' },
                    { name: 'Sunggal', bpsCode: '12.07.23' },
                    { name: 'Hamparan Perak', bpsCode: '12.07.24' },
                    { name: 'Labuhan Deli', bpsCode: '12.07.25' },
                    { name: 'Percut Sei Tuan', bpsCode: '12.07.26' },
                    { name: 'Batang Kuis', bpsCode: '12.07.27' },
                    { name: 'Lubuk Pakam', bpsCode: '12.07.28' },
                    { name: 'Pagar Merbau', bpsCode: '12.07.31' },
                    { name: 'Pantai Labu', bpsCode: '12.07.32' },
                    { name: 'Beringin', bpsCode: '12.07.33' }
                ]
            }, {
                name: 'Simalungun',
                bpsCode: '12.08',
                districts: [
                    { name: 'Siantar', bpsCode: '12.08.01' },
                    { name: 'Gunung Malela', bpsCode: '12.08.02' },
                    { name: 'Gunung Maligas', bpsCode: '12.08.03' },
                    { name: 'Panei', bpsCode: '12.08.04' },
                    { name: 'Panombeian Pane', bpsCode: '12.08.05' },
                    { name: 'Jorlang Hataran', bpsCode: '12.08.06' },
                    { name: 'Raya Kahean', bpsCode: '12.08.07' },
                    { name: 'Bosar Maligas', bpsCode: '12.08.08' },
                    { name: 'Sidamanik', bpsCode: '12.08.09' },
                    { name: 'Pematang Sidamanik', bpsCode: '12.08.10' },
                    { name: 'Tanah Jawa', bpsCode: '12.08.11' },
                    { name: 'Hatonduhan', bpsCode: '12.08.12' },
                    { name: 'Dolok Panribuan', bpsCode: '12.08.13' },
                    { name: 'Purba', bpsCode: '12.08.14' },
                    { name: 'Haranggaol Horison', bpsCode: '12.08.15' },
                    { name: 'Girsang Sipangan Bolon', bpsCode: '12.08.16' },
                    { name: 'Dolok Batu Nanggar', bpsCode: '12.08.17' },
                    { name: 'Huta Bayu Raja', bpsCode: '12.08.18' },
                    { name: 'Jawa Maraja Bah Jambi', bpsCode: '12.08.19' },
                    { name: 'Dolok Pardamean', bpsCode: '12.08.20' },
                    { name: 'Pematang Bandar', bpsCode: '12.08.21' },
                    { name: 'Bandar Huluan', bpsCode: '12.08.22' },
                    { name: 'Bandar', bpsCode: '12.08.23' },
                    { name: 'Bandar Masilam', bpsCode: '12.08.24' },
                    { name: 'Silimakuta', bpsCode: '12.08.25' },
                    { name: 'Dolok Silau', bpsCode: '12.08.26' },
                    { name: 'Silou Kahean', bpsCode: '12.08.27' },
                    { name: 'Tapian Dolok', bpsCode: '12.08.28' },
                    { name: 'Raya', bpsCode: '12.08.29' },
                    { name: 'Ujung Padang', bpsCode: '12.08.30' },
                    { name: 'Pematang / Pamatang Silima Huta', bpsCode: '12.08.31' },
                    { name: 'Dolog Masagal', bpsCode: '12.08.32' }
                ]
            }, {
                name: 'Asahan',
                bpsCode: '12.09',
                districts: [
                    { name: 'Meranti', bpsCode: '12.09.08' },
                    { name: 'Air Joman', bpsCode: '12.09.09' },
                    { name: 'Tanjung Balai', bpsCode: '12.09.10' },
                    { name: 'Sei Kepayang', bpsCode: '12.09.11' },
                    { name: 'Simpang Empat', bpsCode: '12.09.12' },
                    { name: 'Air Batu', bpsCode: '12.09.13' },
                    { name: 'Pulau Rakyat', bpsCode: '12.09.14' },
                    { name: 'Bandar Pulau', bpsCode: '12.09.15' },
                    { name: 'Buntu Pane', bpsCode: '12.09.16' },
                    { name: 'Bandar Pasir Mandoge', bpsCode: '12.09.17' },
                    { name: 'Aek Kuasan', bpsCode: '12.09.18' },
                    { name: 'Kota Kisaran Barat', bpsCode: '12.09.19' },
                    { name: 'Kota Kisaran Timur', bpsCode: '12.09.20' },
                    { name: 'Aek Songsongan', bpsCode: '12.09.21' },
                    { name: 'Rahunig (Rahuning)', bpsCode: '12.09.22' },
                    { name: 'Sei Dadap', bpsCode: '12.09.23' },
                    { name: 'Sei Kepayang Barat', bpsCode: '12.09.24' },
                    { name: 'Sei Kepayang Timur', bpsCode: '12.09.25' },
                    { name: 'Tinggi Raja', bpsCode: '12.09.26' },
                    { name: 'Setia Janji', bpsCode: '12.09.27' },
                    { name: 'Silau Laut', bpsCode: '12.09.28' },
                    { name: 'Rawang Panca Arga', bpsCode: '12.09.29' },
                    { name: 'Pulo Bandring', bpsCode: '12.09.30' },
                    { name: 'Teluk Dalam', bpsCode: '12.09.31' },
                    { name: 'Aek Ledong', bpsCode: '12.09.32' }
                ]
            }, {
                name: 'Labuhanbatu',
                bpsCode: '12.10',
                districts: [
                    { name: 'Rantau Utara', bpsCode: '12.10.01' },
                    { name: 'Rantau Selatan', bpsCode: '12.10.02' },
                    { name: 'Bilah Barat', bpsCode: '12.10.07' },
                    { name: 'Bilah Hilir', bpsCode: '12.10.08' },
                    { name: 'Bilah Hulu', bpsCode: '12.10.09' },
                    { name: 'Pangkatan', bpsCode: '12.10.14' },
                    { name: 'Panai Tengah', bpsCode: '12.10.18' },
                    { name: 'Panai Hilir', bpsCode: '12.10.19' },
                    { name: 'Panai Hulu', bpsCode: '12.10.20' }
                ]
            }, {
                name: 'Dairi',
                bpsCode: '12.11',
                districts: [
                    { name: 'Sidikalang', bpsCode: '12.11.01' },
                    { name: 'Sumbul', bpsCode: '12.11.02' },
                    { name: 'Tigalingga (Tiga Lingga)', bpsCode: '12.11.03' },
                    { name: 'Siempat Nempu', bpsCode: '12.11.04' },
                    { name: 'Silima Pungga Pungga', bpsCode: '12.11.05' },
                    { name: 'Tanah Pinem', bpsCode: '12.11.06' },
                    { name: 'Siempat Nempu Hulu', bpsCode: '12.11.07' },
                    { name: 'Siempat Nempu Hilir', bpsCode: '12.11.08' },
                    { name: 'Pegagan Hilir', bpsCode: '12.11.09' },
                    { name: 'Parbuluan', bpsCode: '12.11.10' },
                    { name: 'Lae Parira', bpsCode: '12.11.11' },
                    { name: 'Gunung Sitember', bpsCode: '12.11.12' },
                    { name: 'Berampu (Brampu)', bpsCode: '12.11.13' },
                    { name: 'Silahisabungan (Silahi Sabungan)', bpsCode: '12.11.14' },
                    { name: 'Sitinjo', bpsCode: '12.11.15' }
                ]
            }, {
                name: 'Toba Samosir',
                bpsCode: '12.12',
                districts: [
                    { name: 'Balige', bpsCode: '12.12.01' },
                    { name: 'Laguboti', bpsCode: '12.12.02' },
                    { name: 'Silaen', bpsCode: '12.12.03' },
                    { name: 'Habinsaran', bpsCode: '12.12.04' },
                    { name: 'Pintu Pohan Meranti', bpsCode: '12.12.05' },
                    { name: 'Borbor', bpsCode: '12.12.06' },
                    { name: 'Porsea', bpsCode: '12.12.07' },
                    { name: 'Ajibata', bpsCode: '12.12.08' },
                    { name: 'Lumban Julu', bpsCode: '12.12.09' },
                    { name: 'Uluan', bpsCode: '12.12.10' },
                    { name: 'Sigumpar', bpsCode: '12.12.19' },
                    { name: 'Siantar Narumonda', bpsCode: '12.12.20' },
                    { name: 'Nassau', bpsCode: '12.12.21' },
                    { name: 'Tampahan', bpsCode: '12.12.22' },
                    { name: 'Bonatua Lunasi', bpsCode: '12.12.23' },
                    { name: 'Parmaksian', bpsCode: '12.12.24' }
                ]
            }, {
                name: 'Mandailing Natal',
                bpsCode: '12.13',
                districts: [
                    { name: 'Panyabungan', bpsCode: '12.13.01' },
                    { name: 'Panyabungan Utara', bpsCode: '12.13.02' },
                    { name: 'Panyabungan Timur', bpsCode: '12.13.03' },
                    { name: 'Panyabungan Selatan', bpsCode: '12.13.04' },
                    { name: 'Panyabungan Barat', bpsCode: '12.13.05' },
                    { name: 'Siabu', bpsCode: '12.13.06' },
                    { name: 'Bukit Malintang', bpsCode: '12.13.07' },
                    { name: 'Kotanopan', bpsCode: '12.13.08' },
                    { name: 'Lembah Sorik Marapi', bpsCode: '12.13.09' },
                    { name: 'Tambangan', bpsCode: '12.13.10' },
                    { name: 'Ulu Pungkut', bpsCode: '12.13.11' },
                    { name: 'Muara Sipongi', bpsCode: '12.13.12' },
                    { name: 'Batang Natal', bpsCode: '12.13.13' },
                    { name: 'Lingga Bayu', bpsCode: '12.13.14' },
                    { name: 'Batahan', bpsCode: '12.13.15' },
                    { name: 'Natal', bpsCode: '12.13.16' },
                    { name: 'Muara Batang Gadis', bpsCode: '12.13.17' },
                    { name: 'Ranto Baek', bpsCode: '12.13.18' },
                    { name: 'Huta Bargot', bpsCode: '12.13.19' },
                    { name: 'Puncak Sorik Marapi', bpsCode: '12.13.20' },
                    { name: 'Pakantan', bpsCode: '12.13.21' },
                    { name: 'Sinunukan', bpsCode: '12.13.22' },
                    { name: 'Naga Juang', bpsCode: '12.13.23' }
                ]
            }, {
                name: 'Nias Selatan',
                bpsCode: '12.14',
                districts: [
                    { name: 'Lolomatua', bpsCode: '12.14.01' },
                    { name: 'Gomo', bpsCode: '12.14.02' },
                    { name: 'Lahusa', bpsCode: '12.14.03' },
                    { name: 'Hibala', bpsCode: '12.14.04' },
                    { name: 'Pulau-Pulau Batu', bpsCode: '12.14.05' },
                    { name: 'Teluk Dalam', bpsCode: '12.14.06' },
                    { name: 'Amandraya', bpsCode: '12.14.07' },
                    { name: 'Lolowau', bpsCode: '12.14.08' },
                    { name: 'Susua', bpsCode: '12.14.09' },
                    { name: 'Maniamolo', bpsCode: '12.14.10' },
                    { name: 'Hilimegai', bpsCode: '12.14.11' },
                    { name: 'Toma', bpsCode: '12.14.12' },
                    { name: 'Mazino', bpsCode: '12.14.13' },
                    { name: 'Umbunasi', bpsCode: '12.14.14' },
                    { name: 'Aramo', bpsCode: '12.14.15' },
                    { name: 'Pulau-Pulau Batu Timur', bpsCode: '12.14.16' },
                    { name: 'Mazo', bpsCode: '12.14.17' },
                    { name: 'Fanayama', bpsCode: '12.14.18' },
                    { name: 'Ulunoyo', bpsCode: '12.14.19' },
                    { name: 'Huruna', bpsCode: '12.14.20' },
                    { name: 'O\'o\'u (Oou)', bpsCode: '12.14.21' },
                    { name: 'Onohazumba', bpsCode: '12.14.22' },
                    { name: 'Hilisalawa\'ahe (Hilisalawaahe)', bpsCode: '12.14.23' },
                    { name: 'Ulususua', bpsCode: '12.14.24' },
                    { name: 'Sidua\'ori', bpsCode: '12.14.25' },
                    { name: 'Somambawa', bpsCode: '12.14.26' },
                    { name: 'Boronadu', bpsCode: '12.14.27' },
                    { name: 'Simuk', bpsCode: '12.14.28' },
                    { name: 'Pulau-Pulau Batu Barat', bpsCode: '12.14.29' },
                    { name: 'Pulau-Pulau Batu Utara', bpsCode: '12.14.30' },
                    { name: 'Tanah Masa', bpsCode: '12.14.31' },
                    { name: 'Luahagundre Maniamolo', bpsCode: '12.14.32' },
                    { name: 'Onolalu', bpsCode: '12.14.33' },
                    { name: 'Ulu Idanotae', bpsCode: '12.14.34' },
                    { name: 'Idanotae', bpsCode: '12.14.35' }
                ]
            }, {
                name: 'Pakpak Bharat',
                bpsCode: '12.15',
                districts: [
                    { name: 'Sitellu / Sitelu Tali Urang Jehe', bpsCode: '12.15.01' },
                    { name: 'Kerajaan', bpsCode: '12.15.02' },
                    { name: 'Salak', bpsCode: '12.15.03' },
                    { name: 'Sitellu / Sitelu Tali Urang Julu', bpsCode: '12.15.04' },
                    { name: 'Pergetteng Getteng Sengkut', bpsCode: '12.15.05' },
                    { name: 'Pagindar', bpsCode: '12.15.06' },
                    { name: 'Tinada', bpsCode: '12.15.07' },
                    { name: 'Siempat Rube', bpsCode: '12.15.08' }
                ]
            }, {
                name: 'Humbang Hasundutan',
                bpsCode: '12.16',
                districts: [
                    { name: 'Parlilitan', bpsCode: '12.16.01' },
                    { name: 'Pollung', bpsCode: '12.16.02' },
                    { name: 'Baktiraja (Bakti Raja)', bpsCode: '12.16.03' },
                    { name: 'Paranginan', bpsCode: '12.16.04' },
                    { name: 'Lintong Nihuta', bpsCode: '12.16.05' },
                    { name: 'Dolok Sanggul', bpsCode: '12.16.06' },
                    { name: 'Sijamapolang (Sijama Polang)', bpsCode: '12.16.07' },
                    { name: 'Onan Ganjang', bpsCode: '12.16.08' },
                    { name: 'Pakkat', bpsCode: '12.16.09' },
                    { name: 'Tarabintang (Tara Bintang)', bpsCode: '12.16.10' }
                ]
            }, {
                name: 'Samosir',
                bpsCode: '12.17',
                districts: [
                    { name: 'Simanindo', bpsCode: '12.17.01' },
                    { name: 'Onan Runggu', bpsCode: '12.17.02' },
                    { name: 'Nainggolan', bpsCode: '12.17.03' },
                    { name: 'Palipi', bpsCode: '12.17.04' },
                    { name: 'Harian', bpsCode: '12.17.05' },
                    { name: 'Sianjur / Sianjar Mula Mula', bpsCode: '12.17.06' },
                    { name: 'Ronggur Nihuta', bpsCode: '12.17.07' },
                    { name: 'Pangururan', bpsCode: '12.17.08' },
                    { name: 'Sitio-tio', bpsCode: '12.17.09' }
                ]
            }, {
                name: 'Serdang Bedagai',
                bpsCode: '12.18',
                districts: [
                    { name: 'Pantai Cermin', bpsCode: '12.18.01' },
                    { name: 'Perbaungan', bpsCode: '12.18.02' },
                    { name: 'Teluk Mengkudu', bpsCode: '12.18.03' },
                    { name: 'Sei Rampah', bpsCode: '12.18.04' },
                    { name: 'Tanjung Beringin', bpsCode: '12.18.05' },
                    { name: 'Bandar Khalifah', bpsCode: '12.18.06' },
                    { name: 'Dolok Merawan', bpsCode: '12.18.07' },
                    { name: 'Sipispis', bpsCode: '12.18.08' },
                    { name: 'Dolok Masihul', bpsCode: '12.18.09' },
                    { name: 'Kotarih', bpsCode: '12.18.10' },
                    { name: 'Silinda', bpsCode: '12.18.11' },
                    { name: 'Serba Jadi', bpsCode: '12.18.12' },
                    { name: 'Tebing Tinggi', bpsCode: '12.18.13' },
                    { name: 'Pegajahan', bpsCode: '12.18.14' },
                    { name: 'Sei Bamban', bpsCode: '12.18.15' },
                    { name: 'Tebing Syahbandar', bpsCode: '12.18.16' },
                    { name: 'Bintang Bayu', bpsCode: '12.18.17' }
                ]
            }, {
                name: 'Batu Bara',
                bpsCode: '12.19',
                districts: [
                    { name: 'Medang Deras', bpsCode: '12.19.01' },
                    { name: 'Sei Suka', bpsCode: '12.19.02' },
                    { name: 'Air Putih', bpsCode: '12.19.03' },
                    { name: 'Lima Puluh (Limapuluh)', bpsCode: '12.19.04' },
                    { name: 'Talawi', bpsCode: '12.19.05' },
                    { name: 'Tanjung Tiram', bpsCode: '12.19.06' },
                    { name: 'Sei Balai', bpsCode: '12.19.07' }
                ]
            }, {
                name: 'Padang Lawas Utara',
                bpsCode: '12.20',
                districts: [
                    { name: 'Dolok Sigompulon', bpsCode: '12.20.01' },
                    { name: 'Dolok', bpsCode: '12.20.02' },
                    { name: 'Halongonan', bpsCode: '12.20.03' },
                    { name: 'Padang Bolak', bpsCode: '12.20.04' },
                    { name: 'Padang Bolak Julu', bpsCode: '12.20.05' },
                    { name: 'Portibi', bpsCode: '12.20.06' },
                    { name: 'Batang Onang', bpsCode: '12.20.07' },
                    { name: 'Simangambat', bpsCode: '12.20.08' },
                    { name: 'Hulu Sihapas', bpsCode: '12.20.09' },
                    { name: 'Padang Bolak Tenggara', bpsCode: '12.20.10' },
                    { name: 'Halongonan Timur', bpsCode: '12.20.11' },
                    { name: 'Ujung Batu', bpsCode: '12.20.12' }
                ]
            }, {
                name: 'Padang Lawas',
                bpsCode: '12.21',
                districts: [
                    { name: 'Sosopan', bpsCode: '12.21.01' },
                    { name: 'Barumun Tengah', bpsCode: '12.21.02' },
                    { name: 'Huristak', bpsCode: '12.21.03' },
                    { name: 'Lubuk Barumun', bpsCode: '12.21.04' },
                    { name: 'Huta Raja Tinggi', bpsCode: '12.21.05' },
                    { name: 'Ulu Barumun', bpsCode: '12.21.06' },
                    { name: 'Barumun', bpsCode: '12.21.07' },
                    { name: 'Sosa', bpsCode: '12.21.08' },
                    { name: 'Batang Lubu Sutam', bpsCode: '12.21.09' },
                    { name: 'Barumun Selatan', bpsCode: '12.21.10' },
                    { name: 'Aek Nabara Barumun', bpsCode: '12.21.11' },
                    { name: 'Sihapas Barumun', bpsCode: '12.21.12' }
                ]
            }, {
                name: 'Labuhanbatu Selatan',
                bpsCode: '12.22',
                districts: [
                    { name: 'Kotapinang (Kota Pinang)', bpsCode: '12.22.01' },
                    { name: 'Kampung Rakyat', bpsCode: '12.22.02' },
                    { name: 'Torgamba', bpsCode: '12.22.03' },
                    { name: 'Sei/Sungai Kanan', bpsCode: '12.22.04' },
                    { name: 'Silangkitang', bpsCode: '12.22.05' }
                ]
            }, {
                name: 'Labuhanbatu Utara',
                bpsCode: '12.23',
                districts: [
                    { name: 'Kualuh Hulu', bpsCode: '12.23.01' },
                    { name: 'Kualuh Leidong', bpsCode: '12.23.02' },
                    { name: 'Kualuh Hilir', bpsCode: '12.23.03' },
                    { name: 'Aek Kuo', bpsCode: '12.23.04' },
                    { name: 'Marbau', bpsCode: '12.23.05' },
                    { name: 'Na IX-X', bpsCode: '12.23.06' },
                    { name: 'Aek Natas', bpsCode: '12.23.07' },
                    { name: 'Kualuh Selatan', bpsCode: '12.23.08' }
                ]
            }, {
                name: 'Nias Utara',
                bpsCode: '12.24',
                districts: [
                    { name: 'Lotu', bpsCode: '12.24.01' },
                    { name: 'Sawo', bpsCode: '12.24.02' },
                    { name: 'Tuhemberua', bpsCode: '12.24.03' },
                    { name: 'Sitolu Ori', bpsCode: '12.24.04' },
                    { name: 'Namohalu Esiwa', bpsCode: '12.24.05' },
                    { name: 'Alasa Talumuzoi', bpsCode: '12.24.06' },
                    { name: 'Alasa', bpsCode: '12.24.07' },
                    { name: 'Tugala Oyo', bpsCode: '12.24.08' },
                    { name: 'Afulu', bpsCode: '12.24.09' },
                    { name: 'Lahewa', bpsCode: '12.24.10' },
                    { name: 'Lahewa Timur', bpsCode: '12.24.11' }
                ]
            }, {
                name: 'Nias Barat',
                bpsCode: '12.25',
                districts: [
                    { name: 'Lahomi (Gahori)', bpsCode: '12.25.01' },
                    { name: 'Sirombu', bpsCode: '12.25.02' },
                    { name: 'Mandrehe Barat', bpsCode: '12.25.03' },
                    { name: 'Moro\'o', bpsCode: '12.25.04' },
                    { name: 'Mandrehe', bpsCode: '12.25.05' },
                    { name: 'Mandrehe Utara', bpsCode: '12.25.06' },
                    { name: 'Lolofitu Moi', bpsCode: '12.25.07' },
                    { name: 'Ulu Moro\'o (Ulu Narwo)', bpsCode: '12.25.08' }
                ]
            }, {
                name: 'Medan',
                bpsCode: '12.71',
                districts: [
                    { name: 'Medan Kota', bpsCode: '12.71.01' },
                    { name: 'Medan Sunggal', bpsCode: '12.71.02' },
                    { name: 'Medan Helvetia', bpsCode: '12.71.03' },
                    { name: 'Medan Denai', bpsCode: '12.71.04' },
                    { name: 'Medan Barat', bpsCode: '12.71.05' },
                    { name: 'Medan Deli', bpsCode: '12.71.06' },
                    { name: 'Medan Tuntungan', bpsCode: '12.71.07' },
                    { name: 'Medan Belawan (Medan Belawan Kota)', bpsCode: '12.71.08' },
                    { name: 'Medan Amplas', bpsCode: '12.71.09' },
                    { name: 'Medan Area', bpsCode: '12.71.10' },
                    { name: 'Medan Johor', bpsCode: '12.71.11' },
                    { name: 'Medan Marelan', bpsCode: '12.71.12' },
                    { name: 'Medan Labuhan', bpsCode: '12.71.13' },
                    { name: 'Medan Tembung', bpsCode: '12.71.14' },
                    { name: 'Medan Maimun', bpsCode: '12.71.15' },
                    { name: 'Medan Polonia', bpsCode: '12.71.16' },
                    { name: 'Medan Baru', bpsCode: '12.71.17' },
                    { name: 'Medan Perjuangan', bpsCode: '12.71.18' },
                    { name: 'Medan Petisah', bpsCode: '12.71.19' },
                    { name: 'Medan Timur', bpsCode: '12.71.20' },
                    { name: 'Medan Selayang', bpsCode: '12.71.21' }
                ]
            }, {
                name: 'Pematang Siantar',
                bpsCode: '12.72',
                districts: [
                    { name: 'Siantar Timur', bpsCode: '12.72.01' },
                    { name: 'Siantar Barat', bpsCode: '12.72.02' },
                    { name: 'Siantar Utara', bpsCode: '12.72.03' },
                    { name: 'Siantar Selatan', bpsCode: '12.72.04' },
                    { name: 'Siantar Marihat', bpsCode: '12.72.05' },
                    { name: 'Siantar Martoba', bpsCode: '12.72.06' },
                    { name: 'Siantar Sitalasari', bpsCode: '12.72.07' },
                    { name: 'Siantar Marimbun', bpsCode: '12.72.08' }
                ]
            }, {
                name: 'Sibolga',
                bpsCode: '12.73',
                districts: [
                    { name: 'Sibolga Utara', bpsCode: '12.73.01' },
                    { name: 'Sibolga Kota', bpsCode: '12.73.02' },
                    { name: 'Sibolga Selatan', bpsCode: '12.73.03' },
                    { name: 'Sibolga Sambas', bpsCode: '12.73.04' }
                ]
            }, {
                name: 'Tanjung Balai',
                bpsCode: '12.74',
                districts: [
                    { name: 'Tanjung Balai Selatan', bpsCode: '12.74.01' },
                    { name: 'Tanjung Balai Utara', bpsCode: '12.74.02' },
                    { name: 'Sei Tualang Raso', bpsCode: '12.74.03' },
                    { name: 'Teluk Nibung', bpsCode: '12.74.04' },
                    { name: 'Datuk Bandar', bpsCode: '12.74.05' },
                    { name: 'Datuk Bandar Timur', bpsCode: '12.74.06' }
                ]
            }, {
                name: 'Binjai',
                bpsCode: '12.75',
                districts: [
                    { name: 'Binjai Utara', bpsCode: '12.75.01' },
                    { name: 'Binjai Kota', bpsCode: '12.75.02' },
                    { name: 'Binjai Barat', bpsCode: '12.75.03' },
                    { name: 'Binjai Timur', bpsCode: '12.75.04' },
                    { name: 'Binjai Selatan', bpsCode: '12.75.05' }
                ]
            }, {
                name: 'Tebing Tinggi',
                bpsCode: '12.76',
                districts: [
                    { name: 'Padang Hulu', bpsCode: '12.76.01' },
                    { name: 'Rambutan', bpsCode: '12.76.02' },
                    { name: 'Padang Hilir', bpsCode: '12.76.03' },
                    { name: 'Bajenis', bpsCode: '12.76.04' },
                    { name: 'Tebing Tinggi Kota', bpsCode: '12.76.05' }
                ]
            }, {
                name: 'Padang Sidempuan',
                bpsCode: '12.77',
                districts: [
                    { name: 'Padangsidimpuan / Padang Sidempuan Utara', bpsCode: '12.77.01' },
                    { name: 'Padangsidimpuan / Padang Sidempuan Selatan', bpsCode: '12.77.02' },
                    { name: 'Padangsidimpuan / Padang Sidempuan Batunadua', bpsCode: '12.77.03' },
                    { name: 'Padangsidimpuan / Padang Sidempuan Hutaimbaru', bpsCode: '12.77.04' },
                    { name: 'Padangsidimpuan / Padang Sidempuan Tenggara', bpsCode: '12.77.05' },
                    { name: 'Padangsidimpuan / Padang Sidempuan Angkola Julu', bpsCode: '12.77.06' }
                ]
            }, {
                name: 'Gunungsitoli',
                bpsCode: '12.78',
                districts: [
                    { name: 'Gunungsitoli', bpsCode: '12.78.01' },
                    { name: 'Gunungsitoli Selatan', bpsCode: '12.78.02' },
                    { name: 'Gunungsitoli Utara', bpsCode: '12.78.03' },
                    { name: 'Gunungsitoli Idanoi', bpsCode: '12.78.04' },
                    { name: 'Gunungsitoli Alo\'oa', bpsCode: '12.78.05' },
                    { name: 'Gunungsitoli Barat', bpsCode: '12.78.06' }
                ]
            }
        ]
    },
    '13': {
        regencies: [
            {
                name: 'Pesisir Selatan',
                bpsCode: '13.01',
                districts: [
                    { name: 'Pancung Soal', bpsCode: '13.01.01' },
                    { name: 'Ranah Pesisir', bpsCode: '13.01.02' },
                    { name: 'Lengayang', bpsCode: '13.01.03' },
                    { name: 'Batang Kapas', bpsCode: '13.01.04' },
                    { name: 'IV Jurai', bpsCode: '13.01.05' },
                    { name: 'Bayang', bpsCode: '13.01.06' },
                    { name: 'Koto XI Tarusan', bpsCode: '13.01.07' },
                    { name: 'Sutera', bpsCode: '13.01.08' },
                    { name: 'Linggo Sari Baganti', bpsCode: '13.01.09' },
                    { name: 'Lunang', bpsCode: '13.01.10' },
                    { name: 'Basa Ampek Balai Tapan', bpsCode: '13.01.11' },
                    { name: 'IV Nagari Bayang Utara', bpsCode: '13.01.12' },
                    { name: 'Airpura', bpsCode: '13.01.13' },
                    { name: 'Ranah Ampek Hulu Tapan', bpsCode: '13.01.14' },
                    { name: 'Silaut', bpsCode: '13.01.15' }
                ]
            }, {
                name: 'Solok',
                bpsCode: '13.02',
                districts: [
                    { name: 'Pantai Cermin', bpsCode: '13.02.03' },
                    { name: 'Lembah Gumanti', bpsCode: '13.02.04' },
                    { name: 'Payung Sekaki', bpsCode: '13.02.05' },
                    { name: 'Lembang Jaya', bpsCode: '13.02.06' },
                    { name: 'Gunung Talang', bpsCode: '13.02.07' },
                    { name: 'Bukit Sundi', bpsCode: '13.02.08' },
                    { name: 'IX Koto Sungai Lasi', bpsCode: '13.02.09' },
                    { name: 'Kubung', bpsCode: '13.02.10' },
                    { name: 'X Koto Singkarak', bpsCode: '13.02.11' },
                    { name: 'X Koto Diatas', bpsCode: '13.02.12' },
                    { name: 'Junjung Sirih', bpsCode: '13.02.13' },
                    { name: 'Hiliran Gumanti', bpsCode: '13.02.17' },
                    { name: 'Tigo Lurah', bpsCode: '13.02.18' },
                    { name: 'Danau Kembar', bpsCode: '13.02.19' }
                ]
            }, {
                name: 'Sijunjung',
                bpsCode: '13.03',
                districts: [
                    { name: 'Tanjung Gadang', bpsCode: '13.03.03' },
                    { name: 'Sijunjung', bpsCode: '13.03.04' },
                    { name: 'IV Nagari', bpsCode: '13.03.05' },
                    { name: 'Kamang Baru', bpsCode: '13.03.06' },
                    { name: 'Lubuak Tarok', bpsCode: '13.03.07' },
                    { name: 'Koto VII', bpsCode: '13.03.08' },
                    { name: 'Sumpur Kudus', bpsCode: '13.03.09' },
                    { name: 'Kupitan', bpsCode: '13.03.10' }
                ]
            }, {
                name: 'Tanah Datar',
                bpsCode: '13.04',
                districts: [
                    { name: 'Sepuluh Koto (X Koto)', bpsCode: '13.04.01' },
                    { name: 'Batipuh', bpsCode: '13.04.02' },
                    { name: 'Rambatan', bpsCode: '13.04.03' },
                    { name: 'Lima Kaum', bpsCode: '13.04.04' },
                    { name: 'Tanjung Emas', bpsCode: '13.04.05' },
                    { name: 'Lintau Buo', bpsCode: '13.04.06' },
                    { name: 'Sungayang', bpsCode: '13.04.07' },
                    { name: 'Sungai Tarab', bpsCode: '13.04.08' },
                    { name: 'Pariangan', bpsCode: '13.04.09' },
                    { name: 'Salimpauang (Salimpaung)', bpsCode: '13.04.10' },
                    { name: 'Padang Ganting', bpsCode: '13.04.11' },
                    { name: 'Tanjuang Baru (Tanjung Baru)', bpsCode: '13.04.12' },
                    { name: 'Lintau Buo Utara', bpsCode: '13.04.13' },
                    { name: 'Batipuah Selatan (Batipuh Selatan)', bpsCode: '13.04.14' }
                ]
            }, {
                name: 'Padang Pariaman',
                bpsCode: '13.05',
                districts: [
                    { name: 'Lubuk Alung', bpsCode: '13.05.01' },
                    { name: 'Batang Anai', bpsCode: '13.05.02' },
                    { name: 'Nan Sabaris', bpsCode: '13.05.03' },
                    { name: '2 X 11 Enam Lingkuang', bpsCode: '13.05.04' },
                    { name: 'VII Koto Sungai Sarik', bpsCode: '13.05.05' },
                    { name: 'V Koto Kampung Dalam', bpsCode: '13.05.06' },
                    { name: 'Sungai Garingging', bpsCode: '13.05.07' },
                    { name: 'Sungai Limau', bpsCode: '13.05.08' },
                    { name: 'IV Koto Aur Malintang', bpsCode: '13.05.09' },
                    { name: 'Ulakan Tapakih', bpsCode: '13.05.10' },
                    { name: 'Sintuak Toboh Gadang', bpsCode: '13.05.11' },
                    { name: 'Padang Sago', bpsCode: '13.05.12' },
                    { name: 'Batang Gasan', bpsCode: '13.05.13' },
                    { name: 'V Koto Timur', bpsCode: '13.05.14' },
                    { name: '2 X 11 Kayu Tanam', bpsCode: '13.05.15' },
                    { name: 'Patamuan', bpsCode: '13.05.16' },
                    { name: 'Enam Lingkung', bpsCode: '13.05.17' }
                ]
            }, {
                name: 'Agam',
                bpsCode: '13.06',
                districts: [
                    { name: 'Tanjung Mutiara', bpsCode: '13.06.01' },
                    { name: 'Lubuk Basung', bpsCode: '13.06.02' },
                    { name: 'Tanjung Raya', bpsCode: '13.06.03' },
                    { name: 'Matur', bpsCode: '13.06.04' },
                    { name: 'IV Koto (Ampek Koto)', bpsCode: '13.06.05' },
                    { name: 'Banuhampu', bpsCode: '13.06.06' },
                    { name: 'IV Angkat Candung (Ampek Angkek)', bpsCode: '13.06.07' },
                    { name: 'Baso', bpsCode: '13.06.08' },
                    { name: 'Tilatang Kamang', bpsCode: '13.06.09' },
                    { name: 'Palupuh', bpsCode: '13.06.10' },
                    { name: 'Pelembayan (Palembayan)', bpsCode: '13.06.11' },
                    { name: 'Sungai Pua (Puar)', bpsCode: '13.06.12' },
                    { name: 'Ampek Nagari (IV Nagari )', bpsCode: '13.06.13' },
                    { name: 'Candung', bpsCode: '13.06.14' },
                    { name: 'Kamang Magek', bpsCode: '13.06.15' },
                    { name: 'Malalak (Malakak)', bpsCode: '13.06.16' }
                ]
            }, {
                name: 'Lima Puluh Kota',
                bpsCode: '13.07',
                districts: [
                    { name: 'Suliki', bpsCode: '13.07.01' },
                    { name: 'Guguak (Gugu)', bpsCode: '13.07.02' },
                    { name: 'Payakumbuh', bpsCode: '13.07.03' },
                    { name: 'Luak (Luhak)', bpsCode: '13.07.04' },
                    { name: 'Harau', bpsCode: '13.07.05' },
                    { name: 'Pangkalan Koto Baru', bpsCode: '13.07.06' },
                    { name: 'Kapur IX/Sembilan', bpsCode: '13.07.07' },
                    { name: 'Gunuang Omeh (Gunung Mas)', bpsCode: '13.07.08' },
                    { name: 'Lareh Sago Halaban', bpsCode: '13.07.09' },
                    { name: 'Situjuah Limo/Lima Nagari', bpsCode: '13.07.10' },
                    { name: 'Mungka', bpsCode: '13.07.11' },
                    { name: 'Bukik Barisan', bpsCode: '13.07.12' },
                    { name: 'Akabiluru', bpsCode: '13.07.13' }
                ]
            }, {
                name: 'Pasaman',
                bpsCode: '13.08',
                districts: [
                    { name: 'Bonjol', bpsCode: '13.08.04' },
                    { name: 'Lubuk Sikaping', bpsCode: '13.08.05' },
                    { name: 'Panti', bpsCode: '13.08.07' },
                    { name: 'Mapat Tunggul', bpsCode: '13.08.08' },
                    { name: 'Duo Koto', bpsCode: '13.08.12' },
                    { name: 'Tigo Nagari', bpsCode: '13.08.13' },
                    { name: 'Rao', bpsCode: '13.08.14' },
                    { name: 'Mapat Tunggul Selatan', bpsCode: '13.08.15' },
                    { name: 'Simpang Alahan Mati', bpsCode: '13.08.16' },
                    { name: 'Padang Gelugur', bpsCode: '13.08.17' },
                    { name: 'Rao Utara', bpsCode: '13.08.18' },
                    { name: 'Rao Selatan', bpsCode: '13.08.19' }
                ]
            }, {
                name: 'Kepulauan Mentawai',
                bpsCode: '13.09',
                districts: [
                    { name: 'Pagai Utara', bpsCode: '13.09.01' },
                    { name: 'Sipora Selatan', bpsCode: '13.09.02' },
                    { name: 'Siberut Selatan', bpsCode: '13.09.03' },
                    { name: 'Siberut Utara', bpsCode: '13.09.04' },
                    { name: 'Siberut Barat', bpsCode: '13.09.05' },
                    { name: 'Siberut Barat Daya', bpsCode: '13.09.06' },
                    { name: 'Siberut Tengah', bpsCode: '13.09.07' },
                    { name: 'Sipora Utara', bpsCode: '13.09.08' },
                    { name: 'Sikakap', bpsCode: '13.09.09' },
                    { name: 'Pagai Selatan', bpsCode: '13.09.10' }
                ]
            }, {
                name: 'Dharmasraya',
                bpsCode: '13.10',
                districts: [
                    { name: 'Koto Baru', bpsCode: '13.10.01' },
                    { name: 'Pulau Punjung', bpsCode: '13.10.02' },
                    { name: 'Sungai Rumbai', bpsCode: '13.10.03' },
                    { name: 'Sitiung', bpsCode: '13.10.04' },
                    { name: 'Sembilan Koto', bpsCode: '13.10.05' },
                    { name: 'Timpeh', bpsCode: '13.10.06' },
                    { name: 'Koto Salak', bpsCode: '13.10.07' },
                    { name: 'Tiumang', bpsCode: '13.10.08' },
                    { name: 'Padang Laweh', bpsCode: '13.10.09' },
                    { name: 'Asam Jujuhan', bpsCode: '13.10.10' },
                    { name: 'Koto Besar', bpsCode: '13.10.11' }
                ]
            }, {
                name: 'Solok Selatan',
                bpsCode: '13.11',
                districts: [
                    { name: 'Sangir', bpsCode: '13.11.01' },
                    { name: 'Sungai Pagu', bpsCode: '13.11.02' },
                    { name: 'Koto Parik Gadang Diateh', bpsCode: '13.11.03' },
                    { name: 'Sangir Jujuan', bpsCode: '13.11.04' },
                    { name: 'Sangir Batang Hari', bpsCode: '13.11.05' },
                    { name: 'Pauh Duo', bpsCode: '13.11.06' },
                    { name: 'Sangir Balai Janggo', bpsCode: '13.11.07' }
                ]
            }, {
                name: 'Pasaman Barat',
                bpsCode: '13.12',
                districts: [
                    { name: 'Sungaiberemas (Sei Beremas)', bpsCode: '13.12.01' },
                    { name: 'Lembah Melintang', bpsCode: '13.12.02' },
                    { name: 'Pasaman', bpsCode: '13.12.03' },
                    { name: 'Talamau', bpsCode: '13.12.04' },
                    { name: 'Kinali', bpsCode: '13.12.05' },
                    { name: 'Gunungtuleh (Gunung Tuleh)', bpsCode: '13.12.06' },
                    { name: 'Ranah Batahan', bpsCode: '13.12.07' },
                    { name: 'Koto Balingka', bpsCode: '13.12.08' },
                    { name: 'Sungaiaur (Sungai Aur)', bpsCode: '13.12.09' },
                    { name: 'Luhak Nan Duo', bpsCode: '13.12.10' },
                    { name: 'Sasak Ranah Pesisir / Pasisir / Pesisie', bpsCode: '13.12.11' }
                ]
            }, {
                name: 'Padang',
                bpsCode: '13.71',
                districts: [
                    { name: 'Padang Selatan', bpsCode: '13.71.01' },
                    { name: 'Padang Timur', bpsCode: '13.71.02' },
                    { name: 'Padang Barat', bpsCode: '13.71.03' },
                    { name: 'Padang Utara', bpsCode: '13.71.04' },
                    { name: 'Bungus Teluk Kabung', bpsCode: '13.71.05' },
                    { name: 'Lubuk Begalung', bpsCode: '13.71.06' },
                    { name: 'Lubuk Kilangan', bpsCode: '13.71.07' },
                    { name: 'Pauh', bpsCode: '13.71.08' },
                    { name: 'Kuranji', bpsCode: '13.71.09' },
                    { name: 'Nanggalo', bpsCode: '13.71.10' },
                    { name: 'Koto Tangah', bpsCode: '13.71.11' }
                ]
            }, {
                name: 'Solok',
                bpsCode: '13.72',
                districts: [
                    { name: 'Lubuk Sikarah', bpsCode: '13.72.01' },
                    { name: 'Tanjung Harapan', bpsCode: '13.72.02' }
                ]
            }, {
                name: 'Sawah Lunto',
                bpsCode: '13.73',
                districts: [
                    { name: 'Lembah Segar', bpsCode: '13.73.01' },
                    { name: 'Barangin', bpsCode: '13.73.02' },
                    { name: 'Silungkang', bpsCode: '13.73.03' },
                    { name: 'Talawi', bpsCode: '13.73.04' }
                ]
            }, {
                name: 'Padang Panjang',
                bpsCode: '13.74',
                districts: [
                    { name: 'Padang Panjang Timur', bpsCode: '13.74.01' },
                    { name: 'Padang Panjang Barat', bpsCode: '13.74.02' }
                ]
            }, {
                name: 'Bukittinggi',
                bpsCode: '13.75',
                districts: [
                    { name: 'Guguk Panjang (Guguak Panjang)', bpsCode: '13.75.01' },
                    { name: 'Mandiangin Koto Selayan', bpsCode: '13.75.02' },
                    { name: 'Aur Birugo Tigo Baleh', bpsCode: '13.75.03' }
                ]
            }, {
                name: 'Payakumbuh',
                bpsCode: '13.76',
                districts: [
                    { name: 'Payakumbuh Barat', bpsCode: '13.76.01' },
                    { name: 'Payakumbuh Utara', bpsCode: '13.76.02' },
                    { name: 'Payakumbuh Timur', bpsCode: '13.76.03' },
                    { name: 'Lamposi Tigo Nagori / Nagari', bpsCode: '13.76.04' },
                    { name: 'Payakumbuh Selatan', bpsCode: '13.76.05' }
                ]
            }, {
                name: 'Pariaman',
                bpsCode: '13.77',
                districts: [
                    { name: 'Pariaman Tengah', bpsCode: '13.77.01' },
                    { name: 'Pariaman Utara', bpsCode: '13.77.02' },
                    { name: 'Pariaman Selatan', bpsCode: '13.77.03' },
                    { name: 'Pariaman Timur', bpsCode: '13.77.04' }
                ]
            }
        ]
    },
    '14': {
        regencies: [
            {
                name: 'Kampar',
                bpsCode: '14.01',
                districts: [
                    { name: 'Bangkinang Kota', bpsCode: '14.01.01' },
                    { name: 'Kampar', bpsCode: '14.01.02' },
                    { name: 'Tambang', bpsCode: '14.01.03' },
                    { name: 'XIII Koto Kampar', bpsCode: '14.01.04' },
                    { name: 'Kuok', bpsCode: '14.01.05' },
                    { name: 'Siak Hulu', bpsCode: '14.01.06' },
                    { name: 'Kampar Kiri', bpsCode: '14.01.07' },
                    { name: 'Kampar Kiri Hilir', bpsCode: '14.01.08' },
                    { name: 'Kampar Kiri Hulu', bpsCode: '14.01.09' },
                    { name: 'Tapung', bpsCode: '14.01.10' },
                    { name: 'Tapung Hilir', bpsCode: '14.01.11' },
                    { name: 'Tapung Hulu', bpsCode: '14.01.12' },
                    { name: 'Salo', bpsCode: '14.01.13' },
                    { name: 'Rumbio Jaya', bpsCode: '14.01.14' },
                    { name: 'Bangkinang', bpsCode: '14.01.15' },
                    { name: 'Perhentian Raja', bpsCode: '14.01.16' },
                    { name: 'Kampa (Kampar Timur)', bpsCode: '14.01.17' },
                    { name: 'Kampar Utara', bpsCode: '14.01.18' },
                    { name: 'Kampar Kiri Tengah', bpsCode: '14.01.19' },
                    { name: 'Gunung Sahilan', bpsCode: '14.01.20' },
                    { name: 'Koto Kampar Hulu', bpsCode: '14.01.21' }
                ]
            }, {
                name: 'Indragiri Hulu',
                bpsCode: '14.02',
                districts: [
                    { name: 'Rengat', bpsCode: '14.02.01' },
                    { name: 'Rengat Barat', bpsCode: '14.02.02' },
                    { name: 'Kelayang', bpsCode: '14.02.03' },
                    { name: 'Pasir Penyu', bpsCode: '14.02.04' },
                    { name: 'Peranap', bpsCode: '14.02.05' },
                    { name: 'Siberida (Seberida)', bpsCode: '14.02.06' },
                    { name: 'Batang Cenaku', bpsCode: '14.02.07' },
                    { name: 'Batang Gangsal (Batang Gansal)', bpsCode: '14.02.08' },
                    { name: 'Lirik', bpsCode: '14.02.09' },
                    { name: 'Kuala Cenaku', bpsCode: '14.02.10' },
                    { name: 'Sungai Lala', bpsCode: '14.02.11' },
                    { name: 'Lubuk Batu Jaya', bpsCode: '14.02.12' },
                    { name: 'Rakit Kulim', bpsCode: '14.02.13' },
                    { name: 'Batang Peranap', bpsCode: '14.02.14' }
                ]
            }, {
                name: 'Bengkalis',
                bpsCode: '14.03',
                districts: [
                    { name: 'Bengkalis', bpsCode: '14.03.01' },
                    { name: 'Bantan', bpsCode: '14.03.02' },
                    { name: 'Bukit Batu', bpsCode: '14.03.03' },
                    { name: 'Mandau', bpsCode: '14.03.09' },
                    { name: 'Rupat', bpsCode: '14.03.10' },
                    { name: 'Rupat Utara', bpsCode: '14.03.11' },
                    { name: 'Siak Kecil', bpsCode: '14.03.12' },
                    { name: 'Pinggir', bpsCode: '14.03.13' },
                    { name: 'Bandar Laksamana', bpsCode: '14.03.14' },
                    { name: 'Talang Muandau', bpsCode: '14.03.15' },
                    { name: 'Bathin Solapan', bpsCode: '14.03.16' }
                ]
            }, {
                name: 'Indragiri Hilir',
                bpsCode: '14.04',
                districts: [
                    { name: 'Reteh', bpsCode: '14.04.01' },
                    { name: 'Enok', bpsCode: '14.04.02' },
                    { name: 'Kuala Indragiri', bpsCode: '14.04.03' },
                    { name: 'Tembilahan', bpsCode: '14.04.04' },
                    { name: 'Tempuling', bpsCode: '14.04.05' },
                    { name: 'Gaung Anak Serka', bpsCode: '14.04.06' },
                    { name: 'Mandah', bpsCode: '14.04.07' },
                    { name: 'Kateman', bpsCode: '14.04.08' },
                    { name: 'Keritang', bpsCode: '14.04.09' },
                    { name: 'Tanah Merah', bpsCode: '14.04.10' },
                    { name: 'Batang Tuaka', bpsCode: '14.04.11' },
                    { name: 'Gaung', bpsCode: '14.04.12' },
                    { name: 'Tembilahan Hulu', bpsCode: '14.04.13' },
                    { name: 'Kemuning', bpsCode: '14.04.14' },
                    { name: 'Pelangiran', bpsCode: '14.04.15' },
                    { name: 'Teluk Belengkong', bpsCode: '14.04.16' },
                    { name: 'Pulau Burung', bpsCode: '14.04.17' },
                    { name: 'Concong', bpsCode: '14.04.18' },
                    { name: 'Kempas', bpsCode: '14.04.19' },
                    { name: 'Sungai Batang', bpsCode: '14.04.20' }
                ]
            }, {
                name: 'Pelalawan',
                bpsCode: '14.05',
                districts: [
                    { name: 'Ukui', bpsCode: '14.05.01' },
                    { name: 'Pangkalan Kerinci', bpsCode: '14.05.02' },
                    { name: 'Pangkalan Kuras', bpsCode: '14.05.03' },
                    { name: 'Pangkalan Lesung', bpsCode: '14.05.04' },
                    { name: 'Langgam', bpsCode: '14.05.05' },
                    { name: 'Pelalawan', bpsCode: '14.05.06' },
                    { name: 'Kerumutan', bpsCode: '14.05.07' },
                    { name: 'Bunut', bpsCode: '14.05.08' },
                    { name: 'Teluk Meranti', bpsCode: '14.05.09' },
                    { name: 'Kuala Kampar', bpsCode: '14.05.10' },
                    { name: 'Bandar Sei Kijang', bpsCode: '14.05.11' },
                    { name: 'Bandar Petalangan', bpsCode: '14.05.12' }
                ]
            }, {
                name: 'Rokan Hulu',
                bpsCode: '14.06',
                districts: [
                    { name: 'Ujung Batu', bpsCode: '14.06.01' },
                    { name: 'Rokan IV Koto', bpsCode: '14.06.02' },
                    { name: 'Rambah', bpsCode: '14.06.03' },
                    { name: 'Tambusai', bpsCode: '14.06.04' },
                    { name: 'Kepenuhan', bpsCode: '14.06.05' },
                    { name: 'Kunto Darussalam', bpsCode: '14.06.06' },
                    { name: 'Rambah Samo', bpsCode: '14.06.07' },
                    { name: 'Rambah Hilir', bpsCode: '14.06.08' },
                    { name: 'Tambusai Utara', bpsCode: '14.06.09' },
                    { name: 'Bangun Purba', bpsCode: '14.06.10' },
                    { name: 'Tandun', bpsCode: '14.06.11' },
                    { name: 'Kabun', bpsCode: '14.06.12' },
                    { name: 'Bonai Darussalam', bpsCode: '14.06.13' },
                    { name: 'Pagaran Tapah Darussalam', bpsCode: '14.06.14' },
                    { name: 'Kepenuhan Hulu', bpsCode: '14.06.15' },
                    { name: 'Pendalian IV Koto', bpsCode: '14.06.16' }
                ]
            }, {
                name: 'Rokan Hilir',
                bpsCode: '14.07',
                districts: [
                    { name: 'Kubu', bpsCode: '14.07.01' },
                    { name: 'Bangko', bpsCode: '14.07.02' },
                    { name: 'Tanah Putih', bpsCode: '14.07.03' },
                    { name: 'Rimba Melintang', bpsCode: '14.07.04' },
                    { name: 'Bagan Sinembah', bpsCode: '14.07.05' },
                    { name: 'Pasir Limau Kapas', bpsCode: '14.07.06' },
                    { name: 'Sinaboi (Senaboi)', bpsCode: '14.07.07' },
                    { name: 'Pujud', bpsCode: '14.07.08' },
                    { name: 'Tanah Putih Tanjung Melawan', bpsCode: '14.07.09' },
                    { name: 'Bangko Pusaka (Pusako)', bpsCode: '14.07.10' },
                    { name: 'Simpang Kanan', bpsCode: '14.07.11' },
                    { name: 'Batu Hampar', bpsCode: '14.07.12' },
                    { name: 'Rantau Kopar', bpsCode: '14.07.13' },
                    { name: 'Pekaitan', bpsCode: '14.07.14' },
                    { name: 'Kubu Babussalam', bpsCode: '14.07.15' }
                ]
            }, {
                name: 'Siak',
                bpsCode: '14.08',
                districts: [
                    { name: 'Siak', bpsCode: '14.08.01' },
                    { name: 'Sungai Apit', bpsCode: '14.08.02' },
                    { name: 'Minas', bpsCode: '14.08.03' },
                    { name: 'Tualang', bpsCode: '14.08.04' },
                    { name: 'Sungai Mandau', bpsCode: '14.08.05' },
                    { name: 'Dayun', bpsCode: '14.08.06' },
                    { name: 'Kerinci Kanan', bpsCode: '14.08.07' },
                    { name: 'Bunga Raya', bpsCode: '14.08.08' },
                    { name: 'Koto Gasib', bpsCode: '14.08.09' },
                    { name: 'Kandis', bpsCode: '14.08.10' },
                    { name: 'Lubuk Dalam', bpsCode: '14.08.11' },
                    { name: 'Sabak Auh', bpsCode: '14.08.12' },
                    { name: 'Mempura', bpsCode: '14.08.13' },
                    { name: 'Pusako', bpsCode: '14.08.14' }
                ]
            }, {
                name: 'Kuantan Singingi',
                bpsCode: '14.09',
                districts: [
                    { name: 'Kuantan Mudik', bpsCode: '14.09.01' },
                    { name: 'Kuantan Tengah', bpsCode: '14.09.02' },
                    { name: 'Singingi', bpsCode: '14.09.03' },
                    { name: 'Kuantan Hilir', bpsCode: '14.09.04' },
                    { name: 'Cerenti', bpsCode: '14.09.05' },
                    { name: 'Benai', bpsCode: '14.09.06' },
                    { name: 'Gunungtoar (Gunung Toar)', bpsCode: '14.09.07' },
                    { name: 'Singingi Hilir', bpsCode: '14.09.08' },
                    { name: 'Pangean', bpsCode: '14.09.09' },
                    { name: 'Logas Tanah Darat', bpsCode: '14.09.10' },
                    { name: 'Inuman', bpsCode: '14.09.11' },
                    { name: 'Hulu Kuantan', bpsCode: '14.09.12' },
                    { name: 'Kuantan Hilir Seberang', bpsCode: '14.09.13' },
                    { name: 'Sentajo Raya', bpsCode: '14.09.14' },
                    { name: 'Pucuk Rantau', bpsCode: '14.09.15' }
                ]
            }, {
                name: 'Kepulauan Meranti',
                bpsCode: '14.10',
                districts: [
                    { name: 'Tebing Tinggi', bpsCode: '14.10.01' },
                    { name: 'Rangsang Barat', bpsCode: '14.10.02' },
                    { name: 'Rangsang', bpsCode: '14.10.03' },
                    { name: 'Tebing Tinggi Barat', bpsCode: '14.10.04' },
                    { name: 'Merbau', bpsCode: '14.10.05' },
                    { name: 'Pulaumerbau', bpsCode: '14.10.06' },
                    { name: 'Tebing Tinggi Timur', bpsCode: '14.10.07' },
                    { name: 'Tasik Putri Puyu', bpsCode: '14.10.08' },
                    { name: 'Rangsang Pesisir', bpsCode: '14.10.09' }
                ]
            }, {
                name: 'Pekanbaru',
                bpsCode: '14.71',
                districts: [
                    { name: 'Sukajadi', bpsCode: '14.71.01' },
                    { name: 'Pekanbaru Kota', bpsCode: '14.71.02' },
                    { name: 'Sail', bpsCode: '14.71.03' },
                    { name: 'Lima Puluh', bpsCode: '14.71.04' },
                    { name: 'Senapelan', bpsCode: '14.71.05' },
                    { name: 'Rumbai', bpsCode: '14.71.06' },
                    { name: 'Bukit Raya', bpsCode: '14.71.07' },
                    { name: 'Tampan', bpsCode: '14.71.08' },
                    { name: 'Marpoyan Damai', bpsCode: '14.71.09' },
                    { name: 'Tenayan Raya', bpsCode: '14.71.10' },
                    { name: 'Payung Sekaki', bpsCode: '14.71.11' },
                    { name: 'Rumbai Pesisir', bpsCode: '14.71.12' }
                ]
            }, {
                name: 'Dumai',
                bpsCode: '14.72',
                districts: [
                    { name: 'Dumai Barat', bpsCode: '14.72.01' },
                    { name: 'Dumai Timur', bpsCode: '14.72.02' },
                    { name: 'Bukit Kapur', bpsCode: '14.72.03' },
                    { name: 'Sungai Sembilan', bpsCode: '14.72.04' },
                    { name: 'Medang Kampai', bpsCode: '14.72.05' },
                    { name: 'Dumai Kota', bpsCode: '14.72.06' },
                    { name: 'Dumai Selatan', bpsCode: '14.72.07' }
                ]
            }
        ]
    },
    '15': {
        regencies: [
            {
                name: 'Kerinci',
                bpsCode: '15.01',
                districts: [
                    { name: 'Gunung Raya', bpsCode: '15.01.01' },
                    { name: 'Danau Kerinci', bpsCode: '15.01.02' },
                    { name: 'Sitinjau Laut', bpsCode: '15.01.04' },
                    { name: 'Air Hangat', bpsCode: '15.01.05' },
                    { name: 'Gunung Kerinci', bpsCode: '15.01.06' },
                    { name: 'Batang Merangin', bpsCode: '15.01.07' },
                    { name: 'Keliling Danau', bpsCode: '15.01.08' },
                    { name: 'Kayu Aro', bpsCode: '15.01.09' },
                    { name: 'Air Hangat Timur', bpsCode: '15.01.11' },
                    { name: 'Gunung Tujuh', bpsCode: '15.01.15' },
                    { name: 'Siulak', bpsCode: '15.01.16' },
                    { name: 'Depati Tujuh', bpsCode: '15.01.17' },
                    { name: 'Siulak Mukai', bpsCode: '15.01.18' },
                    { name: 'Kayu Aro Barat', bpsCode: '15.01.19' },
                    { name: 'Bukitkerman', bpsCode: '15.01.20' },
                    { name: 'Air Hangat Barat', bpsCode: '15.01.21' }
                ]
            }, {
                name: 'Merangin',
                bpsCode: '15.02',
                districts: [
                    { name: 'Jangkat', bpsCode: '15.02.01' },
                    { name: 'Bangko', bpsCode: '15.02.02' },
                    { name: 'Muara Siau', bpsCode: '15.02.03' },
                    { name: 'Sungai Manau', bpsCode: '15.02.04' },
                    { name: 'Tabir', bpsCode: '15.02.05' },
                    { name: 'Pamenang', bpsCode: '15.02.06' },
                    { name: 'Tabir Ulu', bpsCode: '15.02.07' },
                    { name: 'Tabir Selatan', bpsCode: '15.02.08' },
                    { name: 'Lembah Masurai', bpsCode: '15.02.09' },
                    { name: 'Bangko Barat', bpsCode: '15.02.10' },
                    { name: 'Nalo Tatan (Nalo Tantan)', bpsCode: '15.02.11' },
                    { name: 'Batang Masumai', bpsCode: '15.02.12' },
                    { name: 'Pamenang Barat', bpsCode: '15.02.13' },
                    { name: 'Tabir Ilir', bpsCode: '15.02.14' },
                    { name: 'Tabir Timur', bpsCode: '15.02.15' },
                    { name: 'Renah Pembarap', bpsCode: '15.02.16' },
                    { name: 'Pangkalan Jambu', bpsCode: '15.02.17' },
                    { name: 'Jangkat Timur (Sungai Tenang)', bpsCode: '15.02.18' },
                    { name: 'Renah Pamenang (Renah Pemenang)', bpsCode: '15.02.19' },
                    { name: 'Pamenang Selatan', bpsCode: '15.02.20' },
                    { name: 'Margo Tabir', bpsCode: '15.02.21' },
                    { name: 'Tabir Lintas', bpsCode: '15.02.22' },
                    { name: 'Tabir Barat', bpsCode: '15.02.23' },
                    { name: 'Tiang Pumpung', bpsCode: '15.02.24' }
                ]
            }, {
                name: 'Sarolangun',
                bpsCode: '15.03',
                districts: [
                    { name: 'Batang Asai', bpsCode: '15.03.01' },
                    { name: 'Limun', bpsCode: '15.03.02' },
                    { name: 'Sarolangun', bpsCode: '15.03.03' },
                    { name: 'Pauh', bpsCode: '15.03.04' },
                    { name: 'Pelawan', bpsCode: '15.03.05' },
                    { name: 'Mandiangin', bpsCode: '15.03.06' },
                    { name: 'Air Hitam', bpsCode: '15.03.07' },
                    { name: 'Bathin VIII (Batin VIII)', bpsCode: '15.03.08' },
                    { name: 'Singkut', bpsCode: '15.03.09' },
                    { name: 'Cermin Nan Gedang / Gadang', bpsCode: '15.03.10' }
                ]
            }, {
                name: 'Batang Hari',
                bpsCode: '15.04',
                districts: [
                    { name: 'Mersam', bpsCode: '15.04.01' },
                    { name: 'Muara Tembesi', bpsCode: '15.04.02' },
                    { name: 'Muara Bulian', bpsCode: '15.04.03' },
                    { name: 'Batin XXIV', bpsCode: '15.04.04' },
                    { name: 'Pemayung', bpsCode: '15.04.05' },
                    { name: 'Maro Sebo Ulu', bpsCode: '15.04.06' },
                    { name: 'Bajubang', bpsCode: '15.04.07' },
                    { name: 'Maro Sebo Ilir', bpsCode: '15.04.08' }
                ]
            }, {
                name: 'Muaro Jambi',
                bpsCode: '15.05',
                districts: [
                    { name: 'Jambi Luar Kota', bpsCode: '15.05.01' },
                    { name: 'Sekernan', bpsCode: '15.05.02' },
                    { name: 'Kumpeh', bpsCode: '15.05.03' },
                    { name: 'Maro Sebo', bpsCode: '15.05.04' },
                    { name: 'Mestong', bpsCode: '15.05.05' },
                    { name: 'Kumpeh Ulu', bpsCode: '15.05.06' },
                    { name: 'Sungai Bahar', bpsCode: '15.05.07' },
                    { name: 'Sungai Gelam', bpsCode: '15.05.08' },
                    { name: 'Bahar Utara', bpsCode: '15.05.09' },
                    { name: 'Bahar Selatan', bpsCode: '15.05.10' },
                    { name: 'Taman Rajo', bpsCode: '15.05.11' }
                ]
            }, {
                name: 'Tanjung Jabung Barat',
                bpsCode: '15.06',
                districts: [
                    { name: 'Tungkal Ulu', bpsCode: '15.06.01' },
                    { name: 'Tungkal Ilir', bpsCode: '15.06.02' },
                    { name: 'Pengabuan', bpsCode: '15.06.03' },
                    { name: 'Betara', bpsCode: '15.06.04' },
                    { name: 'Merlung', bpsCode: '15.06.05' },
                    { name: 'Tebing Tinggi', bpsCode: '15.06.06' },
                    { name: 'Batang Asam', bpsCode: '15.06.07' },
                    { name: 'Renah Mendaluh', bpsCode: '15.06.08' },
                    { name: 'Muara Papalik', bpsCode: '15.06.09' },
                    { name: 'Seberang Kota', bpsCode: '15.06.10' },
                    { name: 'Bram Itam', bpsCode: '15.06.11' },
                    { name: 'Kuala Betara', bpsCode: '15.06.12' },
                    { name: 'Senyerang', bpsCode: '15.06.13' }
                ]
            }, {
                name: 'Tanjung Jabung Timur',
                bpsCode: '15.07',
                districts: [
                    { name: 'Muara Sabak Timur', bpsCode: '15.07.01' },
                    { name: 'Nipah Panjang', bpsCode: '15.07.02' },
                    { name: 'Mendahara', bpsCode: '15.07.03' },
                    { name: 'Rantau Rasau', bpsCode: '15.07.04' },
                    { name: 'Sadu', bpsCode: '15.07.05' },
                    { name: 'Dendang', bpsCode: '15.07.06' },
                    { name: 'Muara Sabak Barat', bpsCode: '15.07.07' },
                    { name: 'Kuala Jambi', bpsCode: '15.07.08' },
                    { name: 'Mendahara Ulu', bpsCode: '15.07.09' },
                    { name: 'Geragai', bpsCode: '15.07.10' },
                    { name: 'Berbak', bpsCode: '15.07.11' }
                ]
            }, {
                name: 'Bungo',
                bpsCode: '15.08',
                districts: [
                    { name: 'Tanah Tumbuh', bpsCode: '15.08.01' },
                    { name: 'Rantau Pandan', bpsCode: '15.08.02' },
                    { name: 'Pasar Muaro Bungo (Pasar Muara Bungo)', bpsCode: '15.08.03' },
                    { name: 'Jujuhan', bpsCode: '15.08.04' },
                    { name: 'Tanah Sepenggal', bpsCode: '15.08.05' },
                    { name: 'Pelepat', bpsCode: '15.08.06' },
                    { name: 'Limbur Lubuk Mengkuang', bpsCode: '15.08.07' },
                    { name: 'Muko-muko Bathin / Batin VII', bpsCode: '15.08.08' },
                    { name: 'Pelepat Ilir', bpsCode: '15.08.09' },
                    { name: 'Bathin / Batin II Babeko', bpsCode: '15.08.10' },
                    { name: 'Bathin III', bpsCode: '15.08.11' },
                    { name: 'Bungo Dani', bpsCode: '15.08.12' },
                    { name: 'Rimbo Tengah', bpsCode: '15.08.13' },
                    { name: 'Bathin III Ulu', bpsCode: '15.08.14' },
                    { name: 'Bathin II Pelayang', bpsCode: '15.08.15' },
                    { name: 'Jujuhan Ilir', bpsCode: '15.08.16' },
                    { name: 'Tanah Sepenggal Lintas', bpsCode: '15.08.17' }
                ]
            }, {
                name: 'Tebo',
                bpsCode: '15.09',
                districts: [
                    { name: 'Tebo Tengah', bpsCode: '15.09.01' },
                    { name: 'Tebo Ilir', bpsCode: '15.09.02' },
                    { name: 'Tebo Ulu', bpsCode: '15.09.03' },
                    { name: 'Rimbo Bujang', bpsCode: '15.09.04' },
                    { name: 'Sumay', bpsCode: '15.09.05' },
                    { name: 'VII Koto', bpsCode: '15.09.06' },
                    { name: 'Rimbo Ulu', bpsCode: '15.09.07' },
                    { name: 'Rimbo Ilir', bpsCode: '15.09.08' },
                    { name: 'Tengah Ilir', bpsCode: '15.09.09' },
                    { name: 'Serai Serumpun', bpsCode: '15.09.10' },
                    { name: 'VII Koto Ilir', bpsCode: '15.09.11' },
                    { name: 'Muara Tabir', bpsCode: '15.09.12' }
                ]
            }, {
                name: 'Jambi',
                bpsCode: '15.71',
                districts: [
                    { name: 'Telanaipura', bpsCode: '15.71.01' },
                    { name: 'Jambi Selatan', bpsCode: '15.71.02' },
                    { name: 'Jambi Timur', bpsCode: '15.71.03' },
                    { name: 'Pasar Jambi', bpsCode: '15.71.04' },
                    { name: 'Pelayangan', bpsCode: '15.71.05' },
                    { name: 'Danau Teluk', bpsCode: '15.71.06' },
                    { name: 'Kota Baru', bpsCode: '15.71.07' },
                    { name: 'Jelutung', bpsCode: '15.71.08' },
                    { name: 'Alam Barajo', bpsCode: '15.71.09' },
                    { name: 'Danau Sipin', bpsCode: '15.71.10' },
                    { name: 'Paal Merah', bpsCode: '15.71.11' }
                ]
            }, {
                name: 'Sungaipenuh',
                bpsCode: '15.72',
                districts: [
                    { name: 'Sungai Penuh', bpsCode: '15.72.01' },
                    { name: 'Pesisir Bukit', bpsCode: '15.72.02' },
                    { name: 'Hamparan Rawang', bpsCode: '15.72.03' },
                    { name: 'Tanah Kampung', bpsCode: '15.72.04' },
                    { name: 'Kumun Debai', bpsCode: '15.72.05' },
                    { name: 'Pondok Tinggi', bpsCode: '15.72.06' },
                    { name: 'Koto Baru', bpsCode: '15.72.07' },
                    { name: 'Sungai Bungkal', bpsCode: '15.72.08' }
                ]
            }
        ]
    },
    '16': {
        regencies: [
            {
                name: 'Ogan Komering Ulu',
                bpsCode: '16.01',
                districts: [
                    { name: 'Sosoh Buay Rayap', bpsCode: '16.01.07' },
                    { name: 'Pengandonan', bpsCode: '16.01.08' },
                    { name: 'Peninjauan', bpsCode: '16.01.09' },
                    { name: 'Baturaja Barat', bpsCode: '16.01.13' },
                    { name: 'Baturaja Timur', bpsCode: '16.01.14' },
                    { name: 'Ulu Ogan', bpsCode: '16.01.20' },
                    { name: 'Semidang Aji', bpsCode: '16.01.21' },
                    { name: 'Lubuk Batang', bpsCode: '16.01.22' },
                    { name: 'Lengkiti', bpsCode: '16.01.28' },
                    { name: 'Sinar Peninjauan', bpsCode: '16.01.29' },
                    { name: 'Lubuk Raja', bpsCode: '16.01.30' },
                    { name: 'Muara Jaya', bpsCode: '16.01.31' },
                    { name: 'Kedaton Peninjauan Raya', bpsCode: '16.01.32' }
                ]
            }, {
                name: 'Ogan Komering Ilir',
                bpsCode: '16.02',
                districts: [
                    { name: 'Tanjung Lubuk', bpsCode: '16.02.02' },
                    { name: 'Pedamaran', bpsCode: '16.02.03' },
                    { name: 'Mesuji', bpsCode: '16.02.04' },
                    { name: 'Kayu Agung', bpsCode: '16.02.05' },
                    { name: 'Sirah Pulau Padang', bpsCode: '16.02.08' },
                    { name: 'Tulung Selapan', bpsCode: '16.02.11' },
                    { name: 'Pampangan', bpsCode: '16.02.12' },
                    { name: 'Lempuing', bpsCode: '16.02.13' },
                    { name: 'Air Sugihan', bpsCode: '16.02.14' },
                    { name: 'Sungai Menang', bpsCode: '16.02.15' },
                    { name: 'Jejawi', bpsCode: '16.02.17' },
                    { name: 'Cengal', bpsCode: '16.02.18' },
                    { name: 'Pangkalan Lampam', bpsCode: '16.02.19' },
                    { name: 'Mesuji Makmur', bpsCode: '16.02.20' },
                    { name: 'Mesuji Raya', bpsCode: '16.02.21' },
                    { name: 'Lempuing Jaya', bpsCode: '16.02.22' },
                    { name: 'Teluk Gelam', bpsCode: '16.02.23' },
                    { name: 'Pedamaran Timur', bpsCode: '16.02.24' }
                ]
            }, {
                name: 'Muara Enim',
                bpsCode: '16.03',
                districts: [
                    { name: 'Tanjung Agung', bpsCode: '16.03.01' },
                    { name: 'Muara Enim', bpsCode: '16.03.02' },
                    { name: 'Rambang Dangku', bpsCode: '16.03.03' },
                    { name: 'Gunung Megang', bpsCode: '16.03.04' },
                    { name: 'Gelumbang', bpsCode: '16.03.06' },
                    { name: 'Lawang Kidul', bpsCode: '16.03.07' },
                    { name: 'Semende Darat Laut', bpsCode: '16.03.08' },
                    { name: 'Semende Darat Tengah', bpsCode: '16.03.09' },
                    { name: 'Semende Darat Ulu', bpsCode: '16.03.10' },
                    { name: 'Ujan Mas', bpsCode: '16.03.11' },
                    { name: 'Lubai', bpsCode: '16.03.14' },
                    { name: 'Rambang', bpsCode: '16.03.15' },
                    { name: 'Sungai Rotan', bpsCode: '16.03.16' },
                    { name: 'Lembak', bpsCode: '16.03.17' },
                    { name: 'Benakat', bpsCode: '16.03.19' },
                    { name: 'Kelekar', bpsCode: '16.03.21' },
                    { name: 'Muara Belida', bpsCode: '16.03.22' },
                    { name: 'Belimbing', bpsCode: '16.03.23' },
                    { name: 'Belida Darat', bpsCode: '16.03.24' },
                    { name: 'Lubai Ulu', bpsCode: '16.03.25' }
                ]
            }, {
                name: 'Lahat',
                bpsCode: '16.04',
                districts: [
                    { name: 'Tanjungsakti Pumu (Tanjung Sakti Pumu)', bpsCode: '16.04.01' },
                    { name: 'Jarai', bpsCode: '16.04.06' },
                    { name: 'Kota Agung', bpsCode: '16.04.07' },
                    { name: 'Pulaupinang (Pulau Pinang)', bpsCode: '16.04.08' },
                    { name: 'Merapi Barat', bpsCode: '16.04.09' },
                    { name: 'Lahat', bpsCode: '16.04.10' },
                    { name: 'Pajar Bulan', bpsCode: '16.04.12' },
                    { name: 'Mulak Ulu', bpsCode: '16.04.15' },
                    { name: 'Kikim Selatan', bpsCode: '16.04.16' },
                    { name: 'Kikim Timur', bpsCode: '16.04.17' },
                    { name: 'Kikim Tengah', bpsCode: '16.04.18' },
                    { name: 'Kikim Barat', bpsCode: '16.04.19' },
                    { name: 'Pseksu', bpsCode: '16.04.20' },
                    { name: 'Gumay Talang', bpsCode: '16.04.21' },
                    { name: 'Pagar Gunung', bpsCode: '16.04.22' },
                    { name: 'Merapi Timur', bpsCode: '16.04.23' },
                    { name: 'Tanjung Sakti Pumi', bpsCode: '16.04.24' },
                    { name: 'Gumay Ulu', bpsCode: '16.04.25' },
                    { name: 'Merapi Selatan', bpsCode: '16.04.26' },
                    { name: 'Tanjungtebat (Tanjung Tebat)', bpsCode: '16.04.27' },
                    { name: 'Muarapayang', bpsCode: '16.04.28' },
                    { name: 'Sukamerindu', bpsCode: '16.04.29' },
                    { name: 'Mulak Sebingkai', bpsCode: '16.04.30' },
                    { name: 'Lahat Selatan', bpsCode: '16.04.31' }
                ]
            }, {
                name: 'Musi Rawas',
                bpsCode: '16.05',
                districts: [
                    { name: 'Tugumulyo', bpsCode: '16.05.01' },
                    { name: 'Muara Lakitan', bpsCode: '16.05.02' },
                    { name: 'Muara Kelingi', bpsCode: '16.05.03' },
                    { name: 'Jayaloka (Jaya Loka)', bpsCode: '16.05.08' },
                    { name: 'Muara Beliti', bpsCode: '16.05.09' },
                    { name: 'Suku Tengah Lakitan Ulu Terawas', bpsCode: '16.05.10' },
                    { name: 'Selangit', bpsCode: '16.05.11' },
                    { name: 'Megang Sakti', bpsCode: '16.05.12' },
                    { name: 'Purwodadi', bpsCode: '16.05.13' },
                    { name: 'BTS Ulu', bpsCode: '16.05.14' },
                    { name: 'Tiang Pumpung Kepungut', bpsCode: '16.05.18' },
                    { name: 'Sumber Harta', bpsCode: '16.05.19' },
                    { name: 'Tuah Negeri', bpsCode: '16.05.20' },
                    { name: 'Suka Karya (Sukakarya)', bpsCode: '16.05.21' }
                ]
            }, {
                name: 'Musi Banyuasin',
                bpsCode: '16.06',
                districts: [
                    { name: 'Sekayu', bpsCode: '16.06.01' },
                    { name: 'Lais', bpsCode: '16.06.02' },
                    { name: 'Sungai Keruh', bpsCode: '16.06.03' },
                    { name: 'Batang Hari Leko', bpsCode: '16.06.04' },
                    { name: 'Sanga Desa', bpsCode: '16.06.05' },
                    { name: 'Babat Toman', bpsCode: '16.06.06' },
                    { name: 'Sungai Lilin', bpsCode: '16.06.07' },
                    { name: 'Keluang', bpsCode: '16.06.08' },
                    { name: 'Bayung Lencir', bpsCode: '16.06.09' },
                    { name: 'Plakat Tinggi (Pelakat Tinggi)', bpsCode: '16.06.10' },
                    { name: 'Lalan', bpsCode: '16.06.11' },
                    { name: 'Tungkal Jaya', bpsCode: '16.06.12' },
                    { name: 'Lawang Wetan', bpsCode: '16.06.13' },
                    { name: 'Babat Supat', bpsCode: '16.06.14' }
                ]
            }, {
                name: 'Banyuasin',
                bpsCode: '16.07',
                districts: [
                    { name: 'Banyuasin I', bpsCode: '16.07.01' },
                    { name: 'Banyuasin II', bpsCode: '16.07.02' },
                    { name: 'Banyuasin III', bpsCode: '16.07.03' },
                    { name: 'Pulau Rimau', bpsCode: '16.07.04' },
                    { name: 'Betung', bpsCode: '16.07.05' },
                    { name: 'Rambutan', bpsCode: '16.07.06' },
                    { name: 'Muara Padang', bpsCode: '16.07.07' },
                    { name: 'Muara Telang', bpsCode: '16.07.08' },
                    { name: 'Makarti Jaya', bpsCode: '16.07.09' },
                    { name: 'Talang Kelapa', bpsCode: '16.07.10' },
                    { name: 'Rantau Bayur', bpsCode: '16.07.11' },
                    { name: 'Tanjung Lago', bpsCode: '16.07.12' },
                    { name: 'Muara Sugihan', bpsCode: '16.07.13' },
                    { name: 'Air Salek', bpsCode: '16.07.14' },
                    { name: 'Tungkal Ilir', bpsCode: '16.07.15' },
                    { name: 'Suak Tapeh', bpsCode: '16.07.16' },
                    { name: 'Sembawa', bpsCode: '16.07.17' },
                    { name: 'Sumber Marga Telang', bpsCode: '16.07.18' },
                    { name: 'Air Kumbang', bpsCode: '16.07.19' }
                ]
            }, {
                name: 'Ogan Komering Ulu Timur',
                bpsCode: '16.08',
                districts: [
                    { name: 'Martapura', bpsCode: '16.08.01' },
                    { name: 'Buay Madang', bpsCode: '16.08.02' },
                    { name: 'Belitang', bpsCode: '16.08.03' },
                    { name: 'Cempaka', bpsCode: '16.08.04' },
                    { name: 'Buay Pemuka Peliung', bpsCode: '16.08.05' },
                    { name: 'Madang Suku II', bpsCode: '16.08.06' },
                    { name: 'Madang Suku I', bpsCode: '16.08.07' },
                    { name: 'Semendawai Suku III', bpsCode: '16.08.08' },
                    { name: 'Belitang II', bpsCode: '16.08.09' },
                    { name: 'Belitang III', bpsCode: '16.08.10' },
                    { name: 'Bunga Mayang', bpsCode: '16.08.11' },
                    { name: 'Buay Madang Timur', bpsCode: '16.08.12' },
                    { name: 'Madang Suku III', bpsCode: '16.08.13' },
                    { name: 'Semendawai Barat', bpsCode: '16.08.14' },
                    { name: 'Semendawai Timur', bpsCode: '16.08.15' },
                    { name: 'Jayapura', bpsCode: '16.08.16' },
                    { name: 'Belitang Jaya', bpsCode: '16.08.17' },
                    { name: 'Belitang Madang Raya', bpsCode: '16.08.18' },
                    { name: 'Belitang Mulya', bpsCode: '16.08.19' },
                    { name: 'Buay Pemuka Bangsa Raja', bpsCode: '16.08.20' }
                ]
            }, {
                name: 'Ogan Komering Ulu Selatan',
                bpsCode: '16.09',
                districts: [
                    { name: 'Muara Dua (Muaradua)', bpsCode: '16.09.01' },
                    { name: 'Pulau Beringin', bpsCode: '16.09.02' },
                    { name: 'Banding Agung', bpsCode: '16.09.03' },
                    { name: 'Muara Dua Kisam (Muaradua Kisam)', bpsCode: '16.09.04' },
                    { name: 'Simpang', bpsCode: '16.09.05' },
                    { name: 'Buay Sandang Aji', bpsCode: '16.09.06' },
                    { name: 'Buay Runjung', bpsCode: '16.09.07' },
                    { name: 'Mekakau Ilir', bpsCode: '16.09.08' },
                    { name: 'Buay Pemaca', bpsCode: '16.09.09' },
                    { name: 'Kisam Tinggi', bpsCode: '16.09.10' },
                    { name: 'Kisam Ilir', bpsCode: '16.09.11' },
                    { name: 'Buay Pematang Ribu Ranau Tengah', bpsCode: '16.09.12' },
                    { name: 'Warkuk Ranau Selatan', bpsCode: '16.09.13' },
                    { name: 'Runjung Agung', bpsCode: '16.09.14' },
                    { name: 'Sungai Are', bpsCode: '16.09.15' },
                    { name: 'Sindang Danau', bpsCode: '16.09.16' },
                    { name: 'Buana Pemaca', bpsCode: '16.09.17' },
                    { name: 'Tiga Dihaji', bpsCode: '16.09.18' },
                    { name: 'Buay Rawan', bpsCode: '16.09.19' }
                ]
            }, {
                name: 'Ogan Ilir',
                bpsCode: '16.10',
                districts: [
                    { name: 'Muara Kuang', bpsCode: '16.10.01' },
                    { name: 'Tanjung Batu', bpsCode: '16.10.02' },
                    { name: 'Tanjung Raja', bpsCode: '16.10.03' },
                    { name: 'Indralaya', bpsCode: '16.10.04' },
                    { name: 'Pemulutan', bpsCode: '16.10.05' },
                    { name: 'Rantau Alai', bpsCode: '16.10.06' },
                    { name: 'Indralaya Utara', bpsCode: '16.10.07' },
                    { name: 'Indralaya Selatan', bpsCode: '16.10.08' },
                    { name: 'Pemulutan Selatan', bpsCode: '16.10.09' },
                    { name: 'Pemulutan Barat', bpsCode: '16.10.10' },
                    { name: 'Rantau Panjang', bpsCode: '16.10.11' },
                    { name: 'Sungai Pinang', bpsCode: '16.10.12' },
                    { name: 'Kandis', bpsCode: '16.10.13' },
                    { name: 'Rambang Kuang', bpsCode: '16.10.14' },
                    { name: 'Lubuk Keliat', bpsCode: '16.10.15' },
                    { name: 'Payaraman', bpsCode: '16.10.16' }
                ]
            }, {
                name: 'Empat Lawang',
                bpsCode: '16.11',
                districts: [
                    { name: 'Muara Pinang', bpsCode: '16.11.01' },
                    { name: 'Pendopo', bpsCode: '16.11.02' },
                    { name: 'Ulu Musi', bpsCode: '16.11.03' },
                    { name: 'Tebing Tinggi', bpsCode: '16.11.04' },
                    { name: 'Lintang Kanan', bpsCode: '16.11.05' },
                    { name: 'Talang Padang', bpsCode: '16.11.06' },
                    { name: 'Pasemah Air Keruh', bpsCode: '16.11.07' },
                    { name: 'Sikap Dalam', bpsCode: '16.11.08' },
                    { name: 'Saling', bpsCode: '16.11.09' },
                    { name: 'Pendopo Barat', bpsCode: '16.11.10' }
                ]
            }, {
                name: 'Penukal Abab Lematang Ilir',
                bpsCode: '16.12',
                districts: [
                    { name: 'Talang Ubi', bpsCode: '16.12.01' },
                    { name: 'Penukal Utara', bpsCode: '16.12.02' },
                    { name: 'Penukal', bpsCode: '16.12.03' },
                    { name: 'Abab', bpsCode: '16.12.04' },
                    { name: 'Tanah Abang', bpsCode: '16.12.05' }
                ]
            }, {
                name: 'Musi Rawas Utara',
                bpsCode: '16.13',
                districts: [
                    { name: 'Rupit', bpsCode: '16.13.01' },
                    { name: 'Rawas Ulu', bpsCode: '16.13.02' },
                    { name: 'Nibung', bpsCode: '16.13.03' },
                    { name: 'Rawas Ilir', bpsCode: '16.13.04' },
                    { name: 'Karang Dapo', bpsCode: '16.13.05' },
                    { name: 'Karang Jaya', bpsCode: '16.13.06' },
                    { name: 'Ulu Rawas', bpsCode: '16.13.07' }
                ]
            }, {
                name: 'Palembang',
                bpsCode: '16.71',
                districts: [
                    { name: 'Ilir Barat II', bpsCode: '16.71.01' },
                    { name: 'Seberang Ulu I', bpsCode: '16.71.02' },
                    { name: 'Seberang Ulu II', bpsCode: '16.71.03' },
                    { name: 'Ilir Barat I', bpsCode: '16.71.04' },
                    { name: 'Ilir Timur I', bpsCode: '16.71.05' },
                    { name: 'Ilir Timur II', bpsCode: '16.71.06' },
                    { name: 'Sukarami', bpsCode: '16.71.07' },
                    { name: 'Sako', bpsCode: '16.71.08' },
                    { name: 'Kemuning', bpsCode: '16.71.09' },
                    { name: 'Kalidoni', bpsCode: '16.71.10' },
                    { name: 'Bukit Kecil', bpsCode: '16.71.11' },
                    { name: 'Gandus', bpsCode: '16.71.12' },
                    { name: 'Kertapati', bpsCode: '16.71.13' },
                    { name: 'Plaju', bpsCode: '16.71.14' },
                    { name: 'Alang Alang Lebar', bpsCode: '16.71.15' },
                    { name: 'Sematang Borang', bpsCode: '16.71.16' },
                    { name: 'Jakabaring', bpsCode: '16.71.17' },
                    { name: 'Ilir Timur Tiga', bpsCode: '16.71.18' }
                ]
            }, {
                name: 'Pagar Alam',
                bpsCode: '16.72',
                districts: [
                    { name: 'Pagar Alam Utara', bpsCode: '16.72.01' },
                    { name: 'Pagar Alam Selatan', bpsCode: '16.72.02' },
                    { name: 'Dempo Utara', bpsCode: '16.72.03' },
                    { name: 'Dempo Selatan', bpsCode: '16.72.04' },
                    { name: 'Dempo Tengah', bpsCode: '16.72.05' }
                ]
            }, {
                name: 'Lubuk Linggau',
                bpsCode: '16.73',
                districts: [
                    { name: 'Lubuk Linggau Timur Satu (I)', bpsCode: '16.73.01' },
                    { name: 'Lubuk Linggau Barat Satu (I)', bpsCode: '16.73.02' },
                    { name: 'Lubuk Linggau Selatan Satu (I)', bpsCode: '16.73.03' },
                    { name: 'Lubuk Linggau Utara Satu (I)', bpsCode: '16.73.04' },
                    { name: 'Lubuk Linggau Timur Dua (II)', bpsCode: '16.73.05' },
                    { name: 'Lubuk Linggau Barat Dua (II)', bpsCode: '16.73.06' },
                    { name: 'Lubuk Linggau Selatan Dua (II)', bpsCode: '16.73.07' },
                    { name: 'Lubuk Linggau Utara Dua (II)', bpsCode: '16.73.08' }
                ]
            }, {
                name: 'Prabumulih',
                bpsCode: '16.74',
                districts: [
                    { name: 'Prabumulih Barat', bpsCode: '16.74.01' },
                    { name: 'Prabumulih Timur', bpsCode: '16.74.02' },
                    { name: 'Cambai', bpsCode: '16.74.03' },
                    { name: 'Rambang Kapak Tengah', bpsCode: '16.74.04' },
                    { name: 'Prabumulih Utara', bpsCode: '16.74.05' },
                    { name: 'Prabumulih Selatan', bpsCode: '16.74.06' }
                ]
            }
        ]
    },
    '17': {
        regencies: [
            {
                name: 'Bengkulu Selatan',
                bpsCode: '17.01',
                districts: [
                    { name: 'Kedurang', bpsCode: '17.01.01' },
                    { name: 'Seginim', bpsCode: '17.01.02' },
                    { name: 'Pino', bpsCode: '17.01.03' },
                    { name: 'Manna', bpsCode: '17.01.04' },
                    { name: 'Kota Manna', bpsCode: '17.01.05' },
                    { name: 'Pino Raya (Pinoraya)', bpsCode: '17.01.06' },
                    { name: 'Kedurang Ilir', bpsCode: '17.01.07' },
                    { name: 'Air Nipis', bpsCode: '17.01.08' },
                    { name: 'Ulu Manna', bpsCode: '17.01.09' },
                    { name: 'Bunga Mas', bpsCode: '17.01.10' },
                    { name: 'Pasar Manna', bpsCode: '17.01.11' }
                ]
            }, {
                name: 'Rejang Lebong',
                bpsCode: '17.02',
                districts: [
                    { name: 'Kota Padang', bpsCode: '17.02.06' },
                    { name: 'Padang Ulak Tanding', bpsCode: '17.02.07' },
                    { name: 'Sindang Kelingi', bpsCode: '17.02.08' },
                    { name: 'Curup', bpsCode: '17.02.09' },
                    { name: 'Bermani Ulu', bpsCode: '17.02.10' },
                    { name: 'Selupu Rejang', bpsCode: '17.02.11' },
                    { name: 'Curup Utara', bpsCode: '17.02.16' },
                    { name: 'Curup Timur', bpsCode: '17.02.17' },
                    { name: 'Curup Selatan', bpsCode: '17.02.18' },
                    { name: 'Curup Tengah', bpsCode: '17.02.19' },
                    { name: 'Binduriang', bpsCode: '17.02.20' },
                    { name: 'Sindang Beliti Ulu', bpsCode: '17.02.21' },
                    { name: 'Sindang Dataran (Sindang Daratan)', bpsCode: '17.02.22' },
                    { name: 'Sindang Beliti Ilir', bpsCode: '17.02.23' },
                    { name: 'Bermani Ulu Raya', bpsCode: '17.02.24' }
                ]
            }, {
                name: 'Bengkulu Utara',
                bpsCode: '17.03',
                districts: [
                    { name: 'Enggano', bpsCode: '17.03.01' },
                    { name: 'Kerkap', bpsCode: '17.03.06' },
                    { name: 'Kota Arga Makmur', bpsCode: '17.03.07' },
                    { name: 'Giri Mulia (Giri Mulya)', bpsCode: '17.03.08' },
                    { name: 'Padang Jaya', bpsCode: '17.03.09' },
                    { name: 'Lais', bpsCode: '17.03.10' },
                    { name: 'Batik Nau', bpsCode: '17.03.11' },
                    { name: 'Ketahun', bpsCode: '17.03.12' },
                    { name: 'Napal Putih', bpsCode: '17.03.13' },
                    { name: 'Putri Hijau', bpsCode: '17.03.14' },
                    { name: 'Air Besi', bpsCode: '17.03.15' },
                    { name: 'Air Napal', bpsCode: '17.03.16' },
                    { name: 'Hulu Palik', bpsCode: '17.03.19' },
                    { name: 'Air Padang', bpsCode: '17.03.20' },
                    { name: 'Arma Jaya', bpsCode: '17.03.21' },
                    { name: 'Tanjung Agung Palik', bpsCode: '17.03.22' },
                    { name: 'Ulok Kupai', bpsCode: '17.03.23' },
                    { name: 'Pinang Raya', bpsCode: '17.03.24' },
                    { name: 'Marga Sakti Sebelat (Marga Sakti)', bpsCode: '17.03.25' }
                ]
            }, {
                name: 'Kaur',
                bpsCode: '17.04',
                districts: [
                    { name: 'Kinal', bpsCode: '17.04.01' },
                    { name: 'Tanjung Kemuning', bpsCode: '17.04.02' },
                    { name: 'Kaur Utara', bpsCode: '17.04.03' },
                    { name: 'Kaur Tengah', bpsCode: '17.04.04' },
                    { name: 'Kaur Selatan', bpsCode: '17.04.05' },
                    { name: 'Maje', bpsCode: '17.04.06' },
                    { name: 'Nasal', bpsCode: '17.04.07' },
                    { name: 'Semidang Gumai (Gumay)', bpsCode: '17.04.08' },
                    { name: 'Kelam Tengah', bpsCode: '17.04.09' },
                    { name: 'Luas', bpsCode: '17.04.10' },
                    { name: 'Muara Sahung', bpsCode: '17.04.11' },
                    { name: 'Tetap (Muara Tetap)', bpsCode: '17.04.12' },
                    { name: 'Lungkang Kule', bpsCode: '17.04.13' },
                    { name: 'Padang Guci Hilir', bpsCode: '17.04.14' },
                    { name: 'Padang Guci Hulu', bpsCode: '17.04.15' }
                ]
            }, {
                name: 'Seluma',
                bpsCode: '17.05',
                districts: [
                    { name: 'Sukaraja', bpsCode: '17.05.01' },
                    { name: 'Seluma', bpsCode: '17.05.02' },
                    { name: 'Talo', bpsCode: '17.05.03' },
                    { name: 'Semidang Alas', bpsCode: '17.05.04' },
                    { name: 'Semidang Alas Maras', bpsCode: '17.05.05' },
                    { name: 'Air Periukan', bpsCode: '17.05.06' },
                    { name: 'Lubuk Sandi', bpsCode: '17.05.07' },
                    { name: 'Seluma Barat', bpsCode: '17.05.08' },
                    { name: 'Seluma Timur', bpsCode: '17.05.09' },
                    { name: 'Seluma Utara', bpsCode: '17.05.10' },
                    { name: 'Seluma Selatan', bpsCode: '17.05.11' },
                    { name: 'Talo Kecil', bpsCode: '17.05.12' },
                    { name: 'Ulu Talo', bpsCode: '17.05.13' },
                    { name: 'Ilir Talo', bpsCode: '17.05.14' }
                ]
            }, {
                name: 'Muko Muko',
                bpsCode: '17.06',
                districts: [
                    { name: 'Lubuk Pinang', bpsCode: '17.06.01' },
                    { name: 'Kota Mukomuko (Mukomuko Utara)', bpsCode: '17.06.02' },
                    { name: 'Teras Terunjam', bpsCode: '17.06.03' },
                    { name: 'Pondok Suguh', bpsCode: '17.06.04' },
                    { name: 'Ipuh (Muko Muko Selatan)', bpsCode: '17.06.05' },
                    { name: 'Malin Deman', bpsCode: '17.06.06' },
                    { name: 'Air Rami', bpsCode: '17.06.07' },
                    { name: 'Teramang Jaya', bpsCode: '17.06.08' },
                    { name: 'Selagan Raya', bpsCode: '17.06.09' },
                    { name: 'Penarik', bpsCode: '17.06.10' },
                    { name: 'XIV Koto', bpsCode: '17.06.11' },
                    { name: 'V Koto', bpsCode: '17.06.12' },
                    { name: 'Air Majunto', bpsCode: '17.06.13' },
                    { name: 'Air Dikit', bpsCode: '17.06.14' },
                    { name: 'Sungai Rumbai', bpsCode: '17.06.15' }
                ]
            }, {
                name: 'Lebong',
                bpsCode: '17.07',
                districts: [
                    { name: 'Lebong Utara', bpsCode: '17.07.01' },
                    { name: 'Lebong Atas', bpsCode: '17.07.02' },
                    { name: 'Lebong Tengah', bpsCode: '17.07.03' },
                    { name: 'Lebong Selatan', bpsCode: '17.07.04' },
                    { name: 'Rimbo Pengadang', bpsCode: '17.07.05' },
                    { name: 'Topos', bpsCode: '17.07.06' },
                    { name: 'Bingin Kuning', bpsCode: '17.07.07' },
                    { name: 'Lebong Sakti', bpsCode: '17.07.08' },
                    { name: 'Pelabai', bpsCode: '17.07.09' },
                    { name: 'Amen', bpsCode: '17.07.10' },
                    { name: 'Uram Jaya', bpsCode: '17.07.11' },
                    { name: 'Pinang Belapis', bpsCode: '17.07.12' }
                ]
            }, {
                name: 'Kepahiang',
                bpsCode: '17.08',
                districts: [
                    { name: 'Bermani Ilir', bpsCode: '17.08.01' },
                    { name: 'Ujan Mas', bpsCode: '17.08.02' },
                    { name: 'Tebat Karai', bpsCode: '17.08.03' },
                    { name: 'Kepahiang', bpsCode: '17.08.04' },
                    { name: 'Merigi', bpsCode: '17.08.05' },
                    { name: 'Kebawetan', bpsCode: '17.08.06' },
                    { name: 'Seberang Musi', bpsCode: '17.08.07' },
                    { name: 'Muara Kemumu', bpsCode: '17.08.08' }
                ]
            }, {
                name: 'Bengkulu Tengah',
                bpsCode: '17.09',
                districts: [
                    { name: 'Karang Tinggi', bpsCode: '17.09.01' },
                    { name: 'Talang Empat', bpsCode: '17.09.02' },
                    { name: 'Pondok Kelapa', bpsCode: '17.09.03' },
                    { name: 'Pematang Tiga', bpsCode: '17.09.04' },
                    { name: 'Pagar Jati', bpsCode: '17.09.05' },
                    { name: 'Taba Penanjung', bpsCode: '17.09.06' },
                    { name: 'Merigi Kelindang', bpsCode: '17.09.07' },
                    { name: 'Merigi Sakti', bpsCode: '17.09.08' },
                    { name: 'Pondok Kubang', bpsCode: '17.09.09' },
                    { name: 'Bang Haji', bpsCode: '17.09.10' }
                ]
            }, {
                name: 'Bengkulu',
                bpsCode: '17.71',
                districts: [
                    { name: 'Selebar', bpsCode: '17.71.01' },
                    { name: 'Gading Cempaka', bpsCode: '17.71.02' },
                    { name: 'Teluk Segara', bpsCode: '17.71.03' },
                    { name: 'Muara Bangka Hulu', bpsCode: '17.71.04' },
                    { name: 'Kampung Melayu', bpsCode: '17.71.05' },
                    { name: 'Ratu Agung', bpsCode: '17.71.06' },
                    { name: 'Ratu Samban', bpsCode: '17.71.07' },
                    { name: 'Sungai Serut', bpsCode: '17.71.08' },
                    { name: 'Singaran Pati', bpsCode: '17.71.09' }
                ]
            }
        ]
    },
    '18': {
        regencies: [
            {
                name: 'Lampung Selatan',
                bpsCode: '18.01',
                districts: [
                    { name: 'Natar', bpsCode: '18.01.04' },
                    { name: 'Tanjung Bintang', bpsCode: '18.01.05' },
                    { name: 'Kalianda', bpsCode: '18.01.06' },
                    { name: 'Sidomulyo', bpsCode: '18.01.07' },
                    { name: 'Katibung', bpsCode: '18.01.08' },
                    { name: 'Penengahan', bpsCode: '18.01.09' },
                    { name: 'Palas', bpsCode: '18.01.10' },
                    { name: 'Jati Agung', bpsCode: '18.01.13' },
                    { name: 'Ketapang', bpsCode: '18.01.14' },
                    { name: 'Sragi', bpsCode: '18.01.15' },
                    { name: 'Raja Basa (Rajabasa)', bpsCode: '18.01.16' },
                    { name: 'Candipuro', bpsCode: '18.01.17' },
                    { name: 'Merbau Mataram', bpsCode: '18.01.18' },
                    { name: 'Bakauheni', bpsCode: '18.01.21' },
                    { name: 'Tanjung Sari', bpsCode: '18.01.22' },
                    { name: 'Way Sulan', bpsCode: '18.01.23' },
                    { name: 'Way Panji', bpsCode: '18.01.24' }
                ]
            }, {
                name: 'Lampung Tengah',
                bpsCode: '18.02',
                districts: [
                    { name: 'Kalirejo', bpsCode: '18.02.01' },
                    { name: 'Bangun Rejo', bpsCode: '18.02.02' },
                    { name: 'Padang Ratu', bpsCode: '18.02.03' },
                    { name: 'Gunung Sugih', bpsCode: '18.02.04' },
                    { name: 'Trimurjo', bpsCode: '18.02.05' },
                    { name: 'Punggur', bpsCode: '18.02.06' },
                    { name: 'Terbanggi Besar', bpsCode: '18.02.07' },
                    { name: 'Seputih Raman', bpsCode: '18.02.08' },
                    { name: 'Rumbia', bpsCode: '18.02.09' },
                    { name: 'Seputih Banyak', bpsCode: '18.02.10' },
                    { name: 'Seputih Mataram', bpsCode: '18.02.11' },
                    { name: 'Seputih Surabaya', bpsCode: '18.02.12' },
                    { name: 'Terusan Nunyai', bpsCode: '18.02.13' },
                    { name: 'Bumi Ratu Nuban', bpsCode: '18.02.14' },
                    { name: 'Bekri', bpsCode: '18.02.15' },
                    { name: 'Seputih Agung', bpsCode: '18.02.16' },
                    { name: 'Way Pangubuan', bpsCode: '18.02.17' },
                    { name: 'Bandar Mataram', bpsCode: '18.02.18' },
                    { name: 'Pubian', bpsCode: '18.02.19' },
                    { name: 'Selagai Lingga', bpsCode: '18.02.20' },
                    { name: 'Anak Tuha', bpsCode: '18.02.21' },
                    { name: 'Sendang Agung', bpsCode: '18.02.22' },
                    { name: 'Kota Gajah', bpsCode: '18.02.23' },
                    { name: 'Bumi Nabung', bpsCode: '18.02.24' },
                    { name: 'Way Seputih', bpsCode: '18.02.25' },
                    { name: 'Bandar Surabaya', bpsCode: '18.02.26' },
                    { name: 'Anak Ratu Aji', bpsCode: '18.02.27' },
                    { name: 'Putra Rumbia', bpsCode: '18.02.28' }
                ]
            }, {
                name: 'Lampung Utara',
                bpsCode: '18.03',
                districts: [
                    { name: 'Bukit Kemuning', bpsCode: '18.03.01' },
                    { name: 'Kotabumi', bpsCode: '18.03.02' },
                    { name: 'Sungkai Selatan', bpsCode: '18.03.03' },
                    { name: 'Tanjung Raja', bpsCode: '18.03.04' },
                    { name: 'Abung Timur', bpsCode: '18.03.05' },
                    { name: 'Abung Barat', bpsCode: '18.03.06' },
                    { name: 'Abung Selatan', bpsCode: '18.03.07' },
                    { name: 'Sungkai Utara', bpsCode: '18.03.08' },
                    { name: 'Kotabumi Utara', bpsCode: '18.03.09' },
                    { name: 'Kotabumi Selatan', bpsCode: '18.03.10' },
                    { name: 'Abung Tengah', bpsCode: '18.03.11' },
                    { name: 'Abung Tinggi', bpsCode: '18.03.12' },
                    { name: 'Abung Semuli', bpsCode: '18.03.13' },
                    { name: 'Abung Surakarta', bpsCode: '18.03.14' },
                    { name: 'Muara Sungkai', bpsCode: '18.03.15' },
                    { name: 'Bunga Mayang', bpsCode: '18.03.16' },
                    { name: 'Hulu Sungkai', bpsCode: '18.03.17' },
                    { name: 'Sungkai Tengah', bpsCode: '18.03.18' },
                    { name: 'Abung Pekurun', bpsCode: '18.03.19' },
                    { name: 'Sungkai Jaya', bpsCode: '18.03.20' },
                    { name: 'Sungkai Barat', bpsCode: '18.03.21' },
                    { name: 'Abung Kunang', bpsCode: '18.03.22' },
                    { name: 'Blambangan Pagar', bpsCode: '18.03.23' }
                ]
            }, {
                name: 'Lampung Barat',
                bpsCode: '18.04',
                districts: [
                    { name: 'Balik Bukit', bpsCode: '18.04.04' },
                    { name: 'Sumber Jaya', bpsCode: '18.04.05' },
                    { name: 'Belalau', bpsCode: '18.04.06' },
                    { name: 'Way Tenong', bpsCode: '18.04.07' },
                    { name: 'Sekincau', bpsCode: '18.04.08' },
                    { name: 'Suoh', bpsCode: '18.04.09' },
                    { name: 'Batu Brak', bpsCode: '18.04.10' },
                    { name: 'Sukau', bpsCode: '18.04.11' },
                    { name: 'Gedung Surian', bpsCode: '18.04.15' },
                    { name: 'Kebun Tebu', bpsCode: '18.04.18' },
                    { name: 'Air Hitam', bpsCode: '18.04.19' },
                    { name: 'Pagar Dewa', bpsCode: '18.04.20' },
                    { name: 'Batu Ketulis', bpsCode: '18.04.21' },
                    { name: 'Lumbok Seminung', bpsCode: '18.04.22' },
                    { name: 'Bandar Negeri Suoh', bpsCode: '18.04.23' }
                ]
            }, {
                name: 'Tulang Bawang',
                bpsCode: '18.05',
                districts: [
                    { name: 'Menggala', bpsCode: '18.05.02' },
                    { name: 'Gedung Aji', bpsCode: '18.05.06' },
                    { name: 'Banjar Agung', bpsCode: '18.05.08' },
                    { name: 'Gedung Meneng', bpsCode: '18.05.11' },
                    { name: 'Rawa Jitu Selatan (Rawajitu Selatan)', bpsCode: '18.05.12' },
                    { name: 'Penawar Tama', bpsCode: '18.05.13' },
                    { name: 'Rawa Jitu Timur (Rawajitu Timur)', bpsCode: '18.05.18' },
                    { name: 'Banjar Margo', bpsCode: '18.05.20' },
                    { name: 'Rawa Pitu', bpsCode: '18.05.22' },
                    { name: 'Penawar Aji', bpsCode: '18.05.23' },
                    { name: 'Dente Teladas', bpsCode: '18.05.25' },
                    { name: 'Meraksa Aji', bpsCode: '18.05.26' },
                    { name: 'Gedung Aji Baru', bpsCode: '18.05.27' },
                    { name: 'Banjar Baru', bpsCode: '18.05.29' },
                    { name: 'Menggala Timur', bpsCode: '18.05.30' }
                ]
            }, {
                name: 'Tanggamus',
                bpsCode: '18.06',
                districts: [
                    { name: 'Kota Agung (Kota Agung Pusat)', bpsCode: '18.06.01' },
                    { name: 'Talang Padang', bpsCode: '18.06.02' },
                    { name: 'Wonosobo', bpsCode: '18.06.03' },
                    { name: 'Pulau Panggung', bpsCode: '18.06.04' },
                    { name: 'Cukuh Balak', bpsCode: '18.06.09' },
                    { name: 'Pugung', bpsCode: '18.06.11' },
                    { name: 'Semaka', bpsCode: '18.06.12' },
                    { name: 'Sumber Rejo (Sumberejo)', bpsCode: '18.06.13' },
                    { name: 'Ulu Belu (Ulubelu)', bpsCode: '18.06.15' },
                    { name: 'Pematang Sawa', bpsCode: '18.06.16' },
                    { name: 'Klumbayan (Kelumbayan)', bpsCode: '18.06.17' },
                    { name: 'Kota Agung Barat', bpsCode: '18.06.18' },
                    { name: 'Kota Agung Timur', bpsCode: '18.06.19' },
                    { name: 'Gisting', bpsCode: '18.06.20' },
                    { name: 'Gunung Alip', bpsCode: '18.06.21' },
                    { name: 'Limau', bpsCode: '18.06.24' },
                    { name: 'Bandar Negeri Semuong', bpsCode: '18.06.25' },
                    { name: 'Air Naningan', bpsCode: '18.06.26' },
                    { name: 'Bulok', bpsCode: '18.06.27' },
                    { name: 'Klumbayan Barat (Kelumbayan Barat)', bpsCode: '18.06.28' }
                ]
            }, {
                name: 'Lampung Timur',
                bpsCode: '18.07',
                districts: [
                    { name: 'Sukadana', bpsCode: '18.07.01' },
                    { name: 'Labuhan Maringgai', bpsCode: '18.07.02' },
                    { name: 'Jabung', bpsCode: '18.07.03' },
                    { name: 'Pekalongan', bpsCode: '18.07.04' },
                    { name: 'Sekampung', bpsCode: '18.07.05' },
                    { name: 'Batanghari', bpsCode: '18.07.06' },
                    { name: 'Way Jepara', bpsCode: '18.07.07' },
                    { name: 'Purbolinggo', bpsCode: '18.07.08' },
                    { name: 'Raman Utara', bpsCode: '18.07.09' },
                    { name: 'Metro Kibang', bpsCode: '18.07.10' },
                    { name: 'Marga Tiga (Margatiga)', bpsCode: '18.07.11' },
                    { name: 'Sekampung Udik', bpsCode: '18.07.12' },
                    { name: 'Batanghari Nuban', bpsCode: '18.07.13' },
                    { name: 'Bumi Agung', bpsCode: '18.07.14' },
                    { name: 'Bandar Sribhawono (Bandar Sribawono)', bpsCode: '18.07.15' },
                    { name: 'Mataram Baru', bpsCode: '18.07.16' },
                    { name: 'Melinting', bpsCode: '18.07.17' },
                    { name: 'Gunung Pelindung', bpsCode: '18.07.18' },
                    { name: 'Pasir Sakti', bpsCode: '18.07.19' },
                    { name: 'Waway Karya', bpsCode: '18.07.20' },
                    { name: 'Labuhan Ratu', bpsCode: '18.07.21' },
                    { name: 'Braja Selebah (Braja Slebah)', bpsCode: '18.07.22' },
                    { name: 'Way Bungur (Purbolinggo Utara)', bpsCode: '18.07.23' },
                    { name: 'Marga Sekampung', bpsCode: '18.07.24' }
                ]
            }, {
                name: 'Way Kanan',
                bpsCode: '18.08',
                districts: [
                    { name: 'Blambangan Umpu', bpsCode: '18.08.01' },
                    { name: 'Kasui', bpsCode: '18.08.02' },
                    { name: 'Banjit', bpsCode: '18.08.03' },
                    { name: 'Baradatu', bpsCode: '18.08.04' },
                    { name: 'Bahuga', bpsCode: '18.08.05' },
                    { name: 'Pakuan Ratu', bpsCode: '18.08.06' },
                    { name: 'Negeri Agung', bpsCode: '18.08.07' },
                    { name: 'Way Tuba', bpsCode: '18.08.08' },
                    { name: 'Rebang Tangkas', bpsCode: '18.08.09' },
                    { name: 'Gunung Labuhan', bpsCode: '18.08.10' },
                    { name: 'Negara Batin', bpsCode: '18.08.11' },
                    { name: 'Negeri Besar', bpsCode: '18.08.12' },
                    { name: 'Buay Bahuga', bpsCode: '18.08.13' },
                    { name: 'Bumi Agung', bpsCode: '18.08.14' }
                ]
            }, {
                name: 'Pesawaran',
                bpsCode: '18.09',
                districts: [
                    { name: 'Gedong Tataan', bpsCode: '18.09.01' },
                    { name: 'Negeri Katon', bpsCode: '18.09.02' },
                    { name: 'Tegineneng', bpsCode: '18.09.03' },
                    { name: 'Way Lima', bpsCode: '18.09.04' },
                    { name: 'Padang Cermin', bpsCode: '18.09.05' },
                    { name: 'Punduh Pidada', bpsCode: '18.09.06' },
                    { name: 'Kedondong', bpsCode: '18.09.07' },
                    { name: 'Marga Punduh', bpsCode: '18.09.08' },
                    { name: 'Way Khilau', bpsCode: '18.09.09' },
                    { name: 'Teluk Pandan', bpsCode: '18.09.10' },
                    { name: 'Way Ratai', bpsCode: '18.09.11' }
                ]
            }, {
                name: 'Pringsewu',
                bpsCode: '18.10',
                districts: [
                    { name: 'Pringsewu', bpsCode: '18.10.01' },
                    { name: 'Gading Rejo', bpsCode: '18.10.02' },
                    { name: 'Ambarawa', bpsCode: '18.10.03' },
                    { name: 'Pardasuka', bpsCode: '18.10.04' },
                    { name: 'Pagelaran', bpsCode: '18.10.05' },
                    { name: 'Banyumas', bpsCode: '18.10.06' },
                    { name: 'Adiluwih (Adi Luwih)', bpsCode: '18.10.07' },
                    { name: 'Sukoharjo', bpsCode: '18.10.08' },
                    { name: 'Pagelaran Utara', bpsCode: '18.10.09' }
                ]
            }, {
                name: 'Mesuji',
                bpsCode: '18.11',
                districts: [
                    { name: 'Mesuji', bpsCode: '18.11.01' },
                    { name: 'Mesuji Timur', bpsCode: '18.11.02' },
                    { name: 'Rawa Jitu Utara', bpsCode: '18.11.03' },
                    { name: 'Way Serdang', bpsCode: '18.11.04' },
                    { name: 'Simpang Pematang', bpsCode: '18.11.05' },
                    { name: 'Panca Jaya', bpsCode: '18.11.06' },
                    { name: 'Tanjung Raya', bpsCode: '18.11.07' }
                ]
            }, {
                name: 'Tulang Bawang Barat',
                bpsCode: '18.12',
                districts: [
                    { name: 'Tulang Bawang Tengah', bpsCode: '18.12.01' },
                    { name: 'Tumijajar', bpsCode: '18.12.02' },
                    { name: 'Tulang Bawang Udik', bpsCode: '18.12.03' },
                    { name: 'Gunung Terang', bpsCode: '18.12.04' },
                    { name: 'Gunung Agung', bpsCode: '18.12.05' },
                    { name: 'Way Kenanga', bpsCode: '18.12.06' },
                    { name: 'Lambu Kibang', bpsCode: '18.12.07' },
                    { name: 'Pagar Dewa', bpsCode: '18.12.08' },
                    { name: 'Batu Putih', bpsCode: '18.12.09' }
                ]
            }, {
                name: 'Pesisir Barat',
                bpsCode: '18.13',
                districts: [
                    { name: 'Pesisir Tengah', bpsCode: '18.13.01' },
                    { name: 'Pesisir Selatan', bpsCode: '18.13.02' },
                    { name: 'Lemong', bpsCode: '18.13.03' },
                    { name: 'Pesisir Utara', bpsCode: '18.13.04' },
                    { name: 'Karya Penggawa', bpsCode: '18.13.05' },
                    { name: 'Pulaupisang (Pulau Pisang)', bpsCode: '18.13.06' },
                    { name: 'Way Krui', bpsCode: '18.13.07' },
                    { name: 'Krui Selatan', bpsCode: '18.13.08' },
                    { name: 'Ngambur', bpsCode: '18.13.09' },
                    { name: 'Ngaras (Bengkunat Belimbing)', bpsCode: '18.13.10' },
                    { name: 'Bangkunat (Bengkunat)', bpsCode: '18.13.11' }
                ]
            }, {
                name: 'Bandar Lampung',
                bpsCode: '18.71',
                districts: [
                    { name: 'Kedaton', bpsCode: '18.71.01' },
                    { name: 'Sukarame', bpsCode: '18.71.02' },
                    { name: 'Tanjungkarang Barat (Tanjung Karang Barat)', bpsCode: '18.71.03' },
                    { name: 'Panjang', bpsCode: '18.71.04' },
                    { name: 'Tanjungkarang Timur (Tanjung Karang Timur)', bpsCode: '18.71.05' },
                    { name: 'Tanjungkarang Pusat (Tanjung Karang Pusat)', bpsCode: '18.71.06' },
                    { name: 'Telukbetung Selatan', bpsCode: '18.71.07' },
                    { name: 'Telukbetung Barat', bpsCode: '18.71.08' },
                    { name: 'Telukbetung Utara', bpsCode: '18.71.09' },
                    { name: 'Rajabasa', bpsCode: '18.71.10' },
                    { name: 'Tanjung Senang', bpsCode: '18.71.11' },
                    { name: 'Sukabumi', bpsCode: '18.71.12' },
                    { name: 'Kemiling', bpsCode: '18.71.13' },
                    { name: 'Labuhan Ratu', bpsCode: '18.71.14' },
                    { name: 'Way Halim', bpsCode: '18.71.15' },
                    { name: 'Langkapura', bpsCode: '18.71.16' },
                    { name: 'Enggal', bpsCode: '18.71.17' },
                    { name: 'Kedamaian', bpsCode: '18.71.18' },
                    { name: 'Telukbetung Timur', bpsCode: '18.71.19' },
                    { name: 'Bumi Waras', bpsCode: '18.71.20' }
                ]
            }, {
                name: 'Metro',
                bpsCode: '18.72',
                districts: [
                    { name: 'Metro Pusat', bpsCode: '18.72.01' },
                    { name: 'Metro Utara', bpsCode: '18.72.02' },
                    { name: 'Metro Barat', bpsCode: '18.72.03' },
                    { name: 'Metro Timur', bpsCode: '18.72.04' },
                    { name: 'Metro Selatan', bpsCode: '18.72.05' }
                ]
            }
        ]
    },
    '19': {
        regencies: [
            {
                name: 'Bangka',
                bpsCode: '19.01',
                districts: [
                    { name: 'Sungailiat (Sungai Liat)', bpsCode: '19.01.01' },
                    { name: 'Belinyu', bpsCode: '19.01.02' },
                    { name: 'Merawang', bpsCode: '19.01.03' },
                    { name: 'Mendo Barat', bpsCode: '19.01.04' },
                    { name: 'Pemali', bpsCode: '19.01.05' },
                    { name: 'Bakam', bpsCode: '19.01.06' },
                    { name: 'Riau Silip', bpsCode: '19.01.07' },
                    { name: 'Puding Besar', bpsCode: '19.01.08' }
                ]
            }, {
                name: 'Belitung',
                bpsCode: '19.02',
                districts: [
                    { name: 'Tanjung Pandan', bpsCode: '19.02.01' },
                    { name: 'Membalong', bpsCode: '19.02.02' },
                    { name: 'Selat Nasik', bpsCode: '19.02.03' },
                    { name: 'Sijuk', bpsCode: '19.02.04' },
                    { name: 'Badau', bpsCode: '19.02.05' }
                ]
            }, {
                name: 'Bangka Selatan',
                bpsCode: '19.03',
                districts: [
                    { name: 'Toboali', bpsCode: '19.03.01' },
                    { name: 'Lepar Pongok', bpsCode: '19.03.02' },
                    { name: 'Air Gegas', bpsCode: '19.03.03' },
                    { name: 'Simpang Rimba', bpsCode: '19.03.04' },
                    { name: 'Payung', bpsCode: '19.03.05' },
                    { name: 'Tukak Sadai', bpsCode: '19.03.06' },
                    { name: 'Pulaubesar (Pulau Besar)', bpsCode: '19.03.07' },
                    { name: 'Kepulauan Pongok', bpsCode: '19.03.08' }
                ]
            }, {
                name: 'Bangka Tengah',
                bpsCode: '19.04',
                districts: [
                    { name: 'Koba', bpsCode: '19.04.01' },
                    { name: 'Pangkalan Baru', bpsCode: '19.04.02' },
                    { name: 'Sungai Selan', bpsCode: '19.04.03' },
                    { name: 'Simpang Katis', bpsCode: '19.04.04' },
                    { name: 'Namang', bpsCode: '19.04.05' },
                    { name: 'Lubuk Besar', bpsCode: '19.04.06' }
                ]
            }, {
                name: 'Bangka Barat',
                bpsCode: '19.05',
                districts: [
                    { name: 'Mentok (Muntok)', bpsCode: '19.05.01' },
                    { name: 'Simpang Teritip', bpsCode: '19.05.02' },
                    { name: 'Jebus', bpsCode: '19.05.03' },
                    { name: 'Kelapa', bpsCode: '19.05.04' },
                    { name: 'Tempilang', bpsCode: '19.05.05' },
                    { name: 'Parittiga', bpsCode: '19.05.06' }
                ]
            }, {
                name: 'Belitung Timur',
                bpsCode: '19.06',
                districts: [
                    { name: 'Manggar', bpsCode: '19.06.01' },
                    { name: 'Gantung', bpsCode: '19.06.02' },
                    { name: 'Dendang', bpsCode: '19.06.03' },
                    { name: 'Kelapa Kampit', bpsCode: '19.06.04' },
                    { name: 'Damar', bpsCode: '19.06.05' },
                    { name: 'Simpang Renggiang', bpsCode: '19.06.06' },
                    { name: 'Simpang Pesak', bpsCode: '19.06.07' }
                ]
            }, {
                name: 'Pangkal Pinang',
                bpsCode: '19.71',
                districts: [
                    { name: 'Bukitintan (Bukit Intan)', bpsCode: '19.71.01' },
                    { name: 'Taman Sari', bpsCode: '19.71.02' },
                    { name: 'Pangkal Balam', bpsCode: '19.71.03' },
                    { name: 'Rangkui', bpsCode: '19.71.04' },
                    { name: 'Gerunggang', bpsCode: '19.71.05' },
                    { name: 'Gabek', bpsCode: '19.71.06' },
                    { name: 'Girimaya', bpsCode: '19.71.07' }
                ]
            }
        ]
    },
    '21': {
        regencies: [
            {
                name: 'Bintan',
                bpsCode: '21.01',
                districts: [
                    { name: 'Gunung Kijang', bpsCode: '21.01.04' },
                    { name: 'Bintan Timur', bpsCode: '21.01.06' },
                    { name: 'Bintan Utara', bpsCode: '21.01.07' },
                    { name: 'Teluk Bintan', bpsCode: '21.01.08' },
                    { name: 'Tambelan', bpsCode: '21.01.09' },
                    { name: 'Telok Sebong (Teluk Sebong)', bpsCode: '21.01.10' },
                    { name: 'Toapaya', bpsCode: '21.01.12' },
                    { name: 'Mantang', bpsCode: '21.01.13' },
                    { name: 'Bintan Pesisir', bpsCode: '21.01.14' },
                    { name: 'Seri/Sri Kuala Lobam', bpsCode: '21.01.15' }
                ]
            }, {
                name: 'Karimun',
                bpsCode: '21.02',
                districts: [
                    { name: 'Moro', bpsCode: '21.02.01' },
                    { name: 'Kundur', bpsCode: '21.02.02' },
                    { name: 'Karimun', bpsCode: '21.02.03' },
                    { name: 'Meral', bpsCode: '21.02.04' },
                    { name: 'Tebing', bpsCode: '21.02.05' },
                    { name: 'Buru', bpsCode: '21.02.06' },
                    { name: 'Kundur Utara', bpsCode: '21.02.07' },
                    { name: 'Kundur Barat', bpsCode: '21.02.08' },
                    { name: 'Durai', bpsCode: '21.02.09' },
                    { name: 'Meral Barat', bpsCode: '21.02.10' },
                    { name: 'Ungar', bpsCode: '21.02.11' },
                    { name: 'Belat', bpsCode: '21.02.12' }
                ]
            }, {
                name: 'Natuna',
                bpsCode: '21.03',
                districts: [
                    { name: 'Midai', bpsCode: '21.03.04' },
                    { name: 'Bunguran Barat', bpsCode: '21.03.05' },
                    { name: 'Serasan', bpsCode: '21.03.06' },
                    { name: 'Bunguran Timur', bpsCode: '21.03.07' },
                    { name: 'Bunguran Utara', bpsCode: '21.03.08' },
                    { name: 'Subi', bpsCode: '21.03.09' },
                    { name: 'Pulau Laut', bpsCode: '21.03.10' },
                    { name: 'Pulau Tiga', bpsCode: '21.03.11' },
                    { name: 'Bunguran Timur Laut', bpsCode: '21.03.15' },
                    { name: 'Bunguran Tengah', bpsCode: '21.03.16' },
                    { name: 'Bunguran Selatan', bpsCode: '21.03.18' },
                    { name: 'Serasan Timur', bpsCode: '21.03.19' },
                    { name: 'Bunguran Batubi', bpsCode: '21.03.20' },
                    { name: 'Pulau Tiga Barat', bpsCode: '21.03.21' },
                    { name: 'Suak Midai', bpsCode: '21.03.22' }
                ]
            }, {
                name: 'Lingga',
                bpsCode: '21.04',
                districts: [
                    { name: 'Singkep', bpsCode: '21.04.01' },
                    { name: 'Lingga', bpsCode: '21.04.02' },
                    { name: 'Senayang', bpsCode: '21.04.03' },
                    { name: 'Singkep Barat', bpsCode: '21.04.04' },
                    { name: 'Lingga Utara', bpsCode: '21.04.05' },
                    { name: 'Singkep Pesisir', bpsCode: '21.04.06' },
                    { name: 'Lingga Timur', bpsCode: '21.04.07' },
                    { name: 'Selayar', bpsCode: '21.04.08' },
                    { name: 'Singkep Selatan', bpsCode: '21.04.09' },
                    { name: 'Kepulauan Posek', bpsCode: '21.04.10' }
                ]
            }, {
                name: 'Kepulauan Anambas',
                bpsCode: '21.05',
                districts: [
                    { name: 'Siantan', bpsCode: '21.05.01' },
                    { name: 'Palmatak', bpsCode: '21.05.02' },
                    { name: 'Siantan Timur', bpsCode: '21.05.03' },
                    { name: 'Siantan Selatan', bpsCode: '21.05.04' },
                    { name: 'Jemaja Timur', bpsCode: '21.05.05' },
                    { name: 'Jemaja', bpsCode: '21.05.06' },
                    { name: 'Siantan Tengah', bpsCode: '21.05.07' }
                ]
            }, {
                name: 'Batam',
                bpsCode: '21.71',
                districts: [
                    { name: 'Belakang Padang', bpsCode: '21.71.01' },
                    { name: 'Batu Ampar', bpsCode: '21.71.02' },
                    { name: 'Sekupang', bpsCode: '21.71.03' },
                    { name: 'Nongsa', bpsCode: '21.71.04' },
                    { name: 'Bulang', bpsCode: '21.71.05' },
                    { name: 'Lubuk Baja', bpsCode: '21.71.06' },
                    { name: 'Sei/Sungai Beduk', bpsCode: '21.71.07' },
                    { name: 'Galang', bpsCode: '21.71.08' },
                    { name: 'Bengkong', bpsCode: '21.71.09' },
                    { name: 'Batam Kota', bpsCode: '21.71.10' },
                    { name: 'Sagulung', bpsCode: '21.71.11' },
                    { name: 'Batu Aji', bpsCode: '21.71.12' }
                ]
            }, {
                name: 'Tanjung Pinang',
                bpsCode: '21.72',
                districts: [
                    { name: 'Tanjung Pinang Barat', bpsCode: '21.72.01' },
                    { name: 'Tanjung Pinang Timur', bpsCode: '21.72.02' },
                    { name: 'Tanjung Pinang Kota', bpsCode: '21.72.03' },
                    { name: 'Bukit Bestari', bpsCode: '21.72.04' }
                ]
            }
        ]
    },
    '31': {
        regencies: [
            {
                name: 'Kepulauan Seribu',
                bpsCode: '31.01',
                districts: [
                    { name: 'Kepulauan Seribu Utara', bpsCode: '31.01.01' },
                    { name: 'Kepulauan Seribu Selatan', bpsCode: '31.01.02' }
                ]
            }, {
                name: 'Jakarta Pusat',
                bpsCode: '31.71',
                districts: [
                    { name: 'Gambir', bpsCode: '31.71.01' },
                    { name: 'Sawah Besar', bpsCode: '31.71.02' },
                    { name: 'Kemayoran', bpsCode: '31.71.03' },
                    { name: 'Senen', bpsCode: '31.71.04' },
                    { name: 'Cempaka Putih', bpsCode: '31.71.05' },
                    { name: 'Menteng', bpsCode: '31.71.06' },
                    { name: 'Tanah Abang', bpsCode: '31.71.07' },
                    { name: 'Johar Baru', bpsCode: '31.71.08' }
                ]
            }, {
                name: 'Jakarta Utara',
                bpsCode: '31.72',
                districts: [
                    { name: 'Penjaringan', bpsCode: '31.72.01' },
                    { name: 'Tanjung Priok', bpsCode: '31.72.02' },
                    { name: 'Koja', bpsCode: '31.72.03' },
                    { name: 'Cilincing', bpsCode: '31.72.04' },
                    { name: 'Pademangan', bpsCode: '31.72.05' },
                    { name: 'Kelapa Gading', bpsCode: '31.72.06' }
                ]
            }, {
                name: 'Jakarta Barat',
                bpsCode: '31.73',
                districts: [
                    { name: 'Cengkareng', bpsCode: '31.73.01' },
                    { name: 'Grogol Petamburan', bpsCode: '31.73.02' },
                    { name: 'Taman Sari', bpsCode: '31.73.03' },
                    { name: 'Tambora', bpsCode: '31.73.04' },
                    { name: 'Kebon Jeruk', bpsCode: '31.73.05' },
                    { name: 'Kalideres', bpsCode: '31.73.06' },
                    { name: 'Pal Merah (Palmerah)', bpsCode: '31.73.07' },
                    { name: 'Kembangan', bpsCode: '31.73.08' }
                ]
            }, {
                name: 'Jakarta Selatan',
                bpsCode: '31.74',
                districts: [
                    { name: 'Tebet', bpsCode: '31.74.01' },
                    { name: 'Setiabudi (Setia Budi)', bpsCode: '31.74.02' },
                    { name: 'Mampang Prapatan', bpsCode: '31.74.03' },
                    { name: 'Pasar Minggu', bpsCode: '31.74.04' },
                    { name: 'Kebayoran Lama', bpsCode: '31.74.05' },
                    { name: 'Cilandak', bpsCode: '31.74.06' },
                    { name: 'Kebayoran Baru', bpsCode: '31.74.07' },
                    { name: 'Pancoran', bpsCode: '31.74.08' },
                    { name: 'Jagakarsa', bpsCode: '31.74.09' },
                    { name: 'Pesanggrahan', bpsCode: '31.74.10' }
                ]
            }, {
                name: 'Jakarta Timur',
                bpsCode: '31.75',
                districts: [
                    { name: 'Matraman', bpsCode: '31.75.01' },
                    { name: 'Pulogadung (Pulo Gadung)', bpsCode: '31.75.02' },
                    { name: 'Jatinegara', bpsCode: '31.75.03' },
                    { name: 'Kramatjati (Kramat Jati)', bpsCode: '31.75.04' },
                    { name: 'Pasar Rebo', bpsCode: '31.75.05' },
                    { name: 'Cakung', bpsCode: '31.75.06' },
                    { name: 'Duren Sawit', bpsCode: '31.75.07' },
                    { name: 'Makasar', bpsCode: '31.75.08' },
                    { name: 'Ciracas', bpsCode: '31.75.09' },
                    { name: 'Cipayung', bpsCode: '31.75.10' }
                ]
            }
        ]
    },
    '32': {
        regencies: [
            {
                name: 'Bogor',
                bpsCode: '32.01',
                districts: [
                    { name: 'Cibinong', bpsCode: '32.01.01' },
                    { name: 'Gunung Putri', bpsCode: '32.01.02' },
                    { name: 'Citeureup', bpsCode: '32.01.03' },
                    { name: 'Sukaraja', bpsCode: '32.01.04' },
                    { name: 'Babakan Madang', bpsCode: '32.01.05' },
                    { name: 'Jonggol', bpsCode: '32.01.06' },
                    { name: 'Cileungsi', bpsCode: '32.01.07' },
                    { name: 'Cariu', bpsCode: '32.01.08' },
                    { name: 'Sukamakmur', bpsCode: '32.01.09' },
                    { name: 'Parung', bpsCode: '32.01.10' },
                    { name: 'Gunung Sindur', bpsCode: '32.01.11' },
                    { name: 'Kemang', bpsCode: '32.01.12' },
                    { name: 'Bojong Gede (Bojonggede)', bpsCode: '32.01.13' },
                    { name: 'Leuwiliang', bpsCode: '32.01.14' },
                    { name: 'Ciampea', bpsCode: '32.01.15' },
                    { name: 'Cibungbulang', bpsCode: '32.01.16' },
                    { name: 'Pamijahan', bpsCode: '32.01.17' },
                    { name: 'Rumpin', bpsCode: '32.01.18' },
                    { name: 'Jasinga', bpsCode: '32.01.19' },
                    { name: 'Parung Panjang', bpsCode: '32.01.20' },
                    { name: 'Nanggung', bpsCode: '32.01.21' },
                    { name: 'Cigudeg', bpsCode: '32.01.22' },
                    { name: 'Tenjo', bpsCode: '32.01.23' },
                    { name: 'Ciawi', bpsCode: '32.01.24' },
                    { name: 'Cisarua', bpsCode: '32.01.25' },
                    { name: 'Megamendung', bpsCode: '32.01.26' },
                    { name: 'Caringin', bpsCode: '32.01.27' },
                    { name: 'Cijeruk', bpsCode: '32.01.28' },
                    { name: 'Ciomas', bpsCode: '32.01.29' },
                    { name: 'Dramaga', bpsCode: '32.01.30' },
                    { name: 'Tamansari', bpsCode: '32.01.31' },
                    { name: 'Klapanunggal', bpsCode: '32.01.32' },
                    { name: 'Ciseeng', bpsCode: '32.01.33' },
                    { name: 'Ranca Bungur', bpsCode: '32.01.34' },
                    { name: 'Sukajaya', bpsCode: '32.01.35' },
                    { name: 'Tanjungsari', bpsCode: '32.01.36' },
                    { name: 'Tajurhalang', bpsCode: '32.01.37' },
                    { name: 'Cigombong', bpsCode: '32.01.38' },
                    { name: 'Leuwisadeng', bpsCode: '32.01.39' },
                    { name: 'Tenjolaya', bpsCode: '32.01.40' }
                ]
            }, {
                name: 'Sukabumi',
                bpsCode: '32.02',
                districts: [
                    { name: 'Palabuhanratu (Pelabuhanratu)', bpsCode: '32.02.01' },
                    { name: 'Simpenan', bpsCode: '32.02.02' },
                    { name: 'Cikakak', bpsCode: '32.02.03' },
                    { name: 'Bantargadung', bpsCode: '32.02.04' },
                    { name: 'Cisolok', bpsCode: '32.02.05' },
                    { name: 'Cikidang', bpsCode: '32.02.06' },
                    { name: 'Lengkong', bpsCode: '32.02.07' },
                    { name: 'Jampangtengah (Jampang Tengah)', bpsCode: '32.02.08' },
                    { name: 'Warungkiara', bpsCode: '32.02.09' },
                    { name: 'Cikembar', bpsCode: '32.02.10' },
                    { name: 'Cibadak', bpsCode: '32.02.11' },
                    { name: 'Nagrak', bpsCode: '32.02.12' },
                    { name: 'Parungkuda (Parung Kuda)', bpsCode: '32.02.13' },
                    { name: 'Bojonggenteng (Bojong Genteng)', bpsCode: '32.02.14' },
                    { name: 'Parakansalak (Parakan Salak)', bpsCode: '32.02.15' },
                    { name: 'Cicurug', bpsCode: '32.02.16' },
                    { name: 'Cidahu', bpsCode: '32.02.17' },
                    { name: 'Kalapanunggal (Kalapa Nunggal)', bpsCode: '32.02.18' },
                    { name: 'Kabandungan', bpsCode: '32.02.19' },
                    { name: 'Waluran', bpsCode: '32.02.20' },
                    { name: 'Jampangkulon (Jampang Kulon)', bpsCode: '32.02.21' },
                    { name: 'Ciemas', bpsCode: '32.02.22' },
                    { name: 'Kalibunder', bpsCode: '32.02.23' },
                    { name: 'Surade', bpsCode: '32.02.24' },
                    { name: 'Cibitung', bpsCode: '32.02.25' },
                    { name: 'Ciracap', bpsCode: '32.02.26' },
                    { name: 'Gunungguruh', bpsCode: '32.02.27' },
                    { name: 'Cicantayan', bpsCode: '32.02.28' },
                    { name: 'Cisaat', bpsCode: '32.02.29' },
                    { name: 'Kadudampit', bpsCode: '32.02.30' },
                    { name: 'Caringin', bpsCode: '32.02.31' },
                    { name: 'Sukabumi', bpsCode: '32.02.32' },
                    { name: 'Sukaraja', bpsCode: '32.02.33' },
                    { name: 'Kebonpedes', bpsCode: '32.02.34' },
                    { name: 'Cireunghas', bpsCode: '32.02.35' },
                    { name: 'Sukalarang', bpsCode: '32.02.36' },
                    { name: 'Pabuaran', bpsCode: '32.02.37' },
                    { name: 'Purabaya', bpsCode: '32.02.38' },
                    { name: 'Nyalindung', bpsCode: '32.02.39' },
                    { name: 'Gegerbitung (Geger Bitung)', bpsCode: '32.02.40' },
                    { name: 'Sagaranten', bpsCode: '32.02.41' },
                    { name: 'Curugkembar', bpsCode: '32.02.42' },
                    { name: 'Cidolog', bpsCode: '32.02.43' },
                    { name: 'Cidadap', bpsCode: '32.02.44' },
                    { name: 'Tegalbuleud', bpsCode: '32.02.45' },
                    { name: 'Cimanggu', bpsCode: '32.02.46' },
                    { name: 'Ciambar', bpsCode: '32.02.47' }
                ]
            }, {
                name: 'Cianjur',
                bpsCode: '32.03',
                districts: [
                    { name: 'Cianjur', bpsCode: '32.03.01' },
                    { name: 'Warungkondang', bpsCode: '32.03.02' },
                    { name: 'Cibeber', bpsCode: '32.03.03' },
                    { name: 'Cilaku', bpsCode: '32.03.04' },
                    { name: 'Ciranjang', bpsCode: '32.03.05' },
                    { name: 'Bojongpicung', bpsCode: '32.03.06' },
                    { name: 'Karangtengah', bpsCode: '32.03.07' },
                    { name: 'Mande', bpsCode: '32.03.08' },
                    { name: 'Sukaluyu', bpsCode: '32.03.09' },
                    { name: 'Pacet', bpsCode: '32.03.10' },
                    { name: 'Cugenang', bpsCode: '32.03.11' },
                    { name: 'Cikalongkulon', bpsCode: '32.03.12' },
                    { name: 'Sukaresmi', bpsCode: '32.03.13' },
                    { name: 'Sukanagara', bpsCode: '32.03.14' },
                    { name: 'Campaka', bpsCode: '32.03.15' },
                    { name: 'Takokak', bpsCode: '32.03.16' },
                    { name: 'Kadupandak', bpsCode: '32.03.17' },
                    { name: 'Pagelaran', bpsCode: '32.03.18' },
                    { name: 'Tanggeung', bpsCode: '32.03.19' },
                    { name: 'Cibinong', bpsCode: '32.03.20' },
                    { name: 'Sindangbarang', bpsCode: '32.03.21' },
                    { name: 'Agrabinta', bpsCode: '32.03.22' },
                    { name: 'Cidaun', bpsCode: '32.03.23' },
                    { name: 'Naringgul', bpsCode: '32.03.24' },
                    { name: 'Campakamulya (Campaka Mulya)', bpsCode: '32.03.25' },
                    { name: 'Cikadu', bpsCode: '32.03.26' },
                    { name: 'Gekbrong', bpsCode: '32.03.27' },
                    { name: 'Cipanas', bpsCode: '32.03.28' },
                    { name: 'Cijati', bpsCode: '32.03.29' },
                    { name: 'Leles', bpsCode: '32.03.30' },
                    { name: 'Haurwangi', bpsCode: '32.03.31' },
                    { name: 'Pasirkuda', bpsCode: '32.03.32' }
                ]
            }, {
                name: 'Bandung',
                bpsCode: '32.04',
                districts: [
                    { name: 'Cileunyi', bpsCode: '32.04.05' },
                    { name: 'Cimenyan (Cimeunyan)', bpsCode: '32.04.06' },
                    { name: 'Cilengkrang', bpsCode: '32.04.07' },
                    { name: 'Bojongsoang', bpsCode: '32.04.08' },
                    { name: 'Margahayu', bpsCode: '32.04.09' },
                    { name: 'Margaasih', bpsCode: '32.04.10' },
                    { name: 'Katapang', bpsCode: '32.04.11' },
                    { name: 'Dayeuhkolot', bpsCode: '32.04.12' },
                    { name: 'Banjaran', bpsCode: '32.04.13' },
                    { name: 'Pameungpeuk', bpsCode: '32.04.14' },
                    { name: 'Pangalengan', bpsCode: '32.04.15' },
                    { name: 'Arjasari', bpsCode: '32.04.16' },
                    { name: 'Cimaung', bpsCode: '32.04.17' },
                    { name: 'Cicalengka', bpsCode: '32.04.25' },
                    { name: 'Nagreg', bpsCode: '32.04.26' },
                    { name: 'Cikancung', bpsCode: '32.04.27' },
                    { name: 'Rancaekek', bpsCode: '32.04.28' },
                    { name: 'Ciparay', bpsCode: '32.04.29' },
                    { name: 'Pacet', bpsCode: '32.04.30' },
                    { name: 'Kertasari', bpsCode: '32.04.31' },
                    { name: 'Baleendah', bpsCode: '32.04.32' },
                    { name: 'Majalaya', bpsCode: '32.04.33' },
                    { name: 'Solokanjeruk (Solokan Jeruk)', bpsCode: '32.04.34' },
                    { name: 'Paseh', bpsCode: '32.04.35' },
                    { name: 'Ibun', bpsCode: '32.04.36' },
                    { name: 'Soreang', bpsCode: '32.04.37' },
                    { name: 'Pasirjambu', bpsCode: '32.04.38' },
                    { name: 'Ciwidey', bpsCode: '32.04.39' },
                    { name: 'Rancabali (Ranca Bali)', bpsCode: '32.04.40' },
                    { name: 'Cangkuang', bpsCode: '32.04.44' },
                    { name: 'Kutawaringin', bpsCode: '32.04.46' }
                ]
            }, {
                name: 'Garut',
                bpsCode: '32.05',
                districts: [
                    { name: 'Garut Kota', bpsCode: '32.05.01' },
                    { name: 'Karangpawitan', bpsCode: '32.05.02' },
                    { name: 'Wanaraja', bpsCode: '32.05.03' },
                    { name: 'Tarogong Kaler', bpsCode: '32.05.04' },
                    { name: 'Tarogong Kidul', bpsCode: '32.05.05' },
                    { name: 'Banyuresmi', bpsCode: '32.05.06' },
                    { name: 'Samarang', bpsCode: '32.05.07' },
                    { name: 'Pasirwangi', bpsCode: '32.05.08' },
                    { name: 'Leles', bpsCode: '32.05.09' },
                    { name: 'Kadungora', bpsCode: '32.05.10' },
                    { name: 'Leuwigoong', bpsCode: '32.05.11' },
                    { name: 'Cibatu', bpsCode: '32.05.12' },
                    { name: 'Kersamanah', bpsCode: '32.05.13' },
                    { name: 'Malangbong', bpsCode: '32.05.14' },
                    { name: 'Sukawening', bpsCode: '32.05.15' },
                    { name: 'Karangtengah', bpsCode: '32.05.16' },
                    { name: 'Bayongbong', bpsCode: '32.05.17' },
                    { name: 'Cigedug', bpsCode: '32.05.18' },
                    { name: 'Cilawu', bpsCode: '32.05.19' },
                    { name: 'Cisurupan', bpsCode: '32.05.20' },
                    { name: 'Sukaresmi', bpsCode: '32.05.21' },
                    { name: 'Cikajang', bpsCode: '32.05.22' },
                    { name: 'Banjarwangi', bpsCode: '32.05.23' },
                    { name: 'Singajaya', bpsCode: '32.05.24' },
                    { name: 'Cihurip', bpsCode: '32.05.25' },
                    { name: 'Peundeuy', bpsCode: '32.05.26' },
                    { name: 'Pameungpeuk', bpsCode: '32.05.27' },
                    { name: 'Cisompet', bpsCode: '32.05.28' },
                    { name: 'Cibalong', bpsCode: '32.05.29' },
                    { name: 'Cikelet', bpsCode: '32.05.30' },
                    { name: 'Bungbulang', bpsCode: '32.05.31' },
                    { name: 'Mekarmukti', bpsCode: '32.05.32' },
                    { name: 'Pakenjeng', bpsCode: '32.05.33' },
                    { name: 'Pamulihan', bpsCode: '32.05.34' },
                    { name: 'Cisewu', bpsCode: '32.05.35' },
                    { name: 'Caringin', bpsCode: '32.05.36' },
                    { name: 'Talegong', bpsCode: '32.05.37' },
                    { name: 'Blubur Limbangan', bpsCode: '32.05.38' },
                    { name: 'Selaawi', bpsCode: '32.05.39' },
                    { name: 'Cibiuk', bpsCode: '32.05.40' },
                    { name: 'Pangatikan', bpsCode: '32.05.41' },
                    { name: 'Sucinaraja', bpsCode: '32.05.42' }
                ]
            }, {
                name: 'Tasikmalaya',
                bpsCode: '32.06',
                districts: [
                    { name: 'Cipatujah', bpsCode: '32.06.01' },
                    { name: 'Karangnunggal', bpsCode: '32.06.02' },
                    { name: 'Cikalong', bpsCode: '32.06.03' },
                    { name: 'Pancatengah', bpsCode: '32.06.04' },
                    { name: 'Cikatomas', bpsCode: '32.06.05' },
                    { name: 'Cibalong', bpsCode: '32.06.06' },
                    { name: 'Parungponteng', bpsCode: '32.06.07' },
                    { name: 'Bantarkalong', bpsCode: '32.06.08' },
                    { name: 'Bojongasih', bpsCode: '32.06.09' },
                    { name: 'Culamega', bpsCode: '32.06.10' },
                    { name: 'Bojonggambir', bpsCode: '32.06.11' },
                    { name: 'Sodonghilir', bpsCode: '32.06.12' },
                    { name: 'Taraju', bpsCode: '32.06.13' },
                    { name: 'Salawu', bpsCode: '32.06.14' },
                    { name: 'Puspahiang', bpsCode: '32.06.15' },
                    { name: 'Tanjungjaya', bpsCode: '32.06.16' },
                    { name: 'Sukaraja', bpsCode: '32.06.17' },
                    { name: 'Salopa', bpsCode: '32.06.18' },
                    { name: 'Jatiwaras', bpsCode: '32.06.19' },
                    { name: 'Cineam', bpsCode: '32.06.20' },
                    { name: 'Karang Jaya', bpsCode: '32.06.21' },
                    { name: 'Manonjaya', bpsCode: '32.06.22' },
                    { name: 'Gunung Tanjung', bpsCode: '32.06.23' },
                    { name: 'Singaparna', bpsCode: '32.06.24' },
                    { name: 'Mangunreja', bpsCode: '32.06.25' },
                    { name: 'Sukarame', bpsCode: '32.06.26' },
                    { name: 'Cigalontang', bpsCode: '32.06.27' },
                    { name: 'Leuwisari', bpsCode: '32.06.28' },
                    { name: 'Padakembang', bpsCode: '32.06.29' },
                    { name: 'Sariwangi', bpsCode: '32.06.30' },
                    { name: 'Sukaratu', bpsCode: '32.06.31' },
                    { name: 'Cisayong', bpsCode: '32.06.32' },
                    { name: 'Sukahening', bpsCode: '32.06.33' },
                    { name: 'Rajapolah', bpsCode: '32.06.34' },
                    { name: 'Jamanis', bpsCode: '32.06.35' },
                    { name: 'Ciawi', bpsCode: '32.06.36' },
                    { name: 'Kadipaten', bpsCode: '32.06.37' },
                    { name: 'Pagerageung', bpsCode: '32.06.38' },
                    { name: 'Sukaresik', bpsCode: '32.06.39' }
                ]
            }, {
                name: 'Ciamis',
                bpsCode: '32.07',
                districts: [
                    { name: 'Ciamis', bpsCode: '32.07.01' },
                    { name: 'Cikoneng', bpsCode: '32.07.02' },
                    { name: 'Cijeungjing', bpsCode: '32.07.03' },
                    { name: 'Sadananya', bpsCode: '32.07.04' },
                    { name: 'Cidolog', bpsCode: '32.07.05' },
                    { name: 'Cihaurbeuti', bpsCode: '32.07.06' },
                    { name: 'Panumbangan', bpsCode: '32.07.07' },
                    { name: 'Panjalu', bpsCode: '32.07.08' },
                    { name: 'Kawali', bpsCode: '32.07.09' },
                    { name: 'Panawangan', bpsCode: '32.07.10' },
                    { name: 'Cipaku', bpsCode: '32.07.11' },
                    { name: 'Jatinagara', bpsCode: '32.07.12' },
                    { name: 'Rajadesa', bpsCode: '32.07.13' },
                    { name: 'Sukadana', bpsCode: '32.07.14' },
                    { name: 'Rancah', bpsCode: '32.07.15' },
                    { name: 'Tambaksari', bpsCode: '32.07.16' },
                    { name: 'Lakbok', bpsCode: '32.07.17' },
                    { name: 'Banjarsari', bpsCode: '32.07.18' },
                    { name: 'Pamarican', bpsCode: '32.07.19' },
                    { name: 'Cimaragas', bpsCode: '32.07.29' },
                    { name: 'Cisaga', bpsCode: '32.07.30' },
                    { name: 'Sindangkasih', bpsCode: '32.07.31' },
                    { name: 'Baregbeg', bpsCode: '32.07.32' },
                    { name: 'Sukamantri', bpsCode: '32.07.33' },
                    { name: 'Lumbung', bpsCode: '32.07.34' },
                    { name: 'Purwadadi', bpsCode: '32.07.35' },
                    { name: 'Banjaranyar', bpsCode: '32.07.37' }
                ]
            }, {
                name: 'Kuningan',
                bpsCode: '32.08',
                districts: [
                    { name: 'Kadugede', bpsCode: '32.08.01' },
                    { name: 'Ciniru', bpsCode: '32.08.02' },
                    { name: 'Subang', bpsCode: '32.08.03' },
                    { name: 'Ciwaru', bpsCode: '32.08.04' },
                    { name: 'Cibingbin', bpsCode: '32.08.05' },
                    { name: 'Luragung', bpsCode: '32.08.06' },
                    { name: 'Lebakwangi', bpsCode: '32.08.07' },
                    { name: 'Garawangi', bpsCode: '32.08.08' },
                    { name: 'Kuningan', bpsCode: '32.08.09' },
                    { name: 'Ciawigebang', bpsCode: '32.08.10' },
                    { name: 'Cidahu', bpsCode: '32.08.11' },
                    { name: 'Jalaksana', bpsCode: '32.08.12' },
                    { name: 'Cilimus', bpsCode: '32.08.13' },
                    { name: 'Mandirancan', bpsCode: '32.08.14' },
                    { name: 'Selajambe', bpsCode: '32.08.15' },
                    { name: 'Kramatmulya (Kramat Mulya)', bpsCode: '32.08.16' },
                    { name: 'Darma', bpsCode: '32.08.17' },
                    { name: 'Cigugur', bpsCode: '32.08.18' },
                    { name: 'Pasawahan', bpsCode: '32.08.19' },
                    { name: 'Nusaherang', bpsCode: '32.08.20' },
                    { name: 'Cipicung', bpsCode: '32.08.21' },
                    { name: 'Pancalang', bpsCode: '32.08.22' },
                    { name: 'Japara', bpsCode: '32.08.23' },
                    { name: 'Cimahi', bpsCode: '32.08.24' },
                    { name: 'Cilebak', bpsCode: '32.08.25' },
                    { name: 'Hantara', bpsCode: '32.08.26' },
                    { name: 'Kalimanggis', bpsCode: '32.08.27' },
                    { name: 'Cibeureum', bpsCode: '32.08.28' },
                    { name: 'Karang Kancana (Karangkancana)', bpsCode: '32.08.29' },
                    { name: 'Maleber', bpsCode: '32.08.30' },
                    { name: 'Sindang Agung (Sindangagung)', bpsCode: '32.08.31' },
                    { name: 'Cigandamekar', bpsCode: '32.08.32' }
                ]
            }, {
                name: 'Cirebon',
                bpsCode: '32.09',
                districts: [
                    { name: 'Waled', bpsCode: '32.09.01' },
                    { name: 'Ciledug', bpsCode: '32.09.02' },
                    { name: 'Losari', bpsCode: '32.09.03' },
                    { name: 'Pabedilan', bpsCode: '32.09.04' },
                    { name: 'Babakan', bpsCode: '32.09.05' },
                    { name: 'Karangsembung', bpsCode: '32.09.06' },
                    { name: 'Lemahabang', bpsCode: '32.09.07' },
                    { name: 'Susukan Lebak', bpsCode: '32.09.08' },
                    { name: 'Sedong', bpsCode: '32.09.09' },
                    { name: 'Astanajapura', bpsCode: '32.09.10' },
                    { name: 'Pangenan', bpsCode: '32.09.11' },
                    { name: 'Mundu', bpsCode: '32.09.12' },
                    { name: 'Beber', bpsCode: '32.09.13' },
                    { name: 'Talun (Cirebon Selatan)', bpsCode: '32.09.14' },
                    { name: 'Sumber', bpsCode: '32.09.15' },
                    { name: 'Dukupuntang', bpsCode: '32.09.16' },
                    { name: 'Palimanan', bpsCode: '32.09.17' },
                    { name: 'Plumbon', bpsCode: '32.09.18' },
                    { name: 'Weru', bpsCode: '32.09.19' },
                    { name: 'Kedawung', bpsCode: '32.09.20' },
                    { name: 'Gunung Jati (Cirebon Utara)', bpsCode: '32.09.21' },
                    { name: 'Kapetakan', bpsCode: '32.09.22' },
                    { name: 'Klangenan', bpsCode: '32.09.23' },
                    { name: 'Arjawinangun', bpsCode: '32.09.24' },
                    { name: 'Panguragan', bpsCode: '32.09.25' },
                    { name: 'Ciwaringin', bpsCode: '32.09.26' },
                    { name: 'Susukan', bpsCode: '32.09.27' },
                    { name: 'Gegesik', bpsCode: '32.09.28' },
                    { name: 'Kaliwedi', bpsCode: '32.09.29' },
                    { name: 'Gebang', bpsCode: '32.09.30' },
                    { name: 'Depok', bpsCode: '32.09.31' },
                    { name: 'Pasaleman', bpsCode: '32.09.32' },
                    { name: 'Pabuaran', bpsCode: '32.09.33' },
                    { name: 'Karangwareng', bpsCode: '32.09.34' },
                    { name: 'Tengah Tani', bpsCode: '32.09.35' },
                    { name: 'Plered', bpsCode: '32.09.36' },
                    { name: 'Gempol', bpsCode: '32.09.37' },
                    { name: 'Greged (Greget)', bpsCode: '32.09.38' },
                    { name: 'Suranenggala', bpsCode: '32.09.39' },
                    { name: 'Jamblang', bpsCode: '32.09.40' }
                ]
            }, {
                name: 'Majalengka',
                bpsCode: '32.10',
                districts: [
                    { name: 'Lemahsugih', bpsCode: '32.10.01' },
                    { name: 'Bantarujeg', bpsCode: '32.10.02' },
                    { name: 'Cikijing', bpsCode: '32.10.03' },
                    { name: 'Talaga', bpsCode: '32.10.04' },
                    { name: 'Argapura', bpsCode: '32.10.05' },
                    { name: 'Maja', bpsCode: '32.10.06' },
                    { name: 'Majalengka', bpsCode: '32.10.07' },
                    { name: 'Sukahaji', bpsCode: '32.10.08' },
                    { name: 'Rajagaluh', bpsCode: '32.10.09' },
                    { name: 'Leuwimunding', bpsCode: '32.10.10' },
                    { name: 'Jatiwangi', bpsCode: '32.10.11' },
                    { name: 'Dawuan', bpsCode: '32.10.12' },
                    { name: 'Kadipaten', bpsCode: '32.10.13' },
                    { name: 'Kertajati', bpsCode: '32.10.14' },
                    { name: 'Jatitujuh', bpsCode: '32.10.15' },
                    { name: 'Ligung', bpsCode: '32.10.16' },
                    { name: 'Sumberjaya', bpsCode: '32.10.17' },
                    { name: 'Panyingkiran', bpsCode: '32.10.18' },
                    { name: 'Palasah', bpsCode: '32.10.19' },
                    { name: 'Cigasong', bpsCode: '32.10.20' },
                    { name: 'Sindangwangi', bpsCode: '32.10.21' },
                    { name: 'Banjaran', bpsCode: '32.10.22' },
                    { name: 'Cingambul', bpsCode: '32.10.23' },
                    { name: 'Kasokandel', bpsCode: '32.10.24' },
                    { name: 'Sindang', bpsCode: '32.10.25' },
                    { name: 'Malausma', bpsCode: '32.10.26' }
                ]
            }, {
                name: 'Sumedang',
                bpsCode: '32.11',
                districts: [
                    { name: 'Wado', bpsCode: '32.11.01' },
                    { name: 'Jatinunggal', bpsCode: '32.11.02' },
                    { name: 'Darmaraja', bpsCode: '32.11.03' },
                    { name: 'Cibugel', bpsCode: '32.11.04' },
                    { name: 'Cisitu', bpsCode: '32.11.05' },
                    { name: 'Situraja', bpsCode: '32.11.06' },
                    { name: 'Conggeang', bpsCode: '32.11.07' },
                    { name: 'Paseh', bpsCode: '32.11.08' },
                    { name: 'Surian', bpsCode: '32.11.09' },
                    { name: 'Buahdua', bpsCode: '32.11.10' },
                    { name: 'Tanjungsari', bpsCode: '32.11.11' },
                    { name: 'Sukasari', bpsCode: '32.11.12' },
                    { name: 'Pamulihan', bpsCode: '32.11.13' },
                    { name: 'Cimanggung', bpsCode: '32.11.14' },
                    { name: 'Jatinangor', bpsCode: '32.11.15' },
                    { name: 'Rancakalong', bpsCode: '32.11.16' },
                    { name: 'Sumedang Selatan', bpsCode: '32.11.17' },
                    { name: 'Sumedang Utara', bpsCode: '32.11.18' },
                    { name: 'Ganeas', bpsCode: '32.11.19' },
                    { name: 'Tanjungkerta', bpsCode: '32.11.20' },
                    { name: 'Tanjungmedar', bpsCode: '32.11.21' },
                    { name: 'Cimalaka', bpsCode: '32.11.22' },
                    { name: 'Cisarua', bpsCode: '32.11.23' },
                    { name: 'Tomo', bpsCode: '32.11.24' },
                    { name: 'Ujungjaya', bpsCode: '32.11.25' },
                    { name: 'Jatigede', bpsCode: '32.11.26' }
                ]
            }, {
                name: 'Indramayu',
                bpsCode: '32.12',
                districts: [
                    { name: 'Haurgeulis', bpsCode: '32.12.01' },
                    { name: 'Kroya', bpsCode: '32.12.02' },
                    { name: 'Gabuswetan', bpsCode: '32.12.03' },
                    { name: 'Cikedung', bpsCode: '32.12.04' },
                    { name: 'Lelea', bpsCode: '32.12.05' },
                    { name: 'Bangodua', bpsCode: '32.12.06' },
                    { name: 'Widasari', bpsCode: '32.12.07' },
                    { name: 'Kertasemaya', bpsCode: '32.12.08' },
                    { name: 'Krangkeng', bpsCode: '32.12.09' },
                    { name: 'Karangampel', bpsCode: '32.12.10' },
                    { name: 'Juntinyuat', bpsCode: '32.12.11' },
                    { name: 'Sliyeg', bpsCode: '32.12.12' },
                    { name: 'Jatibarang', bpsCode: '32.12.13' },
                    { name: 'Balongan', bpsCode: '32.12.14' },
                    { name: 'Indramayu', bpsCode: '32.12.15' },
                    { name: 'Sindang', bpsCode: '32.12.16' },
                    { name: 'Cantigi', bpsCode: '32.12.17' },
                    { name: 'Lohbener', bpsCode: '32.12.18' },
                    { name: 'Arahan', bpsCode: '32.12.19' },
                    { name: 'Losarang', bpsCode: '32.12.20' },
                    { name: 'Kandanghaur', bpsCode: '32.12.21' },
                    { name: 'Bongas', bpsCode: '32.12.22' },
                    { name: 'Anjatan', bpsCode: '32.12.23' },
                    { name: 'Sukra', bpsCode: '32.12.24' },
                    { name: 'Gantar', bpsCode: '32.12.25' },
                    { name: 'Trisi/Terisi', bpsCode: '32.12.26' },
                    { name: 'Sukagumiwang', bpsCode: '32.12.27' },
                    { name: 'Kedokan Bunder', bpsCode: '32.12.28' },
                    { name: 'Pasekan', bpsCode: '32.12.29' },
                    { name: 'Tukdana', bpsCode: '32.12.30' },
                    { name: 'Patrol', bpsCode: '32.12.31' }
                ]
            }, {
                name: 'Subang',
                bpsCode: '32.13',
                districts: [
                    { name: 'Sagalaherang', bpsCode: '32.13.01' },
                    { name: 'Cisalak', bpsCode: '32.13.02' },
                    { name: 'Subang', bpsCode: '32.13.03' },
                    { name: 'Kalijati', bpsCode: '32.13.04' },
                    { name: 'Pabuaran', bpsCode: '32.13.05' },
                    { name: 'Purwadadi', bpsCode: '32.13.06' },
                    { name: 'Pagaden', bpsCode: '32.13.07' },
                    { name: 'Binong', bpsCode: '32.13.08' },
                    { name: 'Ciasem', bpsCode: '32.13.09' },
                    { name: 'Pusakanagara', bpsCode: '32.13.10' },
                    { name: 'Pamanukan', bpsCode: '32.13.11' },
                    { name: 'Jalancagak', bpsCode: '32.13.12' },
                    { name: 'Blanakan', bpsCode: '32.13.13' },
                    { name: 'Tanjungsiang', bpsCode: '32.13.14' },
                    { name: 'Compreng', bpsCode: '32.13.15' },
                    { name: 'Patokbeusi', bpsCode: '32.13.16' },
                    { name: 'Cibogo', bpsCode: '32.13.17' },
                    { name: 'Cipunagara', bpsCode: '32.13.18' },
                    { name: 'Cijambe', bpsCode: '32.13.19' },
                    { name: 'Cipeundeuy', bpsCode: '32.13.20' },
                    { name: 'Legonkulon', bpsCode: '32.13.21' },
                    { name: 'Cikaum', bpsCode: '32.13.22' },
                    { name: 'Serangpanjang', bpsCode: '32.13.23' },
                    { name: 'Sukasari', bpsCode: '32.13.24' },
                    { name: 'Tambakdahan', bpsCode: '32.13.25' },
                    { name: 'Kasomalang', bpsCode: '32.13.26' },
                    { name: 'Dawuan', bpsCode: '32.13.27' },
                    { name: 'Pagaden Barat', bpsCode: '32.13.28' },
                    { name: 'Ciater', bpsCode: '32.13.29' },
                    { name: 'Pusakajaya', bpsCode: '32.13.30' }
                ]
            }, {
                name: 'Purwakarta',
                bpsCode: '32.14',
                districts: [
                    { name: 'Purwakarta', bpsCode: '32.14.01' },
                    { name: 'Campaka', bpsCode: '32.14.02' },
                    { name: 'Jatiluhur', bpsCode: '32.14.03' },
                    { name: 'Plered', bpsCode: '32.14.04' },
                    { name: 'Sukatani', bpsCode: '32.14.05' },
                    { name: 'Darangdan', bpsCode: '32.14.06' },
                    { name: 'Maniis', bpsCode: '32.14.07' },
                    { name: 'Tegalwaru (Tegal Waru)', bpsCode: '32.14.08' },
                    { name: 'Wanayasa', bpsCode: '32.14.09' },
                    { name: 'Pasawahan', bpsCode: '32.14.10' },
                    { name: 'Bojong', bpsCode: '32.14.11' },
                    { name: 'Babakancikao', bpsCode: '32.14.12' },
                    { name: 'Bungursari', bpsCode: '32.14.13' },
                    { name: 'Cibatu', bpsCode: '32.14.14' },
                    { name: 'Sukasari', bpsCode: '32.14.15' },
                    { name: 'Pondoksalam', bpsCode: '32.14.16' },
                    { name: 'Kiarapedes', bpsCode: '32.14.17' }
                ]
            }, {
                name: 'Karawang',
                bpsCode: '32.15',
                districts: [
                    { name: 'Karawang Barat', bpsCode: '32.15.01' },
                    { name: 'Pangkalan', bpsCode: '32.15.02' },
                    { name: 'Telukjambe Timur', bpsCode: '32.15.03' },
                    { name: 'Ciampel', bpsCode: '32.15.04' },
                    { name: 'Klari', bpsCode: '32.15.05' },
                    { name: 'Rengasdengklok', bpsCode: '32.15.06' },
                    { name: 'Kutawaluya', bpsCode: '32.15.07' },
                    { name: 'Batujaya', bpsCode: '32.15.08' },
                    { name: 'Tirtajaya', bpsCode: '32.15.09' },
                    { name: 'Pedes', bpsCode: '32.15.10' },
                    { name: 'Cibuaya', bpsCode: '32.15.11' },
                    { name: 'Pakisjaya', bpsCode: '32.15.12' },
                    { name: 'Cikampek', bpsCode: '32.15.13' },
                    { name: 'Jatisari', bpsCode: '32.15.14' },
                    { name: 'Cilamaya Wetan', bpsCode: '32.15.15' },
                    { name: 'Tirtamulya', bpsCode: '32.15.16' },
                    { name: 'Telagasari (Talagasari)', bpsCode: '32.15.17' },
                    { name: 'Rawamerta', bpsCode: '32.15.18' },
                    { name: 'Lemahabang', bpsCode: '32.15.19' },
                    { name: 'Tempuran', bpsCode: '32.15.20' },
                    { name: 'Majalaya', bpsCode: '32.15.21' },
                    { name: 'Jayakerta', bpsCode: '32.15.22' },
                    { name: 'Cilamaya Kulon', bpsCode: '32.15.23' },
                    { name: 'Banyusari', bpsCode: '32.15.24' },
                    { name: 'Kota Baru (Kotabaru)', bpsCode: '32.15.25' },
                    { name: 'Karawang Timur', bpsCode: '32.15.26' },
                    { name: 'Telukjambe Barat', bpsCode: '32.15.27' },
                    { name: 'Tegalwaru', bpsCode: '32.15.28' },
                    { name: 'Purwasari', bpsCode: '32.15.29' },
                    { name: 'Cilebar', bpsCode: '32.15.30' }
                ]
            }, {
                name: 'Bekasi',
                bpsCode: '32.16',
                districts: [
                    { name: 'Tarumajaya', bpsCode: '32.16.01' },
                    { name: 'Babelan', bpsCode: '32.16.02' },
                    { name: 'Sukawangi', bpsCode: '32.16.03' },
                    { name: 'Tambelang', bpsCode: '32.16.04' },
                    { name: 'Tambun Utara', bpsCode: '32.16.05' },
                    { name: 'Tambun Selatan', bpsCode: '32.16.06' },
                    { name: 'Cibitung', bpsCode: '32.16.07' },
                    { name: 'Cikarang Barat', bpsCode: '32.16.08' },
                    { name: 'Cikarang Utara', bpsCode: '32.16.09' },
                    { name: 'Karang Bahagia (Karangbahagia)', bpsCode: '32.16.10' },
                    { name: 'Cikarang Timur', bpsCode: '32.16.11' },
                    { name: 'Kedung Waringin', bpsCode: '32.16.12' },
                    { name: 'Pebayuran', bpsCode: '32.16.13' },
                    { name: 'Sukakarya', bpsCode: '32.16.14' },
                    { name: 'Sukatani', bpsCode: '32.16.15' },
                    { name: 'Cabangbungin', bpsCode: '32.16.16' },
                    { name: 'Muaragembong (Muara Gembong)', bpsCode: '32.16.17' },
                    { name: 'Setu', bpsCode: '32.16.18' },
                    { name: 'Cikarang Selatan', bpsCode: '32.16.19' },
                    { name: 'Cikarang Pusat', bpsCode: '32.16.20' },
                    { name: 'Serang Baru', bpsCode: '32.16.21' },
                    { name: 'Cibarusah', bpsCode: '32.16.22' },
                    { name: 'Bojongmangu', bpsCode: '32.16.23' }
                ]
            }, {
                name: 'Bandung Barat',
                bpsCode: '32.17',
                districts: [
                    { name: 'Lembang', bpsCode: '32.17.01' },
                    { name: 'Parongpong', bpsCode: '32.17.02' },
                    { name: 'Cisarua', bpsCode: '32.17.03' },
                    { name: 'Cikalongwetan (Cikalong Wetan)', bpsCode: '32.17.04' },
                    { name: 'Cipeundeuy', bpsCode: '32.17.05' },
                    { name: 'Ngamprah', bpsCode: '32.17.06' },
                    { name: 'Cipatat', bpsCode: '32.17.07' },
                    { name: 'Padalarang', bpsCode: '32.17.08' },
                    { name: 'Batujajar', bpsCode: '32.17.09' },
                    { name: 'Cihampelas', bpsCode: '32.17.10' },
                    { name: 'Cililin', bpsCode: '32.17.11' },
                    { name: 'Cipongkor', bpsCode: '32.17.12' },
                    { name: 'Rongga', bpsCode: '32.17.13' },
                    { name: 'Sindangkerta', bpsCode: '32.17.14' },
                    { name: 'Gununghalu', bpsCode: '32.17.15' },
                    { name: 'Saguling', bpsCode: '32.17.16' }
                ]
            }, {
                name: 'Pangandaran',
                bpsCode: '32.18',
                districts: [
                    { name: 'Parigi', bpsCode: '32.18.01' },
                    { name: 'Cijulang', bpsCode: '32.18.02' },
                    { name: 'Cimerak', bpsCode: '32.18.03' },
                    { name: 'Cigugur', bpsCode: '32.18.04' },
                    { name: 'Langkaplancar', bpsCode: '32.18.05' },
                    { name: 'Mangunjaya', bpsCode: '32.18.06' },
                    { name: 'Padaherang', bpsCode: '32.18.07' },
                    { name: 'Kalipucang', bpsCode: '32.18.08' },
                    { name: 'Pangandaran', bpsCode: '32.18.09' },
                    { name: 'Sidamulih', bpsCode: '32.18.10' }
                ]
            }, {
                name: 'Bogor',
                bpsCode: '32.71',
                districts: [
                    { name: 'Bogor Selatan', bpsCode: '32.71.01' },
                    { name: 'Bogor Timur', bpsCode: '32.71.02' },
                    { name: 'Bogor Tengah', bpsCode: '32.71.03' },
                    { name: 'Bogor Barat', bpsCode: '32.71.04' },
                    { name: 'Bogor Utara', bpsCode: '32.71.05' },
                    { name: 'Tanah Sareal (Tanah Sereal)', bpsCode: '32.71.06' }
                ]
            }, {
                name: 'Sukabumi',
                bpsCode: '32.72',
                districts: [
                    { name: 'Gunungpuyuh (Gunung Puyuh)', bpsCode: '32.72.01' },
                    { name: 'Cikole', bpsCode: '32.72.02' },
                    { name: 'Citamiang', bpsCode: '32.72.03' },
                    { name: 'Warudoyong', bpsCode: '32.72.04' },
                    { name: 'Baros', bpsCode: '32.72.05' },
                    { name: 'Lembursitu', bpsCode: '32.72.06' },
                    { name: 'Cibeureum', bpsCode: '32.72.07' }
                ]
            }, {
                name: 'Bandung',
                bpsCode: '32.73',
                districts: [
                    { name: 'Sukasari', bpsCode: '32.73.01' },
                    { name: 'Coblong', bpsCode: '32.73.02' },
                    { name: 'Babakan Ciparay', bpsCode: '32.73.03' },
                    { name: 'Bojongloa Kaler', bpsCode: '32.73.04' },
                    { name: 'Andir', bpsCode: '32.73.05' },
                    { name: 'Cicendo', bpsCode: '32.73.06' },
                    { name: 'Sukajadi', bpsCode: '32.73.07' },
                    { name: 'Cidadap', bpsCode: '32.73.08' },
                    { name: 'Bandung Wetan', bpsCode: '32.73.09' },
                    { name: 'Astana Anyar', bpsCode: '32.73.10' },
                    { name: 'Regol', bpsCode: '32.73.11' },
                    { name: 'Batununggal', bpsCode: '32.73.12' },
                    { name: 'Lengkong', bpsCode: '32.73.13' },
                    { name: 'Cibeunying Kidul', bpsCode: '32.73.14' },
                    { name: 'Bandung Kulon', bpsCode: '32.73.15' },
                    { name: 'Kiaracondong', bpsCode: '32.73.16' },
                    { name: 'Bojongloa Kidul', bpsCode: '32.73.17' },
                    { name: 'Cibeunying Kaler', bpsCode: '32.73.18' },
                    { name: 'Sumur Bandung', bpsCode: '32.73.19' },
                    { name: 'Antapani (Cicadas)', bpsCode: '32.73.20' },
                    { name: 'Bandung Kidul', bpsCode: '32.73.21' },
                    { name: 'Buahbatu (Margacinta)', bpsCode: '32.73.22' },
                    { name: 'Rancasari', bpsCode: '32.73.23' },
                    { name: 'Arcamanik', bpsCode: '32.73.24' },
                    { name: 'Cibiru', bpsCode: '32.73.25' },
                    { name: 'Ujungberung (Ujung Berung)', bpsCode: '32.73.26' },
                    { name: 'Gedebage', bpsCode: '32.73.27' },
                    { name: 'Panyileukan', bpsCode: '32.73.28' },
                    { name: 'Cinambo', bpsCode: '32.73.29' },
                    { name: 'Mandalajati', bpsCode: '32.73.30' }
                ]
            }, {
                name: 'Cirebon',
                bpsCode: '32.74',
                districts: [
                    { name: 'Kejaksan', bpsCode: '32.74.01' },
                    { name: 'Lemah Wungkuk (Lemahwungkuk)', bpsCode: '32.74.02' },
                    { name: 'Harjamukti', bpsCode: '32.74.03' },
                    { name: 'Pekalipan', bpsCode: '32.74.04' },
                    { name: 'Kesambi', bpsCode: '32.74.05' }
                ]
            }, {
                name: 'Bekasi',
                bpsCode: '32.75',
                districts: [
                    { name: 'Bekasi Timur', bpsCode: '32.75.01' },
                    { name: 'Bekasi Barat', bpsCode: '32.75.02' },
                    { name: 'Bekasi Utara', bpsCode: '32.75.03' },
                    { name: 'Bekasi Selatan', bpsCode: '32.75.04' },
                    { name: 'Rawalumbu', bpsCode: '32.75.05' },
                    { name: 'Medansatria (Medan Satria)', bpsCode: '32.75.06' },
                    { name: 'Bantargebang (Bantar Gebang)', bpsCode: '32.75.07' },
                    { name: 'Pondokgede (Pondok Gede)', bpsCode: '32.75.08' },
                    { name: 'Jatiasih', bpsCode: '32.75.09' },
                    { name: 'Jatisampurna (Jati Sampurna)', bpsCode: '32.75.10' },
                    { name: 'Mustikajaya (Mustika Jaya)', bpsCode: '32.75.11' },
                    { name: 'Pondokmelati (Pondok Melati)', bpsCode: '32.75.12' }
                ]
            }, {
                name: 'Depok',
                bpsCode: '32.76',
                districts: [
                    { name: 'Pancoran Mas', bpsCode: '32.76.01' },
                    { name: 'Cimanggis', bpsCode: '32.76.02' },
                    { name: 'Sawangan', bpsCode: '32.76.03' },
                    { name: 'Limo', bpsCode: '32.76.04' },
                    { name: 'Sukmajaya', bpsCode: '32.76.05' },
                    { name: 'Beji', bpsCode: '32.76.06' },
                    { name: 'Cipayung', bpsCode: '32.76.07' },
                    { name: 'Cilodong', bpsCode: '32.76.08' },
                    { name: 'Cinere', bpsCode: '32.76.09' },
                    { name: 'Tapos', bpsCode: '32.76.10' },
                    { name: 'Bojongsari', bpsCode: '32.76.11' }
                ]
            }, {
                name: 'Cimahi',
                bpsCode: '32.77',
                districts: [
                    { name: 'Cimahi Selatan', bpsCode: '32.77.01' },
                    { name: 'Cimahi Tengah', bpsCode: '32.77.02' },
                    { name: 'Cimahi Utara', bpsCode: '32.77.03' }
                ]
            }, {
                name: 'Tasikmalaya',
                bpsCode: '32.78',
                districts: [
                    { name: 'Cihideung', bpsCode: '32.78.01' },
                    { name: 'Cipedes', bpsCode: '32.78.02' },
                    { name: 'Tawang', bpsCode: '32.78.03' },
                    { name: 'Indihiang', bpsCode: '32.78.04' },
                    { name: 'Kawalu', bpsCode: '32.78.05' },
                    { name: 'Cibeureum', bpsCode: '32.78.06' },
                    { name: 'Tamansari', bpsCode: '32.78.07' },
                    { name: 'Mangkubumi', bpsCode: '32.78.08' },
                    { name: 'Bungursari', bpsCode: '32.78.09' },
                    { name: 'Purbaratu', bpsCode: '32.78.10' }
                ]
            }, {
                name: 'Banjar',
                bpsCode: '32.79',
                districts: [
                    { name: 'Banjar', bpsCode: '32.79.01' },
                    { name: 'Pataruman', bpsCode: '32.79.02' },
                    { name: 'Purwaharja', bpsCode: '32.79.03' },
                    { name: 'Langensari', bpsCode: '32.79.04' }
                ]
            }
        ]
    },
    '33': {
        regencies: [
            {
                name: 'Cilacap',
                bpsCode: '33.01',
                districts: [
                    { name: 'Kedungreja', bpsCode: '33.01.01' },
                    { name: 'Kesugihan', bpsCode: '33.01.02' },
                    { name: 'Adipala', bpsCode: '33.01.03' },
                    { name: 'Binangun', bpsCode: '33.01.04' },
                    { name: 'Nusawungu', bpsCode: '33.01.05' },
                    { name: 'Kroya', bpsCode: '33.01.06' },
                    { name: 'Maos', bpsCode: '33.01.07' },
                    { name: 'Jeruklegi', bpsCode: '33.01.08' },
                    { name: 'Kawunganten', bpsCode: '33.01.09' },
                    { name: 'Gandrungmangu', bpsCode: '33.01.10' },
                    { name: 'Sidareja', bpsCode: '33.01.11' },
                    { name: 'Karangpucung', bpsCode: '33.01.12' },
                    { name: 'Cimanggu', bpsCode: '33.01.13' },
                    { name: 'Majenang', bpsCode: '33.01.14' },
                    { name: 'Wanareja', bpsCode: '33.01.15' },
                    { name: 'Dayeuhluhur', bpsCode: '33.01.16' },
                    { name: 'Sampang', bpsCode: '33.01.17' },
                    { name: 'Cipari', bpsCode: '33.01.18' },
                    { name: 'Patimuan', bpsCode: '33.01.19' },
                    { name: 'Bantarsari', bpsCode: '33.01.20' },
                    { name: 'Cilacap Selatan', bpsCode: '33.01.21' },
                    { name: 'Cilacap Tengah', bpsCode: '33.01.22' },
                    { name: 'Cilacap Utara', bpsCode: '33.01.23' },
                    { name: 'Kampung Laut', bpsCode: '33.01.24' }
                ]
            }, {
                name: 'Banyumas',
                bpsCode: '33.02',
                districts: [
                    { name: 'Lumbir', bpsCode: '33.02.01' },
                    { name: 'Wangon', bpsCode: '33.02.02' },
                    { name: 'Jatilawang', bpsCode: '33.02.03' },
                    { name: 'Rawalo', bpsCode: '33.02.04' },
                    { name: 'Kebasen', bpsCode: '33.02.05' },
                    { name: 'Kemranjen', bpsCode: '33.02.06' },
                    { name: 'Sumpiuh', bpsCode: '33.02.07' },
                    { name: 'Tambak', bpsCode: '33.02.08' },
                    { name: 'Somagede', bpsCode: '33.02.09' },
                    { name: 'Kalibagor', bpsCode: '33.02.10' },
                    { name: 'Banyumas', bpsCode: '33.02.11' },
                    { name: 'Patikraja', bpsCode: '33.02.12' },
                    { name: 'Purwojati', bpsCode: '33.02.13' },
                    { name: 'Ajibarang', bpsCode: '33.02.14' },
                    { name: 'Gumelar', bpsCode: '33.02.15' },
                    { name: 'Pekuncen', bpsCode: '33.02.16' },
                    { name: 'Cilongok', bpsCode: '33.02.17' },
                    { name: 'Karanglewas', bpsCode: '33.02.18' },
                    { name: 'Sokaraja', bpsCode: '33.02.19' },
                    { name: 'Kembaran', bpsCode: '33.02.20' },
                    { name: 'Sumbang', bpsCode: '33.02.21' },
                    { name: 'Baturraden (Baturaden)', bpsCode: '33.02.22' },
                    { name: 'Kedungbanteng (Kedung Banteng)', bpsCode: '33.02.23' },
                    { name: 'Purwokerto Selatan', bpsCode: '33.02.24' },
                    { name: 'Purwokerto Barat', bpsCode: '33.02.25' },
                    { name: 'Purwokerto Timur', bpsCode: '33.02.26' },
                    { name: 'Purwokerto Utara', bpsCode: '33.02.27' }
                ]
            }, {
                name: 'Purbalingga',
                bpsCode: '33.03',
                districts: [
                    { name: 'Kemangkon', bpsCode: '33.03.01' },
                    { name: 'Bukateja', bpsCode: '33.03.02' },
                    { name: 'Kejobong', bpsCode: '33.03.03' },
                    { name: 'Kaligondang', bpsCode: '33.03.04' },
                    { name: 'Purbalingga', bpsCode: '33.03.05' },
                    { name: 'Kalimanah', bpsCode: '33.03.06' },
                    { name: 'Kutasari', bpsCode: '33.03.07' },
                    { name: 'Mrebet', bpsCode: '33.03.08' },
                    { name: 'Bobotsari', bpsCode: '33.03.09' },
                    { name: 'Karangreja', bpsCode: '33.03.10' },
                    { name: 'Karanganyar', bpsCode: '33.03.11' },
                    { name: 'Karangmoncol', bpsCode: '33.03.12' },
                    { name: 'Rembang', bpsCode: '33.03.13' },
                    { name: 'Bojongsari', bpsCode: '33.03.14' },
                    { name: 'Padamara', bpsCode: '33.03.15' },
                    { name: 'Pengadegan', bpsCode: '33.03.16' },
                    { name: 'Karangjambu', bpsCode: '33.03.17' },
                    { name: 'Kertanegara', bpsCode: '33.03.18' }
                ]
            }, {
                name: 'Banjarnegara',
                bpsCode: '33.04',
                districts: [
                    { name: 'Susukan', bpsCode: '33.04.01' },
                    { name: 'Purworeja Klampok (Purworejo Klampok)', bpsCode: '33.04.02' },
                    { name: 'Mandiraja', bpsCode: '33.04.03' },
                    { name: 'Purwanegara (Purwonegoro)', bpsCode: '33.04.04' },
                    { name: 'Bawang', bpsCode: '33.04.05' },
                    { name: 'Banjarnegara', bpsCode: '33.04.06' },
                    { name: 'Sigaluh', bpsCode: '33.04.07' },
                    { name: 'Madukara', bpsCode: '33.04.08' },
                    { name: 'Banjarmangu', bpsCode: '33.04.09' },
                    { name: 'Wanadadi (Wonodadi)', bpsCode: '33.04.10' },
                    { name: 'Rakit', bpsCode: '33.04.11' },
                    { name: 'Punggelan', bpsCode: '33.04.12' },
                    { name: 'Karangkobar', bpsCode: '33.04.13' },
                    { name: 'Pagentan', bpsCode: '33.04.14' },
                    { name: 'Pejawaran', bpsCode: '33.04.15' },
                    { name: 'Batur', bpsCode: '33.04.16' },
                    { name: 'Wanayasa', bpsCode: '33.04.17' },
                    { name: 'Kalibening', bpsCode: '33.04.18' },
                    { name: 'Pandanarum', bpsCode: '33.04.19' },
                    { name: 'Pagedongan', bpsCode: '33.04.20' }
                ]
            }, {
                name: 'Kebumen',
                bpsCode: '33.05',
                districts: [
                    { name: 'Ayah', bpsCode: '33.05.01' },
                    { name: 'Buayan', bpsCode: '33.05.02' },
                    { name: 'Puring', bpsCode: '33.05.03' },
                    { name: 'Petanahan', bpsCode: '33.05.04' },
                    { name: 'Klirong', bpsCode: '33.05.05' },
                    { name: 'Buluspesantren', bpsCode: '33.05.06' },
                    { name: 'Ambal', bpsCode: '33.05.07' },
                    { name: 'Mirit', bpsCode: '33.05.08' },
                    { name: 'Prembun', bpsCode: '33.05.09' },
                    { name: 'Kutowinangun', bpsCode: '33.05.10' },
                    { name: 'Alian/Aliyan', bpsCode: '33.05.11' },
                    { name: 'Kebumen', bpsCode: '33.05.12' },
                    { name: 'Pejagoan', bpsCode: '33.05.13' },
                    { name: 'Sruweng', bpsCode: '33.05.14' },
                    { name: 'Adimulyo', bpsCode: '33.05.15' },
                    { name: 'Kuwarasan', bpsCode: '33.05.16' },
                    { name: 'Rowokele', bpsCode: '33.05.17' },
                    { name: 'Sempor', bpsCode: '33.05.18' },
                    { name: 'Gombong', bpsCode: '33.05.19' },
                    { name: 'Karanganyar', bpsCode: '33.05.20' },
                    { name: 'Karanggayam', bpsCode: '33.05.21' },
                    { name: 'Sadang', bpsCode: '33.05.22' },
                    { name: 'Bonorowo', bpsCode: '33.05.23' },
                    { name: 'Padureso', bpsCode: '33.05.24' },
                    { name: 'Poncowarno', bpsCode: '33.05.25' },
                    { name: 'Karangsambung', bpsCode: '33.05.26' }
                ]
            }, {
                name: 'Purworejo',
                bpsCode: '33.06',
                districts: [
                    { name: 'Grabag', bpsCode: '33.06.01' },
                    { name: 'Ngombol', bpsCode: '33.06.02' },
                    { name: 'Purwodadi', bpsCode: '33.06.03' },
                    { name: 'Bagelen', bpsCode: '33.06.04' },
                    { name: 'Kaligesing', bpsCode: '33.06.05' },
                    { name: 'Purworejo', bpsCode: '33.06.06' },
                    { name: 'Banyuurip', bpsCode: '33.06.07' },
                    { name: 'Bayan', bpsCode: '33.06.08' },
                    { name: 'Kutoarjo', bpsCode: '33.06.09' },
                    { name: 'Butuh', bpsCode: '33.06.10' },
                    { name: 'Pituruh', bpsCode: '33.06.11' },
                    { name: 'Kemiri', bpsCode: '33.06.12' },
                    { name: 'Bruno', bpsCode: '33.06.13' },
                    { name: 'Gebang', bpsCode: '33.06.14' },
                    { name: 'Loano', bpsCode: '33.06.15' },
                    { name: 'Bener', bpsCode: '33.06.16' }
                ]
            }, {
                name: 'Wonosobo',
                bpsCode: '33.07',
                districts: [
                    { name: 'Wadaslintang', bpsCode: '33.07.01' },
                    { name: 'Kepil', bpsCode: '33.07.02' },
                    { name: 'Sapuran', bpsCode: '33.07.03' },
                    { name: 'Kaliwiro', bpsCode: '33.07.04' },
                    { name: 'Leksono', bpsCode: '33.07.05' },
                    { name: 'Selomerto', bpsCode: '33.07.06' },
                    { name: 'Kalikajar', bpsCode: '33.07.07' },
                    { name: 'Kertek', bpsCode: '33.07.08' },
                    { name: 'Wonosobo', bpsCode: '33.07.09' },
                    { name: 'Watumalang', bpsCode: '33.07.10' },
                    { name: 'Mojotengah', bpsCode: '33.07.11' },
                    { name: 'Garung', bpsCode: '33.07.12' },
                    { name: 'Kejajar', bpsCode: '33.07.13' },
                    { name: 'Sukoharjo', bpsCode: '33.07.14' },
                    { name: 'Kalibawang', bpsCode: '33.07.15' }
                ]
            }, {
                name: 'Magelang',
                bpsCode: '33.08',
                districts: [
                    { name: 'Salaman', bpsCode: '33.08.01' },
                    { name: 'Borobudur', bpsCode: '33.08.02' },
                    { name: 'Ngluwar', bpsCode: '33.08.03' },
                    { name: 'Salam', bpsCode: '33.08.04' },
                    { name: 'Srumbung', bpsCode: '33.08.05' },
                    { name: 'Dukun', bpsCode: '33.08.06' },
                    { name: 'Sawangan', bpsCode: '33.08.07' },
                    { name: 'Muntilan', bpsCode: '33.08.08' },
                    { name: 'Mungkid', bpsCode: '33.08.09' },
                    { name: 'Mertoyudan', bpsCode: '33.08.10' },
                    { name: 'Tempuran', bpsCode: '33.08.11' },
                    { name: 'Kajoran', bpsCode: '33.08.12' },
                    { name: 'Kaliangkrik', bpsCode: '33.08.13' },
                    { name: 'Bandongan', bpsCode: '33.08.14' },
                    { name: 'Candimulyo', bpsCode: '33.08.15' },
                    { name: 'Pakis', bpsCode: '33.08.16' },
                    { name: 'Ngablak', bpsCode: '33.08.17' },
                    { name: 'Grabag', bpsCode: '33.08.18' },
                    { name: 'Tegalrejo', bpsCode: '33.08.19' },
                    { name: 'Secang', bpsCode: '33.08.20' },
                    { name: 'Windusari', bpsCode: '33.08.21' }
                ]
            }, {
                name: 'Boyolali',
                bpsCode: '33.09',
                districts: [
                    { name: 'Selo', bpsCode: '33.09.01' },
                    { name: 'Ampel', bpsCode: '33.09.02' },
                    { name: 'Cepogo', bpsCode: '33.09.03' },
                    { name: 'Musuk', bpsCode: '33.09.04' },
                    { name: 'Boyolali', bpsCode: '33.09.05' },
                    { name: 'Mojosongo', bpsCode: '33.09.06' },
                    { name: 'Teras', bpsCode: '33.09.07' },
                    { name: 'Sawit', bpsCode: '33.09.08' },
                    { name: 'Banyudono', bpsCode: '33.09.09' },
                    { name: 'Sambi', bpsCode: '33.09.10' },
                    { name: 'Ngemplak', bpsCode: '33.09.11' },
                    { name: 'Nogosari', bpsCode: '33.09.12' },
                    { name: 'Simo', bpsCode: '33.09.13' },
                    { name: 'Karanggede', bpsCode: '33.09.14' },
                    { name: 'Klego', bpsCode: '33.09.15' },
                    { name: 'Andong', bpsCode: '33.09.16' },
                    { name: 'Kemusu', bpsCode: '33.09.17' },
                    { name: 'Wonosegoro', bpsCode: '33.09.18' },
                    { name: 'Juwangi', bpsCode: '33.09.19' }
                ]
            }, {
                name: 'Klaten',
                bpsCode: '33.10',
                districts: [
                    { name: 'Prambanan', bpsCode: '33.10.01' },
                    { name: 'Gantiwarno', bpsCode: '33.10.02' },
                    { name: 'Wedi', bpsCode: '33.10.03' },
                    { name: 'Bayat', bpsCode: '33.10.04' },
                    { name: 'Cawas', bpsCode: '33.10.05' },
                    { name: 'Trucuk', bpsCode: '33.10.06' },
                    { name: 'Kebonarum', bpsCode: '33.10.07' },
                    { name: 'Jogonalan', bpsCode: '33.10.08' },
                    { name: 'Manisrenggo', bpsCode: '33.10.09' },
                    { name: 'Karangnongko', bpsCode: '33.10.10' },
                    { name: 'Ceper', bpsCode: '33.10.11' },
                    { name: 'Pedan', bpsCode: '33.10.12' },
                    { name: 'Karangdowo', bpsCode: '33.10.13' },
                    { name: 'Juwiring', bpsCode: '33.10.14' },
                    { name: 'Wonosari', bpsCode: '33.10.15' },
                    { name: 'Delanggu', bpsCode: '33.10.16' },
                    { name: 'Polanharjo', bpsCode: '33.10.17' },
                    { name: 'Karanganom', bpsCode: '33.10.18' },
                    { name: 'Tulung', bpsCode: '33.10.19' },
                    { name: 'Jatinom', bpsCode: '33.10.20' },
                    { name: 'Kemalang', bpsCode: '33.10.21' },
                    { name: 'Ngawen', bpsCode: '33.10.22' },
                    { name: 'Kalikotes', bpsCode: '33.10.23' },
                    { name: 'Klaten Utara', bpsCode: '33.10.24' },
                    { name: 'Klaten Tengah', bpsCode: '33.10.25' },
                    { name: 'Klaten Selatan', bpsCode: '33.10.26' }
                ]
            }, {
                name: 'Sukoharjo',
                bpsCode: '33.11',
                districts: [
                    { name: 'Weru', bpsCode: '33.11.01' },
                    { name: 'Bulu', bpsCode: '33.11.02' },
                    { name: 'Tawangsari', bpsCode: '33.11.03' },
                    { name: 'Sukoharjo', bpsCode: '33.11.04' },
                    { name: 'Nguter', bpsCode: '33.11.05' },
                    { name: 'Bendosari', bpsCode: '33.11.06' },
                    { name: 'Polokarto', bpsCode: '33.11.07' },
                    { name: 'Mojolaban', bpsCode: '33.11.08' },
                    { name: 'Grogol', bpsCode: '33.11.09' },
                    { name: 'Baki', bpsCode: '33.11.10' },
                    { name: 'Gatak', bpsCode: '33.11.11' },
                    { name: 'Kartasura', bpsCode: '33.11.12' }
                ]
            }, {
                name: 'Wonogiri',
                bpsCode: '33.12',
                districts: [
                    { name: 'Pracimantoro', bpsCode: '33.12.01' },
                    { name: 'Giritontro', bpsCode: '33.12.02' },
                    { name: 'Giriwoyo', bpsCode: '33.12.03' },
                    { name: 'Batuwarno', bpsCode: '33.12.04' },
                    { name: 'Tirtomoyo', bpsCode: '33.12.05' },
                    { name: 'Nguntoronadi', bpsCode: '33.12.06' },
                    { name: 'Baturetno', bpsCode: '33.12.07' },
                    { name: 'Eromoko', bpsCode: '33.12.08' },
                    { name: 'Wuryantoro', bpsCode: '33.12.09' },
                    { name: 'Manyaran', bpsCode: '33.12.10' },
                    { name: 'Selogiri', bpsCode: '33.12.11' },
                    { name: 'Wonogiri', bpsCode: '33.12.12' },
                    { name: 'Ngadirojo', bpsCode: '33.12.13' },
                    { name: 'Sidoharjo', bpsCode: '33.12.14' },
                    { name: 'Jatiroto', bpsCode: '33.12.15' },
                    { name: 'Kismantoro', bpsCode: '33.12.16' },
                    { name: 'Purwantoro', bpsCode: '33.12.17' },
                    { name: 'Bulukerto', bpsCode: '33.12.18' },
                    { name: 'Slogohimo', bpsCode: '33.12.19' },
                    { name: 'Jatisrono', bpsCode: '33.12.20' },
                    { name: 'Jatipurno', bpsCode: '33.12.21' },
                    { name: 'Girimarto', bpsCode: '33.12.22' },
                    { name: 'Karangtengah', bpsCode: '33.12.23' },
                    { name: 'Paranggupito', bpsCode: '33.12.24' },
                    { name: 'Puhpelem', bpsCode: '33.12.25' }
                ]
            }, {
                name: 'Karanganyar',
                bpsCode: '33.13',
                districts: [
                    { name: 'Jatipuro', bpsCode: '33.13.01' },
                    { name: 'Jatiyoso', bpsCode: '33.13.02' },
                    { name: 'Jumapolo', bpsCode: '33.13.03' },
                    { name: 'Jumantono', bpsCode: '33.13.04' },
                    { name: 'Matesih', bpsCode: '33.13.05' },
                    { name: 'Tawangmangu', bpsCode: '33.13.06' },
                    { name: 'Ngargoyoso', bpsCode: '33.13.07' },
                    { name: 'Karangpandan', bpsCode: '33.13.08' },
                    { name: 'Karanganyar', bpsCode: '33.13.09' },
                    { name: 'Tasikmadu', bpsCode: '33.13.10' },
                    { name: 'Jaten', bpsCode: '33.13.11' },
                    { name: 'Colomadu', bpsCode: '33.13.12' },
                    { name: 'Gondangrejo', bpsCode: '33.13.13' },
                    { name: 'Kebakkramat', bpsCode: '33.13.14' },
                    { name: 'Mojogedang', bpsCode: '33.13.15' },
                    { name: 'Kerjo', bpsCode: '33.13.16' },
                    { name: 'Jenawi', bpsCode: '33.13.17' }
                ]
            }, {
                name: 'Sragen',
                bpsCode: '33.14',
                districts: [
                    { name: 'Kalijambe', bpsCode: '33.14.01' },
                    { name: 'Plupuh', bpsCode: '33.14.02' },
                    { name: 'Masaran', bpsCode: '33.14.03' },
                    { name: 'Kedawung', bpsCode: '33.14.04' },
                    { name: 'Sambirejo', bpsCode: '33.14.05' },
                    { name: 'Gondang', bpsCode: '33.14.06' },
                    { name: 'Sambungmacan (Sambung Macan)', bpsCode: '33.14.07' },
                    { name: 'Ngrampal', bpsCode: '33.14.08' },
                    { name: 'Karangmalang', bpsCode: '33.14.09' },
                    { name: 'Sragen', bpsCode: '33.14.10' },
                    { name: 'Sidoharjo', bpsCode: '33.14.11' },
                    { name: 'Tanon', bpsCode: '33.14.12' },
                    { name: 'Gemolong', bpsCode: '33.14.13' },
                    { name: 'Miri', bpsCode: '33.14.14' },
                    { name: 'Sumberlawang', bpsCode: '33.14.15' },
                    { name: 'Mondokan', bpsCode: '33.14.16' },
                    { name: 'Sukodono', bpsCode: '33.14.17' },
                    { name: 'Gesi', bpsCode: '33.14.18' },
                    { name: 'Tangen', bpsCode: '33.14.19' },
                    { name: 'Jenar', bpsCode: '33.14.20' }
                ]
            }, {
                name: 'Grobogan',
                bpsCode: '33.15',
                districts: [
                    { name: 'Kedungjati', bpsCode: '33.15.01' },
                    { name: 'Karangrayung', bpsCode: '33.15.02' },
                    { name: 'Penawangan', bpsCode: '33.15.03' },
                    { name: 'Toroh', bpsCode: '33.15.04' },
                    { name: 'Geyer', bpsCode: '33.15.05' },
                    { name: 'Pulokulon', bpsCode: '33.15.06' },
                    { name: 'Kradenan', bpsCode: '33.15.07' },
                    { name: 'Gabus', bpsCode: '33.15.08' },
                    { name: 'Ngaringan', bpsCode: '33.15.09' },
                    { name: 'Wirosari', bpsCode: '33.15.10' },
                    { name: 'Tawangharjo', bpsCode: '33.15.11' },
                    { name: 'Grobogan', bpsCode: '33.15.12' },
                    { name: 'Purwodadi', bpsCode: '33.15.13' },
                    { name: 'Brati', bpsCode: '33.15.14' },
                    { name: 'Klambu', bpsCode: '33.15.15' },
                    { name: 'Godong', bpsCode: '33.15.16' },
                    { name: 'Gubug', bpsCode: '33.15.17' },
                    { name: 'Tegowanu', bpsCode: '33.15.18' },
                    { name: 'Tanggungharjo', bpsCode: '33.15.19' }
                ]
            }, {
                name: 'Blora',
                bpsCode: '33.16',
                districts: [
                    { name: 'Jati', bpsCode: '33.16.01' },
                    { name: 'Randublatung', bpsCode: '33.16.02' },
                    { name: 'Kradenan', bpsCode: '33.16.03' },
                    { name: 'Kedungtuban', bpsCode: '33.16.04' },
                    { name: 'Cepu', bpsCode: '33.16.05' },
                    { name: 'Sambong', bpsCode: '33.16.06' },
                    { name: 'Jiken', bpsCode: '33.16.07' },
                    { name: 'Jepon', bpsCode: '33.16.08' },
                    { name: 'Blora (Blora kota)', bpsCode: '33.16.09' },
                    { name: 'Tunjungan', bpsCode: '33.16.10' },
                    { name: 'Banjarejo', bpsCode: '33.16.11' },
                    { name: 'Ngawen', bpsCode: '33.16.12' },
                    { name: 'Kunduran', bpsCode: '33.16.13' },
                    { name: 'Todanan', bpsCode: '33.16.14' },
                    { name: 'Bogorejo', bpsCode: '33.16.15' },
                    { name: 'Japah', bpsCode: '33.16.16' }
                ]
            }, {
                name: 'Rembang',
                bpsCode: '33.17',
                districts: [
                    { name: 'Sumber', bpsCode: '33.17.01' },
                    { name: 'Bulu', bpsCode: '33.17.02' },
                    { name: 'Gunem', bpsCode: '33.17.03' },
                    { name: 'Sale', bpsCode: '33.17.04' },
                    { name: 'Sarang', bpsCode: '33.17.05' },
                    { name: 'Sedan', bpsCode: '33.17.06' },
                    { name: 'Pamotan', bpsCode: '33.17.07' },
                    { name: 'Sulang', bpsCode: '33.17.08' },
                    { name: 'Kaliori', bpsCode: '33.17.09' },
                    { name: 'Rembang', bpsCode: '33.17.10' },
                    { name: 'Pancur', bpsCode: '33.17.11' },
                    { name: 'Kragan', bpsCode: '33.17.12' },
                    { name: 'Sluke', bpsCode: '33.17.13' },
                    { name: 'Lasem', bpsCode: '33.17.14' }
                ]
            }, {
                name: 'Pati',
                bpsCode: '33.18',
                districts: [
                    { name: 'Sukolilo', bpsCode: '33.18.01' },
                    { name: 'Kayen', bpsCode: '33.18.02' },
                    { name: 'Tambakromo', bpsCode: '33.18.03' },
                    { name: 'Winong', bpsCode: '33.18.04' },
                    { name: 'Pucakwangi', bpsCode: '33.18.05' },
                    { name: 'Jaken', bpsCode: '33.18.06' },
                    { name: 'Batangan', bpsCode: '33.18.07' },
                    { name: 'Juwana', bpsCode: '33.18.08' },
                    { name: 'Jakenan', bpsCode: '33.18.09' },
                    { name: 'Pati', bpsCode: '33.18.10' },
                    { name: 'Gabus', bpsCode: '33.18.11' },
                    { name: 'Margorejo', bpsCode: '33.18.12' },
                    { name: 'Gembong', bpsCode: '33.18.13' },
                    { name: 'Tlogowungu', bpsCode: '33.18.14' },
                    { name: 'Wedarijaksa', bpsCode: '33.18.15' },
                    { name: 'Margoyoso', bpsCode: '33.18.16' },
                    { name: 'Gunungwungkal', bpsCode: '33.18.17' },
                    { name: 'Cluwak', bpsCode: '33.18.18' },
                    { name: 'Tayu', bpsCode: '33.18.19' },
                    { name: 'Dukuhseti', bpsCode: '33.18.20' },
                    { name: 'Trangkil', bpsCode: '33.18.21' }
                ]
            }, {
                name: 'Kudus',
                bpsCode: '33.19',
                districts: [
                    { name: 'Kaliwungu', bpsCode: '33.19.01' },
                    { name: 'Kota Kudus (Kudus Kota)', bpsCode: '33.19.02' },
                    { name: 'Jati', bpsCode: '33.19.03' },
                    { name: 'Undaan', bpsCode: '33.19.04' },
                    { name: 'Mejobo', bpsCode: '33.19.05' },
                    { name: 'Jekulo', bpsCode: '33.19.06' },
                    { name: 'Bae', bpsCode: '33.19.07' },
                    { name: 'Gebog', bpsCode: '33.19.08' },
                    { name: 'Dawe', bpsCode: '33.19.09' }
                ]
            }, {
                name: 'Jepara',
                bpsCode: '33.20',
                districts: [
                    { name: 'Kedung', bpsCode: '33.20.01' },
                    { name: 'Pecangaan', bpsCode: '33.20.02' },
                    { name: 'Welahan', bpsCode: '33.20.03' },
                    { name: 'Mayong', bpsCode: '33.20.04' },
                    { name: 'Batealit', bpsCode: '33.20.05' },
                    { name: 'Jepara', bpsCode: '33.20.06' },
                    { name: 'Mlonggo', bpsCode: '33.20.07' },
                    { name: 'Bangsri', bpsCode: '33.20.08' },
                    { name: 'Keling', bpsCode: '33.20.09' },
                    { name: 'Karimun Jawa (Karimunjawa)', bpsCode: '33.20.10' },
                    { name: 'Tahunan', bpsCode: '33.20.11' },
                    { name: 'Nalumsari', bpsCode: '33.20.12' },
                    { name: 'Kalinyamatan', bpsCode: '33.20.13' },
                    { name: 'Kembang', bpsCode: '33.20.14' },
                    { name: 'Pakis Aji', bpsCode: '33.20.15' },
                    { name: 'Donorojo', bpsCode: '33.20.16' }
                ]
            }, {
                name: 'Demak',
                bpsCode: '33.21',
                districts: [
                    { name: 'Mranggen', bpsCode: '33.21.01' },
                    { name: 'Karangawen', bpsCode: '33.21.02' },
                    { name: 'Guntur', bpsCode: '33.21.03' },
                    { name: 'Sayung', bpsCode: '33.21.04' },
                    { name: 'Karangtengah (Karang Tengah)', bpsCode: '33.21.05' },
                    { name: 'Wonosalam', bpsCode: '33.21.06' },
                    { name: 'Dempet', bpsCode: '33.21.07' },
                    { name: 'Gajah', bpsCode: '33.21.08' },
                    { name: 'Karanganyar', bpsCode: '33.21.09' },
                    { name: 'Mijen', bpsCode: '33.21.10' },
                    { name: 'Demak', bpsCode: '33.21.11' },
                    { name: 'Bonang', bpsCode: '33.21.12' },
                    { name: 'Wedung', bpsCode: '33.21.13' },
                    { name: 'Kebonagung', bpsCode: '33.21.14' }
                ]
            }, {
                name: 'Semarang',
                bpsCode: '33.22',
                districts: [
                    { name: 'Getasan', bpsCode: '33.22.01' },
                    { name: 'Tengaran', bpsCode: '33.22.02' },
                    { name: 'Susukan', bpsCode: '33.22.03' },
                    { name: 'Suruh', bpsCode: '33.22.04' },
                    { name: 'Pabelan', bpsCode: '33.22.05' },
                    { name: 'Tuntang', bpsCode: '33.22.06' },
                    { name: 'Banyubiru', bpsCode: '33.22.07' },
                    { name: 'Jambu', bpsCode: '33.22.08' },
                    { name: 'Sumowono', bpsCode: '33.22.09' },
                    { name: 'Ambarawa', bpsCode: '33.22.10' },
                    { name: 'Bawen', bpsCode: '33.22.11' },
                    { name: 'Bringin', bpsCode: '33.22.12' },
                    { name: 'Bergas', bpsCode: '33.22.13' },
                    { name: 'Pringapus', bpsCode: '33.22.15' },
                    { name: 'Bancak', bpsCode: '33.22.16' },
                    { name: 'Kaliwungu', bpsCode: '33.22.17' },
                    { name: 'Ungaran Barat', bpsCode: '33.22.18' },
                    { name: 'Ungaran Timur', bpsCode: '33.22.19' },
                    { name: 'Bandungan', bpsCode: '33.22.20' }
                ]
            }, {
                name: 'Temanggung',
                bpsCode: '33.23',
                districts: [
                    { name: 'Bulu', bpsCode: '33.23.01' },
                    { name: 'Tembarak', bpsCode: '33.23.02' },
                    { name: 'Temanggung', bpsCode: '33.23.03' },
                    { name: 'Pringsurat', bpsCode: '33.23.04' },
                    { name: 'Kaloran', bpsCode: '33.23.05' },
                    { name: 'Kandangan', bpsCode: '33.23.06' },
                    { name: 'Kedu', bpsCode: '33.23.07' },
                    { name: 'Parakan', bpsCode: '33.23.08' },
                    { name: 'Ngadirejo', bpsCode: '33.23.09' },
                    { name: 'Jumo', bpsCode: '33.23.10' },
                    { name: 'Tretep', bpsCode: '33.23.11' },
                    { name: 'Candiroto', bpsCode: '33.23.12' },
                    { name: 'Kranggan', bpsCode: '33.23.13' },
                    { name: 'Tlogomulyo', bpsCode: '33.23.14' },
                    { name: 'Selopampang', bpsCode: '33.23.15' },
                    { name: 'Bansari', bpsCode: '33.23.16' },
                    { name: 'Kledung', bpsCode: '33.23.17' },
                    { name: 'Bejen', bpsCode: '33.23.18' },
                    { name: 'Wonoboyo', bpsCode: '33.23.19' },
                    { name: 'Gemawang', bpsCode: '33.23.20' }
                ]
            }, {
                name: 'Kendal',
                bpsCode: '33.24',
                districts: [
                    { name: 'Plantungan', bpsCode: '33.24.01' },
                    { name: 'Pageruyung (Pagerruyung)', bpsCode: '33.24.02' },
                    { name: 'Sukorejo', bpsCode: '33.24.03' },
                    { name: 'Patean', bpsCode: '33.24.04' },
                    { name: 'Singorojo', bpsCode: '33.24.05' },
                    { name: 'Limbangan', bpsCode: '33.24.06' },
                    { name: 'Boja', bpsCode: '33.24.07' },
                    { name: 'Kaliwungu', bpsCode: '33.24.08' },
                    { name: 'Brangsong', bpsCode: '33.24.09' },
                    { name: 'Pegandon', bpsCode: '33.24.10' },
                    { name: 'Gemuh', bpsCode: '33.24.11' },
                    { name: 'Weleri', bpsCode: '33.24.12' },
                    { name: 'Cepiring', bpsCode: '33.24.13' },
                    { name: 'Patebon', bpsCode: '33.24.14' },
                    { name: 'Kendal', bpsCode: '33.24.15' },
                    { name: 'Rowosari', bpsCode: '33.24.16' },
                    { name: 'Kangkung', bpsCode: '33.24.17' },
                    { name: 'Ringinarum', bpsCode: '33.24.18' },
                    { name: 'Ngampel', bpsCode: '33.24.19' },
                    { name: 'Kaliwungu Selatan', bpsCode: '33.24.20' }
                ]
            }, {
                name: 'Batang',
                bpsCode: '33.25',
                districts: [
                    { name: 'Wonotunggal', bpsCode: '33.25.01' },
                    { name: 'Bandar', bpsCode: '33.25.02' },
                    { name: 'Blado', bpsCode: '33.25.03' },
                    { name: 'Reban', bpsCode: '33.25.04' },
                    { name: 'Bawang', bpsCode: '33.25.05' },
                    { name: 'Tersono', bpsCode: '33.25.06' },
                    { name: 'Gringsing', bpsCode: '33.25.07' },
                    { name: 'Limpung', bpsCode: '33.25.08' },
                    { name: 'Subah', bpsCode: '33.25.09' },
                    { name: 'Tulis', bpsCode: '33.25.10' },
                    { name: 'Batang', bpsCode: '33.25.11' },
                    { name: 'Warungasem', bpsCode: '33.25.12' },
                    { name: 'Kandeman', bpsCode: '33.25.13' },
                    { name: 'Pecalungan', bpsCode: '33.25.14' },
                    { name: 'Banyuputih', bpsCode: '33.25.15' }
                ]
            }, {
                name: 'Pekalongan',
                bpsCode: '33.26',
                districts: [
                    { name: 'Kandangserang', bpsCode: '33.26.01' },
                    { name: 'Paninggaran', bpsCode: '33.26.02' },
                    { name: 'Lebakbarang', bpsCode: '33.26.03' },
                    { name: 'Petungkriono/Petungkriyono', bpsCode: '33.26.04' },
                    { name: 'Talun', bpsCode: '33.26.05' },
                    { name: 'Doro', bpsCode: '33.26.06' },
                    { name: 'Karanganyar', bpsCode: '33.26.07' },
                    { name: 'Kajen', bpsCode: '33.26.08' },
                    { name: 'Kesesi', bpsCode: '33.26.09' },
                    { name: 'Sragi', bpsCode: '33.26.10' },
                    { name: 'Bojong', bpsCode: '33.26.11' },
                    { name: 'Wonopringgo', bpsCode: '33.26.12' },
                    { name: 'Kedungwuni', bpsCode: '33.26.13' },
                    { name: 'Buaran', bpsCode: '33.26.14' },
                    { name: 'Tirto', bpsCode: '33.26.15' },
                    { name: 'Wiradesa', bpsCode: '33.26.16' },
                    { name: 'Siwalan', bpsCode: '33.26.17' },
                    { name: 'Karangdadap', bpsCode: '33.26.18' },
                    { name: 'Wonokerto', bpsCode: '33.26.19' }
                ]
            }, {
                name: 'Pemalang',
                bpsCode: '33.27',
                districts: [
                    { name: 'Moga', bpsCode: '33.27.01' },
                    { name: 'Pulosari', bpsCode: '33.27.02' },
                    { name: 'Belik', bpsCode: '33.27.03' },
                    { name: 'Watukumpul', bpsCode: '33.27.04' },
                    { name: 'Bodeh', bpsCode: '33.27.05' },
                    { name: 'Bantarbolang', bpsCode: '33.27.06' },
                    { name: 'Randudongkal', bpsCode: '33.27.07' },
                    { name: 'Pemalang', bpsCode: '33.27.08' },
                    { name: 'Taman', bpsCode: '33.27.09' },
                    { name: 'Petarukan', bpsCode: '33.27.10' },
                    { name: 'Ampelgading', bpsCode: '33.27.11' },
                    { name: 'Comal', bpsCode: '33.27.12' },
                    { name: 'Ulujami', bpsCode: '33.27.13' },
                    { name: 'Warungpring', bpsCode: '33.27.14' }
                ]
            }, {
                name: 'Tegal',
                bpsCode: '33.28',
                districts: [
                    { name: 'Margasari', bpsCode: '33.28.01' },
                    { name: 'Bumijawa', bpsCode: '33.28.02' },
                    { name: 'Bojong', bpsCode: '33.28.03' },
                    { name: 'Balapulang', bpsCode: '33.28.04' },
                    { name: 'Pagerbarang', bpsCode: '33.28.05' },
                    { name: 'Lebaksiu', bpsCode: '33.28.06' },
                    { name: 'Jatinegara', bpsCode: '33.28.07' },
                    { name: 'Kedungbanteng (Kedung Banteng)', bpsCode: '33.28.08' },
                    { name: 'Pangkah', bpsCode: '33.28.09' },
                    { name: 'Slawi', bpsCode: '33.28.10' },
                    { name: 'Adiwerna', bpsCode: '33.28.11' },
                    { name: 'Talang', bpsCode: '33.28.12' },
                    { name: 'Dukuhturi', bpsCode: '33.28.13' },
                    { name: 'Tarub', bpsCode: '33.28.14' },
                    { name: 'Kramat', bpsCode: '33.28.15' },
                    { name: 'Suradadi (Surodadi)', bpsCode: '33.28.16' },
                    { name: 'Warureja (Warurejo)', bpsCode: '33.28.17' },
                    { name: 'Dukuhwaru', bpsCode: '33.28.18' }
                ]
            }, {
                name: 'Brebes',
                bpsCode: '33.29',
                districts: [
                    { name: 'Salem', bpsCode: '33.29.01' },
                    { name: 'Bantarkawung', bpsCode: '33.29.02' },
                    { name: 'Bumiayu', bpsCode: '33.29.03' },
                    { name: 'Paguyangan', bpsCode: '33.29.04' },
                    { name: 'Sirampog', bpsCode: '33.29.05' },
                    { name: 'Tonjong', bpsCode: '33.29.06' },
                    { name: 'Jatibarang', bpsCode: '33.29.07' },
                    { name: 'Wanasari', bpsCode: '33.29.08' },
                    { name: 'Brebes', bpsCode: '33.29.09' },
                    { name: 'Songgom', bpsCode: '33.29.10' },
                    { name: 'Kersana', bpsCode: '33.29.11' },
                    { name: 'Losari', bpsCode: '33.29.12' },
                    { name: 'Tanjung', bpsCode: '33.29.13' },
                    { name: 'Bulakamba', bpsCode: '33.29.14' },
                    { name: 'Larangan', bpsCode: '33.29.15' },
                    { name: 'Ketanggungan', bpsCode: '33.29.16' },
                    { name: 'Banjarharjo', bpsCode: '33.29.17' }
                ]
            }, {
                name: 'Magelang',
                bpsCode: '33.71',
                districts: [
                    { name: 'Magelang Selatan', bpsCode: '33.71.01' },
                    { name: 'Magelang Utara', bpsCode: '33.71.02' },
                    { name: 'Magelang Tengah', bpsCode: '33.71.03' }
                ]
            }, {
                name: 'Surakarta',
                bpsCode: '33.72',
                districts: [
                    { name: 'Laweyan', bpsCode: '33.72.01' },
                    { name: 'Serengan', bpsCode: '33.72.02' },
                    { name: 'Pasar Kliwon', bpsCode: '33.72.03' },
                    { name: 'Jebres', bpsCode: '33.72.04' },
                    { name: 'Banjarsari', bpsCode: '33.72.05' }
                ]
            }, {
                name: 'Salatiga',
                bpsCode: '33.73',
                districts: [
                    { name: 'Sidorejo', bpsCode: '33.73.01' },
                    { name: 'Tingkir', bpsCode: '33.73.02' },
                    { name: 'Argomulyo', bpsCode: '33.73.03' },
                    { name: 'Sidomukti', bpsCode: '33.73.04' }
                ]
            }, {
                name: 'Semarang',
                bpsCode: '33.74',
                districts: [
                    { name: 'Semarang Tengah', bpsCode: '33.74.01' },
                    { name: 'Semarang Utara', bpsCode: '33.74.02' },
                    { name: 'Semarang Timur', bpsCode: '33.74.03' },
                    { name: 'Gayamsari', bpsCode: '33.74.04' },
                    { name: 'Genuk', bpsCode: '33.74.05' },
                    { name: 'Pedurungan', bpsCode: '33.74.06' },
                    { name: 'Semarang Selatan', bpsCode: '33.74.07' },
                    { name: 'Candisari', bpsCode: '33.74.08' },
                    { name: 'Gajahmungkur (Gajah Mungkur)', bpsCode: '33.74.09' },
                    { name: 'Tembalang', bpsCode: '33.74.10' },
                    { name: 'Banyumanik', bpsCode: '33.74.11' },
                    { name: 'Gunungpati', bpsCode: '33.74.12' },
                    { name: 'Semarang Barat', bpsCode: '33.74.13' },
                    { name: 'Mijen', bpsCode: '33.74.14' },
                    { name: 'Ngaliyan', bpsCode: '33.74.15' },
                    { name: 'Tugu', bpsCode: '33.74.16' }
                ]
            }, {
                name: 'Pekalongan',
                bpsCode: '33.75',
                districts: [
                    { name: 'Pekalongan Barat', bpsCode: '33.75.01' },
                    { name: 'Pekalongan Timur', bpsCode: '33.75.02' },
                    { name: 'Pekalongan Utara', bpsCode: '33.75.03' },
                    { name: 'Pekalongan Selatan', bpsCode: '33.75.04' }
                ]
            }, {
                name: 'Tegal',
                bpsCode: '33.76',
                districts: [
                    { name: 'Tegal Barat', bpsCode: '33.76.01' },
                    { name: 'Tegal Timur', bpsCode: '33.76.02' },
                    { name: 'Tegal Selatan', bpsCode: '33.76.03' },
                    { name: 'Margadana', bpsCode: '33.76.04' }
                ]
            }
        ]
    },
    '34': {
        regencies: [
            {
                name: 'Kabupaten Kulon Progo',
                bpsCode: '34.01',
                districts: [
                    { name: 'Temon', bpsCode: '34.01.01' },
                    { name: 'Wates', bpsCode: '34.01.02' },
                    { name: 'Panjatan', bpsCode: '34.01.03' },
                    { name: 'Galur', bpsCode: '34.01.04' },
                    { name: 'Lendah', bpsCode: '34.01.05' },
                    { name: 'Sentolo', bpsCode: '34.01.06' },
                    { name: 'Pengasih', bpsCode: '34.01.07' },
                    { name: 'Kokap', bpsCode: '34.01.08' },
                    { name: 'Girimulyo', bpsCode: '34.01.09' },
                    { name: 'Nanggulan', bpsCode: '34.01.10' },
                    { name: 'Samigaluh', bpsCode: '34.01.11' },
                    { name: 'Kalibawang', bpsCode: '34.01.12' }
                ]
            }, {
                name: 'Kabupaten Bantul',
                bpsCode: '34.02',
                districts: [
                    { name: 'Srandakan', bpsCode: '34.02.01' },
                    { name: 'Sanden', bpsCode: '34.02.02' },
                    { name: 'Kretek', bpsCode: '34.02.03' },
                    { name: 'Pundong', bpsCode: '34.02.04' },
                    { name: 'Bambanglipuro (Bambang Lipuro)', bpsCode: '34.02.05' },
                    { name: 'Pandak', bpsCode: '34.02.06' },
                    { name: 'Pajangan', bpsCode: '34.02.07' },
                    { name: 'Bantul', bpsCode: '34.02.08' },
                    { name: 'Jetis', bpsCode: '34.02.09' },
                    { name: 'Imogiri', bpsCode: '34.02.10' },
                    { name: 'Dlingo', bpsCode: '34.02.11' },
                    { name: 'Banguntapan', bpsCode: '34.02.12' },
                    { name: 'Pleret', bpsCode: '34.02.13' },
                    { name: 'Piyungan', bpsCode: '34.02.14' },
                    { name: 'Sewon', bpsCode: '34.02.15' },
                    { name: 'Kasihan', bpsCode: '34.02.16' },
                    { name: 'Sedayu', bpsCode: '34.02.17' }
                ]
            }, {
                name: 'Kabupaten Gunung Kidul',
                bpsCode: '34.03',
                districts: [
                    { name: 'Wonosari', bpsCode: '34.03.01' },
                    { name: 'Nglipar', bpsCode: '34.03.02' },
                    { name: 'Playen', bpsCode: '34.03.03' },
                    { name: 'Patuk', bpsCode: '34.03.04' },
                    { name: 'Paliyan', bpsCode: '34.03.05' },
                    { name: 'Panggang', bpsCode: '34.03.06' },
                    { name: 'Tepus', bpsCode: '34.03.07' },
                    { name: 'Semanu', bpsCode: '34.03.08' },
                    { name: 'Karangmojo', bpsCode: '34.03.09' },
                    { name: 'Ponjong', bpsCode: '34.03.10' },
                    { name: 'Rongkop', bpsCode: '34.03.11' },
                    { name: 'Semin', bpsCode: '34.03.12' },
                    { name: 'Ngawen', bpsCode: '34.03.13' },
                    { name: 'Gedangsari (Gedang Sari)', bpsCode: '34.03.14' },
                    { name: 'Saptosari (Sapto Sari)', bpsCode: '34.03.15' },
                    { name: 'Girisubo', bpsCode: '34.03.16' },
                    { name: 'Tanjungsari', bpsCode: '34.03.17' },
                    { name: 'Purwosari', bpsCode: '34.03.18' }
                ]
            }, {
                name: 'Kabupaten Sleman',
                bpsCode: '34.04',
                districts: [
                    { name: 'Gamping', bpsCode: '34.04.01' },
                    { name: 'Godean', bpsCode: '34.04.02' },
                    { name: 'Moyudan', bpsCode: '34.04.03' },
                    { name: 'Minggir', bpsCode: '34.04.04' },
                    { name: 'Seyegan', bpsCode: '34.04.05' },
                    { name: 'Mlati', bpsCode: '34.04.06' },
                    { name: 'Depok', bpsCode: '34.04.07' },
                    { name: 'Berbah', bpsCode: '34.04.08' },
                    { name: 'Prambanan', bpsCode: '34.04.09' },
                    { name: 'Kalasan', bpsCode: '34.04.10' },
                    { name: 'Ngemplak', bpsCode: '34.04.11' },
                    { name: 'Ngaglik', bpsCode: '34.04.12' },
                    { name: 'Sleman', bpsCode: '34.04.13' },
                    { name: 'Tempel', bpsCode: '34.04.14' },
                    { name: 'Turi', bpsCode: '34.04.15' },
                    { name: 'Pakem', bpsCode: '34.04.16' },
                    { name: 'Cangkringan', bpsCode: '34.04.17' }
                ]
            }, {
                name: 'Kota Yogyakarta',
                bpsCode: '34.71',
                districts: [
                    { name: 'Tegalrejo', bpsCode: '34.71.01' },
                    { name: 'Jetis', bpsCode: '34.71.02' },
                    { name: 'Gondokusuman', bpsCode: '34.71.03' },
                    { name: 'Danurejan', bpsCode: '34.71.04' },
                    { name: 'Gedongtengen (Gedong Tengen)', bpsCode: '34.71.05' },
                    { name: 'Ngampilan', bpsCode: '34.71.06' },
                    { name: 'Wirobrajan', bpsCode: '34.71.07' },
                    { name: 'Mantrijeron', bpsCode: '34.71.08' },
                    { name: 'Kraton', bpsCode: '34.71.09' },
                    { name: 'Gondomanan', bpsCode: '34.71.10' },
                    { name: 'Pakualaman', bpsCode: '34.71.11' },
                    { name: 'Mergangsan', bpsCode: '34.71.12' },
                    { name: 'Umbulharjo', bpsCode: '34.71.13' },
                    { name: 'Kotagede', bpsCode: '34.71.14' }
                ]
            }
        ]
    },
    '35': {
        regencies: [
            {
                name: 'Pacitan',
                bpsCode: '35.01',
                districts: [
                    { name: 'Donorojo', bpsCode: '35.01.01' },
                    { name: 'Pringkuku', bpsCode: '35.01.02' },
                    { name: 'Punung', bpsCode: '35.01.03' },
                    { name: 'Pacitan', bpsCode: '35.01.04' },
                    { name: 'Kebonagung (Kebon Agung)', bpsCode: '35.01.05' },
                    { name: 'Arjosari', bpsCode: '35.01.06' },
                    { name: 'Nawangan', bpsCode: '35.01.07' },
                    { name: 'Bandar', bpsCode: '35.01.08' },
                    { name: 'Tegalombo', bpsCode: '35.01.09' },
                    { name: 'Tulakan', bpsCode: '35.01.10' },
                    { name: 'Ngadirojo', bpsCode: '35.01.11' },
                    { name: 'Sudimoro', bpsCode: '35.01.12' }
                ]
            }, {
                name: 'Ponorogo',
                bpsCode: '35.02',
                districts: [
                    { name: 'Slahung', bpsCode: '35.02.01' },
                    { name: 'Ngrayun', bpsCode: '35.02.02' },
                    { name: 'Bungkal', bpsCode: '35.02.03' },
                    { name: 'Sambit', bpsCode: '35.02.04' },
                    { name: 'Sawoo', bpsCode: '35.02.05' },
                    { name: 'Sooko', bpsCode: '35.02.06' },
                    { name: 'Pulung', bpsCode: '35.02.07' },
                    { name: 'Mlarak', bpsCode: '35.02.08' },
                    { name: 'Jetis', bpsCode: '35.02.09' },
                    { name: 'Siman', bpsCode: '35.02.10' },
                    { name: 'Balong', bpsCode: '35.02.11' },
                    { name: 'Kauman', bpsCode: '35.02.12' },
                    { name: 'Badegan', bpsCode: '35.02.13' },
                    { name: 'Sampung', bpsCode: '35.02.14' },
                    { name: 'Sukorejo', bpsCode: '35.02.15' },
                    { name: 'Babadan', bpsCode: '35.02.16' },
                    { name: 'Ponorogo', bpsCode: '35.02.17' },
                    { name: 'Jenangan', bpsCode: '35.02.18' },
                    { name: 'Ngebel', bpsCode: '35.02.19' },
                    { name: 'Jambon', bpsCode: '35.02.20' },
                    { name: 'Pudak', bpsCode: '35.02.21' }
                ]
            }, {
                name: 'Trenggalek',
                bpsCode: '35.03',
                districts: [
                    { name: 'Panggul', bpsCode: '35.03.01' },
                    { name: 'Munjungan', bpsCode: '35.03.02' },
                    { name: 'Pule', bpsCode: '35.03.03' },
                    { name: 'Dongko', bpsCode: '35.03.04' },
                    { name: 'Tugu', bpsCode: '35.03.05' },
                    { name: 'Karangan', bpsCode: '35.03.06' },
                    { name: 'Kampak', bpsCode: '35.03.07' },
                    { name: 'Watulimo', bpsCode: '35.03.08' },
                    { name: 'Bendungan', bpsCode: '35.03.09' },
                    { name: 'Gandusari', bpsCode: '35.03.10' },
                    { name: 'Trenggalek', bpsCode: '35.03.11' },
                    { name: 'Pogalan', bpsCode: '35.03.12' },
                    { name: 'Durenan', bpsCode: '35.03.13' },
                    { name: 'Suruh', bpsCode: '35.03.14' }
                ]
            }, {
                name: 'Tulungagung',
                bpsCode: '35.04',
                districts: [
                    { name: 'Tulungagung', bpsCode: '35.04.01' },
                    { name: 'Boyolangu', bpsCode: '35.04.02' },
                    { name: 'Kedungwaru', bpsCode: '35.04.03' },
                    { name: 'Ngantru', bpsCode: '35.04.04' },
                    { name: 'Kauman', bpsCode: '35.04.05' },
                    { name: 'Pagerwojo', bpsCode: '35.04.06' },
                    { name: 'Sendang', bpsCode: '35.04.07' },
                    { name: 'Karangrejo (Karang Rejo)', bpsCode: '35.04.08' },
                    { name: 'Gondang', bpsCode: '35.04.09' },
                    { name: 'Sumbergempol', bpsCode: '35.04.10' },
                    { name: 'Ngunut', bpsCode: '35.04.11' },
                    { name: 'Pucanglaban', bpsCode: '35.04.12' },
                    { name: 'Rejotangan', bpsCode: '35.04.13' },
                    { name: 'Kalidawir', bpsCode: '35.04.14' },
                    { name: 'Besuki', bpsCode: '35.04.15' },
                    { name: 'Campurdarat (Campur Darat)', bpsCode: '35.04.16' },
                    { name: 'Bandung', bpsCode: '35.04.17' },
                    { name: 'Pakel', bpsCode: '35.04.18' },
                    { name: 'Tanggunggunung (Tanggung Gunung)', bpsCode: '35.04.19' }
                ]
            }, {
                name: 'Blitar',
                bpsCode: '35.05',
                districts: [
                    { name: 'Wonodadi', bpsCode: '35.05.01' },
                    { name: 'Udanawu', bpsCode: '35.05.02' },
                    { name: 'Srengat', bpsCode: '35.05.03' },
                    { name: 'Kademangan', bpsCode: '35.05.04' },
                    { name: 'Bakung', bpsCode: '35.05.05' },
                    { name: 'Ponggok', bpsCode: '35.05.06' },
                    { name: 'Sanankulon (Sanan Kulon)', bpsCode: '35.05.07' },
                    { name: 'Wonotirto', bpsCode: '35.05.08' },
                    { name: 'Nglegok', bpsCode: '35.05.09' },
                    { name: 'Kanigoro', bpsCode: '35.05.10' },
                    { name: 'Garum', bpsCode: '35.05.11' },
                    { name: 'Sutojayan', bpsCode: '35.05.12' },
                    { name: 'Panggungrejo', bpsCode: '35.05.13' },
                    { name: 'Talun', bpsCode: '35.05.14' },
                    { name: 'Gandusari', bpsCode: '35.05.15' },
                    { name: 'Binangun', bpsCode: '35.05.16' },
                    { name: 'Wlingi', bpsCode: '35.05.17' },
                    { name: 'Doko', bpsCode: '35.05.18' },
                    { name: 'Kesamben', bpsCode: '35.05.19' },
                    { name: 'Wates', bpsCode: '35.05.20' },
                    { name: 'Selorejo', bpsCode: '35.05.21' },
                    { name: 'Selopuro', bpsCode: '35.05.22' }
                ]
            }, {
                name: 'Kediri',
                bpsCode: '35.06',
                districts: [
                    { name: 'Semen', bpsCode: '35.06.01' },
                    { name: 'Mojo', bpsCode: '35.06.02' },
                    { name: 'Kras', bpsCode: '35.06.03' },
                    { name: 'Ngadiluwih', bpsCode: '35.06.04' },
                    { name: 'Kandat', bpsCode: '35.06.05' },
                    { name: 'Wates', bpsCode: '35.06.06' },
                    { name: 'Ngancar', bpsCode: '35.06.07' },
                    { name: 'Puncu', bpsCode: '35.06.08' },
                    { name: 'Plosoklaten', bpsCode: '35.06.09' },
                    { name: 'Gurah', bpsCode: '35.06.10' },
                    { name: 'Pagu', bpsCode: '35.06.11' },
                    { name: 'Gampengrejo', bpsCode: '35.06.12' },
                    { name: 'Grogol', bpsCode: '35.06.13' },
                    { name: 'Papar', bpsCode: '35.06.14' },
                    { name: 'Purwoasri', bpsCode: '35.06.15' },
                    { name: 'Plemahan', bpsCode: '35.06.16' },
                    { name: 'Pare', bpsCode: '35.06.17' },
                    { name: 'Kepung', bpsCode: '35.06.18' },
                    { name: 'Kandangan', bpsCode: '35.06.19' },
                    { name: 'Tarokan', bpsCode: '35.06.20' },
                    { name: 'Kunjang', bpsCode: '35.06.21' },
                    { name: 'Banyakan', bpsCode: '35.06.22' },
                    { name: 'Ringinrejo', bpsCode: '35.06.23' },
                    { name: 'Kayen Kidul', bpsCode: '35.06.24' },
                    { name: 'Ngasem', bpsCode: '35.06.25' },
                    { name: 'Badas', bpsCode: '35.06.26' }
                ]
            }, {
                name: 'Malang',
                bpsCode: '35.07',
                districts: [
                    { name: 'Donomulyo', bpsCode: '35.07.01' },
                    { name: 'Pagak', bpsCode: '35.07.02' },
                    { name: 'Bantur', bpsCode: '35.07.03' },
                    { name: 'Sumbermanjing Wetan', bpsCode: '35.07.04' },
                    { name: 'Dampit', bpsCode: '35.07.05' },
                    { name: 'Ampelgading', bpsCode: '35.07.06' },
                    { name: 'Poncokusumo', bpsCode: '35.07.07' },
                    { name: 'Wajak', bpsCode: '35.07.08' },
                    { name: 'Turen', bpsCode: '35.07.09' },
                    { name: 'Gondanglegi', bpsCode: '35.07.10' },
                    { name: 'Kalipare', bpsCode: '35.07.11' },
                    { name: 'Sumberpucung', bpsCode: '35.07.12' },
                    { name: 'Kepanjen', bpsCode: '35.07.13' },
                    { name: 'Bululawang', bpsCode: '35.07.14' },
                    { name: 'Tajinan', bpsCode: '35.07.15' },
                    { name: 'Tumpang', bpsCode: '35.07.16' },
                    { name: 'Jabung', bpsCode: '35.07.17' },
                    { name: 'Pakis', bpsCode: '35.07.18' },
                    { name: 'Pakisaji', bpsCode: '35.07.19' },
                    { name: 'Ngajung (Ngajum)', bpsCode: '35.07.20' },
                    { name: 'Wagir', bpsCode: '35.07.21' },
                    { name: 'Dau', bpsCode: '35.07.22' },
                    { name: 'Karang Ploso (Karangploso)', bpsCode: '35.07.23' },
                    { name: 'Singosari', bpsCode: '35.07.24' },
                    { name: 'Lawang', bpsCode: '35.07.25' },
                    { name: 'Pujon', bpsCode: '35.07.26' },
                    { name: 'Ngantang', bpsCode: '35.07.27' },
                    { name: 'Kasembon', bpsCode: '35.07.28' },
                    { name: 'Gedangan', bpsCode: '35.07.29' },
                    { name: 'Tirtoyudo', bpsCode: '35.07.30' },
                    { name: 'Kromengan', bpsCode: '35.07.31' },
                    { name: 'Wonosari', bpsCode: '35.07.32' },
                    { name: 'Pagelaran', bpsCode: '35.07.33' }
                ]
            }, {
                name: 'Lumajang',
                bpsCode: '35.08',
                districts: [
                    { name: 'Tempursari', bpsCode: '35.08.01' },
                    { name: 'Pronojiwo', bpsCode: '35.08.02' },
                    { name: 'Candipuro', bpsCode: '35.08.03' },
                    { name: 'Pasirian', bpsCode: '35.08.04' },
                    { name: 'Tempeh', bpsCode: '35.08.05' },
                    { name: 'Kunir', bpsCode: '35.08.06' },
                    { name: 'Yosowilangun', bpsCode: '35.08.07' },
                    { name: 'Rowokangkung', bpsCode: '35.08.08' },
                    { name: 'Tekung', bpsCode: '35.08.09' },
                    { name: 'Lumajang', bpsCode: '35.08.10' },
                    { name: 'Pasrujambe/Pasujambe', bpsCode: '35.08.11' },
                    { name: 'Senduro', bpsCode: '35.08.12' },
                    { name: 'Gucialit', bpsCode: '35.08.13' },
                    { name: 'Padang', bpsCode: '35.08.14' },
                    { name: 'Sukodono', bpsCode: '35.08.15' },
                    { name: 'Kedungjajang', bpsCode: '35.08.16' },
                    { name: 'Jatiroto', bpsCode: '35.08.17' },
                    { name: 'Randuagung', bpsCode: '35.08.18' },
                    { name: 'Klakah', bpsCode: '35.08.19' },
                    { name: 'Ranuyoso', bpsCode: '35.08.20' },
                    { name: 'Sumbersuko', bpsCode: '35.08.21' }
                ]
            }, {
                name: 'Jember',
                bpsCode: '35.09',
                districts: [
                    { name: 'Jombang', bpsCode: '35.09.01' },
                    { name: 'Kencong', bpsCode: '35.09.02' },
                    { name: 'Sumberbaru (Sumber Baru)', bpsCode: '35.09.03' },
                    { name: 'Gumukmas (Gumuk Mas)', bpsCode: '35.09.04' },
                    { name: 'Umbulsari', bpsCode: '35.09.05' },
                    { name: 'Tanggul', bpsCode: '35.09.06' },
                    { name: 'Semboro', bpsCode: '35.09.07' },
                    { name: 'Puger', bpsCode: '35.09.08' },
                    { name: 'Bangsalsari', bpsCode: '35.09.09' },
                    { name: 'Balung', bpsCode: '35.09.10' },
                    { name: 'Wuluhan', bpsCode: '35.09.11' },
                    { name: 'Ambulu', bpsCode: '35.09.12' },
                    { name: 'Rambipuji', bpsCode: '35.09.13' },
                    { name: 'Panti', bpsCode: '35.09.14' },
                    { name: 'Sukorambi', bpsCode: '35.09.15' },
                    { name: 'Jenggawah', bpsCode: '35.09.16' },
                    { name: 'Ajung', bpsCode: '35.09.17' },
                    { name: 'Tempurejo', bpsCode: '35.09.18' },
                    { name: 'Kaliwates', bpsCode: '35.09.19' },
                    { name: 'Patrang', bpsCode: '35.09.20' },
                    { name: 'Sumbersari (Sumber Sari)', bpsCode: '35.09.21' },
                    { name: 'Arjasa', bpsCode: '35.09.22' },
                    { name: 'Mumbulsari', bpsCode: '35.09.23' },
                    { name: 'Pakusari', bpsCode: '35.09.24' },
                    { name: 'Jelbuk', bpsCode: '35.09.25' },
                    { name: 'Mayang', bpsCode: '35.09.26' },
                    { name: 'Kalisat', bpsCode: '35.09.27' },
                    { name: 'Ledokombo', bpsCode: '35.09.28' },
                    { name: 'Sukowono', bpsCode: '35.09.29' },
                    { name: 'Silo', bpsCode: '35.09.30' },
                    { name: 'Sumberjambe (Sumber Jambe)', bpsCode: '35.09.31' }
                ]
            }, {
                name: 'Banyuwangi',
                bpsCode: '35.10',
                districts: [
                    { name: 'Pesanggaran', bpsCode: '35.10.01' },
                    { name: 'Bangorejo', bpsCode: '35.10.02' },
                    { name: 'Purwoharjo', bpsCode: '35.10.03' },
                    { name: 'Tegaldlimo', bpsCode: '35.10.04' },
                    { name: 'Muncar', bpsCode: '35.10.05' },
                    { name: 'Cluring', bpsCode: '35.10.06' },
                    { name: 'Gambiran', bpsCode: '35.10.07' },
                    { name: 'Srono', bpsCode: '35.10.08' },
                    { name: 'Genteng', bpsCode: '35.10.09' },
                    { name: 'Glenmore', bpsCode: '35.10.10' },
                    { name: 'Kalibaru', bpsCode: '35.10.11' },
                    { name: 'Singojuruh', bpsCode: '35.10.12' },
                    { name: 'Rogojampi', bpsCode: '35.10.13' },
                    { name: 'Kabat', bpsCode: '35.10.14' },
                    { name: 'Glagah', bpsCode: '35.10.15' },
                    { name: 'Banyuwangi', bpsCode: '35.10.16' },
                    { name: 'Giri', bpsCode: '35.10.17' },
                    { name: 'Wongsorejo', bpsCode: '35.10.18' },
                    { name: 'Songgon', bpsCode: '35.10.19' },
                    { name: 'Sempu', bpsCode: '35.10.20' },
                    { name: 'Kalipuro', bpsCode: '35.10.21' },
                    { name: 'Siliragung', bpsCode: '35.10.22' },
                    { name: 'Tegalsari', bpsCode: '35.10.23' },
                    { name: 'Licin', bpsCode: '35.10.24' },
                    { name: 'Blimbingsari', bpsCode: '35.10.25' }
                ]
            }, {
                name: 'Bondowoso',
                bpsCode: '35.11',
                districts: [
                    { name: 'Maesan', bpsCode: '35.11.01' },
                    { name: 'Tamanan', bpsCode: '35.11.02' },
                    { name: 'Tlogosari', bpsCode: '35.11.03' },
                    { name: 'Sukosari', bpsCode: '35.11.04' },
                    { name: 'Pujer', bpsCode: '35.11.05' },
                    { name: 'Grujugan', bpsCode: '35.11.06' },
                    { name: 'Curahdami', bpsCode: '35.11.07' },
                    { name: 'Tenggarang', bpsCode: '35.11.08' },
                    { name: 'Wonosari', bpsCode: '35.11.09' },
                    { name: 'Tapen', bpsCode: '35.11.10' },
                    { name: 'Bondowoso', bpsCode: '35.11.11' },
                    { name: 'Wringin', bpsCode: '35.11.12' },
                    { name: 'Tegalampel', bpsCode: '35.11.13' },
                    { name: 'Klabang', bpsCode: '35.11.14' },
                    { name: 'Cermee', bpsCode: '35.11.15' },
                    { name: 'Prajekan', bpsCode: '35.11.16' },
                    { name: 'Pakem', bpsCode: '35.11.17' },
                    { name: 'Sumberwringin (Sumber Wringin)', bpsCode: '35.11.18' },
                    { name: 'Sempol', bpsCode: '35.11.19' },
                    { name: 'Binakal', bpsCode: '35.11.20' },
                    { name: 'Taman Krocok', bpsCode: '35.11.21' },
                    { name: 'Botolinggo', bpsCode: '35.11.22' },
                    { name: 'Jambesari / Jambe Sari Darus Sholah', bpsCode: '35.11.23' }
                ]
            }, {
                name: 'Situbondo',
                bpsCode: '35.12',
                districts: [
                    { name: 'Jatibanteng', bpsCode: '35.12.01' },
                    { name: 'Besuki', bpsCode: '35.12.02' },
                    { name: 'Suboh', bpsCode: '35.12.03' },
                    { name: 'Mlandingan', bpsCode: '35.12.04' },
                    { name: 'Kendit', bpsCode: '35.12.05' },
                    { name: 'Panarukan', bpsCode: '35.12.06' },
                    { name: 'Situbondo', bpsCode: '35.12.07' },
                    { name: 'Panji', bpsCode: '35.12.08' },
                    { name: 'Mangaran', bpsCode: '35.12.09' },
                    { name: 'Kapongan', bpsCode: '35.12.10' },
                    { name: 'Arjasa', bpsCode: '35.12.11' },
                    { name: 'Jangkar', bpsCode: '35.12.12' },
                    { name: 'Asembagus', bpsCode: '35.12.13' },
                    { name: 'Banyuputih', bpsCode: '35.12.14' },
                    { name: 'Sumbermalang', bpsCode: '35.12.15' },
                    { name: 'Banyuglugur', bpsCode: '35.12.16' },
                    { name: 'Bungatan', bpsCode: '35.12.17' }
                ]
            }, {
                name: 'Probolinggo',
                bpsCode: '35.13',
                districts: [
                    { name: 'Sukapura', bpsCode: '35.13.01' },
                    { name: 'Sumber', bpsCode: '35.13.02' },
                    { name: 'Kuripan', bpsCode: '35.13.03' },
                    { name: 'Bantaran', bpsCode: '35.13.04' },
                    { name: 'Leces', bpsCode: '35.13.05' },
                    { name: 'Banyuanyar (Banyu Anyar)', bpsCode: '35.13.06' },
                    { name: 'Tiris', bpsCode: '35.13.07' },
                    { name: 'Krucil', bpsCode: '35.13.08' },
                    { name: 'Gading', bpsCode: '35.13.09' },
                    { name: 'Pakuniran', bpsCode: '35.13.10' },
                    { name: 'Kotaanyar (Kota Anyar)', bpsCode: '35.13.11' },
                    { name: 'Paiton', bpsCode: '35.13.12' },
                    { name: 'Besuk', bpsCode: '35.13.13' },
                    { name: 'Kraksaan', bpsCode: '35.13.14' },
                    { name: 'Krejengan', bpsCode: '35.13.15' },
                    { name: 'Pejarakan (Pajarakan)', bpsCode: '35.13.16' },
                    { name: 'Maron', bpsCode: '35.13.17' },
                    { name: 'Gending', bpsCode: '35.13.18' },
                    { name: 'Dringu', bpsCode: '35.13.19' },
                    { name: 'Tegalsiwalan (Tegal Siwalan)', bpsCode: '35.13.20' },
                    { name: 'Sumberasih', bpsCode: '35.13.21' },
                    { name: 'Wonomerto', bpsCode: '35.13.22' },
                    { name: 'Tongas', bpsCode: '35.13.23' },
                    { name: 'Lumbang', bpsCode: '35.13.24' }
                ]
            }, {
                name: 'Pasuruan',
                bpsCode: '35.14',
                districts: [
                    { name: 'Purwodadi', bpsCode: '35.14.01' },
                    { name: 'Tutur', bpsCode: '35.14.02' },
                    { name: 'Puspo', bpsCode: '35.14.03' },
                    { name: 'Lumbang', bpsCode: '35.14.04' },
                    { name: 'Pasrepan', bpsCode: '35.14.05' },
                    { name: 'Kejayan', bpsCode: '35.14.06' },
                    { name: 'Wonorejo', bpsCode: '35.14.07' },
                    { name: 'Purwosari', bpsCode: '35.14.08' },
                    { name: 'Sukorejo', bpsCode: '35.14.09' },
                    { name: 'Prigen', bpsCode: '35.14.10' },
                    { name: 'Pandaan', bpsCode: '35.14.11' },
                    { name: 'Gempol', bpsCode: '35.14.12' },
                    { name: 'Beji', bpsCode: '35.14.13' },
                    { name: 'Bangil', bpsCode: '35.14.14' },
                    { name: 'Rembang', bpsCode: '35.14.15' },
                    { name: 'Kraton', bpsCode: '35.14.16' },
                    { name: 'Pohjentrek', bpsCode: '35.14.17' },
                    { name: 'Gondangwetan (Gondang Wetan)', bpsCode: '35.14.18' },
                    { name: 'Winongan', bpsCode: '35.14.19' },
                    { name: 'Grati', bpsCode: '35.14.20' },
                    { name: 'Nguling', bpsCode: '35.14.21' },
                    { name: 'Lekok', bpsCode: '35.14.22' },
                    { name: 'Rejoso', bpsCode: '35.14.23' },
                    { name: 'Tosari', bpsCode: '35.14.24' }
                ]
            }, {
                name: 'Sidoarjo',
                bpsCode: '35.15',
                districts: [
                    { name: 'Tarik', bpsCode: '35.15.01' },
                    { name: 'Prambon', bpsCode: '35.15.02' },
                    { name: 'Krembung', bpsCode: '35.15.03' },
                    { name: 'Porong', bpsCode: '35.15.04' },
                    { name: 'Jabon', bpsCode: '35.15.05' },
                    { name: 'Tanggulangin', bpsCode: '35.15.06' },
                    { name: 'Candi', bpsCode: '35.15.07' },
                    { name: 'Sidoarjo', bpsCode: '35.15.08' },
                    { name: 'Tulangan', bpsCode: '35.15.09' },
                    { name: 'Wonoayu', bpsCode: '35.15.10' },
                    { name: 'Krian', bpsCode: '35.15.11' },
                    { name: 'Balongbendo', bpsCode: '35.15.12' },
                    { name: 'Taman', bpsCode: '35.15.13' },
                    { name: 'Sukodono', bpsCode: '35.15.14' },
                    { name: 'Buduran', bpsCode: '35.15.15' },
                    { name: 'Gedangan', bpsCode: '35.15.16' },
                    { name: 'Sedati', bpsCode: '35.15.17' },
                    { name: 'Waru', bpsCode: '35.15.18' }
                ]
            }, {
                name: 'Mojokerto',
                bpsCode: '35.16',
                districts: [
                    { name: 'Jatirejo', bpsCode: '35.16.01' },
                    { name: 'Gondang', bpsCode: '35.16.02' },
                    { name: 'Pacet', bpsCode: '35.16.03' },
                    { name: 'Trawas', bpsCode: '35.16.04' },
                    { name: 'Ngoro', bpsCode: '35.16.05' },
                    { name: 'Pungging', bpsCode: '35.16.06' },
                    { name: 'Kutorejo', bpsCode: '35.16.07' },
                    { name: 'Mojosari', bpsCode: '35.16.08' },
                    { name: 'Dlanggu', bpsCode: '35.16.09' },
                    { name: 'Bangsal', bpsCode: '35.16.10' },
                    { name: 'Puri', bpsCode: '35.16.11' },
                    { name: 'Trowulan', bpsCode: '35.16.12' },
                    { name: 'Sooko', bpsCode: '35.16.13' },
                    { name: 'Gedeg', bpsCode: '35.16.14' },
                    { name: 'Kemlagi', bpsCode: '35.16.15' },
                    { name: 'Jetis', bpsCode: '35.16.16' },
                    { name: 'Dawarblandong (Dawar Blandong)', bpsCode: '35.16.17' },
                    { name: 'Mojoanyar', bpsCode: '35.16.18' }
                ]
            }, {
                name: 'Jombang',
                bpsCode: '35.17',
                districts: [
                    { name: 'Perak', bpsCode: '35.17.01' },
                    { name: 'Gudo', bpsCode: '35.17.02' },
                    { name: 'Ngoro', bpsCode: '35.17.03' },
                    { name: 'Bareng', bpsCode: '35.17.04' },
                    { name: 'Wonosalam', bpsCode: '35.17.05' },
                    { name: 'Mojoagung', bpsCode: '35.17.06' },
                    { name: 'Mojowarno', bpsCode: '35.17.07' },
                    { name: 'Diwek', bpsCode: '35.17.08' },
                    { name: 'Jombang', bpsCode: '35.17.09' },
                    { name: 'Peterongan', bpsCode: '35.17.10' },
                    { name: 'Sumobito', bpsCode: '35.17.11' },
                    { name: 'Kesamben', bpsCode: '35.17.12' },
                    { name: 'Tembelang', bpsCode: '35.17.13' },
                    { name: 'Ploso', bpsCode: '35.17.14' },
                    { name: 'Plandaan', bpsCode: '35.17.15' },
                    { name: 'Kabuh', bpsCode: '35.17.16' },
                    { name: 'Kudu', bpsCode: '35.17.17' },
                    { name: 'Bandarkedungmulyo (Bandar Kedung Mulyo)', bpsCode: '35.17.18' },
                    { name: 'Jogoroto', bpsCode: '35.17.19' },
                    { name: 'Megaluh', bpsCode: '35.17.20' },
                    { name: 'Ngusikan', bpsCode: '35.17.21' }
                ]
            }, {
                name: 'Nganjuk',
                bpsCode: '35.18',
                districts: [
                    { name: 'Sawahan', bpsCode: '35.18.01' },
                    { name: 'Ngetos', bpsCode: '35.18.02' },
                    { name: 'Berbek', bpsCode: '35.18.03' },
                    { name: 'Loceret', bpsCode: '35.18.04' },
                    { name: 'Pace', bpsCode: '35.18.05' },
                    { name: 'Prambon', bpsCode: '35.18.06' },
                    { name: 'Ngronggot', bpsCode: '35.18.07' },
                    { name: 'Kertosono', bpsCode: '35.18.08' },
                    { name: 'Patianrowo', bpsCode: '35.18.09' },
                    { name: 'Baron', bpsCode: '35.18.10' },
                    { name: 'Tanjunganom', bpsCode: '35.18.11' },
                    { name: 'Sukomoro', bpsCode: '35.18.12' },
                    { name: 'Nganjuk', bpsCode: '35.18.13' },
                    { name: 'Bagor', bpsCode: '35.18.14' },
                    { name: 'Wilangan', bpsCode: '35.18.15' },
                    { name: 'Rejoso', bpsCode: '35.18.16' },
                    { name: 'Gondang', bpsCode: '35.18.17' },
                    { name: 'Ngluyu', bpsCode: '35.18.18' },
                    { name: 'Lengkong', bpsCode: '35.18.19' },
                    { name: 'Jatikalen', bpsCode: '35.18.20' }
                ]
            }, {
                name: 'Madiun',
                bpsCode: '35.19',
                districts: [
                    { name: 'Kebon Sari (Kebonsari)', bpsCode: '35.19.01' },
                    { name: 'Dolopo', bpsCode: '35.19.02' },
                    { name: 'Geger', bpsCode: '35.19.03' },
                    { name: 'Dagangan', bpsCode: '35.19.04' },
                    { name: 'Kare', bpsCode: '35.19.05' },
                    { name: 'Gemarang', bpsCode: '35.19.06' },
                    { name: 'Wungu', bpsCode: '35.19.07' },
                    { name: 'Madiun', bpsCode: '35.19.08' },
                    { name: 'Jiwan', bpsCode: '35.19.09' },
                    { name: 'Balerejo', bpsCode: '35.19.10' },
                    { name: 'Mejayan', bpsCode: '35.19.11' },
                    { name: 'Saradan', bpsCode: '35.19.12' },
                    { name: 'Pilangkenceng', bpsCode: '35.19.13' },
                    { name: 'Sawahan', bpsCode: '35.19.14' },
                    { name: 'Wonoasri', bpsCode: '35.19.15' }
                ]
            }, {
                name: 'Magetan',
                bpsCode: '35.20',
                districts: [
                    { name: 'Poncol', bpsCode: '35.20.01' },
                    { name: 'Parang', bpsCode: '35.20.02' },
                    { name: 'Lembeyan', bpsCode: '35.20.03' },
                    { name: 'Takeran', bpsCode: '35.20.04' },
                    { name: 'Kawedanan', bpsCode: '35.20.05' },
                    { name: 'Magetan', bpsCode: '35.20.06' },
                    { name: 'Plaosan', bpsCode: '35.20.07' },
                    { name: 'Panekan', bpsCode: '35.20.08' },
                    { name: 'Sukomoro', bpsCode: '35.20.09' },
                    { name: 'Bendo', bpsCode: '35.20.10' },
                    { name: 'Maospati', bpsCode: '35.20.11' },
                    { name: 'Barat', bpsCode: '35.20.12' },
                    { name: 'Karangrejo', bpsCode: '35.20.13' },
                    { name: 'Karas', bpsCode: '35.20.14' },
                    { name: 'Kartoharjo (Kertoharjo)', bpsCode: '35.20.15' },
                    { name: 'Ngariboyo', bpsCode: '35.20.16' },
                    { name: 'Nguntoronadi', bpsCode: '35.20.17' },
                    { name: 'Sidorejo', bpsCode: '35.20.18' }
                ]
            }, {
                name: 'Ngawi',
                bpsCode: '35.21',
                districts: [
                    { name: 'Sine', bpsCode: '35.21.01' },
                    { name: 'Ngrambe', bpsCode: '35.21.02' },
                    { name: 'Jogorogo', bpsCode: '35.21.03' },
                    { name: 'Kendal', bpsCode: '35.21.04' },
                    { name: 'Geneng', bpsCode: '35.21.05' },
                    { name: 'Kwadungan', bpsCode: '35.21.06' },
                    { name: 'Karangjati', bpsCode: '35.21.07' },
                    { name: 'Padas', bpsCode: '35.21.08' },
                    { name: 'Ngawi', bpsCode: '35.21.09' },
                    { name: 'Paron', bpsCode: '35.21.10' },
                    { name: 'Kedunggalar', bpsCode: '35.21.11' },
                    { name: 'Widodaren', bpsCode: '35.21.12' },
                    { name: 'Mantingan', bpsCode: '35.21.13' },
                    { name: 'Pangkur', bpsCode: '35.21.14' },
                    { name: 'Bringin', bpsCode: '35.21.15' },
                    { name: 'Pitu', bpsCode: '35.21.16' },
                    { name: 'Karanganyar', bpsCode: '35.21.17' },
                    { name: 'Gerih', bpsCode: '35.21.18' },
                    { name: 'Kasreman', bpsCode: '35.21.19' }
                ]
            }, {
                name: 'Bojonegoro',
                bpsCode: '35.22',
                districts: [
                    { name: 'Ngraho', bpsCode: '35.22.01' },
                    { name: 'Tambakrejo', bpsCode: '35.22.02' },
                    { name: 'Ngambon', bpsCode: '35.22.03' },
                    { name: 'Ngasem', bpsCode: '35.22.04' },
                    { name: 'Bubulan', bpsCode: '35.22.05' },
                    { name: 'Dander', bpsCode: '35.22.06' },
                    { name: 'Sugihwaras', bpsCode: '35.22.07' },
                    { name: 'Kedungadem', bpsCode: '35.22.08' },
                    { name: 'Kepohbaru', bpsCode: '35.22.09' },
                    { name: 'Baureno', bpsCode: '35.22.10' },
                    { name: 'Kanor', bpsCode: '35.22.11' },
                    { name: 'Sumberejo', bpsCode: '35.22.12' },
                    { name: 'Balen', bpsCode: '35.22.13' },
                    { name: 'Kapas', bpsCode: '35.22.14' },
                    { name: 'Bojonegoro', bpsCode: '35.22.15' },
                    { name: 'Kalitidu', bpsCode: '35.22.16' },
                    { name: 'Malo', bpsCode: '35.22.17' },
                    { name: 'Purwosari', bpsCode: '35.22.18' },
                    { name: 'Padangan', bpsCode: '35.22.19' },
                    { name: 'Kasiman', bpsCode: '35.22.20' },
                    { name: 'Temayang', bpsCode: '35.22.21' },
                    { name: 'Margomulyo', bpsCode: '35.22.22' },
                    { name: 'Trucuk', bpsCode: '35.22.23' },
                    { name: 'Sukosewu', bpsCode: '35.22.24' },
                    { name: 'Kedewan', bpsCode: '35.22.25' },
                    { name: 'Gondang', bpsCode: '35.22.26' },
                    { name: 'Sekar', bpsCode: '35.22.27' },
                    { name: 'Gayam', bpsCode: '35.22.28' }
                ]
            }, {
                name: 'Tuban',
                bpsCode: '35.23',
                districts: [
                    { name: 'Kenduruan', bpsCode: '35.23.01' },
                    { name: 'Jatirogo', bpsCode: '35.23.02' },
                    { name: 'Bangilan', bpsCode: '35.23.03' },
                    { name: 'Bancar', bpsCode: '35.23.04' },
                    { name: 'Senori', bpsCode: '35.23.05' },
                    { name: 'Tambakboyo', bpsCode: '35.23.06' },
                    { name: 'Singgahan', bpsCode: '35.23.07' },
                    { name: 'Kerek', bpsCode: '35.23.08' },
                    { name: 'Parengan', bpsCode: '35.23.09' },
                    { name: 'Montong', bpsCode: '35.23.10' },
                    { name: 'Soko', bpsCode: '35.23.11' },
                    { name: 'Jenu', bpsCode: '35.23.12' },
                    { name: 'Merakurak', bpsCode: '35.23.13' },
                    { name: 'Rengel', bpsCode: '35.23.14' },
                    { name: 'Semanding', bpsCode: '35.23.15' },
                    { name: 'Tuban', bpsCode: '35.23.16' },
                    { name: 'Plumpang', bpsCode: '35.23.17' },
                    { name: 'Palang', bpsCode: '35.23.18' },
                    { name: 'Widang', bpsCode: '35.23.19' },
                    { name: 'Grabagan', bpsCode: '35.23.20' }
                ]
            }, {
                name: 'Lamongan',
                bpsCode: '35.24',
                districts: [
                    { name: 'Sukorame', bpsCode: '35.24.01' },
                    { name: 'Bluluk', bpsCode: '35.24.02' },
                    { name: 'Modo', bpsCode: '35.24.03' },
                    { name: 'Ngimbang', bpsCode: '35.24.04' },
                    { name: 'Babat', bpsCode: '35.24.05' },
                    { name: 'Kedungpring', bpsCode: '35.24.06' },
                    { name: 'Brondong', bpsCode: '35.24.07' },
                    { name: 'Laren', bpsCode: '35.24.08' },
                    { name: 'Sekaran', bpsCode: '35.24.09' },
                    { name: 'Maduran', bpsCode: '35.24.10' },
                    { name: 'Sambeng', bpsCode: '35.24.11' },
                    { name: 'Sugio', bpsCode: '35.24.12' },
                    { name: 'Pucuk', bpsCode: '35.24.13' },
                    { name: 'Paciran', bpsCode: '35.24.14' },
                    { name: 'Solokuro', bpsCode: '35.24.15' },
                    { name: 'Mantup', bpsCode: '35.24.16' },
                    { name: 'Sukodadi', bpsCode: '35.24.17' },
                    { name: 'Karanggeneng (Karang Geneng)', bpsCode: '35.24.18' },
                    { name: 'Kembangbahu', bpsCode: '35.24.19' },
                    { name: 'Kalitengah', bpsCode: '35.24.20' },
                    { name: 'Turi', bpsCode: '35.24.21' },
                    { name: 'Lamongan', bpsCode: '35.24.22' },
                    { name: 'Tikung', bpsCode: '35.24.23' },
                    { name: 'Karangbinangun', bpsCode: '35.24.24' },
                    { name: 'Deket', bpsCode: '35.24.25' },
                    { name: 'Glagah', bpsCode: '35.24.26' },
                    { name: 'Sarirejo', bpsCode: '35.24.27' }
                ]
            }, {
                name: 'Gresik',
                bpsCode: '35.25',
                districts: [
                    { name: 'Dukun', bpsCode: '35.25.01' },
                    { name: 'Balongpanggang (Balong Panggang)', bpsCode: '35.25.02' },
                    { name: 'Panceng', bpsCode: '35.25.03' },
                    { name: 'Benjeng', bpsCode: '35.25.04' },
                    { name: 'Duduksampeyan (Duduk Sampeyan)', bpsCode: '35.25.05' },
                    { name: 'Wringinanom (Wringin Anom)', bpsCode: '35.25.06' },
                    { name: 'Ujungpangkah (Ujung Pangkah)', bpsCode: '35.25.07' },
                    { name: 'Kedamean', bpsCode: '35.25.08' },
                    { name: 'Sidayu', bpsCode: '35.25.09' },
                    { name: 'Manyar', bpsCode: '35.25.10' },
                    { name: 'Cerme', bpsCode: '35.25.11' },
                    { name: 'Bungah', bpsCode: '35.25.12' },
                    { name: 'Menganti', bpsCode: '35.25.13' },
                    { name: 'Kebomas', bpsCode: '35.25.14' },
                    { name: 'Driyorejo', bpsCode: '35.25.15' },
                    { name: 'Gresik', bpsCode: '35.25.16' },
                    { name: 'Sangkapura', bpsCode: '35.25.17' },
                    { name: 'Tambak', bpsCode: '35.25.18' }
                ]
            }, {
                name: 'Bangkalan',
                bpsCode: '35.26',
                districts: [
                    { name: 'Bangkalan', bpsCode: '35.26.01' },
                    { name: 'Socah', bpsCode: '35.26.02' },
                    { name: 'Burneh', bpsCode: '35.26.03' },
                    { name: 'Kamal', bpsCode: '35.26.04' },
                    { name: 'Arosbaya', bpsCode: '35.26.05' },
                    { name: 'Geger', bpsCode: '35.26.06' },
                    { name: 'Klampis', bpsCode: '35.26.07' },
                    { name: 'Sepulu', bpsCode: '35.26.08' },
                    { name: 'Tanjung Bumi (Tanjungbumi)', bpsCode: '35.26.09' },
                    { name: 'Kokop', bpsCode: '35.26.10' },
                    { name: 'Kwanyar', bpsCode: '35.26.11' },
                    { name: 'Labang', bpsCode: '35.26.12' },
                    { name: 'Tanah Merah', bpsCode: '35.26.13' },
                    { name: 'Tragah', bpsCode: '35.26.14' },
                    { name: 'Blega', bpsCode: '35.26.15' },
                    { name: 'Modung', bpsCode: '35.26.16' },
                    { name: 'Konang', bpsCode: '35.26.17' },
                    { name: 'Galis', bpsCode: '35.26.18' }
                ]
            }, {
                name: 'Sampang',
                bpsCode: '35.27',
                districts: [
                    { name: 'Sreseh', bpsCode: '35.27.01' },
                    { name: 'Torjun', bpsCode: '35.27.02' },
                    { name: 'Sampang', bpsCode: '35.27.03' },
                    { name: 'Camplong', bpsCode: '35.27.04' },
                    { name: 'Omben', bpsCode: '35.27.05' },
                    { name: 'Kedungdung', bpsCode: '35.27.06' },
                    { name: 'Jrengik', bpsCode: '35.27.07' },
                    { name: 'Tambelangan', bpsCode: '35.27.08' },
                    { name: 'Banyuates', bpsCode: '35.27.09' },
                    { name: 'Robatal', bpsCode: '35.27.10' },
                    { name: 'Sokobanah', bpsCode: '35.27.11' },
                    { name: 'Ketapang', bpsCode: '35.27.12' },
                    { name: 'Pangarengan', bpsCode: '35.27.13' },
                    { name: 'Karangpenang (Karang Penang)', bpsCode: '35.27.14' }
                ]
            }, {
                name: 'Pamekasan',
                bpsCode: '35.28',
                districts: [
                    { name: 'Tlanakan', bpsCode: '35.28.01' },
                    { name: 'Pademawu', bpsCode: '35.28.02' },
                    { name: 'Galis', bpsCode: '35.28.03' },
                    { name: 'Pamekasan', bpsCode: '35.28.04' },
                    { name: 'Proppo', bpsCode: '35.28.05' },
                    { name: 'Palenggaan (Palenga\'an)', bpsCode: '35.28.06' },
                    { name: 'Pegantenan', bpsCode: '35.28.07' },
                    { name: 'Larangan', bpsCode: '35.28.08' },
                    { name: 'Pakong', bpsCode: '35.28.09' },
                    { name: 'Waru', bpsCode: '35.28.10' },
                    { name: 'Batumarmar', bpsCode: '35.28.11' },
                    { name: 'Kadur', bpsCode: '35.28.12' },
                    { name: 'Pasean', bpsCode: '35.28.13' }
                ]
            }, {
                name: 'Sumenep',
                bpsCode: '35.29',
                districts: [
                    { name: 'Kota Sumenep', bpsCode: '35.29.01' },
                    { name: 'Kalianget', bpsCode: '35.29.02' },
                    { name: 'Manding', bpsCode: '35.29.03' },
                    { name: 'Talango', bpsCode: '35.29.04' },
                    { name: 'Bluto', bpsCode: '35.29.05' },
                    { name: 'Saronggi', bpsCode: '35.29.06' },
                    { name: 'Lenteng', bpsCode: '35.29.07' },
                    { name: 'Giliginting (Gili Ginting)', bpsCode: '35.29.08' },
                    { name: 'Guluk-Guluk (Guluk Guluk)', bpsCode: '35.29.09' },
                    { name: 'Ganding', bpsCode: '35.29.10' },
                    { name: 'Pragaan', bpsCode: '35.29.11' },
                    { name: 'Ambunten', bpsCode: '35.29.12' },
                    { name: 'Pasongsongan', bpsCode: '35.29.13' },
                    { name: 'Dasuk', bpsCode: '35.29.14' },
                    { name: 'Rubaru', bpsCode: '35.29.15' },
                    { name: 'Batang Batang', bpsCode: '35.29.16' },
                    { name: 'Batuputih', bpsCode: '35.29.17' },
                    { name: 'Dungkek', bpsCode: '35.29.18' },
                    { name: 'Gapura', bpsCode: '35.29.19' },
                    { name: 'Gayam', bpsCode: '35.29.20' },
                    { name: 'Nonggunong', bpsCode: '35.29.21' },
                    { name: 'Raas (Ra\'as)', bpsCode: '35.29.22' },
                    { name: 'Masalembu', bpsCode: '35.29.23' },
                    { name: 'Arjasa', bpsCode: '35.29.24' },
                    { name: 'Sapeken', bpsCode: '35.29.25' },
                    { name: 'Batuan', bpsCode: '35.29.26' },
                    { name: 'Kangayan', bpsCode: '35.29.27' }
                ]
            }, {
                name: 'Kediri',
                bpsCode: '35.71',
                districts: [
                    { name: 'Mojoroto', bpsCode: '35.71.01' },
                    { name: 'Kota (Kediri Kota)', bpsCode: '35.71.02' },
                    { name: 'Pesantren', bpsCode: '35.71.03' }
                ]
            }, {
                name: 'Blitar',
                bpsCode: '35.72',
                districts: [
                    { name: 'Kepanjenkidul (Kepanjen Kidul)', bpsCode: '35.72.01' },
                    { name: 'Sukorejo', bpsCode: '35.72.02' },
                    { name: 'Sananwetan (Sanan Wetan)', bpsCode: '35.72.03' }
                ]
            }, {
                name: 'Malang',
                bpsCode: '35.73',
                districts: [
                    { name: 'Blimbing', bpsCode: '35.73.01' },
                    { name: 'Klojen', bpsCode: '35.73.02' },
                    { name: 'Kedungkandang', bpsCode: '35.73.03' },
                    { name: 'Sukun', bpsCode: '35.73.04' },
                    { name: 'Lowokwaru', bpsCode: '35.73.05' }
                ]
            }, {
                name: 'Probolinggo',
                bpsCode: '35.74',
                districts: [
                    { name: 'Kademangan', bpsCode: '35.74.01' },
                    { name: 'Wonoasih', bpsCode: '35.74.02' },
                    { name: 'Mayangan', bpsCode: '35.74.03' },
                    { name: 'Kanigaran', bpsCode: '35.74.04' },
                    { name: 'Kedopok (Kedopak)', bpsCode: '35.74.05' }
                ]
            }, {
                name: 'Pasuruan',
                bpsCode: '35.75',
                districts: [
                    { name: 'Gadingrejo', bpsCode: '35.75.01' },
                    { name: 'Purworejo', bpsCode: '35.75.02' },
                    { name: 'Bugul Kidul', bpsCode: '35.75.03' },
                    { name: 'Panggungrejo', bpsCode: '35.75.04' }
                ]
            }, {
                name: 'Mojokerto',
                bpsCode: '35.76',
                districts: [
                    { name: 'Prajuritkulon (Prajurit Kulon)', bpsCode: '35.76.01' },
                    { name: 'Magersari', bpsCode: '35.76.02' },
                    { name: 'Kranggan', bpsCode: '35.76.03' }
                ]
            }, {
                name: 'Madiun',
                bpsCode: '35.77',
                districts: [
                    { name: 'Kartoharjo', bpsCode: '35.77.01' },
                    { name: 'Manguharjo', bpsCode: '35.77.02' },
                    { name: 'Taman', bpsCode: '35.77.03' }
                ]
            }, {
                name: 'Surabaya',
                bpsCode: '35.78',
                districts: [
                    { name: 'Karangpilang', bpsCode: '35.78.01' },
                    { name: 'Wonocolo', bpsCode: '35.78.02' },
                    { name: 'Rungkut', bpsCode: '35.78.03' },
                    { name: 'Wonokromo', bpsCode: '35.78.04' },
                    { name: 'Tegalsari', bpsCode: '35.78.05' },
                    { name: 'Sawahan', bpsCode: '35.78.06' },
                    { name: 'Genteng', bpsCode: '35.78.07' },
                    { name: 'Gubeng', bpsCode: '35.78.08' },
                    { name: 'Sukolilo', bpsCode: '35.78.09' },
                    { name: 'Tambaksari', bpsCode: '35.78.10' },
                    { name: 'Simokerto', bpsCode: '35.78.11' },
                    { name: 'Pabean Cantian (Pabean Cantikan)', bpsCode: '35.78.12' },
                    { name: 'Bubutan', bpsCode: '35.78.13' },
                    { name: 'Tandes', bpsCode: '35.78.14' },
                    { name: 'Krembangan', bpsCode: '35.78.15' },
                    { name: 'Semampir', bpsCode: '35.78.16' },
                    { name: 'Kenjeran', bpsCode: '35.78.17' },
                    { name: 'Lakarsantri', bpsCode: '35.78.18' },
                    { name: 'Benowo', bpsCode: '35.78.19' },
                    { name: 'Wiyung', bpsCode: '35.78.20' },
                    { name: 'Dukuh Pakis', bpsCode: '35.78.21' },
                    { name: 'Gayungan', bpsCode: '35.78.22' },
                    { name: 'Jambangan', bpsCode: '35.78.23' },
                    { name: 'Tenggilis Mejoyo', bpsCode: '35.78.24' },
                    { name: 'Gunung Anyar (Gununganyar)', bpsCode: '35.78.25' },
                    { name: 'Mulyorejo', bpsCode: '35.78.26' },
                    { name: 'Sukomanunggal', bpsCode: '35.78.27' },
                    { name: 'Asem Rowo (Asemrowo)', bpsCode: '35.78.28' },
                    { name: 'Bulak', bpsCode: '35.78.29' },
                    { name: 'Pakal', bpsCode: '35.78.30' },
                    { name: 'Sambikerep', bpsCode: '35.78.31' }
                ]
            }, {
                name: 'Batu',
                bpsCode: '35.79',
                districts: [
                    { name: 'Batu', bpsCode: '35.79.01' },
                    { name: 'Bumiaji', bpsCode: '35.79.02' },
                    { name: 'Junrejo', bpsCode: '35.79.03' }
                ]
            }
        ]
    },
    '36': {
        regencies: [
            {
                name: 'Pandeglang',
                bpsCode: '36.01',
                districts: [
                    { name: 'Sumur', bpsCode: '36.01.01' },
                    { name: 'Cimanggu', bpsCode: '36.01.02' },
                    { name: 'Cibaliung', bpsCode: '36.01.03' },
                    { name: 'Cikeusik', bpsCode: '36.01.04' },
                    { name: 'Cigeulis', bpsCode: '36.01.05' },
                    { name: 'Panimbang', bpsCode: '36.01.06' },
                    { name: 'Angsana', bpsCode: '36.01.07' },
                    { name: 'Munjul', bpsCode: '36.01.08' },
                    { name: 'Pagelaran', bpsCode: '36.01.09' },
                    { name: 'Bojong', bpsCode: '36.01.10' },
                    { name: 'Picung', bpsCode: '36.01.11' },
                    { name: 'Labuan', bpsCode: '36.01.12' },
                    { name: 'Menes', bpsCode: '36.01.13' },
                    { name: 'Saketi', bpsCode: '36.01.14' },
                    { name: 'Cipeucang', bpsCode: '36.01.15' },
                    { name: 'Jiput', bpsCode: '36.01.16' },
                    { name: 'Mandalawangi', bpsCode: '36.01.17' },
                    { name: 'Cimanuk', bpsCode: '36.01.18' },
                    { name: 'Kaduhejo', bpsCode: '36.01.19' },
                    { name: 'Banjar', bpsCode: '36.01.20' },
                    { name: 'Pandeglang', bpsCode: '36.01.21' },
                    { name: 'Cadasari', bpsCode: '36.01.22' },
                    { name: 'Cisata', bpsCode: '36.01.23' },
                    { name: 'Patia', bpsCode: '36.01.24' },
                    { name: 'Karang Tanjung', bpsCode: '36.01.25' },
                    { name: 'Cikeudal (Cikedal)', bpsCode: '36.01.26' },
                    { name: 'Cibitung', bpsCode: '36.01.27' },
                    { name: 'Carita', bpsCode: '36.01.28' },
                    { name: 'Sukaresmi', bpsCode: '36.01.29' },
                    { name: 'Mekarjaya', bpsCode: '36.01.30' },
                    { name: 'Sindangresmi', bpsCode: '36.01.31' },
                    { name: 'Pulosari', bpsCode: '36.01.32' },
                    { name: 'Koroncong', bpsCode: '36.01.33' },
                    { name: 'Majasari', bpsCode: '36.01.34' },
                    { name: 'Sobang', bpsCode: '36.01.35' }
                ]
            }, {
                name: 'Lebak',
                bpsCode: '36.02',
                districts: [
                    { name: 'Malingping', bpsCode: '36.02.01' },
                    { name: 'Panggarangan', bpsCode: '36.02.02' },
                    { name: 'Bayah', bpsCode: '36.02.03' },
                    { name: 'Cipanas', bpsCode: '36.02.04' },
                    { name: 'Muncang', bpsCode: '36.02.05' },
                    { name: 'Leuwidamar', bpsCode: '36.02.06' },
                    { name: 'Bojongmanik', bpsCode: '36.02.07' },
                    { name: 'Gunungkencana (Gunung Kencana)', bpsCode: '36.02.08' },
                    { name: 'Banjarsari', bpsCode: '36.02.09' },
                    { name: 'Cileles', bpsCode: '36.02.10' },
                    { name: 'Cimarga', bpsCode: '36.02.11' },
                    { name: 'Sajira', bpsCode: '36.02.12' },
                    { name: 'Maja', bpsCode: '36.02.13' },
                    { name: 'Rangkasbitung', bpsCode: '36.02.14' },
                    { name: 'Warunggunung', bpsCode: '36.02.15' },
                    { name: 'Cijaku', bpsCode: '36.02.16' },
                    { name: 'Cikulur', bpsCode: '36.02.17' },
                    { name: 'Cibadak', bpsCode: '36.02.18' },
                    { name: 'Cibeber', bpsCode: '36.02.19' },
                    { name: 'Cilograng', bpsCode: '36.02.20' },
                    { name: 'Wanasalam', bpsCode: '36.02.21' },
                    { name: 'Sobang', bpsCode: '36.02.22' },
                    { name: 'Curug bitung (Curugbitung)', bpsCode: '36.02.23' },
                    { name: 'Kalanganyar', bpsCode: '36.02.24' },
                    { name: 'Lebakgedong', bpsCode: '36.02.25' },
                    { name: 'Cihara', bpsCode: '36.02.26' },
                    { name: 'Cirinten', bpsCode: '36.02.27' },
                    { name: 'Cigemlong (Cigemblong)', bpsCode: '36.02.28' }
                ]
            }, {
                name: 'Tangerang',
                bpsCode: '36.03',
                districts: [
                    { name: 'Balaraja', bpsCode: '36.03.01' },
                    { name: 'Jayanti', bpsCode: '36.03.02' },
                    { name: 'Tigaraksa', bpsCode: '36.03.03' },
                    { name: 'Jambe', bpsCode: '36.03.04' },
                    { name: 'Cisoka', bpsCode: '36.03.05' },
                    { name: 'Kresek', bpsCode: '36.03.06' },
                    { name: 'Kronjo', bpsCode: '36.03.07' },
                    { name: 'Mauk', bpsCode: '36.03.08' },
                    { name: 'Kemiri', bpsCode: '36.03.09' },
                    { name: 'Sukadiri', bpsCode: '36.03.10' },
                    { name: 'Rajeg', bpsCode: '36.03.11' },
                    { name: 'Pasar Kemis', bpsCode: '36.03.12' },
                    { name: 'Teluknaga', bpsCode: '36.03.13' },
                    { name: 'Kosambi', bpsCode: '36.03.14' },
                    { name: 'Pakuhaji', bpsCode: '36.03.15' },
                    { name: 'Sepatan', bpsCode: '36.03.16' },
                    { name: 'Curug', bpsCode: '36.03.17' },
                    { name: 'Cikupa', bpsCode: '36.03.18' },
                    { name: 'Panongan', bpsCode: '36.03.19' },
                    { name: 'Legok', bpsCode: '36.03.20' },
                    { name: 'Pagedangan', bpsCode: '36.03.22' },
                    { name: 'Cisauk', bpsCode: '36.03.23' },
                    { name: 'Sukamulya', bpsCode: '36.03.27' },
                    { name: 'Kelapa Dua', bpsCode: '36.03.28' },
                    { name: 'Sindang Jaya', bpsCode: '36.03.29' },
                    { name: 'Sepatan Timur', bpsCode: '36.03.30' },
                    { name: 'Solear', bpsCode: '36.03.31' },
                    { name: 'Gunung Kaler', bpsCode: '36.03.32' },
                    { name: 'Mekar Baru', bpsCode: '36.03.33' }
                ]
            }, {
                name: 'Serang',
                bpsCode: '36.04',
                districts: [
                    { name: 'Kramatwatu', bpsCode: '36.04.05' },
                    { name: 'Waringinkurung (Waringin Kurung)', bpsCode: '36.04.06' },
                    { name: 'Bojonegara', bpsCode: '36.04.07' },
                    { name: 'Pulo Ampel', bpsCode: '36.04.08' },
                    { name: 'Ciruas', bpsCode: '36.04.09' },
                    { name: 'Kragilan', bpsCode: '36.04.11' },
                    { name: 'Pontang', bpsCode: '36.04.12' },
                    { name: 'Tirtayasa', bpsCode: '36.04.13' },
                    { name: 'Tanara', bpsCode: '36.04.14' },
                    { name: 'Cikande', bpsCode: '36.04.15' },
                    { name: 'Kibin', bpsCode: '36.04.16' },
                    { name: 'Carenang (Cerenang)', bpsCode: '36.04.17' },
                    { name: 'Binuang', bpsCode: '36.04.18' },
                    { name: 'Petir', bpsCode: '36.04.19' },
                    { name: 'Tunjung Teja', bpsCode: '36.04.20' },
                    { name: 'Baros', bpsCode: '36.04.22' },
                    { name: 'Cikeusal', bpsCode: '36.04.23' },
                    { name: 'Pamarayan', bpsCode: '36.04.24' },
                    { name: 'Kopo', bpsCode: '36.04.25' },
                    { name: 'Jawilan', bpsCode: '36.04.26' },
                    { name: 'Ciomas', bpsCode: '36.04.27' },
                    { name: 'Pabuaran', bpsCode: '36.04.28' },
                    { name: 'Padarincang', bpsCode: '36.04.29' },
                    { name: 'Anyar', bpsCode: '36.04.30' },
                    { name: 'Cinangka', bpsCode: '36.04.31' },
                    { name: 'Mancak', bpsCode: '36.04.32' },
                    { name: 'Gunung Sari (Gunungsari)', bpsCode: '36.04.33' },
                    { name: 'Bandung', bpsCode: '36.04.34' },
                    { name: 'Lebak Wangi', bpsCode: '36.04.35' }
                ]
            }, {
                name: 'Tangerang',
                bpsCode: '36.71',
                districts: [
                    { name: 'Tangerang', bpsCode: '36.71.01' },
                    { name: 'Jatiuwung', bpsCode: '36.71.02' },
                    { name: 'Batuceper', bpsCode: '36.71.03' },
                    { name: 'Benda', bpsCode: '36.71.04' },
                    { name: 'Cipondoh', bpsCode: '36.71.05' },
                    { name: 'Ciledug', bpsCode: '36.71.06' },
                    { name: 'Karawaci', bpsCode: '36.71.07' },
                    { name: 'Periuk', bpsCode: '36.71.08' },
                    { name: 'Cibodas', bpsCode: '36.71.09' },
                    { name: 'Neglasari', bpsCode: '36.71.10' },
                    { name: 'Pinang (Penang)', bpsCode: '36.71.11' },
                    { name: 'Karang Tengah', bpsCode: '36.71.12' },
                    { name: 'Larangan', bpsCode: '36.71.13' }
                ]
            }, {
                name: 'Cilegon',
                bpsCode: '36.72',
                districts: [
                    { name: 'Cibeber', bpsCode: '36.72.01' },
                    { name: 'Cilegon', bpsCode: '36.72.02' },
                    { name: 'Pulomerak', bpsCode: '36.72.03' },
                    { name: 'Ciwandan', bpsCode: '36.72.04' },
                    { name: 'Jombang', bpsCode: '36.72.05' },
                    { name: 'Gerogol', bpsCode: '36.72.06' },
                    { name: 'Purwakarta', bpsCode: '36.72.07' },
                    { name: 'Citangkil', bpsCode: '36.72.08' }
                ]
            }, {
                name: 'Serang',
                bpsCode: '36.73',
                districts: [
                    { name: 'Serang', bpsCode: '36.73.01' },
                    { name: 'Kasemen', bpsCode: '36.73.02' },
                    { name: 'Walantaka', bpsCode: '36.73.03' },
                    { name: 'Curug', bpsCode: '36.73.04' },
                    { name: 'Cipocok Jaya', bpsCode: '36.73.05' },
                    { name: 'Taktakan', bpsCode: '36.73.06' }
                ]
            }, {
                name: 'Tangerang Selatan',
                bpsCode: '36.74',
                districts: [
                    { name: 'Serpong', bpsCode: '36.74.01' },
                    { name: 'Serpong Utara', bpsCode: '36.74.02' },
                    { name: 'Pondok Aren', bpsCode: '36.74.03' },
                    { name: 'Ciputat', bpsCode: '36.74.04' },
                    { name: 'Ciputat Timur', bpsCode: '36.74.05' },
                    { name: 'Pamulang', bpsCode: '36.74.06' },
                    { name: 'Setu', bpsCode: '36.74.07' }
                ]
            }
        ]
    },
    '51': {
        regencies: [
            {
                name: 'Jembrana',
                bpsCode: '51.01',
                districts: [
                    { name: 'Negara', bpsCode: '51.01.01' },
                    { name: 'Mendoyo', bpsCode: '51.01.02' },
                    { name: 'Pekutatan', bpsCode: '51.01.03' },
                    { name: 'Melaya', bpsCode: '51.01.04' },
                    { name: 'Jembrana', bpsCode: '51.01.05' }
                ]
            }, {
                name: 'Tabanan',
                bpsCode: '51.02',
                districts: [
                    { name: 'Selemadeg', bpsCode: '51.02.01' },
                    { name: 'Salamadeg Timur (Salemadeg Timur)', bpsCode: '51.02.02' },
                    { name: 'Salemadeg Barat', bpsCode: '51.02.03' },
                    { name: 'Kerambitan', bpsCode: '51.02.04' },
                    { name: 'Tabanan', bpsCode: '51.02.05' },
                    { name: 'Kediri', bpsCode: '51.02.06' },
                    { name: 'Marga', bpsCode: '51.02.07' },
                    { name: 'Penebel', bpsCode: '51.02.08' },
                    { name: 'Baturiti', bpsCode: '51.02.09' },
                    { name: 'Pupuan', bpsCode: '51.02.10' }
                ]
            }, {
                name: 'Badung',
                bpsCode: '51.03',
                districts: [
                    { name: 'Kuta', bpsCode: '51.03.01' },
                    { name: 'Mengwi', bpsCode: '51.03.02' },
                    { name: 'Abiansemal', bpsCode: '51.03.03' },
                    { name: 'Petang', bpsCode: '51.03.04' },
                    { name: 'Kuta Selatan', bpsCode: '51.03.05' },
                    { name: 'Kuta Utara', bpsCode: '51.03.06' }
                ]
            }, {
                name: 'Gianyar',
                bpsCode: '51.04',
                districts: [
                    { name: 'Sukawati', bpsCode: '51.04.01' },
                    { name: 'Belah Batuh (Blahbatuh)', bpsCode: '51.04.02' },
                    { name: 'Gianyar', bpsCode: '51.04.03' },
                    { name: 'Tampaksiring (Tampak Siring)', bpsCode: '51.04.04' },
                    { name: 'Ubud', bpsCode: '51.04.05' },
                    { name: 'Tegallalang', bpsCode: '51.04.06' },
                    { name: 'Payangan', bpsCode: '51.04.07' }
                ]
            }, {
                name: 'Klungkung',
                bpsCode: '51.05',
                districts: [
                    { name: 'Nusa Penida (Nusapenida)', bpsCode: '51.05.01' },
                    { name: 'Banjarangkan', bpsCode: '51.05.02' },
                    { name: 'Klungkung', bpsCode: '51.05.03' },
                    { name: 'Dawan', bpsCode: '51.05.04' }
                ]
            }, {
                name: 'Bangli',
                bpsCode: '51.06',
                districts: [
                    { name: 'Susut', bpsCode: '51.06.01' },
                    { name: 'Bangli', bpsCode: '51.06.02' },
                    { name: 'Tembuku', bpsCode: '51.06.03' },
                    { name: 'Kintamani', bpsCode: '51.06.04' }
                ]
            }, {
                name: 'Karangasem',
                bpsCode: '51.07',
                districts: [
                    { name: 'Rendang', bpsCode: '51.07.01' },
                    { name: 'Sidemen', bpsCode: '51.07.02' },
                    { name: 'Manggis', bpsCode: '51.07.03' },
                    { name: 'Karangasem (Karang Asem)', bpsCode: '51.07.04' },
                    { name: 'Abang', bpsCode: '51.07.05' },
                    { name: 'Bebandem', bpsCode: '51.07.06' },
                    { name: 'Selat', bpsCode: '51.07.07' },
                    { name: 'Kubu', bpsCode: '51.07.08' }
                ]
            }, {
                name: 'Buleleng',
                bpsCode: '51.08',
                districts: [
                    { name: 'Gerokgak', bpsCode: '51.08.01' },
                    { name: 'Seririt', bpsCode: '51.08.02' },
                    { name: 'Busung biu (Busungbiu)', bpsCode: '51.08.03' },
                    { name: 'Banjar', bpsCode: '51.08.04' },
                    { name: 'Sukasada', bpsCode: '51.08.05' },
                    { name: 'Buleleng', bpsCode: '51.08.06' },
                    { name: 'Sawan', bpsCode: '51.08.07' },
                    { name: 'Kubutambahan', bpsCode: '51.08.08' },
                    { name: 'Tejakula', bpsCode: '51.08.09' }
                ]
            }, {
                name: 'Denpasar',
                bpsCode: '51.71',
                districts: [
                    { name: 'Denpasar Selatan', bpsCode: '51.71.01' },
                    { name: 'Denpasar Timur', bpsCode: '51.71.02' },
                    { name: 'Denpasar Barat', bpsCode: '51.71.03' },
                    { name: 'Denpasar Utara', bpsCode: '51.71.04' }
                ]
            }
        ]
    },
    '52': {
        regencies: [
            {
                name: 'Lombok Barat',
                bpsCode: '52.01',
                districts: [
                    { name: 'Gerung', bpsCode: '52.01.01' },
                    { name: 'Kediri', bpsCode: '52.01.02' },
                    { name: 'Narmada', bpsCode: '52.01.03' },
                    { name: 'Sekotong', bpsCode: '52.01.07' },
                    { name: 'Labuapi', bpsCode: '52.01.08' },
                    { name: 'Gunungsari', bpsCode: '52.01.09' },
                    { name: 'Lingsar', bpsCode: '52.01.12' },
                    { name: 'Lembar', bpsCode: '52.01.13' },
                    { name: 'Batu Layar', bpsCode: '52.01.14' },
                    { name: 'Kuripan', bpsCode: '52.01.15' }
                ]
            }, {
                name: 'Lombok Tengah',
                bpsCode: '52.02',
                districts: [
                    { name: 'Praya', bpsCode: '52.02.01' },
                    { name: 'Jonggat', bpsCode: '52.02.02' },
                    { name: 'Batukliang', bpsCode: '52.02.03' },
                    { name: 'Pujut', bpsCode: '52.02.04' },
                    { name: 'Praya Barat', bpsCode: '52.02.05' },
                    { name: 'Praya Timur', bpsCode: '52.02.06' },
                    { name: 'Janapria', bpsCode: '52.02.07' },
                    { name: 'Pringgarata', bpsCode: '52.02.08' },
                    { name: 'Kopang', bpsCode: '52.02.09' },
                    { name: 'Praya Tengah', bpsCode: '52.02.10' },
                    { name: 'Praya Barat Daya', bpsCode: '52.02.11' },
                    { name: 'Batukliang Utara', bpsCode: '52.02.12' }
                ]
            }, {
                name: 'Lombok Timur',
                bpsCode: '52.03',
                districts: [
                    { name: 'Keruak', bpsCode: '52.03.01' },
                    { name: 'Sakra', bpsCode: '52.03.02' },
                    { name: 'Terara', bpsCode: '52.03.03' },
                    { name: 'Sikur', bpsCode: '52.03.04' },
                    { name: 'Masbagik', bpsCode: '52.03.05' },
                    { name: 'Sukamulia', bpsCode: '52.03.06' },
                    { name: 'Selong', bpsCode: '52.03.07' },
                    { name: 'Pringgabaya', bpsCode: '52.03.08' },
                    { name: 'Aikmel', bpsCode: '52.03.09' },
                    { name: 'Sambalia (Sambelia)', bpsCode: '52.03.10' },
                    { name: 'Montong Gading', bpsCode: '52.03.11' },
                    { name: 'Pringgasela', bpsCode: '52.03.12' },
                    { name: 'Suralaga', bpsCode: '52.03.13' },
                    { name: 'Wanasaba', bpsCode: '52.03.14' },
                    { name: 'Sembalun', bpsCode: '52.03.15' },
                    { name: 'Suela (Suwela)', bpsCode: '52.03.16' },
                    { name: 'Labuhan Haji', bpsCode: '52.03.17' },
                    { name: 'Sakra Timur', bpsCode: '52.03.18' },
                    { name: 'Sakra Barat', bpsCode: '52.03.19' },
                    { name: 'Jerowaru', bpsCode: '52.03.20' }
                ]
            }, {
                name: 'Sumbawa',
                bpsCode: '52.04',
                districts: [
                    { name: 'Lunyuk', bpsCode: '52.04.02' },
                    { name: 'Alas', bpsCode: '52.04.05' },
                    { name: 'Utan', bpsCode: '52.04.06' },
                    { name: 'Batu Lanteh (Batulanteh)', bpsCode: '52.04.07' },
                    { name: 'Sumbawa', bpsCode: '52.04.08' },
                    { name: 'Moyo Hilir', bpsCode: '52.04.09' },
                    { name: 'Moyo Hulu', bpsCode: '52.04.10' },
                    { name: 'Ropang', bpsCode: '52.04.11' },
                    { name: 'Lape (Lape Lopok)', bpsCode: '52.04.12' },
                    { name: 'Plampang', bpsCode: '52.04.13' },
                    { name: 'Empang', bpsCode: '52.04.14' },
                    { name: 'Alas Barat', bpsCode: '52.04.17' },
                    { name: 'Labuhan Badas', bpsCode: '52.04.18' },
                    { name: 'Labangka', bpsCode: '52.04.19' },
                    { name: 'Buer', bpsCode: '52.04.20' },
                    { name: 'Rhee', bpsCode: '52.04.21' },
                    { name: 'Unter Iwes (Unterwiris)', bpsCode: '52.04.22' },
                    { name: 'Moyo Utara', bpsCode: '52.04.23' },
                    { name: 'Maronge', bpsCode: '52.04.24' },
                    { name: 'Tarano', bpsCode: '52.04.25' },
                    { name: 'Lopok', bpsCode: '52.04.26' },
                    { name: 'Lenangguar', bpsCode: '52.04.27' },
                    { name: 'Orong Telu', bpsCode: '52.04.28' },
                    { name: 'Lantung', bpsCode: '52.04.29' }
                ]
            }, {
                name: 'Dompu',
                bpsCode: '52.05',
                districts: [
                    { name: 'Dompu', bpsCode: '52.05.01' },
                    { name: 'Kempo', bpsCode: '52.05.02' },
                    { name: 'Hu\'u', bpsCode: '52.05.03' },
                    { name: 'Kilo', bpsCode: '52.05.04' },
                    { name: 'Woja', bpsCode: '52.05.05' },
                    { name: 'Pekat', bpsCode: '52.05.06' },
                    { name: 'Manggalewa', bpsCode: '52.05.07' },
                    { name: 'Pajo', bpsCode: '52.05.08' }
                ]
            }, {
                name: 'Bima',
                bpsCode: '52.06',
                districts: [
                    { name: 'Monta', bpsCode: '52.06.01' },
                    { name: 'Bolo', bpsCode: '52.06.02' },
                    { name: 'Woha', bpsCode: '52.06.03' },
                    { name: 'Belo', bpsCode: '52.06.04' },
                    { name: 'Wawo', bpsCode: '52.06.05' },
                    { name: 'Sape', bpsCode: '52.06.06' },
                    { name: 'Wera', bpsCode: '52.06.07' },
                    { name: 'Donggo', bpsCode: '52.06.08' },
                    { name: 'Sanggar', bpsCode: '52.06.09' },
                    { name: 'Ambalawi', bpsCode: '52.06.10' },
                    { name: 'Langgudu', bpsCode: '52.06.11' },
                    { name: 'Lambu', bpsCode: '52.06.12' },
                    { name: 'Madapangga', bpsCode: '52.06.13' },
                    { name: 'Tambora', bpsCode: '52.06.14' },
                    { name: 'Soromandi', bpsCode: '52.06.15' },
                    { name: 'Parado', bpsCode: '52.06.16' },
                    { name: 'Lambitu', bpsCode: '52.06.17' },
                    { name: 'Palibelo', bpsCode: '52.06.18' }
                ]
            }, {
                name: 'Sumbawa Barat',
                bpsCode: '52.07',
                districts: [
                    { name: 'Jereweh', bpsCode: '52.07.01' },
                    { name: 'Taliwang', bpsCode: '52.07.02' },
                    { name: 'Sateluk (Seteluk)', bpsCode: '52.07.03' },
                    { name: 'Sekongkang', bpsCode: '52.07.04' },
                    { name: 'Brang Rea', bpsCode: '52.07.05' },
                    { name: 'Poto Tano', bpsCode: '52.07.06' },
                    { name: 'Brang Ene', bpsCode: '52.07.07' },
                    { name: 'Maluk', bpsCode: '52.07.08' }
                ]
            }, {
                name: 'Lombok Utara',
                bpsCode: '52.08',
                districts: [
                    { name: 'Tanjung', bpsCode: '52.08.01' },
                    { name: 'Gangga', bpsCode: '52.08.02' },
                    { name: 'Kayangan', bpsCode: '52.08.03' },
                    { name: 'Bayan', bpsCode: '52.08.04' },
                    { name: 'Pemenang', bpsCode: '52.08.05' }
                ]
            }, {
                name: 'Mataram',
                bpsCode: '52.71',
                districts: [
                    { name: 'Ampenan', bpsCode: '52.71.01' },
                    { name: 'Mataram', bpsCode: '52.71.02' },
                    { name: 'Cakranegara', bpsCode: '52.71.03' },
                    { name: 'Sekarbela', bpsCode: '52.71.04' },
                    { name: 'Selaparang (Selaprang)', bpsCode: '52.71.05' },
                    { name: 'Sandubaya (Sandujaya)', bpsCode: '52.71.06' }
                ]
            }, {
                name: 'Bima',
                bpsCode: '52.72',
                districts: [
                    { name: 'Rasanae Barat', bpsCode: '52.72.01' },
                    { name: 'Rasanae Timur', bpsCode: '52.72.02' },
                    { name: 'Asakota', bpsCode: '52.72.03' },
                    { name: 'Raba', bpsCode: '52.72.04' },
                    { name: 'Mpunda', bpsCode: '52.72.05' }
                ]
            }
        ]
    },
    '53': {
        regencies: [
            {
                name: 'Kupang',
                bpsCode: '53.01',
                districts: [
                    { name: 'Semau', bpsCode: '53.01.04' },
                    { name: 'Kupang Barat', bpsCode: '53.01.05' },
                    { name: 'Kupang Timur', bpsCode: '53.01.06' },
                    { name: 'Sulamu', bpsCode: '53.01.07' },
                    { name: 'Kupang Tengah', bpsCode: '53.01.08' },
                    { name: 'Amarasi', bpsCode: '53.01.09' },
                    { name: 'Fatuleu', bpsCode: '53.01.10' },
                    { name: 'Takari', bpsCode: '53.01.11' },
                    { name: 'Amfoang Selatan', bpsCode: '53.01.12' },
                    { name: 'Amfoang Utara', bpsCode: '53.01.13' },
                    { name: 'Nekamese', bpsCode: '53.01.16' },
                    { name: 'Amarasi Barat', bpsCode: '53.01.17' },
                    { name: 'Amarasi Selatan', bpsCode: '53.01.18' },
                    { name: 'Amarasi Timur', bpsCode: '53.01.19' },
                    { name: 'Amabi Oefeto Timur', bpsCode: '53.01.20' },
                    { name: 'Amfoang Barat Daya', bpsCode: '53.01.21' },
                    { name: 'Amfoang Barat Laut', bpsCode: '53.01.22' },
                    { name: 'Semau Selatan', bpsCode: '53.01.23' },
                    { name: 'Taebenu', bpsCode: '53.01.24' },
                    { name: 'Amabi Oefeto', bpsCode: '53.01.25' },
                    { name: 'Amfoang Timur', bpsCode: '53.01.26' },
                    { name: 'Fatuleu Barat', bpsCode: '53.01.27' },
                    { name: 'Fatuleu Tengah', bpsCode: '53.01.28' },
                    { name: 'Amfoang Tengah', bpsCode: '53.01.30' }
                ]
            }, {
                name: 'Timor Tengah Selatan',
                bpsCode: '53.02',
                districts: [
                    { name: 'Kota Soe', bpsCode: '53.02.01' },
                    { name: 'Mollo Selatan', bpsCode: '53.02.02' },
                    { name: 'Mollo Utara', bpsCode: '53.02.03' },
                    { name: 'Amanuban Timur', bpsCode: '53.02.04' },
                    { name: 'Amanuban Tengah', bpsCode: '53.02.05' },
                    { name: 'Amanuban Selatan', bpsCode: '53.02.06' },
                    { name: 'Amanuban Barat', bpsCode: '53.02.07' },
                    { name: 'Amanatun Selatan', bpsCode: '53.02.08' },
                    { name: 'Amanatun Utara', bpsCode: '53.02.09' },
                    { name: 'Kie (Ki\'e)', bpsCode: '53.02.10' },
                    { name: 'Kuanfatu', bpsCode: '53.02.11' },
                    { name: 'Fatumnasi', bpsCode: '53.02.12' },
                    { name: 'Polen', bpsCode: '53.02.13' },
                    { name: 'Batu Putih', bpsCode: '53.02.14' },
                    { name: 'Boking', bpsCode: '53.02.15' },
                    { name: 'Toianas', bpsCode: '53.02.16' },
                    { name: 'Nunkolo', bpsCode: '53.02.17' },
                    { name: 'Oenino', bpsCode: '53.02.18' },
                    { name: 'Kolbano', bpsCode: '53.02.19' },
                    { name: 'Kot Olin', bpsCode: '53.02.20' },
                    { name: 'Kualin', bpsCode: '53.02.21' },
                    { name: 'Mollo Barat', bpsCode: '53.02.22' },
                    { name: 'Kok Baun', bpsCode: '53.02.23' },
                    { name: 'Noebana', bpsCode: '53.02.24' },
                    { name: 'Santian', bpsCode: '53.02.25' },
                    { name: 'Noebeba', bpsCode: '53.02.26' },
                    { name: 'Kuatnana', bpsCode: '53.02.27' },
                    { name: 'Fautmolo', bpsCode: '53.02.28' },
                    { name: 'Fatukopa', bpsCode: '53.02.29' },
                    { name: 'Mollo Tengah', bpsCode: '53.02.30' },
                    { name: 'Tobu', bpsCode: '53.02.31' },
                    { name: 'Nunbena', bpsCode: '53.02.32' }
                ]
            }, {
                name: 'Timor Tengah Utara',
                bpsCode: '53.03',
                districts: [
                    { name: 'Miomafo Timur', bpsCode: '53.03.01' },
                    { name: 'Miomafo Barat', bpsCode: '53.03.02' },
                    { name: 'Biboki Selatan', bpsCode: '53.03.03' },
                    { name: 'Noemuti', bpsCode: '53.03.04' },
                    { name: 'Kota Kefamenanu', bpsCode: '53.03.05' },
                    { name: 'Biboki Utara', bpsCode: '53.03.06' },
                    { name: 'Biboki Anleu', bpsCode: '53.03.07' },
                    { name: 'Insana', bpsCode: '53.03.08' },
                    { name: 'Insana Utara', bpsCode: '53.03.09' },
                    { name: 'Noemuti Timur', bpsCode: '53.03.10' },
                    { name: 'Miomaffo Tengah (Miomafo Tengah)', bpsCode: '53.03.11' },
                    { name: 'Musi', bpsCode: '53.03.12' },
                    { name: 'Mutis', bpsCode: '53.03.13' },
                    { name: 'Bikomi Selatan', bpsCode: '53.03.14' },
                    { name: 'Bikomi Tengah', bpsCode: '53.03.15' },
                    { name: 'Bikomi Nilulat', bpsCode: '53.03.16' },
                    { name: 'Bikomi Utara', bpsCode: '53.03.17' },
                    { name: 'Naibenu', bpsCode: '53.03.18' },
                    { name: 'Insana Fafinesu', bpsCode: '53.03.19' },
                    { name: 'Insana Barat', bpsCode: '53.03.20' },
                    { name: 'Insana Tengah', bpsCode: '53.03.21' },
                    { name: 'Biboki Tan Pah', bpsCode: '53.03.22' },
                    { name: 'Biboki Moenleu', bpsCode: '53.03.23' },
                    { name: 'Biboki Feotleu', bpsCode: '53.03.24' }
                ]
            }, {
                name: 'Belu',
                bpsCode: '53.04',
                districts: [
                    { name: 'Lamaknen', bpsCode: '53.04.01' },
                    { name: 'Tasifeto Timur', bpsCode: '53.04.02' },
                    { name: 'Raihat', bpsCode: '53.04.03' },
                    { name: 'Tasifeto Barat', bpsCode: '53.04.04' },
                    { name: 'Kakuluk Mesak', bpsCode: '53.04.05' },
                    { name: 'Kota Atambua (Atambua Kota)', bpsCode: '53.04.12' },
                    { name: 'Raimanuk', bpsCode: '53.04.13' },
                    { name: 'Lasiolat', bpsCode: '53.04.17' },
                    { name: 'Lamaknen Selatan', bpsCode: '53.04.18' },
                    { name: 'Atambua Barat', bpsCode: '53.04.21' },
                    { name: 'Atambua Selatan', bpsCode: '53.04.22' },
                    { name: 'Nanaet Duabesi', bpsCode: '53.04.23' }
                ]
            }, {
                name: 'Alor',
                bpsCode: '53.05',
                districts: [
                    { name: 'Teluk Mutiara', bpsCode: '53.05.01' },
                    { name: 'Alor Barat Laut', bpsCode: '53.05.02' },
                    { name: 'Alor Barat Daya', bpsCode: '53.05.03' },
                    { name: 'Alor Selatan', bpsCode: '53.05.04' },
                    { name: 'Alor Timur', bpsCode: '53.05.05' },
                    { name: 'Pantar', bpsCode: '53.05.06' },
                    { name: 'Alor Tengah Utara', bpsCode: '53.05.07' },
                    { name: 'Alor Timur Laut', bpsCode: '53.05.08' },
                    { name: 'Pantar Barat', bpsCode: '53.05.09' },
                    { name: 'Kabola', bpsCode: '53.05.10' },
                    { name: 'Pulau Pura', bpsCode: '53.05.11' },
                    { name: 'Mataru', bpsCode: '53.05.12' },
                    { name: 'Pureman', bpsCode: '53.05.13' },
                    { name: 'Pantar Timur', bpsCode: '53.05.14' },
                    { name: 'Lembur', bpsCode: '53.05.15' },
                    { name: 'Pantar Tengah', bpsCode: '53.05.16' },
                    { name: 'Pantar Baru Laut (Pantar Barat Laut)', bpsCode: '53.05.17' }
                ]
            }, {
                name: 'Flores Timur',
                bpsCode: '53.06',
                districts: [
                    { name: 'Wulanggitang', bpsCode: '53.06.01' },
                    { name: 'Titehena', bpsCode: '53.06.02' },
                    { name: 'Larantuka', bpsCode: '53.06.03' },
                    { name: 'Ile Mandiri', bpsCode: '53.06.04' },
                    { name: 'Tanjung Bunga', bpsCode: '53.06.05' },
                    { name: 'Solor Barat', bpsCode: '53.06.06' },
                    { name: 'Solor Timur', bpsCode: '53.06.07' },
                    { name: 'Adonara Barat', bpsCode: '53.06.08' },
                    { name: 'Wotan Ulumando', bpsCode: '53.06.09' },
                    { name: 'Adonara Timur', bpsCode: '53.06.10' },
                    { name: 'Kelubagolit', bpsCode: '53.06.11' },
                    { name: 'Witihama', bpsCode: '53.06.12' },
                    { name: 'Ile Boleng', bpsCode: '53.06.13' },
                    { name: 'Demon Pagong', bpsCode: '53.06.14' },
                    { name: 'Lewolema', bpsCode: '53.06.15' },
                    { name: 'Ile Bura', bpsCode: '53.06.16' },
                    { name: 'Adonara', bpsCode: '53.06.17' },
                    { name: 'Adonara Tengah', bpsCode: '53.06.18' },
                    { name: 'Solor Selatan', bpsCode: '53.06.19' }
                ]
            }, {
                name: 'Sikka',
                bpsCode: '53.07',
                districts: [
                    { name: 'Paga', bpsCode: '53.07.01' },
                    { name: 'Mego', bpsCode: '53.07.02' },
                    { name: 'Lela', bpsCode: '53.07.03' },
                    { name: 'Nita', bpsCode: '53.07.04' },
                    { name: 'Alok', bpsCode: '53.07.05' },
                    { name: 'Palue', bpsCode: '53.07.06' },
                    { name: 'Nelle (Maumerei)', bpsCode: '53.07.07' },
                    { name: 'Talibura', bpsCode: '53.07.08' },
                    { name: 'Waigete', bpsCode: '53.07.09' },
                    { name: 'Kewapante', bpsCode: '53.07.10' },
                    { name: 'Bola', bpsCode: '53.07.11' },
                    { name: 'Magepanda', bpsCode: '53.07.12' },
                    { name: 'Waiblama', bpsCode: '53.07.13' },
                    { name: 'Alok Barat', bpsCode: '53.07.14' },
                    { name: 'Alok Timur', bpsCode: '53.07.15' },
                    { name: 'Koting', bpsCode: '53.07.16' },
                    { name: 'Tana Wawo', bpsCode: '53.07.17' },
                    { name: 'Hewokloang', bpsCode: '53.07.18' },
                    { name: 'Kangae', bpsCode: '53.07.19' },
                    { name: 'Doreng', bpsCode: '53.07.20' },
                    { name: 'Mapitara', bpsCode: '53.07.21' }
                ]
            }, {
                name: 'Ende',
                bpsCode: '53.08',
                districts: [
                    { name: 'Nangapanda', bpsCode: '53.08.01' },
                    { name: 'Pulau Ende', bpsCode: '53.08.02' },
                    { name: 'Ende', bpsCode: '53.08.03' },
                    { name: 'Ende Selatan', bpsCode: '53.08.04' },
                    { name: 'Ndona', bpsCode: '53.08.05' },
                    { name: 'Detusoko', bpsCode: '53.08.06' },
                    { name: 'Wewaria', bpsCode: '53.08.07' },
                    { name: 'Wolowaru', bpsCode: '53.08.08' },
                    { name: 'Wolojita', bpsCode: '53.08.09' },
                    { name: 'Maurole', bpsCode: '53.08.10' },
                    { name: 'Maukaro', bpsCode: '53.08.11' },
                    { name: 'Lio Timur', bpsCode: '53.08.12' },
                    { name: 'Kota Baru', bpsCode: '53.08.13' },
                    { name: 'Kelimutu', bpsCode: '53.08.14' },
                    { name: 'Detukeli', bpsCode: '53.08.15' },
                    { name: 'Ndona Timur', bpsCode: '53.08.16' },
                    { name: 'Ndori', bpsCode: '53.08.17' },
                    { name: 'Ende Utara', bpsCode: '53.08.18' },
                    { name: 'Ende Tengah', bpsCode: '53.08.19' },
                    { name: 'Ende Timur', bpsCode: '53.08.20' },
                    { name: 'Lepembusu Kelisoke', bpsCode: '53.08.21' }
                ]
            }, {
                name: 'Ngada',
                bpsCode: '53.09',
                districts: [
                    { name: 'Aimere', bpsCode: '53.09.01' },
                    { name: 'Golewa', bpsCode: '53.09.02' },
                    { name: 'Bajawa', bpsCode: '53.09.06' },
                    { name: 'Soa', bpsCode: '53.09.07' },
                    { name: 'Riung', bpsCode: '53.09.09' },
                    { name: 'Jerebuu', bpsCode: '53.09.12' },
                    { name: 'Riung Barat', bpsCode: '53.09.14' },
                    { name: 'Bajawa Utara', bpsCode: '53.09.15' },
                    { name: 'Wolomeze (Riung Selatan)', bpsCode: '53.09.16' },
                    { name: 'Golewa Selatan', bpsCode: '53.09.18' },
                    { name: 'Golewa Barat', bpsCode: '53.09.19' },
                    { name: 'Inerie', bpsCode: '53.09.20' }
                ]
            }, {
                name: 'Manggarai',
                bpsCode: '53.10',
                districts: [
                    { name: 'Wae Rii', bpsCode: '53.10.01' },
                    { name: 'Ruteng', bpsCode: '53.10.03' },
                    { name: 'Satar Mese', bpsCode: '53.10.05' },
                    { name: 'Cibal', bpsCode: '53.10.06' },
                    { name: 'Reok', bpsCode: '53.10.11' },
                    { name: 'Langke Rembong', bpsCode: '53.10.12' },
                    { name: 'Satar Mese Barat', bpsCode: '53.10.13' },
                    { name: 'Rahong Utara', bpsCode: '53.10.14' },
                    { name: 'Lelak', bpsCode: '53.10.15' },
                    { name: 'Reok Barat', bpsCode: '53.10.16' },
                    { name: 'Cibal Barat', bpsCode: '53.10.17' },
                    { name: 'Satar Mese Utara', bpsCode: '53.10.18' }
                ]
            }, {
                name: 'Sumba Timur',
                bpsCode: '53.11',
                districts: [
                    { name: 'Kota Waingapu', bpsCode: '53.11.01' },
                    { name: 'Haharu', bpsCode: '53.11.02' },
                    { name: 'Lewa', bpsCode: '53.11.03' },
                    { name: 'Nggaha Ori Angu (Nggaha Oriangu)', bpsCode: '53.11.04' },
                    { name: 'Tabundung', bpsCode: '53.11.05' },
                    { name: 'Pinu Pahar (Pinupahar / Pirapahar)', bpsCode: '53.11.06' },
                    { name: 'Pandawai', bpsCode: '53.11.07' },
                    { name: 'Umalulu', bpsCode: '53.11.08' },
                    { name: 'Rindi', bpsCode: '53.11.09' },
                    { name: 'Pahunga Lodu', bpsCode: '53.11.10' },
                    { name: 'Wulla Waijelu (Wula Waijelu)', bpsCode: '53.11.11' },
                    { name: 'Paberiwai', bpsCode: '53.11.12' },
                    { name: 'Karera', bpsCode: '53.11.13' },
                    { name: 'Kahaunguweti (Kahaungu Eti)', bpsCode: '53.11.14' },
                    { name: 'Matawai Lappau (La Pawu)', bpsCode: '53.11.15' },
                    { name: 'Kambera', bpsCode: '53.11.16' },
                    { name: 'Kambata Mapambuhang', bpsCode: '53.11.17' },
                    { name: 'Lewa Tidahu', bpsCode: '53.11.18' },
                    { name: 'Katala Hamu Lingu', bpsCode: '53.11.19' },
                    { name: 'Kanatang', bpsCode: '53.11.20' },
                    { name: 'Ngadu Ngala', bpsCode: '53.11.21' },
                    { name: 'Mahu', bpsCode: '53.11.22' }
                ]
            }, {
                name: 'Sumba Barat',
                bpsCode: '53.12',
                districts: [
                    { name: 'Tana Righu', bpsCode: '53.12.04' },
                    { name: 'Loli', bpsCode: '53.12.10' },
                    { name: 'Wanokaka', bpsCode: '53.12.11' },
                    { name: 'Lamboya', bpsCode: '53.12.12' },
                    { name: 'Kota Waikabubak', bpsCode: '53.12.15' },
                    { name: 'Laboya Barat (Lamboya Barat)', bpsCode: '53.12.18' }
                ]
            }, {
                name: 'Lembata',
                bpsCode: '53.13',
                districts: [
                    { name: 'Naga Wutung', bpsCode: '53.13.01' },
                    { name: 'Atadei', bpsCode: '53.13.02' },
                    { name: 'Ile Ape', bpsCode: '53.13.03' },
                    { name: 'Lebatukan', bpsCode: '53.13.04' },
                    { name: 'Nubatukan', bpsCode: '53.13.05' },
                    { name: 'Omesuri', bpsCode: '53.13.06' },
                    { name: 'Buyasuri', bpsCode: '53.13.07' },
                    { name: 'Wulandoni', bpsCode: '53.13.08' },
                    { name: 'Ile Ape Timur', bpsCode: '53.13.09' }
                ]
            }, {
                name: 'Rote Ndao',
                bpsCode: '53.14',
                districts: [
                    { name: 'Rote Barat Daya', bpsCode: '53.14.01' },
                    { name: 'Rote Barat Laut', bpsCode: '53.14.02' },
                    { name: 'Lobalain', bpsCode: '53.14.03' },
                    { name: 'Rote Tengah', bpsCode: '53.14.04' },
                    { name: 'Pantai Baru', bpsCode: '53.14.05' },
                    { name: 'Rote Timur', bpsCode: '53.14.06' },
                    { name: 'Rote Barat', bpsCode: '53.14.07' },
                    { name: 'Rote Selatan', bpsCode: '53.14.08' },
                    { name: 'Ndao Nuse', bpsCode: '53.14.09' },
                    { name: 'Landu Leko', bpsCode: '53.14.10' }
                ]
            }, {
                name: 'Manggarai Barat',
                bpsCode: '53.15',
                districts: [
                    { name: 'Macang Pacar', bpsCode: '53.15.01' },
                    { name: 'Kuwus', bpsCode: '53.15.02' },
                    { name: 'Lembor', bpsCode: '53.15.03' },
                    { name: 'Sano Nggoang', bpsCode: '53.15.04' },
                    { name: 'Komodo', bpsCode: '53.15.05' },
                    { name: 'Boleng', bpsCode: '53.15.06' },
                    { name: 'Welak', bpsCode: '53.15.07' },
                    { name: 'Ndoso', bpsCode: '53.15.08' },
                    { name: 'Lembor Selatan', bpsCode: '53.15.09' },
                    { name: 'Mbeliling', bpsCode: '53.15.10' },
                    { name: 'Pacar', bpsCode: '53.15.11' },
                    { name: 'Kuwus Barat', bpsCode: '53.15.12' }
                ]
            }, {
                name: 'Nagekeo',
                bpsCode: '53.16',
                districts: [
                    { name: 'Aesesa', bpsCode: '53.16.01' },
                    { name: 'Nangaroro', bpsCode: '53.16.02' },
                    { name: 'Boawae', bpsCode: '53.16.03' },
                    { name: 'Mauponggo', bpsCode: '53.16.04' },
                    { name: 'Wolowae', bpsCode: '53.16.05' },
                    { name: 'Keo Tengah', bpsCode: '53.16.06' },
                    { name: 'Aesesa Selatan', bpsCode: '53.16.07' }
                ]
            }, {
                name: 'Sumba Tengah',
                bpsCode: '53.17',
                districts: [
                    { name: 'Katiku Tana', bpsCode: '53.17.01' },
                    { name: 'Umbu Ratu Nggay Barat', bpsCode: '53.17.02' },
                    { name: 'Mamboro', bpsCode: '53.17.03' },
                    { name: 'Umbu Ratu Nggay', bpsCode: '53.17.04' },
                    { name: 'Katiku Tana Selatan (Katikutana Selatan)', bpsCode: '53.17.05' }
                ]
            }, {
                name: 'Sumba Barat Daya',
                bpsCode: '53.18',
                districts: [
                    { name: 'Loura', bpsCode: '53.18.01' },
                    { name: 'Wewewa Utara', bpsCode: '53.18.02' },
                    { name: 'Wewewa Timur', bpsCode: '53.18.03' },
                    { name: 'Wewewa Barat', bpsCode: '53.18.04' },
                    { name: 'Wewewa Selatan', bpsCode: '53.18.05' },
                    { name: 'Kodi Bangedo', bpsCode: '53.18.06' },
                    { name: 'Kodi', bpsCode: '53.18.07' },
                    { name: 'Kodi Utara', bpsCode: '53.18.08' },
                    { name: 'Kota Tambolaka', bpsCode: '53.18.09' },
                    { name: 'Wewewa Tengah', bpsCode: '53.18.10' },
                    { name: 'Kodi Balaghar', bpsCode: '53.18.11' }
                ]
            }, {
                name: 'Manggarai Timur',
                bpsCode: '53.19',
                districts: [
                    { name: 'Borong', bpsCode: '53.19.01' },
                    { name: 'Poco Ranaka', bpsCode: '53.19.02' },
                    { name: 'Lamba Leda', bpsCode: '53.19.03' },
                    { name: 'Sambi Rampas', bpsCode: '53.19.04' },
                    { name: 'Elar', bpsCode: '53.19.05' },
                    { name: 'Kota Komba', bpsCode: '53.19.06' },
                    { name: 'Rana Mese', bpsCode: '53.19.07' },
                    { name: 'Poco Ranaka Timur', bpsCode: '53.19.08' },
                    { name: 'Elar Selatan', bpsCode: '53.19.09' }
                ]
            }, {
                name: 'Sabu Raijua',
                bpsCode: '53.20',
                districts: [
                    { name: 'Sabu Barat', bpsCode: '53.20.01' },
                    { name: 'Sabu Tengah', bpsCode: '53.20.02' },
                    { name: 'Sabu Timur', bpsCode: '53.20.03' },
                    { name: 'Sabu Liae', bpsCode: '53.20.04' },
                    { name: 'Hawu Mehara', bpsCode: '53.20.05' },
                    { name: 'Raijua', bpsCode: '53.20.06' }
                ]
            }, {
                name: 'Malaka',
                bpsCode: '53.21',
                districts: [
                    { name: 'Malaka Tengah', bpsCode: '53.21.01' },
                    { name: 'Malaka Barat', bpsCode: '53.21.02' },
                    { name: 'Wewiku', bpsCode: '53.21.03' },
                    { name: 'Weliman', bpsCode: '53.21.04' },
                    { name: 'Rinhat', bpsCode: '53.21.05' },
                    { name: 'Io Kufeu', bpsCode: '53.21.06' },
                    { name: 'Sasitamean', bpsCode: '53.21.07' },
                    { name: 'Laenmanen', bpsCode: '53.21.08' },
                    { name: 'Malaka Timur', bpsCode: '53.21.09' },
                    { name: 'Kobalima Timur', bpsCode: '53.21.10' },
                    { name: 'Kobalima', bpsCode: '53.21.11' },
                    { name: 'Botin Leobele', bpsCode: '53.21.12' }
                ]
            }, {
                name: 'Kupang',
                bpsCode: '53.71',
                districts: [
                    { name: 'Alak', bpsCode: '53.71.01' },
                    { name: 'Maulafa', bpsCode: '53.71.02' },
                    { name: 'Kelapa Lima', bpsCode: '53.71.03' },
                    { name: 'Oebobo', bpsCode: '53.71.04' },
                    { name: 'Kota Raja', bpsCode: '53.71.05' },
                    { name: 'Kota Lama', bpsCode: '53.71.06' }
                ]
            }
        ]
    },
    '61': {
        regencies: [
            {
                name: 'Sambas',
                bpsCode: '61.01',
                districts: [
                    { name: 'Sambas', bpsCode: '61.01.01' },
                    { name: 'Teluk Keramat', bpsCode: '61.01.02' },
                    { name: 'Jawai', bpsCode: '61.01.03' },
                    { name: 'Tebas', bpsCode: '61.01.04' },
                    { name: 'Pemangkat', bpsCode: '61.01.05' },
                    { name: 'Sejangkung', bpsCode: '61.01.06' },
                    { name: 'Selakau', bpsCode: '61.01.07' },
                    { name: 'Paloh', bpsCode: '61.01.08' },
                    { name: 'Sajingan Besar', bpsCode: '61.01.09' },
                    { name: 'Subah', bpsCode: '61.01.10' },
                    { name: 'Galing', bpsCode: '61.01.11' },
                    { name: 'Tekarang', bpsCode: '61.01.12' },
                    { name: 'Semparuk', bpsCode: '61.01.13' },
                    { name: 'Sajad', bpsCode: '61.01.14' },
                    { name: 'Sebawi', bpsCode: '61.01.15' },
                    { name: 'Jawai Selatan', bpsCode: '61.01.16' },
                    { name: 'Tangaran', bpsCode: '61.01.17' },
                    { name: 'Salatiga', bpsCode: '61.01.18' },
                    { name: 'Selakau Timur', bpsCode: '61.01.19' }
                ]
            }, {
                name: 'Mempawah',
                bpsCode: '61.02',
                districts: [
                    { name: 'Mempawah Hilir', bpsCode: '61.02.01' },
                    { name: 'Toho', bpsCode: '61.02.06' },
                    { name: 'Sei/Sungai Pinyuh', bpsCode: '61.02.07' },
                    { name: 'Siantan', bpsCode: '61.02.08' },
                    { name: 'Sei/Sungai Kunyit', bpsCode: '61.02.12' },
                    { name: 'Segedong', bpsCode: '61.02.15' },
                    { name: 'Anjongan', bpsCode: '61.02.16' },
                    { name: 'Sadaniang', bpsCode: '61.02.17' },
                    { name: 'Mempawah Timur', bpsCode: '61.02.18' }
                ]
            }, {
                name: 'Sanggau',
                bpsCode: '61.03',
                districts: [
                    { name: 'Kapuas (Sanggau Kapuas)', bpsCode: '61.03.01' },
                    { name: 'Mukok', bpsCode: '61.03.02' },
                    { name: 'Noyan', bpsCode: '61.03.03' },
                    { name: 'Jangkang', bpsCode: '61.03.04' },
                    { name: 'Bonti', bpsCode: '61.03.05' },
                    { name: 'Beduai (Beduwai)', bpsCode: '61.03.06' },
                    { name: 'Sekayam', bpsCode: '61.03.07' },
                    { name: 'Kembayan', bpsCode: '61.03.08' },
                    { name: 'Parindu', bpsCode: '61.03.09' },
                    { name: 'Tayan Hulu', bpsCode: '61.03.10' },
                    { name: 'Tayan Hilir', bpsCode: '61.03.11' },
                    { name: 'Balai', bpsCode: '61.03.12' },
                    { name: 'Toba', bpsCode: '61.03.13' },
                    { name: 'Meliau', bpsCode: '61.03.20' },
                    { name: 'Entikong', bpsCode: '61.03.21' }
                ]
            }, {
                name: 'Ketapang',
                bpsCode: '61.04',
                districts: [
                    { name: 'Matan Hilir Utara', bpsCode: '61.04.01' },
                    { name: 'Marau', bpsCode: '61.04.02' },
                    { name: 'Manis Mata', bpsCode: '61.04.03' },
                    { name: 'Kendawangan', bpsCode: '61.04.04' },
                    { name: 'Sandai', bpsCode: '61.04.05' },
                    { name: 'Sungai Laur', bpsCode: '61.04.07' },
                    { name: 'Simpang Hulu', bpsCode: '61.04.08' },
                    { name: 'Nanga Tayap', bpsCode: '61.04.11' },
                    { name: 'Matan Hilir Selatan', bpsCode: '61.04.12' },
                    { name: 'Tumbang Titi', bpsCode: '61.04.13' },
                    { name: 'Jelai Hulu', bpsCode: '61.04.14' },
                    { name: 'Delta Pawan', bpsCode: '61.04.16' },
                    { name: 'Muara Pawan', bpsCode: '61.04.17' },
                    { name: 'Benua Kayong', bpsCode: '61.04.18' },
                    { name: 'Hulu Sungai', bpsCode: '61.04.19' },
                    { name: 'Simpang Dua', bpsCode: '61.04.20' },
                    { name: 'Air Upas', bpsCode: '61.04.21' },
                    { name: 'Singkup', bpsCode: '61.04.22' },
                    { name: 'Pemahan', bpsCode: '61.04.24' },
                    { name: 'Sungai Melayu Rayak', bpsCode: '61.04.25' }
                ]
            }, {
                name: 'Sintang',
                bpsCode: '61.05',
                districts: [
                    { name: 'Sintang', bpsCode: '61.05.01' },
                    { name: 'Tempunak', bpsCode: '61.05.02' },
                    { name: 'Sepauk', bpsCode: '61.05.03' },
                    { name: 'Ketungau Hilir', bpsCode: '61.05.04' },
                    { name: 'Ketungau Tengah', bpsCode: '61.05.05' },
                    { name: 'Ketungau Hulu', bpsCode: '61.05.06' },
                    { name: 'Dedai', bpsCode: '61.05.07' },
                    { name: 'Kayan Hilir', bpsCode: '61.05.08' },
                    { name: 'Kayan Hulu', bpsCode: '61.05.09' },
                    { name: 'Serawai', bpsCode: '61.05.14' },
                    { name: 'Ambalau', bpsCode: '61.05.15' },
                    { name: 'Kelam Permai', bpsCode: '61.05.19' },
                    { name: 'Sungai Tebelian', bpsCode: '61.05.20' },
                    { name: 'Binjai Hulu', bpsCode: '61.05.21' }
                ]
            }, {
                name: 'Kapuas Hulu',
                bpsCode: '61.06',
                districts: [
                    { name: 'Putussibau Utara', bpsCode: '61.06.01' },
                    { name: 'Bika', bpsCode: '61.06.02' },
                    { name: 'Embaloh Hilir', bpsCode: '61.06.03' },
                    { name: 'Embaloh Hulu', bpsCode: '61.06.04' },
                    { name: 'Bunut Hilir', bpsCode: '61.06.05' },
                    { name: 'Bunut Hulu', bpsCode: '61.06.06' },
                    { name: 'Jongkong (Jengkong)', bpsCode: '61.06.07' },
                    { name: 'Hulu Gurung', bpsCode: '61.06.08' },
                    { name: 'Selimbau', bpsCode: '61.06.09' },
                    { name: 'Semitau', bpsCode: '61.06.10' },
                    { name: 'Seberuang', bpsCode: '61.06.11' },
                    { name: 'Batang Lupar', bpsCode: '61.06.12' },
                    { name: 'Empanang', bpsCode: '61.06.13' },
                    { name: 'Badau', bpsCode: '61.06.14' },
                    { name: 'Silat Hilir', bpsCode: '61.06.15' },
                    { name: 'Silat Hulu', bpsCode: '61.06.16' },
                    { name: 'Putussibau Selatan', bpsCode: '61.06.17' },
                    { name: 'Kalis', bpsCode: '61.06.18' },
                    { name: 'Boyan Tanjung', bpsCode: '61.06.19' },
                    { name: 'Mentebah', bpsCode: '61.06.20' },
                    { name: 'Pengkadan (Batu Datu)', bpsCode: '61.06.21' },
                    { name: 'Suhaid', bpsCode: '61.06.22' },
                    { name: 'Puring Kencana', bpsCode: '61.06.23' }
                ]
            }, {
                name: 'Bengkayang',
                bpsCode: '61.07',
                districts: [
                    { name: 'Sungai Raya', bpsCode: '61.07.01' },
                    { name: 'Samalantan', bpsCode: '61.07.02' },
                    { name: 'Ledo', bpsCode: '61.07.03' },
                    { name: 'Bengkayang', bpsCode: '61.07.04' },
                    { name: 'Seluas', bpsCode: '61.07.05' },
                    { name: 'Sanggau Ledo', bpsCode: '61.07.06' },
                    { name: 'Jagoi Babang', bpsCode: '61.07.07' },
                    { name: 'Monterado', bpsCode: '61.07.08' },
                    { name: 'Teriak', bpsCode: '61.07.09' },
                    { name: 'Suti Semarang', bpsCode: '61.07.10' },
                    { name: 'Capkala', bpsCode: '61.07.11' },
                    { name: 'Siding', bpsCode: '61.07.12' },
                    { name: 'Lumar', bpsCode: '61.07.13' },
                    { name: 'Sungai Betung', bpsCode: '61.07.14' },
                    { name: 'Sungai Raya Kepulauan', bpsCode: '61.07.15' },
                    { name: 'Lembah Bawang', bpsCode: '61.07.16' },
                    { name: 'Tujuh Belas', bpsCode: '61.07.17' }
                ]
            }, {
                name: 'Landak',
                bpsCode: '61.08',
                districts: [
                    { name: 'Ngabang', bpsCode: '61.08.01' },
                    { name: 'Mempawah Hulu', bpsCode: '61.08.02' },
                    { name: 'Menjalin', bpsCode: '61.08.03' },
                    { name: 'Mandor', bpsCode: '61.08.04' },
                    { name: 'Air Besar', bpsCode: '61.08.05' },
                    { name: 'Menyuke', bpsCode: '61.08.06' },
                    { name: 'Sengah Temila', bpsCode: '61.08.07' },
                    { name: 'Meranti', bpsCode: '61.08.08' },
                    { name: 'Kuala Behe', bpsCode: '61.08.09' },
                    { name: 'Sebangki', bpsCode: '61.08.10' },
                    { name: 'Jelimpo', bpsCode: '61.08.11' },
                    { name: 'Banyuke Hulu', bpsCode: '61.08.12' },
                    { name: 'Sompak', bpsCode: '61.08.13' }
                ]
            }, {
                name: 'Sekadau',
                bpsCode: '61.09',
                districts: [
                    { name: 'Sekadau Hilir', bpsCode: '61.09.01' },
                    { name: 'Sekadau Hulu', bpsCode: '61.09.02' },
                    { name: 'Nanga Taman', bpsCode: '61.09.03' },
                    { name: 'Nanga Mahap', bpsCode: '61.09.04' },
                    { name: 'Belitang Hilir', bpsCode: '61.09.05' },
                    { name: 'Belitang Hulu', bpsCode: '61.09.06' },
                    { name: 'Belitang', bpsCode: '61.09.07' }
                ]
            }, {
                name: 'Melawi',
                bpsCode: '61.10',
                districts: [
                    { name: 'Belimbing', bpsCode: '61.10.01' },
                    { name: 'Nanga Pinoh', bpsCode: '61.10.02' },
                    { name: 'Ella Hilir', bpsCode: '61.10.03' },
                    { name: 'Menukung', bpsCode: '61.10.04' },
                    { name: 'Sayan', bpsCode: '61.10.05' },
                    { name: 'Tanah Pinoh', bpsCode: '61.10.06' },
                    { name: 'Sokan', bpsCode: '61.10.07' },
                    { name: 'Pinoh Utara', bpsCode: '61.10.08' },
                    { name: 'Pinoh Selatan', bpsCode: '61.10.09' },
                    { name: 'Belimbing Hulu', bpsCode: '61.10.10' },
                    { name: 'Tanah Pinoh Barat', bpsCode: '61.10.11' }
                ]
            }, {
                name: 'Kayong Utara',
                bpsCode: '61.11',
                districts: [
                    { name: 'Sukadana', bpsCode: '61.11.01' },
                    { name: 'Simpang Hilir', bpsCode: '61.11.02' },
                    { name: 'Teluk Batang', bpsCode: '61.11.03' },
                    { name: 'Pulau Maya (Pulau Maya Karimata)', bpsCode: '61.11.04' },
                    { name: 'Seponti', bpsCode: '61.11.05' },
                    { name: 'Kepulauan Karimata', bpsCode: '61.11.06' }
                ]
            }, {
                name: 'Kubu Raya',
                bpsCode: '61.12',
                districts: [
                    { name: 'Sungai Raya', bpsCode: '61.12.01' },
                    { name: 'Kuala Mandor B', bpsCode: '61.12.02' },
                    { name: 'Sungai Ambawang', bpsCode: '61.12.03' },
                    { name: 'Terentang', bpsCode: '61.12.04' },
                    { name: 'Batu Ampar', bpsCode: '61.12.05' },
                    { name: 'Kubu', bpsCode: '61.12.06' },
                    { name: 'Rasau Jaya', bpsCode: '61.12.07' },
                    { name: 'Teluk Pakedai', bpsCode: '61.12.08' },
                    { name: 'Sungai Kakap', bpsCode: '61.12.09' }
                ]
            }, {
                name: 'Pontianak',
                bpsCode: '61.71',
                districts: [
                    { name: 'Pontianak Selatan', bpsCode: '61.71.01' },
                    { name: 'Pontianak Timur', bpsCode: '61.71.02' },
                    { name: 'Pontianak Barat', bpsCode: '61.71.03' },
                    { name: 'Pontianak Utara', bpsCode: '61.71.04' },
                    { name: 'Pontianak Kota', bpsCode: '61.71.05' },
                    { name: 'Pontianak Tenggara', bpsCode: '61.71.06' }
                ]
            }, {
                name: 'Singkawang',
                bpsCode: '61.72',
                districts: [
                    { name: 'Singkawang Tengah', bpsCode: '61.72.01' },
                    { name: 'Singkawang Barat', bpsCode: '61.72.02' },
                    { name: 'Singkawang Timur', bpsCode: '61.72.03' },
                    { name: 'Singkawang Utara', bpsCode: '61.72.04' },
                    { name: 'Singkawang Selatan', bpsCode: '61.72.05' }
                ]
            }
        ]
    },
    '62': {
        regencies: [
            {
                name: 'Kotawaringin Barat',
                bpsCode: '62.01',
                districts: [
                    { name: 'Kumai', bpsCode: '62.01.01' },
                    { name: 'Arut Selatan', bpsCode: '62.01.02' },
                    { name: 'Kotawaringin Lama', bpsCode: '62.01.03' },
                    { name: 'Arut Utara', bpsCode: '62.01.04' },
                    { name: 'Pangkalan Lada', bpsCode: '62.01.05' },
                    { name: 'Pangkalan Banteng', bpsCode: '62.01.06' }
                ]
            }, {
                name: 'Kotawaringin Timur',
                bpsCode: '62.02',
                districts: [
                    { name: 'Kota Besi', bpsCode: '62.02.01' },
                    { name: 'Cempaga', bpsCode: '62.02.02' },
                    { name: 'Mentaya Hulu', bpsCode: '62.02.03' },
                    { name: 'Parenggean', bpsCode: '62.02.04' },
                    { name: 'Baamang', bpsCode: '62.02.05' },
                    { name: 'Mentawa Baru Ketapang', bpsCode: '62.02.06' },
                    { name: 'Mentaya Hilir Utara', bpsCode: '62.02.07' },
                    { name: 'Mentaya Hilir Selatan', bpsCode: '62.02.08' },
                    { name: 'Pulau Hanaut', bpsCode: '62.02.09' },
                    { name: 'Antang Kalang', bpsCode: '62.02.10' },
                    { name: 'Teluk Sampit', bpsCode: '62.02.11' },
                    { name: 'Seranau', bpsCode: '62.02.12' },
                    { name: 'Cempaga Hulu', bpsCode: '62.02.13' },
                    { name: 'Telawang', bpsCode: '62.02.14' },
                    { name: 'Bukit Santuai (Bukit Santuei)', bpsCode: '62.02.15' },
                    { name: 'Tualan Hulu', bpsCode: '62.02.16' },
                    { name: 'Telaga Antang', bpsCode: '62.02.17' }
                ]
            }, {
                name: 'Kapuas',
                bpsCode: '62.03',
                districts: [
                    { name: 'Selat', bpsCode: '62.03.01' },
                    { name: 'Kapuas Hilir', bpsCode: '62.03.02' },
                    { name: 'Kapuas Timur', bpsCode: '62.03.03' },
                    { name: 'Kapuas Kuala', bpsCode: '62.03.04' },
                    { name: 'Kapuas Barat', bpsCode: '62.03.05' },
                    { name: 'Pulau Petak', bpsCode: '62.03.06' },
                    { name: 'Kapuas Murung', bpsCode: '62.03.07' },
                    { name: 'Basarang', bpsCode: '62.03.08' },
                    { name: 'Mantangai', bpsCode: '62.03.09' },
                    { name: 'Timpah', bpsCode: '62.03.10' },
                    { name: 'Kapuas Tengah', bpsCode: '62.03.11' },
                    { name: 'Kapuas Hulu', bpsCode: '62.03.12' },
                    { name: 'Tamban Catur', bpsCode: '62.03.13' },
                    { name: 'Pasak Talawang', bpsCode: '62.03.14' },
                    { name: 'Mandau Talawang', bpsCode: '62.03.15' },
                    { name: 'Dadahup', bpsCode: '62.03.16' },
                    { name: 'Bataguh', bpsCode: '62.03.17' }
                ]
            }, {
                name: 'Barito Selatan',
                bpsCode: '62.04',
                districts: [
                    { name: 'Jenamas', bpsCode: '62.04.01' },
                    { name: 'Dusun Hilir', bpsCode: '62.04.02' },
                    { name: 'Karau Kuala', bpsCode: '62.04.03' },
                    { name: 'Dusun Utara', bpsCode: '62.04.04' },
                    { name: 'Gunung Bintang Awai', bpsCode: '62.04.05' },
                    { name: 'Dusun Selatan', bpsCode: '62.04.06' }
                ]
            }, {
                name: 'Barito Utara',
                bpsCode: '62.05',
                districts: [
                    { name: 'Montallat (Montalat)', bpsCode: '62.05.01' },
                    { name: 'Gunung Timang', bpsCode: '62.05.02' },
                    { name: 'Gunung Purei', bpsCode: '62.05.03' },
                    { name: 'Teweh Timur', bpsCode: '62.05.04' },
                    { name: 'Teweh Tengah', bpsCode: '62.05.05' },
                    { name: 'Lahei', bpsCode: '62.05.06' },
                    { name: 'Teweh Baru', bpsCode: '62.05.07' },
                    { name: 'Teweh Selatan', bpsCode: '62.05.08' },
                    { name: 'Lahei Barat', bpsCode: '62.05.09' }
                ]
            }, {
                name: 'Katingan',
                bpsCode: '62.06',
                districts: [
                    { name: 'Kamipang', bpsCode: '62.06.01' },
                    { name: 'Katingan Hilir', bpsCode: '62.06.02' },
                    { name: 'Tewang Sangalang / Sanggalang Garing', bpsCode: '62.06.03' },
                    { name: 'Pulau Malan', bpsCode: '62.06.04' },
                    { name: 'Katingan Tengah', bpsCode: '62.06.05' },
                    { name: 'Sanaman Mantikei (Senamang Mantikei)', bpsCode: '62.06.06' },
                    { name: 'Marikit', bpsCode: '62.06.07' },
                    { name: 'Katingan Hulu', bpsCode: '62.06.08' },
                    { name: 'Mendawai', bpsCode: '62.06.09' },
                    { name: 'Katingan Kuala', bpsCode: '62.06.10' },
                    { name: 'Tasik Payawan', bpsCode: '62.06.11' },
                    { name: 'Petak Malai', bpsCode: '62.06.12' },
                    { name: 'Bukit Raya', bpsCode: '62.06.13' }
                ]
            }, {
                name: 'Seruyan',
                bpsCode: '62.07',
                districts: [
                    { name: 'Seruyan Hilir', bpsCode: '62.07.01' },
                    { name: 'Seruyan Tengah', bpsCode: '62.07.02' },
                    { name: 'Danau Sembuluh', bpsCode: '62.07.03' },
                    { name: 'Hanau', bpsCode: '62.07.04' },
                    { name: 'Seruyan Hulu', bpsCode: '62.07.05' },
                    { name: 'Seruyan Hilir Timur', bpsCode: '62.07.06' },
                    { name: 'Seruyan Raya', bpsCode: '62.07.07' },
                    { name: 'Danau Seluluk', bpsCode: '62.07.08' },
                    { name: 'Batu Ampar', bpsCode: '62.07.09' },
                    { name: 'Suling Tambun', bpsCode: '62.07.10' }
                ]
            }, {
                name: 'Sukamara',
                bpsCode: '62.08',
                districts: [
                    { name: 'Sukamara', bpsCode: '62.08.01' },
                    { name: 'Jelai', bpsCode: '62.08.02' },
                    { name: 'Balai Riam', bpsCode: '62.08.03' },
                    { name: 'Pantai Lunci', bpsCode: '62.08.04' },
                    { name: 'Permata Kecubung', bpsCode: '62.08.05' }
                ]
            }, {
                name: 'Lamandau',
                bpsCode: '62.09',
                districts: [
                    { name: 'Lamandau', bpsCode: '62.09.01' },
                    { name: 'Delang', bpsCode: '62.09.02' },
                    { name: 'Bulik', bpsCode: '62.09.03' },
                    { name: 'Bulik Timur', bpsCode: '62.09.04' },
                    { name: 'Menthobi Raya', bpsCode: '62.09.05' },
                    { name: 'Sematu Jaya', bpsCode: '62.09.06' },
                    { name: 'Belantikan Raya', bpsCode: '62.09.07' },
                    { name: 'Batang Kawa', bpsCode: '62.09.08' }
                ]
            }, {
                name: 'Gunung Mas',
                bpsCode: '62.10',
                districts: [
                    { name: 'Sepang (Sepang Simin)', bpsCode: '62.10.01' },
                    { name: 'Kurun', bpsCode: '62.10.02' },
                    { name: 'Tewah', bpsCode: '62.10.03' },
                    { name: 'Kahayan Hulu Utara', bpsCode: '62.10.04' },
                    { name: 'Rungan', bpsCode: '62.10.05' },
                    { name: 'Manuhing', bpsCode: '62.10.06' },
                    { name: 'Mihing Raya', bpsCode: '62.10.07' },
                    { name: 'Damang Batu', bpsCode: '62.10.08' },
                    { name: 'Miri Manasa', bpsCode: '62.10.09' },
                    { name: 'Rungan Hulu', bpsCode: '62.10.10' },
                    { name: 'Mahuning Raya (Manuhing Raya)', bpsCode: '62.10.11' },
                    { name: 'Rungan Barat', bpsCode: '62.10.12' }
                ]
            }, {
                name: 'Pulang Pisau',
                bpsCode: '62.11',
                districts: [
                    { name: 'Pandih Batu', bpsCode: '62.11.01' },
                    { name: 'Kahayan Kuala', bpsCode: '62.11.02' },
                    { name: 'Kahayan Tengah', bpsCode: '62.11.03' },
                    { name: 'Banama Tingang', bpsCode: '62.11.04' },
                    { name: 'Kahayan Hilir', bpsCode: '62.11.05' },
                    { name: 'Maliku', bpsCode: '62.11.06' },
                    { name: 'Jabiren (Jabiren Raya)', bpsCode: '62.11.07' },
                    { name: 'Sebangau Kuala', bpsCode: '62.11.08' }
                ]
            }, {
                name: 'Murung Raya',
                bpsCode: '62.12',
                districts: [
                    { name: 'Murung', bpsCode: '62.12.01' },
                    { name: 'Tanah Siang', bpsCode: '62.12.02' },
                    { name: 'Laung Tuhup', bpsCode: '62.12.03' },
                    { name: 'Permata Intan', bpsCode: '62.12.04' },
                    { name: 'Sumber Barito', bpsCode: '62.12.05' },
                    { name: 'Barito Tuhup Raya', bpsCode: '62.12.06' },
                    { name: 'Tanah Siang Selatan', bpsCode: '62.12.07' },
                    { name: 'Sungai Babuat', bpsCode: '62.12.08' },
                    { name: 'Seribu Riam', bpsCode: '62.12.09' },
                    { name: 'Uut Murung', bpsCode: '62.12.10' }
                ]
            }, {
                name: 'Barito Timur',
                bpsCode: '62.13',
                districts: [
                    { name: 'Dusun Timur', bpsCode: '62.13.01' },
                    { name: 'Banua Lima', bpsCode: '62.13.02' },
                    { name: 'Patangkep Tutui', bpsCode: '62.13.03' },
                    { name: 'Awang', bpsCode: '62.13.04' },
                    { name: 'Dusun Tengah', bpsCode: '62.13.05' },
                    { name: 'Pematang Karau', bpsCode: '62.13.06' },
                    { name: 'Paju Epat', bpsCode: '62.13.07' },
                    { name: 'Raren Batuah', bpsCode: '62.13.08' },
                    { name: 'Paku', bpsCode: '62.13.09' },
                    { name: 'Karusen Janang', bpsCode: '62.13.10' }
                ]
            }, {
                name: 'Palangka Raya',
                bpsCode: '62.71',
                districts: [
                    { name: 'Pahandut', bpsCode: '62.71.01' },
                    { name: 'Bukit Batu', bpsCode: '62.71.02' },
                    { name: 'Jekan Raya', bpsCode: '62.71.03' },
                    { name: 'Sabangau (Sebangau)', bpsCode: '62.71.04' },
                    { name: 'Rakumpit', bpsCode: '62.71.05' }
                ]
            }
        ]
    },
    '63': {
        regencies: [
            {
                name: 'Tanah Laut',
                bpsCode: '63.01',
                districts: [
                    { name: 'Takisung', bpsCode: '63.01.01' },
                    { name: 'Jorong', bpsCode: '63.01.02' },
                    { name: 'Pelaihari', bpsCode: '63.01.03' },
                    { name: 'Kurau', bpsCode: '63.01.04' },
                    { name: 'Bati-Bati', bpsCode: '63.01.05' },
                    { name: 'Panyipatan', bpsCode: '63.01.06' },
                    { name: 'Kintap', bpsCode: '63.01.07' },
                    { name: 'Tambang Ulang', bpsCode: '63.01.08' },
                    { name: 'Batu Ampar', bpsCode: '63.01.09' },
                    { name: 'Bajuin', bpsCode: '63.01.10' },
                    { name: 'Bumi Makmur', bpsCode: '63.01.11' }
                ]
            }, {
                name: 'Kotabaru',
                bpsCode: '63.02',
                districts: [
                    { name: 'Pulau Sembilan (Pulausembilan)', bpsCode: '63.02.01' },
                    { name: 'Pulau Laut / Pulaulaut Barat', bpsCode: '63.02.02' },
                    { name: 'Pulau Laut / Pulaulaut Selatan', bpsCode: '63.02.03' },
                    { name: 'Pulau Laut / Pulaulaut Timur', bpsCode: '63.02.04' },
                    { name: 'Pulau Sebuku (Pulausebuku)', bpsCode: '63.02.05' },
                    { name: 'Pulau Laut / Pulaulaut Utara', bpsCode: '63.02.06' },
                    { name: 'Kelumpang Selatan', bpsCode: '63.02.07' },
                    { name: 'Kelumpang Hulu', bpsCode: '63.02.08' },
                    { name: 'Kelumpang Tengah', bpsCode: '63.02.09' },
                    { name: 'Kelumpang Utara', bpsCode: '63.02.10' },
                    { name: 'Pamukan Selatan', bpsCode: '63.02.11' },
                    { name: 'Sampanahan', bpsCode: '63.02.12' },
                    { name: 'Pamukan Utara', bpsCode: '63.02.13' },
                    { name: 'Hampang', bpsCode: '63.02.14' },
                    { name: 'Sungai Durian (Sungaidurian)', bpsCode: '63.02.15' },
                    { name: 'Pulau Laut / Pulaulaut Tengah', bpsCode: '63.02.16' },
                    { name: 'Kelumpang Hilir', bpsCode: '63.02.17' },
                    { name: 'Kelumpang Barat', bpsCode: '63.02.18' },
                    { name: 'Pamukan Barat', bpsCode: '63.02.19' },
                    { name: 'Pulau Laut / Pulaulaut Kepulauan', bpsCode: '63.02.20' },
                    { name: 'Pulau Laut / Pulaulaut Tanjung Selayar', bpsCode: '63.02.21' }
                ]
            }, {
                name: 'Banjar',
                bpsCode: '63.03',
                districts: [
                    { name: 'Aluh-Aluh', bpsCode: '63.03.01' },
                    { name: 'Kertak Hanyar', bpsCode: '63.03.02' },
                    { name: 'Gambut', bpsCode: '63.03.03' },
                    { name: 'Sei/Sungai Tabuk', bpsCode: '63.03.04' },
                    { name: 'Martapura (Martapura Kota)', bpsCode: '63.03.05' },
                    { name: 'Karang Intan', bpsCode: '63.03.06' },
                    { name: 'Astambul', bpsCode: '63.03.07' },
                    { name: 'Simpang Empat', bpsCode: '63.03.08' },
                    { name: 'Pengarom (Pengaron)', bpsCode: '63.03.09' },
                    { name: 'Sei/Sungai Pinang', bpsCode: '63.03.10' },
                    { name: 'Aranio', bpsCode: '63.03.11' },
                    { name: 'Mataraman', bpsCode: '63.03.12' },
                    { name: 'Beruntung Baru', bpsCode: '63.03.13' },
                    { name: 'Martapura Barat', bpsCode: '63.03.14' },
                    { name: 'Martapura Timur', bpsCode: '63.03.15' },
                    { name: 'Sambung Makmur', bpsCode: '63.03.16' },
                    { name: 'Paramasan (Peramasan)', bpsCode: '63.03.17' },
                    { name: 'Telaga Bauntung', bpsCode: '63.03.18' },
                    { name: 'Tatah Makmur', bpsCode: '63.03.19' },
                    { name: 'Cintapuri Darussalam', bpsCode: '63.03.20' }
                ]
            }, {
                name: 'Barito Kuala',
                bpsCode: '63.04',
                districts: [
                    { name: 'Tabunganen', bpsCode: '63.04.01' },
                    { name: 'Tamban', bpsCode: '63.04.02' },
                    { name: 'Anjir Pasar', bpsCode: '63.04.03' },
                    { name: 'Anjir Muara', bpsCode: '63.04.04' },
                    { name: 'Alalak', bpsCode: '63.04.05' },
                    { name: 'Mandastana', bpsCode: '63.04.06' },
                    { name: 'Rantau Badauh', bpsCode: '63.04.07' },
                    { name: 'Belawang', bpsCode: '63.04.08' },
                    { name: 'Cerbon', bpsCode: '63.04.09' },
                    { name: 'Bakumpai', bpsCode: '63.04.10' },
                    { name: 'Kuripan', bpsCode: '63.04.11' },
                    { name: 'Tabukan', bpsCode: '63.04.12' },
                    { name: 'Mekarsari (Mekar Sari)', bpsCode: '63.04.13' },
                    { name: 'Barambai', bpsCode: '63.04.14' },
                    { name: 'Marabahan', bpsCode: '63.04.15' },
                    { name: 'Wanaraya', bpsCode: '63.04.16' },
                    { name: 'Jejangkit', bpsCode: '63.04.17' }
                ]
            }, {
                name: 'Tapin',
                bpsCode: '63.05',
                districts: [
                    { name: 'Binuang', bpsCode: '63.05.01' },
                    { name: 'Tapin Selatan', bpsCode: '63.05.02' },
                    { name: 'Tapin Tengah', bpsCode: '63.05.03' },
                    { name: 'Tapin Utara', bpsCode: '63.05.04' },
                    { name: 'Candi Laras Selatan', bpsCode: '63.05.05' },
                    { name: 'Candi Laras Utara', bpsCode: '63.05.06' },
                    { name: 'Bakarangan', bpsCode: '63.05.07' },
                    { name: 'Piani', bpsCode: '63.05.08' },
                    { name: 'Bungur', bpsCode: '63.05.09' },
                    { name: 'Lokpaikat', bpsCode: '63.05.10' },
                    { name: 'Salam Babaris', bpsCode: '63.05.11' },
                    { name: 'Hatungun', bpsCode: '63.05.12' }
                ]
            }, {
                name: 'Hulu Sungai Selatan',
                bpsCode: '63.06',
                districts: [
                    { name: 'Sungai Raya', bpsCode: '63.06.01' },
                    { name: 'Padang Batung', bpsCode: '63.06.02' },
                    { name: 'Telaga Langsat', bpsCode: '63.06.03' },
                    { name: 'Angkinang', bpsCode: '63.06.04' },
                    { name: 'Kandangan', bpsCode: '63.06.05' },
                    { name: 'Simpur', bpsCode: '63.06.06' },
                    { name: 'Daha Selatan', bpsCode: '63.06.07' },
                    { name: 'Daha Utara', bpsCode: '63.06.08' },
                    { name: 'Kalumpang (Kelumpang)', bpsCode: '63.06.09' },
                    { name: 'Loksado', bpsCode: '63.06.10' },
                    { name: 'Daha Barat', bpsCode: '63.06.11' }
                ]
            }, {
                name: 'Hulu Sungai Tengah',
                bpsCode: '63.07',
                districts: [
                    { name: 'Haruyan', bpsCode: '63.07.01' },
                    { name: 'Batu Benawa', bpsCode: '63.07.02' },
                    { name: 'Labuan Amas Selatan', bpsCode: '63.07.03' },
                    { name: 'Labuan Amas Utara', bpsCode: '63.07.04' },
                    { name: 'Pandawan', bpsCode: '63.07.05' },
                    { name: 'Barabai', bpsCode: '63.07.06' },
                    { name: 'Batang Alai Selatan', bpsCode: '63.07.07' },
                    { name: 'Batang Alai Utara', bpsCode: '63.07.08' },
                    { name: 'Hantakan', bpsCode: '63.07.09' },
                    { name: 'Batang Alai Timur', bpsCode: '63.07.10' },
                    { name: 'Limpasu', bpsCode: '63.07.11' }
                ]
            }, {
                name: 'Hulu Sungai Utara',
                bpsCode: '63.08',
                districts: [
                    { name: 'Danau Panggang', bpsCode: '63.08.01' },
                    { name: 'Babirik', bpsCode: '63.08.02' },
                    { name: 'Sungai Pandan', bpsCode: '63.08.03' },
                    { name: 'Amuntai Selatan', bpsCode: '63.08.04' },
                    { name: 'Amuntai Tengah', bpsCode: '63.08.05' },
                    { name: 'Amuntai Utara', bpsCode: '63.08.06' },
                    { name: 'Banjang', bpsCode: '63.08.07' },
                    { name: 'Haur Gading', bpsCode: '63.08.08' },
                    { name: 'Paminggir', bpsCode: '63.08.09' },
                    { name: 'Sungai Tabukan', bpsCode: '63.08.10' }
                ]
            }, {
                name: 'Tabalong',
                bpsCode: '63.09',
                districts: [
                    { name: 'Banua Lawas', bpsCode: '63.09.01' },
                    { name: 'Kelua (Klua)', bpsCode: '63.09.02' },
                    { name: 'Tanta', bpsCode: '63.09.03' },
                    { name: 'Tanjung', bpsCode: '63.09.04' },
                    { name: 'Haruai', bpsCode: '63.09.05' },
                    { name: 'Murung Pudak', bpsCode: '63.09.06' },
                    { name: 'Muara Uya', bpsCode: '63.09.07' },
                    { name: 'Muara Harus', bpsCode: '63.09.08' },
                    { name: 'Pugaan', bpsCode: '63.09.09' },
                    { name: 'Upau', bpsCode: '63.09.10' },
                    { name: 'Jaro', bpsCode: '63.09.11' },
                    { name: 'Bintang Ara', bpsCode: '63.09.12' }
                ]
            }, {
                name: 'Tanah Bumbu',
                bpsCode: '63.10',
                districts: [
                    { name: 'Batu Licin (Batulicin)', bpsCode: '63.10.01' },
                    { name: 'Kusan Hilir', bpsCode: '63.10.02' },
                    { name: 'Sungai Loban', bpsCode: '63.10.03' },
                    { name: 'Satui', bpsCode: '63.10.04' },
                    { name: 'Kusan Hulu', bpsCode: '63.10.05' },
                    { name: 'Simpang Empat', bpsCode: '63.10.06' },
                    { name: 'Karang Bintang', bpsCode: '63.10.07' },
                    { name: 'Mantewe', bpsCode: '63.10.08' },
                    { name: 'Angsana', bpsCode: '63.10.09' },
                    { name: 'Kuranji', bpsCode: '63.10.10' }
                ]
            }, {
                name: 'Balangan',
                bpsCode: '63.11',
                districts: [
                    { name: 'Juai', bpsCode: '63.11.01' },
                    { name: 'Halong', bpsCode: '63.11.02' },
                    { name: 'Awayan', bpsCode: '63.11.03' },
                    { name: 'Batu Mandi', bpsCode: '63.11.04' },
                    { name: 'Lampihong', bpsCode: '63.11.05' },
                    { name: 'Paringin', bpsCode: '63.11.06' },
                    { name: 'Paringin Selatan', bpsCode: '63.11.07' },
                    { name: 'Tebing Tinggi', bpsCode: '63.11.08' }
                ]
            }, {
                name: 'Banjarmasin',
                bpsCode: '63.71',
                districts: [
                    { name: 'Banjarmasin Selatan', bpsCode: '63.71.01' },
                    { name: 'Banjarmasin Timur', bpsCode: '63.71.02' },
                    { name: 'Banjarmasin Barat', bpsCode: '63.71.03' },
                    { name: 'Banjarmasin Utara', bpsCode: '63.71.04' },
                    { name: 'Banjarmasin Tengah', bpsCode: '63.71.05' }
                ]
            }, {
                name: 'Banjarbaru',
                bpsCode: '63.72',
                districts: [
                    { name: 'Landasan Ulin', bpsCode: '63.72.02' },
                    { name: 'Cempaka', bpsCode: '63.72.03' },
                    { name: 'Banjarbaru Utara (Banjar Baru Utara)', bpsCode: '63.72.04' },
                    { name: 'Banjarbaru Selatan (Banjar Baru Selatan)', bpsCode: '63.72.05' },
                    { name: 'Liang Anggang', bpsCode: '63.72.06' }
                ]
            }
        ]
    },
    '64': {
        regencies: [
            {
                name: 'Paser',
                bpsCode: '64.01',
                districts: [
                    { name: 'Batu Sopang', bpsCode: '64.01.01' },
                    { name: 'Tanjung Harapan', bpsCode: '64.01.02' },
                    { name: 'Paser Belengkong (Pasir Belengkong)', bpsCode: '64.01.03' },
                    { name: 'Tanah Grogot', bpsCode: '64.01.04' },
                    { name: 'Kuaro', bpsCode: '64.01.05' },
                    { name: 'Long Ikis', bpsCode: '64.01.06' },
                    { name: 'Muara Komam', bpsCode: '64.01.07' },
                    { name: 'Long Kali', bpsCode: '64.01.08' },
                    { name: 'Batu Engau', bpsCode: '64.01.09' },
                    { name: 'Muara Samu', bpsCode: '64.01.10' }
                ]
            }, {
                name: 'Kutai Kartanegara',
                bpsCode: '64.02',
                districts: [
                    { name: 'Muara Muntai', bpsCode: '64.02.01' },
                    { name: 'Loa Kulu', bpsCode: '64.02.02' },
                    { name: 'Loa Janan', bpsCode: '64.02.03' },
                    { name: 'Anggana', bpsCode: '64.02.04' },
                    { name: 'Muara Badak', bpsCode: '64.02.05' },
                    { name: 'Tenggarong', bpsCode: '64.02.06' },
                    { name: 'Sebulu', bpsCode: '64.02.07' },
                    { name: 'Kota Bangun', bpsCode: '64.02.08' },
                    { name: 'Kenohan', bpsCode: '64.02.09' },
                    { name: 'Kembang Janggut', bpsCode: '64.02.10' },
                    { name: 'Muara Kaman', bpsCode: '64.02.11' },
                    { name: 'Tabang', bpsCode: '64.02.12' },
                    { name: 'Samboja (Semboja)', bpsCode: '64.02.13' },
                    { name: 'Muara Jawa', bpsCode: '64.02.14' },
                    { name: 'Sanga-Sanga', bpsCode: '64.02.15' },
                    { name: 'Tenggarong Seberang', bpsCode: '64.02.16' },
                    { name: 'Marang Kayu', bpsCode: '64.02.17' },
                    { name: 'Muara Wis', bpsCode: '64.02.18' }
                ]
            }, {
                name: 'Berau',
                bpsCode: '64.03',
                districts: [
                    { name: 'Kelay', bpsCode: '64.03.01' },
                    { name: 'Talisayan', bpsCode: '64.03.02' },
                    { name: 'Sambaliung', bpsCode: '64.03.03' },
                    { name: 'Segah', bpsCode: '64.03.04' },
                    { name: 'Tanjung Redeb', bpsCode: '64.03.05' },
                    { name: 'Gunung Tabur', bpsCode: '64.03.06' },
                    { name: 'Pulau Derawan', bpsCode: '64.03.07' },
                    { name: 'Biduk-Biduk', bpsCode: '64.03.08' },
                    { name: 'Teluk Bayur', bpsCode: '64.03.09' },
                    { name: 'Tabalar', bpsCode: '64.03.10' },
                    { name: 'Maratua', bpsCode: '64.03.11' },
                    { name: 'Batu Putih', bpsCode: '64.03.12' },
                    { name: 'Biatan', bpsCode: '64.03.13' }
                ]
            }, {
                name: 'Kutai Barat',
                bpsCode: '64.07',
                districts: [
                    { name: 'Long Iram', bpsCode: '64.07.05' },
                    { name: 'Melak', bpsCode: '64.07.06' },
                    { name: 'Barong Tongkok', bpsCode: '64.07.07' },
                    { name: 'Damai', bpsCode: '64.07.08' },
                    { name: 'Muara Lawa', bpsCode: '64.07.09' },
                    { name: 'Muara Pahu', bpsCode: '64.07.10' },
                    { name: 'Jempang', bpsCode: '64.07.11' },
                    { name: 'Bongan', bpsCode: '64.07.12' },
                    { name: 'Penyinggahan', bpsCode: '64.07.13' },
                    { name: 'Bentian Besar', bpsCode: '64.07.14' },
                    { name: 'Linggang Bigung', bpsCode: '64.07.15' },
                    { name: 'Nyuatan', bpsCode: '64.07.16' },
                    { name: 'Siluq Ngurai', bpsCode: '64.07.17' },
                    { name: 'Mook Manaar Bulatn', bpsCode: '64.07.18' },
                    { name: 'Tering', bpsCode: '64.07.19' },
                    { name: 'Sekolaq Darat', bpsCode: '64.07.20' }
                ]
            }, {
                name: 'Kutai Timur',
                bpsCode: '64.08',
                districts: [
                    { name: 'Muara Ancalong', bpsCode: '64.08.01' },
                    { name: 'Muara Wahau', bpsCode: '64.08.02' },
                    { name: 'Muara Bengkal', bpsCode: '64.08.03' },
                    { name: 'Sangatta Utara', bpsCode: '64.08.04' },
                    { name: 'Sangkulirang', bpsCode: '64.08.05' },
                    { name: 'Busang', bpsCode: '64.08.06' },
                    { name: 'Telen', bpsCode: '64.08.07' },
                    { name: 'Kombeng (Kongbeng)', bpsCode: '64.08.08' },
                    { name: 'Bengalon', bpsCode: '64.08.09' },
                    { name: 'Kaliorang', bpsCode: '64.08.10' },
                    { name: 'Sandaran', bpsCode: '64.08.11' },
                    { name: 'Sangatta Selatan', bpsCode: '64.08.12' },
                    { name: 'Teluk Pandan', bpsCode: '64.08.13' },
                    { name: 'Rantau Pulung', bpsCode: '64.08.14' },
                    { name: 'Kaubun', bpsCode: '64.08.15' },
                    { name: 'Karangan', bpsCode: '64.08.16' },
                    { name: 'Batu Ampar', bpsCode: '64.08.17' },
                    { name: 'Long Mesangat', bpsCode: '64.08.18' }
                ]
            }, {
                name: 'Penajam Paser Utara',
                bpsCode: '64.09',
                districts: [
                    { name: 'Penajam', bpsCode: '64.09.01' },
                    { name: 'Waru', bpsCode: '64.09.02' },
                    { name: 'Babulu', bpsCode: '64.09.03' },
                    { name: 'Sepaku', bpsCode: '64.09.04' }
                ]
            }, {
                name: 'Mahakam Ulu',
                bpsCode: '64.11',
                districts: [
                    { name: 'Long Bagun', bpsCode: '64.11.01' },
                    { name: 'Long Hubung', bpsCode: '64.11.02' },
                    { name: 'Laham', bpsCode: '64.11.03' },
                    { name: 'Long Apari', bpsCode: '64.11.04' },
                    { name: 'Long Pahangai', bpsCode: '64.11.05' }
                ]
            }, {
                name: 'Balikpapan',
                bpsCode: '64.71',
                districts: [
                    { name: 'Balikpapan Timur', bpsCode: '64.71.01' },
                    { name: 'Balikpapan Barat', bpsCode: '64.71.02' },
                    { name: 'Balikpapan Utara', bpsCode: '64.71.03' },
                    { name: 'Balikpapan Tengah', bpsCode: '64.71.04' },
                    { name: 'Balikpapan Selatan', bpsCode: '64.71.05' },
                    { name: 'Balikpapan Kota', bpsCode: '64.71.06' }
                ]
            }, {
                name: 'Samarinda',
                bpsCode: '64.72',
                districts: [
                    { name: 'Palaran', bpsCode: '64.72.01' },
                    { name: 'Samarinda Seberang', bpsCode: '64.72.02' },
                    { name: 'Samarinda Ulu', bpsCode: '64.72.03' },
                    { name: 'Samarinda Ilir', bpsCode: '64.72.04' },
                    { name: 'Samarinda Utara', bpsCode: '64.72.05' },
                    { name: 'Sungai Kunjang', bpsCode: '64.72.06' },
                    { name: 'Sambutan', bpsCode: '64.72.07' },
                    { name: 'Sungai Pinang', bpsCode: '64.72.08' },
                    { name: 'Samarinda Kota', bpsCode: '64.72.09' },
                    { name: 'Loa Janan Ilir', bpsCode: '64.72.10' }
                ]
            }, {
                name: 'Bontang',
                bpsCode: '64.74',
                districts: [
                    { name: 'Bontang Utara', bpsCode: '64.74.01' },
                    { name: 'Bontang Selatan', bpsCode: '64.74.02' },
                    { name: 'Bontang Barat', bpsCode: '64.74.03' }
                ]
            }
        ]
    },
    '65': {
        regencies: [
            {
                name: 'Bulungan',
                bpsCode: '65.01',
                districts: [
                    { name: 'Tanjung Palas', bpsCode: '65.01.01' },
                    { name: 'Tanjung Palas Barat', bpsCode: '65.01.02' },
                    { name: 'Tanjung Palas Utara', bpsCode: '65.01.03' },
                    { name: 'Tanjung Palas Timur', bpsCode: '65.01.04' },
                    { name: 'Tanjung Selor', bpsCode: '65.01.05' },
                    { name: 'Tanjung Palas Tengah', bpsCode: '65.01.06' },
                    { name: 'Peso', bpsCode: '65.01.07' },
                    { name: 'Peso Hilir/Ilir', bpsCode: '65.01.08' },
                    { name: 'Sekatak', bpsCode: '65.01.09' },
                    { name: 'Bunyu (Pulau Bunyu)', bpsCode: '65.01.10' }
                ]
            }, {
                name: 'Malinau',
                bpsCode: '65.02',
                districts: [
                    { name: 'Mentarang', bpsCode: '65.02.01' },
                    { name: 'Malinau Kota', bpsCode: '65.02.02' },
                    { name: 'Pujungan', bpsCode: '65.02.03' },
                    { name: 'Kayan Hilir', bpsCode: '65.02.04' },
                    { name: 'Kayan Hulu', bpsCode: '65.02.05' },
                    { name: 'Malinau Selatan', bpsCode: '65.02.06' },
                    { name: 'Malinau Utara', bpsCode: '65.02.07' },
                    { name: 'Malinau Barat', bpsCode: '65.02.08' },
                    { name: 'Sungai Boh', bpsCode: '65.02.09' },
                    { name: 'Kayan Selatan', bpsCode: '65.02.10' },
                    { name: 'Bahau Hulu', bpsCode: '65.02.11' },
                    { name: 'Mentarang Hulu', bpsCode: '65.02.12' },
                    { name: 'Malinau Selatan Hilir', bpsCode: '65.02.13' },
                    { name: 'Malinau Selatan Hulu', bpsCode: '65.02.14' },
                    { name: 'Sungai Tubu', bpsCode: '65.02.15' }
                ]
            }, {
                name: 'Nunukan',
                bpsCode: '65.03',
                districts: [
                    { name: 'Sebatik', bpsCode: '65.03.01' },
                    { name: 'Nunukan', bpsCode: '65.03.02' },
                    { name: 'Sembakung', bpsCode: '65.03.03' },
                    { name: 'Lumbis', bpsCode: '65.03.04' },
                    { name: 'Krayan', bpsCode: '65.03.05' },
                    { name: 'Sebuku', bpsCode: '65.03.06' },
                    { name: 'Krayan Selatan', bpsCode: '65.03.07' },
                    { name: 'Sebatik Barat', bpsCode: '65.03.08' },
                    { name: 'Nunukan Selatan', bpsCode: '65.03.09' },
                    { name: 'Sebatik Timur', bpsCode: '65.03.10' },
                    { name: 'Sebatik Utara', bpsCode: '65.03.11' },
                    { name: 'Sebatik Tengah', bpsCode: '65.03.12' },
                    { name: 'Sei Menggaris', bpsCode: '65.03.13' },
                    { name: 'Tulin Onsoi', bpsCode: '65.03.14' },
                    { name: 'Lumbis Ogong', bpsCode: '65.03.15' },
                    { name: 'Sembakung Atulai', bpsCode: '65.03.16' },
                    { name: 'Krayan Tengah', bpsCode: '65.03.17' },
                    { name: 'Krayan Timur', bpsCode: '65.03.18' },
                    { name: 'Krayan Barat', bpsCode: '65.03.19' }
                ]
            }, {
                name: 'Tana Tidung',
                bpsCode: '65.04',
                districts: [
                    { name: 'Sesayap', bpsCode: '65.04.01' },
                    { name: 'Sesayap Hilir', bpsCode: '65.04.02' },
                    { name: 'Tana Lia', bpsCode: '65.04.03' },
                    { name: 'Betayau', bpsCode: '65.04.04' },
                    { name: 'Muruk Rian', bpsCode: '65.04.05' }
                ]
            }, {
                name: 'Tarakan',
                bpsCode: '65.71',
                districts: [
                    { name: 'Tarakan Barat', bpsCode: '65.71.01' },
                    { name: 'Tarakan Tengah', bpsCode: '65.71.02' },
                    { name: 'Tarakan Timur', bpsCode: '65.71.03' },
                    { name: 'Tarakan Utara', bpsCode: '65.71.04' }
                ]
            }
        ]
    },
    '71': {
        regencies: [
            {
                name: 'Bolaang Mongondow',
                bpsCode: '71.01',
                districts: [
                    { name: 'Sang Tombolang', bpsCode: '71.01.05' },
                    { name: 'Dumoga Barat', bpsCode: '71.01.09' },
                    { name: 'Dumoga Timur', bpsCode: '71.01.10' },
                    { name: 'Dumoga Utara', bpsCode: '71.01.11' },
                    { name: 'Lolak', bpsCode: '71.01.12' },
                    { name: 'Bolaang', bpsCode: '71.01.13' },
                    { name: 'Lolayan', bpsCode: '71.01.14' },
                    { name: 'Passi Barat', bpsCode: '71.01.19' },
                    { name: 'Poigar', bpsCode: '71.01.20' },
                    { name: 'Passi Timur', bpsCode: '71.01.22' },
                    { name: 'Bolaang Timur', bpsCode: '71.01.31' },
                    { name: 'Bilalang', bpsCode: '71.01.32' },
                    { name: 'Dumoga', bpsCode: '71.01.33' },
                    { name: 'Dumoga Tenggara', bpsCode: '71.01.34' },
                    { name: 'Dumoga Tengah', bpsCode: '71.01.35' }
                ]
            }, {
                name: 'Minahasa',
                bpsCode: '71.02',
                districts: [
                    { name: 'Tondano Barat', bpsCode: '71.02.01' },
                    { name: 'Tondano Timur', bpsCode: '71.02.02' },
                    { name: 'Eris', bpsCode: '71.02.03' },
                    { name: 'Kombi', bpsCode: '71.02.04' },
                    { name: 'Lembean Timur', bpsCode: '71.02.05' },
                    { name: 'Kakas', bpsCode: '71.02.06' },
                    { name: 'Tompaso', bpsCode: '71.02.07' },
                    { name: 'Remboken', bpsCode: '71.02.08' },
                    { name: 'Langowan Timur', bpsCode: '71.02.09' },
                    { name: 'Langowan Barat', bpsCode: '71.02.10' },
                    { name: 'Sonder', bpsCode: '71.02.11' },
                    { name: 'Kawangkoan', bpsCode: '71.02.12' },
                    { name: 'Pineleng', bpsCode: '71.02.13' },
                    { name: 'Tombulu', bpsCode: '71.02.14' },
                    { name: 'Tombariri', bpsCode: '71.02.15' },
                    { name: 'Tondano Utara', bpsCode: '71.02.16' },
                    { name: 'Langowan Selatan', bpsCode: '71.02.17' },
                    { name: 'Tondano Selatan', bpsCode: '71.02.18' },
                    { name: 'Langowan Utara', bpsCode: '71.02.19' },
                    { name: 'Kakas Barat', bpsCode: '71.02.20' },
                    { name: 'Kawangkoan Utara', bpsCode: '71.02.21' },
                    { name: 'Kawangkoan Barat', bpsCode: '71.02.22' },
                    { name: 'Mandolang', bpsCode: '71.02.23' },
                    { name: 'Tombariri Timur', bpsCode: '71.02.24' },
                    { name: 'Tompaso Barat', bpsCode: '71.02.25' }
                ]
            }, {
                name: 'Kepulauan Sangihe',
                bpsCode: '71.03',
                districts: [
                    { name: 'Tabukan Utara', bpsCode: '71.03.08' },
                    { name: 'Nusa Tabukan', bpsCode: '71.03.09' },
                    { name: 'Manganitu Selatan', bpsCode: '71.03.10' },
                    { name: 'Tatoareng', bpsCode: '71.03.11' },
                    { name: 'Tamako', bpsCode: '71.03.12' },
                    { name: 'Manganitu', bpsCode: '71.03.13' },
                    { name: 'Tabukan Tengah', bpsCode: '71.03.14' },
                    { name: 'Tabukan Selatan', bpsCode: '71.03.15' },
                    { name: 'Kendahe', bpsCode: '71.03.16' },
                    { name: 'Tahuna', bpsCode: '71.03.17' },
                    { name: 'Tabukan Selatan Tengah', bpsCode: '71.03.19' },
                    { name: 'Tabukan Selatan Tenggara', bpsCode: '71.03.20' },
                    { name: 'Tahuna Barat', bpsCode: '71.03.23' },
                    { name: 'Tahuna Timur', bpsCode: '71.03.24' },
                    { name: 'Kepulauan Marore', bpsCode: '71.03.25' }
                ]
            }, {
                name: 'Kepulauan Talaud',
                bpsCode: '71.04',
                districts: [
                    { name: 'Lirung', bpsCode: '71.04.01' },
                    { name: 'Beo', bpsCode: '71.04.02' },
                    { name: 'Rainis', bpsCode: '71.04.03' },
                    { name: 'Essang', bpsCode: '71.04.04' },
                    { name: 'Nanusa', bpsCode: '71.04.05' },
                    { name: 'Kabaruan', bpsCode: '71.04.06' },
                    { name: 'Melonguane', bpsCode: '71.04.07' },
                    { name: 'Gemeh', bpsCode: '71.04.08' },
                    { name: 'Damao (Damau)', bpsCode: '71.04.09' },
                    { name: 'Tampan\' Amma (Tampan Amma)', bpsCode: '71.04.10' },
                    { name: 'Salibabu', bpsCode: '71.04.11' },
                    { name: 'Kalongan', bpsCode: '71.04.12' },
                    { name: 'Miangas', bpsCode: '71.04.13' },
                    { name: 'Beo Utara', bpsCode: '71.04.14' },
                    { name: 'Pulutan', bpsCode: '71.04.15' },
                    { name: 'Melonguane Timur', bpsCode: '71.04.16' },
                    { name: 'Moronge', bpsCode: '71.04.17' },
                    { name: 'Beo Selatan', bpsCode: '71.04.18' },
                    { name: 'Essang Selatan', bpsCode: '71.04.19' }
                ]
            }, {
                name: 'Minahasa Selatan',
                bpsCode: '71.05',
                districts: [
                    { name: 'Modoinding', bpsCode: '71.05.01' },
                    { name: 'Tompaso Baru', bpsCode: '71.05.02' },
                    { name: 'Ranoyapo', bpsCode: '71.05.03' },
                    { name: 'Motoling', bpsCode: '71.05.07' },
                    { name: 'Sinonsayang', bpsCode: '71.05.08' },
                    { name: 'Tenga', bpsCode: '71.05.09' },
                    { name: 'Amurang', bpsCode: '71.05.10' },
                    { name: 'Tumpaan', bpsCode: '71.05.12' },
                    { name: 'Tareran', bpsCode: '71.05.13' },
                    { name: 'Kumelembuai', bpsCode: '71.05.15' },
                    { name: 'Maesaan', bpsCode: '71.05.16' },
                    { name: 'Amurang Barat', bpsCode: '71.05.17' },
                    { name: 'Amurang Timur', bpsCode: '71.05.18' },
                    { name: 'Tatapaan', bpsCode: '71.05.19' },
                    { name: 'Motoling Barat', bpsCode: '71.05.21' },
                    { name: 'Motoling Timur', bpsCode: '71.05.22' },
                    { name: 'Suluun Tareran', bpsCode: '71.05.23' }
                ]
            }, {
                name: 'Minahasa Utara',
                bpsCode: '71.06',
                districts: [
                    { name: 'Kema', bpsCode: '71.06.01' },
                    { name: 'Kauditan', bpsCode: '71.06.02' },
                    { name: 'Airmadidi', bpsCode: '71.06.03' },
                    { name: 'Wori', bpsCode: '71.06.04' },
                    { name: 'Dimembe', bpsCode: '71.06.05' },
                    { name: 'Likupang Barat', bpsCode: '71.06.06' },
                    { name: 'Likupang Timur', bpsCode: '71.06.07' },
                    { name: 'Kalawat', bpsCode: '71.06.08' },
                    { name: 'Talawaan', bpsCode: '71.06.09' },
                    { name: 'Likupang Selatan', bpsCode: '71.06.10' }
                ]
            }, {
                name: 'Minahasa Tenggara',
                bpsCode: '71.07',
                districts: [
                    { name: 'Ratahan', bpsCode: '71.07.01' },
                    { name: 'Pusomaen', bpsCode: '71.07.02' },
                    { name: 'Belang', bpsCode: '71.07.03' },
                    { name: 'Ratatotok', bpsCode: '71.07.04' },
                    { name: 'Tombatu', bpsCode: '71.07.05' },
                    { name: 'Touluaan', bpsCode: '71.07.06' },
                    { name: 'Touluaan Selatan', bpsCode: '71.07.07' },
                    { name: 'Silian Raya', bpsCode: '71.07.08' },
                    { name: 'Tombatu Timur', bpsCode: '71.07.09' },
                    { name: 'Tombatu Utara', bpsCode: '71.07.10' },
                    { name: 'Pasan', bpsCode: '71.07.11' },
                    { name: 'Ratahan Timur', bpsCode: '71.07.12' }
                ]
            }, {
                name: 'Bolaang Mongondow Utara',
                bpsCode: '71.08',
                districts: [
                    { name: 'Sangkub', bpsCode: '71.08.01' },
                    { name: 'Bintauna', bpsCode: '71.08.02' },
                    { name: 'Bolangitang Timur (Bolang Itang Timur)', bpsCode: '71.08.03' },
                    { name: 'Bolangitang Barat (Bolang Itang Barat)', bpsCode: '71.08.04' },
                    { name: 'Kaidipang', bpsCode: '71.08.05' },
                    { name: 'Pinogaluman', bpsCode: '71.08.06' }
                ]
            }, {
                name: 'Kepulauan Siau Tagulandang Biaro (Sitaro)',
                bpsCode: '71.09',
                districts: [
                    { name: 'Siau Timur', bpsCode: '71.09.01' },
                    { name: 'Siau Barat', bpsCode: '71.09.02' },
                    { name: 'Tagulandang', bpsCode: '71.09.03' },
                    { name: 'Siau Timur Selatan', bpsCode: '71.09.04' },
                    { name: 'Siau Barat Selatan', bpsCode: '71.09.05' },
                    { name: 'Tagulandang Utara', bpsCode: '71.09.06' },
                    { name: 'Biaro', bpsCode: '71.09.07' },
                    { name: 'Siau Barat Utara', bpsCode: '71.09.08' },
                    { name: 'Siau Tengah', bpsCode: '71.09.09' },
                    { name: 'Tagulandang Selatan', bpsCode: '71.09.10' }
                ]
            }, {
                name: 'Bolaang Mongondow Timur',
                bpsCode: '71.10',
                districts: [
                    { name: 'Tutuyan', bpsCode: '71.10.01' },
                    { name: 'Kotabunan', bpsCode: '71.10.02' },
                    { name: 'Nuangan', bpsCode: '71.10.03' },
                    { name: 'Modayag', bpsCode: '71.10.04' },
                    { name: 'Modayag Barat', bpsCode: '71.10.05' },
                    { name: 'Motongkad', bpsCode: '71.10.06' },
                    { name: 'Mooat', bpsCode: '71.10.07' }
                ]
            }, {
                name: 'Bolaang Mongondow Selatan',
                bpsCode: '71.11',
                districts: [
                    { name: 'Bolaang Uki', bpsCode: '71.11.01' },
                    { name: 'Posigadan', bpsCode: '71.11.02' },
                    { name: 'Pinolosian', bpsCode: '71.11.03' },
                    { name: 'Pinolosian Tengah', bpsCode: '71.11.04' },
                    { name: 'Pinolosian Timur', bpsCode: '71.11.05' },
                    { name: 'Helumo', bpsCode: '71.11.06' },
                    { name: 'Tomini', bpsCode: '71.11.07' }
                ]
            }, {
                name: 'Manado',
                bpsCode: '71.71',
                districts: [
                    { name: 'Bunaken', bpsCode: '71.71.01' },
                    { name: 'Tuminiting', bpsCode: '71.71.02' },
                    { name: 'Singkil', bpsCode: '71.71.03' },
                    { name: 'Wenang', bpsCode: '71.71.04' },
                    { name: 'Tikala', bpsCode: '71.71.05' },
                    { name: 'Sario', bpsCode: '71.71.06' },
                    { name: 'Wanea', bpsCode: '71.71.07' },
                    { name: 'Mapanget', bpsCode: '71.71.08' },
                    { name: 'Malalayang', bpsCode: '71.71.09' },
                    { name: 'Bunaken Kepulauan', bpsCode: '71.71.10' },
                    { name: 'Paal Dua', bpsCode: '71.71.11' }
                ]
            }, {
                name: 'Bitung',
                bpsCode: '71.72',
                districts: [
                    { name: 'Lembeh Selatan (Bitung Selatan)', bpsCode: '71.72.01' },
                    { name: 'Madidir (Bitung Tengah)', bpsCode: '71.72.02' },
                    { name: 'Ranowulu (Bitung Utara)', bpsCode: '71.72.03' },
                    { name: 'Aertembaga (Bitung Timur)', bpsCode: '71.72.04' },
                    { name: 'Matuari (Bitung Barat)', bpsCode: '71.72.05' },
                    { name: 'Girian', bpsCode: '71.72.06' },
                    { name: 'Maesa', bpsCode: '71.72.07' },
                    { name: 'Lembeh Utara', bpsCode: '71.72.08' }
                ]
            }, {
                name: 'Tomohon',
                bpsCode: '71.73',
                districts: [
                    { name: 'Tomohon Selatan', bpsCode: '71.73.01' },
                    { name: 'Tomohon Tengah', bpsCode: '71.73.02' },
                    { name: 'Tomohon Utara', bpsCode: '71.73.03' },
                    { name: 'Tomohon Barat', bpsCode: '71.73.04' },
                    { name: 'Tomohon Timur', bpsCode: '71.73.05' }
                ]
            }, {
                name: 'Kotamobagu',
                bpsCode: '71.74',
                districts: [
                    { name: 'Kotamobagu Utara', bpsCode: '71.74.01' },
                    { name: 'Kotamobagu Timur', bpsCode: '71.74.02' },
                    { name: 'Kotamobagu Selatan', bpsCode: '71.74.03' },
                    { name: 'Kotamobagu Barat', bpsCode: '71.74.04' }
                ]
            }
        ]
    },
    '72': {
        regencies: [
            {
                name: 'Banggai',
                bpsCode: '72.01',
                districts: [
                    { name: 'Batui', bpsCode: '72.01.01' },
                    { name: 'Bunta', bpsCode: '72.01.02' },
                    { name: 'Kintom', bpsCode: '72.01.03' },
                    { name: 'Luwuk', bpsCode: '72.01.04' },
                    { name: 'Lamala', bpsCode: '72.01.05' },
                    { name: 'Balantak', bpsCode: '72.01.06' },
                    { name: 'Pagimana', bpsCode: '72.01.07' },
                    { name: 'Bualemo (Boalemo)', bpsCode: '72.01.08' },
                    { name: 'Toili', bpsCode: '72.01.09' },
                    { name: 'Masama', bpsCode: '72.01.10' },
                    { name: 'Luwuk Timur', bpsCode: '72.01.11' },
                    { name: 'Toili Barat', bpsCode: '72.01.12' },
                    { name: 'Nuhon', bpsCode: '72.01.13' },
                    { name: 'Moilong', bpsCode: '72.01.14' },
                    { name: 'Batui Selatan', bpsCode: '72.01.15' },
                    { name: 'Lobu', bpsCode: '72.01.16' },
                    { name: 'Simpang Raya', bpsCode: '72.01.17' },
                    { name: 'Balantak Selatan', bpsCode: '72.01.18' },
                    { name: 'Balantak Utara', bpsCode: '72.01.19' },
                    { name: 'Luwuk Selatan', bpsCode: '72.01.20' },
                    { name: 'Luwuk Utara', bpsCode: '72.01.21' },
                    { name: 'Mantoh', bpsCode: '72.01.22' },
                    { name: 'Nambo', bpsCode: '72.01.23' }
                ]
            }, {
                name: 'Poso',
                bpsCode: '72.02',
                districts: [
                    { name: 'Poso Kota', bpsCode: '72.02.01' },
                    { name: 'Poso Pesisir', bpsCode: '72.02.02' },
                    { name: 'Lage', bpsCode: '72.02.03' },
                    { name: 'Pamona Puselemba', bpsCode: '72.02.04' },
                    { name: 'Pamona Timur', bpsCode: '72.02.05' },
                    { name: 'Pamona Selatan', bpsCode: '72.02.06' },
                    { name: 'Lore Utara', bpsCode: '72.02.07' },
                    { name: 'Lore Tengah', bpsCode: '72.02.08' },
                    { name: 'Lore Selatan', bpsCode: '72.02.09' },
                    { name: 'Poso Pesisir Utara', bpsCode: '72.02.18' },
                    { name: 'Poso Pesisir Selatan', bpsCode: '72.02.19' },
                    { name: 'Pamona Barat', bpsCode: '72.02.20' },
                    { name: 'Poso Kota Selatan', bpsCode: '72.02.21' },
                    { name: 'Poso Kota Utara', bpsCode: '72.02.22' },
                    { name: 'Lore Barat', bpsCode: '72.02.23' },
                    { name: 'Lore Timur', bpsCode: '72.02.24' },
                    { name: 'Lore Piore', bpsCode: '72.02.25' },
                    { name: 'Pamona Tenggara', bpsCode: '72.02.26' },
                    { name: 'Pamona Utara', bpsCode: '72.02.27' }
                ]
            }, {
                name: 'Donggala',
                bpsCode: '72.03',
                districts: [
                    { name: 'Rio Pakava', bpsCode: '72.03.04' },
                    { name: 'Dampelas', bpsCode: '72.03.06' },
                    { name: 'Banawa', bpsCode: '72.03.08' },
                    { name: 'Labuan', bpsCode: '72.03.09' },
                    { name: 'Sindue', bpsCode: '72.03.10' },
                    { name: 'Sirenja', bpsCode: '72.03.11' },
                    { name: 'Balaesang', bpsCode: '72.03.12' },
                    { name: 'Sojol', bpsCode: '72.03.14' },
                    { name: 'Banawa Selatan', bpsCode: '72.03.18' },
                    { name: 'Tanantovea', bpsCode: '72.03.19' },
                    { name: 'Pinembani (Panembani)', bpsCode: '72.03.21' },
                    { name: 'Sindue Tombusabora', bpsCode: '72.03.24' },
                    { name: 'Sindue Tobata', bpsCode: '72.03.25' },
                    { name: 'Banawa Tengah', bpsCode: '72.03.27' },
                    { name: 'Sojol Utara', bpsCode: '72.03.30' },
                    { name: 'Balaesang Tanjung', bpsCode: '72.03.31' }
                ]
            }, {
                name: 'Toli-Toli',
                bpsCode: '72.04',
                districts: [
                    { name: 'Dampal Selatan', bpsCode: '72.04.01' },
                    { name: 'Dampal Utara', bpsCode: '72.04.02' },
                    { name: 'Dondo', bpsCode: '72.04.03' },
                    { name: 'Basidondo', bpsCode: '72.04.04' },
                    { name: 'Ogodeide', bpsCode: '72.04.05' },
                    { name: 'Lampasio', bpsCode: '72.04.06' },
                    { name: 'Baolan', bpsCode: '72.04.07' },
                    { name: 'Galang', bpsCode: '72.04.08' },
                    { name: 'Toli-Toli Utara (Tolitoli Utara)', bpsCode: '72.04.09' },
                    { name: 'Dako Pemean (Dako Pamean)', bpsCode: '72.04.10' }
                ]
            }, {
                name: 'Buol',
                bpsCode: '72.05',
                districts: [
                    { name: 'Momunu', bpsCode: '72.05.01' },
                    { name: 'Lakea (Lipunoto)', bpsCode: '72.05.02' },
                    { name: 'Bokat', bpsCode: '72.05.03' },
                    { name: 'Bunobogu', bpsCode: '72.05.04' },
                    { name: 'Paleleh', bpsCode: '72.05.05' },
                    { name: 'Biau', bpsCode: '72.05.06' },
                    { name: 'Tiloan', bpsCode: '72.05.07' },
                    { name: 'Bukal', bpsCode: '72.05.08' },
                    { name: 'Gadung', bpsCode: '72.05.09' },
                    { name: 'Karamat', bpsCode: '72.05.10' },
                    { name: 'Paleleh Barat', bpsCode: '72.05.11' }
                ]
            }, {
                name: 'Morowali',
                bpsCode: '72.06',
                districts: [
                    { name: 'Bungku Tengah', bpsCode: '72.06.05' },
                    { name: 'Bungku Selatan', bpsCode: '72.06.06' },
                    { name: 'Menui Kepulauan', bpsCode: '72.06.07' },
                    { name: 'Bungku Barat', bpsCode: '72.06.08' },
                    { name: 'Bumi Raya', bpsCode: '72.06.09' },
                    { name: 'Bahodopi', bpsCode: '72.06.10' },
                    { name: 'Wita Ponda', bpsCode: '72.06.12' },
                    { name: 'Bungku Pesisir', bpsCode: '72.06.15' },
                    { name: 'Bungku Timur', bpsCode: '72.06.18' }
                ]
            }, {
                name: 'Banggai Kepulauan',
                bpsCode: '72.07',
                districts: [
                    { name: 'Totikum (Totikung)', bpsCode: '72.07.03' },
                    { name: 'Tinangkung', bpsCode: '72.07.04' },
                    { name: 'Liang', bpsCode: '72.07.05' },
                    { name: 'Bulagi', bpsCode: '72.07.06' },
                    { name: 'Buko', bpsCode: '72.07.07' },
                    { name: 'Bulagi Selatan', bpsCode: '72.07.09' },
                    { name: 'Tinangkung Selatan', bpsCode: '72.07.11' },
                    { name: 'Totikum Selatan', bpsCode: '72.07.15' },
                    { name: 'Peling Tengah', bpsCode: '72.07.16' },
                    { name: 'Bulagi Utara', bpsCode: '72.07.17' },
                    { name: 'Buko Selatan', bpsCode: '72.07.18' },
                    { name: 'Tinangkung Utara', bpsCode: '72.07.19' }
                ]
            }, {
                name: 'Parigi Moutong',
                bpsCode: '72.08',
                districts: [
                    { name: 'Parigi', bpsCode: '72.08.01' },
                    { name: 'Ampibabo', bpsCode: '72.08.02' },
                    { name: 'Tinombo', bpsCode: '72.08.03' },
                    { name: 'Moutong', bpsCode: '72.08.04' },
                    { name: 'Tomini', bpsCode: '72.08.05' },
                    { name: 'Sausu', bpsCode: '72.08.06' },
                    { name: 'Bolano Lambunu', bpsCode: '72.08.07' },
                    { name: 'Kasimbar', bpsCode: '72.08.08' },
                    { name: 'Torue', bpsCode: '72.08.09' },
                    { name: 'Tinombo Selatan', bpsCode: '72.08.10' },
                    { name: 'Parigi Selatan', bpsCode: '72.08.11' },
                    { name: 'Mepanga', bpsCode: '72.08.12' },
                    { name: 'Toribulu', bpsCode: '72.08.13' },
                    { name: 'Taopa', bpsCode: '72.08.14' },
                    { name: 'Balinggi', bpsCode: '72.08.15' },
                    { name: 'Parigi Barat', bpsCode: '72.08.16' },
                    { name: 'Siniu', bpsCode: '72.08.17' },
                    { name: 'Palasa', bpsCode: '72.08.18' },
                    { name: 'Parigi Utara', bpsCode: '72.08.19' },
                    { name: 'Parigi Tengah', bpsCode: '72.08.20' },
                    { name: 'Bolano', bpsCode: '72.08.21' },
                    { name: 'Ongka Malino', bpsCode: '72.08.22' },
                    { name: 'Sidoan', bpsCode: '72.08.23' }
                ]
            }, {
                name: 'Tojo Una-Una',
                bpsCode: '72.09',
                districts: [
                    { name: 'Una Una', bpsCode: '72.09.01' },
                    { name: 'Togean', bpsCode: '72.09.02' },
                    { name: 'Walea Kepulauan', bpsCode: '72.09.03' },
                    { name: 'Ampana Tete', bpsCode: '72.09.04' },
                    { name: 'Ampana Kota', bpsCode: '72.09.05' },
                    { name: 'Ulubongka', bpsCode: '72.09.06' },
                    { name: 'Tojo Barat', bpsCode: '72.09.07' },
                    { name: 'Tojo', bpsCode: '72.09.08' },
                    { name: 'Walea Besar', bpsCode: '72.09.09' },
                    { name: 'Ratolindo', bpsCode: '72.09.10' },
                    { name: 'Batudaka', bpsCode: '72.09.11' },
                    { name: 'Talatako', bpsCode: '72.09.12' }
                ]
            }, {
                name: 'Sigi',
                bpsCode: '72.10',
                districts: [
                    { name: 'Sigi Biromaru', bpsCode: '72.10.01' },
                    { name: 'Palolo', bpsCode: '72.10.02' },
                    { name: 'Nokilalaki', bpsCode: '72.10.03' },
                    { name: 'Lindu', bpsCode: '72.10.04' },
                    { name: 'Kulawi', bpsCode: '72.10.05' },
                    { name: 'Kulawi Selatan', bpsCode: '72.10.06' },
                    { name: 'Pipikoro', bpsCode: '72.10.07' },
                    { name: 'Gumbasa', bpsCode: '72.10.08' },
                    { name: 'Dolo Selatan', bpsCode: '72.10.09' },
                    { name: 'Tanambulava', bpsCode: '72.10.10' },
                    { name: 'Dolo Barat', bpsCode: '72.10.11' },
                    { name: 'Dolo', bpsCode: '72.10.12' },
                    { name: 'Kinovaro', bpsCode: '72.10.13' },
                    { name: 'Marawola', bpsCode: '72.10.14' },
                    { name: 'Marawola Barat', bpsCode: '72.10.15' }
                ]
            }, {
                name: 'Banggai Laut',
                bpsCode: '72.11',
                districts: [
                    { name: 'Banggai', bpsCode: '72.11.01' },
                    { name: 'Banggai Utara', bpsCode: '72.11.02' },
                    { name: 'Bokan Kepulauan', bpsCode: '72.11.03' },
                    { name: 'Bangkurung', bpsCode: '72.11.04' },
                    { name: 'Labobo', bpsCode: '72.11.05' },
                    { name: 'Banggai Selatan', bpsCode: '72.11.06' },
                    { name: 'Banggai Tengah', bpsCode: '72.11.07' }
                ]
            }, {
                name: 'Morowali Utara',
                bpsCode: '72.12',
                districts: [
                    { name: 'Petasia', bpsCode: '72.12.01' },
                    { name: 'Petasia Timur', bpsCode: '72.12.02' },
                    { name: 'Lembo Raya', bpsCode: '72.12.03' },
                    { name: 'Lembo', bpsCode: '72.12.04' },
                    { name: 'Mori Atas', bpsCode: '72.12.05' },
                    { name: 'Mori Utara', bpsCode: '72.12.06' },
                    { name: 'Soyo Jaya', bpsCode: '72.12.07' },
                    { name: 'Bungku Utara', bpsCode: '72.12.08' },
                    { name: 'Mamosalato', bpsCode: '72.12.09' },
                    { name: 'Petasia Barat', bpsCode: '72.12.10' }
                ]
            }, {
                name: 'Palu',
                bpsCode: '72.71',
                districts: [
                    { name: 'Palu Timur', bpsCode: '72.71.01' },
                    { name: 'Palu Barat', bpsCode: '72.71.02' },
                    { name: 'Palu Selatan', bpsCode: '72.71.03' },
                    { name: 'Palu Utara', bpsCode: '72.71.04' },
                    { name: 'Ulujadi', bpsCode: '72.71.05' },
                    { name: 'Tatanga', bpsCode: '72.71.06' },
                    { name: 'Tawaeli', bpsCode: '72.71.07' },
                    { name: 'Mantikulore', bpsCode: '72.71.08' }
                ]
            }
        ]
    },
    '73': {
        regencies: [
            {
                name: 'Kepulauan Selayar',
                bpsCode: '73.01',
                districts: [
                    { name: 'Benteng', bpsCode: '73.01.01' },
                    { name: 'Bontoharu', bpsCode: '73.01.02' },
                    { name: 'Bontomatene', bpsCode: '73.01.03' },
                    { name: 'Bontomanai', bpsCode: '73.01.04' },
                    { name: 'Bontosikuyu', bpsCode: '73.01.05' },
                    { name: 'Pasimasunggu (Pasimassunggu)', bpsCode: '73.01.06' },
                    { name: 'Pasimarannu', bpsCode: '73.01.07' },
                    { name: 'Taka Bonerate (Takabonerate)', bpsCode: '73.01.08' },
                    { name: 'Pasilambena', bpsCode: '73.01.09' },
                    { name: 'Pasimasunggu Timur', bpsCode: '73.01.10' },
                    { name: 'Buki', bpsCode: '73.01.11' }
                ]
            }, {
                name: 'Bulukumba',
                bpsCode: '73.02',
                districts: [
                    { name: 'Gantorang/Gantarang (Gangking)', bpsCode: '73.02.01' },
                    { name: 'Ujung Bulu', bpsCode: '73.02.02' },
                    { name: 'Bonto Bahari', bpsCode: '73.02.03' },
                    { name: 'Bonto Tiro (Bontotiro)', bpsCode: '73.02.04' },
                    { name: 'Hero Lange Lange (Herlang)', bpsCode: '73.02.05' },
                    { name: 'Kajang', bpsCode: '73.02.06' },
                    { name: 'Bulukumba (Bulukumpa)', bpsCode: '73.02.07' },
                    { name: 'Kindang', bpsCode: '73.02.08' },
                    { name: 'Ujungloe (Ujung Loe)', bpsCode: '73.02.09' },
                    { name: 'Rilauale (Rilau Ale)', bpsCode: '73.02.10' }
                ]
            }, {
                name: 'Bantaeng',
                bpsCode: '73.03',
                districts: [
                    { name: 'Bissappu', bpsCode: '73.03.01' },
                    { name: 'Bantaeng', bpsCode: '73.03.02' },
                    { name: 'Eremerasa', bpsCode: '73.03.03' },
                    { name: 'Tompo Bulu (Tompobulu)', bpsCode: '73.03.04' },
                    { name: 'Pajukukang', bpsCode: '73.03.05' },
                    { name: 'Uluere', bpsCode: '73.03.06' },
                    { name: 'Gantarang Keke (Gantareng Keke)', bpsCode: '73.03.07' },
                    { name: 'Sinoa', bpsCode: '73.03.08' }
                ]
            }, {
                name: 'Jeneponto',
                bpsCode: '73.04',
                districts: [
                    { name: 'Bangkala', bpsCode: '73.04.01' },
                    { name: 'Tamalatea', bpsCode: '73.04.02' },
                    { name: 'Binamu', bpsCode: '73.04.03' },
                    { name: 'Batang', bpsCode: '73.04.04' },
                    { name: 'Kelara', bpsCode: '73.04.05' },
                    { name: 'Bangkala Barat', bpsCode: '73.04.06' },
                    { name: 'Bontoramba', bpsCode: '73.04.07' },
                    { name: 'Turatea', bpsCode: '73.04.08' },
                    { name: 'Arungkeke', bpsCode: '73.04.09' },
                    { name: 'Rumbia', bpsCode: '73.04.10' },
                    { name: 'Tarowang', bpsCode: '73.04.11' }
                ]
            }, {
                name: 'Takalar',
                bpsCode: '73.05',
                districts: [
                    { name: 'Mappakasunggu', bpsCode: '73.05.01' },
                    { name: 'Mangarabombang (Mangara Bombang)', bpsCode: '73.05.02' },
                    { name: 'Polombangkeng Selatan (Polobangkeng)', bpsCode: '73.05.03' },
                    { name: 'Polombangkeng Utara (Polobangkeng)', bpsCode: '73.05.04' },
                    { name: 'Galesong Selatan', bpsCode: '73.05.05' },
                    { name: 'Galesong Utara', bpsCode: '73.05.06' },
                    { name: 'Pattallassang (Patallassang)', bpsCode: '73.05.07' },
                    { name: 'Sanrobone', bpsCode: '73.05.08' },
                    { name: 'Galesong', bpsCode: '73.05.09' }
                ]
            }, {
                name: 'Gowa',
                bpsCode: '73.06',
                districts: [
                    { name: 'Bontonompo', bpsCode: '73.06.01' },
                    { name: 'Bajeng', bpsCode: '73.06.02' },
                    { name: 'Tompobullu (Tompobulu)', bpsCode: '73.06.03' },
                    { name: 'Tinggimoncong', bpsCode: '73.06.04' },
                    { name: 'Parangloe', bpsCode: '73.06.05' },
                    { name: 'Bontomarannu', bpsCode: '73.06.06' },
                    { name: 'Palangga (Pallangga)', bpsCode: '73.06.07' },
                    { name: 'Somba Opu (Upu)', bpsCode: '73.06.08' },
                    { name: 'Bungaya', bpsCode: '73.06.09' },
                    { name: 'Tombolopao (Tombolo Pao)', bpsCode: '73.06.10' },
                    { name: 'Biringbulu', bpsCode: '73.06.11' },
                    { name: 'Barombong', bpsCode: '73.06.12' },
                    { name: 'Pattalasang (Pattallassang)', bpsCode: '73.06.13' },
                    { name: 'Manuju', bpsCode: '73.06.14' },
                    { name: 'Bontolempangang', bpsCode: '73.06.15' },
                    { name: 'Bontonompo Selatan', bpsCode: '73.06.16' },
                    { name: 'Parigi', bpsCode: '73.06.17' },
                    { name: 'Bajeng Barat', bpsCode: '73.06.18' }
                ]
            }, {
                name: 'Sinjai',
                bpsCode: '73.07',
                districts: [
                    { name: 'Sinjai Barat', bpsCode: '73.07.01' },
                    { name: 'Sinjai Selatan', bpsCode: '73.07.02' },
                    { name: 'Sinjai Timur', bpsCode: '73.07.03' },
                    { name: 'Sinjai Tengah', bpsCode: '73.07.04' },
                    { name: 'Sinjai Utara', bpsCode: '73.07.05' },
                    { name: 'Bulupoddo', bpsCode: '73.07.06' },
                    { name: 'Sinjai Borong', bpsCode: '73.07.07' },
                    { name: 'Tellu Limpoe', bpsCode: '73.07.08' },
                    { name: 'Pulau Sembilan', bpsCode: '73.07.09' }
                ]
            }, {
                name: 'Bone',
                bpsCode: '73.08',
                districts: [
                    { name: 'Bontocani', bpsCode: '73.08.01' },
                    { name: 'Kahu', bpsCode: '73.08.02' },
                    { name: 'Kajuara', bpsCode: '73.08.03' },
                    { name: 'Salomekko', bpsCode: '73.08.04' },
                    { name: 'Tonra', bpsCode: '73.08.05' },
                    { name: 'Libureng', bpsCode: '73.08.06' },
                    { name: 'Mare', bpsCode: '73.08.07' },
                    { name: 'Sibulue', bpsCode: '73.08.08' },
                    { name: 'Barebbo', bpsCode: '73.08.09' },
                    { name: 'Cina', bpsCode: '73.08.10' },
                    { name: 'Ponre', bpsCode: '73.08.11' },
                    { name: 'Lappariaja', bpsCode: '73.08.12' },
                    { name: 'Lamuru', bpsCode: '73.08.13' },
                    { name: 'Ulaweng', bpsCode: '73.08.14' },
                    { name: 'Palakka', bpsCode: '73.08.15' },
                    { name: 'Awangpone', bpsCode: '73.08.16' },
                    { name: 'Tellu Siattinge', bpsCode: '73.08.17' },
                    { name: 'Ajangale', bpsCode: '73.08.18' },
                    { name: 'Dua Boccoe', bpsCode: '73.08.19' },
                    { name: 'Cenrana', bpsCode: '73.08.20' },
                    { name: 'Tanete Riattang', bpsCode: '73.08.21' },
                    { name: 'Tanete Riattang Barat', bpsCode: '73.08.22' },
                    { name: 'Tanete Riattang Timur', bpsCode: '73.08.23' },
                    { name: 'Amali', bpsCode: '73.08.24' },
                    { name: 'Tellulimpoe (Tellu Limpoe)', bpsCode: '73.08.25' },
                    { name: 'Bengo', bpsCode: '73.08.26' },
                    { name: 'Patimpeng', bpsCode: '73.08.27' }
                ]
            }, {
                name: 'Maros',
                bpsCode: '73.09',
                districts: [
                    { name: 'Mandai', bpsCode: '73.09.01' },
                    { name: 'Camba', bpsCode: '73.09.02' },
                    { name: 'Bantimurung', bpsCode: '73.09.03' },
                    { name: 'Maros Baru', bpsCode: '73.09.04' },
                    { name: 'Bontoa (Maros Utara)', bpsCode: '73.09.05' },
                    { name: 'Malllawa (Mallawa)', bpsCode: '73.09.06' },
                    { name: 'Tanralili', bpsCode: '73.09.07' },
                    { name: 'Marusu', bpsCode: '73.09.08' },
                    { name: 'Simbang', bpsCode: '73.09.09' },
                    { name: 'Cenrana', bpsCode: '73.09.10' },
                    { name: 'Tompobulu (Tompu Bulu)', bpsCode: '73.09.11' },
                    { name: 'Lau', bpsCode: '73.09.12' },
                    { name: 'Moncong Loe (Moncongloe)', bpsCode: '73.09.13' },
                    { name: 'Turikale', bpsCode: '73.09.14' }
                ]
            }, {
                name: 'Pangkajene Kepulauan',
                bpsCode: '73.10',
                districts: [
                    { name: 'Liukang Tangaya', bpsCode: '73.10.01' },
                    { name: 'Liukang Kalmas (Kalukuang Masalima)', bpsCode: '73.10.02' },
                    { name: 'Liukang Tupabbiring', bpsCode: '73.10.03' },
                    { name: 'Pangkajene', bpsCode: '73.10.04' },
                    { name: 'Balocci', bpsCode: '73.10.05' },
                    { name: 'Bungoro', bpsCode: '73.10.06' },
                    { name: 'Labakkang', bpsCode: '73.10.07' },
                    { name: 'Marang (Ma Rang)', bpsCode: '73.10.08' },
                    { name: 'Segeri', bpsCode: '73.10.09' },
                    { name: 'Minasa Tene', bpsCode: '73.10.10' },
                    { name: 'Mandalle', bpsCode: '73.10.11' },
                    { name: 'Tondong Tallasa', bpsCode: '73.10.12' },
                    { name: 'Liukang Tupabbiring Utara', bpsCode: '73.10.13' }
                ]
            }, {
                name: 'Barru',
                bpsCode: '73.11',
                districts: [
                    { name: 'Tanete Riaja', bpsCode: '73.11.01' },
                    { name: 'Tanete Rilau', bpsCode: '73.11.02' },
                    { name: 'Barru', bpsCode: '73.11.03' },
                    { name: 'Soppeng Riaja', bpsCode: '73.11.04' },
                    { name: 'Mallusetasi', bpsCode: '73.11.05' },
                    { name: 'Pujananting', bpsCode: '73.11.06' },
                    { name: 'Balusu', bpsCode: '73.11.07' }
                ]
            }, {
                name: 'Soppeng',
                bpsCode: '73.12',
                districts: [
                    { name: 'Marioriwawo (Mario Riwawo)', bpsCode: '73.12.01' },
                    { name: 'Liliraja (Lili Riaja)', bpsCode: '73.12.02' },
                    { name: 'Lilirilau (Lili Rilau)', bpsCode: '73.12.03' },
                    { name: 'Lalabata', bpsCode: '73.12.04' },
                    { name: 'Marioriawa (Mario Riawa)', bpsCode: '73.12.05' },
                    { name: 'Donri-Donri', bpsCode: '73.12.06' },
                    { name: 'Ganra', bpsCode: '73.12.07' },
                    { name: 'Citta', bpsCode: '73.12.08' }
                ]
            }, {
                name: 'Wajo',
                bpsCode: '73.13',
                districts: [
                    { name: 'Sabangparu', bpsCode: '73.13.01' },
                    { name: 'Pammana', bpsCode: '73.13.02' },
                    { name: 'Takkalalla', bpsCode: '73.13.03' },
                    { name: 'Sajoanging', bpsCode: '73.13.04' },
                    { name: 'Majauleng', bpsCode: '73.13.05' },
                    { name: 'Tempe', bpsCode: '73.13.06' },
                    { name: 'Belawa', bpsCode: '73.13.07' },
                    { name: 'Tanasitolo', bpsCode: '73.13.08' },
                    { name: 'Maniangpajo', bpsCode: '73.13.09' },
                    { name: 'Pitumpanua', bpsCode: '73.13.10' },
                    { name: 'Bola', bpsCode: '73.13.11' },
                    { name: 'Penrang', bpsCode: '73.13.12' },
                    { name: 'Gilireng', bpsCode: '73.13.13' },
                    { name: 'Keera', bpsCode: '73.13.14' }
                ]
            }, {
                name: 'Sidenreng Rappang',
                bpsCode: '73.14',
                districts: [
                    { name: 'Panca Lautan (Lautang)', bpsCode: '73.14.01' },
                    { name: 'Tellu Limpoe', bpsCode: '73.14.02' },
                    { name: 'Watang Pulu', bpsCode: '73.14.03' },
                    { name: 'Baranti', bpsCode: '73.14.04' },
                    { name: 'Panca Rijang', bpsCode: '73.14.05' },
                    { name: 'Kulo', bpsCode: '73.14.06' },
                    { name: 'Maritengngae', bpsCode: '73.14.07' },
                    { name: 'Wattang Sidenreng (Watang Sidenreng)', bpsCode: '73.14.08' },
                    { name: 'Dua Pitue', bpsCode: '73.14.09' },
                    { name: 'Pitu Riawa', bpsCode: '73.14.10' },
                    { name: 'Pitu Raise/Riase', bpsCode: '73.14.11' }
                ]
            }, {
                name: 'Pinrang',
                bpsCode: '73.15',
                districts: [
                    { name: 'Matirro Sompe (Mattiro Sompe)', bpsCode: '73.15.01' },
                    { name: 'Suppa', bpsCode: '73.15.02' },
                    { name: 'Mattiro Bulu', bpsCode: '73.15.03' },
                    { name: 'Watang Sawito (Watang Sawitto)', bpsCode: '73.15.04' },
                    { name: 'Patampanua', bpsCode: '73.15.05' },
                    { name: 'Duampanua', bpsCode: '73.15.06' },
                    { name: 'Lembang', bpsCode: '73.15.07' },
                    { name: 'Cempa', bpsCode: '73.15.08' },
                    { name: 'Tiroang', bpsCode: '73.15.09' },
                    { name: 'Lansirang (Lanrisang)', bpsCode: '73.15.10' },
                    { name: 'Paleteang', bpsCode: '73.15.11' },
                    { name: 'Batu Lappa (Batulappa)', bpsCode: '73.15.12' }
                ]
            }, {
                name: 'Enrekang',
                bpsCode: '73.16',
                districts: [
                    { name: 'Maiwa', bpsCode: '73.16.01' },
                    { name: 'Enrekang', bpsCode: '73.16.02' },
                    { name: 'Baraka', bpsCode: '73.16.03' },
                    { name: 'Anggeraja', bpsCode: '73.16.04' },
                    { name: 'Alla', bpsCode: '73.16.05' },
                    { name: 'Bungin', bpsCode: '73.16.06' },
                    { name: 'Cendana', bpsCode: '73.16.07' },
                    { name: 'Curio', bpsCode: '73.16.08' },
                    { name: 'Malua', bpsCode: '73.16.09' },
                    { name: 'Buntu Batu', bpsCode: '73.16.10' },
                    { name: 'Masalle', bpsCode: '73.16.11' },
                    { name: 'Baroko', bpsCode: '73.16.12' }
                ]
            }, {
                name: 'Luwu',
                bpsCode: '73.17',
                districts: [
                    { name: 'Basse Sangtempe (Bassesang Tempe / Bastem)', bpsCode: '73.17.01' },
                    { name: 'Larompong', bpsCode: '73.17.02' },
                    { name: 'Suli', bpsCode: '73.17.03' },
                    { name: 'Bajo', bpsCode: '73.17.04' },
                    { name: 'Bua Ponrang (Bupon)', bpsCode: '73.17.05' },
                    { name: 'Walenrang', bpsCode: '73.17.06' },
                    { name: 'Belopa', bpsCode: '73.17.07' },
                    { name: 'Bua', bpsCode: '73.17.08' },
                    { name: 'Lamasi', bpsCode: '73.17.09' },
                    { name: 'Larompong Selatan', bpsCode: '73.17.10' },
                    { name: 'Ponrang', bpsCode: '73.17.11' },
                    { name: 'Latimojong', bpsCode: '73.17.12' },
                    { name: 'Kamanre', bpsCode: '73.17.13' },
                    { name: 'Belopa Utara', bpsCode: '73.17.14' },
                    { name: 'Walenrang Barat', bpsCode: '73.17.15' },
                    { name: 'Walenrang Utara', bpsCode: '73.17.16' },
                    { name: 'Walenrang Timur', bpsCode: '73.17.17' },
                    { name: 'Lamasi Timur', bpsCode: '73.17.18' },
                    { name: 'Suli Barat', bpsCode: '73.17.19' },
                    { name: 'Bajo Barat', bpsCode: '73.17.20' },
                    { name: 'Ponrang Selatan', bpsCode: '73.17.21' },
                    { name: 'Basse Sangtempe Utara', bpsCode: '73.17.22' }
                ]
            }, {
                name: 'Tana Toraja',
                bpsCode: '73.18',
                districts: [
                    { name: 'Saluputi (Saluputti)', bpsCode: '73.18.01' },
                    { name: 'Bittuang', bpsCode: '73.18.02' },
                    { name: 'Bonggakaradeng', bpsCode: '73.18.03' },
                    { name: 'Makale', bpsCode: '73.18.05' },
                    { name: 'Simbuang', bpsCode: '73.18.09' },
                    { name: 'Rantetayo', bpsCode: '73.18.11' },
                    { name: 'Mengkendek', bpsCode: '73.18.12' },
                    { name: 'Sangalla (Sanggala)', bpsCode: '73.18.13' },
                    { name: 'Gandangbatu Sillanan (Gandang Batu Sillanan)', bpsCode: '73.18.19' },
                    { name: 'Rembon', bpsCode: '73.18.20' },
                    { name: 'Makale Utara', bpsCode: '73.18.27' },
                    { name: 'Mappak', bpsCode: '73.18.28' },
                    { name: 'Makale Selatan', bpsCode: '73.18.29' },
                    { name: 'Masanda', bpsCode: '73.18.31' },
                    { name: 'Sangalla Selatan', bpsCode: '73.18.33' },
                    { name: 'Sangalla Utara', bpsCode: '73.18.34' },
                    { name: 'Malimbong Balepe', bpsCode: '73.18.35' },
                    { name: 'Rano', bpsCode: '73.18.37' },
                    { name: 'Kurra', bpsCode: '73.18.38' }
                ]
            }, {
                name: 'Luwu Utara',
                bpsCode: '73.22',
                districts: [
                    { name: 'Malangke', bpsCode: '73.22.01' },
                    { name: 'Bone-Bone', bpsCode: '73.22.02' },
                    { name: 'Masamba', bpsCode: '73.22.03' },
                    { name: 'Sabbang', bpsCode: '73.22.04' },
                    { name: 'Limbong', bpsCode: '73.22.05' },
                    { name: 'Sukamaju', bpsCode: '73.22.06' },
                    { name: 'Seko', bpsCode: '73.22.07' },
                    { name: 'Malangke Barat', bpsCode: '73.22.08' },
                    { name: 'Rampi', bpsCode: '73.22.09' },
                    { name: 'Mappedeceng', bpsCode: '73.22.10' },
                    { name: 'Baebunta', bpsCode: '73.22.11' },
                    { name: 'Tana Lili', bpsCode: '73.22.12' }
                ]
            }, {
                name: 'Luwu Timur',
                bpsCode: '73.24',
                districts: [
                    { name: 'Mangkutana', bpsCode: '73.24.01' },
                    { name: 'Nuha', bpsCode: '73.24.02' },
                    { name: 'Towuti', bpsCode: '73.24.03' },
                    { name: 'Malili', bpsCode: '73.24.04' },
                    { name: 'Angkona', bpsCode: '73.24.05' },
                    { name: 'Wotu', bpsCode: '73.24.06' },
                    { name: 'Burau', bpsCode: '73.24.07' },
                    { name: 'Tomoni', bpsCode: '73.24.08' },
                    { name: 'Tomoni Timur', bpsCode: '73.24.09' },
                    { name: 'Kalaena', bpsCode: '73.24.10' },
                    { name: 'Wasuponda', bpsCode: '73.24.11' }
                ]
            }, {
                name: 'Toraja Utara',
                bpsCode: '73.26',
                districts: [
                    { name: 'Rantepao', bpsCode: '73.26.01' },
                    { name: 'Sesean', bpsCode: '73.26.02' },
                    { name: 'Nanggala', bpsCode: '73.26.03' },
                    { name: 'Rindingallo', bpsCode: '73.26.04' },
                    { name: 'Buntao', bpsCode: '73.26.05' },
                    { name: 'Sa\'dan', bpsCode: '73.26.06' },
                    { name: 'Sanggalangi', bpsCode: '73.26.07' },
                    { name: 'Sopai', bpsCode: '73.26.08' },
                    { name: 'Tikala', bpsCode: '73.26.09' },
                    { name: 'Balusu', bpsCode: '73.26.10' },
                    { name: 'Tallunglipu', bpsCode: '73.26.11' },
                    { name: 'Dende\' Piongan Napo', bpsCode: '73.26.12' },
                    { name: 'Buntu Pepasan', bpsCode: '73.26.13' },
                    { name: 'Baruppu', bpsCode: '73.26.14' },
                    { name: 'Kesu', bpsCode: '73.26.15' },
                    { name: 'Tondon', bpsCode: '73.26.16' },
                    { name: 'Bangkelekila', bpsCode: '73.26.17' },
                    { name: 'Rantebua', bpsCode: '73.26.18' },
                    { name: 'Sesean Suloara', bpsCode: '73.26.19' },
                    { name: 'Kapalla Pitu (Kapala Pitu)', bpsCode: '73.26.20' },
                    { name: 'Awan Rante Karua', bpsCode: '73.26.21' }
                ]
            }, {
                name: 'Makassar',
                bpsCode: '73.71',
                districts: [
                    { name: 'Mariso', bpsCode: '73.71.01' },
                    { name: 'Mamajang', bpsCode: '73.71.02' },
                    { name: 'Makassar', bpsCode: '73.71.03' },
                    { name: 'Ujung Pandang', bpsCode: '73.71.04' },
                    { name: 'Wajo', bpsCode: '73.71.05' },
                    { name: 'Bontoala', bpsCode: '73.71.06' },
                    { name: 'Tallo', bpsCode: '73.71.07' },
                    { name: 'Ujung Tanah', bpsCode: '73.71.08' },
                    { name: 'Panakkukang', bpsCode: '73.71.09' },
                    { name: 'Tamalate', bpsCode: '73.71.10' },
                    { name: 'Biringkanaya (Biring Kanaya)', bpsCode: '73.71.11' },
                    { name: 'Manggala', bpsCode: '73.71.12' },
                    { name: 'Rappocini', bpsCode: '73.71.13' },
                    { name: 'Tamalanrea', bpsCode: '73.71.14' },
                    { name: 'Kepulauan Sangkarrang', bpsCode: '73.71.15' }
                ]
            }, {
                name: 'Parepare',
                bpsCode: '73.72',
                districts: [
                    { name: 'Bacukiki', bpsCode: '73.72.01' },
                    { name: 'Ujung', bpsCode: '73.72.02' },
                    { name: 'Soreang', bpsCode: '73.72.03' },
                    { name: 'Bacukiki Barat', bpsCode: '73.72.04' }
                ]
            }, {
                name: 'Palopo',
                bpsCode: '73.73',
                districts: [
                    { name: 'Wara', bpsCode: '73.73.01' },
                    { name: 'Wara Utara', bpsCode: '73.73.02' },
                    { name: 'Wara Selatan', bpsCode: '73.73.03' },
                    { name: 'Telluwanua', bpsCode: '73.73.04' },
                    { name: 'Wara Timur', bpsCode: '73.73.05' },
                    { name: 'Wara Barat', bpsCode: '73.73.06' },
                    { name: 'Sendana', bpsCode: '73.73.07' },
                    { name: 'Mungkajang', bpsCode: '73.73.08' },
                    { name: 'Bara', bpsCode: '73.73.09' }
                ]
            }
        ]
    },
    '74': {
        regencies: [
            {
                name: 'Kolaka',
                bpsCode: '74.01',
                districts: [
                    { name: 'Wundulako', bpsCode: '74.01.01' },
                    { name: 'Kolaka', bpsCode: '74.01.04' },
                    { name: 'Pomalaa', bpsCode: '74.01.07' },
                    { name: 'Watubangga', bpsCode: '74.01.08' },
                    { name: 'Wolo', bpsCode: '74.01.10' },
                    { name: 'Baula', bpsCode: '74.01.12' },
                    { name: 'Latambaga', bpsCode: '74.01.14' },
                    { name: 'Tanggetada', bpsCode: '74.01.18' },
                    { name: 'Samaturu', bpsCode: '74.01.20' },
                    { name: 'Toari', bpsCode: '74.01.24' },
                    { name: 'Polinggona', bpsCode: '74.01.25' },
                    { name: 'Iwoimendaa', bpsCode: '74.01.27' }
                ]
            }, {
                name: 'Konawe',
                bpsCode: '74.02',
                districts: [
                    { name: 'Lambuya', bpsCode: '74.02.01' },
                    { name: 'Unaaha', bpsCode: '74.02.02' },
                    { name: 'Wawotobi', bpsCode: '74.02.03' },
                    { name: 'Pondidaha', bpsCode: '74.02.04' },
                    { name: 'Sampara', bpsCode: '74.02.05' },
                    { name: 'Abuki', bpsCode: '74.02.10' },
                    { name: 'Soropia', bpsCode: '74.02.11' },
                    { name: 'Tongauna', bpsCode: '74.02.15' },
                    { name: 'Latoma', bpsCode: '74.02.16' },
                    { name: 'Puriala', bpsCode: '74.02.17' },
                    { name: 'Uepai', bpsCode: '74.02.18' },
                    { name: 'Wonggeduku', bpsCode: '74.02.19' },
                    { name: 'Besulutu', bpsCode: '74.02.20' },
                    { name: 'Bondoala', bpsCode: '74.02.21' },
                    { name: 'Routa', bpsCode: '74.02.23' },
                    { name: 'Anggaberi', bpsCode: '74.02.24' },
                    { name: 'Meluhu', bpsCode: '74.02.25' },
                    { name: 'Amonggedo', bpsCode: '74.02.28' },
                    { name: 'Asinua', bpsCode: '74.02.31' },
                    { name: 'Konawe', bpsCode: '74.02.32' },
                    { name: 'Kapoiala', bpsCode: '74.02.33' },
                    { name: 'Lalonggasumeeto', bpsCode: '74.02.36' },
                    { name: 'Onembute', bpsCode: '74.02.37' },
                    { name: 'Padangguni', bpsCode: '74.02.38' },
                    { name: 'Morosi', bpsCode: '74.02.39' },
                    { name: 'Anggalomoare', bpsCode: '74.02.40' },
                    { name: 'Wonggeduku Barat', bpsCode: '74.02.41' }
                ]
            }, {
                name: 'Muna',
                bpsCode: '74.03',
                districts: [
                    { name: 'Napabalano', bpsCode: '74.03.06' },
                    { name: 'Maligano', bpsCode: '74.03.07' },
                    { name: 'Wakorumba Selatan', bpsCode: '74.03.13' },
                    { name: 'Lasalepa', bpsCode: '74.03.14' },
                    { name: 'Batalaiwaru (Batalaiworu)', bpsCode: '74.03.15' },
                    { name: 'Katobu', bpsCode: '74.03.16' },
                    { name: 'Duruka', bpsCode: '74.03.17' },
                    { name: 'Lohia', bpsCode: '74.03.18' },
                    { name: 'Watopute', bpsCode: '74.03.19' },
                    { name: 'Kontunaga', bpsCode: '74.03.20' },
                    { name: 'Kabangka', bpsCode: '74.03.23' },
                    { name: 'Kabawo', bpsCode: '74.03.24' },
                    { name: 'Parigi', bpsCode: '74.03.25' },
                    { name: 'Bone (Bone Tondo)', bpsCode: '74.03.26' },
                    { name: 'Tongkuno', bpsCode: '74.03.27' },
                    { name: 'Pasir Putih', bpsCode: '74.03.28' },
                    { name: 'Kontu Kowuna', bpsCode: '74.03.30' },
                    { name: 'Marobo', bpsCode: '74.03.31' },
                    { name: 'Tongkuno Selatan', bpsCode: '74.03.32' },
                    { name: 'Pasi Kolaga', bpsCode: '74.03.33' },
                    { name: 'Batukara', bpsCode: '74.03.34' },
                    { name: 'Towea', bpsCode: '74.03.37' }
                ]
            }, {
                name: 'Buton',
                bpsCode: '74.04',
                districts: [
                    { name: 'Pasarwajo (Pasar Wajo)', bpsCode: '74.04.11' },
                    { name: 'Kapontori', bpsCode: '74.04.22' },
                    { name: 'Lasalimu', bpsCode: '74.04.23' },
                    { name: 'Lasalimu Selatan', bpsCode: '74.04.24' },
                    { name: 'Siotapina (Siontapia / Siontapina)', bpsCode: '74.04.27' },
                    { name: 'Wolowa', bpsCode: '74.04.28' },
                    { name: 'Wabula', bpsCode: '74.04.29' }
                ]
            }, {
                name: 'Konawe Selatan',
                bpsCode: '74.05',
                districts: [
                    { name: 'Tinanggea', bpsCode: '74.05.01' },
                    { name: 'Angata', bpsCode: '74.05.02' },
                    { name: 'Andoolo', bpsCode: '74.05.03' },
                    { name: 'Palangga', bpsCode: '74.05.04' },
                    { name: 'Landono', bpsCode: '74.05.05' },
                    { name: 'Lainea', bpsCode: '74.05.06' },
                    { name: 'Konda', bpsCode: '74.05.07' },
                    { name: 'Ranomeeto', bpsCode: '74.05.08' },
                    { name: 'Kolono', bpsCode: '74.05.09' },
                    { name: 'Moramo', bpsCode: '74.05.10' },
                    { name: 'Laonti', bpsCode: '74.05.11' },
                    { name: 'Lalembuu', bpsCode: '74.05.12' },
                    { name: 'Benua', bpsCode: '74.05.13' },
                    { name: 'Palangga Selatan', bpsCode: '74.05.14' },
                    { name: 'Mowila', bpsCode: '74.05.15' },
                    { name: 'Moramo Utara', bpsCode: '74.05.16' },
                    { name: 'Buke', bpsCode: '74.05.17' },
                    { name: 'Wolasi', bpsCode: '74.05.18' },
                    { name: 'Laeya', bpsCode: '74.05.19' },
                    { name: 'Baito', bpsCode: '74.05.20' },
                    { name: 'Basala', bpsCode: '74.05.21' },
                    { name: 'Ranomeeto Barat', bpsCode: '74.05.22' },
                    { name: 'Kolono Timur', bpsCode: '74.05.23' },
                    { name: 'Sabulakoa', bpsCode: '74.05.24' },
                    { name: 'Andoolo Barat', bpsCode: '74.05.25' }
                ]
            }, {
                name: 'Bombana',
                bpsCode: '74.06',
                districts: [
                    { name: 'Poleang', bpsCode: '74.06.01' },
                    { name: 'Poleang Timur', bpsCode: '74.06.02' },
                    { name: 'Rarowatu', bpsCode: '74.06.03' },
                    { name: 'Rumbia', bpsCode: '74.06.04' },
                    { name: 'Kabaena', bpsCode: '74.06.05' },
                    { name: 'Kabaena Timur', bpsCode: '74.06.06' },
                    { name: 'Poleang Barat', bpsCode: '74.06.07' },
                    { name: 'Mata Oleo', bpsCode: '74.06.08' },
                    { name: 'Rarowatu Utara', bpsCode: '74.06.09' },
                    { name: 'Poleang Utara', bpsCode: '74.06.10' },
                    { name: 'Poleang Selatan', bpsCode: '74.06.11' },
                    { name: 'Poleang Tenggara', bpsCode: '74.06.12' },
                    { name: 'Kabaena Selatan', bpsCode: '74.06.13' },
                    { name: 'Kabaena Barat', bpsCode: '74.06.14' },
                    { name: 'Kabaena Utara', bpsCode: '74.06.15' },
                    { name: 'Kabaena Tengah', bpsCode: '74.06.16' },
                    { name: 'Kepulauan Masaloka Raya', bpsCode: '74.06.17' },
                    { name: 'Rumbia Tengah', bpsCode: '74.06.18' },
                    { name: 'Poleang Tengah', bpsCode: '74.06.19' },
                    { name: 'Tontonunu', bpsCode: '74.06.20' },
                    { name: 'Lantari Jaya', bpsCode: '74.06.21' },
                    { name: 'Mata Usu', bpsCode: '74.06.22' }
                ]
            }, {
                name: 'Wakatobi',
                bpsCode: '74.07',
                districts: [
                    { name: 'Wangi Wangi', bpsCode: '74.07.01' },
                    { name: 'Kaledupa', bpsCode: '74.07.02' },
                    { name: 'Tomia', bpsCode: '74.07.03' },
                    { name: 'Binongko', bpsCode: '74.07.04' },
                    { name: 'Wangi Wangi Selatan', bpsCode: '74.07.05' },
                    { name: 'Kaledupa Selatan', bpsCode: '74.07.06' },
                    { name: 'Tomia Timur', bpsCode: '74.07.07' },
                    { name: 'Togo Binongko', bpsCode: '74.07.08' }
                ]
            }, {
                name: 'Kolaka Utara',
                bpsCode: '74.08',
                districts: [
                    { name: 'Lasusua', bpsCode: '74.08.01' },
                    { name: 'Pakue', bpsCode: '74.08.02' },
                    { name: 'Batu Putih', bpsCode: '74.08.03' },
                    { name: 'Rante Angin', bpsCode: '74.08.04' },
                    { name: 'Kodeoha', bpsCode: '74.08.05' },
                    { name: 'Ngapa', bpsCode: '74.08.06' },
                    { name: 'Wawo', bpsCode: '74.08.07' },
                    { name: 'Lambai', bpsCode: '74.08.08' },
                    { name: 'Watunohu', bpsCode: '74.08.09' },
                    { name: 'Pakue Tengah', bpsCode: '74.08.10' },
                    { name: 'Pakue Utara', bpsCode: '74.08.11' },
                    { name: 'Porehu', bpsCode: '74.08.12' },
                    { name: 'Katoi', bpsCode: '74.08.13' },
                    { name: 'Tiwu', bpsCode: '74.08.14' },
                    { name: 'Tolala', bpsCode: '74.08.15' }
                ]
            }, {
                name: 'Konawe Utara',
                bpsCode: '74.09',
                districts: [
                    { name: 'Asera', bpsCode: '74.09.01' },
                    { name: 'Wiwirano', bpsCode: '74.09.02' },
                    { name: 'Langgikima', bpsCode: '74.09.03' },
                    { name: 'Molawe', bpsCode: '74.09.04' },
                    { name: 'Lasolo', bpsCode: '74.09.05' },
                    { name: 'Lembo', bpsCode: '74.09.06' },
                    { name: 'Sawa', bpsCode: '74.09.07' },
                    { name: 'Oheo', bpsCode: '74.09.08' },
                    { name: 'Andowia', bpsCode: '74.09.09' },
                    { name: 'Motui', bpsCode: '74.09.10' },
                    { name: 'Wawolesea', bpsCode: '74.09.11' },
                    { name: 'Lasolo Kepulauan', bpsCode: '74.09.12' },
                    { name: 'Landawe', bpsCode: '74.09.13' }
                ]
            }, {
                name: 'Buton Utara',
                bpsCode: '74.10',
                districts: [
                    { name: 'Kulisusu (Kalingsusu/Kalisusu)', bpsCode: '74.10.01' },
                    { name: 'Kambowa', bpsCode: '74.10.02' },
                    { name: 'Bonegunu', bpsCode: '74.10.03' },
                    { name: 'Kulisusu Barat', bpsCode: '74.10.04' },
                    { name: 'Kulisusu Utara', bpsCode: '74.10.05' },
                    { name: 'Wakorumba Utara', bpsCode: '74.10.06' }
                ]
            }, {
                name: 'Kolaka Timur',
                bpsCode: '74.11',
                districts: [
                    { name: 'Tirawuta', bpsCode: '74.11.01' },
                    { name: 'Loea', bpsCode: '74.11.02' },
                    { name: 'Ladongi', bpsCode: '74.11.03' },
                    { name: 'Poli Polia', bpsCode: '74.11.04' },
                    { name: 'Lambandia', bpsCode: '74.11.05' },
                    { name: 'Lalolae', bpsCode: '74.11.06' },
                    { name: 'Mowewe', bpsCode: '74.11.07' },
                    { name: 'Uluiwoi', bpsCode: '74.11.08' },
                    { name: 'Tinondo', bpsCode: '74.11.09' },
                    { name: 'Aere', bpsCode: '74.11.10' },
                    { name: 'Ueesi', bpsCode: '74.11.11' },
                    { name: 'Dangia', bpsCode: '74.11.12' }
                ]
            }, {
                name: 'Konawe Kepulauan',
                bpsCode: '74.12',
                districts: [
                    { name: 'Wawonii Barat', bpsCode: '74.12.01' },
                    { name: 'Wawonii Utara', bpsCode: '74.12.02' },
                    { name: 'Wawonii Timur Laut', bpsCode: '74.12.03' },
                    { name: 'Wawonii Timur', bpsCode: '74.12.04' },
                    { name: 'Wawonii Tenggara', bpsCode: '74.12.05' },
                    { name: 'Wawonii Selatan', bpsCode: '74.12.06' },
                    { name: 'Wawonii Tengah', bpsCode: '74.12.07' }
                ]
            }, {
                name: 'Muna Barat',
                bpsCode: '74.13',
                districts: [
                    { name: 'Sawerigadi', bpsCode: '74.13.01' },
                    { name: 'Barangka', bpsCode: '74.13.02' },
                    { name: 'Lawa', bpsCode: '74.13.03' },
                    { name: 'Wadaga', bpsCode: '74.13.04' },
                    { name: 'Tiworo Selatan', bpsCode: '74.13.05' },
                    { name: 'Maginti', bpsCode: '74.13.06' },
                    { name: 'Tiworo Tengah', bpsCode: '74.13.07' },
                    { name: 'Tiworo Utara', bpsCode: '74.13.08' },
                    { name: 'Tiworo Kepulauan', bpsCode: '74.13.09' },
                    { name: 'Kusambi', bpsCode: '74.13.10' },
                    { name: 'Napano Kusambi', bpsCode: '74.13.11' }
                ]
            }, {
                name: 'Buton Tengah',
                bpsCode: '74.14',
                districts: [
                    { name: 'Lakudo', bpsCode: '74.14.01' },
                    { name: 'Mawasangka Timur', bpsCode: '74.14.02' },
                    { name: 'Mawasangka Tengah', bpsCode: '74.14.03' },
                    { name: 'Mawasangka', bpsCode: '74.14.04' },
                    { name: 'Talaga Raya', bpsCode: '74.14.05' },
                    { name: 'Gu', bpsCode: '74.14.06' },
                    { name: 'Sangia Wambulu', bpsCode: '74.14.07' }
                ]
            }, {
                name: 'Buton Selatan',
                bpsCode: '74.15',
                districts: [
                    { name: 'Batauga', bpsCode: '74.15.01' },
                    { name: 'Sampolawa', bpsCode: '74.15.02' },
                    { name: 'Lapandewa', bpsCode: '74.15.03' },
                    { name: 'Batu Atas', bpsCode: '74.15.04' },
                    { name: 'Siompu Barat', bpsCode: '74.15.05' },
                    { name: 'Siompu', bpsCode: '74.15.06' },
                    { name: 'Kadatua', bpsCode: '74.15.07' }
                ]
            }, {
                name: 'Kendari',
                bpsCode: '74.71',
                districts: [
                    { name: 'Mandonga', bpsCode: '74.71.01' },
                    { name: 'Kendari', bpsCode: '74.71.02' },
                    { name: 'Baruga', bpsCode: '74.71.03' },
                    { name: 'Poasia', bpsCode: '74.71.04' },
                    { name: 'Kendari Barat', bpsCode: '74.71.05' },
                    { name: 'Abeli', bpsCode: '74.71.06' },
                    { name: 'Wua-Wua', bpsCode: '74.71.07' },
                    { name: 'Kadia', bpsCode: '74.71.08' },
                    { name: 'Puuwatu', bpsCode: '74.71.09' },
                    { name: 'Kambu', bpsCode: '74.71.10' }
                ]
            }, {
                name: 'Bau-Bau',
                bpsCode: '74.72',
                districts: [
                    { name: 'Betoambari', bpsCode: '74.72.01' },
                    { name: 'Wolio', bpsCode: '74.72.02' },
                    { name: 'Sorawolio (Sora Walio / Sorowalio)', bpsCode: '74.72.03' },
                    { name: 'Bungi', bpsCode: '74.72.04' },
                    { name: 'Kokalukuna', bpsCode: '74.72.05' },
                    { name: 'Murhum', bpsCode: '74.72.06' },
                    { name: 'Lea-Lea', bpsCode: '74.72.07' },
                    { name: 'Batupoaro', bpsCode: '74.72.08' }
                ]
            }
        ]
    },
    '75': {
        regencies: [
            {
                name: 'Gorontalo',
                bpsCode: '75.01',
                districts: [
                    { name: 'Limboto', bpsCode: '75.01.01' },
                    { name: 'Telaga', bpsCode: '75.01.02' },
                    { name: 'Batudaa', bpsCode: '75.01.03' },
                    { name: 'Tibawa', bpsCode: '75.01.04' },
                    { name: 'Batudaa Pantai', bpsCode: '75.01.05' },
                    { name: 'Boliohuto (Boliyohuto)', bpsCode: '75.01.09' },
                    { name: 'Telaga Biru', bpsCode: '75.01.10' },
                    { name: 'Bongomeme', bpsCode: '75.01.11' },
                    { name: 'Tolangohula', bpsCode: '75.01.13' },
                    { name: 'Mootilango', bpsCode: '75.01.14' },
                    { name: 'Pulubala', bpsCode: '75.01.16' },
                    { name: 'Limboto Barat', bpsCode: '75.01.17' },
                    { name: 'Tilango', bpsCode: '75.01.18' },
                    { name: 'Tabongo', bpsCode: '75.01.19' },
                    { name: 'Biluhu', bpsCode: '75.01.20' },
                    { name: 'Asparaga', bpsCode: '75.01.21' },
                    { name: 'Talaga Jaya (Telaga Jaya)', bpsCode: '75.01.22' },
                    { name: 'Bilato', bpsCode: '75.01.23' },
                    { name: 'Dungaliyo', bpsCode: '75.01.24' },
                ]
            }, {
                name: 'Boalemo',
                bpsCode: '75.02',
                districts: [
                    { name: 'Paguyaman', bpsCode: '75.02.01' },
                    { name: 'Wonosari', bpsCode: '75.02.02' },
                    { name: 'Dulupi', bpsCode: '75.02.03' },
                    { name: 'Tilamuta', bpsCode: '75.02.04' },
                    { name: 'Mananggu', bpsCode: '75.02.05' },
                    { name: 'Botumoita', bpsCode: '75.02.06' },
                    { name: 'Paguyaman Pantai', bpsCode: '75.02.07' },
                ]
            }, {
                name: 'Bone Bolango',
                bpsCode: '75.03',
                districts: [
                    { name: 'Tapa', bpsCode: '75.03.01' },
                    { name: 'Kabila', bpsCode: '75.03.02' },
                    { name: 'Suwawa', bpsCode: '75.03.03' },
                    { name: 'Bonepantai', bpsCode: '75.03.04' },
                    { name: 'Bulango Utara', bpsCode: '75.03.05' },
                    { name: 'Tilongkabila', bpsCode: '75.03.06' },
                    { name: 'Botupingge (Botu Pingge)', bpsCode: '75.03.07' },
                    { name: 'Kabila Bone', bpsCode: '75.03.08' },
                    { name: 'Bone', bpsCode: '75.03.09' },
                    { name: 'Bone Raya', bpsCode: '75.03.10' },
                    { name: 'Suwawa Timur', bpsCode: '75.03.11' },
                    { name: 'Suwawa Selatan', bpsCode: '75.03.12' },
                    { name: 'Suwawa Tengah', bpsCode: '75.03.13' },
                    { name: 'Bulango Ulu', bpsCode: '75.03.14' },
                    { name: 'Bulango Selatan', bpsCode: '75.03.15' },
                    { name: 'Bulango Timur', bpsCode: '75.03.16' },
                    { name: 'Bulawa', bpsCode: '75.03.17' },
                    { name: 'Pinogu', bpsCode: '75.03.18' },
                ]
            }, {
                name: 'Pohuwato',
                bpsCode: '75.04',
                districts: [
                    { name: 'Popayato', bpsCode: '75.04.01' },
                    { name: 'Lemito', bpsCode: '75.04.02' },
                    { name: 'Randangan', bpsCode: '75.04.03' },
                    { name: 'Marisa', bpsCode: '75.04.04' },
                    { name: 'Paguat', bpsCode: '75.04.05' },
                    { name: 'Patilanggio', bpsCode: '75.04.06' },
                    { name: 'Taluditi (Taluduti)', bpsCode: '75.04.07' },
                    { name: 'Dengilo', bpsCode: '75.04.08' },
                    { name: 'Buntulia', bpsCode: '75.04.09' },
                    { name: 'Duhiadaa', bpsCode: '75.04.10' },
                    { name: 'Wanggarasi', bpsCode: '75.04.11' },
                    { name: 'Popayato Timur', bpsCode: '75.04.12' },
                    { name: 'Popayato Barat', bpsCode: '75.04.13' },
                ]
            }, {
                name: 'Gorontalo Utara',
                bpsCode: '75.05',
                districts: [
                    { name: 'Atinggola', bpsCode: '75.05.01' },
                    { name: 'Kwandang', bpsCode: '75.05.02' },
                    { name: 'Anggrek', bpsCode: '75.05.03' },
                    { name: 'Sumalata', bpsCode: '75.05.04' },
                    { name: 'Tolinggula', bpsCode: '75.05.05' },
                    { name: 'Gentuma Raya', bpsCode: '75.05.06' },
                    { name: 'Tomolito', bpsCode: '75.05.07' },
                    { name: 'Ponelo Kepulauan', bpsCode: '75.05.08' },
                    { name: 'Monano', bpsCode: '75.05.09' },
                    { name: 'Biau', bpsCode: '75.05.10' },
                    { name: 'Sumalata Timur', bpsCode: '75.05.11' },
                ]
            }, {
                name: 'Gorontalo',
                bpsCode: '75.71',
                districts: [
                    { name: 'Kota Barat', bpsCode: '75.71.01' },
                    { name: 'Kota Selatan', bpsCode: '75.71.02' },
                    { name: 'Kota Utara', bpsCode: '75.71.03' },
                    { name: 'Dungingi', bpsCode: '75.71.04' },
                    { name: 'Kota Timur', bpsCode: '75.71.05' },
                    { name: 'Kota Tengah', bpsCode: '75.71.06' },
                    { name: 'Sipatana', bpsCode: '75.71.07' },
                    { name: 'Dumbo Raya', bpsCode: '75.71.08' },
                    { name: 'Hulonthalangi', bpsCode: '75.71.09' }
                ]
            },
        ]
    },
    '76': {
        regencies: [
            {
                name: 'Mamuju Utara',
                bpsCode: '76.01',
                districts: [
                    { name: 'Bambalamotu', bpsCode: '76.01.01' },
                    { name: 'Pasangkayu', bpsCode: '76.01.02' },
                    { name: 'Baras', bpsCode: '76.01.03' },
                    { name: 'Sarudu', bpsCode: '76.01.04' },
                    { name: 'Dapurang', bpsCode: '76.01.05' },
                    { name: 'Duripoku', bpsCode: '76.01.06' },
                    { name: 'Bulu Taba', bpsCode: '76.01.07' },
                    { name: 'Tikke Raya', bpsCode: '76.01.08' },
                    { name: 'Pedongga', bpsCode: '76.01.09' },
                    { name: 'Bambaira', bpsCode: '76.01.10' },
                    { name: 'Sarjo', bpsCode: '76.01.11' },
                    { name: 'Lariang', bpsCode: '76.01.12' }
                ]
            }, {
                name: 'Mamuju',
                bpsCode: '76.02',
                districts: [
                    { name: 'Mamuju', bpsCode: '76.02.01' },
                    { name: 'Tapalang', bpsCode: '76.02.02' },
                    { name: 'Kalukku', bpsCode: '76.02.03' },
                    { name: 'Kalumpang', bpsCode: '76.02.04' },
                    { name: 'Papalang', bpsCode: '76.02.07' },
                    { name: 'Sampaga', bpsCode: '76.02.08' },
                    { name: 'Tommo', bpsCode: '76.02.11' },
                    { name: 'Simboro dan Kepulauan', bpsCode: '76.02.12' },
                    { name: 'Tapalang Barat', bpsCode: '76.02.13' },
                    { name: 'Bonehau', bpsCode: '76.02.15' },
                    { name: 'Kep. Bala Balakang', bpsCode: '76.02.16' }
                ]
            }, {
                name: 'Mamasa',
                bpsCode: '76.03',
                districts: [
                    { name: 'Mambi', bpsCode: '76.03.01' },
                    { name: 'Aralle', bpsCode: '76.03.02' },
                    { name: 'Mamasa', bpsCode: '76.03.03' },
                    { name: 'Pana', bpsCode: '76.03.04' },
                    { name: 'Tabulahan', bpsCode: '76.03.05' },
                    { name: 'Sumarorong', bpsCode: '76.03.06' },
                    { name: 'Messawa', bpsCode: '76.03.07' },
                    { name: 'Sesenapadang', bpsCode: '76.03.08' },
                    { name: 'Tanduk Kalua', bpsCode: '76.03.09' },
                    { name: 'Tabang', bpsCode: '76.03.10' },
                    { name: 'Bambang', bpsCode: '76.03.11' },
                    { name: 'Balla', bpsCode: '76.03.12' },
                    { name: 'Nosu', bpsCode: '76.03.13' },
                    { name: 'Tawalian', bpsCode: '76.03.14' },
                    { name: 'Rantebulahan Timur', bpsCode: '76.03.15' },
                    { name: 'Buntumalangka', bpsCode: '76.03.16' },
                    { name: 'Mehalaan', bpsCode: '76.03.17' }
                ]
            }, {
                name: 'Polewali Mandar',
                bpsCode: '76.04',
                districts: [
                    { name: 'Tinambung', bpsCode: '76.04.01' },
                    { name: 'Campalagian', bpsCode: '76.04.02' },
                    { name: 'Wonomulyo', bpsCode: '76.04.03' },
                    { name: 'Polewali', bpsCode: '76.04.04' },
                    { name: 'Tubbi Taramanu (Tutar/Tutallu)', bpsCode: '76.04.05' },
                    { name: 'Binuang', bpsCode: '76.04.06' },
                    { name: 'Tapango', bpsCode: '76.04.07' },
                    { name: 'Mapilli', bpsCode: '76.04.08' },
                    { name: 'Matangnga', bpsCode: '76.04.09' },
                    { name: 'Luyo', bpsCode: '76.04.10' },
                    { name: 'Limboro', bpsCode: '76.04.11' },
                    { name: 'Balanipa', bpsCode: '76.04.12' },
                    { name: 'Anreapi', bpsCode: '76.04.13' },
                    { name: 'Matakali', bpsCode: '76.04.14' },
                    { name: 'Alu (Allu)', bpsCode: '76.04.15' },
                    { name: 'Bulo', bpsCode: '76.04.16' }
                ]
            }, {
                name: 'Majene',
                bpsCode: '76.05',
                districts: [
                    { name: 'Banggae', bpsCode: '76.05.01' },
                    { name: 'Pamboang', bpsCode: '76.05.02' },
                    { name: 'Sendana', bpsCode: '76.05.03' },
                    { name: 'Malunda', bpsCode: '76.05.04' },
                    { name: 'Ulumanda (Ulumunda)', bpsCode: '76.05.05' },
                    { name: 'Tammerodo Sendana (Tammeredo Sendana)', bpsCode: '76.05.06' },
                    { name: 'Tubo (Tubo Sendana)', bpsCode: '76.05.07' },
                    { name: 'Banggae Timur', bpsCode: '76.05.08' }
                ]
            }, {
                name: 'Mamuju Tengah',
                bpsCode: '76.06',
                districts: [
                    { name: 'Tobadak', bpsCode: '76.06.01' },
                    { name: 'Pangale', bpsCode: '76.06.02' },
                    { name: 'Budong-Budong', bpsCode: '76.06.03' },
                    { name: 'Topoyo', bpsCode: '76.06.04' },
                    { name: 'Karossa', bpsCode: '76.06.05' }
                ]
            }
        ]
    },
    '81': {
        regencies: [
            {
                name: 'Maluku Tengah',
                bpsCode: '81.01',
                districts: [
                    { name: 'Amahai', bpsCode: '81.01.01' },
                    { name: 'Teon Nila Serua', bpsCode: '81.01.02' },
                    { name: 'Seram Utara', bpsCode: '81.01.06' },
                    { name: 'Banda', bpsCode: '81.01.09' },
                    { name: 'Tehoru', bpsCode: '81.01.11' },
                    { name: 'Saparua', bpsCode: '81.01.12' },
                    { name: 'Pulau Haruku', bpsCode: '81.01.13' },
                    { name: 'Salahutu', bpsCode: '81.01.14' },
                    { name: 'Leihitu', bpsCode: '81.01.15' },
                    { name: 'Nusa Laut', bpsCode: '81.01.16' },
                    { name: 'Kota Masohi', bpsCode: '81.01.17' },
                    { name: 'Seram Utara Barat', bpsCode: '81.01.20' },
                    { name: 'Teluk Elpaputih', bpsCode: '81.01.21' },
                    { name: 'Leihitu Barat', bpsCode: '81.01.22' },
                    { name: 'Telutih', bpsCode: '81.01.23' },
                    { name: 'Seram Utara Timur Seti', bpsCode: '81.01.24' },
                    { name: 'Seram Utara Timur Kobi', bpsCode: '81.01.25' },
                    { name: 'Saparua Timur', bpsCode: '81.01.26' }
                ]
            }, {
                name: 'Maluku Tenggara',
                bpsCode: '81.02',
                districts: [
                    { name: 'Kei Kecil', bpsCode: '81.02.01' },
                    { name: 'Kei Besar', bpsCode: '81.02.03' },
                    { name: 'Kei Besar Selatan', bpsCode: '81.02.04' },
                    { name: 'Kei Besar Utara Timur', bpsCode: '81.02.05' },
                    { name: 'Kei Kecil Timur', bpsCode: '81.02.13' },
                    { name: 'Kei Kecil Barat', bpsCode: '81.02.14' },
                    { name: 'Manyeuw', bpsCode: '81.02.15' },
                    { name: 'Hoat Sorbay', bpsCode: '81.02.16' },
                    { name: 'Kei Besar Utara Barat', bpsCode: '81.02.17' },
                    { name: 'Kei Besar Selatan Barat', bpsCode: '81.02.18' },
                    { name: 'Kei Kecil Timur Selatan', bpsCode: '81.02.19' }
                ]
            }, {
                name: 'Maluku Tenggara Barat',
                bpsCode: '81.03',
                districts: [
                    { name: 'Tanimbar Selatan', bpsCode: '81.03.01' },
                    { name: 'Selaru', bpsCode: '81.03.02' },
                    { name: 'Wer Tamrian', bpsCode: '81.03.03' },
                    { name: 'Wer Maktian', bpsCode: '81.03.04' },
                    { name: 'Tanimbar Utara', bpsCode: '81.03.05' },
                    { name: 'Yaru', bpsCode: '81.03.06' },
                    { name: 'Wuar Labobar', bpsCode: '81.03.07' },
                    { name: 'Kormomolin', bpsCode: '81.03.08' },
                    { name: 'Nirunmas', bpsCode: '81.03.09' },
                    { name: 'Molu Maru', bpsCode: '81.03.18' }
                ]
            }, {
                name: 'Buru',
                bpsCode: '81.04',
                districts: [
                    { name: 'Namlea', bpsCode: '81.04.01' },
                    { name: 'Air Buaya (Airbuaya)', bpsCode: '81.04.02' },
                    { name: 'Waeapo', bpsCode: '81.04.03' },
                    { name: 'Waplau', bpsCode: '81.04.06' },
                    { name: 'Batabual', bpsCode: '81.04.10' },
                    { name: 'Lolong Guba', bpsCode: '81.04.11' },
                    { name: 'Waelata', bpsCode: '81.04.12' },
                    { name: 'Fena Leisela', bpsCode: '81.04.13' },
                    { name: 'Teluk Kaiely', bpsCode: '81.04.14' },
                    { name: 'Lilialy', bpsCode: '81.04.15' }
                ]
            }, {
                name: 'Seram Bagian Timur',
                bpsCode: '81.05',
                districts: [
                    { name: 'Bula', bpsCode: '81.05.01' },
                    { name: 'Seram Timur', bpsCode: '81.05.02' },
                    { name: 'Werinama', bpsCode: '81.05.03' },
                    { name: 'Pulau Gorom', bpsCode: '81.05.04' },
                    { name: 'Wakate', bpsCode: '81.05.05' },
                    { name: 'Tutuk Tolu', bpsCode: '81.05.06' },
                    { name: 'Siwalalat', bpsCode: '81.05.07' },
                    { name: 'Kilmury', bpsCode: '81.05.08' },
                    { name: 'Pulau Panjang', bpsCode: '81.05.09' },
                    { name: 'Teor', bpsCode: '81.05.10' },
                    { name: 'Gorom Timur', bpsCode: '81.05.11' },
                    { name: 'Bula Barat', bpsCode: '81.05.12' },
                    { name: 'Kian Darat', bpsCode: '81.05.13' },
                    { name: 'Siritaun Wida Timur', bpsCode: '81.05.14' },
                    { name: 'Teluk Waru', bpsCode: '81.05.15' }
                ]
            }, {
                name: 'Seram Bagian Barat',
                bpsCode: '81.06',
                districts: [
                    { name: 'Kairatu', bpsCode: '81.06.01' },
                    { name: 'Seram Barat', bpsCode: '81.06.02' },
                    { name: 'Taniwel', bpsCode: '81.06.03' },
                    { name: 'Huamual Belakang', bpsCode: '81.06.04' },
                    { name: 'Amalatu', bpsCode: '81.06.05' },
                    { name: 'Inamosol', bpsCode: '81.06.06' },
                    { name: 'Kairatu Barat', bpsCode: '81.06.07' },
                    { name: 'Huamual', bpsCode: '81.06.08' },
                    { name: 'Kepulauan Manipa', bpsCode: '81.06.09' },
                    { name: 'Taniwel Timur', bpsCode: '81.06.10' },
                    { name: 'Elpaputih', bpsCode: '81.06.11' }
                ]
            }, {
                name: 'Kepulauan Aru',
                bpsCode: '81.07',
                districts: [
                    { name: 'Pulau-Pulau Aru', bpsCode: '81.07.01' },
                    { name: 'Aru Selatan', bpsCode: '81.07.02' },
                    { name: 'Aru Tengah', bpsCode: '81.07.03' },
                    { name: 'Aru Utara', bpsCode: '81.07.04' },
                    { name: 'Aru Utara Timur Batuley', bpsCode: '81.07.05' },
                    { name: 'Sir-Sir', bpsCode: '81.07.06' },
                    { name: 'Aru Tengah Timur', bpsCode: '81.07.07' },
                    { name: 'Aru Tengah Selatan', bpsCode: '81.07.08' },
                    { name: 'Aru Selatan Timur', bpsCode: '81.07.09' },
                    { name: 'Aru Selatan Utara', bpsCode: '81.07.10' }
                ]
            }, {
                name: 'Maluku Barat Daya',
                bpsCode: '81.08',
                districts: [
                    { name: 'Moa Lakor', bpsCode: '81.08.01' },
                    { name: 'Damer', bpsCode: '81.08.02' },
                    { name: 'Mndona Hiera (Mdona Hyera / Hiera)', bpsCode: '81.08.03' },
                    { name: 'Pulau Pulau Babar', bpsCode: '81.08.04' },
                    { name: 'Pulau-Pulau Babar Timur', bpsCode: '81.08.05' },
                    { name: 'Wetar', bpsCode: '81.08.06' },
                    { name: 'Pulau Pulau Terselatan', bpsCode: '81.08.07' },
                    { name: 'Pulau Leti / Letti (Leti Moa Lakor)', bpsCode: '81.08.08' },
                    { name: 'Pulau Masela', bpsCode: '81.08.09' },
                    { name: 'Dawelor Dawera', bpsCode: '81.08.10' },
                    { name: 'Pulau Wetang', bpsCode: '81.08.11' },
                    { name: 'Pulau Lakor', bpsCode: '81.08.12' },
                    { name: 'Wetar Utara', bpsCode: '81.08.13' },
                    { name: 'Wetar Barat', bpsCode: '81.08.14' },
                    { name: 'Wetar Timur', bpsCode: '81.08.15' },
                    { name: 'Kepulauan Romang', bpsCode: '81.08.16' },
                    { name: 'Kisar Utara', bpsCode: '81.08.17' }
                ]
            }, {
                name: 'Buru Selatan',
                bpsCode: '81.09',
                districts: [
                    { name: 'Namrole', bpsCode: '81.09.01' },
                    { name: 'Waesama', bpsCode: '81.09.02' },
                    { name: 'Ambalau', bpsCode: '81.09.03' },
                    { name: 'Kepala Madan', bpsCode: '81.09.04' },
                    { name: 'Leksula', bpsCode: '81.09.05' },
                    { name: 'Fena Fafan', bpsCode: '81.09.06' }
                ]
            }, {
                name: 'Ambon',
                bpsCode: '81.71',
                districts: [
                    { name: 'Nusaniwe (Nusanive)', bpsCode: '81.71.01' },
                    { name: 'Sirimau', bpsCode: '81.71.02' },
                    { name: 'Baguala', bpsCode: '81.71.03' },
                    { name: 'Teluk Ambon', bpsCode: '81.71.04' },
                    { name: 'Leitimur Selatan', bpsCode: '81.71.05' }
                ]
            }, {
                name: 'Tual',
                bpsCode: '81.72',
                districts: [
                    { name: 'Pulau Dullah Utara', bpsCode: '81.72.01' },
                    { name: 'Pulau Dullah Selatan', bpsCode: '81.72.02' },
                    { name: 'Tayando Tam', bpsCode: '81.72.03' },
                    { name: 'Pulau-Pulau Kur', bpsCode: '81.72.04' },
                    { name: 'Kur Selatan', bpsCode: '81.72.05' }
                ]
            }
        ]
    },
    '82': {
        regencies: [
            {
                name: 'Halmahera Barat',
                bpsCode: '82.01',
                districts: [
                    { name: 'Jailolo', bpsCode: '82.01.01' },
                    { name: 'Loloda', bpsCode: '82.01.02' },
                    { name: 'Ibu', bpsCode: '82.01.03' },
                    { name: 'Sahu', bpsCode: '82.01.04' },
                    { name: 'Jailolo Selatan', bpsCode: '82.01.05' },
                    { name: 'Ibu Utara', bpsCode: '82.01.07' },
                    { name: 'Ibu Selatan', bpsCode: '82.01.08' },
                    { name: 'Sahu Timur', bpsCode: '82.01.09' }
                ]
            }, {
                name: 'Halmahera Tengah',
                bpsCode: '82.02',
                districts: [
                    { name: 'Weda', bpsCode: '82.02.01' },
                    { name: 'Patani', bpsCode: '82.02.02' },
                    { name: 'Pulau Gebe', bpsCode: '82.02.03' },
                    { name: 'Weda Utara', bpsCode: '82.02.04' },
                    { name: 'Weda Selatan', bpsCode: '82.02.05' },
                    { name: 'Patani Utara', bpsCode: '82.02.06' },
                    { name: 'Weda Tengah', bpsCode: '82.02.07' },
                    { name: 'Patani Barat', bpsCode: '82.02.08' },
                    { name: 'Weda Timur', bpsCode: '82.02.09' },
                    { name: 'Patani Timur', bpsCode: '82.02.10' }
                ]
            }, {
                name: 'Halmahera Utara',
                bpsCode: '82.03',
                districts: [
                    { name: 'Galela', bpsCode: '82.03.04' },
                    { name: 'Tobelo', bpsCode: '82.03.05' },
                    { name: 'Tobelo Selatan', bpsCode: '82.03.06' },
                    { name: 'Kao', bpsCode: '82.03.07' },
                    { name: 'Malifut', bpsCode: '82.03.08' },
                    { name: 'Loloda Utara', bpsCode: '82.03.09' },
                    { name: 'Tobelo Utara', bpsCode: '82.03.10' },
                    { name: 'Tobelo Tengah', bpsCode: '82.03.11' },
                    { name: 'Tobelo Timur', bpsCode: '82.03.12' },
                    { name: 'Tobelo Barat', bpsCode: '82.03.13' },
                    { name: 'Galela Barat', bpsCode: '82.03.14' },
                    { name: 'Galela Utara', bpsCode: '82.03.15' },
                    { name: 'Galela Selatan', bpsCode: '82.03.16' },
                    { name: 'Loloda Kepulauan', bpsCode: '82.03.19' },
                    { name: 'Kao Utara', bpsCode: '82.03.20' },
                    { name: 'Kao Barat', bpsCode: '82.03.21' },
                    { name: 'Kao Teluk', bpsCode: '82.03.22' }
                ]
            }, {
                name: 'Halmahera Selatan',
                bpsCode: '82.04',
                districts: [
                    { name: 'Pulau Makian', bpsCode: '82.04.01' },
                    { name: 'Kayoa', bpsCode: '82.04.02' },
                    { name: 'Gane Timur', bpsCode: '82.04.03' },
                    { name: 'Gane Barat', bpsCode: '82.04.04' },
                    { name: 'Obi Selatan', bpsCode: '82.04.05' },
                    { name: 'Obi', bpsCode: '82.04.06' },
                    { name: 'Bacan Timur', bpsCode: '82.04.07' },
                    { name: 'Bacan', bpsCode: '82.04.08' },
                    { name: 'Bacan Barat', bpsCode: '82.04.09' },
                    { name: 'Makian Barat', bpsCode: '82.04.10' },
                    { name: 'Kayoa Barat', bpsCode: '82.04.11' },
                    { name: 'Kayoa Selatan', bpsCode: '82.04.12' },
                    { name: 'Kayoa Utara', bpsCode: '82.04.13' },
                    { name: 'Bacan Barat Utara', bpsCode: '82.04.14' },
                    { name: 'Kasiruta Barat', bpsCode: '82.04.15' },
                    { name: 'Kasiruta Timur', bpsCode: '82.04.16' },
                    { name: 'Bacan Selatan', bpsCode: '82.04.17' },
                    { name: 'Kepulauan Botanglomang', bpsCode: '82.04.18' },
                    { name: 'Mandioli Selatan', bpsCode: '82.04.19' },
                    { name: 'Mandioli Utara', bpsCode: '82.04.20' },
                    { name: 'Bacan Timur Selatan', bpsCode: '82.04.21' },
                    { name: 'Bacan Timur Tengah', bpsCode: '82.04.22' },
                    { name: 'Gane Barat Selatan', bpsCode: '82.04.23' },
                    { name: 'Gane Barat Utara', bpsCode: '82.04.24' },
                    { name: 'Kepulauan Joronga', bpsCode: '82.04.25' },
                    { name: 'Gane Timur Selatan', bpsCode: '82.04.26' },
                    { name: 'Gane Timur Tengah', bpsCode: '82.04.27' },
                    { name: 'Obi Barat', bpsCode: '82.04.28' },
                    { name: 'Obi Timur', bpsCode: '82.04.29' },
                    { name: 'Obi Utara', bpsCode: '82.04.30' }
                ]
            }, {
                name: 'Kepulauan Sula',
                bpsCode: '82.05',
                districts: [
                    { name: 'Mangoli Timur', bpsCode: '82.05.01' },
                    { name: 'Sanana', bpsCode: '82.05.02' },
                    { name: 'Sulabesi Barat', bpsCode: '82.05.03' },
                    { name: 'Mangoli Barat', bpsCode: '82.05.06' },
                    { name: 'Sulabesi Tengah', bpsCode: '82.05.07' },
                    { name: 'Sulabesi Timur', bpsCode: '82.05.08' },
                    { name: 'Sulabesi Selatan', bpsCode: '82.05.09' },
                    { name: 'Mangoli Utara Timur', bpsCode: '82.05.10' },
                    { name: 'Mangoli Tengah', bpsCode: '82.05.11' },
                    { name: 'Mangoli Selatan', bpsCode: '82.05.12' },
                    { name: 'Mangoli Utara', bpsCode: '82.05.13' },
                    { name: 'Sanana Utara', bpsCode: '82.05.18' }
                ]
            }, {
                name: 'Halmahera Timur',
                bpsCode: '82.06',
                districts: [
                    { name: 'Wasile', bpsCode: '82.06.01' },
                    { name: 'Maba', bpsCode: '82.06.02' },
                    { name: 'Maba Selatan', bpsCode: '82.06.03' },
                    { name: 'Wasile Selatan', bpsCode: '82.06.04' },
                    { name: 'Wasile Tengah', bpsCode: '82.06.05' },
                    { name: 'Wasile Utara', bpsCode: '82.06.06' },
                    { name: 'Wasile Timur', bpsCode: '82.06.07' },
                    { name: 'Maba Tengah', bpsCode: '82.06.08' },
                    { name: 'Maba Utara', bpsCode: '82.06.09' },
                    { name: 'Kota Maba', bpsCode: '82.06.10' }
                ]
            }, {
                name: 'Pulau Morotai',
                bpsCode: '82.07',
                districts: [
                    { name: 'Morotai Selatan', bpsCode: '82.07.01' },
                    { name: 'Morotai Selatan Barat', bpsCode: '82.07.02' },
                    { name: 'Morotai Jaya', bpsCode: '82.07.03' },
                    { name: 'Morotai Utara', bpsCode: '82.07.04' },
                    { name: 'Morotai Timur', bpsCode: '82.07.05' }
                ]
            }, {
                name: 'Pulau Taliabu',
                bpsCode: '82.08',
                districts: [
                    { name: 'Taliabu Barat', bpsCode: '82.08.01' },
                    { name: 'Taliabu Barat Laut', bpsCode: '82.08.02' },
                    { name: 'Lede', bpsCode: '82.08.03' },
                    { name: 'Taliabu Utara', bpsCode: '82.08.04' },
                    { name: 'Taliabu Timur', bpsCode: '82.08.05' },
                    { name: 'Taliabu Timur Selatan', bpsCode: '82.08.06' },
                    { name: 'Taliabu Selatan', bpsCode: '82.08.07' },
                    { name: 'Tabona', bpsCode: '82.08.08' }
                ]
            }, {
                name: 'Ternate',
                bpsCode: '82.71',
                districts: [
                    { name: 'Pulau Ternate', bpsCode: '82.71.01' },
                    { name: 'Kota Ternate Selatan', bpsCode: '82.71.02' },
                    { name: 'Kota Ternate Utara', bpsCode: '82.71.03' },
                    { name: 'Moti', bpsCode: '82.71.04' },
                    { name: 'Pulau Batang Dua', bpsCode: '82.71.05' },
                    { name: 'Kota Ternate Tengah', bpsCode: '82.71.06' },
                    { name: 'Pulau Hiri', bpsCode: '82.71.07' }
                ]
            }, {
                name: 'Tidore Kepulauan',
                bpsCode: '82.72',
                districts: [
                    { name: 'Tidore', bpsCode: '82.72.01' },
                    { name: 'Oba Utara', bpsCode: '82.72.02' },
                    { name: 'Oba', bpsCode: '82.72.03' },
                    { name: 'Tidore Selatan', bpsCode: '82.72.04' },
                    { name: 'Tidore Utara', bpsCode: '82.72.05' },
                    { name: 'Oba Tengah', bpsCode: '82.72.06' },
                    { name: 'Oba Selatan', bpsCode: '82.72.07' },
                    { name: 'Tidore Timur', bpsCode: '82.72.08' }
                ]
            }
        ]
    },
    '91': {
        regencies: [
            {
                name: 'Merauke',
                bpsCode: '91.01',
                districts: [
                    { name: 'Merauke', bpsCode: '91.01.01' },
                    { name: 'Muting', bpsCode: '91.01.02' },
                    { name: 'Okaba', bpsCode: '91.01.03' },
                    { name: 'Kimaam', bpsCode: '91.01.04' },
                    { name: 'Semangga', bpsCode: '91.01.05' },
                    { name: 'Tanah Miring', bpsCode: '91.01.06' },
                    { name: 'Jagebob', bpsCode: '91.01.07' },
                    { name: 'Sota', bpsCode: '91.01.08' },
                    { name: 'Ulilin', bpsCode: '91.01.09' },
                    { name: 'Elikobal', bpsCode: '91.01.10' },
                    { name: 'Kurik', bpsCode: '91.01.11' },
                    { name: 'Naukenjerai', bpsCode: '91.01.12' },
                    { name: 'Animha', bpsCode: '91.01.13' },
                    { name: 'Malind', bpsCode: '91.01.14' },
                    { name: 'Tubang', bpsCode: '91.01.15' },
                    { name: 'Ngguti', bpsCode: '91.01.16' },
                    { name: 'Kaptel', bpsCode: '91.01.17' },
                    { name: 'Tabonji', bpsCode: '91.01.18' },
                    { name: 'Waan', bpsCode: '91.01.19' },
                    { name: 'Ilwayab (Ilyawab)', bpsCode: '91.01.20' }
                ]
            }, {
                name: 'Jayawijaya',
                bpsCode: '91.02',
                districts: [
                    { name: 'Wamena', bpsCode: '91.02.01' },
                    { name: 'Kurulu', bpsCode: '91.02.03' },
                    { name: 'Asologaima (Asalogaima)', bpsCode: '91.02.04' },
                    { name: 'Hubikosi (Hobikosi)', bpsCode: '91.02.12' },
                    { name: 'Bolakme', bpsCode: '91.02.15' },
                    { name: 'Walelagama', bpsCode: '91.02.25' },
                    { name: 'Musatfak', bpsCode: '91.02.27' },
                    { name: 'Wollo (Wolo)', bpsCode: '91.02.28' },
                    { name: 'Asolokobal', bpsCode: '91.02.29' },
                    { name: 'Pelebaga', bpsCode: '91.02.34' },
                    { name: 'Yalengga', bpsCode: '91.02.35' },
                    { name: 'Trikora', bpsCode: '91.02.40' },
                    { name: 'Napua', bpsCode: '91.02.41' },
                    { name: 'Walaik', bpsCode: '91.02.42' },
                    { name: 'Wouma', bpsCode: '91.02.43' },
                    { name: 'Hubikiak', bpsCode: '91.02.44' },
                    { name: 'Ibele', bpsCode: '91.02.45' },
                    { name: 'Taelarek', bpsCode: '91.02.46' },
                    { name: 'Itlay Hisage', bpsCode: '91.02.47' },
                    { name: 'Siepkosi', bpsCode: '91.02.48' },
                    { name: 'Usilimo', bpsCode: '91.02.49' },
                    { name: 'Wita Waya', bpsCode: '91.02.50' },
                    { name: 'Libarek', bpsCode: '91.02.51' },
                    { name: 'Wadangku', bpsCode: '91.02.52' },
                    { name: 'Pisugi', bpsCode: '91.02.53' },
                    { name: 'Koragi', bpsCode: '91.02.54' },
                    { name: 'Tagime', bpsCode: '91.02.55' },
                    { name: 'Molagalome', bpsCode: '91.02.56' },
                    { name: 'Tagineri', bpsCode: '91.02.57' },
                    { name: 'Silo Karno Doga', bpsCode: '91.02.58' },
                    { name: 'Piramid', bpsCode: '91.02.59' },
                    { name: 'Muliama', bpsCode: '91.02.60' },
                    { name: 'Bugi', bpsCode: '91.02.61' },
                    { name: 'Bpiri', bpsCode: '91.02.62' },
                    { name: 'Welesi', bpsCode: '91.02.63' },
                    { name: 'Asotipo', bpsCode: '91.02.64' },
                    { name: 'Maima', bpsCode: '91.02.65' },
                    { name: 'Popugoba', bpsCode: '91.02.66' },
                    { name: 'Wame', bpsCode: '91.02.67' },
                    { name: 'Wesaput', bpsCode: '91.02.68' }
                ]
            }, {
                name: 'Jayapura',
                bpsCode: '91.03',
                districts: [
                    { name: 'Sentani', bpsCode: '91.03.01' },
                    { name: 'Sentani Timur', bpsCode: '91.03.02' },
                    { name: 'Depapre', bpsCode: '91.03.03' },
                    { name: 'Sentani Barat', bpsCode: '91.03.04' },
                    { name: 'Kemtuk', bpsCode: '91.03.05' },
                    { name: 'Kemtuk Gresi', bpsCode: '91.03.06' },
                    { name: 'Nimboran', bpsCode: '91.03.07' },
                    { name: 'Nimbokrang', bpsCode: '91.03.08' },
                    { name: 'Unurum Guay', bpsCode: '91.03.09' },
                    { name: 'Demta', bpsCode: '91.03.10' },
                    { name: 'Kaureh', bpsCode: '91.03.11' },
                    { name: 'Ebungfao (Ebungfau / Ebungfa)', bpsCode: '91.03.12' },
                    { name: 'Waibu', bpsCode: '91.03.13' },
                    { name: 'Nambluong', bpsCode: '91.03.14' },
                    { name: 'Yapsi', bpsCode: '91.03.15' },
                    { name: 'Airu', bpsCode: '91.03.16' },
                    { name: 'Raveni Rara (Ravenirara)', bpsCode: '91.03.17' },
                    { name: 'Gresi Selatan', bpsCode: '91.03.18' },
                    { name: 'Yokari', bpsCode: '91.03.19' }
                ]
            }, {
                name: 'Nabire',
                bpsCode: '91.04',
                districts: [
                    { name: 'Nabire', bpsCode: '91.04.01' },
                    { name: 'Napan', bpsCode: '91.04.02' },
                    { name: 'Yaur', bpsCode: '91.04.03' },
                    { name: 'Uwapa', bpsCode: '91.04.06' },
                    { name: 'Wanggar', bpsCode: '91.04.07' },
                    { name: 'Siriwo', bpsCode: '91.04.10' },
                    { name: 'Makimi', bpsCode: '91.04.11' },
                    { name: 'Teluk Umar', bpsCode: '91.04.12' },
                    { name: 'Teluk Kimi', bpsCode: '91.04.16' },
                    { name: 'Yaro (Yaro Kabisay)', bpsCode: '91.04.17' },
                    { name: 'Wapoga', bpsCode: '91.04.21' },
                    { name: 'Nabire Barat', bpsCode: '91.04.22' },
                    { name: 'Moora', bpsCode: '91.04.23' },
                    { name: 'Dipa', bpsCode: '91.04.24' },
                    { name: 'Menou', bpsCode: '91.04.25' }
                ]
            }, {
                name: 'Kepulauan Yapen',
                bpsCode: '91.05',
                districts: [
                    { name: 'Yapen Selatan', bpsCode: '91.05.01' },
                    { name: 'Yapen Barat', bpsCode: '91.05.02' },
                    { name: 'Yapen Timur', bpsCode: '91.05.03' },
                    { name: 'Angkaisera', bpsCode: '91.05.04' },
                    { name: 'Poom', bpsCode: '91.05.05' },
                    { name: 'Kosiwo', bpsCode: '91.05.06' },
                    { name: 'Yapen Utara', bpsCode: '91.05.07' },
                    { name: 'Raimbawi', bpsCode: '91.05.08' },
                    { name: 'Teluk Ampimoi', bpsCode: '91.05.09' },
                    { name: 'Kepulauan Ambai', bpsCode: '91.05.10' },
                    { name: 'Wonawa', bpsCode: '91.05.11' },
                    { name: 'Windesi', bpsCode: '91.05.12' },
                    { name: 'Pulau Kurudu', bpsCode: '91.05.13' },
                    { name: 'Pulau Yerui', bpsCode: '91.05.14' },
                    { name: 'Anotaurei', bpsCode: '91.05.15' },
                    { name: 'Yawakukat', bpsCode: '91.05.16' }
                ]
            }, {
                name: 'Biak Numfor',
                bpsCode: '91.06',
                districts: [
                    { name: 'Biak Kota', bpsCode: '91.06.01' },
                    { name: 'Biak Utara', bpsCode: '91.06.02' },
                    { name: 'Biak Timur', bpsCode: '91.06.03' },
                    { name: 'Numfor Barat', bpsCode: '91.06.04' },
                    { name: 'Numfor Timur', bpsCode: '91.06.05' },
                    { name: 'Biak Barat', bpsCode: '91.06.08' },
                    { name: 'Warsa', bpsCode: '91.06.09' },
                    { name: 'Padaido', bpsCode: '91.06.10' },
                    { name: 'Yendidori', bpsCode: '91.06.11' },
                    { name: 'Samofa', bpsCode: '91.06.12' },
                    { name: 'Yawosi', bpsCode: '91.06.13' },
                    { name: 'Andey', bpsCode: '91.06.14' },
                    { name: 'Swandiwe', bpsCode: '91.06.15' },
                    { name: 'Bruyadori', bpsCode: '91.06.16' },
                    { name: 'Orkeri', bpsCode: '91.06.17' },
                    { name: 'Poiru', bpsCode: '91.06.18' },
                    { name: 'Aimando Padaido', bpsCode: '91.06.19' },
                    { name: 'Oridek', bpsCode: '91.06.20' },
                    { name: 'Bondifuar', bpsCode: '91.06.21' }
                ]
            }, {
                name: 'Puncak Jaya',
                bpsCode: '91.07',
                districts: [
                    { name: 'Mulia', bpsCode: '91.07.01' },
                    { name: 'Ilu', bpsCode: '91.07.03' },
                    { name: 'Fawi', bpsCode: '91.07.06' },
                    { name: 'Mewoluk', bpsCode: '91.07.07' },
                    { name: 'Yamo', bpsCode: '91.07.08' },
                    { name: 'Nume', bpsCode: '91.07.10' },
                    { name: 'Torere', bpsCode: '91.07.11' },
                    { name: 'Tingginambut', bpsCode: '91.07.12' },
                    { name: 'Pagaleme', bpsCode: '91.07.17' },
                    { name: 'Gurage', bpsCode: '91.07.18' },
                    { name: 'Irimuli', bpsCode: '91.07.19' },
                    { name: 'Muara', bpsCode: '91.07.20' },
                    { name: 'Ilamburawi', bpsCode: '91.07.21' },
                    { name: 'Yambi', bpsCode: '91.07.22' },
                    { name: 'Lumo', bpsCode: '91.07.23' },
                    { name: 'Molanikime', bpsCode: '91.07.24' },
                    { name: 'Dokome', bpsCode: '91.07.25' },
                    { name: 'Kalome', bpsCode: '91.07.26' },
                    { name: 'Wanwi', bpsCode: '91.07.27' },
                    { name: 'Yamoneri', bpsCode: '91.07.28' },
                    { name: 'Waegi', bpsCode: '91.07.29' },
                    { name: 'Nioga', bpsCode: '91.07.30' },
                    { name: 'Gubume', bpsCode: '91.07.31' },
                    { name: 'Taganombak', bpsCode: '91.07.32' },
                    { name: 'Dagai', bpsCode: '91.07.33' },
                    { name: 'Kiyage', bpsCode: '91.07.34' }
                ]
            }, {
                name: 'Paniai',
                bpsCode: '91.08',
                districts: [
                    { name: 'Paniai Timur', bpsCode: '91.08.01' },
                    { name: 'Paniai Barat', bpsCode: '91.08.02' },
                    { name: 'Aradide', bpsCode: '91.08.04' },
                    { name: 'Bogabaida (Bogobaida)', bpsCode: '91.08.07' },
                    { name: 'Bibida', bpsCode: '91.08.09' },
                    { name: 'Dumadama', bpsCode: '91.08.12' },
                    { name: 'Siriwo', bpsCode: '91.08.13' },
                    { name: 'Kebo', bpsCode: '91.08.19' },
                    { name: 'Yatamo', bpsCode: '91.08.20' },
                    { name: 'Ekadide', bpsCode: '91.08.21' },
                    { name: 'Wegee Muka', bpsCode: '91.08.22' },
                    { name: 'Wegee Bino', bpsCode: '91.08.23' },
                    { name: 'Pugo Dagi', bpsCode: '91.08.24' },
                    { name: 'Muye', bpsCode: '91.08.25' },
                    { name: 'Nakama', bpsCode: '91.08.26' },
                    { name: 'Teluk Deya', bpsCode: '91.08.27' },
                    { name: 'Yagai', bpsCode: '91.08.28' },
                    { name: 'Youtadi', bpsCode: '91.08.29' },
                    { name: 'Baya Biru', bpsCode: '91.08.30' },
                    { name: 'Deiyai Miyo', bpsCode: '91.08.31' },
                    { name: 'Dogomo', bpsCode: '91.08.32' },
                    { name: 'Aweida', bpsCode: '91.08.33' },
                    { name: 'Topiyai', bpsCode: '91.08.34' }
                ]
            }, {
                name: 'Mimika',
                bpsCode: '91.09',
                districts: [
                    { name: 'Mimika Baru', bpsCode: '91.09.01' },
                    { name: 'Agimuga', bpsCode: '91.09.02' },
                    { name: 'Mimika Timur', bpsCode: '91.09.03' },
                    { name: 'Mimika Barat', bpsCode: '91.09.04' },
                    { name: 'Jita', bpsCode: '91.09.05' },
                    { name: 'Jila', bpsCode: '91.09.06' },
                    { name: 'Mimika Timur Jauh', bpsCode: '91.09.07' },
                    { name: 'Mimika Tengah', bpsCode: '91.09.08' },
                    { name: 'Kuala Kencana', bpsCode: '91.09.09' },
                    { name: 'Tembagapura', bpsCode: '91.09.10' },
                    { name: 'Mimika Barat Jauh', bpsCode: '91.09.11' },
                    { name: 'Mimika Barat Tengah', bpsCode: '91.09.12' },
                    { name: 'Kwamki Narama', bpsCode: '91.09.13' },
                    { name: 'Hoya', bpsCode: '91.09.14' },
                    { name: 'Iwaka', bpsCode: '91.09.15' },
                    { name: 'Wania', bpsCode: '91.09.16' },
                    { name: 'Amar', bpsCode: '91.09.17' },
                    { name: 'Alama', bpsCode: '91.09.18' }
                ]
            }, {
                name: 'Sarmi',
                bpsCode: '91.10',
                districts: [
                    { name: 'Sarmi', bpsCode: '91.10.01' },
                    { name: 'Tor Atas', bpsCode: '91.10.02' },
                    { name: 'Pantai Barat', bpsCode: '91.10.03' },
                    { name: 'Pantai Timur', bpsCode: '91.10.04' },
                    { name: 'Bonggo', bpsCode: '91.10.05' },
                    { name: 'Apawer Hulu', bpsCode: '91.10.09' },
                    { name: 'Sarmi Selatan', bpsCode: '91.10.12' },
                    { name: 'Sarmi Timur', bpsCode: '91.10.13' },
                    { name: 'Pantai Timur Bagian Barat', bpsCode: '91.10.14' },
                    { name: 'Bonggo Timur', bpsCode: '91.10.15' }
                ]
            }, {
                name: 'Keerom',
                bpsCode: '91.11',
                districts: [
                    { name: 'Waris', bpsCode: '91.11.01' },
                    { name: 'Arso', bpsCode: '91.11.02' },
                    { name: 'Senggi', bpsCode: '91.11.03' },
                    { name: 'Web', bpsCode: '91.11.04' },
                    { name: 'Skanto', bpsCode: '91.11.05' },
                    { name: 'Arso Timur', bpsCode: '91.11.06' },
                    { name: 'Towe', bpsCode: '91.11.07' },
                    { name: 'Arso Barat', bpsCode: '91.11.08' },
                    { name: 'Mannem', bpsCode: '91.11.09' },
                    { name: 'Yaffi', bpsCode: '91.11.10' },
                    { name: 'Kaisenar', bpsCode: '91.11.11' }
                ]
            }, {
                name: 'Pegunungan Bintang',
                bpsCode: '91.12',
                districts: [
                    { name: 'Oksibil', bpsCode: '91.12.01' },
                    { name: 'Kiwirok', bpsCode: '91.12.02' },
                    { name: 'Okbibab', bpsCode: '91.12.03' },
                    { name: 'Iwur (Okiwur)', bpsCode: '91.12.04' },
                    { name: 'Batom', bpsCode: '91.12.05' },
                    { name: 'Borme', bpsCode: '91.12.06' },
                    { name: 'Kiwirok Timur', bpsCode: '91.12.07' },
                    { name: 'Aboy', bpsCode: '91.12.08' },
                    { name: 'Pepera', bpsCode: '91.12.09' },
                    { name: 'Bime', bpsCode: '91.12.10' },
                    { name: 'Alemsom', bpsCode: '91.12.11' },
                    { name: 'Okbape', bpsCode: '91.12.12' },
                    { name: 'Kalomdol', bpsCode: '91.12.13' },
                    { name: 'Oksop', bpsCode: '91.12.14' },
                    { name: 'Serambakon', bpsCode: '91.12.15' },
                    { name: 'Ok Aom', bpsCode: '91.12.16' },
                    { name: 'Kawor', bpsCode: '91.12.17' },
                    { name: 'Awinbon', bpsCode: '91.12.18' },
                    { name: 'Tarup', bpsCode: '91.12.19' },
                    { name: 'Okhika', bpsCode: '91.12.20' },
                    { name: 'Oksamol', bpsCode: '91.12.21' },
                    { name: 'Oklip', bpsCode: '91.12.22' },
                    { name: 'Okbemtau', bpsCode: '91.12.23' },
                    { name: 'Oksebang', bpsCode: '91.12.24' },
                    { name: 'Okbab', bpsCode: '91.12.25' },
                    { name: 'Batani', bpsCode: '91.12.26' },
                    { name: 'Weime', bpsCode: '91.12.27' },
                    { name: 'Murkim', bpsCode: '91.12.28' },
                    { name: 'Mofinop', bpsCode: '91.12.29' },
                    { name: 'Jetfa', bpsCode: '91.12.30' },
                    { name: 'Teiraplu', bpsCode: '91.12.31' },
                    { name: 'Eipumek', bpsCode: '91.12.32' },
                    { name: 'Pamek', bpsCode: '91.12.33' },
                    { name: 'Nongme', bpsCode: '91.12.34' }
                ]
            }, {
                name: 'Yahukimo',
                bpsCode: '91.13',
                districts: [
                    { name: 'Kurima', bpsCode: '91.13.01' },
                    { name: 'Anggruk', bpsCode: '91.13.02' },
                    { name: 'Ninia', bpsCode: '91.13.03' },
                    { name: 'Silimo', bpsCode: '91.13.06' },
                    { name: 'Samenage', bpsCode: '91.13.07' },
                    { name: 'Nalca', bpsCode: '91.13.08' },
                    { name: 'Dekai', bpsCode: '91.13.09' },
                    { name: 'Obio', bpsCode: '91.13.10' },
                    { name: 'Suru Suru', bpsCode: '91.13.11' },
                    { name: 'Wusama (Wusuma)', bpsCode: '91.13.12' },
                    { name: 'Amuma', bpsCode: '91.13.13' },
                    { name: 'Musaik', bpsCode: '91.13.14' },
                    { name: 'Pasema', bpsCode: '91.13.15' },
                    { name: 'Hogio (Hugio)', bpsCode: '91.13.16' },
                    { name: 'Mugi', bpsCode: '91.13.17' },
                    { name: 'Soba', bpsCode: '91.13.18' },
                    { name: 'Werima', bpsCode: '91.13.19' },
                    { name: 'Tangma', bpsCode: '91.13.20' },
                    { name: 'Ukha', bpsCode: '91.13.21' },
                    { name: 'Panggema', bpsCode: '91.13.22' },
                    { name: 'Kosarek', bpsCode: '91.13.23' },
                    { name: 'Nipsan', bpsCode: '91.13.24' },
                    { name: 'Ubahak', bpsCode: '91.13.25' },
                    { name: 'Pronggoli (Proggoli)', bpsCode: '91.13.26' },
                    { name: 'Walma', bpsCode: '91.13.27' },
                    { name: 'Yahuliambut', bpsCode: '91.13.28' },
                    { name: 'Hereapini (Hereanini)', bpsCode: '91.13.29' },
                    { name: 'Ubalihi', bpsCode: '91.13.30' },
                    { name: 'Talambo', bpsCode: '91.13.31' },
                    { name: 'Puldama', bpsCode: '91.13.32' },
                    { name: 'Endomen', bpsCode: '91.13.33' },
                    { name: 'Kona', bpsCode: '91.13.34' },
                    { name: 'Dirwemna (Diruwena)', bpsCode: '91.13.35' },
                    { name: 'Holuon', bpsCode: '91.13.36' },
                    { name: 'Lolat', bpsCode: '91.13.37' },
                    { name: 'Soloikma', bpsCode: '91.13.38' },
                    { name: 'Sela', bpsCode: '91.13.39' },
                    { name: 'Koropun (Korupun)', bpsCode: '91.13.40' },
                    { name: 'Langda', bpsCode: '91.13.41' },
                    { name: 'Bomela', bpsCode: '91.13.42' },
                    { name: 'Suntamon', bpsCode: '91.13.43' },
                    { name: 'Seredela (Seredala)', bpsCode: '91.13.44' },
                    { name: 'Sobaham', bpsCode: '91.13.45' },
                    { name: 'Kabianggama (Kabianggema)', bpsCode: '91.13.46' },
                    { name: 'Kwelemdua (Kwelamdua)', bpsCode: '91.13.47' },
                    { name: 'Kwikma', bpsCode: '91.13.48' },
                    { name: 'Hilipuk', bpsCode: '91.13.49' },
                    { name: 'Duram', bpsCode: '91.13.50' },
                    { name: 'Yogosem', bpsCode: '91.13.51' },
                    { name: 'Kayo', bpsCode: '91.13.52' },
                    { name: 'Sumo', bpsCode: '91.13.53' }
                ]
            }, {
                name: 'Tolikara',
                bpsCode: '91.14',
                districts: [
                    { name: 'Karubaga', bpsCode: '91.14.01' },
                    { name: 'Bokondini', bpsCode: '91.14.02' },
                    { name: 'Kanggime (Kanggima )', bpsCode: '91.14.03' },
                    { name: 'Kembu', bpsCode: '91.14.04' },
                    { name: 'Goyage', bpsCode: '91.14.05' },
                    { name: 'Wunim (Wunin / Wumin)', bpsCode: '91.14.06' },
                    { name: 'Wina', bpsCode: '91.14.07' },
                    { name: 'Umagi', bpsCode: '91.14.08' },
                    { name: 'Panaga', bpsCode: '91.14.09' },
                    { name: 'Wonoki (Woniki)', bpsCode: '91.14.10' },
                    { name: 'Kubu', bpsCode: '91.14.11' },
                    { name: 'Kondaga (Konda)', bpsCode: '91.14.12' },
                    { name: 'Nelawi', bpsCode: '91.14.13' },
                    { name: 'Kuari', bpsCode: '91.14.14' },
                    { name: 'Bokoneri', bpsCode: '91.14.15' },
                    { name: 'Bewani', bpsCode: '91.14.16' },
                    { name: 'Nabunage', bpsCode: '91.14.18' },
                    { name: 'Gilubandu (Gilumbandu/Gilimbandu)', bpsCode: '91.14.19' },
                    { name: 'Nunggawi (Munggawi)', bpsCode: '91.14.20' },
                    { name: 'Gundagi (Gudage)', bpsCode: '91.14.21' },
                    { name: 'Numba', bpsCode: '91.14.22' },
                    { name: 'Timori', bpsCode: '91.14.23' },
                    { name: 'Dundu (Ndundu)', bpsCode: '91.14.24' },
                    { name: 'Geya', bpsCode: '91.14.25' },
                    { name: 'Egiam', bpsCode: '91.14.26' },
                    { name: 'Poganeri', bpsCode: '91.14.27' },
                    { name: 'Kamboneri', bpsCode: '91.14.28' },
                    { name: 'Airgaram', bpsCode: '91.14.29' },
                    { name: 'Wari / Taiyeve II', bpsCode: '91.14.30' },
                    { name: 'Dow', bpsCode: '91.14.31' },
                    { name: 'Tagineri', bpsCode: '91.14.32' },
                    { name: 'Yuneri', bpsCode: '91.14.33' },
                    { name: 'Wakuwo', bpsCode: '91.14.34' },
                    { name: 'Gika', bpsCode: '91.14.35' },
                    { name: 'Telenggeme', bpsCode: '91.14.36' },
                    { name: 'Anawi', bpsCode: '91.14.37' },
                    { name: 'Wenam', bpsCode: '91.14.38' },
                    { name: 'Wugi', bpsCode: '91.14.39' },
                    { name: 'Danime', bpsCode: '91.14.40' },
                    { name: 'Tagime', bpsCode: '91.14.41' },
                    { name: 'Kai', bpsCode: '91.14.42' },
                    { name: 'Aweku', bpsCode: '91.14.43' },
                    { name: 'Bogonuk', bpsCode: '91.14.44' },
                    { name: 'Li Anogomma', bpsCode: '91.14.45' },
                    { name: 'Biuk', bpsCode: '91.14.46' },
                    { name: 'Yuko', bpsCode: '91.14.47' }
                ]
            }, {
                name: 'Waropen',
                bpsCode: '91.15',
                districts: [
                    { name: 'Waropen Bawah', bpsCode: '91.15.01' },
                    { name: 'Masirei', bpsCode: '91.15.03' },
                    { name: 'Risei Sayati', bpsCode: '91.15.07' },
                    { name: 'Urei Faisei', bpsCode: '91.15.08' },
                    { name: 'Inggerus', bpsCode: '91.15.09' },
                    { name: 'Kirihi', bpsCode: '91.15.10' },
                    { name: 'Oudate', bpsCode: '91.15.11' },
                    { name: 'Wapoga', bpsCode: '91.15.12' },
                    { name: 'Demba', bpsCode: '91.15.13' },
                    { name: 'Wonti', bpsCode: '91.15.14' },
                    { name: 'Soyoi Mambai', bpsCode: '91.15.15' }
                ]
            }, {
                name: 'Boven Digoel',
                bpsCode: '91.16',
                districts: [
                    { name: 'Mandobo', bpsCode: '91.16.01' },
                    { name: 'Mindiptana', bpsCode: '91.16.02' },
                    { name: 'Waropko', bpsCode: '91.16.03' },
                    { name: 'Kouh', bpsCode: '91.16.04' },
                    { name: 'Jair', bpsCode: '91.16.05' },
                    { name: 'Bomakia', bpsCode: '91.16.06' },
                    { name: 'Kombut', bpsCode: '91.16.07' },
                    { name: 'Iniyandit', bpsCode: '91.16.08' },
                    { name: 'Arimop', bpsCode: '91.16.09' },
                    { name: 'Fofi', bpsCode: '91.16.10' },
                    { name: 'Ambatkwi (Ambatkui)', bpsCode: '91.16.11' },
                    { name: 'Manggelum', bpsCode: '91.16.12' },
                    { name: 'Firiwage', bpsCode: '91.16.13' },
                    { name: 'Yaniruma', bpsCode: '91.16.14' },
                    { name: 'Subur', bpsCode: '91.16.15' },
                    { name: 'Kombay', bpsCode: '91.16.16' },
                    { name: 'Ninati', bpsCode: '91.16.17' },
                    { name: 'Sesnuk', bpsCode: '91.16.18' },
                    { name: 'Ki', bpsCode: '91.16.19' },
                    { name: 'Kawagit', bpsCode: '91.16.20' }
                ]
            }, {
                name: 'Mappi',
                bpsCode: '91.17',
                districts: [
                    { name: 'Obaa', bpsCode: '91.17.01' },
                    { name: 'Mambioman Bapai', bpsCode: '91.17.02' },
                    { name: 'Citak-Mitak (Citakmitak)', bpsCode: '91.17.03' },
                    { name: 'Edera', bpsCode: '91.17.04' },
                    { name: 'Haju', bpsCode: '91.17.05' },
                    { name: 'Assue', bpsCode: '91.17.06' },
                    { name: 'Kaibar', bpsCode: '91.17.07' },
                    { name: 'Passue', bpsCode: '91.17.08' },
                    { name: 'Minyamur', bpsCode: '91.17.09' },
                    { name: 'Venaha', bpsCode: '91.17.10' },
                    { name: 'Syahcame', bpsCode: '91.17.11' },
                    { name: 'Yakomi', bpsCode: '91.17.12' },
                    { name: 'Bamgi', bpsCode: '91.17.13' },
                    { name: 'Passue Bawah', bpsCode: '91.17.14' },
                    { name: 'Ti Zain', bpsCode: '91.17.15' }
                ]
            }, {
                name: 'Asmat',
                bpsCode: '91.18',
                districts: [
                    { name: 'Agats', bpsCode: '91.18.01' },
                    { name: 'Atsy / Atsj', bpsCode: '91.18.02' },
                    { name: 'Sawa Erma', bpsCode: '91.18.03' },
                    { name: 'Akat', bpsCode: '91.18.04' },
                    { name: 'Fayit', bpsCode: '91.18.05' },
                    { name: 'Pantai Kasuari', bpsCode: '91.18.06' },
                    { name: 'Suator', bpsCode: '91.18.07' },
                    { name: 'Suru-suru', bpsCode: '91.18.08' },
                    { name: 'Kolf Braza', bpsCode: '91.18.09' },
                    { name: 'Unir Sirau', bpsCode: '91.18.10' },
                    { name: 'Joerat', bpsCode: '91.18.11' },
                    { name: 'Pulau Tiga', bpsCode: '91.18.12' },
                    { name: 'Jetsy', bpsCode: '91.18.13' },
                    { name: 'Der Koumur', bpsCode: '91.18.14' },
                    { name: 'Kopay', bpsCode: '91.18.15' },
                    { name: 'Safan', bpsCode: '91.18.16' },
                    { name: 'Sirets', bpsCode: '91.18.17' },
                    { name: 'Ayip', bpsCode: '91.18.18' },
                    { name: 'Betcbamu', bpsCode: '91.18.19' }
                ]
            }, {
                name: 'Supiori',
                bpsCode: '91.19',
                districts: [
                    { name: 'Supiori Selatan', bpsCode: '91.19.01' },
                    { name: 'Supiori Utara', bpsCode: '91.19.02' },
                    { name: 'Supiori Timur', bpsCode: '91.19.03' },
                    { name: 'Kepulauan Aruri', bpsCode: '91.19.04' },
                    { name: 'Supiori Barat', bpsCode: '91.19.05' }
                ]
            }, {
                name: 'Mamberamo Raya',
                bpsCode: '91.20',
                districts: [
                    { name: 'Mamberamo Tengah', bpsCode: '91.20.01' },
                    { name: 'Mamberamo Hulu', bpsCode: '91.20.02' },
                    { name: 'Rufaer', bpsCode: '91.20.03' },
                    { name: 'Mamberamo Tengah Timur', bpsCode: '91.20.04' },
                    { name: 'Mamberamo Hilir', bpsCode: '91.20.05' },
                    { name: 'Waropen Atas', bpsCode: '91.20.06' },
                    { name: 'Benuki', bpsCode: '91.20.07' },
                    { name: 'Sawai', bpsCode: '91.20.08' }
                ]
            }, {
                name: 'Mamberamo Tengah',
                bpsCode: '91.21',
                districts: [
                    { name: 'Kobagma (Kobakma)', bpsCode: '91.21.01' },
                    { name: 'Kelila', bpsCode: '91.21.02' },
                    { name: 'Eragayam', bpsCode: '91.21.03' },
                    { name: 'Megambilis', bpsCode: '91.21.04' },
                    { name: 'Ilugwa', bpsCode: '91.21.05' }
                ]
            }, {
                name: 'Yalimo',
                bpsCode: '91.22',
                districts: [
                    { name: 'Elelim', bpsCode: '91.22.01' },
                    { name: 'Apalapsili', bpsCode: '91.22.02' },
                    { name: 'Abenaho', bpsCode: '91.22.03' },
                    { name: 'Benawa', bpsCode: '91.22.04' },
                    { name: 'Welarek', bpsCode: '91.22.05' }
                ]
            }, {
                name: 'Lanny Jaya',
                bpsCode: '91.23',
                districts: [
                    { name: 'Tiom', bpsCode: '91.23.01' },
                    { name: 'Pirime', bpsCode: '91.23.02' },
                    { name: 'Makki', bpsCode: '91.23.03' },
                    { name: 'Gamelia', bpsCode: '91.23.04' },
                    { name: 'Dimba', bpsCode: '91.23.05' },
                    { name: 'Melagineri', bpsCode: '91.23.06' },
                    { name: 'Balingga', bpsCode: '91.23.07' },
                    { name: 'Tiomneri', bpsCode: '91.23.08' },
                    { name: 'Kuyawage', bpsCode: '91.23.09' },
                    { name: 'Poga', bpsCode: '91.23.10' },
                    { name: 'Niname', bpsCode: '91.23.11' },
                    { name: 'Nogi', bpsCode: '91.23.12' },
                    { name: 'Yiginua', bpsCode: '91.23.13' },
                    { name: 'Tiom Ollo', bpsCode: '91.23.14' },
                    { name: 'Yugungwi', bpsCode: '91.23.15' },
                    { name: 'Mokoni', bpsCode: '91.23.16' },
                    { name: 'Wereka', bpsCode: '91.23.17' },
                    { name: 'Milimbo', bpsCode: '91.23.18' },
                    { name: 'Wiringgambut', bpsCode: '91.23.19' },
                    { name: 'Gollo', bpsCode: '91.23.20' },
                    { name: 'Awina', bpsCode: '91.23.21' },
                    { name: 'Ayumnati', bpsCode: '91.23.22' },
                    { name: 'Wano Barat', bpsCode: '91.23.23' },
                    { name: 'Goa Balim', bpsCode: '91.23.24' },
                    { name: 'Bruwa', bpsCode: '91.23.25' },
                    { name: 'Balingga Barat', bpsCode: '91.23.26' },
                    { name: 'Gupura', bpsCode: '91.23.27' },
                    { name: 'Kolawa', bpsCode: '91.23.28' },
                    { name: 'Gelok Beam', bpsCode: '91.23.29' },
                    { name: 'Kuly Lanny', bpsCode: '91.23.30' },
                    { name: 'Lannyna', bpsCode: '91.23.31' },
                    { name: 'Karu', bpsCode: '91.23.32' },
                    { name: 'Yiluk', bpsCode: '91.23.33' },
                    { name: 'Guna', bpsCode: '91.23.34' },
                    { name: 'Kelulome', bpsCode: '91.23.35' },
                    { name: 'Nikogwe', bpsCode: '91.23.36' },
                    { name: 'Muara', bpsCode: '91.23.37' },
                    { name: 'Buguk Gona', bpsCode: '91.23.38' },
                    { name: 'Melagi', bpsCode: '91.23.39' }
                ]
            }, {
                name: 'Nduga',
                bpsCode: '91.24',
                districts: [
                    { name: 'Kenyam', bpsCode: '91.24.01' },
                    { name: 'Mapenduma', bpsCode: '91.24.02' },
                    { name: 'Yigi', bpsCode: '91.24.03' },
                    { name: 'Wosak', bpsCode: '91.24.04' },
                    { name: 'Geselma (Geselema)', bpsCode: '91.24.05' },
                    { name: 'Mugi', bpsCode: '91.24.06' },
                    { name: 'Mbuwa (Mbua / Mbuga)', bpsCode: '91.24.07' },
                    { name: 'Gearek', bpsCode: '91.24.08' },
                    { name: 'Koroptak', bpsCode: '91.24.09' },
                    { name: 'Kegayem', bpsCode: '91.24.10' },
                    { name: 'Paro', bpsCode: '91.24.11' },
                    { name: 'Mebarok', bpsCode: '91.24.12' },
                    { name: 'Yenggelo', bpsCode: '91.24.13' },
                    { name: 'Kilmid', bpsCode: '91.24.14' },
                    { name: 'Alama', bpsCode: '91.24.15' },
                    { name: 'Yal', bpsCode: '91.24.16' },
                    { name: 'Mam', bpsCode: '91.24.17' },
                    { name: 'Dal', bpsCode: '91.24.18' },
                    { name: 'Nirkuri', bpsCode: '91.24.19' },
                    { name: 'Inikgal', bpsCode: '91.24.20' },
                    { name: 'Iniye', bpsCode: '91.24.21' },
                    { name: 'Mbulmu Yalma', bpsCode: '91.24.22' },
                    { name: 'Mbua Tengah', bpsCode: '91.24.23' },
                    { name: 'Embetpen', bpsCode: '91.24.24' },
                    { name: 'Kora', bpsCode: '91.24.25' },
                    { name: 'Wusi', bpsCode: '91.24.26' },
                    { name: 'Pija', bpsCode: '91.24.27' },
                    { name: 'Moba', bpsCode: '91.24.28' },
                    { name: 'Wutpaga', bpsCode: '91.24.29' },
                    { name: 'Nenggeagin', bpsCode: '91.24.30' },
                    { name: 'Krepkuri', bpsCode: '91.24.31' },
                    { name: 'Pasir Putih', bpsCode: '91.24.32' }
                ]
            }, {
                name: 'Puncak',
                bpsCode: '91.25',
                districts: [
                    { name: 'Ilaga', bpsCode: '91.25.01' },
                    { name: 'Wangbe', bpsCode: '91.25.02' },
                    { name: 'Beoga', bpsCode: '91.25.03' },
                    { name: 'Doufo', bpsCode: '91.25.04' },
                    { name: 'Pogoma', bpsCode: '91.25.05' },
                    { name: 'Sinak', bpsCode: '91.25.06' },
                    { name: 'Agandugume', bpsCode: '91.25.07' },
                    { name: 'Gome', bpsCode: '91.25.08' },
                    { name: 'Dervos', bpsCode: '91.25.09' },
                    { name: 'Beoga Barat', bpsCode: '91.25.10' },
                    { name: 'Beoga Timur', bpsCode: '91.25.11' },
                    { name: 'Ogamanim', bpsCode: '91.25.12' },
                    { name: 'Kembru', bpsCode: '91.25.13' },
                    { name: 'Bina', bpsCode: '91.25.14' },
                    { name: 'Sinak Barat', bpsCode: '91.25.15' },
                    { name: 'Mage\'abume', bpsCode: '91.25.16' },
                    { name: 'Yugumuak', bpsCode: '91.25.17' },
                    { name: 'Ilaga Utara', bpsCode: '91.25.18' },
                    { name: 'Mabugi', bpsCode: '91.25.19' },
                    { name: 'Omukia', bpsCode: '91.25.20' },
                    { name: 'Lambewi', bpsCode: '91.25.21' },
                    { name: 'Oneri', bpsCode: '91.25.22' },
                    { name: 'Amungkalpia', bpsCode: '91.25.23' },
                    { name: 'Gome Utara', bpsCode: '91.25.24' },
                    { name: 'Erelmakawia', bpsCode: '91.25.25' }
                ]
            }, {
                name: 'Dogiyai',
                bpsCode: '91.26',
                districts: [
                    { name: 'Kamu', bpsCode: '91.26.01' },
                    { name: 'Mapia', bpsCode: '91.26.02' },
                    { name: 'Piyaiye (Sukikai)', bpsCode: '91.26.03' },
                    { name: 'Kamu Utara (Ikrar/Ikrat)', bpsCode: '91.26.04' },
                    { name: 'Sukikai Selatan', bpsCode: '91.26.05' },
                    { name: 'Mapia Barat', bpsCode: '91.26.06' },
                    { name: 'Kamu Selatan', bpsCode: '91.26.07' },
                    { name: 'Kamu Timur', bpsCode: '91.26.08' },
                    { name: 'Mapia Tengah', bpsCode: '91.26.09' },
                    { name: 'Dogiyai', bpsCode: '91.26.10' }
                ]
            }, {
                name: 'Intan Jaya',
                bpsCode: '91.27',
                districts: [
                    { name: 'Sugapa', bpsCode: '91.27.01' },
                    { name: 'Homeyo', bpsCode: '91.27.02' },
                    { name: 'Wandai', bpsCode: '91.27.03' },
                    { name: 'Biandoga', bpsCode: '91.27.04' },
                    { name: 'Agisiga', bpsCode: '91.27.05' },
                    { name: 'Hitadipa', bpsCode: '91.27.06' },
                    { name: 'Ugimba', bpsCode: '91.27.07' },
                    { name: 'Tomosiga', bpsCode: '91.27.08' }
                ]
            }, {
                name: 'Deiyai',
                bpsCode: '91.28',
                districts: [
                    { name: 'Tigi', bpsCode: '91.28.01' },
                    { name: 'Tigi Timur', bpsCode: '91.28.02' },
                    { name: 'Bowobado', bpsCode: '91.28.03' },
                    { name: 'Tigi Barat', bpsCode: '91.28.04' },
                    { name: 'Kapiraya', bpsCode: '91.28.05' }
                ]
            }, {
                name: 'Jayapura',
                bpsCode: '91.71',
                districts: [
                    { name: 'Jayapura Utara', bpsCode: '91.71.01' },
                    { name: 'Jayapura Selatan', bpsCode: '91.71.02' },
                    { name: 'Abepura', bpsCode: '91.71.03' },
                    { name: 'Muara Tami', bpsCode: '91.71.04' },
                    { name: 'Heram', bpsCode: '91.71.05' }
                ]
            }
        ]
    },
    '92': {
        regencies: [
            {
                name: 'Sorong',
                bpsCode: '92.01',
                districts: [
                    { name: 'Makbon', bpsCode: '92.01.01' },
                    { name: 'Beraur', bpsCode: '92.01.04' },
                    { name: 'Salawati', bpsCode: '92.01.05' },
                    { name: 'Seget', bpsCode: '92.01.06' },
                    { name: 'Aimas', bpsCode: '92.01.07' },
                    { name: 'Klamono', bpsCode: '92.01.08' },
                    { name: 'Sayosa', bpsCode: '92.01.10' },
                    { name: 'Segun', bpsCode: '92.01.12' },
                    { name: 'Mayamuk', bpsCode: '92.01.13' },
                    { name: 'Salawati Selatan', bpsCode: '92.01.14' },
                    { name: 'Klabot', bpsCode: '92.01.17' },
                    { name: 'Klawak', bpsCode: '92.01.18' },
                    { name: 'Maudus', bpsCode: '92.01.20' },
                    { name: 'Mariat', bpsCode: '92.01.39' },
                    { name: 'Klayili', bpsCode: '92.01.40' },
                    { name: 'Klaso', bpsCode: '92.01.41' },
                    { name: 'Moisegen', bpsCode: '92.01.42' },
                    { name: 'Sorong', bpsCode: '92.01.43' },
                    { name: 'Bagun', bpsCode: '92.01.44' },
                    { name: 'Wemak', bpsCode: '92.01.45' },
                    { name: 'Sunook', bpsCode: '92.01.46' },
                    { name: 'Buk', bpsCode: '92.01.47' },
                    { name: 'Saengkeduk', bpsCode: '92.01.48' },
                    { name: 'Malabotom', bpsCode: '92.01.49' },
                    { name: 'Konhir', bpsCode: '92.01.50' },
                    { name: 'Klasafet', bpsCode: '92.01.51' },
                    { name: 'Hobard', bpsCode: '92.01.52' },
                    { name: 'Salawati Tengah', bpsCode: '92.01.53' },
                    { name: 'Botain', bpsCode: '92.01.54' },
                    { name: 'Sayosa Timur', bpsCode: '92.01.55' }
                ]
            }, {
                name: 'Manokwari',
                bpsCode: '92.02',
                districts: [
                    { name: 'Warmare', bpsCode: '92.02.03' },
                    { name: 'Prafi', bpsCode: '92.02.04' },
                    { name: 'Masni', bpsCode: '92.02.05' },
                    { name: 'Manokwari Barat', bpsCode: '92.02.12' },
                    { name: 'Manokwari Timur', bpsCode: '92.02.13' },
                    { name: 'Manokwari Utara', bpsCode: '92.02.14' },
                    { name: 'Manokwari Selatan', bpsCode: '92.02.15' },
                    { name: 'Tanah Rubuh', bpsCode: '92.02.17' },
                    { name: 'Sidey', bpsCode: '92.02.21' }
                ]
            }, {
                name: 'Fakfak',
                bpsCode: '92.03',
                districts: [
                    { name: 'Fak-Fak (Fakfak)', bpsCode: '92.03.01' },
                    { name: 'Fak-Fak Barat (Fakfak Barat)', bpsCode: '92.03.02' },
                    { name: 'Fak-Fak Timur (Fakfak Timur)', bpsCode: '92.03.03' },
                    { name: 'Kokas', bpsCode: '92.03.04' },
                    { name: 'Fak-Fak Tengah (Fakfak Tengah)', bpsCode: '92.03.05' },
                    { name: 'Karas', bpsCode: '92.03.06' },
                    { name: 'Bomberay', bpsCode: '92.03.07' },
                    { name: 'Kramongmongga', bpsCode: '92.03.08' },
                    { name: 'Teluk Patipi', bpsCode: '92.03.09' },
                    { name: 'Pariwari', bpsCode: '92.03.10' },
                    { name: 'Wartutin', bpsCode: '92.03.11' },
                    { name: 'Fakfak Timur Tengah', bpsCode: '92.03.12' },
                    { name: 'Arguni', bpsCode: '92.03.13' },
                    { name: 'Mbahamdandara', bpsCode: '92.03.14' },
                    { name: 'Kayauni', bpsCode: '92.03.15' },
                    { name: 'Furwagi', bpsCode: '92.03.16' },
                    { name: 'Tomage', bpsCode: '92.03.17' }
                ]
            }, {
                name: 'Sorong Selatan',
                bpsCode: '92.04',
                districts: [
                    { name: 'Teminabuan', bpsCode: '92.04.01' },
                    { name: 'Inanwatan', bpsCode: '92.04.04' },
                    { name: 'Sawiat', bpsCode: '92.04.06' },
                    { name: 'Kokoda', bpsCode: '92.04.09' },
                    { name: 'Moswaren', bpsCode: '92.04.10' },
                    { name: 'Seremuk', bpsCode: '92.04.11' },
                    { name: 'Wayer', bpsCode: '92.04.12' },
                    { name: 'Kais', bpsCode: '92.04.14' },
                    { name: 'Konda', bpsCode: '92.04.15' },
                    { name: 'Matemani', bpsCode: '92.04.20' },
                    { name: 'Kokoda Utara', bpsCode: '92.04.21' },
                    { name: 'Saifi', bpsCode: '92.04.22' },
                    { name: 'Fokour', bpsCode: '92.04.24' },
                    { name: 'Salkma', bpsCode: '92.04.25' },
                    { name: 'Kais Darat', bpsCode: '92.04.26' }
                ]
            }, {
                name: 'Raja Ampat',
                bpsCode: '92.05',
                districts: [
                    { name: 'Misool (Misool Utara)', bpsCode: '92.05.01' },
                    { name: 'Waigeo Utara', bpsCode: '92.05.02' },
                    { name: 'Waigeo Selatan', bpsCode: '92.05.03' },
                    { name: 'Salawati Utara', bpsCode: '92.05.04' },
                    { name: 'Kepulauan Ayau', bpsCode: '92.05.05' },
                    { name: 'Misool Timur', bpsCode: '92.05.06' },
                    { name: 'Waigeo Barat', bpsCode: '92.05.07' },
                    { name: 'Waigeo Timur', bpsCode: '92.05.08' },
                    { name: 'Teluk Mayalibit', bpsCode: '92.05.09' },
                    { name: 'Kofiau', bpsCode: '92.05.10' },
                    { name: 'Meos Mansar', bpsCode: '92.05.11' },
                    { name: 'Misool Selatan', bpsCode: '92.05.13' },
                    { name: 'Warwarbomi', bpsCode: '92.05.14' },
                    { name: 'Waigeo Barat Kepulauan', bpsCode: '92.05.15' },
                    { name: 'Misool Barat', bpsCode: '92.05.16' },
                    { name: 'Kepulauan Sembilan', bpsCode: '92.05.17' },
                    { name: 'Kota Waisai', bpsCode: '92.05.18' },
                    { name: 'Tiplol Mayalibit', bpsCode: '92.05.19' },
                    { name: 'Batanta Utara', bpsCode: '92.05.20' },
                    { name: 'Salawati Barat', bpsCode: '92.05.21' },
                    { name: 'Salawati Tengah', bpsCode: '92.05.22' },
                    { name: 'Supnin', bpsCode: '92.05.23' },
                    { name: 'Ayau', bpsCode: '92.05.24' },
                    { name: 'Batanta Selatan', bpsCode: '92.05.25' }
                ]
            }, {
                name: 'Teluk Bintuni',
                bpsCode: '92.06',
                districts: [
                    { name: 'Bintuni', bpsCode: '92.06.01' },
                    { name: 'Merdey', bpsCode: '92.06.02' },
                    { name: 'Babo', bpsCode: '92.06.03' },
                    { name: 'Aranday', bpsCode: '92.06.04' },
                    { name: 'Moskona Selatan', bpsCode: '92.06.05' },
                    { name: 'Moskona Utara', bpsCode: '92.06.06' },
                    { name: 'Wamesa (Idoor)', bpsCode: '92.06.07' },
                    { name: 'Fafurwar (Irorutu)', bpsCode: '92.06.08' },
                    { name: 'Tembuni', bpsCode: '92.06.09' },
                    { name: 'Kuri', bpsCode: '92.06.10' },
                    { name: 'Manimeri', bpsCode: '92.06.11' },
                    { name: 'Tuhiba', bpsCode: '92.06.12' },
                    { name: 'Dataran Beimes', bpsCode: '92.06.13' },
                    { name: 'Sumuri (Simuri)', bpsCode: '92.06.14' },
                    { name: 'Kaitaro', bpsCode: '92.06.15' },
                    { name: 'Aroba', bpsCode: '92.06.16' },
                    { name: 'Masyeta', bpsCode: '92.06.17' },
                    { name: 'Biscoop', bpsCode: '92.06.18' },
                    { name: 'Tomu', bpsCode: '92.06.19' },
                    { name: 'Kamundan', bpsCode: '92.06.20' },
                    { name: 'Weriagar', bpsCode: '92.06.21' },
                    { name: 'Moskona Barat', bpsCode: '92.06.22' },
                    { name: 'Meyado (Mayado)', bpsCode: '92.06.23' },
                    { name: 'Moskona Timur', bpsCode: '92.06.24' }
                ]
            }, {
                name: 'Teluk Wondama',
                bpsCode: '92.07',
                districts: [
                    { name: 'Wasior', bpsCode: '92.07.01' },
                    { name: 'Windesi', bpsCode: '92.07.02' },
                    { name: 'Teluk Duairi', bpsCode: '92.07.03' },
                    { name: 'Wondiboy', bpsCode: '92.07.04' },
                    { name: 'Wamesa', bpsCode: '92.07.05' },
                    { name: 'Rumberpon', bpsCode: '92.07.06' },
                    { name: 'Naikere', bpsCode: '92.07.07' },
                    { name: 'Rasiei', bpsCode: '92.07.08' },
                    { name: 'Kuri Wamesa', bpsCode: '92.07.09' },
                    { name: 'Roon', bpsCode: '92.07.10' },
                    { name: 'Roswar', bpsCode: '92.07.11' },
                    { name: 'Nikiwar', bpsCode: '92.07.12' },
                    { name: 'Soug Jaya', bpsCode: '92.07.13' }
                ]
            }, {
                name: 'Kaimana',
                bpsCode: '92.08',
                districts: [
                    { name: 'Kaimana', bpsCode: '92.08.01' },
                    { name: 'Buruway', bpsCode: '92.08.02' },
                    { name: 'Teluk Arguni Atas', bpsCode: '92.08.03' },
                    { name: 'Teluk Etna', bpsCode: '92.08.04' },
                    { name: 'Kambrau (Kambraw / Kamberau)', bpsCode: '92.08.05' },
                    { name: 'Teluk Arguni Bawah (Yerusi)', bpsCode: '92.08.06' },
                    { name: 'Yamor', bpsCode: '92.08.07' }
                ]
            }, {
                name: 'Tambrauw',
                bpsCode: '92.09',
                districts: [
                    { name: 'Fef', bpsCode: '92.09.01' },
                    { name: 'Miyah', bpsCode: '92.09.02' },
                    { name: 'Yembun', bpsCode: '92.09.03' },
                    { name: 'Kwoor', bpsCode: '92.09.04' },
                    { name: 'Sausapor', bpsCode: '92.09.05' },
                    { name: 'Abun', bpsCode: '92.09.06' },
                    { name: 'Syujak', bpsCode: '92.09.07' },
                    { name: 'Moraid', bpsCode: '92.09.08' },
                    { name: 'Kebar', bpsCode: '92.09.09' },
                    { name: 'Amberbaken', bpsCode: '92.09.10' },
                    { name: 'Senopi', bpsCode: '92.09.11' },
                    { name: 'Mubrani', bpsCode: '92.09.12' },
                    { name: 'Bikar', bpsCode: '92.09.13' },
                    { name: 'Bamusbama', bpsCode: '92.09.14' },
                    { name: 'Ases', bpsCode: '92.09.15' },
                    { name: 'Miyah Selatan', bpsCode: '92.09.16' },
                    { name: 'Ireres', bpsCode: '92.09.17' },
                    { name: 'Tobouw', bpsCode: '92.09.18' },
                    { name: 'Wilhem Roumbouts', bpsCode: '92.09.19' },
                    { name: 'Tinggouw', bpsCode: '92.09.20' },
                    { name: 'Kwesefo', bpsCode: '92.09.21' },
                    { name: 'Mawabuan', bpsCode: '92.09.22' },
                    { name: 'Kebar Timur', bpsCode: '92.09.23' },
                    { name: 'Kebar Selatan', bpsCode: '92.09.24' },
                    { name: 'Manekar', bpsCode: '92.09.25' },
                    { name: 'Mpur', bpsCode: '92.09.26' },
                    { name: 'Amberbaken Barat', bpsCode: '92.09.27' },
                    { name: 'Kasi', bpsCode: '92.09.28' },
                    { name: 'Selemkai', bpsCode: '92.09.29' }
                ]
            }, {
                name: 'Maybrat',
                bpsCode: '92.10',
                districts: [
                    { name: 'Aifat', bpsCode: '92.10.01' },
                    { name: 'Aifat Utara', bpsCode: '92.10.02' },
                    { name: 'Aifat Timur', bpsCode: '92.10.03' },
                    { name: 'Aifat Selatan', bpsCode: '92.10.04' },
                    { name: 'Aitinyo Barat', bpsCode: '92.10.05' },
                    { name: 'Aitinyo', bpsCode: '92.10.06' },
                    { name: 'Aitinyo Utara', bpsCode: '92.10.07' },
                    { name: 'Ayamaru', bpsCode: '92.10.08' },
                    { name: 'Ayamaru Utara', bpsCode: '92.10.09' },
                    { name: 'Ayamaru Timur', bpsCode: '92.10.10' },
                    { name: 'Mare', bpsCode: '92.10.11' },
                    { name: 'Aifat Timur Tengah', bpsCode: '92.10.12' },
                    { name: 'Aifat Timur Jauh', bpsCode: '92.10.13' },
                    { name: 'Aifat Timur Selatan', bpsCode: '92.10.14' },
                    { name: 'Ayamaru Selatan', bpsCode: '92.10.15' },
                    { name: 'Ayamaru Jaya', bpsCode: '92.10.16' },
                    { name: 'Ayamaru Selatan Jaya', bpsCode: '92.10.17' },
                    { name: 'Ayamaru Timur Selatan', bpsCode: '92.10.18' },
                    { name: 'Ayamaru Utara Timur', bpsCode: '92.10.19' },
                    { name: 'Ayamaru Tengah', bpsCode: '92.10.20' },
                    { name: 'Ayamaru Barat', bpsCode: '92.10.21' },
                    { name: 'Aitinyo Tengah', bpsCode: '92.10.22' },
                    { name: 'Aitinyo Raya', bpsCode: '92.10.23' },
                    { name: 'Mare Selatan', bpsCode: '92.10.24' }
                ]
            }, {
                name: 'Manokwari Selatan',
                bpsCode: '92.11',
                districts: [
                    { name: 'Ransiki', bpsCode: '92.11.01' },
                    { name: 'Oransbari', bpsCode: '92.11.02' },
                    { name: 'Neney', bpsCode: '92.11.03' },
                    { name: 'Dataran Isim', bpsCode: '92.11.04' },
                    { name: 'Momi Waren', bpsCode: '92.11.05' },
                    { name: 'Tahota', bpsCode: '92.11.06' }
                ]
            }, {
                name: 'Pegunungan Arfak',
                bpsCode: '92.12',
                districts: [
                    { name: 'Anggi', bpsCode: '92.12.01' },
                    { name: 'Anggi Gida', bpsCode: '92.12.02' },
                    { name: 'Membey', bpsCode: '92.12.03' },
                    { name: 'Sururey', bpsCode: '92.12.04' },
                    { name: 'Didohu', bpsCode: '92.12.05' },
                    { name: 'Taige', bpsCode: '92.12.06' },
                    { name: 'Catubouw', bpsCode: '92.12.07' },
                    { name: 'Testega', bpsCode: '92.12.08' },
                    { name: 'Minyambaouw', bpsCode: '92.12.09' },
                    { name: 'Hingk', bpsCode: '92.12.10' }
                ]
            }, {
                name: 'Sorong',
                bpsCode: '92.71',
                districts: [
                    { name: 'Sorong', bpsCode: '92.71.01' },
                    { name: 'Sorong Timur', bpsCode: '92.71.02' },
                    { name: 'Sorong Barat', bpsCode: '92.71.03' },
                    { name: 'Sorong Kepulauan', bpsCode: '92.71.04' },
                    { name: 'Sorong Utara', bpsCode: '92.71.05' },
                    { name: 'Sorong Manoi', bpsCode: '92.71.06' },
                    { name: 'Sorong Kota', bpsCode: '92.71.07' },
                    { name: 'Klaurung', bpsCode: '92.71.08' },
                    { name: 'Malaimsimsa', bpsCode: '92.71.09' },
                    { name: 'Maladum Mes', bpsCode: '92.71.10' }
                ]
            }
        ]
    },
};

/**
 * Nusantara Valid: _province.extended.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The ProvinceExtended class
**/
var ProvinceExtended = /** @class */ (function (_super) {
    __extends(ProvinceExtended, _super);
    function ProvinceExtended() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProvinceExtended.prototype.getDataRegenciesInProvince = function (provinceKey) {
        var REGENCIES = PROVINCE_DATA_EXTENSION[provinceKey].regencies;
        var regencies = REGENCIES.map(function (_a) {
            var bpsCode = _a.bpsCode, name = _a.name;
            return ({ bpsCode: bpsCode, name: name });
        });
        return regencies;
    };
    ProvinceExtended.prototype.getDataDistrictsInRegency = function (regencyKey) {
        var provinceKey = regencyKey.split('.')[0];
        var REGENCIES = PROVINCE_DATA_EXTENSION[provinceKey].regencies;
        var DISTRICTS = [];
        for (var _i = 0, REGENCIES_1 = REGENCIES; _i < REGENCIES_1.length; _i++) {
            var element = REGENCIES_1[_i];
            if (element.bpsCode == regencyKey) {
                DISTRICTS = element.districts;
            }
        }
        return DISTRICTS;
    };
    return ProvinceExtended;
}(Province));
var prov$1 = new ProvinceExtended();
/**
 * Get specific province data with IDataProvince object structure
 *
 * Return object data based on provided province key
 *
 * @param {string} provinceKey - Array key of the province
 * @return {IDataProvince} IDataProvince object
**/
function getDataProvince$1(provinceKey) {
    return prov$1.getData(provinceKey);
}
/**
 * Get all province data with IDataProvince object structure
 *
 * Return all IDataProvince object in Array<IDataProvince>
 *
 * @return {IDataProvince[]} Array of IDataProvince object
**/
function getDataProvinces() {
    return prov$1.getData();
}
/**
 * Get all regencies in a Province
 *
 * Return an array of regencies in a Province
 *
 * @param {string} provinceKey - Key of the province
 * @return {IDataRegency[]} Array of IDataRegency object
**/
function getDataRegenciesInProvince(provinceKey) {
    return prov$1.getDataRegenciesInProvince(provinceKey);
}
/**
 * Get all districts in a Regency
 *
 * Return an array of districts in a Regency
 *
 * @param {string} regencyKey - Key of the regency
 * @return {IDataDistrict[]} Array of IDataDistrict object
**/
function getDataDistrictsInRegency(regencyKey) {
    return prov$1.getDataDistrictsInRegency(regencyKey);
}

/**
 * Nusantara Valid: _nomorIndukKependudukan.extended.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorIndukKepemdudukanExtended class
**/
var NomorIndukKependudukanExtended = /** @class */ (function (_super) {
    __extends(NomorIndukKependudukanExtended, _super);
    function NomorIndukKependudukanExtended() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NomorIndukKependudukanExtended.prototype.isValid = function (nik, provinceKey, birthday) {
        if (provinceKey === void 0) { provinceKey = ''; }
        if (birthday === void 0) { birthday = ''; }
        if (!_super.prototype.isValid.call(this, nik, provinceKey, birthday))
            return false;
        var newNIK = numbersOnly(nik);
        var provinceBPSCode = newNIK.substr(0, 2);
        var regencyBPSCode = provinceBPSCode + '.' + newNIK.substr(2, 2);
        var REGENCIES = getDataRegenciesInProvince(provinceBPSCode);
        var regenciesBPSCodes = REGENCIES.map(function (_a) {
            var bpsCode = _a.bpsCode;
            return bpsCode;
        });
        var validRegency = includes(regenciesBPSCodes, regencyBPSCode);
        var districtBPSCode = regencyBPSCode + '.' + newNIK.substr(4, 2);
        var DISTRICTS = getDataDistrictsInRegency(regencyBPSCode);
        var districtsBPSCode = DISTRICTS.map(function (_a) {
            var bpsCode = _a.bpsCode;
            return bpsCode;
        });
        var validDistrict = includes(districtsBPSCode, districtBPSCode);
        return validRegency && validDistrict;
    };
    NomorIndukKependudukanExtended.prototype.getData = function (nik) {
        var data = _super.prototype.getData.call(this, nik);
        var provinceBPSCode = nik.substr(0, 2);
        var REGENCIES = getDataRegenciesInProvince(provinceBPSCode);
        var regencyBPSCode = provinceBPSCode + '.' + nik.substr(2, 2);
        for (var _i = 0, REGENCIES_1 = REGENCIES; _i < REGENCIES_1.length; _i++) {
            var regency = REGENCIES_1[_i];
            if (regency.bpsCode == regencyBPSCode) {
                data.regency = regency;
            }
        }
        var districtBPSCode = regencyBPSCode + '.' + nik.substr(4, 2);
        var DISTRICTS = getDataDistrictsInRegency(regencyBPSCode);
        for (var _a = 0, DISTRICTS_1 = DISTRICTS; _a < DISTRICTS_1.length; _a++) {
            var district = DISTRICTS_1[_a];
            if (district.bpsCode == districtBPSCode) {
                data.district = district;
            }
        }
        return data;
    };
    return NomorIndukKependudukanExtended;
}(NomorIndukKependudukan));
var theNIK = new NomorIndukKependudukanExtended();
/**
 * NIK Extended validation without any comparison with user provided data.
 *
 * It check if the NIK's bps code is included / exist in VALID_BPSCODE, check if the NIK's has valid birthday
 * and if the NIK has the correct length.
 *
 * @param {string} nik - The NIK, the one to be validated
 * @return {boolean} Is valid or not
**/
function isValidNIK(nik) {
    return theNIK.isValid(nik);
}
/**
 * NIK validation with comparison with user provided provinceKey and birthday data.
 *
 * It will compare NIK's bps code (see: NIK_REGEX[1]) with bps code from PROVINCE_DATA[provinceKey].bpsCode
 * and will compare NIK's birthday (see: NIK_REGEX[4] with user provided birthday)
 *
 * @param {string} nik - The NIK, the one to be validated
 * @param {object} comparison - The data to compare with, provinceKey (key from PROVINCE_DATA) and birthday (in YYYYMMDD format)
 * @return {boolean} Is valid or not
**/
function isValidNIKWithComparison(nik, comparison) {
    var _a = comparison.provinceKey, provinceKey = _a === void 0 ? '' : _a, _b = comparison.birthday, birthday = _b === void 0 ? '' : _b;
    return theNIK.isValid(nik, provinceKey, birthday);
}
/**
 * NIK Extended data retreiver.
 *
 * Return a set of NIK Extended object data from user provided nik
 *
 * @param {string} nik - The NIK
 * @return {object} The NIK Extended data
**/
function getDataNIK(nik) {
    return theNIK.getData(nik);
}

/**
 * Nusantara Valid: nip.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/
/**
 * NIP_REGEX
 *
 * NIP_REGEX[0] = NIP Number has 18 digits
 * NIP_REGEX[1] = 8 digits of Birthday in YYYYMMDD format
 * NIP_REGEX[2] = 6 digits of Recruiting day in YYYYMM format
 * NIP_REGEX[3] = 1 digit of Gender identifier (1 for man, 2 for woman)
 * NIP_REGEX[4] = 3 digits of Index
**/
var NIP_REGEX = /^(\d{8})(\d{6})([1,2]{1})(\d{3})$/;
/**
 * NIP_LENGTH
 *
 * Total length of NIP without any special characters
**/
var NIP_LENGTH = 18;

/**
 * Nusantara Valid: _nomorIndukPegawaiNegeriSipil.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorIndukPegawaiNegeriSipil class
**/
var NomorIndukPegawaiNegeriSipil = /** @class */ (function () {
    function NomorIndukPegawaiNegeriSipil() {
    }
    NomorIndukPegawaiNegeriSipil.prototype.isValid = function (nip) {
        if (!nip || typeof nip !== 'string')
            return false;
        var validNIP = NIP_REGEX.exec(numbersOnly(nip));
        return validNIP !== null
            && !isNaN(formatDate(validNIP[1]).getTime())
            && !isNaN(formatDate(validNIP[2]).getTime())
            && correctLength(0, validNIP[0].length, { minLength: NIP_LENGTH });
    };
    NomorIndukPegawaiNegeriSipil.prototype.getData = function (nip) {
        var data = {};
        var validNIP = NIP_REGEX.exec(numbersOnly(nip));
        if (!validNIP)
            return data;
        data.nip = validNIP[0];
        data.birthday = formatDate(validNIP[1]);
        data.recruit_date = validNIP[2].substr(0, 4) + '-' + validNIP[2].substr(4, 2);
        data.sex = Number(validNIP[3]) == 1 ? 'Male' : 'Female';
        return data;
    };
    return NomorIndukPegawaiNegeriSipil;
}());
var theNIP = new NomorIndukPegawaiNegeriSipil();
/**
 * NIP validation.
 *
 * Validate NIP by validating NIP's birthday, NIP's recruitment date, and NIP's length
 *
 * @param {string} nip - The NIP to be validated
 * @return {boolean} Is valid or not
**/
function isValidNIP(nip) {
    return theNIP.isValid(nip);
}
/**
 * NIP data retreiver.
 *
 * Return a set of NIP object data from user provided nip
 *
 * @param {string} nip - The NIP
 * @return {IDataNIP} The NIP data
**/
function getDataNIP(nip) {
    return theNIP.getData(nip);
}

/**
 * Nusantara Valid: nisn.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/
/**
 * NISN_REGEX
 *
 * NISN_REGEX[0] = NISN has 10 digits
 * NISN_REGEX[1] = 3 digits of Birth Year in YYY format (eg: 2002 => 002)
 * NISN_REGEX[2] = 3 digits of Grouping
 * NISN_REGEX[3] = 4 digits of Index
**/
var NISN_REGEX = /^(\d{3})(\d{3})(\d{4})$/;
/**
 * NISN_LENGTH
 *
 * Total length of NISN
**/
var NISN_LENGTH = 10;
/**
 * NISN_AGE_VALIDITY
 *
 * Validity periode of NISN.
 * Counted from 7 years (as child) + 6 years (as elementaryer) + 3 years (as mid schooler) + 3 years (high schooler) +
 * 3 years (margin of error, eg: grade retained, starting elementary from age of 8)
**/
var NISN_AGE_VALIDITY = 22;

/**
 * Nusantara Valid: _nomorIndukSiswaNasional.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorIndukSiswaNasional class
**/
var NomorIndukSiswaNasional = /** @class */ (function () {
    function NomorIndukSiswaNasional() {
    }
    NomorIndukSiswaNasional.prototype.isValid = function (nisn) {
        if (!nisn || typeof nisn !== 'string')
            return false;
        var validNISN = NISN_REGEX.exec(numbersOnly(nisn));
        return validNISN !== null
            && this.isValidPeriod(validNISN[1])
            && correctLength(0, validNISN[0].length, { minLength: NISN_LENGTH });
    };
    NomorIndukSiswaNasional.prototype.isValidPeriod = function (year) {
        var thisYear = new Date().getFullYear();
        var endYear = thisYear - NISN_AGE_VALIDITY;
        var birthYear = parseInt(year) + 2000;
        if (birthYear > thisYear)
            birthYear = birthYear - 1000;
        return birthYear < endYear ? false : true;
    };
    return NomorIndukSiswaNasional;
}());
var theNISN = new NomorIndukSiswaNasional();
/**
 * NISN validation.
 *
 * Validate NISN by validating NISN's birth year (student age) with NISN_AGE_VALIDITY and NISN's length
 *
 * @param {string} nisn - The NISN to be validated
 * @return {boolean} Is valid or not
**/
function isValidNISN(nisn) {
    return theNISN.isValid(nisn);
}

/**
 * Nusantara Valid: npwp.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/
/**
 * NPWP_REGEX
 *
 * NPWP_REGEX[0] = NPWP has 15 digits
 * NPWP_REGEX[1] = 2 digits of Tax Identities
 * NPWP_REGEX[2] = 3 digits of Registration Number - first part
 * NPWP_REGEX[3] = 3 digits of Registration Number - second part
 * NPWP_REGEX[4] = 1 digit of Security Number
 * NPWP_REGEX[5] = 3 digits of KPP code
 * NPWP_REGEX[6] = 3 digits of Tax Status (000 => Pajak Pusat; 001 => Pajak Cabang)
**/
var NPWP_REGEX = /^(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{3})$/;
/**
 * NPWP_LENGTH
 *
 * Total length of NPWP without any special characters
**/
var NPWP_LENGTH = 15;
/**
 * NPWP_TAX_IDENTITIES
 *
 * Lists of NPWP tax identities
**/
var NPWP_TAX_IDENTITIES = [
    '01', '02', '21', '31', '00', '20', '04', '05', '06', '07', '08', '09', '24', '25', '26',
    '31', '34', '35', '36', '47', '48', '49', '57', '58', '67', '77', '78', '79', '87', '88',
    '89', '97'
];
/**
 * NPWP_DOT_INDEXES
 *
 * Indexes of where are the dot separator to be placed
 * Eg: 09.123.123.1-123.123
**/
var NPWP_DOT_INDEXES = [1, 4, 7, 11];
/**
 * NPWP_HYPHEN_INDEXES
 *
 * Indexes of where are the hyphen separator to be placed
 * Eg: 09.123.123.1-123.123
**/
var NPWP_HYPHEN_INDEXES = [8];

/**
 * Nusantara Valid: _nomorPokokWajibPajak.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The NomorPokokWajibPajak class
**/
var NomorPokokWajibPajak = /** @class */ (function () {
    function NomorPokokWajibPajak() {
    }
    NomorPokokWajibPajak.prototype.isValid = function (npwp) {
        if (!npwp || typeof npwp !== 'string')
            return false;
        var numOnly = numbersOnly(npwp);
        var regexNPWP = NPWP_REGEX.exec(numOnly);
        return regexNPWP !== null
            && this.isValidTaxIdentity(regexNPWP[1])
            && correctLength(0, regexNPWP[0].length, { minLength: NPWP_LENGTH });
    };
    NomorPokokWajibPajak.prototype.isValidTaxIdentity = function (taxIdentity) {
        return includes(NPWP_TAX_IDENTITIES, taxIdentity);
    };
    NomorPokokWajibPajak.prototype.format = function (npwp) {
        var newNPWP = numbersOnly(npwp);
        return newNPWP
            .slice(0, NPWP_LENGTH)
            .split('')
            .reduce(function (a, b, index) {
            var result = "" + a + b;
            if (!(index === newNPWP.length - 1)) {
                if (includes(NPWP_DOT_INDEXES, index))
                    return result + ".";
                if (includes(NPWP_HYPHEN_INDEXES, index))
                    return result + "-";
            }
            return result;
        }, '');
    };
    return NomorPokokWajibPajak;
}());
var theNPWP = new NomorPokokWajibPajak();
/**
 * NPWP validation.
 *
 * Validate NPWP by validating NPWP's tax identity and NPWP's length
 *
 * @param {string} npwp - The NPWP to be validated
 * @return {boolean} Is valid or not
**/
function isValidNPWP(npwp) {
    return theNPWP.isValid(npwp);
}
/**
 * NPWP formating
 *
 * Format NPWP to the correct requirement
 *
 * @param {string} npwp - TheNPWP to be formated
 * @return {string} Formated NPWP
**/
function formatNPWP(npwp) {
    return theNPWP.format(npwp);
}

/**
 * Nusantara Valid: _telephoneNumber.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The TelephoneNumber class
**/
var TelephoneNumber = /** @class */ (function () {
    function TelephoneNumber() {
        this.VALID_TELEPHONE_AREACODE = PROVINCE_KEYS.reduce(function (a, b) { return a.concat(PROVINCE_DATA[b].tel); }, []);
    }
    TelephoneNumber.prototype.isValid = function (tel) {
        if (!tel || typeof tel !== 'string')
            return false;
        var cleanTelNumber = cleanPhoneNumbers(tel);
        return !isNaN(this.isValidCellularPrefix(cleanTelNumber));
    };
    TelephoneNumber.prototype.isValidCellularPrefix = function (parsedTel) {
        var thePrefix = Number(parsedTel.substr(0, 2));
        if (includes(this.VALID_TELEPHONE_AREACODE, thePrefix))
            return thePrefix;
        thePrefix = Number(parsedTel.substr(0, 3));
        if (includes(this.VALID_TELEPHONE_AREACODE, thePrefix))
            return thePrefix;
        return NaN;
    };
    TelephoneNumber.prototype.getData = function (tel) {
        var data = {};
        var cleanTelNumber = cleanPhoneNumbers(tel);
        data.number = this.format(cleanTelNumber);
        var pfx = this.isValidCellularPrefix(cleanTelNumber);
        for (var _i = 0, PROVINCE_KEYS_1 = PROVINCE_KEYS; _i < PROVINCE_KEYS_1.length; _i++) {
            var key = PROVINCE_KEYS_1[_i];
            var element = PROVINCE_DATA[key];
            if (includes(element.tel, pfx)) {
                data.origin = {
                    bpsCode: key,
                    name: element.name
                };
                break;
            }
        }
        return data;
    };
    TelephoneNumber.prototype.format = function (tel, int) {
        if (int === void 0) { int = false; }
        var cleanTelNumber = cleanPhoneNumbers(tel);
        var pfx = this.isValidCellularPrefix(cleanTelNumber).toString();
        var TEL_HYPEN_INDEX = [];
        if (pfx.length === 2)
            TEL_HYPEN_INDEX = [1];
        else
            TEL_HYPEN_INDEX = [2];
        var formatedNumber = cleanTelNumber
            .slice(0, cleanTelNumber.length)
            .split('')
            .reduce(function (a, b, index) {
            var result = "" + a + b;
            if (!(index === cleanTelNumber.length - 1)) {
                if (includes(TEL_HYPEN_INDEX, index))
                    return result + "-";
            }
            return result;
        }, '');
        return int ? '+' + COUNTRY_CODE + formatedNumber : '0' + formatedNumber;
    };
    return TelephoneNumber;
}());
var telNumber = new TelephoneNumber();
/**
 * Telephone number validation
 *
 * It will validate telephone number based on it's prefix
 *
 * @param {string} number - The telephone number to be validated
 * @return {boolean} Is valid or not
**/
function isValidTelephoneNumber(number) {
    return telNumber.isValid(number);
}
/**
 * Telephone number data getter
 *
 * Return object data based on provided telephone number
 *
 * @param {string} number - The telephone number
 * @return {object} IDataTelephoneNumber object
**/
function getDataTelephoneNumber(number) {
    return telNumber.getData(number);
}
/**
 * Telephone number formating
 *
 * Format telephone number to local calling format (0) and international calling format (+XX)
 *
 * @param {string} number - The telephone number to be formated
 * @param {boolean} int - Local calling format (leading zero) or international calling format (leading country code)
 * @return {string} Formated number
**/
function formatTelephoneNumber(number, int) {
    if (int === void 0) { int = false; }
    return telNumber.format(number, int);
}

/**
 * Nusantara Valid: tnkb.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/
/**
 * TNKB_REGEX
 *
 * TNKB_REGEX[0] = The TNKB
 * TNKB_REGEX[1] = 1 or 2 character of TNKB location
 * TNKB_REGEX[2] = 1 to 4 digits of Identity number
 * TNKB_REGEX[3] = 1 to 3 character of Detailed TNKB location
**/
var TNKB_REGEX = /^([A-Z]{1,2})(\d{1,4})([A-Z]{1,3})$/;

/**
 * Nusantara Valid: _tandaNomorKendaraanBermotor.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The TandaNomorKendaraanBermotor class
**/
var TandaNomorKendaraanBermotor = /** @class */ (function () {
    function TandaNomorKendaraanBermotor() {
        this.VALID_TNKB_AREACODE = PROVINCE_KEYS.reduce(function (a, b) { return a.concat(PROVINCE_DATA[b].vehiclePlate); }, []);
    }
    TandaNomorKendaraanBermotor.prototype.isValid = function (tnkb) {
        if (!tnkb || typeof tnkb !== 'string')
            return false;
        var TNKB = tnkb.toUpperCase();
        var validTNKB = TNKB_REGEX.exec(TNKB);
        return validTNKB !== null
            && this.isValidTNKBArea(validTNKB[1]);
    };
    TandaNomorKendaraanBermotor.prototype.isValidTNKBArea = function (tnkb) {
        return includes(this.VALID_TNKB_AREACODE, tnkb);
    };
    TandaNomorKendaraanBermotor.prototype.getData = function (tnkb) {
        var data = {};
        var TNKB = tnkb.toUpperCase();
        var validTNKB = TNKB_REGEX.exec(TNKB);
        if (!validTNKB)
            return data;
        for (var _i = 0, PROVINCE_KEYS_1 = PROVINCE_KEYS; _i < PROVINCE_KEYS_1.length; _i++) {
            var key = PROVINCE_KEYS_1[_i];
            var element = PROVINCE_DATA[key];
            if (includes(element.vehiclePlate, validTNKB[1])) {
                data = {
                    areaCode: validTNKB[1],
                    index: Number(validTNKB[2]),
                    detailedAreaCode: validTNKB[3],
                    province: {
                        bpsCode: key,
                        name: element.name
                    }
                };
                break;
            }
        }
        return data;
    };
    return TandaNomorKendaraanBermotor;
}());
var theTNKB = new TandaNomorKendaraanBermotor();
/**
 * TNKB validation.
 *
 * It check if the TNKB's area code is exist in VALID_TNKB_AREACODE
 *
 * @param {string} tnkb - The TNKB, the one to be validated
 * @return {boolean} Is valid or not
**/
function isValidTNKB(tnkb) {
    return theTNKB.isValid(tnkb);
}
/**
 * TNKB data retreiver.
 *
 * Return a set of TNKB object data from user provided tnkb
 *
 * @param {string} tnkb - The TNKB
 * @return {IDataTNKB} The TNKB data
**/
function getDataTNKB(tnkb) {
    return theTNKB.getData(tnkb);
}

/**
 * Nusantara Valid: _zipCode.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The ZIPCode class
**/
var ZIPCode = /** @class */ (function () {
    function ZIPCode() {
        this.ZIP_RANGES = PROVINCE_KEYS.reduce(function (a, b) { return a.concat(PROVINCE_DATA[b].zipCode); }, []);
    }
    ZIPCode.prototype.isValid = function (zip, provinceKey) {
        if (provinceKey === void 0) { provinceKey = ''; }
        if (!zip)
            return false;
        var zipArray;
        zip = zip.toString();
        provinceKey ? zipArray = PROVINCE_DATA[provinceKey].zipCode : zipArray = this.ZIP_RANGES;
        return parseInt(zip).toString() === zip
            && correctLength(0, zip.length, { minLength: 5 })
            && this.isValidZIPCode(zip, zipArray);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ZIPCode.prototype.isValidZIPCode = function (zip, zipRange) {
        for (var _i = 0, zipRange_1 = zipRange; _i < zipRange_1.length; _i++) {
            var val = zipRange_1[_i];
            if (val.from <= zip && val.to >= zip) {
                return true;
            }
        }
        return false;
    };
    return ZIPCode;
}());
var theZIP = new ZIPCode();
/**
 * ZIP validation without any comparison with user provided data.
 *
 * It will check if the ZIP is included / exist in VALID_ZIPCODE array and if the ZIP has the correct length of 6.
 *
 * @param {string} zip - The ZIP, the one to be validated
 * @return {boolean} Is valid or not
**/
function isValidZIP(zip) {
    return theZIP.isValid(zip);
}
/**
 * ZIP validation with comparison with user provided provinceKey.
 *
 * It will check if the ZIP is included / exist in ZIP range from PROVINCE_DATA[provinceKey].zipCode[]
 *
 * @param {string | number} zip - The ZIP, the one to be validated
 * @param {object} comparison - The data to compare with, provinceKey (key from PROVINCE_DATA)
 * @return {boolean} Is valid or not
**/
function isValidZIPWithComparison(zip, comparison) {
    var _a = comparison.provinceKey, provinceKey = _a === void 0 ? '' : _a;
    return theZIP.isValid(zip, provinceKey);
}

export { cleanPhoneNumbers, correctLength, formatCCNumber, formatCellularNumber, formatDate, formatNPWP, formatTelephoneNumber, getDataBank, getDataBanks, getDataCellularNumber, getDataCellularProvider, getDataCellularProviders, getDataDistrictsInRegency, getDataNIK, getDataNIP, getDataProvince$1 as getDataProvince, getDataProvinces, getDataRegenciesInProvince, getDataTNKB, getDataTelephoneNumber, includes, isValidATMNumber, isValidATMNumberWithComparison, isValidCCNumber, isValidCellularNumber, isValidCellularNumberWithComparison, isValidEmail, isValidNIK, isValidNIKWithComparison, isValidNIP, isValidNISN, isValidNPWP, isValidTNKB, isValidTelephoneNumber, isValidZIP, isValidZIPWithComparison, numbersOnly, range };
//# sourceMappingURL=nusantara-valid.extended.js.map
