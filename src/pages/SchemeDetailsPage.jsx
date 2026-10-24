import { Link, useParams } from 'react-router-dom'
import { schemeCategories } from '../data/schemes.js'
import { getSchemeById } from '../services/schemeService.js'

function SchemeDetailsPage({ language }) {
  const { schemeId } = useParams()
  const isHindi = language === 'hi'
  const scheme = getSchemeById(schemeId)

  const text = isHindi
    ? {
        heading: 'योजना की जानकारी',
        notFound: 'यह योजना नहीं मिली।',
        back: 'सभी योजनाओं पर वापस जाएँ',
        disclaimer: 'यह जानकारी केवल मार्गदर्शन के लिए है। वर्तमान नियमों और आवेदन विवरण की पुष्टि संबंधित आधिकारिक सरकारी स्रोत से करें।',
        demo: 'मार्गदर्शन जानकारी',
        eligibility: 'पात्रता संबंधी मार्गदर्शन',
        benefits: 'योजना संबंधी जानकारी',
      }
    : {
        heading: 'Scheme Information',
        notFound: 'This scheme could not be found.',
        back: 'Back to All Schemes',
        disclaimer: 'This information is for guidance only. Confirm current rules and application details with the relevant official government source.',
        demo: 'Guidance',
        eligibility: 'Eligibility guidance',
        benefits: 'Scheme information',
      }

  if (!scheme) {
    return (
      <main className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">{text.notFound}</h1>
        <Link
          to="/schemes"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
        >
          {text.back}
        </Link>
      </main>
    )
  }

  const category = schemeCategories.find((item) => item.id === scheme.category)

  return (
    <main className="mx-auto max-w-4xl px-5 py-12 md:py-16">
      <Link
        to="/schemes"
        className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-green-700 transition hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
      >
        <span aria-hidden="true">←</span>
        {text.back}
      </Link>

      <article className="mt-6 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
        <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          {text.disclaimer}
        </p>
        <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-semibold text-green-700">
              {category ? category.name[isHindi ? 'hi' : 'en'] : scheme.category}
            </p>
            <h1 className="mt-2 break-words text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {scheme.name[isHindi ? 'hi' : 'en']}
            </h1>
          </div> 
          {scheme.isDemo && (
            <span className="rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-800">
              {text.demo}
            </span>
          )}
        </div>
        <p className="mt-5 leading-7 text-gray-700">
          {scheme.description[isHindi ? 'hi' : 'en']}
        </p>

        {(scheme.eligibility || scheme.benefits) && (
          <dl className="mt-7 grid gap-5 border-t border-gray-100 pt-6 sm:grid-cols-2">
            {scheme.eligibility && (
              <div>
                <dt className="text-sm font-semibold text-gray-500">{text.eligibility}</dt>
                <dd className="mt-1 leading-6 text-gray-800">{scheme.eligibility[isHindi ? 'hi' : 'en']}</dd>
              </div>
            )}
            {scheme.benefits && (
              <div>
                <dt className="text-sm font-semibold text-gray-500">{text.benefits}</dt>
                <dd className="mt-1 leading-6 text-gray-800">{scheme.benefits[isHindi ? 'hi' : 'en']}</dd>
              </div>
            )}
          </dl>
        )}
      </article>
    </main>
  )
}

export default SchemeDetailsPage
