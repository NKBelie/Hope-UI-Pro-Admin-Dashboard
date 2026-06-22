import { useEffect } from 'react'
import { FiImage, FiX } from 'react-icons/fi'
import { formatCreatedDate, formatRelativeTime } from '../utils/date'

export function ImagePreviewModal({ image, onClose }) {
  useEffect(() => {
    if (!image) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [image, onClose])

  if (!image) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded bg-white shadow-[0_24px_80px_rgba(15,23,42,0.28)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-sm transition hover:bg-white hover:text-[#4355e8]"
          type="button"
          aria-label="Close preview"
          onClick={onClose}
        >
          <FiX aria-hidden="true" />
        </button>
        <img className="max-h-[60vh] w-full object-cover" src={image.url} alt={image.name} />
        <div className="flex gap-4 p-5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded bg-[#dfe5ff] text-[#4355e8]">
            <FiImage aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 id="preview-title" className="truncate text-xl font-semibold text-slate-950">
              {image.name}
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Created on {formatCreatedDate(image.createdAt)} | Opened{' '}
              {formatRelativeTime(image.lastOpenedAt)}
            </p>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded bg-slate-50 p-3">
                <dt className="text-slate-400">Size</dt>
                <dd className="mt-1 font-semibold text-slate-950">{image.size}</dd>
              </div>
              <div className="rounded bg-slate-50 p-3">
                <dt className="text-slate-400">Folder</dt>
                <dd className="mt-1 font-semibold text-slate-950">{image.folder}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
