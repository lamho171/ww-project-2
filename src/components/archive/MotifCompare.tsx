import { useState } from 'react'
import { motifIndex } from '../../content/motifIndex'
import { voices, type Era } from '../../content/voices'

const ERA_LABELS: Record<Era, string> = {
  nineteenth: '1850s–1890s',
  twentieth: '1900s–2000s',
  'twenty-first': '2000s–present',
}

const ERA_ORDER: Era[] = ['nineteenth', 'twentieth', 'twenty-first']

export function MotifCompare() {
  const [activeMotifId, setActiveMotifId] = useState(motifIndex[0].id)
  const activeMotif = motifIndex.find((m) => m.id === activeMotifId)!

  const matchesByEra = ERA_ORDER.map((era) => ({
    era,
    entry: voices.find((v) => v.era === era && v.motifs.includes(activeMotifId)),
  }))

  return (
    <div className="motif-compare">
      <div className="threads__selector" role="tablist" aria-label="Select a motif to compare across eras">
        {motifIndex.map((motif) => (
          <button
            key={motif.id}
            type="button"
            role="tab"
            aria-selected={motif.id === activeMotifId}
            className={`chip${motif.id === activeMotifId ? ' is-active' : ''}`}
            onClick={() => setActiveMotifId(motif.id)}
          >
            {motif.label}
          </button>
        ))}
      </div>

      <div className="motif-compare__panel">
        <p className="threads__description">{activeMotif.description}</p>
        <ol className="threads__trace">
          {matchesByEra.map(({ era, entry }) => (
            <li key={era}>
              <span className="threads__trace-era">{ERA_LABELS[era]}</span>
              {entry ? (
                <>
                  <p className="motif-compare__person">
                    {entry.person}, <cite>{entry.title}</cite>
                  </p>
                  <a href={`#voice-${entry.id}`} className="motif-compare__jump">
                    View this entry &rarr;
                  </a>
                </>
              ) : (
                <p className="motif-compare__none">No verified entry from this era carries this motif yet.</p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
