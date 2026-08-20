import { sources } from '../../content/sources'

export function WorksCited() {
  return (
    <ol className="works-cited">
      {sources.map((source) => (
        <li key={source.id} className={source.verified ? '' : 'is-unverified'}>
          <span className="works-cited__citation">{source.citation}</span>
          {source.url ? (
            <>
              {' '}
              <a href={source.url} target="_blank" rel="noreferrer">
                Source
              </a>
            </>
          ) : null}
          {source.note ? <span className="works-cited__note"> {source.note}</span> : null}
        </li>
      ))}
    </ol>
  )
}
