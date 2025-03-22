export const jumpSearch = <T>(
	sortedArray: T[],
	target: T,
	jumpSize?: number
): { index: number; element: T } | null => {
	const length = sortedArray.length

	if (typeof jumpSize === 'undefined')
		jumpSize = Math.floor(Math.sqrt(length))
	else {
		if (typeof jumpSize !== 'number')
			throw new TypeError('jumpSize must be a number')
		else if (!Number.isInteger(jumpSize))
			throw new Error('jumpSize must be an integer')
		else if (jumpSize <= 0)
			throw new RangeError('jumpSize must be a positive integer')
		else if (jumpSize >= length)
			throw new RangeError(
				'jumpSize must be smaller than the array length'
			)
	}

	for (let index = 0; index < length; ) {
		const element = sortedArray[index]

		if (target === element) return { index, element }
		if (target > element) {
			if (index + jumpSize > length - 1) {
				for (let j = index + 1; j < length; j++) {
					const element = sortedArray[j]
					if (target === sortedArray[j]) return { index: j, element }
				}
				return null
			}
			index += jumpSize
			continue
		}
		if (target < element) {
			for (let j = index; j > index - jumpSize; j--) {
				const element = sortedArray[j]
				if (target === sortedArray[j]) return { index: j, element }
			}
			return null
		}
	}

	return null
}
