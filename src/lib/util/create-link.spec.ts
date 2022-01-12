import { createLink } from './create-link'
import { demoParticipants } from '../demo-participants'

describe('create link that show assignee', () => {
    const encoder = (params: string) : string => Buffer.from((params)).toString("base64")
    it('check that function does not return undefined', () => {
        expect(createLink('', {
            participant: demoParticipants[0],
            assignment: demoParticipants[1]
        }, encoder)).toBeDefined()
    })
    it('check that it put exprcted params in the link', () => { 
        expect(createLink('', {
            participant: demoParticipants[0],
            assignment: demoParticipants[1]
        }, encoder )).toMatch(/(\bLuke\+Skywalker\b)&(\bsecret=TGlhIFNreXdhbGtlcg\b(?:.)*)/g)
    })
})