import { formSerializer } from './form-serializer';

describe('check that formSerializer function return correct values', () => {
	const inputValue = {
		elements: [
			{
				nodeName: 'INPUT',
				type: 'text',
				value: 'test name',
				name: 'firstName'
			},
			{
				nodeName: 'INPUT',
				type: 'text',
				value: 'test surname',
				name: 'lastName'
			}
		]
	};
	it('returns an object with expected key value pairs', () => {
		expect(formSerializer(inputValue)).toEqual(
			expect.objectContaining({
				firstName: expect.stringContaining(inputValue.elements[0].value),
				lastName: expect.stringContaining(inputValue.elements[1].value)
			})
		);
	});
});
