import type { Location } from '../../content/locations'
import { getVoicesByLocation } from '../../content/voices'

interface LocationPanelProps {
  location: Location
}

export function LocationPanel({ location }: LocationPanelProps) {
  const connectedVoices = getVoicesByLocation(location.id)

  return (
    <div className="location-panel" role="region" aria-label={`${location.name} details`}>
      <h3 id="location-panel-heading">{location.name}</h3>
      <p className="location-panel__subtitle">{location.shortLabel}</p>
      {location.image ? (
        <figure className="location-panel__image">
          <img src={location.image.src} alt={location.image.alt} loading="lazy" />
          <figcaption>{location.image.caption}</figcaption>
        </figure>
      ) : null}
      <p>{location.blurb}</p>
      {location.todo ? (
        <p className="content-todo-inline">[SOURCE TO VERIFY] {location.todo}</p>
      ) : null}

      <p className="layer-kicker">
        {connectedVoices.length > 0
          ? `Voices connected to this place (${connectedVoices.length})`
          : 'No archive voices tagged to this place yet'}
      </p>
      {connectedVoices.length > 0 ? (
        <ul className="location-panel__voices">
          {connectedVoices.map((v) => (
            <li key={v.id}>
              <a href={`#voice-${v.id}`}>
                {v.person} &mdash; <cite>{v.title}</cite>
              </a>
              <span className="location-panel__voice-date"> ({v.dateDisplay})</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
