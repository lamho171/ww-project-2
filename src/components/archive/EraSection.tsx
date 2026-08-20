import type { ArchiveEntry } from '../../content/voices'
import { ArchiveCard } from './ArchiveCard'

interface TransitionImage {
  src: string
  alt: string
  caption?: string
}

interface EraSectionProps {
  eyebrow: string
  title: string
  intro: string
  transition?: string
  transitionImage?: TransitionImage
  entries: ArchiveEntry[]
}

export function EraSection({ eyebrow, title, intro, transition, transitionImage, entries }: EraSectionProps) {
  return (
    <div className="era-section">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p className="section-intro">{intro}</p>

      <div className="archive-grid">
        {entries.map((entry) => (
          <ArchiveCard key={entry.id} entry={entry} />
        ))}
      </div>

      {transition ? <p className="era-section__transition">{transition}</p> : null}
      {transitionImage ? (
        <figure className="era-section__transition-image">
          <img src={transitionImage.src} alt={transitionImage.alt} loading="lazy" />
          {transitionImage.caption ? <figcaption>{transitionImage.caption}</figcaption> : null}
        </figure>
      ) : null}
    </div>
  )
}
