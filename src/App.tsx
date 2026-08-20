import { Fragment, useState } from 'react'
import './App.css'
import { SkipLink } from './components/ui/SkipLink'
import { SectionHeading } from './components/ui/SectionHeading'
import { WorksCited } from './components/ui/WorksCited'
import { WhitmanMap } from './components/map/WhitmanMap'
import { LocationPanel } from './components/map/LocationPanel'
import { EraSection } from './components/archive/EraSection'
// Motif Index temporarily disabled — see the commented-out section below.
// import { MotifCompare } from './components/archive/MotifCompare'
import { FerryLifecycleTimeline } from './components/archive/FerryLifecycleTimeline'
import { CriticalReflection } from './components/interpretation/CriticalReflection'
import { ArchiveOfUnfinishedMeetings } from './components/interpretation/ArchiveOfUnfinishedMeetings'
import { FullPoemText } from './components/interpretation/FullPoemText'
import { getLocation } from './content/locations'
import { getVoicesByEra } from './content/voices'
import { landingIntro, prologue, artistStatement, initiativeLink } from './content/interpretation'
import { archiveIntro } from './content/archive'

function App() {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null)
  const selectedLocation = selectedLocationId ? getLocation(selectedLocationId) : null

  return (
    <>
      <SkipLink />

      <header className="site-header">
        <p className="site-title">Reincarnation in &ldquo;Crossing Brooklyn Ferry&rdquo;</p>
        <nav aria-label="Section navigation" className="section-nav">
          <a href="#prologue">Prologue</a>
          <a href="#ferry-lifecycle">Ferry Lifecycle</a>
          <a href="#archive-timeline">Archive</a>
          <a href="#contribute">Contribute</a>
          <a href="#map">Map</a>
          {/* <a href="#motif-index">Motifs</a> — temporarily disabled, see below */}
          <a href="#reflection">Reflection</a>
          <a href="#colophon">Sources</a>
        </nav>
      </header>

      <main id="main-content">
        <section id="opening" className="opening" aria-labelledby="opening-heading">
          <div className="opening__content">
            <figure className="whitman-portrait">
              <img
                src="/images/whitman-1854-engraving.jpg"
                alt="Steel engraving portrait of a young Walt Whitman in an open-collared shirt, one hand on his hip, gazing at the viewer."
                loading="lazy"
                width={1400}
                height={1834}
              />
              <figcaption>
                Walt Whitman, 1854. Engraving by Samuel Hollyer after a lost daguerreotype by
                Gabriel Harrison; frontispiece to the 1855 <cite>Leaves of Grass</cite>. Morgan
                Library &amp; Museum. Public domain.
              </figcaption>
            </figure>
            <p className="eyebrow">Walt Whitman and New York</p>
            <h1 id="opening-heading">{landingIntro.question}</h1>
            <p className="opening__subheading">{landingIntro.subheading}</p>
            {landingIntro.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <div className="paper-sheet">
          <section id="prologue" className="prologue-section" aria-labelledby="prologue-heading">
            <SectionHeading eyebrow={prologue.eyebrow} title={prologue.title} id="prologue-heading" />
            {prologue.paragraphs.map((p, i) => (
              <Fragment key={i}>
                <p>{p}</p>
                {i === 0 ? (
                  <blockquote className="pull-quote">
                    &ldquo;{prologue.quoteAfterFirstParagraph.text}&rdquo;
                    <cite>{prologue.quoteAfterFirstParagraph.source}</cite>
                  </blockquote>
                ) : null}
              </Fragment>
            ))}
            <blockquote className="pull-quote">
              &ldquo;{prologue.quote.text}&rdquo;
              <cite>{prologue.quote.source}</cite>
            </blockquote>
            <FullPoemText />
          </section>

          <section id="ferry-lifecycle" className="ferry-lifecycle-section" aria-labelledby="ferry-lifecycle-heading">
            <SectionHeading eyebrow="Interlude" title="Brooklyn Ferry History: The Ferry's Reincarnation" id="ferry-lifecycle-heading" />
            <p className="section-intro">
              Interestingly, the ferry itself went through reincarnation in a way, with a first life, a temporary death, and a rebirth. The timeline below summarizes the ferry's history.
            </p>
            <div className="ferry-lifecycle-layout">
              <FerryLifecycleTimeline />
              <figure className="ferry-lifecycle-image">
                <img
                  src="/images/south-street-seaport-c1900.jpg"
                  alt="Sepia-toned photograph of tall-masted sailing ships docked along South Street, with the Brooklyn Bridge visible in the distance."
                  loading="lazy"
                  width={1400}
                  height={1093}
                />
                <figcaption>
                  South Street and the Brooklyn Bridge, c. 1899&ndash;1924 &mdash; the bridge that
                  began the ferry&rsquo;s decline, photographed around the time Fulton Ferry service
                  was approaching its end. Detroit Photographic Company, Beinecke Library, Yale.
                  Public domain.
                </figcaption>
              </figure>
            </div>
          </section>

          <section id="archive-timeline" className="archive-timeline-section" aria-labelledby="archive-timeline-heading">
            <SectionHeading eyebrow="The Archive" title="Three Generations of the Crossing" id="archive-timeline-heading" />

            <EraSection
              eyebrow="First Life &middot; 1850s&ndash;1890s"
              title="The Everyday Crossing"
              intro="The ferry is necessary, crowded, social, laborious, and sometimes unexpectedly beautiful."
              transition="In 1883 the Brooklyn Bridge opens nearby, and the ferry's long decline begins."
              transitionImage={{
                src: '/images/brooklyn-bridge-1883.jpg',
                alt: 'Period engraving of pedestrians, horse-drawn carts, an elevated cable car, and a steam train all crossing the Brooklyn Bridge on its separate tiers, with the Manhattan skyline and harbor behind.',
                caption: 'The Brooklyn Bridge shortly after opening, 1883. Getty Images.',
              }}
              entries={getVoicesByEra('nineteenth')}
            />

            <div className="section-break-quote">
              <blockquote>
                &ldquo;Fifty years hence, others will see them as they cross, the sun half an hour high,&rdquo;
                <cite>Walt Whitman, &ldquo;Crossing Brooklyn Ferry&rdquo;</cite>
              </blockquote>
            </div>

            <EraSection
              eyebrow="Temporary Death &middot; 1924&ndash;2000"
              title="The Crossing Rises Above the Water"
              intro="When the ferry stopped, the crossing continued. The passengers rose above the East River, walking across Roebling’s bridge or riding trains beneath its promenade. They no longer stood at the rail of Whitman’s boat, but they carried forward the same routines and memories. The ferry had temporarily died."
              transition="Ferry service does not return to this landing until 1997&ndash;2011, decades later."
              entries={getVoicesByEra('twentieth')}
            />

            <div className="section-break-quote">
              <blockquote>
                &ldquo;A hundred years hence, or ever so many hundred years hence, others will see them,&rdquo;
                <cite>Walt Whitman, &ldquo;Crossing Brooklyn Ferry&rdquo;</cite>
              </blockquote>
            </div>

            <EraSection
              eyebrow="Return &middot; 2000s&ndash;Present"
              title="Commuter and Spectacle"
              intro="&ldquo;Flow on, river! flow with the flood-tide, and ebb with the ebb-tide!&rdquo; Behold! The ferry service returns!!! The crossing is now simultaneously a commute, a local habit, a visitor attraction, a skyline view, and a rediscovery of the city -- just like Whitman's original crossing in the 1850s (minus the concrete jungle of the Modern Big Apple). Despite being almost 200 years apart, the passengers are sharing the same experience of crossing the East River. Their reasons for crossing differ, but each passenger discovers that this ordinary journey can become something memorable as they relate to Whitman's crossing. In a way, the ferry has been reincarnated."
              entries={getVoicesByEra('twenty-first')}
            />
          </section>

          <section id="contribute" className="archive-section" aria-labelledby="contribute-heading">
            <SectionHeading eyebrow="Your Turn" title="Archive of Unfinished Meetings" id="contribute-heading" />
            {archiveIntro.map((p, i) => (
              <p key={i} className="section-intro">
                {p}
              </p>
            ))}
            <ArchiveOfUnfinishedMeetings />
          </section>

          <section id="map" className="map-section" aria-labelledby="map-heading">
            <SectionHeading eyebrow="Supplementary" title="Whitman&rsquo;s Connection Places" id="map-heading" />
            <p className="section-intro">
              Select a place to find out more information about the places Whitman would frequent between Mannahatta and Brooklyn.
            </p>
            <div className="map-layout">
              <WhitmanMap selectedId={selectedLocationId} onSelect={setSelectedLocationId} />
              <div className="map-layout__panel">
                {selectedLocation ? (
                  <LocationPanel location={selectedLocation} />
                ) : (
                  <p className="map-placeholder">Select a marker on the map to begin.</p>
                )}
              </div>
            </div>
          </section>

          {/* Motif Index — temporarily disabled, may be reused later.
          <section id="motif-index" className="motif-index-section" aria-labelledby="motif-index-heading">
            <SectionHeading
              eyebrow="The Same Experience in Another Body"
              title="Motif Index"
              id="motif-index-heading"
            />
            <p className="section-intro">
              Choose a motif to see one verified account from each era that carries it &mdash;
              without claiming these are the same person.
            </p>
            <MotifCompare />
          </section>
          */}

          <section id="reflection" className="reflection-section" aria-labelledby="reflection-heading">
            <SectionHeading eyebrow="Critical Reflection" title="Whitman, Buddhist Reincarnation and The Red Thread of Fate" id="reflection-heading" />
            <CriticalReflection />
          </section>

          <section id="colophon" className="colophon-section" aria-labelledby="colophon-heading">
            <SectionHeading eyebrow="Artist&rsquo;s Statement" title="About This Project" id="colophon-heading" />
            {artistStatement.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>
              {initiativeLink.text}{' '}
              <a href={initiativeLink.url} target="_blank" rel="noreferrer">
                {initiativeLink.label}
              </a>
              .
            </p>
            <h3>Works Cited &amp; Research Leads</h3>
            <WorksCited />
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <p>A final project for ENGL 3273: Walt Whitman and New York.</p>
        <div className="footer-wwi">
          <a href={initiativeLink.url} target="_blank" rel="noreferrer">
            <img
              src="/images/wwi-logo.png"
              alt="Walt Whitman Initiative logo"
              width={60}
              height={60}
              loading="lazy"
            />
          </a>
          <p>
            Researched with help from the Walt Whitman Initiative.{' '}
            <a href={initiativeLink.donateUrl} target="_blank" rel="noreferrer">
              Donate to support their work
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
