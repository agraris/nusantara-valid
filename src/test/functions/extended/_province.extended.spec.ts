import { expect } from "chai"
import { getDataRegenciesInProvince, getDataDistrictsInRegency, getDataProvince, getDataProvinces } from "../../../ts/functions/index.extended"

describe('Province (Extended)', () => {
    describe('getDataProvince()', () => {
        it('should return an object of Province data', () => {
            expect(getDataProvince('34')).to.deep.equal(
                { bpsCode: '34', name: 'Yogyakarta' }
            )
        })
    })

    describe('getDataProvinces()', () => {
        it('should return an array of Provinces data', () => {
            expect(getDataProvinces()).to.deep.equal([
                { bpsCode: '11', name: 'Aceh' },
                { bpsCode: '12', name: 'Sumatra Utara' },
                { bpsCode: '13', name: 'Sumatra Barat' },
                { bpsCode: '14', name: 'Riau' },
                { bpsCode: '15', name: 'Jambi' },
                { bpsCode: '16', name: 'Sumatra Selatan' },
                { bpsCode: '17', name: 'Bengkulu' },
                { bpsCode: '18', name: 'Lampung' },
                { bpsCode: '19', name: 'Kepulauan Bangka Belitung' },
                { bpsCode: '21', name: 'Kepulauan Riau' },
                { bpsCode: '31', name: 'Jakarta' },
                { bpsCode: '32', name: 'Jawa Barat' },
                { bpsCode: '33', name: 'Jawa Tengah' },
                { bpsCode: '34', name: 'Yogyakarta' },
                { bpsCode: '35', name: 'Jawa Timur' },
                { bpsCode: '36', name: 'Banten' },
                { bpsCode: '51', name: 'Bali' },
                { bpsCode: '52', name: 'Nusa Tenggara Barat' },
                { bpsCode: '53', name: 'Nusa Tenggara Timur' },
                { bpsCode: '61', name: 'Kalimantan Barat' },
                { bpsCode: '62', name: 'Kalimantan Tengah' },
                { bpsCode: '63', name: 'Kalimantan Selatan' },
                { bpsCode: '64', name: 'Kalimantan Timur' },
                { bpsCode: '65', name: 'Kalimantan Utara' },
                { bpsCode: '71', name: 'Sulawesi Utara' },
                { bpsCode: '72', name: 'Sulawesi Tengah' },
                { bpsCode: '73', name: 'Sulawesi Selatan' },
                { bpsCode: '74', name: 'Sulawesi Tenggara' },
                { bpsCode: '75', name: 'Gorontalo' },
                { bpsCode: '76', name: 'Sulawesi Barat' },
                { bpsCode: '81', name: 'Maluku' },
                { bpsCode: '82', name: 'Maluku Utara' },
                { bpsCode: '91', name: 'Papua Barat' },
                { bpsCode: '92', name: 'Papua' }
            ])
        })
    })
    
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
