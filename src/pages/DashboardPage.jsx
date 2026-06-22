import {
  FiBriefcase,
  FiCheck,
  FiCloud,
  FiFileText,
  FiHeart,
  FiImage,
  FiMic,
  FiPenTool,
  FiPlay,
  FiStar,
  FiTrash2,
  FiUploadCloud,
  FiVideo,
  FiX,
} from 'react-icons/fi'
import { SiDropbox, SiGoogledrive } from 'react-icons/si'
import { FolderCard } from '../components/FolderCard'

const folders = [
  { title: 'Image', items: '246 Items', icon: FiImage },
  { title: 'Video', items: '246 Items', icon: FiVideo },
  { title: 'Documents', items: '246 Items', icon: FiFileText },
  { title: 'Audio', items: '246 Items', icon: FiMic },
  { title: 'Movies', items: '246 Items', icon: FiPlay },
  { title: 'Assignment', items: '246 Items', icon: FiPenTool },
  { title: 'Ui-Kit', items: '246 Items', icon: FiBriefcase },
  { title: 'Design', items: '246 Items', icon: FiStar },
]

const storageRows = [
  { label: 'Documents', count: '5,674s', icon: FiFileText, color: 'bg-[#4355e8]', width: 'w-[46%]' },
  { label: 'Videos', count: '1,624', icon: FiVideo, color: 'bg-emerald-600', width: 'w-[68%]' },
  { label: 'Images', count: '5,515', icon: FiImage, color: 'bg-orange-500', width: 'w-[35%]' },
]

const uploads = [
  { name: 'Onboarding.zip', size: '23 mb', width: 'w-[20%]' },
  { name: 'Web Design.zip', size: '45 mb', width: 'w-[48%]' },
  { name: 'Example.zar', size: '90 mb', width: 'w-[88%]' },
  { name: 'Web Design.zip', size: '45 mb', width: 'w-[68%]' },
  { name: 'Designing.pptx', size: '73 mb', width: 'w-[74%]' },
  { name: 'Web Design.zip', size: '45 mb', width: 'w-[48%]' },
  { name: 'Example.zar', size: '90 mb', width: 'w-[88%]' },
  { name: 'Designing.pptx', size: '73 mb', width: 'w-[74%]' },
]

const recentFiles = [
  {
    name: 'Marcus Family.jpg',
    modified: '16 Oct,11:23m',
    size: '12 MB',
    icon: FiBriefcase,
  },
  {
    name: 'Work.Doc',
    modified: '20 Nov,12:40pm',
    size: '4.3 MB',
    icon: FiFileText,
  },
  {
    name: 'Apha.mkv',
    modified: '08 Oct,05:45pm',
    size: '10 MB',
    icon: FiVideo,
  },
  {
    name: 'SVG Logo.png',
    modified: '04 Jul,10:30pm',
    size: '9 MB',
    icon: FiImage,
  },
]

const cloudStorage = [
  {
    name: 'Drop Box',
    icon: SiDropbox,
    used: '32gb',
    total: '48gb',
    width: 'w-[55%]',
    color: 'text-[#0061ff]',
  },
  {
    name: 'One Drive',
    icon: FiCloud,
    used: '10gb',
    total: '48gb',
    width: 'w-[80%]',
    color: 'text-[#1557b0]',
  },
  {
    name: 'Google Drive',
    icon: SiGoogledrive,
    used: '15gb',
    total: '48gb',
    width: 'w-[20%]',
    color: 'text-emerald-600',
  },
]

