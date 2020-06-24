import { expect } from "chai"
import { getProvinceData as getData } from "../ts/functions/index"

describe('Province', () => {
    describe('getData()', () => {
        it('should return an array of Province data', () => {
            expect(getData()).to.deep.equal([
                { key: 'AC', name: 'Aceh' },
                { key: 'BA', name: 'Bali' },
                { key: 'BB', name: 'Kepulauan Bangka Belitung' },
                { key: 'BE', name: 'Bengkulu' },
                { key: 'BT', name: 'Banten' },
                { key: 'GO', name: 'Gorontalo' },
                { key: 'JA', name: 'Jambi' },
                { key: 'JB', name: 'Jawa Barat' },
                { key: 'JI', name: 'Jawa Timur' },
                { key: 'JK', name: 'Jakarta' },
                { key: 'JT', name: 'Jawa Tengah' },
                { key: 'KB', name: 'Kalimantan Barat' },
                { key: 'KI', name: 'Kalimantan Timur' },
                { key: 'KR', name: 'Kepulauan Riau' },
                { key: 'KS', name: 'Kalimantan Selatan' },
                { key: 'KT', name: 'Kalimantan Tengah' },
                { key: 'KU', name: 'Kalimantan Utara' },
                { key: 'LA', name: 'Lampung' },
                { key: 'MA', name: 'Maluku' },
                { key: 'MU', name: 'Maluku Utara' },
                { key: 'NB', name: 'Nusa Tenggara Barat' },
                { key: 'NT', name: 'Nusa Tenggara Timur' },
                { key: 'PA', name: 'Papua' },
                { key: 'PB', name: 'Papua Barat' },
                { key: 'RI', name: 'Riau' },
                { key: 'SA', name: 'Sulawesi Utara' },
                { key: 'SB', name: 'Sumatra Barat' },
                { key: 'SG', name: 'Sulawesi Tenggara' },
                { key: 'SN', name: 'Sulawesi Selatan' },
                { key: 'SR', name: 'Sulawesi Barat' },
                { key: 'SS', name: 'Sumatra Selatan' },
                { key: 'ST', name: 'Sulawesi Tengah' },
                { key: 'SU', name: 'Sumatra Utara' },
                { key: 'YO', name: 'Yogyakarta' }
            ])
        })
    })

})
