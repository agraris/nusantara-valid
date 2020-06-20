import { IValid, IValidLength } from "../interface"
import { MAX_EMAIL_LENGTH, EMAIL_REGEX, MAX_LOCALPART_LENGTH } from "../datas/email"

export class Email implements IValid, IValidLength {
    isValid (email: string): boolean {
        if (!email || typeof email !== 'string') return false

        const validEmail = EMAIL_REGEX.exec(email)

        if (!validEmail) return false

        // Return true if validEmail, validEmail length and email local part length is true
        return validEmail && this.isValidLength(validEmail)
    }

    isValidLength(email: RegExpExecArray): boolean {
        return email.length <= MAX_EMAIL_LENGTH && email[0].length <= MAX_LOCALPART_LENGTH
    }
}

const email = new Email()

export function isValid (param: string) {
    return email.isValid(param)
}