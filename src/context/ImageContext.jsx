import { useCallback, useMemo, useReducer } from 'react'
import { imageLibrary } from '../data/images'
import { ImageContext } from './StoreContext'

const initialState = {
  images: imageLibrary,
  searchTerm: '',
  previewImageId: null,
  activeRoute: '/file-manager/images',
}

function imageReducer(state, action) {
  switch (action.type) {
    case 'setSearchTerm':
      if (state.searchTerm === action.payload) {
        return state
      }
      return { ...state, searchTerm: action.payload }
    case 'openPreview':
      if (state.previewImageId === action.payload) {
        return state
      }
      return { ...state, previewImageId: action.payload }
    case 'closePreview':
      if (state.previewImageId === null) {
        return state
      }
      return { ...state, previewImageId: null }
    case 'setActiveRoute':
      if (state.activeRoute === action.payload) {
        return state
      }
      return { ...state, activeRoute: action.payload }
    default:
      return state
  }
}

export function ImageProvider({ children }) {
  const [state, dispatch] = useReducer(imageReducer, initialState)
  const closePreview = useCallback(() => dispatch({ type: 'closePreview' }), [])
  const openPreview = useCallback(
    (imageId) => dispatch({ type: 'openPreview', payload: imageId }),
    [],
  )
  const setActiveRoute = useCallback(
    (route) => dispatch({ type: 'setActiveRoute', payload: route }),
    [],
  )
  const setSearchTerm = useCallback(
    (term) => dispatch({ type: 'setSearchTerm', payload: term }),
    [],
  )

  const value = useMemo(() => {
    const normalizedSearch = state.searchTerm.trim().toLowerCase()
    const filteredImages = normalizedSearch
      ? state.images.filter((image) => image.name.toLowerCase().includes(normalizedSearch))
      : state.images

    const recentlyViewed = [...state.images]
      .sort((first, second) => new Date(second.lastOpenedAt) - new Date(first.lastOpenedAt))
      .slice(0, 8)

    const previewImage = state.images.find((image) => image.id === state.previewImageId) ?? null

    return {
      activeRoute: state.activeRoute,
      allImages: state.images,
      filteredImages,
      previewImage,
      recentlyViewed,
      searchTerm: state.searchTerm,
      closePreview,
      openPreview,
      setActiveRoute,
      setSearchTerm,
    }
  }, [closePreview, openPreview, setActiveRoute, setSearchTerm, state])

  return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
}
