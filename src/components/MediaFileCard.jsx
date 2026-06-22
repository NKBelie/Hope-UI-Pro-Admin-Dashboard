import { FiImage, FiMoreVertical, FiVideo } from 'react-icons/fi'

const typeIcons = {
  image: FiImage,
  video: FiVideo,
}

export function MediaFileCard({ file, showMenu = false }) {
  const TypeIcon = typeIcons[file.type] ?? FiImage

  return (
    <article className="overflow-hidden rounded bg-white p-4 shadow-[0_18px_34px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      <div className="aspect-16/11 overflow-hidden rounded bg-slate-100">
        <img className="h-full w-full object-cover" src={file.url} alt={file.name} loading="lazy" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-xs font-medium text-slate-400">Created on {file.createdOn}</p>
        {file.size ? <span className="text-sm font-medium text-[#4355e8]">{file.size}</span> : null}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="flex size-5 shrink-0 items-center justify-center rounded bg-[#4355e8] text-xs text-white">
          <TypeIcon aria-hidden="true" />
        </span>
        <h3 className="min-w-0 flex-1 truncate text-base font-medium text-slate-950">{file.name}</h3>
        {showMenu ? (
          <button
            className="rounded-full p-1 text-slate-400 transition hover:bg-slate-50 hover:text-[#4355e8]"
            type="button"
            aria-label={`${file.name} options`}
          >
            <FiMoreVertical aria-hidden="true" />
          </button>
        ) : null}
      </div>
      <p className="mt-3 text-xs font-medium text-slate-400">
        You opened <span className="text-[#4355e8]">{file.opened}</span>
      </p>
    </article>
  )
}
