import { useState } from 'react'
import providers from './data/providers.js'
import ProviderCard from './components/ProviderCard.jsx'

function App() {
  const [language, setLanguage] = useState('en')

  const isHindi = language === 'hi'

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="flex items-center justify-between border-b bg-white px-5 py-4 md:px-12">
        <h1 className="text-xl font-bold text-green-700">
          GaonConnect
        </h1>

        <button
          onClick={() =>
            setLanguage(isHindi ? 'en' : 'hi')
          }
          className="rounded-lg border px-4 py-2 text-sm font-medium"
        >
          {isHindi ? 'English' : 'हिंदी'}
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <p className="mb-3 font-medium text-green-700">
          {isHindi
            ? 'आपके गाँव की सेवाएँ, एक जगह'
            : 'Your Village Services, All in One Place'}
        </p>

        <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
          {isHindi
            ? 'अपने गाँव में सही सेवा आसानी से खोजें।'
            : 'Find the Right Local Service Easily.'}
        </h2>

        <p className="mt-5 max-w-xl leading-7 text-gray-600">
          {isHindi
            ? 'इलेक्ट्रीशियन, प्लंबर, ट्यूटर और अन्य स्थानीय सेवा प्रदाताओं को खोजें।'
            : 'Discover electricians, plumbers, tutors and other local service providers.'}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder={
              isHindi
                ? 'सेवा या व्यक्ति का नाम खोजें'
                : 'Search service or provider'
            }
            className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-green-600"
          />

          <button className="rounded-lg bg-green-700 px-6 py-3 font-medium text-white hover:bg-green-800">
            {isHindi ? 'खोजें' : 'Search'}
          </button>
        </div>
      </main>

      <section className="mx-auto max-w-5xl px-5 pb-16" aria-labelledby="categories-heading">
        <div className="mb-6">
          <h2 id="categories-heading" className="text-2xl font-bold text-gray-800 md:text-3xl">
            {isHindi ? 'सेवा श्रेणियाँ' : 'Browse Service Categories'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isHindi
              ? 'अपने गाँव में ज़रूरी सेवा आसानी से खोजें।'
              : 'Find the help you need from trusted local services.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: '⚡', en: 'Electrician', hi: 'इलेक्ट्रीशियन' },
            { icon: '🔧', en: 'Plumber', hi: 'प्लंबर' },
            { icon: '📚', en: 'Tutor', hi: 'ट्यूटर' },
            { icon: '🛠️', en: 'Mechanic', hi: 'मैकेनिक' },
            { icon: '🧵', en: 'Tailor', hi: 'दर्जी' },
            { icon: '🚜', en: 'Tractor Service', hi: 'ट्रैक्टर सेवा' },
          ].map((category) => (
            <article
              key={category.en}
              className="flex items-center gap-4 rounded-xl border border-green-100 bg-white p-5 shadow-sm transition hover:border-green-300 hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-2xl" aria-hidden="true">
                {category.icon}
              </span>
              <h3 className="font-semibold text-gray-800">
                {isHindi ? category.hi : category.en}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16" aria-labelledby="providers-heading">
        <div className="mb-6">
          <h2 id="providers-heading" className="text-2xl font-bold text-gray-800 md:text-3xl">
            {isHindi ? 'स्थानीय सेवा प्रदाता' : 'Local Service Providers'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isHindi ? 'आपके आसपास के सेवा प्रदाता।' : 'Meet service providers in your area.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              isHindi={isHindi}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
