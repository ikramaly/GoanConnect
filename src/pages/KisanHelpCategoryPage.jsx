import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import KisanProviderCard from '../components/KisanProviderCard.jsx'
import kisanHelpCategories from '../data/kisanHelpCategories.js'
import { getKisanListingsByCategory } from '../services/kisanHelpService.js'

function normalizeText(value) {
  return value.trim().replace(/\s+/g, ' ').toLowerCase()
}

function KisanHelpCategoryPage({ language, selectedVillage }) {
  const { categorySlug } = useParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [appliedQuery, setAppliedQuery] = useState('')
  const isHindi = language === 'hi'
  const category = kisanHelpCategories.find((item) => item.slug === categorySlug)

  if (!category) {
    return (
      <main className="mx-auto max-w-5xl px-5 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          {isHindi ? 'किसान सहायता श्रेणी नहीं मिली' : 'Kisan help category not found'}
        </h1>
        <Link to="/" className="mt-5 inline-flex rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200">
          {isHindi ? 'होमपेज पर वापस जाएँ' : 'Back to Home'}
        </Link>
      </main>
    )
  }

  const categoryListings = getKisanListingsByCategory(category.slug)
  const normalizedQuery = normalizeText(appliedQuery)
  const filteredListings = categoryListings.filter((listing) => {
    const listingDetails = normalizeText(
      `${listing.providerName} ${listing.hindiProviderName} ${listing.village} ${listing.hindiVillage}`,
    )
    const matchesVillage = !selectedVillage || listing.village === selectedVillage
    return matchesVillage && listingDetails.includes(normalizedQuery)
  })

  function handleSearch(event) {
    event.preventDefault()
    setAppliedQuery(searchQuery)
  }

  function resetSearch() {
    setSearchQuery('')
    setAppliedQuery('')
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-green-700 transition hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
      >
        <span aria-hidden="true">←</span>
        {isHindi ? 'किसान सहायता श्रेणियाँ' : 'Kisan Sahayata Categories'}
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {isHindi ? category.hindiHeading : category.heading}
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-gray-600">
          {isHindi ? category.hindiDescription : category.description}
        </p>
        <p className="mt-2 text-sm text-amber-800">
          {isHindi
            ? 'ये उदाहरण सूचियाँ हैं। संपर्क विवरण और दरें वास्तविक प्रदाताओं या वर्तमान बाज़ार कीमतों की पुष्टि नहीं करते।'
            : 'These are example listings. Contact details and rates do not represent verified providers or current market prices.'}
        </p>
      </header>

      <form onSubmit={handleSearch} role="search" className="mt-7 flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="kisan-search" className="sr-only">
            {isHindi ? 'नाम या गाँव से खोजें' : 'Search by provider name or village'}
          </label>
          <input
            id="kisan-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={isHindi ? 'नाम या गाँव से खोजें' : 'Search by name or village'}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-green-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
          />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="min-h-12 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200">
            {isHindi ? 'खोजें' : 'Search'}
          </button>
          {(searchQuery || appliedQuery) && (
            <button type="button" onClick={resetSearch} className="min-h-12 rounded-xl border border-green-200 bg-white px-4 py-3 font-semibold text-green-800 transition hover:bg-green-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-100">
              {isHindi ? 'रीसेट' : 'Reset'}
            </button>
          )}
        </div>
      </form>

      <section className="mt-9" aria-label={isHindi ? 'किसान सहायता सूचियाँ' : 'Kisan help listings'}>
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredListings.map((listing) => (
              <KisanProviderCard key={listing.id} listing={listing} isHindi={isHindi} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-green-100 bg-white p-8 text-center shadow-sm">
            <p className="font-semibold text-gray-800">
              {isHindi
                ? 'इस खोज से कोई किसान सहायता सूची नहीं मिली।'
                : 'No Kisan help listings matched your search.'}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              {isHindi
                ? 'दूसरा नाम या गाँव खोजें, या खोज रीसेट करें।'
                : 'Try another name or village, or reset your search.'}
            </p>
            {(searchQuery || appliedQuery) && (
              <button type="button" onClick={resetSearch} className="mt-5 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200">
                {isHindi ? 'खोज रीसेट करें' : 'Reset Search'}
              </button>
            )}
          </div>
        )}
      </section>
    </main>
  )
}

export default KisanHelpCategoryPage
