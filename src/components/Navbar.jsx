import {
  FiArrowLeft,
  FiArrowRight,
  FiBell,
  FiBookmark,
  FiChevronDown,
  FiFileText,
  FiHome,
  FiMaximize2,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from 'react-icons/fi'
import { useImages } from '../context/useImages'

const pageTitles = {
  '/file-manager/dashboard': 'Dashboard',
  '/file-manager/images': 'Image',
  '/file-manager/videos': 'Video',
  '/file-manager/documents': 'Document',
  '/file-manager/all-files': 'All Files',
  '/file-manager/trash': 'Trash',
  '/help': 'Help',
  '/sign-out': 'Sign Out',
}

const crumbs = [
  { label: 'Home', icon: FiHome },
  { label: 'Pages', icon: FiFileText },
  { label: 'Elements', icon: FiBookmark },
]

const fontOptions = [
  { label: 'Small font size', size: 14, textClass: 'text-[14px]' },
  { label: 'Default font size', size: 16, textClass: 'text-[16px]' },
  { label: 'Large font size', size: 18, textClass: 'text-[18px]' },
]

export function Navbar({
  interfaceFontSize,
  isSidebarCollapsed,
  onFontSizeChange,
  onToggleSidebar,
}) {
  const { activeRoute, searchTerm, setSearchTerm } = useImages()
  const title = pageTitles[activeRoute] ?? 'Dashboard'
  const ToggleIcon = isSidebarCollapsed ? FiArrowRight : FiArrowLeft

  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-slate-100 bg-white px-4 shadow-[0_1px_0_rgba(15,23,42,0.03)] sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#4355e8] text-sm text-white shadow-sm transition hover:bg-[#3443ca] focus:outline-none focus:ring-2 focus:ring-[#4355e8]/30"
          type="button"
          aria-label={isSidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
          onClick={onToggleSidebar}
        >
          <ToggleIcon aria-hidden="true" />
        </button>

        <span className="hidden text-xs font-medium text-slate-500 sm:inline">{title}</span>
        <span className="hidden h-5 w-px bg-slate-100 sm:inline" aria-hidden="true" />

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {crumbs.map((crumb, index) => {
            const Icon = crumb.icon
            const isActive = index === 0

            return (
              <span
                className={`flex items-center gap-2 border-b-2 py-[17px] text-sm font-medium ${
                  isActive
                    ? 'border-[#4355e8] text-[#4355e8]'
                    : 'border-transparent text-slate-500'
                }`}
                key={crumb.label}
              >
                <Icon className="text-base" aria-hidden="true" />
                {crumb.label}
              </span>
            )
          })}
        </nav>
      </div>

      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-2 text-slate-600 md:flex" aria-label="Font size">
          {fontOptions.map((option) => {
            const isActive = interfaceFontSize === option.size

            return (
              <button
                className={`flex size-8 items-center justify-center rounded font-semibold leading-none transition ${
                  option.textClass
                } ${
                  isActive
                    ? 'bg-[#4355e8] text-white'
                    : 'bg-transparent text-slate-600 hover:bg-slate-50 hover:text-[#4355e8]'
                }`}
                key={option.size}
                type="button"
                aria-label={option.label}
                aria-pressed={isActive}
                onClick={() => onFontSizeChange(option.size)}
              >
                A
              </button>
            )
          })}
        </div>

        <label className="relative hidden w-44 items-center lg:flex xl:w-48">
          <span className="sr-only">Search files</span>
          <input
            className="h-9 w-full rounded border border-slate-100 bg-white pl-4 pr-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#4355e8]/40 focus:ring-4 focus:ring-[#4355e8]/10"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <FiSearch className="absolute right-3 text-lg text-slate-500" aria-hidden="true" />
        </label>

        <NavDropdown label="Cart" icon={FiShoppingCart} hasDot>
          <strong className="text-sm text-slate-950">Cart</strong>
          <p className="mt-1 text-sm text-slate-500">No pending file actions.</p>
        </NavDropdown>

        <NavDropdown label="Notifications" icon={FiBell}>
          <strong className="text-sm text-slate-950">Notifications</strong>
          <p className="mt-1 text-sm text-slate-500">File manager is synced locally.</p>
        </NavDropdown>

        <details className="group relative">
          <summary className="flex size-8 cursor-pointer list-none items-center justify-center rounded-full bg-[#4355e8] text-white marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Profile menu</span>
            <FiUser aria-hidden="true" />
            <FiChevronDown
              className="absolute -right-1 -bottom-1 rounded-full bg-white text-xs text-[#4355e8] transition group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="absolute right-0 top-11 z-30 grid w-44 gap-2 rounded bg-white p-4 text-sm text-slate-600 shadow-[0_16px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
            <a className="hover:text-[#4355e8]" href="#profile">
              Profile
            </a>
            <a className="hover:text-[#4355e8]" href="#privacy">
              Privacy Settings
            </a>
            <a className="hover:text-[#4355e8]" href="#logout">
              Logout
            </a>
          </div>
        </details>

        <button
          className="hidden size-8 items-center justify-center rounded-full bg-[#4355e8] text-white transition hover:bg-[#3443ca] sm:flex"
          type="button"
          aria-label="Fullscreen"
        >
          <FiMaximize2 aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

function NavDropdown({ children, hasDot = false, icon: Icon, label }) {
  return (
    <details className="group relative">
      <summary className="relative flex size-8 cursor-pointer list-none items-center justify-center rounded-full bg-[#4355e8] text-white marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="sr-only">{label}</span>
        <Icon aria-hidden="true" />
        {hasDot ? (
          <span className="absolute right-1 top-1 size-1.5 rounded-full bg-orange-500 ring-2 ring-white" />
        ) : null}
      </summary>
      <div className="absolute right-0 top-11 z-30 w-56 rounded bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
        {children}
      </div>
    </details>
  )
}
