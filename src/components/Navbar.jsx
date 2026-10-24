import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ language, onToggleLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHindi = language === 'hi'

  const navItems = [
    { to: '/', label: isHindi ? 'होम' : 'Home', end: true },
    { to: '/services', label: isHindi ? 'सेवाएँ' : 'Services' },
    { to: '/about', label: isHindi ? 'हमारे बारे में' : 'About Us' },
    { to: '/contact', label: isHindi ? 'संपर्क' : 'Contact Us' },
  ]

  const linkClasses = ({ isActive }) =>
    `group relative inline-flex w-full items-center justify-between gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors duration-200 hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 after:pointer-events-none after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-green-600 after:transition-transform after:duration-200 hover:after:scale-x-100 min-[960px]:w-auto min-[960px]:justify-center min-[960px]:rounded-none min-[960px]:px-1.5 min-[960px]:py-5 min-[960px]:text-[13px] min-[960px]:hover:bg-transparent min-[960px]:after:bottom-3 min-[960px]:after:left-1.5 min-[960px]:after:right-1.5 xl:px-2 xl:py-6 xl:text-sm xl:after:bottom-4 xl:after:left-2 xl:after:right-2 ${
      isActive
        ? 'bg-green-50 text-green-700 after:scale-x-100 min-[960px]:bg-transparent'
        : 'text-gray-700'
    }`

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="relative z-30 mx-1 mt-1 rounded-xl border border-green-50 bg-white shadow-sm sm:mx-2">
      <div className="mx-auto flex min-h-[76px] max-w-[1680px] items-center justify-between gap-3 px-4 sm:px-8 min-[960px]:gap-2 min-[960px]:px-4 xl:gap-4 xl:px-12">
        <NavLink
          to="/"
          onClick={closeMenu}
          aria-label="GaonConnect home"
          className="inline-flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
        >
          <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9 shrink-0 xl:h-10 xl:w-10">
            <path d="M23 42V21" fill="none" stroke="#238b45" strokeLinecap="round" strokeWidth="2.5" />
            <path d="M22 25C9 25 6 17 7 8c11-1 19 3 20 14-1 2-2 3-5 3Z" fill="#62bd55" />
            <path d="M25 22C22 10 29 4 41 4c1 11-3 18-14 20l-2-2Z" fill="#38a84c" />
            <path d="M22 36C12 39 7 33 7 25c9-2 16 1 19 8l-4 3Z" fill="#80cb5c" />
            <path d="M25 34c1-10 7-15 17-15 0 10-4 17-16 18l-1-3Z" fill="#299b47" />
            <path d="m14 12 8 8m8-8-6 9m-9 8 8 3m10 1 6-7" fill="none" stroke="#eff9e9" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
          <span className="whitespace-nowrap text-xl font-extrabold leading-none tracking-tight text-gray-950 xl:text-[22px]">
            Gaon<span className="text-green-700">Connect</span>
          </span>
        </NavLink>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? (isHindi ? 'मेन्यू बंद करें' : 'Close menu') : (isHindi ? 'मेन्यू खोलें' : 'Open menu')}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green-200 text-green-800 transition-colors hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 min-[960px]:hidden"
        >
          {isMenuOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav
          id="main-navigation"
          aria-label={isHindi ? 'मुख्य नेविगेशन' : 'Main navigation'}
          className={`${isMenuOpen ? 'grid' : 'hidden'} absolute left-0 right-0 top-full z-20 grid-cols-1 gap-1 rounded-b-xl border-t border-green-100 bg-white px-4 py-3 shadow-lg min-[960px]:static min-[960px]:grid min-[960px]:flex-1 min-[960px]:grid-cols-[minmax(0,1fr)_auto] min-[960px]:items-center min-[960px]:gap-2 min-[960px]:rounded-none min-[960px]:border-0 min-[960px]:bg-transparent min-[960px]:px-0 min-[960px]:py-0 min-[960px]:shadow-none xl:gap-6`}
        >
          <div className="flex flex-col gap-1 min-[960px]:flex-row min-[960px]:items-center min-[960px]:justify-center min-[960px]:gap-1 xl:gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={closeMenu}
                className={linkClasses}
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          <div className="mt-3 flex flex-col items-start gap-2 border-t border-green-100 pt-3 min-[960px]:mt-0 min-[960px]:flex-row min-[960px]:items-center min-[960px]:gap-1 min-[960px]:border-0 min-[960px]:pt-0 xl:gap-3">
            <button
              type="button"
              onClick={onToggleLanguage}
              className="inline-flex h-10 w-fit shrink-0 items-center justify-center gap-2 rounded-lg px-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-green-800 hover:text-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" d="M3.5 12h17M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3Z" />
              </svg>
              <span>{isHindi ? 'English' : 'हिंदी'}</span>
            </button>

            <NavLink
              to="/login"
              onClick={closeMenu}
              className="inline-flex h-10 w-fit shrink-0 items-center justify-center rounded-xl border border-green-600 px-4 text-sm font-semibold  transition-colors hover:bg-green-800  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 xl:px-7"
            >
              {isHindi ? 'साइन इन' : 'Sign In'}
            </NavLink>

            <NavLink
              to="/signup"
              onClick={closeMenu}
              className="inline-flex h-10 w-fit shrink-0 items-center justify-center rounded-xl border border-green-600 px-4 text-sm font-semibold  transition-colors hover:bg-green-800  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 xl:px-7"
            >
              {isHindi ? 'साइन अप' : 'Sign Up'}
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