export function DashboardPage() {
  return (
    <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(320px,520px)]">
      <section className="min-w-0">
        <h1 className="mb-8 text-2xl font-semibold text-slate-950">Your Folders</h1>
        <div className="grid gap-7 sm:grid-cols-2 2xl:grid-cols-4">
          {folders.map((folder) => (
            <FolderCard key={folder.title} {...folder} />
          ))}
        </div>
      </section>

      <StorageDetails />

      <section className="rounded bg-white p-5 shadow-[0_18px_34px_rgba(15,23,42,0.04)] xl:col-span-1">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-slate-950">Activity Chart</h2>
          <button className="text-sm font-medium text-slate-500" type="button">
            This year
          </button>
        </div>
        <ActivityChart />
      </section>

      <section className="rounded bg-white p-5 shadow-[0_18px_34px_rgba(15,23,42,0.04)]">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-slate-950">Uploading on Drive</h2>
          <FiUploadCloud className="text-xl text-[#4355e8]" aria-hidden="true" />
        </div>
        <div className="grid gap-5">
          {uploads.map((upload, index) => (
            <div className="grid grid-cols-[minmax(0,1fr)_8.5rem_3rem_1.5rem] items-center gap-4" key={`${upload.name}-${index}`}>
              <p className="truncate text-sm font-medium text-slate-500">{upload.name}</p>
              <div className="h-1 rounded-full bg-[#dfe5ff]">
                <div className={`h-full rounded-full bg-[#4355e8] ${upload.width}`} />
              </div>
              <span className="text-sm text-slate-500">{upload.size}</span>
              <button
                className="flex size-5 items-center justify-center rounded-md bg-[#b9c5ff] text-xs font-bold text-[#4355e8]"
                type="button"
                aria-label={`Cancel ${upload.name}`}
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-7 xl:col-span-2 xl:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.72fr)_minmax(260px,0.72fr)]">
        <RecentlyAddedFiles />
        <CloudStorage />
        <UpgradeStorage />
      </section>

      <footer className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between xl:col-span-2">
        <div className="flex gap-4">
          <a className="font-medium text-[#4355e8] hover:text-[#3443ca]" href="#privacy">
            Privacy Policy
          </a>
          <a className="font-medium text-[#4355e8] hover:text-[#3443ca]" href="#terms">
            Terms of Use
          </a>
        </div>
        <p>
          &copy; Hope UI, Made with <FiHeart className="inline text-slate-500" aria-hidden="true" /> by{' '}
          <a className="font-medium text-[#4355e8] hover:text-[#3443ca]" href="#iqonic">
            IQONIC Design.
          </a>
        </p>
      </footer>
    </div>
  )
}

