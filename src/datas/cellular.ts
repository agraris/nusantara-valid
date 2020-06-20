const range = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))

export const CELLULAR_NUMBER =
{
    TELKOMSEL: {
        name: 'Telkomsel',
        prefix: range(811, 813, 1).concat([852, 853]),
    },
    XL: {
        name: 'XL',
        prefix: range(817, 819, 1).concat([838, 859, 878]),
    },
    INDOSAT: {
        name: 'Indosat',
        prefix: range(814, 816, 1).concat([855, 856, 858]),
    },
    TRI: {
        name: 'Tri',
        prefix: range(896, 899, 1),
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