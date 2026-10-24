import { useState } from 'react'

function ContactPage({ language }) {
  const isHindi = language === 'hi'
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('success')
  const copy = isHindi
    ? {
        eyebrow: 'संपर्क करें', heading: 'हमसे संपर्क करें', intro: 'GaonConnect के बारे में सवाल या सुझाव हैं? नीचे दिए गए फ़ॉर्म में संदेश लिखें।', form: 'हमें संदेश भेजें', name: 'नाम', email: 'ईमेल', subject: 'विषय', body: 'संदेश', nameHint: 'अपना नाम लिखें', emailHint: 'you@example.com', subjectHint: 'संदेश का विषय', bodyHint: 'अपना संदेश लिखें…', send: 'संदेश भेजें', success: 'धन्यवाद! फ़ॉर्म की जाँच पूरी हुई। यह वेबसाइट संदेश भेजती या सहेजती नहीं है।', invalidEmail: 'कृपया सही ईमेल पता दर्ज करें।', faq: 'अक्सर पूछे जाने वाले सवाल', questions: [
          ['GaonConnect क्या है?', 'यह गाँव-केंद्रित स्थानीय सेवा निर्देशिका और सामुदायिक जानकारी का मंच है।'],
          ['क्या सूचीबद्ध सेवाएँ सत्यापित हैं?', 'नहीं। प्रदाता और संपर्क विवरण उदाहरण के लिए हैं, सत्यापित नहीं।'],
          ['सेवा प्रदाता सूची में कैसे दिख सकते हैं?', 'भविष्य में प्रोजेक्ट टीम सूची जोड़ने की प्रक्रिया साझा कर सकती है। अभी कोई सबमिशन सेवा जुड़ी नहीं है।'],
          ['मैं प्रोजेक्ट टीम से कैसे संपर्क करूँ?', 'इस फ्रंटएंड संस्करण में संदेश भेजने की सुविधा जुड़ी नहीं है।'],
        ],
      }
    : {
        eyebrow: 'Get in touch', heading: 'Contact Us', intro: 'Have a question or suggestion about GaonConnect? Use the form below to draft a message.', form: 'Send us a message', name: 'Name', email: 'Email', subject: 'Subject', body: 'Message', nameHint: 'Enter your name', emailHint: 'you@example.com', subjectHint: 'What is this about?', bodyHint: 'Write your message…', send: 'Send Message', success: 'Thanks! The form was validated. This website does not send or store messages.', invalidEmail: 'Please enter a valid email address.', faq: 'Frequently Asked Questions', questions: [
          ['What is GaonConnect?', 'It is a village-focused directory for local services and community information.'],
          ['Are the listed services verified?', 'No. Provider listings and contact details are illustrative and unverified.'],
          ['How can a service provider be listed?', 'The project team may share a listing process in a future phase. No submission service is connected yet.'],
          ['How do I contact the project team?', 'This frontend version does not have message delivery connected.'],
        ],
      }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const email = new FormData(form).get('email').trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessageType('error')
      setMessage(copy.invalidEmail)
      return
    }
    setMessageType('success')
    setMessage(copy.success)
    form.reset()
  }

  const fieldClass = 'mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-green-300 focus:border-green-600 focus:ring-4 focus:ring-green-100'

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
      <header className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-white px-6 py-9 sm:px-10 sm:py-12">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-700">{copy.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{copy.heading}</h1>
        <p className="mt-4 max-w-2xl leading-7 text-gray-600">{copy.intro}</p>
      </header>

      <div className="mt-9 grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(17rem,0.8fr)]">
        <section className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="text-2xl font-bold text-gray-900">{copy.form}</h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-name" className="text-sm font-semibold text-gray-700">{copy.name} <span aria-hidden="true" className="text-red-600">*</span></label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength="100" placeholder={copy.nameHint} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm font-semibold text-gray-700">{copy.email} <span aria-hidden="true" className="text-red-600">*</span></label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength="254" placeholder={copy.emailHint} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="contact-subject" className="text-sm font-semibold text-gray-700">{copy.subject} <span aria-hidden="true" className="text-red-600">*</span></label>
              <input id="contact-subject" name="subject" type="text" required maxLength="150" placeholder={copy.subjectHint} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-sm font-semibold text-gray-700">{copy.body} <span aria-hidden="true" className="text-red-600">*</span></label>
              <textarea id="contact-message" name="message" required minLength="5" maxLength="2000" rows="5" placeholder={copy.bodyHint} className={`${fieldClass} resize-y`} />
            </div>
            {message && <p role="status" aria-live="polite" className={`rounded-xl p-3 text-sm leading-6 ${messageType === 'error' ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-900'}`}>{message}</p>}
            <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200 active:translate-y-0 sm:w-auto">{copy.send}</button>
          </form>
        </section>

      </div>

      <section className="mt-12" aria-labelledby="contact-faq-heading">
        <h2 id="contact-faq-heading" className="text-2xl font-bold text-gray-900 md:text-3xl">{copy.faq}</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {copy.questions.map(([question, answer]) => (
            <details key={question} className="group rounded-xl border border-green-100 bg-white p-5 shadow-sm transition open:border-green-200 hover:shadow-md">
              <summary className="cursor-pointer list-none pr-7 font-semibold text-gray-900 marker:hidden focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600">{question}<span aria-hidden="true" className="float-right text-green-700 transition group-open:rotate-45">＋</span></summary>
              <p className="mt-3 border-t border-green-50 pt-3 text-sm leading-6 text-gray-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ContactPage
