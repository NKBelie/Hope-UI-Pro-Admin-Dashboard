import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { useImages } from '../context/useImages'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export function AppLayout() {
  const location = useLocation()
  const { setActiveRoute } = useImages()
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [interfaceFontSize, setInterfaceFontSize] = useState(16)

  useEffect(() => {
    setActiveRoute(location.pathname)
  }, [location.pathname, setActiveRoute])

  useEffect(() => {
    document.documentElement.style.fontSize = `${interfaceFontSize}px`

    return () => {
      document.documentElement.style.removeProperty('font-size')
    }
  }, [interfaceFontSize])

  return (
    <div className="flex h-screen overflow-hidden bg-[#f7f8fb] font-sans text-slate-950">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar
          interfaceFontSize={interfaceFontSize}
          isSidebarCollapsed={isSidebarCollapsed}
          onFontSizeChange={setInterfaceFontSize}
          onToggleSidebar={() => setIsSidebarCollapsed((current) => !current)}
        />
        <main className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-7">
          <Outlet />
        </main>
      </div>

      <div className="pointer-events-none fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-28 xl:flex">
        <span className="pointer-events-auto flex h-29 w-9 items-center justify-center rounded-l-sm bg-emerald-600 text-sm font-semibold text-white [writing-mode:vertical-rl]">
          Buy Now
        </span>
        <span className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-l-sm bg-orange-500 text-lg text-white">
          <FiSettings aria-hidden="true" />
        </span>
        <span className="pointer-events-auto flex h-29 w-8 items-center justify-center rounded-l-sm bg-[#08245c] text-sm font-semibold text-white [writing-mode:vertical-rl]">
          Landing Pages
        </span>
      </div>
    </div>
  )
}
