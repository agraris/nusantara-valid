// Vehicle Registration Number (VRN) / Tanda Nomor Kendaraan Bermotor (TNKB)

import { IValid } from "../interface/index"
import { VRN_REGEX } from "../datas/vehicleRegistrationNumber"
import { PROVINCES_DATA } from "../datas/province"

export class VehicleRegistrationNumber implements IValid {
    VALID_VRN_AREACODE = Object.keys(PROVINCES_DATA).reduce(
        (a, b) => a.concat((PROVINCES_DATA as any)[b].vehiclePlate), []
    ) as string[]

    isValid(vrn: string) : boolean {
        if (!vrn || typeof vrn !== 'string') return false

        const VRN = vrn.toUpperCase()

        const validVRN = VRN_REGEX.exec(VRN)

        if (!validVRN) return false

        return this.isValidVRNArea(validVRN)
    }

    isValidVRNArea(vrn: RegExpExecArray): boolean {
        return this.VALID_VRN_AREACODE.includes(vrn[1])
    }
}

const vrn = new VehicleRegistrationNumber()

export function isValid(param: string) {
    return vrn.isValid(param)
}