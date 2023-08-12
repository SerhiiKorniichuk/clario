let idCounter = 0

export const generateUniqId = (prefix = 'id') => {
  idCounter++
  return `${prefix}-${idCounter}`
}
