const categoryLabels = {
  Electrician: 'इलेक्ट्रीशियन',
  Plumber: 'प्लंबर',
  Tutor: 'ट्यूटर',
  Mechanic: 'मैकेनिक',
  Tailor: 'दर्जी',
  'Tractor Service': 'ट्रैक्टर सेवा',
}

function ProviderCard({ provider, isHindi }) {
  const initials = provider.name
    .replace(' (Demo)', '')
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <article className="rounded-xl border border-green-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 font-semibold text-green-800">
          {initials}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{provider.name}</h3>
          <p className="mt-1 text-sm text-green-700">
            {isHindi ? categoryLabels[provider.category] : provider.category}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
        <p>{isHindi ? 'गाँव' : 'Village'}: {provider.village}</p>
        <p>{isHindi ? 'फ़ोन' : 'Phone'}: {provider.phone}</p>
        <p className={provider.available ? 'font-medium text-green-700' : 'font-medium text-gray-500'}>
          {isHindi ? 'उपलब्धता' : 'Availability'}:{' '}
          {provider.available
            ? (isHindi ? 'उपलब्ध' : 'Available')
            : (isHindi ? 'अभी उपलब्ध नहीं' : 'Not available')}
        </p>
      </div>
    </article>
  )
}

export default ProviderCard
