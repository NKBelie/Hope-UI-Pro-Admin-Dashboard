import { FiMoreVertical } from 'react-icons/fi'

export function FolderCard({ accent = 'bg-[#eef2ff]', icon: Icon, items, title }) {
  return (
    <article className="relative rounded bg-white p-5 pt-8 shadow-[0_18px_34px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      <span className="absolute left-0 top-0 h-3 w-1/2 rounded-tl bg-white" aria-hidden="true" />
      <div className="flex items-start justify-between gap-4">
        <span className={`flex size-9 items-center justify-center rounded-full ${accent}`}>
          <Icon className="text-lg text-[#4355e8]" aria-hidden="true" />
        </span>
        <button
          className="rounded-full p-1 text-slate-400 transition hover:bg-slate-50 hover:text-[#4355e8]"
          type="button"
          aria-label={`${title} options`}
        >
          <FiMoreVertical aria-hidden="true" />
        </button>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">{items}</p>
    </article>
  )
}
