export const interpolationSearch = (
	sortedArray: number[],
	target: number
): number => {
	let lowerIndex = 0
	let upperIndex = sortedArray.length - 1

	while (
		lowerIndex <= upperIndex &&
		target >= sortedArray[lowerIndex] &&
		target <= sortedArray[upperIndex]
	) {
		const deltaValue = target - sortedArray[lowerIndex]
		const range = sortedArray[upperIndex] - sortedArray[lowerIndex]
		const deltaIndex = upperIndex - lowerIndex
		// prettier-ignore
		const pos = Math.floor(
			lowerIndex +
			(	(deltaValue / range)
					*
				deltaIndex
			)
		)
		if (sortedArray[pos] === target) return pos
		if (sortedArray[pos] > target) upperIndex = pos - 1
		else lowerIndex = pos + 1
	}

	return -1
}
