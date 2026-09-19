export default function StatusBadge({ status }) {
  if (status === 'in-testing') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-secondary-fixed px-space-sm py-1 font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
        <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> In-Testing
      </span>
    )
  }
  if (status === 'oos') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-error px-space-sm py-1 font-label-sm text-label-sm font-bold text-on-error shadow-sm">
        <span className="material-symbols-outlined text-[13px]">error</span> OOS Alert
      </span>
    )
  }
  if (status === 'verification') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-primary-fixed px-space-sm py-1 font-label-sm text-label-sm font-semibold text-on-primary-fixed">
        <span className="material-symbols-outlined text-[13px]">pending</span> Verification
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-surface-container px-space-sm py-1 font-label-sm text-label-sm font-semibold text-primary">
      <span className="material-symbols-outlined text-[13px] text-primary">verified</span> Approved
    </span>
  )
}
