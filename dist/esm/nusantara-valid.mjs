function numbersOnly(input) {
    return String(input).replace(/[^\d]/g, '');
}

var range = function (start, stop) { return Array.from({ length: (stop - start) / 1 + 1 }, function (_, i) { return start + (i * 1); }); };
/**
 * CELLULAR_NUMBER
 *
 * List cellular provider in Indonesia
**/
var CELLULAR_NUMBER = {
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
 * Minimum length of cellular number including country code
**/
var CELLULAR_MIN_LENGTH = 11;
/**
 * CELLULAR_MAX_LENGTH
 *
 * Maximum length of cellular number including country code
**/
var CELLULAR_MAX_LENGTH = 13;
/**
 * CELLULAR_COUNTRY_CODE
 *
 * The country code
**/
var CELLULAR_COUNTRY_CODE = 62;

function parseCellularPrefix(input) {
    // +62xxx => 62xxx
    var number = String(input).replace(/[^\d]/g, '');
    var newNumber = "";
    // 0xxx => 62xxx
    if (number.charAt(0) == '0')
        newNumber = number.replace('0', CELLULAR_COUNTRY_CODE.toString());
    return newNumber;
}

function parseTelephoneAreaCode(input) {
    var number = String(input).replace(/[^\d]/g, '');
    var newNumber = number;
    if (number.charAt(0) != '0')
        newNumber = '0' + number;
    return newNumber;
}

function formatDate(date) {
    var newDate = date.replace(/(\d{4})(\d{2})(?:(\d{2})?)/, "$1-$2-$3");
    var formatedDate = new Date(newDate);
    return formatedDate;
}

/**
 * BANK_DATA
 *
 * List of bank in Indonesia including BPS code, vehicle plate,
 * telephone numbers, and zip code.
**/
var BANK_DATA = {
    BCAK: {
        name: 'Bank Central Asia',
        digits: 10,
        dotIndex: []
    },
    BCAS: {
        name: 'Bank Central Asia Syariah',
        digits: 10,
        dotIndex: []
    },
    BNIK: {
        name: 'Bank Negara Indonesia',
        digits: 10,
        dotIndex: []
    },
    BNIS: {
        name: 'Bank Negara Indonesia Syariah',
        digits: 10,
        dotIndex: []
    },
    BRIK: {
        name: 'Bank Rakyat Indonesia',
        digits: 15,
        dotIndex: []
    },
    BRIS: {
        name: 'Bank Rakyat Indonesia Syariah',
        digits: 10,
        dotIndex: []
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
        dotIndex: []
    },
    MDRS: {
        name: 'Bank Mandiri Syariah',
        digits: 10,
        dotIndex: []
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
var BANKS = Object.keys(BANK_DATA);

var ATMNumber = /** @class */ (function () {
    function ATMNumber() {
        this.VALID_ATMNUMBER_LENGTH = Object.keys(BANK_DATA).reduce(function (pref, curr) { return pref.includes(BANK_DATA[curr].digits) ? pref : pref.concat(BANK_DATA[curr].digits); }, []);
    }
    ATMNumber.prototype.isValid = function (atm, bank) {
        if (!atm || typeof atm !== 'string')
            return false;
        if (bank === undefined)
            bank = '';
        var numOnly = numbersOnly(atm);
        if (bank)
            return BANK_DATA[bank].digits == numOnly.length;
        return this.isValidLength(numOnly.length);
    };
    ATMNumber.prototype.isValidLength = function (length) {
        return this.VALID_ATMNUMBER_LENGTH.includes(length);
    };
    return ATMNumber;
}());
var atm = new ATMNumber();
function isValid(param, index) {
    return atm.isValid(param, index);
}

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

var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    CreditCard.prototype.isValid = function (cc) {
        if (!cc || typeof cc !== 'string')
            return false;
        var numOnly = numbersOnly(cc);
        return this.isValidMII(cc.charAt(0)) && this.isValidLength(numOnly.length);
    };
    CreditCard.prototype.isValidLength = function (length) {
        return length == CC_LENGTH;
    };
    CreditCard.prototype.isValidMII = function (mii) {
        return CC_VALID_MII.includes(mii);
    };
    CreditCard.prototype.format = function (cc) {
        var newCC = numbersOnly(cc);
        return newCC
            .slice(0, CC_LENGTH)
            .split('')
            .reduce(function (a, b, index) {
            var result = "" + a + b;
            if (!(index === newCC.length - 1)) {
                if (CC_SPACE_INDEXES.includes(index))
                    return result + " ";
            }
            return result;
        }, '');
    };
    return CreditCard;
}());
var cc = new CreditCard();
function isValid$1(param) {
    return cc.isValid(param);
}
function format(param) {
    return cc.format(param);
}

var MobileNumber = /** @class */ (function () {
    function MobileNumber() {
        this.VALID_CELLULAR_PREFIX = Object.keys(CELLULAR_NUMBER).reduce(function (a, b) { return a.concat(CELLULAR_NUMBER[b].prefix); }, []);
    }
    MobileNumber.prototype.isValid = function (mobile) {
        if (!mobile || typeof mobile !== 'string')
            return false;
        var parsedCellularNumber = parseCellularPrefix(mobile);
        // Return true if isValidLength and isValidCellularPrefix all true
        return this.isValidLength(parsedCellularNumber) && this.isValidCellularPrefix(parsedCellularNumber);
    };
    MobileNumber.prototype.isValidCellularPrefix = function (parsedCellularNumber) {
        return this.VALID_CELLULAR_PREFIX.includes(Number(parsedCellularNumber.substr(2, 3)));
    };
    MobileNumber.prototype.isValidLength = function (phone) {
        return phone.length >= CELLULAR_MIN_LENGTH && phone.length <= CELLULAR_MAX_LENGTH;
    };
    return MobileNumber;
}());
var mobileNumber = new MobileNumber();
function isValid$2(param) {
    return mobileNumber.isValid(param);
}

/**
 * EMAIL_REGEX
 * by Brent Thomas
 *
 * EMAIL_REGEX[0] = The email
 * EMAIL_REGEX[1] = Local part of email
 * EMAIL_REGEX[2] = @
 * EMAIL_REGEX[3] = Domain name
 * EMAIL_REGEX[4] = TLD
**/
var EMAIL_REGEX = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]+)$/;
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

