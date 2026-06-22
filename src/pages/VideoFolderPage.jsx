import { useMemo, useState } from 'react'
import { FiVideo } from 'react-icons/fi'
import { FilePageHeader } from '../components/FilePageHeader'
import { MediaFileCard } from '../components/MediaFileCard'
import { videoFiles } from '../data/filePages'
import { useImages } from '../context/useImages'

export function VideoFolderPage() {
  const { searchTerm } = useImages()
  const [videos, setVideos] = useState(videoFiles)

  const filteredVideos = useMemo(
    () => videos.filter((file) => file.name.toLowerCase().includes(searchTerm.trim().toLowerCase())),
    [searchTerm, videos],
  )

  function handleAddVideo() {
    setVideos((currentVideos) => [
      {
        ...videoFiles[0],
        id: `video-new-${currentVideos.length + 1}`,
        name: `Video-${1234725783 + currentVideos.length}.mp4`,
        opened: 'just now',
      },
      ...currentVideos,
    ])
  }

  return (
    <div>
      <FilePageHeader
        actionIcon={FiVideo}
        actionLabel="Add Video"
        onAction={handleAddVideo}
        title="Videos"
      />

      <FileSection title="Recently viewed">
        {filteredVideos.slice(0, 8).map((file) => (
          <MediaFileCard file={file} key={file.id} />
        ))}
      </FileSection>

      <FileSection title="All Videos">
        {filteredVideos.map((file) => (
          <MediaFileCard file={file} key={`all-${file.id}`} />
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
