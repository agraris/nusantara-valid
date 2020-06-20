import { IValid } from "../interface";
import { MAX_EMAIL_LENGTH, EMAIL_REGEX, MAX_LOCALPART_LENGTH } from "../datas/email";

export class Email implements IValid {
    isValid (email: string): boolean {
        if (!email || typeof email !== 'string') return false;

        if (email.length > MAX_EMAIL_LENGTH) return false;

        const validEmail = EMAIL_REGEX.exec(email);

        if (!validEmail) return false;

        const localPart = validEmail[0];

        if (localPart.length > MAX_LOCALPART_LENGTH) return false;

        return true;
    }
}

const email = new Email();

export function isValid (param: string) {
    return email.isValid(param);
}