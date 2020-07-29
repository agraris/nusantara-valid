/**
 * Nusantara Valid: nip.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/

/**
 * NIP_REGEX
 *
 * NIP_REGEX[0] = NIP Number has 18 digits
 * NIP_REGEX[1] = 8 digits of Birthday in YYYYMMDD format
 * NIP_REGEX[2] = 6 digits of Recruiting day in YYYYMM format
 * NIP_REGEX[3] = 1 digit of Gender identifier (1 for man, 2 for woman)
 * NIP_REGEX[4] = 3 digits of Index
**/
export const NIP_REGEX = /^(\d{8})(\d{6})([1,2]{1})(\d{3})$/

/**
 * NIP_LENGTH
 *
 * Total length of NIP without any special characters
**/
export const NIP_LENGTH = 18