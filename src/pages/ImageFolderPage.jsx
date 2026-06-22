import { useMemo, useState } from 'react'
import { FiImage } from 'react-icons/fi'
import { FilePageHeader } from '../components/FilePageHeader'
import { ImageCard } from '../components/ImageCard'
import { ImagePreviewModal } from '../components/ImagePreviewModal'
import { useImages } from '../context/useImages'

export function ImageFolderPage() {
  const { closePreview, filteredImages, openPreview, previewImage, recentlyViewed, searchTerm } =
    useImages()
  const [addedImages, setAddedImages] = useState([])
  const [localPreviewImage, setLocalPreviewImage] = useState(null)

  const visibleImages = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    const localImages = normalizedSearch
      ? addedImages.filter((image) => image.name.toLowerCase().includes(normalizedSearch))
      : addedImages

    return [...localImages, ...filteredImages]
  }, [addedImages, filteredImages, searchTerm])

  const visibleRecentImages = useMemo(
    () => [...addedImages, ...recentlyViewed].slice(0, 8),
    [addedImages, recentlyViewed],
  )

  function handleAddImage() {
    setAddedImages((currentImages) => [
      {
        ...recentlyViewed[0],
        id: `image-new-${currentImages.length + 1}`,
        name: `Gallery-${1234725783 + currentImages.length}.jpg`,
        lastOpenedAt: new Date().toISOString(),
      },
      ...currentImages,
    ])
  }

  function handleOpenImage(imageId) {
    const localImage = addedImages.find((image) => image.id === imageId)

    if (localImage) {
      setLocalPreviewImage(localImage)
      return
    }

    openPreview(imageId)
  }

  function handleClosePreview() {
    setLocalPreviewImage(null)
    closePreview()
  }

  return (
    <>
      <FilePageHeader
        actionIcon={FiImage}
        actionLabel="Add Image"
        onAction={handleAddImage}
        title="Images"
      />

      <section className="mb-10" aria-labelledby="recently-viewed-title">
        <h2 id="recently-viewed-title" className="text-2xl font-semibold text-slate-950">
          Recently viewed
        </h2>
        <div className="mt-5 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {visibleRecentImages.map((image) => (
            <ImageCard key={image.id} image={image} onOpen={handleOpenImage} />
          ))}
        </div>
      </section>

      <section aria-labelledby="all-images-title">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 id="all-images-title" className="text-2xl font-semibold text-slate-950">
            All Images
          </h2>
          <span className="text-sm font-medium text-[#4355e8]">{visibleImages.length} files</span>
        </div>

        {visibleImages.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {visibleImages.map((image) => (
              <ImageCard key={image.id} image={image} onOpen={handleOpenImage} />
            ))}
          </div>
        ) : (
          <div className="grid place-items-center rounded border border-dashed border-slate-200 px-6 py-16 text-center">
            <FiImage className="text-4xl text-[#4355e8]" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-slate-950">No images found</h3>
            <p className="mt-2 max-w-md text-sm text-slate-500">
              No gallery files match "{searchTerm}". Try a different file name.
            </p>
          </div>
        )}
      </section>

      <ImagePreviewModal image={localPreviewImage ?? previewImage} onClose={handleClosePreview} />
    </>
  )
}
