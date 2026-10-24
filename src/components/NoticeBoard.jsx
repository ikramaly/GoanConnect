import { useState } from 'react'
import notices from '../data/notices.js'
import villages from '../data/villages.js'

const categories = [
  { id: 'electricity', en: 'Electricity', hi: 'बिजली' },
  { id: 'water-supply', en: 'Water Supply', hi: 'जल आपूर्ति' },
  { id: 'community-events', en: 'Community Events', hi: 'सामुदायिक कार्यक्रम' },
  { id: 'general-announcements', en: 'General Announcements', hi: 'सामान्य घोषणाएँ' },
]

function formatNoticeDate(date, isHindi) {
  const locale = isHindi ? 'hi-IN' : 'en-IN'
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

function NoticeBoard({ language }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedVillage, setSelectedVillage] = useState('all')
  const isHindi = language === 'hi'

  const filteredNotices = notices.filter((notice) => {
    const matchesCategory = selectedCategory === 'all' || notice.category === selectedCategory
    const matchesVillage = selectedVillage === 'all' || notice.village === selectedVillage
    return matchesCategory && matchesVillage
  })

  const labels = isHindi
    ? {
        heading: 'गाँव का सूचना पट्ट',
        description: 'अपने गाँव की सामुदायिक सूचनाएँ और घोषणाएँ देखें।',
        demo: 'ये उदाहरण सूचनाएँ हैं, वास्तविक सार्वजनिक घोषणाएँ नहीं।',
        category: 'श्रेणी के अनुसार छाँटें',
        village: 'गाँव के अनुसार छाँटें',
        allCategories: 'सभी श्रेणियाँ',
        allVillages: 'सभी गाँव',
        reset: 'फ़िल्टर रीसेट करें',
        date: 'तारीख',
        empty: 'चुने गए फ़िल्टर के लिए कोई सूचना नहीं मिली।',
        emptyHelp: 'दूसरी श्रेणी या गाँव चुनें, या फ़िल्टर रीसेट करें।',
      }
    : {
        heading: 'Village Notice Board',
        description: 'Browse community updates and announcements from local villages.',
        demo: 'Example community notices only; these are not current public announcements.',
        category: 'Filter by category',
        village: 'Filter by village',
        allCategories: 'All Categories',
        allVillages: 'All Villages',
        reset: 'Reset Filters',
        date: 'Date',
        empty: 'No notices match the selected filters.',
        emptyHelp: 'Choose another category or village, or reset the filters.',
      }

  function getCategoryName(categoryId) {
    const category = categories.find((item) => item.id === categoryId)
    return category ? (isHindi ? category.hi : category.en) : categoryId
  }

  return (
    <section
      className="mx-auto max-w-6xl px-5 pb-20"
      aria-labelledby="village-notice-board-heading"
    >
      <div className="mb-6">
        <h2 id="village-notice-board-heading" className="text-2xl font-bold text-gray-900 md:text-3xl">
          {labels.heading}
        </h2>
        <p className="mt-2 max-w-2xl text-gray-600">{labels.description}</p>
        <p className="mt-2 text-sm font-medium text-amber-800">{labels.demo}</p>
      </div>

      <div className="mb-6 grid grid-cols-1 items-end gap-4 md:grid-cols-3">
        <div>
          <label htmlFor="notice-category-filter" className="mb-2 block text-sm font-medium text-gray-700">
            {labels.category}
          </label>
          <select
            id="notice-category-filter"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition hover:border-green-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
          >
            <option value="all">{labels.allCategories}</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {isHindi ? category.hi : category.en}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="notice-village-filter" className="mb-2 block text-sm font-medium text-gray-700">
            {labels.village}
          </label>
          <select
            id="notice-village-filter"
            value={selectedVillage}
            onChange={(event) => setSelectedVillage(event.target.value)}
            className="min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition hover:border-green-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
          >
            <option value="all">{labels.allVillages}</option>
            {villages.map((village) => (
              <option key={village.en} value={village.en}>
                {isHindi ? village.hi : village.en}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => {
            setSelectedCategory('all')
            setSelectedVillage('all')
          }}
          className="min-h-12 rounded-xl border border-green-200 bg-white px-5 py-3 font-semibold text-green-800 transition hover:bg-green-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-100"
        >
          {labels.reset}
        </button>
      </div>

      {filteredNotices.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotices.map((notice) => (
            <article key={notice.id} className="rounded-xl border border-green-100 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                  {getCategoryName(notice.category)}
                </span>
                <time dateTime={notice.date} className="text-sm text-gray-500">
                  {labels.date}: {formatNoticeDate(notice.date, isHindi)}
                </time>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {isHindi ? notice.title.hi : notice.title.en}
              </h3>
              <p className="mt-2 leading-6 text-gray-600">
                {isHindi ? notice.description.hi : notice.description.en}
              </p>
              <p className="mt-4 border-t border-gray-100 pt-3 text-sm font-medium text-gray-700">
                {isHindi ? 'गाँव' : 'Village'}: {isHindi ? notice.hindiVillage : notice.village}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-green-100 bg-white p-8 text-center shadow-sm" role="status">
          <p className="font-semibold text-gray-800">{labels.empty}</p>
          <p className="mt-2 text-sm text-gray-600">{labels.emptyHelp}</p>
        </div>
      )}
    </section>
  )
}

export default NoticeBoard
