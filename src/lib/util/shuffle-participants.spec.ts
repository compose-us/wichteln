import { randomizeParticipants } from "./shuffle-participants";
import { demoParticipants } from '../demo-participants'

describe('validate the array that randomizeParticipants func returned', () => {
    //returned array does not contain empty string and undefined
    test('should NOT contain falsey values', () => { //need to add test for each combination
        expect(randomizeParticipants(demoParticipants)).toEqual(expect.not.arrayContaining([{firstName: '', lastName: ''}]))
        expect(randomizeParticipants(demoParticipants)).toEqual(expect.not.arrayContaining([{firstName: undefined, lastName: undefined}]))
    })
})