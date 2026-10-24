import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthBrand from '../components/AuthBrand.jsx'

const inputClasses =
  'mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-green-300 focus:border-green-600 focus:ring-4 focus:ring-green-100'

function LoginPage({ language }) {
  const isHindi = language === 'hi'
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('info')

  const copy = isHindi
    ? {
        accountPrompt: 'खाता नहीं है?',
        signup: 'साइन अप करें',
        heading: 'वापसी पर स्वागत है',
        subtitle: 'अपने आसपास की भरोसेमंद स्थानीय सेवाएँ खोजने के लिए साइन इन करें।',
        identifier: 'ईमेल पता या मोबाइल नंबर',
        identifierPlaceholder: 'अपना ईमेल या 10 अंकों का मोबाइल नंबर लिखें',
        password: 'पासवर्ड',
        passwordPlaceholder: 'अपना पासवर्ड लिखें',
        showPassword: 'पासवर्ड दिखाएँ',
        hidePassword: 'पासवर्ड छिपाएँ',
        remember: 'मुझे याद रखें',
        forgot: 'पासवर्ड भूल गए?',
        signIn: 'साइन इन',
        divider: 'या इनके साथ जारी रखें',
        google: 'Google से जारी रखें',
        facebook: 'Facebook से जारी रखें',
        bottomPrompt: 'नए हैं?',
        bottomLink: 'अपना खाता बनाएँ',
        required: 'ईमेल/मोबाइल और पासवर्ड भरें।',
        invalidEmail: 'मान्य ईमेल पता या 10 अंकों का मोबाइल नंबर लिखें।',
        success: 'यह फ़्रंटएंड डेमो है। साइन इन नहीं हुआ।',
        forgotDemo: 'यह डेमो पासवर्ड रीसेट ईमेल नहीं भेजता।',
        socialDemo: 'यह केवल डेमो बटन है। सोशल साइन इन उपलब्ध नहीं है।',
      }
    : {
        accountPrompt: "Don't have an account?",
        signup: 'Sign Up',
        heading: 'Welcome Back',
        subtitle: 'Sign in to find trusted local services around you.',
        identifier: 'Email Address or Mobile Number',
        identifierPlaceholder: 'Enter your email or 10-digit mobile number',
        password: 'Password',
        passwordPlaceholder: 'Enter your password',
        showPassword: 'Show password',
        hidePassword: 'Hide password',
        remember: 'Remember Me',
        forgot: 'Forgot Password?',
        signIn: 'Sign In',
        divider: 'or continue with',
        google: 'Continue with Google',
        facebook: 'Continue with Facebook',
        bottomPrompt: 'New to GaonConnect?',
        bottomLink: 'Create an account',
        required: 'Enter your email or mobile number and password.',
        invalidEmail: 'Enter a valid email address or a 10-digit mobile number.',
        success: 'Frontend demo only. You are not signed in.',
        forgotDemo: 'This demo does not send password reset emails.',
        socialDemo: 'Demo button only. Social sign-in is not available.',
      }

  function showDemoMessage(text) {
    setMessageType('info')
    setMessage(text)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const identifier = formData.get('identifier').trim()
    const password = formData.get('password')

    if (!identifier || !password) {
      setMessageType('error')
      setMessage(copy.required)
      return
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier)
    const isMobile = identifier.replace(/\D/g, '').length === 10

    if (!isEmail && !isMobile) {
      setMessageType('error')
      setMessage(copy.invalidEmail)
      return
    }

    setMessageType('success')
    setMessage(copy.success)
  }

  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50 px-4 py-10 sm:py-14">
      <section className="mx-auto w-full max-w-lg rounded-2xl border border-green-100 bg-white p-6 shadow-lg shadow-green-900/5 sm:p-9">
        <div className="flex flex-col items-center gap-3 text-center">
          <AuthBrand isHindi={isHindi} />
          <p className="text-sm text-gray-600">
            {copy.accountPrompt}{' '}
            <Link to="/signup" className="font-semibold text-green-700 hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">
              {copy.signup}
            </Link>
          </p>
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{copy.heading}</h1>
          <p className="mt-2 text-sm leading-6 text-gray-600">{copy.subtitle}</p>
        </div>

        <form noValidate onSubmit={handleSubmit} onChange={() => setMessage('')} className="mt-7 space-y-5">
          <div>
            <label htmlFor="login-identifier" className="text-sm font-semibold text-gray-700">{copy.identifier}</label>
            <input
              id="login-identifier"
              name="identifier"
              type="text"
              required
              autoComplete="username"
              placeholder={copy.identifierPlaceholder}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="login-password" className="text-sm font-semibold text-gray-700">{copy.password}</label>
            <div className="relative mt-2">
              <input
                id="login-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="current-password"
                placeholder={copy.passwordPlaceholder}
                className={`${inputClasses} mt-0 pr-20`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? copy.hidePassword : copy.showPassword}
                className="absolute inset-y-0 right-3 my-auto h-9 rounded-lg px-2 text-xs font-semibold text-green-700 transition hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
              >
                {showPassword ? (isHindi ? 'छिपाएँ' : 'Hide') : (isHindi ? 'दिखाएँ' : 'Show')}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <label className="inline-flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                className="h-4 w-4 rounded border-gray-300 accent-green-700 focus:ring-green-600"
              />
              {copy.remember}
            </label>
            <button type="button" onClick={() => showDemoMessage(copy.forgotDemo)} className="font-semibold text-green-700 hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">
              {copy.forgot}
            </button>
          </div>

          {message && (
            <p role="status" aria-live="polite" className={`rounded-lg px-3 py-2 text-sm ${messageType === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-800'}`}>
              {message}
            </p>
          )}

          <button type="submit" className="w-full rounded-xl bg-green-700 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200 active:translate-y-px">
            {copy.signIn}
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
          <button type="button" onClick={() => showDemoMessage(copy.socialDemo)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 text-sm font-semibold text-gray-700 transition hover:border-green-300 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">
            <span aria-hidden="true" className="font-bold text-blue-800">f</span>{copy.facebook}
          </button>
        </div>

        <p className="mt-7 text-center text-sm text-gray-600">
          {copy.bottomPrompt}{' '}
          <Link to="/signup" className="font-semibold text-green-700 hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">
            {copy.bottomLink}
          </Link>
        </p>
      </section>
    </main>
  )
}

export default LoginPage
