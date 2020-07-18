import { expect } from "chai"
import { getDataRegenciesInProvince } from "../../ts/functions/index.extended"

describe('Province (Extended)', () => {
    describe('getDataRegenciesInProvince()', () => {
        it('should return an object of Regency data', () => {
            expect(getDataRegenciesInProvince('YO')).to.deep.equal([
                { key: '34.01', name: 'Kabupaten Kulon Progo' },
                { key: '34.02', name: 'Kabupaten Bantul' },
                { key: '34.03', name: 'Kabupaten Gunung Kidul' },
                { key: '34.04', name: 'Kabupaten Sleman' },
                { key: '34.71', name: 'Kota Yogyakarta' }
            ])
        })
    })
})
