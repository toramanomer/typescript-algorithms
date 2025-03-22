import { describe, it, expect } from 'vitest'
import { interpolationSearch } from '../../../src/algorithms/searching/interpolationSearch'

describe('interpolationSearch', () => {
	describe('when array is empty', () => {
		it('should return null', () => {
			expect(interpolationSearch([], 1)).toBe(-1)
		})
	})

	describe('when array is not empty', () => {
		it('should return the correct index', () => {
			const vectors = Array.from(
				{ length: 10 },
				(_, index) => index + 1
			).map((positiveInt, index) => ({
				array: Array.from({ length: 10 }, (_, index) => index + 1),
				target: positiveInt,
				expected: index
			}))
			vectors.forEach(({ array, target, expected }) => {
				expect(interpolationSearch(array, target)).toBe(expected)
			})
		})
	})
})
