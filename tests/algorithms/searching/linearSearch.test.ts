import { describe, it, expect } from 'vitest'
import { linearSearch } from '../../../src/algorithms/searching/linearSearch'

describe('linearSearch', () => {
	describe('when the array is empty', () => {
		it('should return null', () => {
			expect(linearSearch([], 1)).toBeNull()
		})
	})

	describe('when the target is in the list', () => {
		it('should return the target with its index', () => {
			const vectors = [
				{
					array: [0, 1, 2, 3, 4, 5],
					target: 1,
					expected: { index: 1, element: 1 }
				},
				{
					array: [5, 4, 3, 2, 1, 0],
					target: 1,
					expected: { index: 4, element: 1 }
				}
			]
			vectors.forEach(({ array, target, expected }) => {
				expect(linearSearch(array, target)).toStrictEqual(expected)
			})
		})
	})

	describe('when the target is not in the list', () => {
		it('it should return null', () => {
			const vectors = [
				{
					array: [0, 1, 2, 3, 4, 5],
					target: 6,
					expected: null
				},
				{
					array: [5, 4, 3, 2, 1, 0],
					target: 6,
					expected: null
				}
			]
			vectors.forEach(({ array, target, expected }) => {
				expect(linearSearch(array, target)).toBeNull()
			})
		})
	})
})
