import { Link } from 'react-router-dom'

function getText(value, isHindi) {
  if (value === null || value === undefined) return ''
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  return isHindi ? value.hi || value.en || '' : value.en || value.hi || ''
}

function KisanProviderCard({ listing, isHindi }) {
  const details = listing.details
  const providerName = isHindi ? listing.hindiProviderName : listing.providerName
  const village = isHindi ? listing.hindiVillage : listing.village
  const labels = isHindi
    ? {
        village: 'गाँव', contact: 'संपर्क',
        availability: 'उपलब्धता', available: 'उपलब्ध', unavailable: 'अभी उपलब्ध नहीं',
        driver: 'चालक उपलब्ध', operator: 'ऑपरेटर उपलब्ध', yes: 'हाँ', no: 'नहीं',
        horsepower: 'हॉर्सपावर', rate: 'दर', equipment: 'उपकरण',
        machine: 'मशीन', crops: 'फसलें', products: 'नमूना उत्पाद',
        topics: 'मार्गदर्शन विषय', description: 'विवरण', consultation: 'परामर्श तरीका',
        category: 'श्रेणी', price: 'कीमत', viewDetails: 'विवरण देखें',
      }
    : {
        village: 'Village', contact: 'contact',
        availability: 'Availability', available: 'Available', unavailable: 'Not available',
        driver: 'Driver available', operator: 'Operator available', yes: 'Yes', no: 'No',
        horsepower: 'Horsepower', rate: 'rate', equipment: 'Equipment',
        machine: 'Machine', crops: 'Crops', products: 'products',
        topics: 'Guidance topics', description: 'Description', consultation: 'Consultation method',
        category: 'Category', price: 'Illustrative price', viewDetails: 'View Details',
      }

  return (
    <article className="rounded-xl border border-green-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-2xl" aria-hidden="true">🌾</span>
          <h2 className="font-semibold leading-6 text-gray-900">{providerName}</h2>
        </div>
      </div>

      <div className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
        <p>{labels.village}: {village}</p>
        <p className={listing.available ? 'font-medium text-green-700' : 'font-medium text-gray-500'}>
          {labels.availability}: {listing.available ? labels.available : labels.unavailable}
        </p>
        {listing.category === 'tractor-rental' && (
          <>
            <p>{details.brand}, {details.model} · {details.horsepower} {labels.horsepower}</p>
            <p>{labels.rate}: {getText(details.rate, isHindi)}</p>
            <p>{labels.driver}: {details.driverAvailable ? labels.yes : labels.no}</p>
            <p>{labels.equipment}: {getText(details.equipment, isHindi)}</p>
          </>
        )}
        {listing.category === 'harvesting' && (
          <>
            <p>{labels.machine}: {getText(details.machineType, isHindi)}</p>
            <p>{labels.crops}: {getText(details.crops, isHindi)}</p>
            <p>{labels.rate}: {getText(details.rate, isHindi)}</p>
            <p>{labels.operator}: {details.operatorAvailable ? labels.yes : labels.no}</p>
          </>
        )}
        {listing.category === 'seeds-fertilizer' && (
          <div>
            <p className="font-medium text-gray-700">{labels.products}</p>
            <ul className="mt-1 list-inside list-disc space-y-1">
              {details.products.map((product) => (
                <li key={product.name}>
                  {isHindi ? product.hindiName : product.name} ({getText(product.productCategory, isHindi)}): {getText(product.price, isHindi)}
                </li>
              ))}
            </ul>
          </div>
        )}
        {listing.category === 'kisan-guidance' && (
          <>
            <p>{labels.topics}: {getText(details.topics, isHindi)}</p>
            <p>{labels.crops}: {getText(details.crops, isHindi)}</p>
            <p>{labels.description}: {getText(details.description, isHindi)}</p>
            <p>{labels.consultation}: {getText(details.consultation, isHindi)}</p>
          </>
        )}
        <div className="border-t border-gray-100 pt-2">
          <p className="font-medium text-gray-700">{labels.contact}</p>
          <p>{listing.contactDetails.phone} · {listing.contactDetails.email}</p>
        </div>
      </div>

      <Link
        to={`/kisan-sahayata/${listing.category}/${listing.id}`}
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg border border-green-700 px-4 py-2 text-sm font-semibold text-green-800 transition hover:bg-green-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-100"
      >
        {labels.viewDetails}
      </Link>
    </article>
  )
}

export default KisanProviderCard
