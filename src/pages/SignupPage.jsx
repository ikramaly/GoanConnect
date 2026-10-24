import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthBrand from '../components/AuthBrand.jsx'

const inputClasses =
  'mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-green-300 focus:border-green-600 focus:ring-4 focus:ring-green-100'

function SignupPage({ language }) {
  const isHindi = language === 'hi'
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('info')

  const copy = isHindi
    ? {
        accountPrompt: 'पहले से खाता है?',
        signIn: 'साइन इन करें',
        heading: 'अपना खाता बनाएँ',
        subtitle: 'अपने गाँव की भरोसेमंद सेवाओं और सेवा प्रदाताओं से जुड़ें।',
        fullName: 'पूरा नाम',
        fullNamePlaceholder: 'अपना पूरा नाम लिखें',
        email: 'ईमेल पता',
        emailPlaceholder: 'आपका@ईमेल.com',
        mobile: 'मोबाइल नंबर',
        mobilePlaceholder: '10 अंकों का मोबाइल नंबर',
        password: 'पासवर्ड बनाएँ',
        passwordPlaceholder: 'कम से कम 8 अक्षर',
        confirmPassword: 'पासवर्ड की पुष्टि करें',
        confirmPlaceholder: 'पासवर्ड दोबारा लिखें',
        showPassword: 'पासवर्ड दिखाएँ',
        hidePassword: 'पासवर्ड छिपाएँ',
        show: 'दिखाएँ',
        hide: 'छिपाएँ',
        agree: 'मैं सहमत हूँ:',
        terms: 'नियम और शर्तें',
        privacy: 'गोपनीयता नीति',
        termsRequired: 'आगे बढ़ने के लिए नियम और शर्तें स्वीकार करें।',
        signUp: 'साइन अप',
        divider: 'या इनके साथ जारी रखें',
        google: 'Google से जारी रखें',
        facebook: 'Facebook से जारी रखें',
        bottomPrompt: 'पहले से खाता है?',
        bottomLink: 'साइन इन करें',
        required: 'कृपया सभी फ़ील्ड भरें।',
        invalidEmail: 'मान्य ईमेल पता लिखें।',
        invalidMobile: '10 अंकों का मान्य मोबाइल नंबर लिखें।',
        passwordLength: 'पासवर्ड कम से कम 8 अक्षरों का होना चाहिए।',
        mismatch: 'दोनों पासवर्ड एक जैसे होने चाहिए।',
        success: 'यह फ़्रंटएंड डेमो है। खाता नहीं बनाया गया।',
        termsDemo: 'नियम और गोपनीयता पेज इस डेमो में उपलब्ध नहीं हैं।',
        socialDemo: 'यह केवल डेमो बटन है। सोशल साइन अप उपलब्ध नहीं है।',
      }
    : {
        accountPrompt: 'Already have an account?',
        signIn: 'Sign In',
        heading: 'Create Your Account',
        subtitle: 'Join your community and discover trusted local services.',
        fullName: 'Full Name',
        fullNamePlaceholder: 'Enter your full name',
        email: 'Email Address',
        emailPlaceholder: 'you@example.com',
        mobile: 'Mobile Number',
        mobilePlaceholder: '10-digit mobile number',
        password: 'Create Password',
        passwordPlaceholder: 'At least 8 characters',
        confirmPassword: 'Confirm Password',
        confirmPlaceholder: 'Enter your password again',
        showPassword: 'Show password',
        hidePassword: 'Hide password',
        show: 'Show',
        hide: 'Hide',
        agree: 'I agree to the',
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy',
        termsRequired: 'Please accept the Terms & Conditions to continue.',
        signUp: 'Sign Up',
        divider: 'or continue with',
        google: 'Continue with Google',
        facebook: 'Continue with Facebook',
        bottomPrompt: 'Already have an account?',
        bottomLink: 'Sign in here',
        required: 'Please fill in all fields.',
        invalidEmail: 'Enter a valid email address.',
        invalidMobile: 'Enter a valid 10-digit mobile number.',
        passwordLength: 'Password must be at least 8 characters long.',
        mismatch: 'The passwords do not match.',
        success: 'Frontend demo only. No account was created.',
        termsDemo: 'The terms and privacy pages are not available in this demo.',
        socialDemo: 'Demo button only. Social sign-up is not available.',
      }

  function showDemoMessage(text) {
    setMessageType('info')
    setMessage(text)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fullName = formData.get('fullName').trim()
    const email = formData.get('email').trim()
    const mobile = formData.get('mobile').trim()
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (!fullName || !email || !mobile || !password || !confirmPassword) {
      setMessageType('error')
      setMessage(copy.required)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessageType('error')
      setMessage(copy.invalidEmail)
      return
    }

    if (mobile.replace(/\D/g, '').length !== 10) {
      setMessageType('error')
      setMessage(copy.invalidMobile)
      return
    }

    if (password.length < 8) {
      setMessageType('error')
      setMessage(copy.passwordLength)
      return
    }

    if (password !== confirmPassword) {
      setMessageType('error')
      setMessage(copy.mismatch)
      return
    }

    if (!agreedToTerms) {
      setMessageType('error')
      setMessage(copy.termsRequired)
      return
    }

    setMessageType('success')
    setMessage(copy.success)
  }

  function renderPasswordField({ id, name, label, placeholder, visible, toggle }) {
    const showLabel = visible ? copy.hidePassword : copy.showPassword

    return (
      <div>
        <label htmlFor={id} className="text-sm font-semibold text-gray-700">{label}</label>
        <div className="relative mt-2">
          <input
            id={id}
            name={name}
            type={visible ? 'text' : 'password'}
            required
            autoComplete="new-password"
            placeholder={placeholder}
            className={`${inputClasses} mt-0 pr-20`}
          />
          <button
            type="button"
            onClick={toggle}
            aria-label={showLabel}
            className="absolute inset-y-0 right-3 my-auto h-9 rounded-lg px-2 text-xs font-semibold text-green-700 transition hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
          >
            {visible ? copy.hide : copy.show}
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50 px-4 py-10 sm:py-14">
      <section className="mx-auto w-full max-w-lg rounded-2xl border border-green-100 bg-white p-6 shadow-lg shadow-green-900/5 sm:p-9">
        <div className="flex flex-col items-center gap-3 text-center">
          <AuthBrand isHindi={isHindi} />
          <p className="text-sm text-gray-600">
            {copy.accountPrompt}{' '}
            <Link to="/login" className="font-semibold text-green-700 hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">
              {copy.signIn}
            </Link>
          </p>
        </div>

        <div className="mt-7 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{copy.heading}</h1>
          <p className="mt-2 text-sm leading-6 text-gray-600">{copy.subtitle}</p>
        </div>

        <form noValidate onSubmit={handleSubmit} onChange={() => setMessage('')} className="mt-6 space-y-4">
          <div>
            <label htmlFor="signup-name" className="text-sm font-semibold text-gray-700">{copy.fullName}</label>
            <input id="signup-name" name="fullName" type="text" autoComplete="name" required placeholder={copy.fullNamePlaceholder} className={inputClasses} />
          </div>

          <div>
            <label htmlFor="signup-email" className="text-sm font-semibold text-gray-700">{copy.email}</label>
            <input id="signup-email" name="email" type="email" autoComplete="email" required placeholder={copy.emailPlaceholder} className={inputClasses} />
          </div>

          <div>
            <label htmlFor="signup-mobile" className="text-sm font-semibold text-gray-700">{copy.mobile}</label>
            <input id="signup-mobile" name="mobile" type="tel" inputMode="numeric" autoComplete="tel" required placeholder={copy.mobilePlaceholder} className={inputClasses} />
          </div>

          {renderPasswordField({
            id: 'signup-password',
            name: 'password',
            label: copy.password,
            placeholder: copy.passwordPlaceholder,
            visible: showPassword,
            toggle: () => setShowPassword(!showPassword),
          })}

          {renderPasswordField({
            id: 'signup-confirm-password',
            name: 'confirmPassword',
            label: copy.confirmPassword,
            placeholder: copy.confirmPlaceholder,
            visible: showConfirmPassword,
            toggle: () => setShowConfirmPassword(!showConfirmPassword),
          })}

          <div className="flex items-start gap-2 text-sm leading-6 text-gray-600">
            <input
              id="signup-terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(event) => setAgreedToTerms(event.target.checked)}
              required
              className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 accent-green-700 focus:ring-green-600"
            />
            <p>
              <label htmlFor="signup-terms" className="cursor-pointer">{copy.agree}</label>{' '}
              <button type="button" onClick={() => showDemoMessage(copy.termsDemo)} className="font-semibold text-green-700 underline decoration-green-300 underline-offset-2 hover:text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">
                {copy.terms}
              </button>{' '}
              {isHindi ? 'और' : 'and'}{' '}
              <button type="button" onClick={() => showDemoMessage(copy.termsDemo)} className="font-semibold text-green-700 underline decoration-green-300 underline-offset-2 hover:text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">
                {copy.privacy}
              </button>
            </p>
          </div>

          {message && (
            <p role="status" aria-live="polite" className={`rounded-lg px-3 py-2 text-sm ${messageType === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-800'}`}>
              {message}
            </p>
          )}

          <button type="submit" className="w-full rounded-xl bg-green-700 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200 active:translate-y-px">
            {copy.signUp}
          </button>
        </form>

        <div className="my-6 flex items-center gap-4 text-xs text-gray-400">
          <span className="h-px flex-1 bg-gray-200" />
          <span>{copy.divider}</span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button type="button" onClick={() => showDemoMessage(copy.socialDemo)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 text-sm font-semibold text-gray-700 transition hover:border-green-300 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">
            <span aria-hidden="true" className="font-bold text-blue-600">G</span>{copy.google}
          </button>
          <button type="button" onClick={() => showDemoMessage(copy.socialDemo)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 text-sm font-semibold text-gray-700 transition hover:border-green-700 hover:bg-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">
            <span aria-hidden="true" className="font-bold text-blue-800">f</span>{copy.facebook}
          </button>
        </div>

        <p className="mt-7 text-center text-sm text-gray-600">
          {copy.bottomPrompt}{' '}
          <Link to="/login" className="font-semibold text-green-700 hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">
            {copy.bottomLink}
          </Link>
        </p>
      </section>
    </main>
  )
}

export default SignupPage
