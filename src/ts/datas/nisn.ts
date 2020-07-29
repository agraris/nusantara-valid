/**
 * Nusantara Valid: nisn.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/

/**
 * NISN_REGEX
 *
 * NISN_REGEX[0] = NISN has 10 digits
 * NISN_REGEX[1] = 3 digits of Birth Year in YYY format (eg: 2002 => 002)
 * NISN_REGEX[2] = 3 digits of Grouping
 * NISN_REGEX[3] = 4 digits of Index
**/
export const NISN_REGEX = /^(\d{3})(\d{3})(\d{4})$/

/**
 * NISN_LENGTH
 *
 * Total length of NISN
**/
export const NISN_LENGTH = 10

/**
 * NISN_AGE_VALIDITY
 *
 * Validity periode of NISN.
 * Counted from 7 years (as child) + 6 years (as elementaryer) + 3 years (as mid schooler) + 3 years (high schooler) +
 * 3 years (margin of error, eg: grade retained, starting elementary from age of 8)
**/
export const NISN_AGE_VALIDITY = 22