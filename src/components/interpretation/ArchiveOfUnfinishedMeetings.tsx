import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { archivePrompt, seedArchiveEntries, type ArchiveEntry } from '../../content/archive'

const MAX_ENTRY_LENGTH = 220

export function ArchiveOfUnfinishedMeetings() {
  const [sharedEntries, setSharedEntries] = useState<ArchiveEntry[]>([])
  const [draft, setDraft] = useState('')
  const [status, setStatus] = useState<'loading' | 'ready' | 'error' | 'offline'>('loading')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!supabase) {
      setStatus('offline')
      return
    }
    let cancelled = false
    supabase
      .from('unfinished_meetings')
      .select('id, text')
      .order('created_at', { ascending: false })
      .limit(200)
      .then(({ data, error }) => {
        if (cancelled) return
        if (error) {
          setStatus('error')
          return
        }
        setSharedEntries(data ?? [])
        setStatus('ready')
      })
    return () => {
      cancelled = true
    }
  }, [])

  async function handleAdd() {
    const text = draft.trim().slice(0, MAX_ENTRY_LENGTH)
    if (!text || !supabase) return
    setSubmitting(true)
    const { data, error } = await supabase
      .from('unfinished_meetings')
      .insert({ text })
      .select('id, text')
      .single()
    setSubmitting(false)
    if (error) {
      setStatus('error')
      return
    }
    setSharedEntries((prev) => [data, ...prev])
    setDraft('')
  }

  return (
    <div className="archive">
      <p className="privacy-note">
        Some of the entries below are &ldquo;seed entries&rdquo; &mdash; written by the author (or
        her friends) to demonstrate what the site looks like with real entries. Everything else is
        a real entry left by a visitor, stored publicly and anonymously (no account, no name, no
        way to trace it back to you).
      </p>

      {status === 'offline' && (
        <p className="privacy-note">
          The shared archive isn&rsquo;t connected right now, so new entries can&rsquo;t be saved.
        </p>
      )}
      {status === 'error' && (
        <p className="privacy-note">
          Something went wrong loading or saving the shared archive. Please try again shortly.
        </p>
      )}

      <ul className="archive-entries">
        {seedArchiveEntries.map((entry) => (
          <li key={entry.id} className="archive-entry">
            <p className="archive-entry__text">&ldquo;{entry.text}&rdquo;</p>
            <p className="archive-entry__meta">Seed entry, written for this project</p>
          </li>
        ))}
        {sharedEntries.map((entry) => (
          <li key={entry.id} className="archive-entry">
            <p className="archive-entry__text">&ldquo;{entry.text}&rdquo;</p>
            <p className="archive-entry__meta">Left by a visitor</p>
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
          disabled={status === 'offline'}
        />
        <div className="reflection-actions">
          <button
            type="button"
            className="button button--primary"
            onClick={handleAdd}
            disabled={!draft.trim() || submitting || status === 'offline'}
          >
            {submitting ? 'Adding…' : 'Add to the archive'}
          </button>
        </div>
      </div>
    </div>
  )
}
