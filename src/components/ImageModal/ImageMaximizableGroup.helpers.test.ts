import * as helpers from './ImageMaximizableGroup.helpers';

const length = 3;

describe('getLeftIndex', () => {
	test('getLeftIndex - decrement', () => {
		const index = 2;
		const result = helpers.getLeftIndex(index, length);
		const expectedResult = 1;

		expect(result).toEqual(expectedResult);
	});
	test('getLeftIndex - at the beginning of the array', () => {
		const index = 0;
		const result = helpers.getLeftIndex(index, length);
		const expectedResult = 2;

		expect(result).toEqual(expectedResult);
	});
});

describe('getRightIndex', () => {
	test('getRightIndex - decrement', () => {
		const index = 0;
		const result = helpers.getRightIndex(index, length);
		const expectedResult = 1;

		expect(result).toEqual(expectedResult);
	});
	test('getRightIndex - at the end of the array', () => {
		const index = 2;
		const result = helpers.getRightIndex(index, length);
		const expectedResult = 0;

		expect(result).toEqual(expectedResult);
	});
});
