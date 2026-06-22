import { NavLink } from 'react-router-dom'
import {
  FiArchive,
  FiGrid,
  FiHelpCircle,
  FiImage,
  FiLogOut,
  FiShoppingCart,
  FiTrash2,
  FiUser,
  FiVideo,
  FiVolume2,
  FiFileText,
} from 'react-icons/fi'

const navGroups = [
  {
    label: 'File Manager',
    items: [{ label: 'Dashboard', to: '/file-manager/dashboard', icon: FiGrid }],
  },
  {
    label: 'Pages',
    items: [
      { label: 'Image', to: '/file-manager/images', icon: FiImage },
      { label: 'Video', to: '/file-manager/videos', icon: FiVideo },
      { label: 'Document', to: '/file-manager/documents', icon: FiFileText },
      { label: 'All Files', to: '/file-manager/all-files', icon: FiArchive, badge: '21' },
      { label: 'Trash', to: '/file-manager/trash', icon: FiTrash2 },
    ],
  },
  {
    label: 'Other',
    items: [
      { label: 'Sign Out', to: '/sign-out', icon: FiLogOut },
      { label: 'Help', to: '/help', icon: FiHelpCircle },
    ],
  },
]

export function Sidebar({ isCollapsed }) {
  return (
    <aside
      className={`shrink-0 overflow-hidden border-r border-slate-100 bg-white transition-[width] duration-300 ${
        isCollapsed ? 'w-[4.5rem]' : 'w-56'
      }`}
      aria-label={isCollapsed ? 'Collapsed sidebar navigation' : 'Sidebar navigation'}
    >
      <div className={`flex h-full flex-col ${isCollapsed ? 'w-[4.5rem]' : 'w-56'}`}>
        <div
          className={`flex h-14 items-center border-b border-slate-100 px-4 ${
            isCollapsed ? 'justify-center' : 'gap-3'
          }`}
        >
          <div className="relative size-8 text-[#4355e8]">
            <span className="absolute left-1 top-3 h-1.5 w-7 rotate-45 rounded-full bg-current" />
            <span className="absolute left-1 top-3 h-1.5 w-7 -rotate-45 rounded-full bg-current" />
            <span className="absolute left-3 top-1 h-2 w-2 rounded-full bg-current" />
            <span className="absolute bottom-1 left-3 h-2 w-2 rounded-full bg-current" />
          </div>
          {isCollapsed ? null : (
            <span className="text-xl font-semibold tracking-normal text-slate-950">Hope UI</span>
          )}
        </div>

        <div
          className={`border-b border-slate-100 text-center ${
            isCollapsed ? 'px-3 py-4' : 'px-5 py-5'
          }`}
        >
          <div
            className={`mx-auto flex items-center justify-center rounded-lg border border-[#4355e8] bg-[#eef2ff] p-1 ${
              isCollapsed ? 'size-11' : 'mb-3 size-20'
            }`}
          >
            <div className="flex size-full items-end justify-center overflow-hidden rounded-md bg-gradient-to-br from-slate-200 via-indigo-100 to-blue-100">
              <FiUser
                className={`${isCollapsed ? 'mb-1 text-2xl' : 'mb-2 text-5xl'} text-[#4355e8]`}
                aria-hidden="true"
              />
            </div>
          </div>
          {isCollapsed ? null : (
            <>
              <p className="text-sm font-medium text-slate-950">Elon musk</p>
              <p className="mt-2 text-sm text-[#4355e8]">@musk</p>

              <div className="mt-5 flex justify-center gap-4">
                <RoundAction icon={FiShoppingCart} label="Cart" />
                <RoundAction icon={FiVolume2} label="Audio" />
                <RoundAction icon={FiUser} label="Profile" dot />
              </div>
            </>
          )}
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto py-3">
          {navGroups.map((group) => (
            <div className="border-b border-slate-100 py-3 last:border-b-0" key={group.label}>
              {isCollapsed ? (
                <p className="sr-only">{group.label}</p>
              ) : (
                <p className="mb-3 px-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-slate-700">
                  {group.label}
                </p>
              )}
              <div className="grid gap-1">
                {group.items.map((item) => (
                  <SidebarLink isCollapsed={isCollapsed} item={item} key={item.to} />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

function SidebarLink({ isCollapsed, item }) {
  const Icon = item.icon

  return (
    <NavLink
      className={({ isActive }) =>
        `relative flex items-center text-sm font-medium transition ${
          isCollapsed ? 'h-11 justify-center px-0' : 'h-9 gap-3 px-6'
        } ${
          isActive ? 'text-[#4355e8]' : 'text-slate-500 hover:text-[#4355e8]'
        }`
      }
      to={item.to}
      title={item.label}
      aria-label={item.label}
    >
      {({ isActive }) => (
        <>
          <span
            className={`absolute left-0 w-1 rounded-r-full transition ${
              isCollapsed ? 'h-8' : 'h-9'
            } ${
              isActive ? 'bg-[#4355e8]' : 'bg-transparent'
            }`}
          />
          <Icon
            className={`${isCollapsed ? 'text-lg' : 'text-base'} ${
              isActive ? 'text-[#4355e8]' : 'text-slate-400'
            }`}
          />
          {isCollapsed ? null : <span className="min-w-0 flex-1 truncate">{item.label}</span>}
          {item.badge && !isCollapsed ? (
            <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[0.65rem] font-bold leading-none text-white">
              {item.badge}
            </span>
          ) : null}
          {item.badge && isCollapsed ? (
            <span className="absolute right-4 top-2 size-2 rounded-full bg-orange-500 ring-2 ring-white" />
          ) : null}
        </>
      )}
    </NavLink>
  )
}

function RoundAction({ dot = false, icon: Icon, label }) {
  return (
    <button
      className="relative flex size-7 items-center justify-center rounded-full bg-[#4355e8] text-sm text-white transition hover:bg-[#3443ca]"
      type="button"
      aria-label={label}
    >
      <Icon aria-hidden="true" />
      {dot ? (
        <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-orange-500 ring-2 ring-white" />
      ) : null}
    </button>
  )
}
