import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import kisanHelpCategories from '../data/kisanHelpCategories.js'

const icon = (
  <svg aria-hidden="true" viewBox="0 0 48 48" className="h-10 w-10 shrink-0">
    <path d="M23 42V21" fill="none" stroke="#80cb5c" strokeLinecap="round" strokeWidth="2.5" />
    <path d="M22 25C9 25 6 17 7 8c11-1 19 3 20 14-1 2-2 3-5 3Z" fill="#80cb5c" />
    <path d="M25 22C22 10 29 4 41 4c1 11-3 18-14 20l-2-2Z" fill="#52b95d" />
    <path d="M22 36C12 39 7 33 7 25c9-2 16 1 19 8l-4 3Z" fill="#a1d96a" />
    <path d="M25 34c1-10 7-15 17-15 0 10-4 17-16 18l-1-3Z" fill="#299b47" />
  </svg>
)

const footerLinkClass = 'block rounded-sm py-1 text-sm text-gray-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300'
const footerHeadingClass = 'mb-4 text-sm font-bold uppercase tracking-[0.12em] text-white'

function Footer({ language }) {
  const isHindi = language === 'hi'
  const year = new Date().getFullYear()
  const quickLinks = [
    { to: '/', en: 'Home', hi: 'होम' },
    { to: '/about', en: 'About Us', hi: 'हमारे बारे में' },
    { to: '/contact', en: 'Contact Us', hi: 'संपर्क करें' },
    { to: '/notice-board', en: 'Village Notice Board', hi: 'गाँव का सूचना बोर्ड' },
    { to: '/schemes', en: 'Government Schemes & Yojana', hi: 'सरकारी योजनाएँ' },
  ]
  const importantLinks = [
    { to: '/login', en: 'Sign In', hi: 'साइन इन' },
    { to: '/signup', en: 'Sign Up', hi: 'साइन अप' },
  ]

  return (
    <footer className="mt-12 border-t border-green-900 bg-gray-950 text-gray-200">
      <div className="mx-auto grid max-w-[1680px] grid-cols-1 gap-x-10 gap-y-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-5 lg:px-12 lg:py-14">
        <section className="lg:col-span-2" aria-labelledby="footer-brand-heading">
          <Link to="/" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300">
            {icon}
            <span id="footer-brand-heading" className="text-xl font-extrabold tracking-tight text-white">Gaon<span className="text-green-400">Connect</span></span>
          </Link>
          <p className="mt-4 text-sm font-semibold text-green-300">
            {isHindi ? 'स्थानीय सेवाओं से गाँवों को जोड़ना।' : 'Connecting Villages with Local Services.'}
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-gray-300">
            {isHindi
              ? 'GaonConnect आपको स्थानीय गाँव की सेवाएँ और सामुदायिक जानकारी खोजने में मदद करता है।'
              : 'GaonConnect helps people explore local village services and community information.'}
          </p>
          <span className="mt-4 inline-flex rounded-full border border-green-800 bg-green-950/60 px-3 py-1 text-xs font-medium text-green-200">
            {isHindi ? 'गाँव-केंद्रित सेवा निर्देशिका' : 'Village-focused service directory'}
          </span>
        </section>

        <nav aria-label={isHindi ? 'त्वरित लिंक' : 'Quick links'}>
          <h2 className={footerHeadingClass}>{isHindi ? 'त्वरित लिंक' : 'Quick Links'}</h2>
          <ul className="space-y-1">
            {quickLinks.map((link) => <li key={link.to}><Link className={footerLinkClass} to={link.to}>{isHindi ? link.hi : link.en}</Link></li>)}
          </ul>
        </nav>

        <nav aria-label={isHindi ? 'सेवाएँ देखें' : 'Explore services'}>
          <h2 className={footerHeadingClass}>{isHindi ? 'सेवाएँ देखें' : 'Explore Services'}</h2>
          <ul className="space-y-1">
            <li><Link className={footerLinkClass} to="/services">{isHindi ? 'सभी सेवाएँ' : 'All Services'}</Link></li>
            <li><Link className={footerLinkClass} to="/kisan-sahayata/tractor-rental">{isHindi ? 'किसान सहायता' : 'Kisan Sahayata'}</Link></li>
            {kisanHelpCategories.map((category) => (
              <li key={category.slug}>
                <Link className={footerLinkClass} to={`/kisan-sahayata/${category.slug}`}>
                  {isHindi ? category.hindiName : category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <h2 className={footerHeadingClass}>{isHindi ? 'ज़रूरी लिंक' : 'Important Links'}</h2>
          <ul className="space-y-1">
            {importantLinks.map((link) => <li key={link.to}><Link className={footerLinkClass} to={link.to}>{isHindi ? link.hi : link.en}</Link></li>)}
            {[
              ['Privacy Policy', 'गोपनीयता नीति'],
              ['Terms & Conditions', 'नियम और शर्तें'],
              ['Help / Support', 'सहायता'],
            ].map(([en, hi]) => (
              <li key={en} className="py-1 text-sm text-gray-400">
                {isHindi ? hi : en}
              </li>
            ))}
          </ul>
        </section>

        <section className="md:col-span-2 lg:col-span-5" aria-labelledby="footer-contact-heading">
          <div className="grid gap-8 border-t border-gray-800 pt-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 id="footer-contact-heading" className={footerHeadingClass}>{isHindi ? 'संपर्क जानकारी' : 'Contact Information'}</h2>
              <p className="max-w-md text-sm leading-6 text-gray-300">
                {isHindi ? 'अभी कोई आधिकारिक संपर्क विवरण उपलब्ध नहीं है। संदेश लिखने के लिए संपर्क पृष्ठ पर जाएँ।' : 'No official contact details are available here. Visit the contact page to draft a message.'}
                {' '}<Link to="/contact" className="font-semibold text-green-300 hover:text-white">{isHindi ? 'संपर्क पृष्ठ' : 'Contact page'}</Link>
              </p>
            </div>
            <div>
              <h2 className={footerHeadingClass}>{isHindi ? 'सोशल मीडिया' : 'Social Media'}</h2>
              <ul className="flex flex-wrap gap-2">
                {[
                  { name: 'Instagram', href: 'https://www.instagram.com/_ikram_jk/', Icon: FaInstagram },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ikram-ali-9b8961273/?isSelfProfile=true', Icon: FaLinkedin },
                  { name: 'Facebook', href: 'https://www.facebook.com/', Icon: FaFacebook },
                  { name: 'GitHub', href: 'https://github.com/ikramaly', Icon: FaGithub },
                ].map(({ name, href, Icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      title={name}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 text-lg text-gray-300 transition-colors hover:border-green-500 hover:bg-green-950 hover:text-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-2 px-5 py-5 text-xs text-gray-400 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© {year} GaonConnect. {isHindi ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}</p>
          <p className="text-green-300">{isHindi ? 'गाँव के समुदायों के लिए बनाया गया' : 'Built for village communities'}</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>{isHindi ? 'गोपनीयता नीति' : 'Privacy Policy'} · {isHindi ? '' : ''}</span>
            <span>{isHindi ? 'नियम और शर्तें' : 'Terms & Conditions'} · {isHindi ? '' : ''}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
