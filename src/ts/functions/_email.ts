import { IValid } from "../interface"
import { MAX_EMAIL_LENGTH, EMAIL_REGEX, MAX_LOCALPART_LENGTH } from "../datas/email"
import { correctLength } from '../helpers'

/**
 * Nusantara Valid: _email.ts
 *
 * Licensed under MIT (https://github.com/agraris/nusantara-valid/blob/master/LICENSE)
 *
 * @class The Email class
**/
class Email implements IValid {
    isValid (email: string): boolean {
        if (!email || typeof email !== 'string') return false

        const validEmail = EMAIL_REGEX.exec(email)

        return validEmail !== null 
            && correctLength(1, validEmail[0].length, { minLength: 1, maxLength: MAX_EMAIL_LENGTH }) 
            && correctLength(1, validEmail[1].length, { minLength: 1, maxLength: MAX_LOCALPART_LENGTH })
    }
}

const theEmail = new Email()

/**
 * E-mail validation.
 *
 * It check if email has the correct requirements such as local part (username), @ [at] symbol, domain name part, and TLD
 *
 * @param {string} email - The email, the one to be validated
 * @return {boolean} Is valid or not
**/
export function isValidEmail(email: string): boolean {
    return theEmail.isValid(email)
}