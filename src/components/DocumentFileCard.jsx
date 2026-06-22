import { FiFileText, FiMoreVertical } from 'react-icons/fi'

const extensionStyles = {
  pdf: 'text-red-500',
  doc: 'text-blue-600',
  docx: 'text-blue-600',
  pptx: 'text-orange-600',
  xlsx: 'text-emerald-600',
}

const extensionLetters = {
  pdf: 'PDF',
  doc: 'W',
  docx: 'W',
  pptx: 'P',
  xlsx: 'X',
}

export function DocumentFileCard({ file, onMenu, showMenu = false }) {
  const color = extensionStyles[file.extension] ?? 'text-[#4355e8]'
  const label = extensionLetters[file.extension] ?? file.extension.toUpperCase()
  const labelSize = label.length > 1 ? 'text-3xl' : 'text-5xl'

  return (
    <article className="overflow-hidden rounded bg-white p-4 shadow-[0_18px_34px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      <div className="grid aspect-16/8 place-items-center rounded bg-slate-50">
        <div className="relative grid h-32 w-24 place-items-center rounded-xl border-8 border-white bg-slate-50 shadow-[0_12px_28px_rgba(15,23,42,0.03)]">
          <span className="absolute right-0 top-0 size-9 rounded-bl-lg border-b-8 border-l-8 border-white bg-slate-100" />
          <span className={`${labelSize} font-bold leading-none ${color}`}>{label}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-xs font-medium text-slate-400">Created on {file.createdOn}</p>
        <span className="text-sm font-medium text-[#4355e8]">{file.size}</span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="flex size-5 shrink-0 items-center justify-center rounded bg-[#b9c5ff] text-xs text-[#4355e8]">
          <FiFileText aria-hidden="true" />
        </span>
        <h3 className="min-w-0 flex-1 truncate text-base font-medium text-slate-950">{file.name}</h3>
        {showMenu ? (
          <button
            className="rounded-full p-1 text-slate-400 transition hover:bg-slate-50 hover:text-[#4355e8]"
            type="button"
            aria-label={`${file.name} options`}
            onClick={() => onMenu?.(file.id)}
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
