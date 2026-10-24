import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { schemeCategories } from '../data/schemes.js'
import { getAllSchemes } from '../services/schemeService.js'

function normalizeText(value) {
  return value.trim().replace(/\s+/g, ' ').toLowerCase()
}

function SchemesPage({ language }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const isHindi = language === 'hi'
  const requestedCategory = searchParams.get('category') || ''
  const categoryIsValid = schemeCategories.some((category) => category.id === requestedCategory)
  const selectedCategory = categoryIsValid ? requestedCategory : ''
  const normalizedQuery = normalizeText(searchQuery)
  const filteredSchemes = getAllSchemes().filter((scheme) => {
    const matchesCategory = !selectedCategory || scheme.category === selectedCategory
    const searchableText = normalizeText([
      scheme.name.en,
      scheme.name.hi,
      scheme.shortDescription.en,
      scheme.shortDescription.hi,
      scheme.description.en,
      scheme.description.hi,
    ].join(' '))

    return matchesCategory && searchableText.includes(normalizedQuery)
  })
  
  const text = isHindi
    ? {
        heading: 'सरकारी योजनाएँ और योजना सहायता',
        introduction: 'श्रेणी के अनुसार प्रमुख सरकारी योजनाओं की सामान्य जानकारी खोजें।',
        disclaimer: 'यह जानकारी केवल मार्गदर्शन के लिए है। पात्रता और आवेदन विवरण संबंधित आधिकारिक सरकारी पोर्टल से सत्यापित करें।',
        searchLabel: 'योजना खोजें',
        searchPlaceholder: 'नाम या विवरण से खोजें',
        categoryLabel: 'श्रेणी चुनें',
        allCategories: 'सभी श्रेणियाँ',
        demo: 'मार्गदर्शन जानकारी',
        viewDetails: 'विवरण देखें',
        noResults: 'आपकी खोज से मेल खाने वाली कोई योजना नहीं मिली।',
        noResultsHelp: 'दूसरी खोज या श्रेणी चुनें, या सभी फ़िल्टर साफ़ करें।',
        reset: 'फ़िल्टर साफ़ करें',
        backHome: 'होम पेज पर वापस जाएँ',
      }
    : {
        heading: 'Government Schemes & Yojana',
        introduction: 'Explore general information about well-known government schemes by category.',
        disclaimer: 'This information is for guidance. Verify eligibility and application details through the relevant official government portal.',
        searchLabel: 'Search schemes',
        searchPlaceholder: 'Search by name or description',
        categoryLabel: 'Choose a category',
        allCategories: 'All Categories',
        demo: 'Guidance',
        viewDetails: 'View Details',
        noResults: 'No schemes matched your search.',
        noResultsHelp: 'Try another search or category, or clear all filters.',
        reset: 'Clear Filters',
        backHome: 'Back to Home',
      }

  function handleCategoryChange(event) {
    const categoryId = event.target.value
    setSearchParams(categoryId ? { category: categoryId } : {})
  }

  function resetFilters() {
    setSearchQuery('')
    setSearchParams({})
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-green-700 transition hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
      >
        <span aria-hidden="true">←</span>
        {text.backHome}
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {text.heading}
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-gray-600">{text.introduction}</p>
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          {text.disclaimer}
        </p>
      </header>

      <div className="mt-7 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(14rem,0.5fr)]">
        <div>
          <label htmlFor="scheme-search" className="mb-2 block text-sm font-semibold text-gray-700">
            {text.searchLabel}
          </label>
          <input
            id="scheme-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={text.searchPlaceholder}
            className="min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-green-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
          />
        </div>
        <div>
          <label htmlFor="scheme-category" className="mb-2 block text-sm font-semibold text-gray-700">
            {text.categoryLabel}
          </label>
          <select
            id="scheme-category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition hover:border-green-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
          >
            <option value="">{text.allCategories}</option>
            {schemeCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name[isHindi ? 'hi' : 'en']}
              </option>
            ))}
          </select>
        </div>
      </div>

      {(searchQuery || selectedCategory) && filteredSchemes.length > 0 && (
        <button
          type="button"
          onClick={resetFilters}
          className="mt-4 min-h-11 rounded-xl border border-green-200 bg-white px-5 py-2.5 font-semibold text-green-800 transition hover:bg-green-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-100"
        >
          {text.reset}
        </button>
      )}

      <section className="mt-8" aria-label={text.heading}>
        {filteredSchemes.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredSchemes.map((scheme) => {
              const category = schemeCategories.find((item) => item.id === scheme.category)

              return (
                <article key={scheme.id} className="flex h-full flex-col rounded-xl border border-green-100 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-800">
                      {category ? category.name[isHindi ? 'hi' : 'en'] : scheme.category}
                    </span>
                    {scheme.isDemo && (
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                        {text.demo}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-gray-900">
                    {scheme.name[isHindi ? 'hi' : 'en']}
                  </h2>
                  <p className="mt-2 flex-1 leading-6 text-gray-600">
                    {scheme.shortDescription[isHindi ? 'hi' : 'en']}
                  </p>
                  <Link
                    to={`/schemes/${scheme.id}`}
                    className="mt-5 inline-flex min-h-11 items-center justify-center self-start rounded-lg bg-green-700 px-4 py-2.5 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
                  >
                    {text.viewDetails}
                  </Link>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-green-100 bg-white p-8 text-center shadow-sm">
            <p className="font-semibold text-gray-800">{text.noResults}</p>
            <p className="mt-2 text-sm text-gray-600">{text.noResultsHelp}</p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 min-h-11 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
            >
              {text.reset}
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default SchemesPage