function StorageDetails() {
  return (
    <section className="rounded bg-white p-5 shadow-[0_18px_34px_rgba(15,23,42,0.04)]">
      <h2 className="text-xl font-semibold text-slate-950">Storage Details</h2>
      <div className="relative mx-auto mt-8 flex h-48 max-w-80 items-end justify-center">
        <svg className="absolute inset-x-0 top-0 mx-auto h-44 w-80 max-w-full" viewBox="0 0 320 180" role="img" aria-label="75GB used of 100GB">
          <path
            d="M52 138a108 108 0 0 1 216 0"
            fill="none"
            stroke="#e8edff"
            strokeLinecap="round"
            strokeWidth="38"
          />
          <path
            d="M52 138a108 108 0 0 1 216 0"
            fill="none"
            stroke="#5268ee"
            strokeDasharray="246 340"
            strokeLinecap="round"
            strokeWidth="38"
          />
        </svg>
        <div className="relative pb-5 text-center">
          <p className="text-4xl font-medium text-slate-300">75GB</p>
          <p className="mt-2 text-sm font-semibold text-[#4355e8]">used of 100GB</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6">
        {storageRows.map((row) => {
          const Icon = row.icon

          return (
            <div className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4" key={row.label}>
              <span className="flex size-11 items-center justify-center rounded bg-[#dfe5ff] text-[#4355e8]">
                <Icon aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-slate-950">{row.label}</p>
                  <span className="text-sm text-slate-500">{row.count}</span>
                </div>
                <div className="h-2 rounded-full bg-[#dfe5ff]">
                  <div className={`h-full rounded-full ${row.color} ${row.width}`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function ActivityChart() {
  return (
    <div className="h-72 w-full overflow-hidden">
      <svg className="h-full w-full" viewBox="0 0 900 300" preserveAspectRatio="none" role="img" aria-label="Storage activity line chart">
        {[40, 80, 120, 160, 200, 240].map((y, index) => (
          <g key={y}>
            <line x1="75" x2="885" y1={y} y2={y} stroke="#e5e7eb" strokeDasharray="4 5" />
            <text x="8" y={y + 4} fill="#64748b" fontSize="12">
              {90 - index * 10} GB
            </text>
          </g>
        ))}
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'].map((month, index) => (
          <text
            fill="#64748b"
            fontSize="12"
            key={month}
            textAnchor="middle"
            x={75 + index * 135}
            y="282"
          >
            {month}
          </text>
        ))}
        <path
          d="M75 120 C145 120 162 220 222 220 C282 220 298 40 360 40 C430 40 446 232 514 232 C580 232 612 120 675 120 C742 120 748 240 802 240 C850 240 848 80 884 80"
          fill="none"
          stroke="#5268ee"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
    </div>
  )
}

function RecentlyAddedFiles() {
  return (
    <section className="rounded bg-white shadow-[0_18px_34px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-5">
        <h2 className="text-xl font-semibold text-slate-950">Recently added files</h2>
        <a className="text-sm font-medium text-[#4355e8] hover:text-[#3443ca]" href="#view-all">
          View all
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-640px text-left text-sm">
          <thead className="border-b border-slate-100 text-slate-500">
            <tr>
              <th className="px-5 py-4 font-semibold">Files</th>
              <th className="px-5 py-4 font-semibold">Last Modified</th>
              <th className="px-5 py-4 font-semibold">Size</th>
              <th className="px-5 py-4 text-right font-semibold">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {recentFiles.map((file) => {
              const Icon = file.icon

              return (
                <tr className="border-b border-slate-50 last:border-b-0" key={file.name}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#4355e8]">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="font-medium text-slate-950">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-slate-400">{file.modified}</td>
                  <td className="px-5 py-4 text-[#4355e8]">{file.size}</td>
                  <td className="px-5 py-4 text-right">
                    <button
                      className="inline-flex size-8 items-center justify-center rounded text-red-400 transition hover:bg-red-50 hover:text-red-500"
                      type="button"
                      aria-label={`Remove ${file.name}`}
                    >
                      <FiTrash2 aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function CloudStorage() {
  return (
    <section className="rounded bg-white p-5 shadow-[0_18px_34px_rgba(15,23,42,0.04)]">
      <h2 className="text-xl font-semibold text-slate-950">Cloud Storage</h2>
      <div className="mt-7 grid gap-8">
        {cloudStorage.map((storage) => {
          const Icon = storage.icon

          return (
            <div key={storage.name}>
              <div className="mb-3 flex items-center gap-3">
                <Icon className={`text-xl ${storage.color}`} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-950">{storage.name}</h3>
              </div>
              <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-950">
                <span>{storage.used}</span>
                <span>{storage.total}</span>
              </div>
              <div className="h-2 rounded-full bg-[#dfe5ff]">
                <div className={`h-full rounded-full bg-[#4355e8] ${storage.width}`} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function UpgradeStorage() {
  return (
    <section className="flex min-h-80 flex-col items-center justify-center rounded bg-white p-5 text-center shadow-[0_18px_34px_rgba(15,23,42,0.04)]">
      <div className="relative h-38 w-56">
        <div className="absolute left-8 top-5 h-24 w-40 -rotate-2 rounded bg-[#314276]" />
        <div className="absolute left-4 top-0 h-28 w-44 rounded-t-lg rounded-b bg-[#4c72da]">
          <div className="absolute left-0 top-0 h-8 w-20 -translate-y-3 rounded-t-lg bg-[#5d82e8]" />
        </div>
        <div className="absolute bottom-0 left-0 flex size-20 items-center justify-center rounded-[1.4rem] border-4 border-[#0f234d] bg-[#1e3a74] text-4xl text-[#70a9ff] shadow-[0_18px_34px_rgba(15,23,42,0.22)]">
          <FiCheck aria-hidden="true" />
        </div>
      </div>
      <h2 className="mt-4 max-w-xs text-lg font-semibold leading-6 text-slate-950">
        Upgrade to Special Offer For Unlimited Storage
      </h2>
      <button
        className="mt-4 rounded bg-[#4355e8] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#3443ca]"
        type="button"
      >
        Buy storage
      </button>
    </section>
  )
}
