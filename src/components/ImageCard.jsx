import { FiImage } from 'react-icons/fi'
import { formatCreatedDate, formatRelativeTime } from '../utils/date'

export function ImageCard({ image, onOpen }) {
  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpen(image.id)
    }
  }

  return (
    <article
      className="cursor-pointer overflow-hidden rounded bg-white p-4 shadow-[0_18px_34px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] focus:outline-none focus:ring-4 focus:ring-[#4355e8]/15"
      role="button"
      tabIndex="0"
      onClick={() => onOpen(image.id)}
      onKeyDown={handleKeyDown}
    >
      <div className="aspect-16/11 overflow-hidden rounded bg-slate-100">
        <img className="h-full w-full object-cover" src={image.url} alt={image.name} loading="lazy" />
      </div>
      <div className="pt-4">
        <p className="text-xs font-medium text-slate-400">Created on {formatCreatedDate(image.createdAt)}</p>
        <h3 className="mt-3 flex min-w-0 items-center gap-2 text-sm font-semibold text-slate-950">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#dfe5ff] text-[#4355e8]">
            <FiImage aria-hidden="true" />
          </span>
          <span className="truncate">{image.name}</span>
        </h3>
        <p className="mt-3 text-xs text-slate-500">
          You opened <span className="font-semibold text-[#4355e8]">{formatRelativeTime(image.lastOpenedAt)}</span>
        </p>
      </div>
    </article>
  )
}
