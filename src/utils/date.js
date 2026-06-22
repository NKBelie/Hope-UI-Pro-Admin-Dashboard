export function formatCreatedDate(value) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

export function formatRelativeTime(value) {
  const date = new Date(value)
  const seconds = Math.max(0, Math.round((Date.now() - date.getTime()) / 1000))

  if (seconds < 60) {
    return 'just now'
  }

  const units = [
    ['year', 31536000],
    ['month', 2592000],
    ['week', 604800],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
  ]

  const [unit, size] = units.find(([, unitSeconds]) => seconds >= unitSeconds)
  const amount = Math.floor(seconds / size)

  return `${amount} ${unit}${amount === 1 ? '' : 's'} ago`
}
