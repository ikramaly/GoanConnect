import { Link } from 'react-router-dom'
import NoticeBoard from '../components/NoticeBoard.jsx'

function NoticeBoardPage({ language }) {
  const isHindi = language === 'hi'

  return (
    <main className="min-h-[60vh]">
      <div className="mx-auto max-w-6xl px-5 pt-8">
        <Link
          to="/"
          className="inline-flex min-h-10 items-center gap-2 rounded-lg text-sm font-semibold text-green-700 transition hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        >
          <span aria-hidden="true">←</span>
          {isHindi ? 'होम पेज पर वापस जाएँ' : 'Back to Home'}
        </Link>
      </div>
      <NoticeBoard language={language} />
    </main>
  )
}

export default NoticeBoardPage
