import { useState } from 'react'
import { sunDown1856, deathbed1892, type PoemSection } from '../../content/poemFullText'

type Version = '1856' | '1892'

function PoemBody({ sections }: { sections: PoemSection[] }) {
  return (
    <div className="poem-body">
      {sections.map((section, si) => (
        <div className="poem-section" key={si}>
          {section.number ? <p className="poem-section__number">{section.number}</p> : null}
          {section.stanzas.map((stanza, sti) => (
            <p className="poem-stanza" key={sti}>
              {stanza.map((line, li) => (
                <span key={li}>
                  {line}
                  {li < stanza.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

export function FullPoemText() {
  const [open, setOpen] = useState(false)
  const [version, setVersion] = useState<Version>('1892')

  return (
    <div className="full-poem">
      <button
        type="button"
        className="button button--ghost full-poem__toggle"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Hide the full poem' : 'Read the full poem'}
      </button>

      {open ? (
        <div className="full-poem__content">
          <div className="full-poem__version-tabs" role="tablist" aria-label="Poem edition">
            <button
              type="button"
              role="tab"
              aria-selected={version === '1892'}
              className={`chip${version === '1892' ? ' is-active' : ''}`}
              onClick={() => setVersion('1892')}
            >
              1891&ndash;92 &ldquo;Deathbed&rdquo; edition
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={version === '1856'}
              className={`chip${version === '1856' ? ' is-active' : ''}`}
              onClick={() => setVersion('1856')}
            >
              1856 &ldquo;Sun-Down Poem&rdquo;
            </button>
          </div>

          <p className="full-poem__note">
            {version === '1892'
              ? 'The final published version, first published 1891–92, with the nine numbered sections Whitman settled on.'
              : "The poem as it first appeared, untitled sections, before Whitman gave it its familiar title in 1860 and revised its wording through later editions."}
          </p>

          <PoemBody sections={version === '1892' ? deathbed1892 : sunDown1856} />
        </div>
      ) : null}
    </div>
  )
}
