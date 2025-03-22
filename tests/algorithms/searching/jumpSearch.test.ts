import { describe, it, expect } from 'vitest'
import { jumpSearch } from '../../../src/algorithms/searching/jumpSearch'

describe('jumpSearch', () => {
	describe('when array is empty', () => {
		it('should return null', () => {
			expect(jumpSearch([], 1)).toBeNull()
		})
	})

	describe('when using default jump size', () => {
		describe('and the target is in the list', () => {
			const vectors = Array.from(
				{ length: 10 },
				(_, index) => index + 1
			).map((int, index) => ({
				array: Array.from({ length: 10 }, (_, index) => index + 1),
				target: int,
				expected: { index, element: int }
			}))

			it('should retur the target with its index', () => {
				vectors.forEach(({ array, target, expected }) => {
					expect(jumpSearch(array, target)).toStrictEqual(expected)
				})
			})
		})
		describe('and the target is not in the list', () => {
			const vectors = Array.from(
				{ length: 10 },
				(_, index) => index + 1
			).map(() => ({
				array: Array.from({ length: 10 }, (_, index) => index + 1),
				target: 100
			}))

			it('should retur the target with its index', () => {
				vectors.forEach(({ array, target }) => {
					expect(jumpSearch(array, target)).toBeNull()
				})
			})
		})
	})
})
