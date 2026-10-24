import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import kisanHelpCategories from '../data/kisanHelpCategories.js'
import { getKisanListingById } from '../services/kisanHelpService.js'

function getText(value, isHindi) {
  if (value === null || value === undefined) return ''
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  return isHindi ? value.hi || value.en || '' : value.en || value.hi || ''
}

function Detail({ label, children }) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 break-words text-gray-900">{children}</dd>
    </div>
  )
}

function KisanProviderDetailsPage({ language }) {
  const { categorySlug, providerId } = useParams()
  const [showDemoMessage, setShowDemoMessage] = useState(false)
  const isHindi = language === 'hi'
  const category = kisanHelpCategories.find((item) => item.slug === categorySlug)
  const listing = getKisanListingById(categorySlug, providerId)

  const text = isHindi
    ? {
        invalidTitle: 'सूची नहीं मिली', invalidDescription: 'यह श्रेणी या प्रदाता सूची उपलब्ध नहीं है।',
        backToList: 'सूचियों पर वापस जाएँ', backToCategories: 'किसान सहायता श्रेणियों पर वापस जाएँ',
        demo: 'डेमो डेटा', village: 'गाँव', availability: 'उपलब्धता', available: 'उपलब्ध',
        unavailable: 'अभी उपलब्ध नहीं', brand: 'ट्रैक्टर ब्रांड', model: 'मॉडल', horsepower: 'हॉर्सपावर',
        rate: 'नमूना सेवा दर (बाज़ार कीमत नहीं)', driver: 'चालक उपलब्ध', operator: 'ऑपरेटर उपलब्ध',
        yes: 'हाँ', no: 'नहीं', equipment: 'उपकरण विवरण', machine: 'कटाई मशीन', crops: 'उपयुक्त फसलें',
        products: 'नमूना उत्पाद', productCategory: 'उत्पाद श्रेणी', price: 'उदाहरण कीमत (बाज़ार कीमत नहीं)',
        topics: 'मार्गदर्शन विषय', description: 'सेवा विवरण', consultation: 'परामर्श तरीका',
        contact: 'काल्पनिक डेमो संपर्क जानकारी', phone: 'डेमो फ़ोन', email: 'डेमो ईमेल',
        contactWarning: 'ये केवल नमूना संपर्क विवरण हैं। कॉल या संदेश किसी वास्तविक प्रदाता तक नहीं पहुँचेंगे।',
        contactButton: 'प्रदाता से संपर्क करें',
        demoMessage: 'यह केवल फ्रंटएंड डेमो है। कोई वास्तविक कॉल, बुकिंग या संपर्क अनुरोध नहीं किया गया।',
        note: 'यह सूची और इसकी सभी दरें/कीमतें केवल उदाहरण डेमो डेटा हैं।',
      }
    : {
        invalidTitle: 'Listing not found', invalidDescription: 'This category or provider listing is not available.',
        backToList: 'Back to listings', backToCategories: 'Back to Kisan Sahayata categories',
        demo: 'Example listing', village: 'Village', availability: 'Availability', available: 'Available',
        unavailable: 'Not available', brand: 'Tractor brand', model: 'Model', horsepower: 'Horsepower',
        rate: 'Illustrative service rate (not a market price)', driver: 'Driver available', operator: 'Operator available',
        yes: 'Yes', no: 'No', equipment: 'Equipment details', machine: 'Harvesting machine', crops: 'Supported crops',
        products: 'Products', productCategory: 'Product category', price: 'Illustrative price (not a market price)',
        topics: 'Guidance topics', description: 'Service description', consultation: 'Consultation method',
        contact: 'Example contact details', phone: 'Phone', email: 'Email',
        contactWarning: 'These fictional contact details do not reach a real provider.',
        contactButton: 'Contact Provider',
        demoMessage: 'This is a frontend demo. No real call, booking, or contact request was made.',
        note: 'This is an example listing. Rates and contact details do not represent verified providers or market prices.',
      }

  if (!category || !listing) {
    return (
      <main className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">{text.invalidTitle}</h1>
        <p className="mt-3 text-gray-600">{text.invalidDescription}</p>
        <Link
          to={category ? `/kisan-sahayata/${category.slug}` : '/'}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
        >
          {category ? text.backToList : text.backToCategories}
        </Link>
      </main>
    )
  }

  const details = listing.details
  const providerName = isHindi ? listing.hindiProviderName : listing.providerName
  const village = isHindi ? listing.hindiVillage : listing.village
  const contact = listing.contactDetails || {}

  return (
    <main className="mx-auto max-w-4xl px-5 py-12 md:py-16">
      <Link
        to={`/kisan-sahayata/${category.slug}`}
        className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-green-700 transition hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
      >
        <span aria-hidden="true">←</span>
        {text.backToList}
      </Link>

      <article className="mt-6 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-semibold text-green-700">{isHindi ? category.hindiName : category.name}</p>
            <h1 className="mt-2 break-words text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{providerName}</h1>
          </div>
          <span className="rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-800">{text.demo}</span>
        </div>

        <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">{text.note}</p>

        <dl className="mt-7 grid gap-5 border-t border-gray-100 pt-6 sm:grid-cols-2">
          <Detail label={text.village}>{village}</Detail>
          <Detail label={text.availability}>{listing.available ? text.available : text.unavailable}</Detail>

          {listing.category === 'tractor-rental' && (
            <>
              <Detail label={text.brand}>{details.brand}</Detail>
              <Detail label={text.model}>{details.model}</Detail>
              <Detail label={text.horsepower}>{details.horsepower} HP</Detail>
              <Detail label={text.rate}>{getText(details.rate, isHindi)}</Detail>
              <Detail label={text.driver}>{details.driverAvailable ? text.yes : text.no}</Detail>
              <Detail label={text.equipment}>{getText(details.equipment, isHindi)}</Detail>
            </>
          )}

          {listing.category === 'harvesting' && (
            <>
              <Detail label={text.machine}>{getText(details.machineType, isHindi)}</Detail>
              <Detail label={text.crops}>{getText(details.crops, isHindi)}</Detail>
              <Detail label={text.rate}>{getText(details.rate, isHindi)}</Detail>
              <Detail label={text.operator}>{details.operatorAvailable ? text.yes : text.no}</Detail>
            </>
          )}

          {listing.category === 'seeds-fertilizer' && (
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">{text.products}</dt>
              <dd className="mt-2 grid gap-3 sm:grid-cols-2">
                {details.products.map((product) => (
                  <div key={product.name} className="rounded-lg border border-green-100 bg-green-50/50 p-4">
                    <p className="font-semibold text-gray-900">{isHindi ? product.hindiName : product.name}</p>
                    <p className="mt-1 text-sm text-gray-600">{text.productCategory}: {getText(product.productCategory, isHindi)}</p>
                    <p className="mt-1 text-sm text-gray-800">{text.price}: {getText(product.price, isHindi)}</p>
                  </div>
                ))}
              </dd>
            </div>
          )}

          {listing.category === 'kisan-guidance' && (
            <>
              <Detail label={text.topics}>{getText(details.topics, isHindi)}</Detail>
              <Detail label={text.crops}>{getText(details.crops, isHindi)}</Detail>
              <Detail label={text.description}>{getText(details.description, isHindi)}</Detail>
              <Detail label={text.consultation}>{getText(details.consultation, isHindi)}</Detail>
            </>
          )}

          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">{text.contact}</dt>
            <dd className="mt-2 space-y-1 text-gray-900">
              {contact.phone && <p>{text.phone}: {contact.phone}</p>}
              {contact.email && <p>{text.email}: {contact.email}</p>}
            </dd>
            <p className="mt-2 text-sm text-amber-800">{text.contactWarning}</p>
          </div>
        </dl>

        <button
          type="button"
          onClick={() => setShowDemoMessage(true)}
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
        >
          {text.contactButton}
        </button>
        {showDemoMessage && (
          <p role="status" className="mt-3 rounded-lg bg-green-50 p-3 text-sm text-green-900">
            {text.demoMessage}
          </p>
        )}
      </article>
    </main>
  )
}

export default KisanProviderDetailsPage
