import { expect } from "chai"
import { getDataRegenciesInProvince, getDataDistrictsInRegency } from "../../ts/functions/index.extended"

describe('Province (Extended)', () => {
    describe('getDataRegenciesInProvince()', () => {
        it('should return an array of Regencies data', () => {
            expect(getDataRegenciesInProvince('34')).to.deep.equal([
                { bpsCode: '34.01', name: 'Kabupaten Kulon Progo' },
                { bpsCode: '34.02', name: 'Kabupaten Bantul' },
                { bpsCode: '34.03', name: 'Kabupaten Gunung Kidul' },
                { bpsCode: '34.04', name: 'Kabupaten Sleman' },
                { bpsCode: '34.71', name: 'Kota Yogyakarta' }
            ])
        })
    })

    describe('getDataDistrictsInRegency()', () => {
        it('should return an array of Districts data', () => {
            expect(getDataDistrictsInRegency('34.04')).to.deep.equal([
                { bpsCode: '34.04.01', name: 'Gamping' },
                { bpsCode: '34.04.02', name: 'Godean' },
                { bpsCode: '34.04.03', name: 'Moyudan' },
                { bpsCode: '34.04.04', name: 'Minggir' },
                { bpsCode: '34.04.05', name: 'Seyegan' },
                { bpsCode: '34.04.06', name: 'Mlati' },
                { bpsCode: '34.04.07', name: 'Depok' },
                { bpsCode: '34.04.08', name: 'Berbah' },
                { bpsCode: '34.04.09', name: 'Prambanan' },
                { bpsCode: '34.04.10', name: 'Kalasan' },
                { bpsCode: '34.04.11', name: 'Ngemplak' },
                { bpsCode: '34.04.12', name: 'Ngaglik' },
                { bpsCode: '34.04.13', name: 'Sleman' },
                { bpsCode: '34.04.14', name: 'Tempel' },
                { bpsCode: '34.04.15', name: 'Turi' },
                { bpsCode: '34.04.16', name: 'Pakem' },
                { bpsCode: '34.04.17', name: 'Cangkringan' }
            ])
        })
    })
})
