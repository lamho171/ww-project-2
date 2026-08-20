import type { ArchiveEntry } from '../../content/voices'
import { getLocation } from '../../content/locations'
import { RightsBadge } from './RightsBadge'

const VOICE_TYPE_LABELS: Record<ArchiveEntry['voiceType'], string> = {
  poem: 'Poem',
  diary: 'Diary',
  memoir: 'Memoir / essay',
  'oral-history': 'Oral history',
  review: 'Review',
  forum: 'Forum post',
  photo: 'Photograph',
  video: 'Video',
  fieldwork: 'Original fieldwork',
  journalism: 'Journalism',
}

interface ArchiveCardProps {
  entry: ArchiveEntry
}

export function ArchiveCard({ entry }: ArchiveCardProps) {
  const location = getLocation(entry.location)

  return (
    <article className="archive-card" id={`voice-${entry.id}`}>
      {entry.mediaUrl ? (
        <img
          className="archive-card__media"
          src={entry.mediaUrl}
          alt={entry.mediaAlt ?? ''}
          loading="lazy"
          width={entry.mediaWidth}
          height={entry.mediaHeight}
        />
      ) : null}

      <div className="archive-card__body">
        <div className="archive-card__tags">
          <span className="archive-card__voice-type">{VOICE_TYPE_LABELS[entry.voiceType]}</span>
        </div>

        <p className="archive-card__date">{entry.dateDisplay}</p>
        <h4 className="archive-card__title">
          {entry.person} <span className="archive-card__title-sep">&mdash;</span> {entry.title}
        </h4>
        <p className="archive-card__location">{location.name}</p>

        <p className="archive-card__summary">{entry.summary}</p>

        {entry.excerptVerified && entry.excerpt ? (
          <blockquote className="archive-card__excerpt">&ldquo;{entry.excerpt}&rdquo;</blockquote>
        ) : null}

        <p className="archive-card__whitman">{entry.whitmanConnection}</p>

        <div className="archive-card__footer">
          <RightsBadge status={entry.rightsStatus} />
          {entry.sourceUrl ? (
            <a className="archive-card__source" href={entry.sourceUrl} target="_blank" rel="noreferrer">
              {entry.sourceTitle || 'Source'}
            </a>
          ) : (
            <span className="archive-card__source archive-card__source--pending">{entry.sourceTitle}</span>
          )}
        </div>
        {entry.notes ? <p className="archive-card__notes">{entry.notes}</p> : null}
      </div>
    </article>
  )
}
