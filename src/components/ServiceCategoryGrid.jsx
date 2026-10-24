import { Link } from 'react-router-dom'
import categories from '../data/categories.js'

function ServiceCategoryGrid({ language }) {
  const isHindi = language === 'hi'

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.slug}
          to={`/services/${category.slug}`}
          className="group flex min-h-24 items-center gap-4 rounded-xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-100"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-2xl transition group-hover:bg-green-100" aria-hidden="true">
            {category.icon}
          </span>
          <span className="font-semibold text-gray-800 transition group-hover:text-green-800">
            {isHindi ? category.hindiName : category.name}
          </span>
          <span className="ml-auto text-lg text-green-700 transition group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      ))}
    </div>
  )
}

export default ServiceCategoryGrid
