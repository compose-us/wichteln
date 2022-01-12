import { randomizeParticipants } from "./shuffle-participants";
import { demoParticipants } from '../demo-participants'

describe('validate the array that randomizeParticipants func returned', () => {
    //returned array does not contain empty string and undefined
    it('does NOT contain falsey values', () => { 
        expect(randomizeParticipants(demoParticipants)).toEqual(expect.not.arrayContaining([{firstName: '', lastName: ''}]))
        expect(randomizeParticipants(demoParticipants)).toEqual(expect.not.arrayContaining([{firstName: undefined, lastName: undefined}]))
    })
})