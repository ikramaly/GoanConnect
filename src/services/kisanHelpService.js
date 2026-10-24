import kisanListings from '../data/kisanListings.js'

// Keep the UI independent from the mock data source for a future API change.
export function getKisanListingsByCategory(categorySlug) {
  return kisanListings.filter((listing) => listing.category === categorySlug)
}

export function getKisanListingById(categorySlug, providerId) {
  return kisanListings.find(
    (listing) => listing.category === categorySlug && listing.id === providerId,
  )
}
