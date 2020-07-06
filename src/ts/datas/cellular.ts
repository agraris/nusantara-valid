/**
 * Nusantara Valid: cellular.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
**/

const range = (start: number, stop: number) => Array.from({ length: (stop - start) / 1 + 1 }, (_, i) => start + (i * 1))

/**
 * CELLULAR_PROVIDER_DATA
 *
 * List cellular provider in Indonesia
**/
export const CELLULAR_PROVIDER_DATA =
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

/**
 * CELLULAR_HYPEN_INDEXES
 *
 * Indexes of where are the hypen separator to be placed on formating
**/
export const CELLULAR_HYPEN_INDEXES = [2, 6]

export type CellularProvider = keyof typeof CELLULAR_PROVIDER_DATA;
export const CELLULAR_PROVIDER_KEYS = Object.keys(CELLULAR_PROVIDER_DATA) as CellularProvider[];