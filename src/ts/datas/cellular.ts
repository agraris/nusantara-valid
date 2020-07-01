const range = (start: number, stop: number) => Array.from({ length: (stop - start) / 1 + 1 }, (_, i) => start + (i * 1))

/**
 * CELLULAR_NUMBER
 *
 * List cellular provider in Indonesia
**/
export const CELLULAR_NUMBER =
{
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
export const CELLULAR_MIN_LENGTH = 10;

/**
 * CELLULAR_MAX_LENGTH
 *
 * Maximum length of cellular number without leading zero or country code
**/
export const CELLULAR_MAX_LENGTH = 12;

export type Cellular = keyof typeof CELLULAR_NUMBER;
export const CELLULAR = Object.keys(CELLULAR_NUMBER) as Cellular[];