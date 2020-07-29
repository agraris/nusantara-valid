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
export const NPWP_REGEX = /^(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{3})$/

/**
 * NPWP_LENGTH
 *
 * Total length of NPWP without any special characters
**/
export const NPWP_LENGTH = 15

/**
 * NPWP_TAX_IDENTITIES
 *
 * Lists of NPWP tax identities
**/
export const NPWP_TAX_IDENTITIES = [
    '01', '02', '21', '31', '00', '20', '04', '05', '06', '07', '08', '09', '24', '25', '26', 
    '31', '34', '35', '36', '47', '48', '49', '57', '58', '67', '77', '78', '79', '87', '88', 
    '89', '97'
]

/**
 * NPWP_DOT_INDEXES
 *
 * Indexes of where are the dot separator to be placed
 * Eg: 09.123.123.1-123.123
**/
export const NPWP_DOT_INDEXES = [1, 4, 7, 11]

/**
 * NPWP_HYPHEN_INDEXES
 *
 * Indexes of where are the hyphen separator to be placed
 * Eg: 09.123.123.1-123.123
**/
export const NPWP_HYPHEN_INDEXES = [8]