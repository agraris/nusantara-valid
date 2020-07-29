/**
 * Nusantara Valid: tnkb.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/

/**
 * TNKB_REGEX
 *
 * TNKB_REGEX[0] = The TNKB
 * TNKB_REGEX[1] = 1 or 2 character of TNKB location
 * TNKB_REGEX[2] = 1 to 4 digits of Identity number
 * TNKB_REGEX[3] = 1 to 3 character of Detailed TNKB location
**/
export const TNKB_REGEX = /^([A-Z]{1,2})(\d{1,4})([A-Z]{1,3})$/