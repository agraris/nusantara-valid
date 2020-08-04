/**
 * Nusantara Valid: cellular.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/

import { range } from '../helpers';

/**
 * CELLULAR_PROVIDER_DATA
 *
 * List cellular provider in Indonesia
**/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CELLULAR_PROVIDER_DATA : { [key: string]: any } =
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

/**
 * CELLULAR_PROVIDER_KEYS
 *
 * List of cellular provider object keys.
**/
export const CELLULAR_PROVIDER_KEYS = Object.keys(CELLULAR_PROVIDER_DATA);

/**
 * CELLULAR_PROVIDER_PREFIXES
 *
 * List of cellular provider prefixes.
**/
export const CELLULAR_PROVIDER_PREFIXES = CELLULAR_PROVIDER_KEYS.reduce(
    (a, b) => a.concat(CELLULAR_PROVIDER_DATA[b].prefix), []
)