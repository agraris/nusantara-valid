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
export const NIK_REGEX = /^(\d{2})(\d{2})(\d{2})(\d{6})(\d{4})$/

/**
 * NIK_LENGTH
 *
 * Total length of NIK without any special characters
**/
export const NIK_LENGTH = 16