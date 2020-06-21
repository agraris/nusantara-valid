const range = (start: number, stop: number) => Array.from({ length: (stop - start) / 1 + 1 }, (_, i) => start + (i * 1))

export const CELLULAR_NUMBER =
{
    TELKOMSEL: {
        name: 'Telkomsel',
        prefix: range(811, 813).concat([852, 853]),
    },
    XL: {
        name: 'XL',
        prefix: range(817, 819).concat([838, 859, 878]),
    },
    INDOSAT: {
        name: 'Indosat',
        prefix: range(814, 816).concat([855, 856, 858]),
    },
    TRI: {
        name: 'Tri',
        prefix: range(896, 899),
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