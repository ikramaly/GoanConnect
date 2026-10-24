import { useState } from 'react'

const categoryLabels = {
  Electrician: 'इलेक्ट्रीशियन',
  Plumber: 'प्लंबर',
  Tutor: 'ट्यूटर',
  Mechanic: 'मैकेनिक',
  Tailor: 'दर्जी',
  'Tractor Service': 'ट्रैक्टर सेवा',
}

function ProviderCard({ provider, isHindi }) {
  const [showDemoMessage, setShowDemoMessage] = useState(false)
  const initials = provider.name
    .replace(' (Demo)', '')
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
  const displayName = provider.name.replace(
    ' (Demo)',
    isHindi ? ' (डेमो)' : ' (Demo)',
  )
  const displayVillage = provider.village.replace(
    /^Demo /,
    isHindi ? 'डेमो ' : 'Demo ',
  )

  return (
    <article className="rounded-xl border border-green-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 font-semibold text-green-800">
          {initials}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{displayName}</h3>
          <p className="mt-1 text-sm text-green-700">
            {isHindi ? categoryLabels[provider.category] : provider.category}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
        <p>{isHindi ? 'गाँव' : 'Village'}: {displayVillage}</p>
        <p>
          {isHindi ? 'डेमो फ़ोन' : 'phone'}: {provider.phone}
        </p>
        <p>{isHindi ? 'सेवा विवरण' : 'Service details'}: {isHindi ? provider.hindiServiceDescription : provider.serviceDescription}</p>
        <p>{isHindi ? 'नमूना दर (बाज़ार कीमत नहीं)' : 'Sample rate (not a market price)'}: {isHindi ? provider.rate.hi : provider.rate.en}</p>
        <p className={provider.available ? 'font-medium text-green-700' : 'font-medium text-gray-500'}>
          {isHindi ? 'उपलब्धता' : 'Availability'}:{' '}
          {provider.available
            ? (isHindi ? 'उपलब्ध' : 'Available')
            : (isHindi ? 'अभी उपलब्ध नहीं' : 'Not available')}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowDemoMessage(true)}
        className="mt-4 inline-flex min-h-10 items-center rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
      >
        {isHindi ? 'संपर्क करें' : 'Contact'}
      </button>
      {showDemoMessage && (
        <p role="status" className="mt-3 text-sm text-green-800">
          {isHindi
            ? 'यह डेमो है। कॉल या संपर्क अनुरोध नहीं किया गया।'
            : 'This is a demo. No call or contact request was made.'}
        </p>
      )}
    </article>
  )
}

export default ProviderCard

