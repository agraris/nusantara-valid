import { expect } from "chai"
import { getDataBank, getDataBanks } from "../../ts/functions"

describe('Bank', () => {
    describe('getData()', () => {
        it('should return an object of Bank data', () => {
            expect(getDataBank('BCAK')).to.deep.equal({
                key: 'BCAK',
                name: 'Bank Central Asia'
            })
            expect(getDataBank('MUAM')).to.deep.equal({
                key: 'MUAM',
                name: 'Bank Muamalat'
            })
        })

        it('should return an array of Banks data', () => {
            expect(getDataBanks()).to.deep.equal([
                { key: 'BCAK', name: 'Bank Central Asia' },
                { key: 'BCAS', name: 'Bank Central Asia Syariah' },
                { key: 'BNIK', name: 'Bank Negara Indonesia' },
                { key: 'BNIS', name: 'Bank Negara Indonesia Syariah' },
                { key: 'BRIK', name: 'Bank Rakyat Indonesia' },
                { key: 'BRIS', name: 'Bank Rakyat Indonesia Syariah' },
                { key: 'BTNK', name: 'Bank Tabungan Negara' },
                { key: 'BTNS', name: 'Bank Tabungan Negara Syariah' },
                { key: 'BTPK', name: 'Bank Tabungan Pensiunan Nasional' },
                { key: 'BTPS', name: 'Bank Tabungan Pensiunan Nasional Syariah' },
                { key: 'BUKK', name: 'Bank Bukopin' },
                { key: 'BUKS', name: 'Bank Bukopin Syariah' },
                { key: 'CMBK', name: 'Bank CIMB Niaga' },
                { key: 'CMBS', name: 'Bank CIMB Niaga Syariah' },
                { key: 'DNMK', name: 'Bank Danamon' },
                { key: 'DNMS', name: 'Bank Danamon Syariah' },
                { key: 'MDRK', name: 'Bank Mandiri' },
                { key: 'MDRS', name: 'Bank Mandiri Syariah' },
                { key: 'MGAK', name: 'Bank Mega' },
                { key: 'MGAS', name: 'Bank Mega Syariah' },
                { key: 'MUAM', name: 'Bank Muamalat' },
                { key: 'PMTK', name: 'Bank Permata' },
                { key: 'PMTS', name: 'Bank Permata Syariah' },
                { key: 'PNBK', name: 'Panin Bank' },
                { key: 'PNBS', name: 'Panin Bank Syariah' }
            ])
        })
    })
})