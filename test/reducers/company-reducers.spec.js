import expect from 'expect'
import company from '../../app/reducers/company'
import { NEW_NAME, CLEAR_NAME, PREVIOUS_NAME } from '../../app/actions'

describe('Company reducers', function(){
    const initState = {name: '', oldName: ''}
    const testState = {name: 'Mr Burns', oldName: 'Krusty'}

    it('should handle initial state', function(){
        expect(
            company(undefined, {})
        ).toEqual(initState)
    })

    it('should handle a new name', function(){
        expect(
            company(initState, {type: NEW_NAME, payload: 'Homer Simpson'})
        ).toEqual({name: 'Homer Simpson', oldName: ''})
    })

    it('should clear the current name', function(){
        expect(
            company(testState, {type: CLEAR_NAME})
        ).toEqual({name: '', oldName: 'Mr Burns'})
    })

    it('should go back to the previous name', function(){
        expect(
            company(testState, {type: PREVIOUS_NAME})
        ).toEqual({name: 'Krusty', oldName: 'Mr Burns'})
    })

})

