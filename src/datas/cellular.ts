export const CELLULAR_NUMBER =
{
    TELKOMSEL: {
        name: 'Telkomsel',
        prefix: [811, 812, 813, 852, 853],
    },
    XL: {
        name: 'XL',
        prefix: [817, 818, 819, 838, 859, 878],
    },
    INDOSAT: {
        name: 'Indosat',
        prefix: [814, 815, 816, 855, 856, 858],
    },
    TRI: {
        name: 'Tri',
        prefix: [896, 897, 898, 899],
    },
    SMARTFREN: {
        name: 'Smartfren',
        prefix: [],
    },
};

// Includes 0 (+XX country code) and prefix
export const CELLULAR_MIN_LENGTH = 11;
export const CELLULAR_MAX_LENGTH = 13;

export const CELLULAR_COUNTRY_CODE = 62;

export type Cellular = keyof typeof CELLULAR_NUMBER;

export const CELLULAR = Object.keys(CELLULAR_NUMBER) as Cellular[];