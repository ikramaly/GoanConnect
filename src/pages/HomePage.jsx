import { useRef } from 'react'
import { Link } from 'react-router-dom'
import ServiceCategoryGrid from '../components/ServiceCategoryGrid.jsx'
import KisanHelpCategoryGrid from '../components/KisanHelpCategoryGrid.jsx'
import SchemeCategoryGrid from '../components/SchemeCategoryGrid.jsx'

function HomePage({ language, villages, selectedVillage, onVillageChange, showHero = true }) {
  const isHindi = language === 'hi'
  const servicesContentRef = useRef(null)

  function scrollToServicesContent() {
    servicesContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>
      {!showHero && (
        <header className="mx-auto max-w-6xl px-5 pt-12">
          <p className="font-semibold text-green-700">
            {isHindi ? 'स्थानीय सेवाएँ' : 'Local services'}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            {isHindi ? 'सभी सेवाएँ' : 'All Services'}
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-gray-600">
            {isHindi
              ? 'अपनी ज़रूरत की श्रेणी चुनें और अपने क्षेत्र के सेवा प्रदाताओं को देखें।'
              : 'Choose a category to find service providers in your area.'}
          </p>
        </header>
      )}
      {showHero && (
      <section className="home-hero mx-auto max-w-6xl px-5 pb-14 pt-14 sm:pb-16 sm:pt-20 md:pt-24">
        <p className="mb-3 font-semibold text-green-700">
          {isHindi
            ? 'आपके गाँव की सेवाएँ, एक जगह'
            : 'Your Village Services, All in One Place'}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          {isHindi
            ? 'अपने गाँव में सही सेवा आसानी से खोजें।'
            : <>Find the Right Local Service <span className="hero-highlight">Easily.</span></>}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
          {isHindi
            ? 'इलेक्ट्रीशियन, प्लंबर, ट्यूटर और अन्य स्थानीय सेवा प्रदाताओं से जुड़ें।'
            : 'Connect with electricians, plumbers, tutors and other local service providers in your area.'}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="home-village" className="mb-2 block text-sm font-semibold text-gray-700">
              {isHindi ? 'गाँव चुनें' : 'Select Village'}
            </label>
            <select
              id="home-village"
              value={selectedVillage}
              onChange={(event) => onVillageChange(event.target.value)}
              className="min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition hover:border-green-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
            >
              <option value="">{isHindi ? 'सभी गाँव' : 'All Villages'}</option>
              {villages.map((village) => (
                <option key={village.en} value={village.en}>{isHindi ? village.hi : village.en}</option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={scrollToServicesContent}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
          >
            {isHindi ? 'सेवाएँ देखें' : 'Explore Services'}
          </button>
        </div>
      </section>
      )}

      <div id="home-services-content" ref={servicesContentRef} className="scroll-mt-6">
      <section className="mx-auto max-w-6xl px-5 pb-20" aria-labelledby="home-categories-heading">
        <div className="mb-6">
          <h2 id="home-categories-heading" className="text-2xl font-bold text-gray-900 md:text-3xl">
            {isHindi ? 'सेवा श्रेणियाँ' : 'Browse Service Categories'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isHindi
              ? 'अपनी ज़रूरत की सेवा चुनें और स्थानीय प्रदाताओं को देखें।'
              : 'Choose a service to browse providers in your area.'}
          </p>
        </div>

        <ServiceCategoryGrid language={language} />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20" aria-labelledby="kisan-help-heading">
        <div className="mb-6">
          <p className="mb-2 font-semibold text-green-700">
            {isHindi ? 'किसानों के लिए' : 'For farmers'}
          </p>
          <h2 id="kisan-help-heading" className="text-2xl font-bold text-gray-900 md:text-3xl">
            {isHindi ? 'किसान सहायता' : 'Kisan Sahayata'}
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            {isHindi
              ? 'खेती की ज़रूरतों के लिए स्थानीय सेवाएँ और जानकारी देखें।'
              : 'Explore local services and information for common farming needs.'}
          </p>
        </div>

        <KisanHelpCategoryGrid language={language} />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20" aria-labelledby="village-notice-preview-heading">
        <div className="flex flex-col gap-5 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl" aria-hidden="true">
              📢
            </span>
            <div>
              <h2 id="village-notice-preview-heading" className="text-2xl font-bold text-gray-900 md:text-3xl">
                {isHindi ? 'गाँव का सूचना पट्ट' : 'Village Notice Board'}
              </h2>
              <p className="mt-2 max-w-2xl text-gray-600">
                {isHindi
                  ? 'अपने गाँव की सामुदायिक सूचनाएँ और घोषणाएँ देखें।'
                  : 'Stay up to date with community notices and village announcements.'}
              </p>
              <p className="mt-2 text-sm text-amber-800">
                {isHindi ? 'उदाहरण सूचनाएँ; अपने गाँव की वास्तविक जानकारी स्थानीय स्रोत से जाँचें।' : 'Example notices only; check local sources for current community information.'}
              </p>
            </div>
          </div>
          <Link
            to="/notice-board"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
          >
            {isHindi ? 'सूचनाएँ देखें' : 'View Notices'}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20" aria-labelledby="government-schemes-heading">
        <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="government-schemes-heading" className="text-2xl font-bold text-gray-900 md:text-3xl">
                {isHindi ? 'सरकारी योजनाएँ और योजना सहायता' : 'Government Schemes & Yojana'}
              </h2>
              <p className="mt-2 max-w-2xl text-gray-600">
                {isHindi
                  ? 'प्रमुख सरकारी योजनाओं की सामान्य जानकारी श्रेणी के अनुसार देखें।'
                  : 'Explore general information about government schemes by category.'}
              </p>
            </div>
            <Link
              to="/schemes"
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-green-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
            >
              {isHindi ? 'सभी योजनाएँ देखें' : 'View All Schemes'}
            </Link>
          </div>
          <SchemeCategoryGrid language={language} />
        </div>
      </section>
      </div>
    </main>
  )
}

export default HomePage
