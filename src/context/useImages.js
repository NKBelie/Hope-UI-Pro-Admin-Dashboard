import { useContext } from 'react'
import { ImageContext } from './StoreContext'

export function useImages() {
  const context = useContext(ImageContext)

  if (!context) {
    throw new Error('useImages must be used inside an ImageProvider')
  }

  return context
}
