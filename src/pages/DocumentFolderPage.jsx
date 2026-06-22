import { useMemo, useState } from 'react'
import { FiFileText } from 'react-icons/fi'
import { DocumentFileCard } from '../components/DocumentFileCard'
import { FilePageHeader } from '../components/FilePageHeader'
import { documentFiles } from '../data/filePages'
import { useImages } from '../context/useImages'

export function DocumentFolderPage() {
  const { searchTerm } = useImages()
  const [documents, setDocuments] = useState(documentFiles)

  const filteredDocuments = useMemo(
    () =>
      documents.filter((file) => file.name.toLowerCase().includes(searchTerm.trim().toLowerCase())),
    [documents, searchTerm],
  )

  function handleAddDocument() {
    setDocuments((currentDocuments) => [
      {
        ...documentFiles[0],
        id: `doc-new-${currentDocuments.length + 1}`,
        name: `Doc-${123472578 + currentDocuments.length}.pdf`,
        opened: 'just now',
        size: '5mb',
      },
      ...currentDocuments,
    ])
  }

  return (
    <div>
      <FilePageHeader
        actionIcon={FiFileText}
        actionLabel="Add Document"
        onAction={handleAddDocument}
        title="Document"
      />

      <FileSection title="Recently viewed">
        {filteredDocuments.slice(0, 8).map((file) => (
          <DocumentFileCard file={file} key={file.id} />
        ))}
      </FileSection>

      <FileSection title="All Documents">
        {filteredDocuments.map((file) => (
          <DocumentFileCard file={file} key={`all-${file.id}`} />
        ))}
      </FileSection>
    </div>
  )
}

function FileSection({ children, title }) {
  return (
    <section className="mb-10">
      <h2 className="mb-5 text-2xl font-semibold text-slate-950">{title}</h2>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">{children}</div>
    </section>
  )
}
