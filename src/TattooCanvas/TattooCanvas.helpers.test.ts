// TODO: Skipped because jest couldn't find the alias
import * as helpers from './TattooCanvas.helpers';

describe('getNewVersion', () => {
	test('should return an incremented version', () => {
		const version = 1;
		const length = 3;
		const result = helpers.getNewVersion(version, length);
		const expectedResult = 2;

		expect(result).toEqual(expectedResult);
	});

	test('should return 1', () => {
		const version = 3;
		const length = 3;
		const result = helpers.getNewVersion(version, length);
		const expectedResult = 1;

		expect(result).toEqual(expectedResult);
	});
});
