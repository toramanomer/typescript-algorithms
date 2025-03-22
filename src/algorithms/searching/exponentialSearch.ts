export const exponentialSearch = (
	sortedArray: number[],
	target: number
): number => {
	const length = sortedArray.length
	if (length === 0) return -1

	let index = 1

	while (index < length && sortedArray[index] < target) index = index * 2

	let leftIndex = index / 2
	let rightIndex = index
	while (leftIndex <= rightIndex) {
		const midIndex = Math.floor((leftIndex + rightIndex) / 2)
		const midElement = sortedArray[midIndex]
		if (target === midElement) return midIndex
		if (target > midElement) leftIndex = midIndex + 1
		else rightIndex = midIndex - 1
	}

	return -1
}
