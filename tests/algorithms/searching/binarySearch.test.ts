import { describe, it, expect } from 'vitest'
import { binarySearch } from '../../../src/algorithms/searching/binarySearch'

describe('binarySearch', () => {
	describe('when array is empty', () => {
		it('should return null', () => {
			expect(binarySearch([], 1)).toBeNull()
		})
	})

	describe('when the array has even number of elements', () => {
		describe('and target is in the list', () => {
			const vectors = Array.from({ length: 10 }, (_, index) => ({
				array: Array.from({ length: 10 }, (_, index) => index + 1),
				target: index + 1,
				expected: { index, element: index + 1 }
			}))

			it('should return the target with its index', () => {
				vectors.forEach(({ array, target, expected }) => {
					expect(binarySearch(array, target)).toStrictEqual(expected)
				})
			})
		})

		describe('and target is not in the list', () => {
			const vectors = Array.from({ length: 10 }, (_, index) => ({
				array: Array.from({ length: 10 }, (_, index) => index + 1),
				target: 100
			}))

			it('should return null', () => {
				vectors.forEach(({ array, target }) => {
					expect(binarySearch(array, target)).toBeNull()
				})
			})
		})
	})

	describe('when the array has odd number of elements', () => {
		describe('and target is in the list', () => {
			const vectors = Array.from({ length: 11 }, (_, index) => ({
				array: Array.from({ length: 11 }, (_, index) => index + 1),
				target: index + 1,
				expected: { index, element: index + 1 }
			}))

			it('should return the target with its index', () => {
				vectors.forEach(({ array, target, expected }) => {
					expect(binarySearch(array, target)).toStrictEqual(expected)
				})
			})
		})

		describe('and target is not in the list', () => {
			const vectors = Array.from({ length: 11 }, (_, index) => ({
				array: Array.from({ length: 11 }, (_, index) => index + 1),
				target: 100
			}))

			it('should return null', () => {
				vectors.forEach(({ array, target }) => {
					expect(binarySearch(array, target)).toBeNull()
				})
			})
		})
	})
})
