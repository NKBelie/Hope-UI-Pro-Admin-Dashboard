export function FilePageHeader({ actionIcon: ActionIcon, actionLabel, onAction, title }) {
  return (
    <section className="mb-5 flex min-h-17 items-center justify-between gap-4 border-b border-slate-100 pb-4">
      <h1 className="text-xl font-semibold text-slate-950">{title}</h1>
      <button
        className="inline-flex h-10 items-center justify-center gap-3 rounded bg-[#4355e8] px-5 text-sm font-semibold text-white transition hover:bg-[#3443ca] focus:outline-none focus:ring-4 focus:ring-[#4355e8]/20"
        type="button"
        onClick={onAction}
      >
        <ActionIcon aria-hidden="true" />
        {actionLabel}
      </button>
    </section>
  )
}
