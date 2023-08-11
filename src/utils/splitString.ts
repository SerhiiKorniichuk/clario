export const splitString = (
  str: string,
  startIndex: number,
  endIndex: number | undefined,
) => {
  if (startIndex < 0 || startIndex >= str.length) {
    throw new Error('Invalid start index')
  }

  if (endIndex === undefined) {
    const before = str.slice(0, startIndex)
    const after = str.slice(startIndex)
    return [before, after]
  }

  if (endIndex > str.length || endIndex <= startIndex) {
    throw new Error('Invalid end index')
  }

  const before = str.slice(0, startIndex)
  const middle = str.slice(startIndex, endIndex)
  const after = str.slice(endIndex)

  return [before, middle, after]
}
