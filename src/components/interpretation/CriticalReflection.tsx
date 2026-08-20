import { Fragment } from 'react'
import {
  criticalReflectionBlocks,
  criticalReflectionNotes,
  criticalReflectionTitle,
} from '../../content/interpretation'

export function CriticalReflection() {
  return (
    <div className="critical-reflection">
      <h3>{criticalReflectionTitle}</h3>
      {criticalReflectionBlocks.map((block, i) =>
        block.type === 'quote' ? (
          <blockquote key={i} className="pull-quote critical-reflection__quote">
            &ldquo;
            {block.lines?.map((line, j) => (
              <Fragment key={j}>
                {j > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
            &rdquo;
            {block.source ? <cite>{block.source}</cite> : null}
          </blockquote>
        ) : (
          <p key={i}>{block.text}</p>
        ),
      )}
      <ol className="critical-reflection__notes">
        {criticalReflectionNotes.map((note, i) => (
          <li key={i}>
            {note.number ? <span className="critical-reflection__note-number">[{note.number}]</span> : null}{' '}
            <a href={note.url} target="_blank" rel="noreferrer">
              {note.citation}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}
