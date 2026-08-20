import { useState } from 'react'
import { archivePrompt, seedArchiveEntries, type ArchiveEntry } from '../../content/archive'

const STORAGE_KEY = 'ww-archive-entries'
const MAX_ENTRY_LENGTH = 220

function readOwnEntries(): ArchiveEntry[] {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (!stored) return []
  try {
    const parsed = JSON.parse(stored)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

function writeOwnEntries(entries: ArchiveEntry[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
}

function makeId() {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `own-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function ArchiveOfUnfinishedMeetings() {
  const [ownEntries, setOwnEntries] = useState<ArchiveEntry[]>(() => readOwnEntries())
  const [draft, setDraft] = useState('')

  function handleAdd() {
    const text = draft.trim()
    if (!text) return
    const next = [...ownEntries, { id: makeId(), text: text.slice(0, MAX_ENTRY_LENGTH) }]
    setOwnEntries(next)
    writeOwnEntries(next)
    setDraft('')
  }

  function handleDelete(id: string) {
    const next = ownEntries.filter((entry) => entry.id !== id)
    setOwnEntries(next)
    writeOwnEntries(next)
  }

  return (
    <div className="archive">
      <p className="privacy-note">
        Some of the entries below are &ldquo;seed entry&rdquo; &mdash; meaning that they were
        written by the author (or her friends) to demonstrate what the site will look like with real entries. They
        are completely anonymous.
      </p>

      <ul className="archive-entries">
        {seedArchiveEntries.map((entry) => (
          <li key={entry.id} className="archive-entry">
            <p className="archive-entry__text">&ldquo;{entry.text}&rdquo;</p>
            <p className="archive-entry__meta">Seed entry, written for this project</p>
          </li>
        ))}
        {ownEntries.map((entry) => (
          <li key={entry.id} className="archive-entry archive-entry--own">
            <p className="archive-entry__text">&ldquo;{entry.text}&rdquo;</p>
            <div className="archive-entry__own-footer">
              <p className="archive-entry__meta">Your entry, visible only to you</p>
              <button
                type="button"
                className="archive-entry__delete"
                onClick={() => handleDelete(entry.id)}
                aria-label="Delete this entry"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="archive-form">
        <label htmlFor="archive-response" className="reflection-response-label">
          {archivePrompt}
        </label>
        <textarea
          id="archive-response"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={3}
          maxLength={MAX_ENTRY_LENGTH}
          placeholder="One sentence is plenty."
        />
        <div className="reflection-actions">
          <button
            type="button"
            className="button button--primary"
            onClick={handleAdd}
            disabled={!draft.trim()}
          >
            Add to the archive
          </button>
        </div>
      </div>
    </div>
  )
}
