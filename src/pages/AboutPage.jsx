import { Link } from 'react-router-dom'

const offerings = [
  { icon: '🧰', title: 'Local Services', hindi: 'स्थानीय सेवाएँ', description: 'Browse local providers across useful everyday service categories.', hindiDescription: 'रोज़मर्रा की उपयोगी सेवाओं की श्रेणियों में स्थानीय प्रदाताओं को देखें।', to: '/services' },
  { icon: '🌾', title: 'Kisan Sahayata', hindi: 'किसान सहायता', description: 'Explore local service categories and information for farming needs.', hindiDescription: 'खेती की ज़रूरतों के लिए स्थानीय सेवा श्रेणियाँ और जानकारी देखें।', to: '/kisan-sahayata/tractor-rental' },
  { icon: '📢', title: 'Village Notice Board', hindi: 'गाँव का सूचना पट्ट', description: 'Find community announcements and local updates in one place.', hindiDescription: 'सामुदायिक घोषणाएँ और स्थानीय अपडेट एक जगह पाएँ।', to: '/notice-board' },
  { icon: '📋', title: 'Government Schemes & Yojana', hindi: 'सरकारी योजनाएँ', description: 'Read general guidance about government schemes by category.', hindiDescription: 'श्रेणी के अनुसार सरकारी योजनाओं की सामान्य जानकारी देखें।', to: '/schemes' },
]

function AboutPage({ language }) {
  const isHindi = language === 'hi'

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
      <section className="overflow-hidden rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-700">{isHindi ? 'हमारे बारे में' : 'About GaonConnect'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">{isHindi ? 'गाँव की सेवाएँ, एक साथ' : 'Local connections. Stronger communities.'}</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
          {isHindi
            ? 'GaonConnect गाँव के निवासियों को स्थानीय सेवा प्रदाताओं और उपयोगी सामुदायिक जानकारी खोजने का एक सरल तरीका देता है। हमारा उद्देश्य स्थानीय खोज को अधिक सहज और सुलभ बनाना है।'
            : 'GaonConnect gives village residents a simple way to discover nearby service providers and useful community information. We aim to make local discovery easier and more accessible for everyone.'}
        </p>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2" aria-label={isHindi ? 'हमारा उद्देश्य' : 'Our purpose'}>
        <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-8">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl" aria-hidden="true">🎯</span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">{isHindi ? 'हमारा मिशन' : 'Our Mission'}</h2>
          <p className="mt-3 leading-7 text-gray-600">{isHindi
            ? 'गाँव के निवासियों को स्थानीय सेवा प्रदाताओं और उपयोगी सामुदायिक जानकारी से जोड़ना—एक स्पष्ट, आसान और गाँव-केंद्रित अनुभव के माध्यम से।'
            : 'To help village residents find local service providers and useful community information through a clear, simple, village-focused experience.'}</p>
        </article>
        <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-8">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl" aria-hidden="true">🌱</span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">{isHindi ? 'हमारा विज़न' : 'Our Vision'}</h2>
          <p className="mt-3 leading-7 text-gray-600">{isHindi
            ? 'ऐसा भविष्य जहाँ स्थानीय सेवाओं को खोजना आसान हो और हर समुदाय के लोगों को अपने आसपास उपलब्ध जानकारी तक बेहतर पहुँच मिले।'
            : 'A future where local services are easier to discover and every community can access helpful information about what is available nearby.'}</p>
        </article>
      </section>

      <section className="mt-12" aria-labelledby="about-offer-heading">
        <div className="mb-6">
          <p className="font-semibold text-green-700">{isHindi ? 'एक जगह पर उपयोगी संसाधन' : 'Useful resources in one place'}</p>
          <h2 id="about-offer-heading" className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">{isHindi ? 'हम क्या प्रदान करते हैं' : 'What We Offer'}</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item) => (
            <Link key={item.title} to={item.to} className="group rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-100">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl transition group-hover:bg-green-100" aria-hidden="true">{item.icon}</span>
              <h3 className="mt-4 font-bold leading-6 text-gray-900 group-hover:text-green-800">{isHindi ? item.hindi : item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{isHindi ? item.hindiDescription : item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-green-100 bg-green-50/70 p-6 sm:p-8" aria-labelledby="about-how-heading">
        <h2 id="about-how-heading" className="text-2xl font-bold text-gray-900">{isHindi ? 'यह कैसे काम करता है' : 'How It Works'}</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            [isHindi ? 'अपना गाँव चुनें' : 'Select Your Village', isHindi ? 'अपना क्षेत्र चुनकर आसपास की जानकारी देखें।' : 'Choose your area to find relevant local information.'],
            [isHindi ? 'सेवाएँ देखें' : 'Explore Services', isHindi ? 'सेवा श्रेणियों और सामुदायिक संसाधनों को ब्राउज़ करें।' : 'Browse service categories and community resources.'],
            [isHindi ? 'प्रदाताओं से जुड़ें' : 'Connect with Providers', isHindi ? 'सूची में उपलब्ध प्रदाता विवरण देखें।' : 'Review the provider details available in a listing.'],
          ].map(([title, description], index) => (
            <li key={title} className="flex gap-4 rounded-xl border border-green-100 bg-white p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">{index + 1}</span>
              <div><h3 className="font-bold text-gray-900">{title}</h3><p className="mt-1 text-sm leading-6 text-gray-600">{description}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12" aria-labelledby="about-why-heading">
        <h2 id="about-why-heading" className="text-2xl font-bold text-gray-900 md:text-3xl">{isHindi ? 'GaonConnect क्यों?' : 'Why Choose GaonConnect'}</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            [isHindi ? 'गाँव-केंद्रित खोज' : 'Village-focused discovery', isHindi ? 'स्थानीय ज़रूरतों और आस-पास की सेवाओं पर ध्यान।' : 'Focused on local needs and nearby services.'],
            [isHindi ? 'सरल नेविगेशन' : 'Simple navigation', isHindi ? 'श्रेणियों और पन्नों के बीच स्पष्ट रास्ते।' : 'Clear paths through categories and pages.'],
            [isHindi ? 'सामुदायिक जानकारी' : 'Community information', isHindi ? 'स्थानीय सूचनाएँ और उपयोगी संसाधन एक जगह।' : 'Local notices and useful resources together.'],
          ].map(([title, description]) => <article key={title} className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm"><h3 className="font-bold text-gray-900">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{description}</p></article>)}
        </div>
      </section>

      <aside className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950 sm:p-6">
        <h2 className="font-bold">{isHindi ? 'उदाहरण सामग्री के बारे में' : 'About example content'}</h2>
        <p className="mt-1">{isHindi
          ? 'इस वेबसाइट पर दिखाई गई प्रदाता सूचियाँ और संपर्क विवरण उदाहरण के लिए हैं, सत्यापित नहीं। योजना की जानकारी सामान्य मार्गदर्शन है; आधिकारिक स्रोत से पुष्टि करें।'
          : 'Provider listings and contact details are illustrative and are not verified. Scheme information is general guidance; confirm details through official sources.'}</p>
      </aside>
    </main>
  )
}

export default AboutPage
