export const linearSearch = <T>(
	array: T[],
	target: T
): { index: number; element: T } | null => {
	const length = array.length
	for (let index = 0; index < length; index++) {
		const element = array[index]
		if (element === target) return { index, element }
	}

	return null
}
