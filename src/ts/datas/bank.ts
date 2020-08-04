/**
 * Nusantara Valid: bank.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/

import { includes } from '../helpers';

/**
 * BANK_DATA
 *
 * List of bank in Indonesia.
**/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BANK_DATA : { [key: string]: any } = // 
{
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
    
}

/**
 * BANK_KEYS
 *
 * List of bank object keys.
**/
export const BANK_KEYS = Object.keys(BANK_DATA);

/**
 * BANK_NUMBER_LENGTHS
 *
 * List of bank's number (ATM number) length.
**/
export const BANK_NUMBER_LENGTHS = BANK_KEYS.reduce(
    (pref, curr) => includes(pref, BANK_DATA[curr].digits) ? pref : pref.concat(BANK_DATA[curr].digits), []
)