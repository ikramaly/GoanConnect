import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProviderCard from '../components/ProviderCard.jsx'
import categories from '../data/categories.js'
import providers from '../data/providers.js'

function normalizeText(value) {
  return value.trim().replace(/\s+/g, ' ').toLowerCase()
}

function ServiceCategoryPage({ language, selectedVillage }) {
  const { categorySlug } = useParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [appliedQuery, setAppliedQuery] = useState('')
  const isHindi = language === 'hi'
  const category = categories.find((item) => item.slug === categorySlug)

  if (!category) {
    return (
      <main className="mx-auto max-w-5xl px-5 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          {isHindi ? 'सेवा श्रेणी नहीं मिली' : 'Service category not found'}
        </h1>
        <Link to="/services" className="mt-5 inline-flex rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200">
          {isHindi ? 'सभी सेवाओं पर वापस जाएँ' : 'Back to All Services'}
        </Link>
      </main>
    )
  }

  const categoryProviders = providers.filter(
    (provider) => provider.category === category.name,
  )
  const normalizedQuery = normalizeText(appliedQuery)
  const filteredProviders = categoryProviders.filter((provider) => {
    const providerDetails = normalizeText(`${provider.name} ${provider.village}`)
    const matchesVillage = !selectedVillage || provider.village === selectedVillage
    return matchesVillage && providerDetails.includes(normalizedQuery)
  })
  const categoryName = isHindi ? category.hindiName : category.name
  const pageHeading = isHindi ? category.hindiHeading : category.heading

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
        to="/services"
        className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-green-700 transition hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
      >
        <span aria-hidden="true">←</span>
        {isHindi ? 'सभी सेवाएँ' : 'All Services'}
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {pageHeading}
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-gray-600">
          {isHindi
            ? `अपने क्षेत्र में ${categoryName} सेवा प्रदाता देखें और ज़रूरत की मदद पाएँ।`
            : `Browse local ${category.name.toLowerCase()} providers and find help near you.`}
        </p>
      </header>

      <form
        onSubmit={handleSearch}
        className="mt-7 flex flex-col gap-3 sm:flex-row"
        role="search"
      >
        <div className="flex-1">
          <label htmlFor="service-search" className="sr-only">
            {isHindi ? 'नाम या गाँव से खोजें' : 'Search by provider name or village'}
          </label>
          <input
            id="service-search"
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

      <section className="mt-9" aria-label={isHindi ? 'सेवा प्रदाता' : 'Service providers'}>
        {filteredProviders.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} isHindi={isHindi} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-green-100 bg-white p-8 text-center shadow-sm">
            <p className="font-semibold text-gray-800">
              {isHindi
                ? 'इस खोज से कोई सेवा प्रदाता नहीं मिला।'
                : 'No providers matched your search.'}
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

export default ServiceCategoryPage
