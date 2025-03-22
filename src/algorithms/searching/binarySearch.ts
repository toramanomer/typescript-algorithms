export const binarySearch = <T>(
	array: T[],
	target: T
): { index: number; element: T } | null => {
	const search = (leftIndex: number, rightIndex: number) => {
		if (leftIndex > rightIndex) return null

		const midIndex = Math.floor((leftIndex + rightIndex) / 2)
		const midElement = array[midIndex]

		if (target === midElement)
			return { index: midIndex, element: midElement }
		if (target > midElement) return search(midIndex + 1, rightIndex)
		return search(leftIndex, midIndex - 1)
	}
	return search(0, array.length - 1)
}
