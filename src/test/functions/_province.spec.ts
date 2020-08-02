import { expect } from "chai"
import { getDataProvince, getDataProvinces } from "../../ts/functions"

describe('Province', () => {
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
})
