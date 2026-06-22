import { useMemo, useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { DocumentFileCard } from '../components/DocumentFileCard'
import { FilePageHeader } from '../components/FilePageHeader'
import { MediaFileCard } from '../components/MediaFileCard'
import { allFileImages, documentFiles } from '../data/filePages'
import { useImages } from '../context/useImages'

const trashDocuments = [
  documentFiles[0],
  { ...documentFiles[3], id: 'trash-doc-pptx' },
  { ...documentFiles[2], id: 'trash-doc-doc' },
  { ...documentFiles[1], id: 'trash-doc-xlsx', name: 'xyz-25783.xlsx', size: '12mb' },
]

const trashImages = allFileImages.map((file) => ({ ...file, id: `trash-${file.id}` }))

export function TrashPage() {
  const { searchTerm } = useImages()
  const [documents, setDocuments] = useState(trashDocuments)
  const [images, setImages] = useState(trashImages)
  const [restoredCount, setRestoredCount] = useState(0)

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredDocuments = useMemo(
    () => documents.filter((file) => file.name.toLowerCase().includes(normalizedSearch)),
    [documents, normalizedSearch],
  )
  const filteredImages = useMemo(
    () => images.filter((file) => file.name.toLowerCase().includes(normalizedSearch)),
    [images, normalizedSearch],
  )

  function handleRestoreAll() {
    setRestoredCount((count) => count + documents.length + images.length)
    setDocuments([])
    setImages([])
  }

  function handleRestoreDocument(fileId) {
    setDocuments((currentDocuments) => {
      const nextDocuments = currentDocuments.filter((file) => file.id !== fileId)
      return nextDocuments
    })
    setRestoredCount((count) => count + 1)
  }

  return (
    <div>
      <FilePageHeader
        actionIcon={FiTrash2}
        actionLabel="Restore All"
        onAction={handleRestoreAll}
        title="Trash"
      />

      {restoredCount > 0 ? (
        <p className="mb-5 rounded bg-[#eef2ff] px-4 py-3 text-sm font-medium text-[#4355e8]">
          Restored {restoredCount} item{restoredCount === 1 ? '' : 's'}.
        </p>
      ) : null}

      <FileSection title="Documents">
        {filteredDocuments.map((file) => (
          <DocumentFileCard file={file} key={file.id} onMenu={handleRestoreDocument} showMenu />
        ))}
      </FileSection>

      <FileSection title="Image">
        {filteredImages.map((file) => (
          <MediaFileCard file={file} key={file.id} showMenu />
        ))}
      </FileSection>

      {documents.length === 0 && images.length === 0 ? (
        <div className="grid place-items-center rounded border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
          <FiTrash2 className="text-4xl text-[#4355e8]" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold text-slate-950">Trash is empty</h2>
        </div>
      ) : null}
    </div>
  )
}

function FileSection({ children, title }) {
  return (
    <section className="mb-10">
      <h2 className="mb-5 text-3xl font-semibold text-slate-950">{title}</h2>
      {children.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">{children}</div>
      ) : (
        <div className="rounded bg-white p-6 text-sm font-medium text-slate-500 shadow-[0_18px_34px_rgba(15,23,42,0.04)]">
          No files in this section.
        </div>
      )}
    </section>
  )
}
