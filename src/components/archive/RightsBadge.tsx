import type { RightsStatus } from '../../content/voices'

const LABELS: Record<RightsStatus, string> = {
  'public-domain': 'Public domain',
  'permission-needed': 'Permission needed for reuse',
  'brief-quotation': 'Brief quotation — rights reserved',
  'link-only': 'Link only',
  'student-owned': 'Student-owned',
  unknown: 'Rights unknown',
}

export function RightsBadge({ status }: { status: RightsStatus }) {
  return <span className={`rights-badge rights-badge--${status}`}>{LABELS[status]}</span>
}
