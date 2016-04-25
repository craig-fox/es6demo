import expect from 'expect'
import * as actions from '../../app/actions'

describe('Company actions', function(){
   it("setNewName should create a NEW_NAME action with a payload", function(){
       expect(actions.setNewName('Uber Ltd')).toEqual({
           type: 'NEW_NAME',
           payload: 'Uber Ltd'
       })
   })

   it("clearName should create a CLEAR_NAME function", function(){
       expect(actions.clearName()).toEqual({
           type: 'CLEAR_NAME'
       })
   })

    it("previousName should create a PREVIOUS_NAME function", function(){
        expect(actions.previousName()).toEqual({
            type: 'PREVIOUS_NAME'
        })
    })

})