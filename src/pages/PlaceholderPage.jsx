import {
  FiArchive,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiHelpCircle,
  FiImage,
  FiLogOut,
  FiRefreshCw,
  FiShield,
  FiTrash2,
  FiUploadCloud,
  FiVideo,
} from 'react-icons/fi'
import { FolderCard } from '../components/FolderCard'

const variantCards = {
  video: [
    { title: 'Tutorials', items: '46 Items', icon: FiVideo },
    { title: 'Exports', items: '32 Items', icon: FiUploadCloud },
    { title: 'Clips', items: '128 Items', icon: FiClock },
    { title: 'Approved', items: '18 Items', icon: FiCheckCircle },
  ],
  documents: [
    { title: 'Contracts', items: '64 Items', icon: FiFileText },
    { title: 'Reports', items: '89 Items', icon: FiArchive },
    { title: 'Drafts', items: '27 Items', icon: FiClock },
    { title: 'Signed', items: '15 Items', icon: FiShield },
  ],
  all: [
    { title: 'Images', items: '5,515 Items', icon: FiImage },
    { title: 'Videos', items: '1,624 Items', icon: FiVideo },
    { title: 'Documents', items: '5,674 Items', icon: FiFileText },
    { title: 'Archived', items: '248 Items', icon: FiArchive },
  ],
  trash: [
    { title: 'Deleted Images', items: '18 Items', icon: FiImage },
    { title: 'Old Videos', items: '7 Items', icon: FiVideo },
    { title: 'Recoverable Docs', items: '34 Items', icon: FiFileText },
    { title: 'Expired', items: '4 Items', icon: FiTrash2 },
  ],
  help: [
    { title: 'Storage Guide', items: '12 Articles', icon: FiHelpCircle },
    { title: 'Sync Status', items: 'All Clear', icon: FiRefreshCw },
    { title: 'Security', items: '8 Articles', icon: FiShield },
    { title: 'Contact Support', items: '24/7 Help', icon: FiClock },
  ],
  'sign-out': [
    { title: 'Current Session', items: 'Active Now', icon: FiShield },
    { title: 'Synced Files', items: 'All Saved', icon: FiCheckCircle },
    { title: 'Recent Activity', items: '9 Events', icon: FiClock },
    { title: 'Sign Out', items: 'Secure Exit', icon: FiLogOut },
  ],
}

const recentRows = [
  ['Project handoff.zip', 'Shared folder', '2 mins ago', '72 mb'],
  ['Dashboard export.pdf', 'Document', '18 mins ago', '12 mb'],
  ['Brand assets', 'Folder', '1 hour ago', '340 mb'],
  ['Meeting clip.mp4', 'Video', 'Yesterday', '1.2 gb'],
]

export function PlaceholderPage({ description, title, variant = 'all' }) {
  const cards = variantCards[variant] ?? variantCards.all

  return (
    <div className="grid gap-7">
      <section className="flex flex-col justify-between gap-4 rounded bg-white p-5 shadow-[0_18px_34px_rgba(15,23,42,0.04)] sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-950">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{description}</p>
        </div>
        <button className="inline-flex h-10 items-center justify-center gap-2 rounded bg-[#4355e8] px-4 text-sm font-semibold text-white transition hover:bg-[#3443ca]" type="button">
          <FiUploadCloud aria-hidden="true" />
          Upload
        </button>
      </section>

      <section className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <FolderCard key={card.title} {...card} />
        ))}
      </section>

      <section className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="rounded bg-white p-5 shadow-[0_18px_34px_rgba(15,23,42,0.04)]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-950">Recent Files</h2>
            <span className="text-sm font-medium text-[#4355e8]">{cards.length * 46} files</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-620px text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.2em] text-slate-400">
                <tr>
                  <th className="pb-4 font-semibold">Name</th>
                  <th className="pb-4 font-semibold">Type</th>
                  <th className="pb-4 font-semibold">Modified</th>
                  <th className="pb-4 text-right font-semibold">Size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-500">
                {recentRows.map((row) => (
                  <tr key={row[0]}>
                    <td className="py-4 font-medium text-slate-950">{row[0]}</td>
                    <td className="py-4">{row[1]}</td>
                    <td className="py-4">{row[2]}</td>
                    <td className="py-4 text-right">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded bg-white p-5 shadow-[0_18px_34px_rgba(15,23,42,0.04)]">
          <h2 className="text-xl font-semibold text-slate-950">Quick Stats</h2>
          <div className="mt-6 grid gap-5">
            {['Cloud sync', 'Storage used', 'Shared files'].map((label, index) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-600">{label}</span>
                  <span className="font-semibold text-slate-950">{[92, 75, 48][index]}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#dfe5ff]">
                  <div
                    className={`h-full rounded-full bg-[#4355e8] ${['w-[92%]', 'w-[75%]', 'w-[48%]'][index]}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
