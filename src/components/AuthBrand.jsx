import { Link } from 'react-router-dom'

function AuthBrand({ isHindi }) {
  return (
    <Link
      to="/"
      aria-label={isHindi ? 'गाँवकनेक्ट होमपेज' : 'GaonConnect homepage'}
      className="mx-auto inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
    >
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-10 w-10 shrink-0">
        <path d="M23 42V21" fill="none" stroke="#238b45" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M22 25C9 25 6 17 7 8c11-1 19 3 20 14-1 2-2 3-5 3Z" fill="#62bd55" />
        <path d="M25 22C22 10 29 4 41 4c1 11-3 18-14 20l-2-2Z" fill="#38a84c" />
        <path d="M22 36C12 39 7 33 7 25c9-2 16 1 19 8l-4 3Z" fill="#80cb5c" />
        <path d="M25 34c1-10 7-15 17-15 0 10-4 17-16 18l-1-3Z" fill="#299b47" />
        <path d="m14 12 8 8m8-8-6 9m-9 8 8 3m10 1 6-7" fill="none" stroke="#eff9e9" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
      <span className="whitespace-nowrap text-[22px] font-extrabold leading-none tracking-tight text-gray-950">
        Gaon<span className="text-green-700">Connect</span>
      </span>
    </Link>
  )
}

export default AuthBrand
