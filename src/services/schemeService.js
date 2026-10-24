import schemes from '../data/schemes.js'

// Keep pages separate from the mock data source for an easier future API change.
export function getAllSchemes() {
  return schemes
}

export function getSchemeById(schemeId) {
  return schemes.find((scheme) => scheme.id === schemeId)
}

export function getSchemesByCategory(categoryId) {
  return schemes.filter((scheme) => scheme.category === categoryId)
}
