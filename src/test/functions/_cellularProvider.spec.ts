import { expect } from "chai"
import { getDataCellularProvider, getDataCellularProviders } from "../../ts/functions"

describe('Cellular Provider', () => {
    describe('getDataCellularProvider()', () => {
        it('should return an object of Cellular Provider data', () => {
            expect(getDataCellularProvider('TELKOMSEL')).to.deep.equal(
                { "key": "TELKOMSEL", "name": "Telkomsel" }
            )
        })
    })

    describe('getDataCellularProviders()', () => {
        it('should return an array of Cellular Providers data', () => {
            expect(getDataCellularProviders()).to.deep.equal([
                { key: 'TELKOMSEL', name: 'Telkomsel' },
                { key: 'INDOSAT', name: 'Indosat Ooredoo' },
                { key: 'XL', name: 'XL Axiata' },
                { key: 'TRI', name: 'Hutchinson Tri' },
                { key: 'SMARTFREN', name: 'Smartfren' },
                { key: 'AXIS', name: 'AXIS' }
            ])
        })
    })

})
