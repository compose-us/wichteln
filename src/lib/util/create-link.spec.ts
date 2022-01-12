import { createLink } from './create-link'
import { demoParticipants } from '../demo-participants'

//testing environment? 
//should we check type of returned value if we are using TS? 
describe('create link that show assignee', () => {
    test('check that function does not return undefined', () => {
        expect(createLink('', {
            participant: demoParticipants[0],
            assignment: demoParticipants[1]
        }, 'buffer')).toBeDefined()
    })
    test('check that it put exprcted params in the link', () => { 
        expect(createLink('', {
            participant: demoParticipants[0],
            assignment: demoParticipants[1]
        }, 'buffer' )).toMatch(/(\bLuke\+Skywalker\b)|(\bsecret=TGlhIFNreXdhbGtlcg\b(?:.)*)/g)
    })
})