var Email = /** @class */ (function () {
    function Email() {
    }
    Email.prototype.isValid = function (email) {
        if (!email || typeof email !== 'string')
            return false;
        var validEmail = EMAIL_REGEX.exec(email);
        if (!validEmail)
            return false;
        // Return true if validEmail, validEmail length and email local part length is true
        return validEmail && this.isValidLength(validEmail);
    };
    Email.prototype.isValidLength = function (email) {
        return email.length <= MAX_EMAIL_LENGTH && email[0].length <= MAX_LOCALPART_LENGTH;
    };
    return Email;
}());
var email = new Email();
function isValid$3(param) {
    return email.isValid(param);
}

/**
 * NIK_REGEX
 *
 * NIK_REGEX[0] = NIK Number has 16 digits
 * NIK_REGEX[1] = 2 digits of Province Code (BPS Code)
 * NIK_REGEX[2] = 2 digits of City or Distric Code
 * NIK_REGEX[3] = 2 digits of Sub Distric Code
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

var range$1 = function (start, stop) { return Array.from({ length: (stop - start) / 1 + 1 }, function (_, i) { return start + (i * 1); }); };
/**
 * PROVINCES_DATA
 *
 * List of province data in Indonesia including BPS code, vehicle plate,
 * telephone numbers, and zip code.
**/
var PROVINCES_DATA = {
    AC: {
        name: 'Aceh',
        bpsCode: 11,
        vehiclePlate: ['BL'],
        tel: range$1(641, 659).concat([627, 629]),
        zipCode: [
            {
                from: 23111,
                to: 24794
            }
        ]
    },
    BA: {
        name: 'Bali',
        bpsCode: 51,
        vehiclePlate: ['DK'],
        tel: range$1(361, 368),
        zipCode: [
            {
                from: 80111,
                to: 82262
            }
        ]
    },
    BB: {
        name: 'Kepulauan Bangka Belitung',
        bpsCode: 19,
        vehiclePlate: ['BN'],
        tel: range$1(715, 719),
        zipCode: [
            {
                from: 33111,
                to: 33792
            }
        ]
    },
    BE: {
        name: 'Bengkulu',
        bpsCode: 17,
        vehiclePlate: ['BD'],
        tel: range$1(736, 739).concat([732]),
        zipCode: [
            {
                from: 38113,
                to: 39377
            }
        ]
    },
    BT: {
        name: 'Banten',
        bpsCode: 36,
        vehiclePlate: ['A'],
        tel: range$1(252, 257),
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
    GO: {
        name: 'Gorontalo',
        bpsCode: 75,
        vehiclePlate: ['DM'],
        tel: [435, 443],
        zipCode: [
            {
                from: 96111,
                to: 96574
            }
        ]
    },
    JA: {
        name: 'Jambi',
        bpsCode: 15,
        vehiclePlate: ['BH'],
        tel: range$1(740, 748),
        zipCode: [
            {
                from: 36111,
                to: 37574
            }
        ]
    },
    JB: {
        name: 'Jawa Barat',
        bpsCode: 32,
        vehiclePlate: ['D', 'E', 'F', 'T', 'Z'],
        tel: range$1(231, 234).concat(range$1(260, 267)).concat([22, 251]),
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
    JI: {
        name: 'Jawa Timur',
        bpsCode: 35,
        vehiclePlate: ['L', 'M', 'N', 'P', 'S', 'W', 'AE', 'AG'],
        tel: range$1(321, 358).concat([31]),
        zipCode: [
            {
                from: 60111,
                to: 69493
            }
        ]
    },
    JK: {
        name: 'Jakarta',
        bpsCode: 31,
        vehiclePlate: ['B'],
        tel: [21],
        zipCode: [
            {
                from: 10110,
                to: 14540
            }
        ]
    },
    JT: {
        name: 'Jawa Tengah',
        bpsCode: 33,
        vehiclePlate: ['G', 'H', 'K', 'R', 'AA', 'AD'],
        tel: range$1(271, 299).concat([24, 356]),
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
    KB: {
        name: 'Kalimantan Barat',
        bpsCode: 61,
        vehiclePlate: ['KB'],
        tel: range$1(564, 568).concat([534]),
        zipCode: [
            {
                from: 78111,
                to: 79682
            }
        ]
    },
    KI: {
        name: 'Kalimantan Timur',
        bpsCode: 64,
        vehiclePlate: ['KT'],
        tel: range$1(541, 556),
        zipCode: [
            {
                from: 75111,
                to: 77381
            }
        ]
    },
    KR: {
        name: 'Kepulauan Riau',
        bpsCode: 21,
        vehiclePlate: ['BP'],
        tel: range$1(771, 779),
        zipCode: [
            {
                from: 29111,
                to: 29878
            }
        ]
    },
    KS: {
        name: 'Kalimantan Selatan',
        bpsCode: 63,
        vehiclePlate: ['DA'],
        tel: range$1(511, 527),
        zipCode: [
            {
                from: 70111,
                to: 72276
            }
        ]
    },
    KT: {
        name: 'Kalimantan Tengah',
        bpsCode: 62,
        vehiclePlate: ['KH'],
        tel: range$1(513, 539),
        zipCode: [
            {
                from: 73111,
                to: 74874
            }
        ]
    },
    KU: {
        name: 'Kalimantan Utara',
        bpsCode: 65,
        vehiclePlate: ['KU'],
        tel: range$1(551, 556),
        zipCode: [
            {
                from: 77111,
                to: 77574
            }
        ]
    },
    LA: {
        name: 'Lampung',
        bpsCode: 18,
        vehiclePlate: ['BE'],
        tel: range$1(721, 729),
        zipCode: [
            {
                from: 34111,
                to: 35686
            }
        ]
    },
    MA: {
        name: 'Maluku',
        bpsCode: 81,
        vehiclePlate: ['DE'],
        tel: range$1(910, 931),
        zipCode: [
            {
                from: 97114,
                to: 97669
            }
        ]
    },
    MU: {
        name: 'Maluku Utara',
        bpsCode: 82,
        vehiclePlate: ['DG'],
        tel: range$1(910, 931),
        zipCode: [
            {
                from: 97711,
                to: 97869
            }
        ]
    },
    NB: {
        name: 'Nusa Tenggara Barat',
        bpsCode: 52,
        vehiclePlate: ['DR', 'EA'],
        tel: range$1(370, 376).concat([364]),
        zipCode: [
            {
                from: 83115,
                to: 84459
            }
        ]
    },
    NT: {
        name: 'Nusa Tenggara Timur',
        bpsCode: 53,
        vehiclePlate: ['DH', 'EB', 'ED'],
        tel: range$1(380, 389),
        zipCode: [
            {
                from: 85111,
                to: 87284
            }
        ]
    },
    PA: {
        name: 'Papua',
        bpsCode: 94,
        vehiclePlate: ['PA'],
        tel: range$1(951, 986).concat([901, 902]),
        zipCode: [
            {
                from: 98511,
                to: 99976
            }
        ]
    },
    PB: {
        name: 'Papua Barat',
        bpsCode: 91,
        vehiclePlate: ['PB'],
        tel: range$1(951, 986).concat([901, 902]),
        zipCode: [
            {
                from: 98011,
                to: 98495
            }
        ]
    },
    RI: {
        name: 'Riau',
        bpsCode: 14,
        vehiclePlate: ['BM'],
        tel: range$1(760, 769).concat([624]),
        zipCode: [
            {
                from: 28111,
                to: 29569
            }
        ]
    },
    SA: {
        name: 'Sulawesi Utara',
        bpsCode: 71,
        vehiclePlate: ['DB', 'DL'],
        tel: range$1(430, 438),
        zipCode: [
            {
                from: 95111,
                to: 95999
            }
        ]
    },
    SB: {
        name: 'Sumatra Barat',
        bpsCode: 13,
        vehiclePlate: ['BA'],
        tel: range$1(751, 759),
        zipCode: [
            {
                from: 25111,
                to: 27779
            }
        ]
    },
    SG: {
        name: 'Sulawesi Tenggara',
        bpsCode: 74,
        vehiclePlate: ['DT'],
        tel: range$1(401, 408),
        zipCode: [
            {
                from: 93111,
                to: 93963
            }
        ]
    },
    SN: {
        name: 'Sulawesi Selatan',
        bpsCode: 73,
        vehiclePlate: ['DD', 'DP', 'DW'],
        tel: range$1(410, 421).concat(range$1(471, 485)).concat([423, 427]),
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
    SR: {
        name: 'Sulawesi Barat',
        bpsCode: 76,
        vehiclePlate: ['DC'],
        tel: [422, 426, 428],
        zipCode: [
            {
                from: 91311,
                to: 91591
            }
        ]
    },
    SS: {
        name: 'Sumatra Selatan',
        bpsCode: 16,
        vehiclePlate: ['BG'],
        tel: range$1(711, 714).concat(range$1(730, 735)).concat([702]),
        zipCode: [
            {
                from: 30111,
                to: 32388
            }
        ]
    },
    ST: {
        name: 'Sulawesi Tengah',
        bpsCode: 72,
        vehiclePlate: ['DN'],
        tel: range$1(445, 465),
        zipCode: [
            {
                from: 94111,
                to: 94981
            }
        ]
    },
    SU: {
        name: 'Sumatra Utara',
        bpsCode: 12,
        vehiclePlate: ['BB', 'BK'],
        tel: range$1(620, 639).concat([601]),
        zipCode: [
            {
                from: 20111,
                to: 22999
            }
        ]
    },
    YO: {
        name: 'Yogyakarta',
        bpsCode: 34,
        vehiclePlate: ['AB'],
        tel: [274],
        zipCode: [
            {
                from: 55111,
                to: 55893
            }
        ]
    },
};
var PROVINCES = Object.keys(PROVINCES_DATA);

var NomorIndukKependudukan = /** @class */ (function () {
    function NomorIndukKependudukan() {
        this.VALID_BPSCODE = Object.keys(PROVINCES_DATA).reduce(function (a, b) { return a.concat(PROVINCES_DATA[b].bpsCode); }, []);
    }
    NomorIndukKependudukan.prototype.isValid = function (nik) {
        if (!nik)
            return false;
        var validNIK = NIK_REGEX.exec(numbersOnly(nik));
        if (!validNIK)
            return false;
        return this.isValidLength(validNIK[0].length) && this.isValidProvince(parseInt(validNIK[1])) && this.isValidBirthday(validNIK[4]);
    };
    NomorIndukKependudukan.prototype.isValidLength = function (nip) {
        return nip == NIK_LENGTH;
    };
    NomorIndukKependudukan.prototype.isValidProvince = function (bpsCode) {
        return this.VALID_BPSCODE.includes(bpsCode);
    };
    NomorIndukKependudukan.prototype.isValidBirthday = function (birthday) {
        var newBirthday = /(\d{2})(\d{2})(\d{2})/.exec(birthday); // DDMMYY
        if (!newBirthday)
            return false;
        var dd = parseInt(newBirthday[1]);
        var mm = parseInt(newBirthday[2]);
        var yy = parseInt(newBirthday[3]);
        if (dd > 40) // Check if it is a man of woman
            dd = dd - 40;
        var formatedBirthday = new Date('19' + yy + '-' + mm + '-' + dd); // '19YY-MM-DD'
        return !isNaN(formatedBirthday.getTime());
    };
    return NomorIndukKependudukan;
}());
var nik = new NomorIndukKependudukan();
function isValid$4(param) {
    return nik.isValid(param);
}

/**
 * NIP_REGEX
 *
 * NIP_REGEX[0] = NIP Number has 18 digits
 * NIP_REGEX[1] = 8 digits of Birthday in YYYYMMDD format
 * NIP_REGEX[2] = 6 digits of Recruiting day in YYYYMM format
 * NIP_REGEX[3] = 1 digit of Gender identifier (1 for man, 2 for woman)
 * NIP_REGEX[4] = 3 digits of Index
**/
var NIP_REGEX = /^([0-9]{8})([0-9]{6})([1,2]{1})([0-9]{3})$/;
/**
 * NIP_LENGTH
 *
 * Total length of NIP without any special characters
**/
var NIP_LENGTH = 18;

var NomorIndukPegawaiNegeriSipil = /** @class */ (function () {
    function NomorIndukPegawaiNegeriSipil() {
    }
    NomorIndukPegawaiNegeriSipil.prototype.isValid = function (nip) {
        if (!nip || typeof nip !== 'string')
            return false;
        var validNIP = NIP_REGEX.exec(numbersOnly(nip));
        if (!validNIP)
            return false;
        return this.isValidLength(validNIP[0].length) && this.isValidDate(validNIP[1]) && this.isValidDate(validNIP[2]);
    };
    NomorIndukPegawaiNegeriSipil.prototype.isValidLength = function (nip) {
        return nip == NIP_LENGTH;
    };
    NomorIndukPegawaiNegeriSipil.prototype.isValidDate = function (date) {
        var newDate = date.replace(/(\d{4})(\d{2})(?:(\d{2})?)/, "$1-$2-$3");
        var formatedDate = new Date(newDate);
        return !isNaN(formatedDate.getTime());
    };
    return NomorIndukPegawaiNegeriSipil;
}());
var nip = new NomorIndukPegawaiNegeriSipil();
function isValid$5(param) {
    return nip.isValid(param);
}

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

var NomorIndukSiswaNasional = /** @class */ (function () {
    function NomorIndukSiswaNasional() {
    }
    NomorIndukSiswaNasional.prototype.isValid = function (nisn) {
        if (!nisn || typeof nisn !== 'string')
            return false;
        if (!this.isValidLength(nisn.length))
            return false;
        var validNISN = NISN_REGEX.exec(numbersOnly(nisn));
        if (!validNISN)
            return false;
        return this.isValidPeriod(validNISN[1]);
    };
    NomorIndukSiswaNasional.prototype.isValidLength = function (nisn) {
        return nisn == NISN_LENGTH;
    };
    NomorIndukSiswaNasional.prototype.isValidPeriod = function (year) {
        var thisYear = new Date().getFullYear();
        var endYear = thisYear - NISN_AGE_VALIDITY;
        var birthYear = parseInt(year) + 2000;
        if (birthYear > thisYear) {
            birthYear = birthYear - 1000;
        }
        if (birthYear < endYear)
            return false;
        return true;
    };
    return NomorIndukSiswaNasional;
}());
var nisn = new NomorIndukSiswaNasional();
function isValid$6(param) {
    return nisn.isValid(param);
}

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

var NomorPokokWajibPajak = /** @class */ (function () {
    function NomorPokokWajibPajak() {
    }
    NomorPokokWajibPajak.prototype.isValid = function (npwp) {
        if (!npwp || typeof npwp !== 'string')
            return false;
        var numOnly = numbersOnly(npwp);
        if (!this.isValidLength(numOnly.length))
            return false;
        var regexNPWP = NPWP_REGEX.exec(numOnly);
        if (!regexNPWP)
            return false;
        return this.isValidTaxIdentity(regexNPWP[1]);
    };
    NomorPokokWajibPajak.prototype.isValidLength = function (npwp) {
        return npwp == NPWP_LENGTH;
    };
    NomorPokokWajibPajak.prototype.isValidTaxIdentity = function (taxIdentity) {
        return NPWP_TAX_IDENTITIES.includes(taxIdentity);
    };
    NomorPokokWajibPajak.prototype.format = function (npwp, pad) {
        if (pad === void 0) { pad = true; }
        var newNPWP = numbersOnly(npwp);
        if (pad) {
            newNPWP = newNPWP.padStart(NPWP_LENGTH, '0');
        }
        return newNPWP
            .slice(0, NPWP_LENGTH)
            .split('')
            .reduce(function (a, b, index) {
            var result = "" + a + b;
            if (!(index === newNPWP.length - 1)) {
                if (NPWP_DOT_INDEXES.includes(index))
                    return result + ".";
                if (NPWP_HYPHEN_INDEXES.includes(index))
                    return result + "-";
            }
            return result;
        }, '');
    };
    return NomorPokokWajibPajak;
}());
var npwp = new NomorPokokWajibPajak();
function isValid$7(param) {
    return npwp.isValid(param);
}
function format$1(param, pad) {
    if (pad === void 0) { pad = true; }
    return npwp.format(param, pad);
}

var TelephoneNumber = /** @class */ (function () {
    function TelephoneNumber() {
        this.VALID_TELEPHONE_AREACODE = Object.keys(PROVINCES_DATA).reduce(function (a, b) { return a.concat(PROVINCES_DATA[b].tel); }, []);
    }
    TelephoneNumber.prototype.isValid = function (tel) {
        if (!tel || typeof tel !== 'string')
            return false;
        var parsedTelephoneNumber = parseTelephoneAreaCode(tel);
        return this.isValidCellularPrefix(parsedTelephoneNumber);
    };
    TelephoneNumber.prototype.isValidCellularPrefix = function (parsedTel) {
        return this.VALID_TELEPHONE_AREACODE.includes(Number(parsedTel.substr(1, 2))) || this.VALID_TELEPHONE_AREACODE.includes(Number(parsedTel.substr(1, 3)));
    };
    return TelephoneNumber;
}());
var telNumber = new TelephoneNumber();
function isValid$8(param) {
    return telNumber.isValid(param);
}

/**
 * TNKB_REGEX
 *
 * TNKB_REGEX[0] = The TNKB
 * TNKB_REGEX[1] = 1 or 2 character of TNKB location
 * TNKB_REGEX[2] = 1 to 4 digits of Identity number
 * TNKB_REGEX[3] = 1 to 3 character of Detailed TNKB location
**/
var TNKB_REGEX = /^([A-Z]{1,2})(\d{1,4})([A-Z]{1,3})$/;

// Vehicle Registration Number (TNKB) / Tanda Nomor Kendaraan Bermotor (TNKB)
var TandaNomorKendaraanBermotor = /** @class */ (function () {
    function TandaNomorKendaraanBermotor() {
        this.VALID_TNKB_AREACODE = Object.keys(PROVINCES_DATA).reduce(function (a, b) { return a.concat(PROVINCES_DATA[b].vehiclePlate); }, []);
    }
    TandaNomorKendaraanBermotor.prototype.isValid = function (tnkb) {
        if (!tnkb || typeof tnkb !== 'string')
            return false;
        var TNKB = tnkb.toUpperCase();
        var validTNKB = TNKB_REGEX.exec(TNKB);
        if (!validTNKB)
            return false;
        return this.isValidTNKBArea(validTNKB);
    };
    TandaNomorKendaraanBermotor.prototype.isValidTNKBArea = function (tnkb) {
        return this.VALID_TNKB_AREACODE.includes(tnkb[1]);
    };
    return TandaNomorKendaraanBermotor;
}());
var tnkb = new TandaNomorKendaraanBermotor();
function isValid$9(param) {
    return tnkb.isValid(param);
}

var ZIPCode = /** @class */ (function () {
    function ZIPCode() {
        this.VALID_ZIPCODE = Object.keys(PROVINCES_DATA).reduce(function (a, b) { return a.concat(PROVINCES_DATA[b].zipCode); }, []);
    }
    ZIPCode.prototype.isValid = function (zip) {
        if (!zip)
            return false;
        var sZIP = zip.toString();
        return this.isValidLength(sZIP) && this.isValidZIPCode(sZIP);
    };
    ZIPCode.prototype.isValidLength = function (zip) {
        return zip.length == 5;
    };
    ZIPCode.prototype.isValidZIPCode = function (zip) {
        for (var _i = 0, _a = this.VALID_ZIPCODE; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.from <= zip && val.to <= zip) {
                return true;
            }
        }
        return false;
    };
    return ZIPCode;
}());
var zip = new ZIPCode();
function isValid$a(param) {
    return zip.isValid(param);
}

var Bank = /** @class */ (function () {
    function Bank() {
    }
    Bank.prototype.getData = function () {
        var banks = BANKS.map(function (key) { return ({
            key: key,
            name: BANK_DATA[key].name,
        }); });
        return banks;
    };
    return Bank;
}());
var atm$1 = new Bank();
function getData() {
    return atm$1.getData();
}

var Province = /** @class */ (function () {
    function Province() {
    }
    Province.prototype.getData = function () {
        var provinces = PROVINCES.map(function (key) { return ({
            key: key,
            name: PROVINCES_DATA[key].name,
        }); });
        return provinces;
    };
    return Province;
}());
var atm$2 = new Province();
function getData$1() {
    return atm$2.getData();
}

export { format as formatCCNumber, formatDate, format$1 as formatNPWP, getData as getBankData, getData$1 as getProvinceData, isValid as isValidATMNumber, isValid$1 as isValidCCNumber, isValid$2 as isValidCellularNumber, isValid$3 as isValidEmail, isValid$4 as isValidNIK, isValid$5 as isValidNIP, isValid$6 as isValidNISN, isValid$7 as isValidNPWP, isValid$9 as isValidTNKB, isValid$8 as isValidTelephoneNumber, isValid$a as isValidZIP, numbersOnly, parseCellularPrefix, parseTelephoneAreaCode };
//# sourceMappingURL=nusantara-valid.mjs.map
