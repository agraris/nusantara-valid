/**
 * Nusantara Valid: email.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
**/

/**
 * EMAIL_REGEX
 * by Brent Thomas
 *
 * EMAIL_REGEX[0] = The email
 * EMAIL_REGEX[1] = Local part of email
**/
export const EMAIL_REGEX = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]+)$/

/**
 * MAX_LOCALPART_LENGTH
 *
 * Maximum length of email's local part
**/
export const MAX_LOCALPART_LENGTH = 64;

/**
 * MAX_EMAIL_LENGTH
 *
 * Maximum length of email
**/
export const MAX_EMAIL_LENGTH = 254;