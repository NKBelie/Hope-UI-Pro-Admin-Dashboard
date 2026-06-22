import { useMemo, useState } from 'react'
import { FiFileText } from 'react-icons/fi'
import { DocumentFileCard } from '../components/DocumentFileCard'
import { FilePageHeader } from '../components/FilePageHeader'
import { MediaFileCard } from '../components/MediaFileCard'
import { allFileImages, documentFiles } from '../data/filePages'
import { useImages } from '../context/useImages'

export function AllFilesPage() {
  const { searchTerm } = useImages()
  const [documents, setDocuments] = useState(documentFiles.slice(0, 4))
  const [images, setImages] = useState(allFileImages)

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredDocuments = useMemo(
    () => documents.filter((file) => file.name.toLowerCase().includes(normalizedSearch)),
    [documents, normalizedSearch],
  )
  const filteredImages = useMemo(
    () => images.filter((file) => file.name.toLowerCase().includes(normalizedSearch)),
    [images, normalizedSearch],
  )

  function handleAddFile() {
    setDocuments((currentDocuments) => [
      {
        ...documentFiles[0],
        id: `all-doc-new-${currentDocuments.length + 1}`,
        name: `Doc-${123472578 + currentDocuments.length}.pdf`,
        opened: 'just now',
      },
      ...currentDocuments,
    ])
    setImages((currentImages) => [
      {
        ...allFileImages[0],
        id: `all-image-new-${currentImages.length + 1}`,
        name: `Gallery-${628491 + currentImages.length}.jpg`,
        opened: 'just now',
      },
      ...currentImages,
    ])
  }

  return (
    <div>
      <FilePageHeader
        actionIcon={FiFileText}
        actionLabel="Add Files"
        onAction={handleAddFile}
        title="All-Files"
      />

      <FileSection title="Documents">
        {filteredDocuments.map((file) => (
          <DocumentFileCard file={file} key={file.id} />
        ))}
      </FileSection>

      <FileSection title="Image">
        {filteredImages.map((file) => (
          <MediaFileCard file={file} key={file.id} />
        ))}
      </FileSection>
    </div>
  )
}

function FileSection({ children, title }) {
  return (
    <section className="mb-10">
      <h2 className="mb-5 text-3xl font-semibold text-slate-950">{title}</h2>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">{children}</div>
    </section>
  )
}
