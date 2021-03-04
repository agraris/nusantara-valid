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
 * Get all province data with IDataProvince object structure
 *
 * Return all IDataProvince object in Array<IDataProvince>
 *
 * @return {IDataProvince[]} Array of IDataProvince object
**/
function getDataProvinces() {
    return prov.getData();
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
var theNIK = new NomorIndukKependudukan();
/**
 * NIK validation without any comparison with user provided data.
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
 * NIK data retreiver.
 *
 * Return a set of NIK object data from user provided nik
 *
 * @param {string} nik - The NIK
 * @return {object} The NIK data
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

export { cleanPhoneNumbers, correctLength, formatCCNumber, formatCellularNumber, formatDate, formatNPWP, formatTelephoneNumber, getDataBank, getDataBanks, getDataCellularNumber, getDataCellularProvider, getDataCellularProviders, getDataNIK, getDataNIP, getDataProvince, getDataProvinces, getDataTNKB, getDataTelephoneNumber, includes, isValidATMNumber, isValidATMNumberWithComparison, isValidCCNumber, isValidCellularNumber, isValidCellularNumberWithComparison, isValidEmail, isValidNIK, isValidNIKWithComparison, isValidNIP, isValidNISN, isValidNPWP, isValidTNKB, isValidTelephoneNumber, isValidZIP, isValidZIPWithComparison, numbersOnly, range };
//# sourceMappingURL=nusantara-valid.js.map
