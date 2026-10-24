import { Link } from 'react-router-dom'
import { schemeCategories } from '../data/schemes.js'

function SchemeCategoryGrid({ language }) {
  const isHindi = language === 'hi'

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {schemeCategories.map((category) => (
        <Link
          key={category.id}
          to={`/schemes?category=${category.id}`}
          className="group flex min-h-20 items-center gap-3 rounded-xl border border-green-100 bg-green-50/40 p-4 transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-white hover:shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-100"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-xl" aria-hidden="true">
            {category.icon}
          </span>
          <span className="font-semibold text-gray-800 transition group-hover:text-green-800">
            {category.name[isHindi ? 'hi' : 'en']}
          </span>
          <span className="ml-auto text-lg text-green-700" aria-hidden="true">→</span>
        </Link>
      ))}
    </div>
  )
}

export default SchemeCategoryGrid
