import { ferryLifecycle } from '../../content/ferryLifecycle'

export function FerryLifecycleTimeline() {
  return (
    <div className="ferry-timeline-wrap">
      <ol className="ferry-timeline">
        {ferryLifecycle.map((milestone) => (
          <li key={milestone.year} className="ferry-timeline__item">
            <span className="ferry-timeline__year">{milestone.year}</span>
            <div className="ferry-timeline__content">
              <p>
                {milestone.text}
                {!milestone.verified ? <span className="content-todo-inline"> [SOURCE TO VERIFY]</span> : null}
              </p>
              {milestone.sourceNote ? <p className="ferry-timeline__source">{milestone.sourceNote}</p> : null}
            </div>
          </li>
        ))}
      </ol>
      <p className="ferry-timeline__source ferry-timeline__source--overall">
        Source:{' '}
        <a href="https://www.bkwaterfronthistory.org/story/mass-transit-brooklyn-style/" target="_blank" rel="noreferrer">
          Brooklyn Waterfront History, &ldquo;Mass Transit, Brooklyn Style.&rdquo;
        </a>{' '}
        &middot;{' '}
        <a href="https://whitmanarchive.org/item/per.00233" target="_blank" rel="noreferrer">
          Walt Whitman Archive
        </a>
      </p>
    </div>
  )
}
